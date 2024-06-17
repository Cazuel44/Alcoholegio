import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        value: {
            user: {
                email: null, localId: null, imgProfile: null,
            },
            token: null, cameraImg: null, location: { address: '', latitude: 0, longitude: 0, },
        },
    },
    reducers: {
        setUser: (state, action) => {
            /* state.value.user = action.payload.data.email
            state.value.token = action.payload.data.idToken */
            state.value.user.email = action.payload.email
            state.value.user.localId = action.payload.localId
            state.value.token = action.payload.token

        },
        clearUser: (state, action) => {
            state.value = { user: null, token: null }
        },
        setCameraImg: (state, action) => {
            state.value.cameraImg = action.payload
        },
        setUserImgProfile: (state, action) => {
            state.value.user.imgProfile = action.payload
        },
        setUserLocation: (state, action) => {
            state.value.location = action.payload
        },
        logout: state => {
            state.value = {
                user: {
                    email: null,
                    localId: null,
                },
                token: null,
                imageCamera: null,
                photo: null,
                location: {
                    address: '',
                    latitude: 0,
                    longitude: 0,
                },
            }
        },
    },
});

export const { setUser, clearUser, setCameraImg, setUserImgProfile, setUserLocation, logout, } = authSlice.actions

export default authSlice.reducer