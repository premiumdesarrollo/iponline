import { createRoot } from 'react-dom/client'
import './index.css'
import {Provider } from 'react-redux'
import store from './modulos/store'
import Login from './modulos/login/login'



createRoot(document.getElementById('root')!).render(
    <Provider store={store}>
        <Login />
    </Provider>
)
