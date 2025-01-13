"use server";
import { GoogleGenerativeAI } from "@google/generative-ai";

import prisma from "@/lib/prisma";
import { currentUser } from "@clerk/nextjs/server";
import { z } from "zod";
// import { revalidatePath } from "next/cache";



const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });


export const generateForm = async (prevState: unknown, formData: FormData) => {
  try {
    const user = await currentUser();
    if (!user) {
      return { success: false, message: "User not found" };
    }

    const schema = z.object({
      description: z.string().min(1, "Description is required"),
    });

    const result = schema.safeParse({
      description: formData.get("description") as string,
    });

    if (!result.success) {
      return { success: false, message: "Invalid form data" };
    }

    const description = result.data.description;
    //request to gemini to generate form

    const prompt =
      "Create a json form with the following fields: title, fields(if any field include options then keep it inside array not object), button";

    const completition = await model.generateContent({
      contents: [
        {
          role: "user",
          parts: [
            {
              text: description+prompt,
            },
          ],
        },
      ],
      generationConfig: {
        maxOutputTokens: 1000,
        temperature: 0.1,
      },
    });

 


    let formContent = completition.response.text();
    formContent = formContent.replace(/`/g, '').trim();

    const jsonStartIndex = formContent.indexOf("{");
    formContent = formContent.substring(jsonStartIndex);
    if (!formContent) {
      return { success: false, message: "Failed to generate form content" };
    }
  

    let formjsonData;
    try {
      formjsonData = formContent;
    } catch (error) {
      console.log("Error parsing json ", error);
      return {
        success: false,
        message: "Generated form content is not valid json",
      };
    }

    const form = prisma.form.create({
      data: {
        ownerId: user.id,
        content: formjsonData,
      },
    });

    // revalidatePath("/dashboard/forms")

    return {
      success: true,
      message: "Form generated successfully",
      data: form,
    };
  } catch (error) {
    console.log("Error while generating form", error);
    return {
      success: false,
      message: "An error occured while generating form",
    };
  }
};
