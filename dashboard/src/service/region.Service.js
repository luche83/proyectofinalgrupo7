import { UseFetch } from "../hooks/UseFetch"

export const getAllRegion = async () => {
    try {
       
        return await UseFetch('dashboard/regions')

    } catch (error) {
        console.error
    }
}