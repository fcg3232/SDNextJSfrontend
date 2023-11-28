import { configureStore } from "@reduxjs/toolkit";
import parentReducer from "./parentReducer";
import {productsApi} from "../slices/productsApi";
import  {personaldbApi}  from "../slices/personalApi";
import {useSelector ,useDispatch} from 'react-redux';
import { blogApi } from "../slices/blogApi";
import {berbixApi} from "../slices/berbixApi";
import { resetPasswordApi } from "../slices/resetPasswordApi";
import { otpGenerateApi } from "../slices/otpGenerateApi";
import { usersApi } from "../slices/UsersApi";


const store = configureStore({
    reducer: parentReducer,
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({serializableCheck: false}).concat(productsApi.middleware).concat(personaldbApi.middleware).concat(blogApi.middleware).concat(berbixApi.middleware).concat(otpGenerateApi.middleware).concat(resetPasswordApi.middleware).concat(usersApi.middleware),

})

export const useAppDispatch = () => useDispatch();
export const useAppSelector = useSelector;
export default store;