
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

const products = [
    {
        product_id: "P101",
        title: "iPhone 15",
        image_url: "iphone15.jpg",
        star: "4.8",
        discount_prise: 5000,
        original_prise: 65000,
        is_bestselling: true,
        delivery_data: new Date("2026-11-25")
    },
    {
        product_id: "P102",
        title: "Samsung Galaxy S24",
        image_url: "samsung_s24.jpg",
        star: "4.7",
        discount_prise: 7000,
        original_prise: 75000,
        is_bestselling: true,
        delivery_data: new Date("2026-11-26")
    },
    {
        product_id: "P103",
        title: "OnePlus 12",
        image_url: "oneplus12.jpg",
        star: "4.6",
        discount_prise: 6000,
        original_prise: 58000,
        is_bestselling: false,
        delivery_data: new Date("2026-11-27")
    },
    {
        product_id: "P104",
        title: "Sony Wireless Headphones",
        image_url: "sony_headphones.jpg",
        star: "4.5",
        discount_prise: 2000,
        original_prise: 12000,
        is_bestselling: true,
        delivery_data: new Date("2026-11-28")
    },
    {
        product_id: "P105",
        title: "Apple MacBook Air M3",
        image_url: "macbook_air.jpg",
        star: "4.9",
        discount_prise: 10000,
        original_prise: 110000,
        is_bestselling: true,
        delivery_data: new Date("2026-11-29")
    },
    {
        product_id: "P106",
        title: "HP Pavilion Laptop",
        image_url: "hp_pavilion.jpg",
        star: "4.3",
        discount_prise: 8000,
        original_prise: 72000,
        is_bestselling: false,
        delivery_data: new Date("2026-11-30")
    },
    {
        product_id: "P107",
        title: "iPad Air",
        image_url: "ipad_air.jpg",
        star: "4.7",
        discount_prise: 4000,
        original_prise: 55000,
        is_bestselling: true,
        delivery_data: new Date("2026-12-01")
    },
    {
        product_id: "P108",
        title: "boAt Smart Watch",
        image_url: "boat_watch.jpg",
        star: "4.2",
        discount_prise: 1500,
        original_prise: 5000,
        is_bestselling: false,
        delivery_data: new Date("2026-12-02")
    },
    {
        product_id: "P109",
        title: "Logitech Wireless Mouse",
        image_url: "logitech_mouse.jpg",
        star: "4.4",
        discount_prise: 500,
        original_prise: 2000,
        is_bestselling: false,
        delivery_data: new Date("2026-12-03")
    },
    {
        product_id: "P110",
        title: "Samsung 4K Smart TV",
        image_url: "samsung_tv.jpg",
        star: "4.6",
        discount_prise: 12000,
        original_prise: 85000,
        is_bestselling: true,
        delivery_data: new Date("2026-12-04")
    }
];

async function main() {
    const result = await prisma.product.createMany({
        data: products,
        skipDuplicates: true
    });

    console.log(`${result.count} products inserted successfully!`);
}

main()
    .catch((error) => {
        console.error("Seeding failed:", error);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
