import { addItem, calculateTotal } from "./services/cart.js";
import createItem from "./services/item.js"

const myCart = []
const myWhishList = []

console.log("Welcome to the your Shopee Cart !");

const item1 = await createItem("hotwheels ferrari", 20.99, 1)
const item2 =  await createItem("hotwheels lamborghini", 39.99, 3)

await addItem(myCart, item1)
await addItem(myWhishList, item2)

console.log("Shopee Cart Total is ");
await calculateTotal(myCart)



