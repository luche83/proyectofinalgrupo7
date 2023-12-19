import { UseFetch } from "../hooks/UseFetch"

export const getAllSection = async () => {
    try {
       
        return await UseFetch('dashboard/sections')

    } catch (error) {
        console.error
    }
}