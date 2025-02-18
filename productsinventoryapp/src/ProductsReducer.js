const initialState = {
  products: [
    {
      id: 1,
      name: "Oats",
      unit: "kg",
      category: "Finished",
      expiry: "2025-10-20",
      totalCost: 500,
      listOfMaterials: ["wheat", "seeds", "salt"],
    },
    {
      id: 2,
      name: "Breads",
      unit: "gm",
      category: "Semi Finished",
      expiry: "2025-04-10",
      totalCost: 200,
      listOfMaterials: ["wheat", "maida", "salt"],
    },
    {
      id: 3,
      name: "Maggie",
      unit: "kg",
      category: "Semi Finished",
      expiry: "2025-05-10",
      totalCost: 350,
      listOfMaterials: ["maida", "salt", "peppers"],
    },
    {
      id: 4,
      name: "Rasana Drink",
      unit: "ml",
      category: "Subsidiary",
      expiry: "2025-02-10",
      totalCost: 30,
      listOfMaterials: ["fruit juice powder", "sugar"],
    },
  ],
  rawMaterials: [
    {
      materialId: 1,
      name: "wheat",
      unit: "kg",
      quantity: 5,
      price: 50,
      totalPrice: 250,
      taxAmount: 20,
      totalAmount: 270,
    },
    {
      materialId: 2,
      name: "seeds",
      unit: "kg",
      quantity: 2,
      price: 30,
      totalPrice: 60,
      taxAmount: 10,
      totalAmount: 70,
    },
    {
      materialId: 3,
      name: "salt",
      unit: "kg",
      quantity: 3,
      price: 25,
      totalPrice: 75,
      taxAmount: 5,
      totalAmount: 80,
    },
    {
      materialId: 4,
      name: "maida",
      unit: "kg",
      quantity: 4,
      price: 35,
      totalPrice: 140,
      taxAmount: 20,
      totalAmount: 160,
    },
    {
      materialId: 5,
      name: "peppers",
      unit: "gm",
      quantity: 2,
      price: 15,
      totalPrice: 30,
      taxAmount: 4,
      totalAmount: 34,
    },
    {
      materialId: 6,
      name: "fruit juice powder",
      unit: "gm",
      quantity: 3,
      price: 20,
      totalPrice: 60,
      taxAmount: 10,
      totalAmount: 70,
    },
    {
      materialId: 7,
      name: "sugar",
      unit: "kg",
      quantity: 5,
      price: 50,
      totalPrice: 250,
      taxAmount: 40,
      totalAmount: 290,
    },
  ]
};

const ProductsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_PRODUCTS_LIST":
      return state;

    case "GET_PRODUCT":
      const [product] = state.products?.filter((product,ind) => product.id == action.payload);
      return {...state,product:product};

    case "ADD_PRODUCT":
      return {...state,products:[...state.products,{id:new Date().getTime(),...action.payload}]}

    case "UPDATE_PRODUCT":
      const {id,data} = action.payload;
      const products = state.products?.filter((product,ind) => product.id == action.payload.id);
      return {...state,products:[...products,{id:id,...data}]}

    default:
      return state;
  }
};

export default ProductsReducer;
