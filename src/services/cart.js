async function addItem(userCart,item){
  userCart.push(item)
}

async function deleteItem(userCart, name){

}

async function removeItem(userCart, index) {
    
}

async function calculateTotal(userCart) {
    return userCart.reduce((total, item) => total + item.subTotal(), 0)
}

export{
    addItem,
    calculateTotal,
    deleteItem,
    removeItem
}