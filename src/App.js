import React from 'react'
import './App.css'
import 'antd/dist/antd.css'
import {useSelector} from 'react-redux'

import {BrowserRouter, Route} from 'react-router-dom'
import {CustomAlert} from './components/Alert/Alert'

import {Redirect, Switch} from 'react-router'
import {CustomLayout} from './components/Layout/Layout'
import {CustomSearch} from './components/Search/Search'
import {Favorites} from './components/Favorites/Favorites'
import {AuthPage} from './components/AuthPage/AuthPage'


function App() {

    const isAuthenticated = useSelector(state => state.auth.isAuthenticated)

    return (
        <BrowserRouter>

            <div className="App">
                {
                    isAuthenticated
                        ?
                        <>
                            <CustomAlert/>
                            <Switch>
                                <Route path="/search" exact>
                                    <CustomLayout>
                                        <CustomSearch/>
                                    </CustomLayout>
                                </Route>
                                <Route path="/favorites" exact>
                                    <CustomLayout>
                                        <Favorites/>
                                    </CustomLayout>
                                </Route>
                                <Redirect to="/search"/>
                            </Switch>

                        </>
                        :
                        <Switch>
                            <Route path="/" exact>
                                <AuthPage/>
                            </Route>
                            <Redirect to="/"/>
                        </Switch>
                }
            </div>
        </BrowserRouter>
    )
}

export default App
