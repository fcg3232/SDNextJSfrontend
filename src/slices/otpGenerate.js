import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { url, setHeaders } from "./api";
import { toast } from "react-toastify";

const initialState = {
    code: "",
    otpStatus: null,
};

export const OtpGenerated = createAsyncThunk(
    "OtpGenerate/OtpGenerated",
    async (values, { rejectWithValue }) => {
        try {
            const tokens = await axios.post(`${url}/sendemail`,
                {
                    email: values.email,
                },
                // values
                // setHeaders()
            );
            console.log(tokens.data);
            return tokens.data;
        } catch (error) {
            console.log(error);
            toast.error(error.tokens?.data, {
                position: "bottom-left",
            });
            return rejectWithValue(error.tokens.data);
        }
    }
);


const otpGenerateSlice = createSlice({
    name: "sendemail",
    initialState,
    reducers: {},
    extraReducers: {
        [OtpGenerated.pending]: (state, action) => {
            state.otpStatus = "pending";
        },
        [OtpGenerated.fulfilled]: (state, action) => {
            state.code = action.payload;
            state.otpStatus = "success";
            toast.success("Please check your email...", {
                position: "bottom-left",
            });
        },
        [OtpGenerated.rejected]: (state, action) => {
            state.otpStatus = "rejected";
        },
    },
});

// export default otpGenerateSlice.reducer;
export const otpGenerateReducer = otpGenerateSlice.reducer;
