import React, {useEffect, useState} from 'react'
import {
    Form,
    Input,
    Button,
    Select,
    Row, Col
} from 'antd'
import {IntegerStepSlider} from '../Slider/Slider'
import {useDispatch, useSelector} from 'react-redux'
import {addQuery, filterFavorites, setCurrent, setModalVisible} from '../../redux/videosReducer'


export const QueryOptions = ({saveButtonTitle, cancelButtonTitle, searchQuery}) => {
    const favorites = useSelector(state => state.videos.favorites)
    const current = useSelector(state => state.videos.current)
    const editedId = useSelector(state => state.videos.editedId)
    const userId = useSelector(state => state.auth.userId)
    const dispatch = useDispatch()
    const [editedItem, setEditedItem] = useState(null)

    useEffect(() => {
        localStorage.setItem(`favorites_${userId}`, JSON.stringify({
            favorites
        }))
    }, [favorites])

    useEffect(() => {
        setEditedItem(favorites.find(i => i.id == editedId))
    }, [editedId])



    const changeHandler = (event) => {
        dispatch(setCurrent({[event.target.name]: event.target.value, id: Math.random()}))
    }

    const selectHandler = (val) => {
        dispatch(setCurrent({sort: val}))
    }

    const saveButtonHandler = () => {
        const filteredFavorites = favorites.filter(i => {
            return i.id != editedId

        })
        dispatch(filterFavorites(filteredFavorites))
        dispatch(addQuery(current))
        localStorage.setItem(`favorites_${userId}`, JSON.stringify({
            favorites
        }))
        dispatch(setCurrent({currentTitle: ''}))
        dispatch(setModalVisible(false))

    }

    const cancelButtonHandler = () => {
        dispatch(setCurrent({currentTitle: ''}))
        dispatch(setModalVisible(false))
    }

    const setMax = (sliderValue) => {
        dispatch(setCurrent({max: sliderValue}))
    }

    const queryData = editedItem ? editedItem : current

    return (
        <>
            <Form
                labelCol={{
                    span: 8,
                }}
                wrapperCol={{
                    span: 24,
                }}
                layout="vertical"
                initialValues={{
                    requiredMark: true
                }}
            >
                <Form.Item style={{color: 'black'}} label="Запрос">
                    <Input value={queryData.currentQuery} name='currentQuery' onChange={changeHandler}
                           placeholder={queryData.currentQuery}/>
                </Form.Item>
                <Form.Item
                    required
                    name="title"
                    rules={[
                        {
                            message: 'Укажите название',
                            required: true
                        },
                    ]}
                    label="Название">
                    <Input value={queryData.currentTitle} name='currentTitle' onChange={changeHandler}
                           placeholder='Укажите название'/>
                </Form.Item>
                <Form.Item label="Сортировать по">
                    <Select value={queryData.sort} onChange={selectHandler}>
                        <Select.Option value="any">Без сортировки</Select.Option>
                        <Select.Option value="episode">Эпизоды</Select.Option>
                        <Select.Option value="movie">Фильмы</Select.Option>
                    </Select>
                </Form.Item>
                <IntegerStepSlider setMax={setMax}/>
                <Form.Item>
                    <Row style={{marginTop: 20}}>
                        <Col span={12} push={12}>
                            <Button type="default" htmlType="submit" onClick={cancelButtonHandler}>
                                {cancelButtonTitle}
                            </Button>
                        </Col>
                        <Col span={12} push={7}>
                            <Button type="primary" disabled={!queryData.currentQuery.length} htmlType="submit"
                                    onClick={saveButtonHandler}>
                                {saveButtonTitle}
                            </Button>
                        </Col>
                    </Row>
                </Form.Item>
            </Form>
        </>
    )
}