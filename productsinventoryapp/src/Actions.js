export const getProductsList = () => {

    return {type:"GET_PRODUCTS_LIST"}
}

export const addProduct = (data) => {
    return {type:"ADD_PRODUCT",payload:data}
}

export const getProduct = (id) => {
    return {type:"GET_PRODUCT",payload:id}
}

export const updateProduct = (id,data) => {
    return {type:"UPDATE_PRODUCT",payload:{id,data}}
}