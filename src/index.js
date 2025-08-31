import { addItem, calculateTotal, deleteItem, displaycart, removeItem } from "./services/cart.js";
import createItem from "./services/item.js"

const myCart = []
const myWhishList = []

console.log("Welcome to the your Shopee Cart !");

const item1 = await createItem("hotwheels ferrari", 20.99, 1)
const item2 =  await createItem("hotwheels lamborghini", 39.99, 3)

await addItem(myCart, item1)
await addItem(myCart, item2)
///await addItem(myWhishList, item2)

await removeItem(myCart, item2)
await displaycart(myCart)
//await displaycart(myWhishList)
// await deleteItem(myCart, item2.name)
// await deleteItem(myCart, item1.name)

console.log("Shopee Cart Total is ");
await calculateTotal(myCart)





