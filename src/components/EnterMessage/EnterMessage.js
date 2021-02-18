import React from 'react'
import { message, Button } from 'antd';

const info = () => {
    message.info('Users: 1@1.ru, 2@2.ru Password: 123');
}
export const EnterMessage = () => {
    return (
        <Button type="primary" onClick={info}>
            Данные для входа
        </Button>
    )

}
