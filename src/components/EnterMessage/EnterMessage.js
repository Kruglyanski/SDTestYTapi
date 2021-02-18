import React from 'react'
import { message, Button } from 'antd';

const info = () => {
    message.info('L: 1@1.ru, P: 123');
}
export const EnterMessage = () => {
    return (
        <Button type="primary" onClick={info}>
            Данные для входа
        </Button>
    )

}
