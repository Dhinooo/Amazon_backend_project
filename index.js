const { PrismaClient } = require('@prisma/client');
const express = require("express");


//Create a Instand of HTTTP server
const app = express();

app.use(express.json());

// Prisma 
const prisma = new PrismaClient()


app.get("/", (req, res) => {
    //1.getting from frontend

    //2.DB logic

    //3.send data to frontend
    res.send("API's Working")
})

// API 1.GET - http://localhost:3001/products
app.get("/products", async (req, res) => {
    // 1. Getting data frontend
     const data = req.body

    // 2. DB Logic
    const db_data = await prisma.product.findMany()

    // 3. Send data to Frontend
    res.send(db_data)

});

// API 2 . GET - http://localhost:3001/products//:product_id
app.get("/product/:product_id", async (req, res) => {
    // 1. Getting data frontend
    const data = req.params

    // 2. DB Logic
    const db_data = await prisma.product.findUnique({
        where: {
            product_id: data.product_id
        }
    })

    // 3. Send data to Frontend
    res.send(db_data)

});


// API 3 . POST - http://localhost:3001/products
app.post("/products", async (req, res) => {
    // 1. Getting data Frontend
    const data = req.body

    // 2. DB Logic
    const new_product = await prisma.product.create({
        data: data
    })


    // 3. Send data to Frotend
    res.send(new_product)

});

// API 4 . PUT - http://localhost:3001/products
app.put("/products", async (req, res) => {
    // 1. Getting data frontend
    const data = req.body

    // 2. DB Logic
    const updated_product = await prisma.product.update({
        data: data,
        where: {
            product_id: data.product_id
        }
    })

    // 3. Send data to Frontend
    res.send(updated_product)
});

// API 5 . DELETE - http://localhost:3001/products
app.delete("/products", async (req, res) => {
    // 1. Getting data frontend
    const data = req.body

    // 2. DB  Logic
    await prisma.product.delete({
        where: {
            product_id: data.product_id 
        }
    })

    // 3. Send data to frontend 
    res.send("Product Deleted Successfully")

});

app.listen(3001)