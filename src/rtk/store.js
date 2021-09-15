import { configureStore } from "@reduxjs/toolkit";
import styleSlice from './slices/styles'
const store = configureStore({
    reducer: {
        styles: styleSlice
    }
})

export default store;