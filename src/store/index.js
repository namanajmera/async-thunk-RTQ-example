import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/dist/query';
import { usersReducer } from './slices/usersSlice'
import { albumsApi } from './apis/albumsApi';

export const store = configureStore({
   reducer: {
      users: usersReducer,
      albums: albumsApi.reducer,
   },
   middleware: (getDefaultMiddleware) => {
      return getDefaultMiddleware().concat(albumsApi.middleware);
   },
})

setupListeners(store.dispatch);

export * from './thunk/fetchUsers'
export * from './thunk/addUser'
export * from './thunk/deleteUser'
export { useFetchAlbumsQuery, useAddAlbumMutation, useDeleteAlbumMutation } from './apis/albumsApi'