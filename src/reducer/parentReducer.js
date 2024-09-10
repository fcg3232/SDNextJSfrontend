import { combineReducers } from "@reduxjs/toolkit";
import { web3Reducer } from "../slices/web3ContractSlice";
import productsReducer from "../slices/productsSlice";
import cartReducer from "../slices/cartSlice";
import authReducer from "../slices/authSlice";
import { productsApi } from "../slices/productsApi";
import UsersSlice from "../slices/UsersSlice";
import ordersSlice from "../slices/ordersSlice";
import personaldbReducer from "../slices/personalSlice";
import { personaldbApi } from "../slices/personalApi";
import propertiesdbReducer from "../slices/propertySlice";
import { propertiesdbApi } from "../slices/propertyApi";
import { adminReducers } from "../slices/adminEventSlice";
import { propDetailReducers } from "../slices/detailofPropertySlice";
import { filterReducers } from "../slices/filter";
import { propLLCApi } from "../slices/llcApi";
import propLLCReducer from "../slices/llcSlice";
import { blogApi } from "../slices/blogApi";
import { blogdbReducer } from "../slices/blogSlice";
import { propAddressReducers } from "../slices/propertyAddressSlice";
import { otpGenerateApi } from "../slices/otpGenerateApi";
import {otpGenerateReducer} from "../slices/otpGenerate";
import resetPasswordReducer from "../slices/resetPassword";
import { resetPasswordApi } from "../slices/resetPasswordApi";
// import { usersApi } from "../slices/UsersApi";
import { buyersOrdrApi } from "../slices/buyersOrderAPI";
import { buyerOrderReducer } from "../slices/buyersSlice";
import { sellersOrdrApi } from "../slices/sellersApi";
import { sellersOrderReducer } from "../slices/sellersSlice";
import { limitOrderOfferReducer } from "../slices/LimitOrderSlice";
import { limitOrderApi } from "../slices/limitOrderApi";

const parentReducer = combineReducers({
    resetPassword: resetPasswordReducer,
    sendemail: otpGenerateReducer,
    web3Connect: web3Reducer,
    PropAddress: propAddressReducers,
    AdminAddress: adminReducers,
    DetailsofProperty: propDetailReducers,
    FiterProperty: filterReducers,
    products: productsReducer,
    users: UsersSlice,
    orders: ordersSlice,
    cart: cartReducer,
    auth: authReducer,
    personaldb: personaldbReducer,
    propertiesdb: propertiesdbReducer,
    propLLC: propLLCReducer,
    blogdb: blogdbReducer,
    buyerOrder: buyerOrderReducer,
    sellerOrder: sellersOrderReducer,
    orderMatching: limitOrderOfferReducer,
    [productsApi.reducerPath]: productsApi.reducer,
    [personaldbApi.reducerPath]: personaldbApi.reducer,
    [propertiesdbApi.reducerPath]: propertiesdbApi.reducer,
    [propLLCApi.reducerPath]: propLLCApi.reducer,
    [blogApi.reducerPath]: blogApi.reducer,
    [otpGenerateApi.reducerPath]: otpGenerateApi.reducer,
    [resetPasswordApi.reducerPath]: resetPasswordApi.reducer,
    [buyersOrdrApi.reducerPath]: buyersOrdrApi.reducer,
    [sellersOrdrApi.reducerPath]: sellersOrdrApi.reducer,
    [limitOrderApi.reducerPath]: limitOrderApi.reducer,
    // [usersApi.reducerPath]: usersApi.reducer,
})

export default parentReducer;