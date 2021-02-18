import React, {useCallback, useEffect, useMemo, useState} from 'react'
import {Col, List, Row} from 'antd'
import {useDispatch, useSelector} from 'react-redux'
import {FormOutlined, DeleteOutlined, CaretRightOutlined} from '@ant-design/icons'
import {
    addLocalStorageQueries,
    filterFavorites,
    loadSavedVideos,
    setCurrent, setEditedId,
    setModalVisible
} from '../../redux/videosReducer'
import {useHistory} from 'react-router'
import {CustomModal} from '../Modal/Modal'

export const Favorites = () => {
    const favorites = useSelector(state => state.videos.favorites)
    const userId = useSelector(state => state.auth.userId)
    const dispatch = useDispatch()
    const [searchQueryFav, setSearchQueryFav] = useState('')
    const history = useHistory()
    useEffect(()=> {
            const localStorageFavData = JSON.parse(localStorage.getItem(`favorites_${userId}`))
            localStorageFavData && dispatch(addLocalStorageQueries(localStorageFavData.favorites))
        }, [])

    const onRunHandler = async (e) => {
        history.push(`/search`)
        const {max, sort, currentQuery} = favorites.find(i => {
            return i.id == e.currentTarget.id
        })
        await dispatch(loadSavedVideos({max, sort, currentQuery}))
        dispatch(setCurrent({currentQuery}))
        history.push(`/search`)
    }

    const onEditHandler = (e) => {
        dispatch(setModalVisible(true))
        setSearchQueryFav(favorites.find(i => {
            return i.id == e.currentTarget.id
        }).currentQuery)
        dispatch(setEditedId(e.currentTarget.id))
    }

    const onDeleteHandler = (e) => {
        const filteredFavorites = favorites.filter(i => {
            return i.id != e.currentTarget.id

        })
        dispatch(filterFavorites(filteredFavorites))
    }
    return (
        <>

            <div className='searchTitle'>Избранное</div>
            <List
                size="small"
                header={null}
                footer={null}
                dataSource={favorites}
                renderItem={item => {
                    return <div>
                        <List.Item>
                            <Row style={{fontSize: 18, width: "100%"}}>
                                <Col span={18}>
                                    <p style={{margin: 0}}>{item.currentTitle}</p>
                                </Col>
                                <Col span={1}>
                                    <CaretRightOutlined id={item.id} onClick={onRunHandler}/>
                                </Col>
                                <Col span={1}>
                                    <FormOutlined id={item.id} onClick={onEditHandler}/>
                                </Col>
                                <Col span={1}>
                                    <DeleteOutlined id={item.id} onClick={onDeleteHandler}/>
                                </Col>
                            </Row>
                        </List.Item>
                        {(favorites.length > 1) && <hr/>}
                    </div>
                }
                }
            />
            <CustomModal
                saveButtonTitle={'Изменить'}
                cancelButtonTitle={'Не изменять'}
                modalTitle={'Изменение запроса'}
                searchQuery={searchQueryFav}
            />
        </>

    )
}