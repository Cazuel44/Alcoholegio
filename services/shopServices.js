import { baseUrl } from "../firebase/database";
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';


export const shopApi = createApi({
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (builder) => ({
        getProducts: builder.query({
            query: () => 'products.json'
        }),
        /* getProductById: builder.query({
            query: (id) => `products/${id}.json`
            query: (id) => `products.json?orderBy="id"&equalTo="${id}"`
        }), */
        /* getProductsByCategory: builder.query({
            query: (category) => `products.json?orderBy="category"&equalTo="${category}"`
        }), */
        getCategories: builder.query({
            query: () => 'categories.json'
        }),
        postOrder: builder.mutation({
            query: order => ({
                url: 'orders.json',
                method: 'POST',
                body: order,
            }),
        }),
    }),
});

export const { useGetProductsQuery, useGetProductByIdQuery, useGetProductsByCategoryQuery, useGetCategoriesQuery, usePostOrderMutation, } = shopApi;