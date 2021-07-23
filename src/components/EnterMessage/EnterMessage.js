import React from 'react'
import {Button} from 'antd';
import db from '../../db.json'

import {formChange} from '../../redux/authReducer'
import {useDispatch} from 'react-redux'


export const EnterMessage = () => {
    const dispatch = useDispatch()
    const clickHandler = () => {
        dispatch(formChange({
            email: db.users[0].email, password: db.users[0].password
        }))
    }
    return (
        <Button type="primary" onClick={clickHandler}>
            Данные для входа

        </Button>
    )

}
