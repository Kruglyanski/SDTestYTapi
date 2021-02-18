import React from 'react'
import {Alert} from 'antd';
import {useSelector} from 'react-redux'

export const CustomAlert = () => {
    const isAlertShow = useSelector(state => state.auth.isAlertShow)
    const error = useSelector(state => state.auth.error)

    return (
        <>
            {
                isAlertShow
                    ?
                    <Alert message={error} type="error"/>
                    :
                    null

            }

        </>
    )
}
