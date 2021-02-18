import React from 'react'
import {Layout, Menu, Row} from 'antd'
import './Layout.css'
import Col from 'antd/es/grid/col'
import {Link} from 'react-router-dom'
import {useDispatch} from 'react-redux'
import {authLogout} from '../../redux/authReducer'
import {useLocation} from 'react-router'

const {Header, Content} = Layout

export const CustomLayout = (props) => {

    let location = useLocation()
    const dispatch = useDispatch()
    const logoutHandler = () => {
        localStorage.removeItem('userData')
        dispatch(authLogout())
    }

    return (
        <Layout className="layout">
            <Header>
                <Row>
                    <Col span={2}>
                        <div className="logo"/>
                    </Col>

                    <Col span={20}>
                        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={"/search"}
                              selectedKeys={location.pathname}>
                            <Menu.Item key="/search"><Link to="/search">Поиск</Link></Menu.Item>
                            <Menu.Item key="/favorites"><Link to="/favorites">Избранное</Link></Menu.Item>
                        </Menu>
                    </Col>

                    <Col span={2}>
                        <div className='logout'>
                            <a href="/" onClick={logoutHandler}>Выйти</a>
                        </div>
                    </Col>
                </Row>

            </Header>
            <Content style={{padding: '0 50px'}}>
                {props.children}
            </Content>
        </Layout>
    )
}



