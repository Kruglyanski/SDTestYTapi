import React, {useState} from 'react'
import {Col, Row} from 'antd'
import './CardList.css'
import {useSelector} from 'react-redux'
import {CustomCard} from './Card'
import {UnorderedListOutlined, AppstoreOutlined} from '@ant-design/icons'

export const CardList = ({query}) => {
    const items = useSelector(state => state.videos.items)
    const totalResults = useSelector(state => state.videos.totalResults)
    const isFetched = useSelector(state => state.videos.isFetched)
    const [isDirectionVertical, setIsDirectionVertical] = useState(false)
    const directionToggle = (e) => {
        console.log('e', e.currentTarget.title)
        if (e.currentTarget.title === 'vertical') {
            setIsDirectionVertical(true)
        }
        if (e.currentTarget.title === 'horizontal') {
            setIsDirectionVertical(false)
        }
    }
    return (
        <>
            {items
                ?
                <>
                    <Row style={{marginTop: 20}}>
                        <Col span={22}>
                            {isFetched && <h2>Видео по запросу "{query || <i>пустой запрос</i>}" <span
                                style={{color: 'gray'}}>{totalResults}</span></h2>}
                        </Col>
                        <Col span={1} style={{fontSize: 30}}>
                            <UnorderedListOutlined
                                title='horizontal'
                                onClick={directionToggle}
                                className={isDirectionVertical && 'activeDirectionIcon'}
                            />
                        </Col>
                        <Col span={1} style={{fontSize: 30}}>
                            <AppstoreOutlined
                                title='vertical'
                                onClick={directionToggle}
                                className={!isDirectionVertical && 'activeDirectionIcon'}
                            />
                        </Col>
                    </Row>

                    <Row style={{paddingTop: 30}} justify="space-between">

                        {items.map(i => {
                            return <CustomCard
                                key={i.id.videoId}
                                title={i.snippet.title}
                                description={i.snippet.description}
                                channelTitle={i.snippet.channelTitle}
                                img={i.snippet.thumbnails.medium.url}
                                isDirectionVertical={isDirectionVertical}
                            />
                        })}

                    </Row>
                </>
                :
                null

            }
        </>
    )
}







