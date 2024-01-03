import {configureStore} from "@reduxjs/toolkit"
import  itemsSlice  from "../slices/FilterSlice"
import  SearchProductsbyfilter  from "../slices/SearchProductbyfilter"
export const store =  configureStore  ({
    reducer:{
        productFilter:itemsSlice,
        searchItems:SearchProductsbyfilter
    }
})
