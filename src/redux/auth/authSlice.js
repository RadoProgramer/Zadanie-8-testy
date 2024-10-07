import { createSlice } from "@reduxjs/toolkit";
import { logIn } from "./operations";

const authSlice = createSlice({
	name: "auth",
	initialState: {
		isLogged: false,
		token: null,
		user: {
			name: null,
			email: null,
		},
	},
	extraReducers: (builder) => {
		builder
        .addCase(logIn.pending, (state, action) => {})
		.addCase(logIn.fulfilled, (state, action) => {
            state.isLoggedIn = true;
            state.token = action.payload.token;
            state.user = action.payload.user;
        })
		.addCase(logIn.rejected, (state) => {
            state.isLoggedIn = false;
            state.token = null;
            state.user = {
                name: null,
                email: null,
            },
        });
	},
});

export const authReducer = authSlice.reducer;
