import { createSlice } from '@reduxjs/toolkit'

export const photoSlice = createSlice({
   name: 'photos',
   initialState: {
      data: [],
   },
   reducers:{}
})


export const photoReducer = photoSlice.reducer;