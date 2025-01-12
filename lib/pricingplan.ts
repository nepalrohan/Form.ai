 export type PricingPlan = {
    level:string;
    price:string;
    services:string[]
    type:string;
}


export const pricingPlan:PricingPlan[] = [
    {   type:"free",
        level: "Free",
        price: "$0/month",
        services: [
            "# Free Credits",
            "Basic Support",
            "Limited Features",
            "Community Access"
        ]
    },
    {   type:"pro",
        level: "Pro",
        price: "$19/month",
        services: [
            "Unlimited Form Generations",
            "Priority Support",
            "Advanced Features",
            "Analytics Dashboard",
            "Integration with Popular Platforms"
        ]
    },
    {   type:'pro',
        level: "Enterprise",
        price: "Custom Pricing",
        services: [
            "All Pro Features",
            "Dedicated Account Manager",
            "Custom Integrations",
            "Team Collaboration Tools",
            "24/7 Premium Support",
            "Onboarding Assistance"
        ]
    }
];
