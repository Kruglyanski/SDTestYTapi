import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import * as jwt from 'jsonwebtoken'
import db from '../db.json'
const storageName = 'userData'
const initialState = {
    token: null,
    userId: null,
    isAlertShow: false,
    error: null,
    isAuthenticated: false,
    form: {
        email: '', password: ''
    }
}

export const authLogin = createAsyncThunk(
    'authReducer/authLogin ',
    async ({email, password}) => {
        const data = await db
        const id = data.users.find(i => i.email === email && i.password === password).id
        const token = jwt.sign(
            {userId: 1},
            'jwtSecret'
        )
        localStorage.setItem(storageName, JSON.stringify({
            userId: id, token: token
        }))
        return {id, token}

    }
)

const authReducer = createSlice({
    name: 'authReducer',
    initialState,
    reducers: {
        formChange: (state, action) => {
            return {
                ...state,
                form: {...state.form, ...action.payload}
            }
        },
        setIsAuthenticated: (state, action) => {
            return {
                ...state,
                isAuthenticated: action.payload
            }
        },

        authLogout: (state) => {
            return {
                ...state,
                token: null,
                userId: null,
                isAuthenticated: false
            }
        },

    },
    extraReducers: builder => {
        builder.addCase(authLogin.fulfilled, (state, action) => {
                return {
                    ...state,
                    token: action.payload.token,
                    userId: action.payload.id,
                    error: action.payload.error,
                    isAuthenticated: !!action.payload.token,
                    isAlertShow: false
                }

            }
        ).addCase(authLogin.rejected, (state) => {
                    return {
                        ...state,
                        error: 'Введены неправильные данные',
                        isAlertShow: true
                    }

                }
            )
    }
})

export const {authLogout, formChange, setIsAuthenticated} = authReducer.actions

export default authReducer.reducer
