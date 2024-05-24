import { toast } from "react-toastify";
import axiosInstance from "../../interceptor";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const login = createAsyncThunk(
  "login",
  async ({ apiEndpoint, requestData }, thunkAPI) => {
    try {
      const response = await axiosInstance.post(apiEndpoint, requestData);
      toast.success(response.data.message);
      return response.data;
    } catch (error) {
      toast.error(error.response.data.data.message);
      return thunkAPI.rejectWithValue({ statusCode: error.response.status });
    }
  }
);

export const logout = createAsyncThunk(
  "logout",
  async ({ apiEndpoint, requestData }, thunkAPI) => {
    try {
      const response = await axiosInstance.post(apiEndpoint, requestData);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error?.response?.data);
    }
  }
);

export const changePassword = createAsyncThunk(
  "changePassword",
  async ({ apiEndpoint, requestData }, thunkAPI) => {
    try {
      const response = await axiosInstance.post(apiEndpoint, requestData);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error?.response?.data);
    }
  }
);

export const signUp = createAsyncThunk(
  "signUp",
  async ({ apiEndpoint, requestData }, thunkAPI) => {
    try {
      const response = await axiosInstance.post(apiEndpoint, requestData);
      return response.data.data.email;
    } catch (error) {
      return thunkAPI.rejectWithValue(error?.response?.data);
    }
  }
);

export const editProfile = createAsyncThunk(
  "editProfile",
  async ({ apiEndpoint, requestData }, thunkAPI) => {
    try {
      const response = await axiosInstance.patch(apiEndpoint, requestData);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error?.response?.data);
    }
  }
);

export const deleteAccount = createAsyncThunk(
  "deleteAccount",
  async ({ apiEndpoint }, thunkAPI) => {
    try {
      const response = await axiosInstance.delete(apiEndpoint);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error?.response?.data);
    }
  }
);
export const deleteUser = createAsyncThunk(
  "deleteUser",
  async ({ apiEndpoint }, thunkAPI) => {
    try {
      const response = await axiosInstance.delete(apiEndpoint);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error?.response?.data);
    }
  }
);

export const getUserProfile = createAsyncThunk(
  "getUserProfile",
  async ({ apiEndpoint }, thunkAPI) => {
    try {
      const response = await axiosInstance.get(apiEndpoint);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error?.response?.data);
    }
  }
);

export const userListing = createAsyncThunk(
  "userListing",
  async ({ apiEndpoint }, thunkAPI) => {
    try {
      const response = await axiosInstance.get(apiEndpoint);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error?.response?.data);
    }
  }
);
export const userLogs = createAsyncThunk(
  "userLogs",
  async ({ apiEndpoint }, thunkAPI) => {
    try {
      const response = await axiosInstance.get(apiEndpoint);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error?.response?.data);
    }
  }
);
