import { createSlice } from "@reduxjs/toolkit";
import {
  login,
  logout,
  signUp,
  editProfile,
  deleteAccount,
  changePassword,
  getUserProfile,
  userListing,
  userLogs,
  deleteUser,
  UpLoadLogo,
  availableHits,
  forgetPassword,
  resetPassword,
} from "./userApi";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    user: null,
    token: null,
    loading: "idle",
    error: null,
  },
  reducers: {
    customLogout: (state) => {
      state.user = null;
      state.token = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.loading = "pending";
      })

      .addCase(login.fulfilled, (state, action) => {
        state.loading = "succeeded";
        state.user = action.payload.data.user;
        state.token = action.payload.data.jwtToken;
      })

      .addCase(login.rejected, (state, action) => {
        state.loading = "failed";
        state.error = action.payload.error;
      })

      .addCase(logout.pending, (state) => {
        state.loading = "pending";
      })

      .addCase(logout.fulfilled, (state) => {
        state.loading = "succeeded";
        state.notifications = [];
        state.user = null;
        state.shownAppModal = false;
      })

      .addCase(logout.rejected, (state) => {
        state.loading = "failed";
        state.user = null;
      })

      .addCase(changePassword.pending, (state) => {
        state.loading = "pending";
      })

      .addCase(changePassword.fulfilled, (state) => {
        state.loading = "succeeded";
      })

      .addCase(changePassword.rejected, (state) => {
        state.loading = "failed";
      })

      .addCase(signUp.pending, (state) => {
        state.loading = "pending";
      })

      .addCase(signUp.fulfilled, (state, action) => {
        state.loading = "succeeded";
        state.email = action.payload;
      })

      .addCase(signUp.rejected, (state) => {
        state.loading = "failed";
      })
      .addCase(resetPassword.pending, (state) => {
        state.loading = "pending";
      })

      .addCase(resetPassword.fulfilled, (state, action) => {
        state.loading = "succeeded";
        state.email = action.payload;
      })

      .addCase(resetPassword.rejected, (state) => {
        state.loading = "failed";
      })

      .addCase(deleteAccount.pending, (state) => {
        state.loading = "pending";
      })

      .addCase(deleteAccount.fulfilled, (state) => {
        state.user = null;
        state.notifications = [];
        state.loading = "succeeded";
      })

      .addCase(deleteAccount.rejected, (state) => {
        state.loading = "failed";
      })

      .addCase(editProfile.pending, (state) => {
        state.loading = "pending";
      })

      .addCase(editProfile.fulfilled, (state, action) => {
        state.user = { ...action.payload.data, tokens: state.user.tokens };
        state.loading = "succeeded";
      })

      .addCase(editProfile.rejected, (state) => {
        state.loading = "failed";
      })

      .addCase(getUserProfile.pending, (state) => {
        state.loading = "pending";
      })

      .addCase(getUserProfile.fulfilled, (state, action) => {
        state.user = { ...action.payload.data[0], tokens: state.user.tokens };
        state.loading = "succeeded";
      })

      .addCase(getUserProfile.rejected, (state) => {
        state.loading = "failed";
      })

      .addCase(userListing.pending, (state) => {
        state.loading = "pending";
      })

      .addCase(userListing.fulfilled, (state, action) => {
        state.loading = "succeeded";
      })

      .addCase(userListing.rejected, (state) => {
        state.loading = "failed";
      })
      .addCase(userLogs.pending, (state) => {
        state.loading = "pending";
      })

      .addCase(userLogs.fulfilled, (state, action) => {
        state.loading = "succeeded";
      })

      .addCase(userLogs.rejected, (state) => {
        state.loading = "failed";
      })
      .addCase(deleteUser.pending, (state) => {
        state.loading = "pending";
      })

      .addCase(deleteUser.fulfilled, (state, action) => {
        state.loading = "succeeded";
      })

      .addCase(deleteUser.rejected, (state) => {
        state.loading = "failed";
      })
      .addCase(forgetPassword.pending, (state) => {
        state.loading = "pending";
      })

      .addCase(forgetPassword.fulfilled, (state, action) => {
        state.loading = "succeeded";
      })

      .addCase(forgetPassword.rejected, (state) => {
        state.loading = "failed";
      })
      .addCase(UpLoadLogo.pending, (state) => {
        state.loading = "pending";
      })

      .addCase(UpLoadLogo.fulfilled, (state, action) => {
        state.loading = "succeeded";
      })

      .addCase(UpLoadLogo.rejected, (state) => {
        state.loading = "failed";
      })
      .addCase(availableHits.pending, (state) => {
        state.loading = "pending";
      })

      .addCase(availableHits.fulfilled, (state, action) => {
        state.loading = "succeeded";
      })

      .addCase(availableHits.rejected, (state) => {
        state.loading = "failed";
      });
  },
});

export const { customLogout } = userSlice.actions;

export default userSlice.reducer;
