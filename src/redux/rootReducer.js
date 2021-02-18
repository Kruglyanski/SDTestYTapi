import {configureStore, combineReducers} from '@reduxjs/toolkit'
import videosReducer from './videosReducer'
import authReducer from './authReducer'

const rootReducer = combineReducers({
    videos: videosReducer,
     auth: authReducer
})

export const store = configureStore({
    reducer: rootReducer

})
