import React from 'react'
import {Input} from 'antd'
import './Search.css'
import {useDispatch, useSelector} from 'react-redux'
import {loadVideos, setCurrent, setModalVisible, setSearchValue} from '../../redux/videosReducer'
import {CardList} from '../CardList/CardList'
import {HeartOutlined} from '@ant-design/icons'
import {CustomModal} from '../Modal/Modal'

const {Search} = Input

export const CustomSearch = () => {
    const isFetched = useSelector(state => state.videos.isFetched)
    const items = useSelector(state => state.videos.items)
    const value = useSelector(state => state.videos.value)
    const current = useSelector(state => state.videos.current)
    const userId = useSelector(state => state.auth.userId)
    const dispatch = useDispatch()
    const onSearchHandler = async () => {
        await dispatch(loadVideos(value))
        dispatch(setCurrent({currentQuery: value, userId: userId}))

        dispatch(setSearchValue(''))
    }
    const onChangeHandler = (e) => {
        dispatch(setSearchValue(e.currentTarget.value))

    }

    const suffix = isFetched ? <HeartOutlined onClick={() => dispatch(setModalVisible(true))}/> : <span/> //? Ant WRNG

    return (
        <>
            {!isFetched
                ?
                <div className='searchContainer'>
                    <div className='search'>
                        <div className='searchTitle'>Поиск видео</div>
                        <Search
                            placeholder="Что хотите посмотреть?"
                            enterButton="Найти"
                            size="large"
                            onChange={onChangeHandler}
                            onSearch={onSearchHandler}
                            value={value}
                        />
                    </div>
                </div>
                :
                <div>
                    <div className='search'>
                        <div className='searchTitle'>Поиск видео</div>

                        <Search
                            placeholder="Что хотите посмотреть?"
                            enterButton="Найти"
                            value={value}
                            onChange={onChangeHandler}
                            size="large"
                            onSearch={onSearchHandler}
                            suffix={suffix}
                        />

                    </div>
                    <CardList query={current.currentQuery}/>
                    <CustomModal
                        saveButtonTitle={'Сохранить'}
                        cancelButtonTitle={'Не сохранять'}
                        modalTitle={'Сохранение запроса'}
                        searchQuery={current.currentQuery}
                    />
                </div>

            }
        </>
    )
}



