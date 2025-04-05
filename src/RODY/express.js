import express from "express";
import {z} from "zod";



const cartItemSchema = z.object({
 id: z.number().int(),
 name: z.string .max(20),
 quantity: z.number().int().lt(100),
 price: z.number().gt(0),


})
//1.create new express application (object).

const app = express()

app.use(express.json())
// defin index route 
let cart = [
    { id: 1, name: "APPLE", quantity: 2, price: 1.5 },
    { id: 2, name: "BANANA", quantity: 3, price: 1.2 }
];

app.get("/cart",(req,res)=>{
    res.send(cart)
});
app.post("/cart",(req,res)=>{
  try{
    const item = cartItemSchema.parse(req.body);

    cart.push(item)
    res.status(201)
    res.send(item)
  }catch (error){
    if(error instanceof z.ZodError){
        res.status(400)
        res.send({error: error.errors})
    }
  }
    
});

app.delete("/cart/:id",(req,res)=>{
cart =cart.filter((value)=>{
    return value.id != req.params.id;
});

   console.log(cart)
    res.send(cart)
})

app.put("/cart/:id",(req,res)=>{
       const item =cart.filter((value)=>{
      return value.id ==  req.params.id
        });
    if(item != []){
item[0].name =req.body.name;
    }
      
        res.send(cart)
    })
    






app.listen(3000,()=>{
    console.log("App is running on port:3000...")
})
