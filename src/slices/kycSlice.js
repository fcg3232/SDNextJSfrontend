import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { setHeaders, url } from "./api";

const initialState = {
  formResponse: null,
  status: "idle",
  error: null,
};

export const fetchCandidateId = createAsyncThunk(
  "form/fetchCandidateId",
  async (_, { rejectWithValue, getState }) => {
    try {
      const globalState = getState();
      const response = await axios.post(
        "https://kyc-api.amlbot.com/forms/8b32344e08c0454c312878540ce69ba5892c/urls",
        {
          external_applicant_id: "e0368ffe0b0cd7468e3b6e515653702a0bc4",
        },
        {
          headers: {
            Authorization: "Token e31169640d9147493929ab77c9128470b16d",
            "Content-Type": "application/json",
          },
        }
      );
      console.log("Response:", globalState);
      return { data: response.data, user: globalState.auth };
    } catch (error) {
      console.error("Error:", error);
      if (error.response) {
        return rejectWithValue(error.response.data);
      } else if (error.request) {
        return rejectWithValue(error.request);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);

const formSlice = createSlice({
  name: "form",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCandidateId.fulfilled, async (state, action) => {
        // console.log("🚀 ~ .addCase ~ action:", action)
        state.formResponse = action.payload.data;
        await axios.patch(
          `${url}/users/${action.payload.user._id}`,
          {
            kycVerificationId: action.payload.data?.form_token,
            kycFormUrl: action.payload.data?.form_url,
          },
          setHeaders()
        );

        state.error = null;
        window.open(action.payload.data?.form_url);
      })
      .addCase(fetchCandidateId.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchCandidateId.rejected, (state, action) => {
        state.formResponse = null;
        state.error = action.payload;
      });
  },
});

export default formSlice.reducer;
