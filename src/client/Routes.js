import React from 'react'
import App from './App'
import Home from './components/pages/Home'
import Detail from './components/pages/Detail'
import NotFoundPage from './components/pages/NotFoundPage'

export default [
    {
        component : App,
        routes: [
            {
                component: Home,
                path: '/',
                exact: true
            },
            {
                component: Detail,
                path: '/:idnslug',
                exact: true
            },
            {
                component: NotFoundPage
            }
        ]
    }
];


