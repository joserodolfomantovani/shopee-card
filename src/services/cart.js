async function addItem(userCart,item){
  userCart.push(item)
}

async function deleteItem(userCart, name){
const index = userCart.findIndex((item) => item.name === name)
if(index !== -1){
    userCart.splice(index, 1)
}
}

async function removeItem(userCart, index) {
    
}

async function calculateTotal(userCart) {
   const result = userCart.reduce((total, item) => total + item.subtotal(), 0)
   console.log(`\n🎁 Total: ${result}`);
   
}
async function displaycart(userCart) {
  console.log("\n Shoppe cart list");
  userCart.forEach((item, index) => {
    console.log(`${index+1}. ${item.name} - R$ ${item.price}  | ${item.quantity}x | Subtotal =  ${item.subtotal()}`);
    
    
  });
  
}

export{
    addItem,
    calculateTotal,
    deleteItem,
    removeItem,
    displaycart
}