import React from 'react'
import {Row, Col, Typography} from 'antd'

const horizontal = {
    ellipsis: false,
    outerCol: 24,
    innerColFirst: 6,
    innerColSecond: 18
}
const vertical = {
    ellipsis: true,
    outerCol: 6,
    innerColFirst: 24,
    innerColSecond: 24
}


export const CustomCard = ({title, description, channelTitle, img, isDirectionVertical}) => {

    const {ellipsis, outerCol, innerColFirst, innerColSecond} = isDirectionVertical ? vertical : horizontal

    return (
        <Col span={outerCol} style={{marginTop: 20, width: '22%', paddingLeft: 10, paddingRight: 10}}>
            <Row>
                <Col span={innerColFirst}>
                    <div>
                        <img
                            alt={title}
                            src={img}
                            style={{width: 320}}
                        />
                    </div>
                </Col>
                <Col span={innerColSecond}>
                    <div>
                        <div>
                            <Typography.Text
                                style={{
                                    fontSize: 18,
                                    width: 320
                                }}
                                ellipsis={ellipsis}
                            >
                                {title}
                            </Typography.Text>
                        </div>
                        <div>
                            <Typography.Text
                                style={{
                                    fontSize: 14,
                                    width: 320,
                                    color: 'gray'
                                }}
                                ellipsis={ellipsis}
                            >
                                {description}
                            </Typography.Text>
                        </div>
                        <div>
                            <Typography.Text
                                style={{
                                    fontSize: 14,
                                    width: 320,
                                    color: 'gray'
                                }}
                                ellipsis={ellipsis}
                            >
                                {channelTitle}
                            </Typography.Text>
                        </div>
                    </div>
                </Col>
            </Row>
        </Col>
    )
}







