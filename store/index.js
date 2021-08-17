export const state = () => ({
        cartData: [],
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
        products: [{
            id: 2,
            name: "Comfycat Max Self-Cleaning Litter Box",
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

    setBuyType(state, type) {
        state.buyType = type;
    },

    removeItem(state, id) {
        state.cartData = state.cartData.filter(function(product) {
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
