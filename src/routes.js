import React from 'react'
import {Route} from 'react-router-dom'
import {CustomAlert} from './components/Alert/Alert'
import {AuthPage} from './components/AuthPage/AuthPage'
import {CustomLayout} from './components/Layout/Layout'
import {CustomSearch} from './components/Search/Search'
import {CustomModal} from './components/Modal/Modal'
import {Favorites} from './components/Favorites/Favorites'
import {Redirect, Switch} from 'react-router'


export const useRoutes = (isAuthenticated) => {

    if (isAuthenticated) {
        return (
            <>
                <CustomAlert/>
                <CustomModal/>
                <Switch>
                    <Route path="/search" exact>
                        <CustomLayout>
                            <CustomSearch/>
                        </CustomLayout>
                    </Route>
                    <Route path="/favorites"  exact>
                        <CustomLayout>
                            <Favorites/>
                        </CustomLayout>
                    </Route>
                    <Redirect to ="/search" />
                </Switch>

            </>
        )

    }
    return (
         <Switch>
             <Route path="/" exact>
                 <AuthPage/>
             </Route>
             <Redirect to ="/" />
         </Switch>
    )

}