import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { faker } from '@faker-js/faker'

const albumsApi = createApi({
   reducerPath: 'albums',
   baseQuery: fetchBaseQuery({
      baseUrl: 'http://localhost:3005',
   }),
   endpoints(builder) {
      return {
         fetchAlbums: builder.query({
            invalidatesTags: (result, error, user) => {
               return [{ type: 'Album', id: user.id }];
            },
            query: (user) => {
               return {
                  url: '/albums',
                  params: {
                     userId: user.id
                  },
                  method: 'GET',
               }
            }
         }),
         addAlbum: builder.mutation({
            providesTags: (result, error, user) => {
               return [{ type: 'Album', id: user.id }];
            },
            query: (user) => {
               return {
                  url: '/albums',
                  method: 'POST',
                  body: {
                     "title": faker.commerce.productName(),
                     "userId": user.id,
                  }
               }
            }
         }),
         deleteAlbum: builder.mutation({
            providesTags: (result, error, album) => {
               return [{ type: 'Album', id: album.userId }];
            },
            query: (album) => {
               return {
                  url: '/albums/' + album.id,
                  method: 'DELETE',
               }
            }
         })
      };
   }
})

export const { useFetchAlbumsQuery, useAddAlbumMutation, useDeleteAlbumMutation } = albumsApi;

export { albumsApi };