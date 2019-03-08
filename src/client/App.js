import React from 'react'
import { renderRoutes } from 'react-router-config'
import { ToastContainer } from 'react-toastify'

const App = ({ route }) => {
    return (
        <>
            {renderRoutes(route.routes)}
            <ToastContainer />
        </>
    )
}

export default App