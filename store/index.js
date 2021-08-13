export const state = () => ({
    cartData: [],
    billingData: [],
    subTotal:0,
    products: [
      {
        id: 1,
        name: "COMFYCAT ZEN SELF-CLEANING LITTER BOX",
        description: "Your scooping days are over. Comfycat Zen is a fully automatic, self-cleaning litter box for cats. It is safe & quiet and has great odour control.",
        price: "3299",
        cart: false,
        qty: 0,
        category: "zen",
        slug: "comfycat-zen-self-cleaning-litter-box",
        images: "product1.png"
      },
      {
        id: 2,
        name: "COMFYCAT MAX SELF-CLEANING LITTER BOX",
        description: "Your scooping days are over. Comfycat Zen is a fully automatic, self-cleaning litter box for cats. It is safe & quiet and has great odour control.",
        price: "499",
        cart: false,
        qty: 0,
        slug: "comfycat-max-self-cleaning-litter-box",
        category: "max",
        images: "eo3_1.png"
      }]
  }

)


export const getters = {
  getProductById: (state) => (id) => {
    return state.products.find(product => product.slug == id)
  },
  getRecommendProductById: (state) => (id) => {
    return state.products.find(product => product.slug != id)
  }
}
export const mutations = {
  addItem(state, id) {
    let item = state.products.find(product => product.id == id)
    if (!state.cartData.includes(item)) {
      state.subTotal+=parseInt(item.price)
      state.cartData.push(item)
    }
  },
  removeItem(state, id) {
    state.cartData = state.cartData.filter(function (product) {
      return product.id !== id;
    });
  },
  saveBillingInfo(state,data){
    state.billingData = data;
    console.log(state.billingData)
  }
}
