import { createSlice } from '@reduxjs/toolkit';

export const albumSlice = createSlice({
   name: 'album',
   initialState: {
      data: [],
   },
   reducers:{

   },
})

export const albumReducer = albumSlice.reducer;