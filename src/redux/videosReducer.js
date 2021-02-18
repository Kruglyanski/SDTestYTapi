import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import {DATA} from './items'
import {api} from '../api/api'

const initialState = {
    items: null,
    value: '',
    totalResults: null,
    isFetched: false,
    favorites: [],
    current: {
        id: null,
        currentQuery: '',
        currentTitle: '',
        max: 25,
        sort: 'any'
    },
    queries: [],
    modalVisible: false,
    editedId: null


}
export const loadVideos = createAsyncThunk(
    'videoReducer/loadVideos',
    async (value) => {
        const data = await api.fetchVideos(value)
        return data

    }
)
export const loadSavedVideos = createAsyncThunk(
    'videoReducer/loadSavedVideos',
    async ({max, sort, currentQuery}) => {
        const data = await api.fetchVideosBySavedQuery(max, sort, currentQuery)
        return data

    }
)
const videosReducer = createSlice({
    name: 'videosReducer',
    initialState,
    reducers: {
        setSearchValue: (state, action) => {
            return {
                ...state,
                value: action.payload
            }
        },
        setCurrent: (state, action) => {
            return {
                ...state,
                current: {...state.current, ...action.payload}
            }
        },
        addQuery: (state, action) => {
            return {
                ...state,
                favorites: [...state.favorites, action.payload],

            }
        },
        addLocalStorageQueries: (state, action) => {
            return {
                ...state,
                favorites: action.payload
            }
        },
        filterFavorites: (state, action) => {
            return {
                ...state,
                favorites: action.payload
            }
        },
        setModalVisible: (state, action) => {
            return {
                ...state,
                modalVisible: action.payload
            }
        },
        setEditedId: (state, action) => {
            return {
                ...state,
                editedId: action.payload
            }
        },

    },
    extraReducers: builder => {
        builder.addCase(loadVideos.fulfilled, (state, action) => {
            return {
                ...state,
                items: action.payload.items,
                totalResults: action.payload.pageInfo.totalResults,
                isFetched: true
            }

        }).addCase(loadSavedVideos.fulfilled, (state, action) => {
            return {
                ...state,
                items: action.payload.items,
                totalResults: action.payload.pageInfo.totalResults,
                isFetched: true
            }

        })
    }
})

export const {setSearchValue, addQuery, setCurrent, addLocalStorageQueries, setModalVisible, filterFavorites, setEditedId} = videosReducer.actions

export default videosReducer.reducer