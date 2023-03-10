import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"

import { IProduct } from "../../types"

const URL = "https://fakestoreapi.com/products/"

export const fetchProducts = createAsyncThunk<IProduct[], undefined, { rejectValue: string }>(
	"catalog/fetchProducts",
	async function (_, { rejectWithValue }) {
		const response = await axios.get(URL)
		if (response.status !== 200) {
			return rejectWithValue("Server error!")
		}
		return response.data
	}
)

interface ICatalogState {
	products: IProduct[]
	categories: string[]
	sort: string
	filter: string | null
	status: string | null
	error: string | null | undefined
}

const initialState: ICatalogState = {
	products: [],
	categories: [],
	sort: "default",
	filter: null,
	status: null,
	error: null,
}

const catalogSlice = createSlice({
	name: "catalog",
	initialState,
	reducers: {
		setSort(state, actions: PayloadAction<string>) {
			state.sort = actions.payload
		},
		setFilter(state, actions: PayloadAction<string | null>) {
			state.filter = actions.payload
		},
	},
	extraReducers: builder => {
		builder.addCase(fetchProducts.pending, state => {
			state.status = "loading"
		})
		builder.addCase(fetchProducts.fulfilled, (state, actions) => {
			state.products = actions.payload
			state.categories = actions.payload.reduce((acc: string[], cur) => {
				return !acc.includes(cur.category) && cur.category.length ? [...acc, cur.category] : acc
			}, [])
			state.status = "success"
		})
		builder.addCase(fetchProducts.rejected, (state, actions) => {
			state.error = actions.payload
			state.status = "error"
		})
	},
})

export default catalogSlice.reducer
export const { setSort, setFilter } = catalogSlice.actions
