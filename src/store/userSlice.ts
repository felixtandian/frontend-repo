/* eslint-disable @typescript-eslint/no-explicit-any */
import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import { getUsers, updateUserData } from '../apis/users';

interface UserState {
    data: any;
    loading: boolean;
    error: string | null;
    updateStatus: 'idle' | 'loading' | 'succeeded' | 'failed';
}   

const initialState: UserState = {
  data: null,
  loading: false,
  error: null,
  updateStatus: 'idle',
};

export const fetchUser = createAsyncThunk('user/fetchUser', async (userId: string) => {
  const response = await getUsers(userId);
  return response;
});

export const updateUser = createAsyncThunk('user/updateUser', async (userData: any) => {
  const response = await updateUserData(userData);
  return response;
});


const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchUser.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to fetch user';
      })
      .addCase(updateUser.pending, (state) => {
        state.updateStatus = 'loading';
        state.error = null;
      })
      .addCase(updateUser.fulfilled, (state, action) => {
        state.updateStatus = 'succeeded';
        state.data = action.payload;
      })
      .addCase(updateUser.rejected, (state, action) => {
        state.updateStatus = 'failed';
        state.error = action.error.message || 'Failed to update user';
      });
  },
});

export default userSlice.reducer;
