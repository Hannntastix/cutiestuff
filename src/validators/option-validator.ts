// bg-blue-950 border-blue-950
// bg-blue-100 border-blue-100
// bg-zinc-900 border-zinc-900
// bg-red-100 border-red-100
// bg-green-200 border-green-200
// bg-yellow-100 border-yellow-100
// bg-gray-800 border-gray-800

import { PRODUCT_PRICES } from "@/config/products"

export const COLORS = [
    {label: "Black", value: "black", tw: "zinc-900"}, 
    {label: "Dark Gray", value: "gray", tw: "gray-800"}, 
    {
        label: "Velvet Blue", 
        value: "darkblue", 
        tw: "blue-950",
    },
    {
        label: "Sky Blue", 
        value: "blue", 
        tw: "blue-100",
    },
    {
        label: "Natural Pink", value: "red", tw: "red-100",
    },
    {
        label: "Leaf Green", value: "green", tw: "green-200",
    },
    {
        label: "Yellow", value: "yellow", tw: "yellow-100",
    },
] as const

export const MODELS = {
    name: "models",
    options: [
        {
            label: "iPhone X",
            value: "iphonex",
        },
        {
            label: "iPhone XR",
            value: "iphonexr",
        },
        {
            label: "iPhone 11",
            value: "iphone11",
        },
        {
            label: "iPhone 11 Pro",
            value: "iphone11pro",
        },
        {
            label: "iPhone 11 Pro Max",
            value: "iphone11promax",
        },
        {
            label: "iPhone 12",
            value: "iphone12",
        },
        {
            label: "iPhone 12 Pro",
            value: "iphone12pro",
        },
        {
            label: "iPhone 12 Pro Max",
            value: "iphone12promax",
        },
        {
            label: "iPhone 13",
            value: "iphone13",
        },
        {
            label: "iPhone 13 Pro",
            value: "iphone13pro",
        },
        {
            label: "iPhone 13 Pro Max",
            value: "iphone13promax",
        },
        {
            label: "iPhone 14",
            value: "iphone14",
        },
        {
            label: "iPhone 14 Pro",
            value: "iphone14pro",
        },
        {
            label: "iPhone 14 Pro Max",
            value: "iphone14promax",
        },
        {
            label: "iPhone 15",
            value: "iphone15",
        },
        {
            label: "iPhone 15 Pro",
            value: "iphone15pro",
        },
        {
            label: "iPhone 15 Pro Max",
            value: "iphone15promax",
        },
    ]
} as const

export const MATERIALS = {
    name: "material",
    options: [
        {
            label: "Silicone",
            value: "silicone",
            description: "Premium, classy, cute one",
            price: PRODUCT_PRICES.material.silicone,
        },
        {
            label: "Soft Polycarbonate",
            value: "polycarbonate",
            description: "Scratch-resistant coating",
            price: PRODUCT_PRICES.material.polycarbonate,
        },
        {
            label: "Soft Gel",
            value: "gel",
            description: "Resistant to yellowing",
            price: PRODUCT_PRICES.material.gel,
        },
    ],
} as const

export const FINISHES = {
    name: "finish",
    options: [
        {
            label: "Glossy Finish",
            value: "glossy",
            description: "Elegant and smooth grippy finish",
            price: PRODUCT_PRICES.finish.smooth,
        },
        {
            label: "Matte Finish",
            value: "matte",
            description: "Cool and classy matte finish",
            price: PRODUCT_PRICES.finish.textured,
        },
    ],
} as const