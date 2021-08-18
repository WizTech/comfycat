export const state = () => ({
    cartData: [],
    ctModalOpen: true,
    newUser: false,
    buyType: '',
    billingData: {
      first_name: '',
      last_name: '',
      email: '',
      password: '',
      c_password: '',
      phone: '',
      country: '',
      address: '',
      apartment: '',
      city: '',
      state: '',
      zip: '',
      shipping_method: ''
    },
    subTotal: 0,
    products: [
      {
        id: 1,
        name: "100% Natural Corn & Tofu Litter",
        description: "$25 per month per Cat. 10lbs of 100% Natural Litter",
        price: "25",
        cart: false,
        qty: 1,
        category: "tofu",
        slug: "tofu-litter",
        images: "cat_litter3.png"
      },
      {
        id: 2,
        name: "Comfycat Max Self-Cleaning Litter Box",
        description: "Your scooping days are over. Comfycat Zen is a fully automatic, self-cleaning litter box for cats. It is safe & quiet and has great odour control.",
        price: "499",
        cart: false,
        qty: 1,
        slug: "comfycat-max-self-cleaning-litter-box",
        category: "max",
        images: "selfClean.png"
      }]
  }

)


export const getters = {
  getProductById: (state) => (id) => {
    return state.products.find(product => product.slug == id)
  },
  chkNewUser: (state) => {
    return state.newUser
  },
  getBillingData: (state) => {
    return state.billingData
  },
  getRecommendProductById: (state) => (id) => {
    return state.products.find(product => product.id != id)
  },
  getBuyType: (state) => {
    return state.buyType
  }
}
export const mutations = {
  addItem(state, id) {
    let item = state.products.find(product => product.id == id)

    if (!state.cartData.includes(item)) {
      state.subTotal += parseInt(item.price)
      state.cartData.push(item)
    }
  },
  addQty(state, id) {
    let item = state.products.find(product => product.id == id)
    if (state.cartData.includes(item)) {
      item.qty+=1;
    }else{
      item.qty+=1;
      state.subTotal += parseInt(item.price)
      state.cartData.push(item)
    }
  },
  reduceQty(state, id) {
    item.qty=1;
    let item = state.products.find(product => product.id == id)
    if (state.cartData.includes(item) && item.qty !== 0) {
      item.qty-=1;
    }else{
      this.removeItem(state,id)
    }
  },

  setBuyType(state, type) {
    state.buyType = type;
  },

  hideCTModal(state) {
    state.ctModalOpen = false;
   // alert(state.ctModalOpen)
  },

  removeItem(state, id) {
    state.cartData = state.cartData.filter(function (product) {
      return product.id !== id;
    });
  },

  saveBillingInfo(state, data) {
    state.billingData = data;
  },

  setNewUser(state, bool = true) {
    return state.newUser = true;
  }
}
