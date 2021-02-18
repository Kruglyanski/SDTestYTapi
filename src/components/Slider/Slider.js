import React from 'react'
import {Slider, InputNumber, Row, Col} from 'antd'


export class IntegerStepSlider extends React.Component {

    state = {
        inputValue: 25,
    }

    onChange = value => {
        this.setState({
            inputValue: value,
        })
        this.props.setMax(value)
    }

    render() {
        const {inputValue} = this.state
        return (
            <>
                <p style={{fontSize: 18, color: '#ccc'}}>Максимальное количество</p>
                <Row>
                    <Col span={19}>
                        <Slider
                            min={1}
                            max={50}
                            onChange={this.onChange}
                            value={typeof inputValue === 'number' ? inputValue : 0}
                            style={{marginLeft: '0', marginTop: '5'}}
                        />
                    </Col>
                    <Col span={4}>
                        <InputNumber
                            min={1}
                            max={50}
                            value={inputValue}
                            style={{width: 100}}
                            onChange={this.onChange}
                        />
                    </Col>
                </Row>
            </>
        )
    }
}

