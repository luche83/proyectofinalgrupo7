import { getAllCategory } from "../../service/categoryServices"
import { totalProductInDB } from "../../service/productServices";

export const loader = async () => {
    try {
        const {data : categories} = await getAllCategory();

        const {data : totalProducts} = await totalProductInDB();
        
        return {
            categories,
            totalProducts
        }

    } catch (error) {
        console.error
    }
}