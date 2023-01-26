import { createSlice } from '@reduxjs/toolkit'
import { addUser } from '../thunk/addUser';
import { deleteUser } from '../thunk/deleteUser';
import { fetchUsers } from '../thunk/fetchUsers';

export const usersSlice = createSlice({
   name: 'users',
   initialState: {
      data: [],
      isLoading: false,
      isError: null,
   },
   reducers: {},
   extraReducers(builder) {
      // Fetch Users
      builder.addCase(fetchUsers.pending, (state, action) => {
         state.isLoading = true;
      })
      builder.addCase(fetchUsers.fulfilled, (state, action) => {
         state.isLoading = false;
         state.data = action.payload;
      })
      builder.addCase(fetchUsers.rejected, (state, action) => {
         state.isLoading = false;
         state.isError = action.error;
      })
      // Add Users
      builder.addCase(addUser.pending, (state, action) => {
         state.isLoading = true;
      })
      builder.addCase(addUser.fulfilled, (state, action) => {
         state.isLoading = false;
         state.data.push(action.payload);
      })
      builder.addCase(addUser.rejected, (state, action) => {
         state.isLoading = false;
         state.isError = action.error;
      })
      // Delete User
      builder.addCase(deleteUser.pending, (state, action) => {
         state.isLoading = true;
      })
      builder.addCase(deleteUser.fulfilled, (state, action) => {
         state.isLoading = false;
         const newData = state.data.filter((user) => { return user.id !== action.payload })
         state.data = newData;
      })
      builder.addCase(deleteUser.rejected, (state, action) => {
         state.isLoading = false;
         state.isError = action.error;
      })
   }
})

export const usersReducer = usersSlice.reducer;