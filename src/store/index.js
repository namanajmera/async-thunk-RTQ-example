import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/dist/query';
import { usersReducer } from './slices/usersSlice'
import { albumsApi } from './apis/albumsApi';
import { photosApi } from './apis/photosApi';

export const store = configureStore({
   reducer: {
      users: usersReducer,
      albums: albumsApi.reducer,
      photos: photosApi.reducer,
   },
   middleware: (getDefaultMiddleware) => {
      return getDefaultMiddleware().concat(albumsApi.middleware, photosApi.middleware);
   },
})

setupListeners(store.dispatch);

export * from './thunk/fetchUsers'
export * from './thunk/addUser'
export * from './thunk/deleteUser'
export { useFetchAlbumsQuery, useAddAlbumMutation, useDeleteAlbumMutation } from './apis/albumsApi'
export { useFetchPhotosQuery, useAddPhotoMutation, useRemovePhotoMutation } from './apis/photosApi'