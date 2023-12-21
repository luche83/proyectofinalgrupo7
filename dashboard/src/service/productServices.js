import { UseFetch } from "../hooks/UseFetch"

export const totalProductInDB = async () => {
    try {

        return await UseFetch('dashboard/products/count')
        
    } catch (error) {
        console.error
    }
}

export const getAllProducts = async () => {
    try {

        return await UseFetch('products')
        
    } catch (error) {
        console.error
    }
}

export const createProduct = async (formValues) => {
    try {

        return await UseFetch(`dashboard/product`, "POST", formValues);
        
    } catch (error) {
        console.error
    }
}

export const updateProduct = async (formValues) => {
    try {

        return await UseFetch(`dashboard/product/${formValues.id}`, 'PUT', formValues);
        
    } catch (error) {
        console.error
    }
}

export const deleteProduct = async (id) => {
    try {

        return await UseFetch(`dashboard/product/${id}`, "DELETE", null);
        
    } catch (error) {
        console.error
    }
}