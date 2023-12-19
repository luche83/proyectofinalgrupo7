import { UseFetch } from "../hooks/UseFetch"

export const getAllCategory = async () => {
    try {
       
        return await UseFetch('categories')

    } catch (error) {
        console.error
    }
}