import React from 'react'
import {Modal} from 'antd'
import {QueryOptions} from '../QueryOptions/QueryOptions'
import {useSelector} from 'react-redux'

export const CustomModal = ({saveButtonTitle, cancelButtonTitle, modalTitle, searchQuery}) => {

    const modalVisible = useSelector(state => state.videos.modalVisible)

    return (
        <>
            <Modal
                footer={null}
                title={modalTitle}
                visible={modalVisible}
                onOk={console.log('ok')}
                closable={false}
            >
                <QueryOptions
                    saveButtonTitle={saveButtonTitle}
                    cancelButtonTitle={cancelButtonTitle}
                    searchQuery={searchQuery}
                />
            </Modal>
        </>
    )
}

