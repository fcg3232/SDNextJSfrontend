import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { url, setHeaders } from "./api";
import { toast } from "react-toastify";

const initialState = {
    datas: [],
    resetStatus: null,
};

export const resetPassword = createAsyncThunk(
    "reset/resetPassword",
    async (values, { rejectWithValue }) => {
        try {
            const tokens = await axios.post(`${url}/ChangePassword`,
                // email: values.email,
                // code: values.code,
                // password: values.password,
                values,
                setHeaders()
            );
            return tokens.data;
        } catch (error) {
            console.log(error.response);
            toast.error(error.response?.data, {
                position: "bottom-left",
            });
            return rejectWithValue(error.response.data);
        }
    }
);


const resetPasswordSlice = createSlice({
    name: "resetPassword",
    initialState,
    reducers: {},
    extraReducers: {
        [resetPassword.pending]: (state, action) => {
            state.resetStatus = "pending";
        },
        [resetPassword.fulfilled]: (state, action) => {
            state.datas.push(action.payload);
            state.resetStatus = "success";
            toast.success("Password Reset Successfully", {
                position: "bottom-left",
            });
        },
        [resetPassword.rejected]: (state, action) => {
            state.resetStatus = "rejected";
        },
    },
});

export default resetPasswordSlice.reducer;
