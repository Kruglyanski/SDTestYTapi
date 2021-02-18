import React, {useEffect} from 'react'
import {Form, Input, Button} from 'antd'
import './AuthPage.css'
import {useDispatch, useSelector} from 'react-redux'
import {authLogin, formChange, setIsAuthenticated} from '../../redux/authReducer'
import * as jwt from 'jsonwebtoken'
import {addLocalStorageQueries} from '../../redux/videosReducer'
import {EnterMessage} from '../EnterMessage/EnterMessage'

export const AuthPage = () => {
    const form = useSelector(state => state.auth.form)
    const dispatch = useDispatch()
    const localStorageAuthData = JSON.parse(localStorage.getItem('userData'))
    const localStorageFavData = JSON.parse(localStorage.getItem('favorites'))
    useEffect(() => {
        localStorageAuthData && dispatch(setIsAuthenticated(jwt.verify(localStorageAuthData.token, 'jwtSecret')))
    }, [])

    useEffect(() => {
        localStorageFavData && dispatch(addLocalStorageQueries(localStorageFavData.favorites))
    }, [])

    const changeHandler = event => {
        dispatch(formChange({[event.target.name]: event.target.value}))
    }

    const loginHandler = () => {
        dispatch(authLogin(form))
    }

    return (
        <>
            <EnterMessage style={{marginLeft: 'auto', marginRight: 'auto'}}/>
            <div className='formWrap'>
                <Form
                    name="basic"
                    initialValues={{
                        remember: true,
                    }}

                >
                    <div className='authLogo'/>
                    <div className='authTitle'>Вход</div>
                    <Form.Item
                        label="Логин"
                        name="username"
                        rules={[
                            {
                                message: 'Введите логин',
                                required: true
                            },
                        ]}

                    >
                        <Input value={form.email} name="email" onChange={changeHandler}/>
                    </Form.Item>

                    <Form.Item
                        label="Пароль"
                        name="password"
                        rules={[
                            {
                                message: 'Введите пароль',
                                required: true
                            },
                        ]}

                    >
                        <Input.Password value={form.password} name="password" onChange={changeHandler}/>
                    </Form.Item>
                    <Form.Item>
                        <Button type="primary" htmlType="submit" onClick={loginHandler}>
                            Войти
                        </Button>
                    </Form.Item>
                </Form>


            </div>
        </>

    )
}