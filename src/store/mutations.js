export default {
  addCounter(state, payload){
    payload.count++
  },
  addToCart(state , payload){
    payload.count = 1
    payload.flag = false
    state.cartList.push(payload)
  }
}