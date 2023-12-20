import { UseFetch } from "../hooks/UseFetch"

export const getAllRegion = async () => {
    try {
       
        return await UseFetch('regions')

    } catch (error) {
        console.error
    }
}