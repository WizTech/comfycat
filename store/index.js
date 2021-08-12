export const state = () => ({
    products: [
      {
        id: 1,
        name: "COMFYCAT ZEN SELF-CLEANING LITTER BOX",
        description: "Your scooping days are over. Comfycat Zen is a fully automatic, self-cleaning litter box for cats. It is safe & quiet and has great odour control.",
        price: "3299",
        cart: false,
        qty: 0,
        category: "zen",
        images: "product1.png"
      },
      {
        id: 2,
        name: "COMFYCAT MAX SELF-CLEANING LITTER BOX",
        description: "Your scooping days are over. Comfycat Zen is a fully automatic, self-cleaning litter box for cats. It is safe & quiet and has great odour control.",
        price: "499",
        cart: false,
        qty: 0,
        category: "max",
        images: "eo3_1.png"
      }]
  }

)

export const getters = {
  getProductById: (state) => (id) => {
    return state.products.find(product => product.id == id)
  }
}
