import axios from "axios"

const URL = "https://fakestoreapi.com/products/"

export const fetchProductInfo = async (id: string | undefined) => {
	const response = await axios.get(`${URL}${id}`)
	return response.data
}
