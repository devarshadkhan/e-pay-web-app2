import {createSlice} from "@reduxjs/toolkit"

const initialState = {
    filterProduct:""
}

export const SearchProductsbyfilter = createSlice({
    name:"searchProducts",
    initialState,
    reducers:{
        setSearchProduct: (state,action) => {
            state.filterProduct = action.payload
        }
    }
})

export const {setSearchProduct} = SearchProductsbyfilter.actions

export default SearchProductsbyfilter.reducer