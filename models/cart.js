function Cart(oldCart) {
  this.items = oldCart ? oldCart.items : {}
  this.totalQty = oldCart.totalQty || 0
  this.totalPrice = oldCart.totalPrice || 0

  this.addItem = (item) => {
    if (!this.items.hasOwnProperty(item._id)) {
      let newItem = item.toObject(),
        newAttributes = {
          amount: item.price,
          qty: 1
        }
      this.items[item._id] = {}
      Object.assign(this.items[item._id], newItem, newAttributes)
    } else {
      this.items[item._id].qty++
      this.items[item._id].amount = this.items[item._id].qty * item.price
    }
    this.totalQty = 0
    this.totalPrice = 0
    for (const item in this.items) {
      if (this.items.hasOwnProperty(item)) {
        const amount = this.items[item].amount
        const qty = this.items[item].qty
        this.totalPrice += amount
        this.totalQty += qty
      }
    }
  }
}


Cart.prototype.generateArray = () => {
  let arr = []
  for (const id in this.items) {
    if (this.items.hasOwnProperty(id)) {
      arr.push(this.items[id])
    }
  }
}

module.exports = Cart