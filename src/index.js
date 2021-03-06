import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './css/style.css'
import { createStore, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux'
import rootReducer from './store/reducers/rootReducer'
import thunk from 'redux-thunk'
import { reduxFirestore, getFirestore } from 'redux-firestore'
import { reactReduxFirebase, getFirebase } from 'react-redux-firebase'
import fbConfig from './config/fbConfig'
import 'antd/dist/antd.css'

const store = createStore(rootReducer, compose(
    applyMiddleware(thunk.withExtraArgument({ getFirebase, getFirestore })),
    reduxFirestore(fbConfig),
    reactReduxFirebase(fbConfig, { useFirestoreForProfile: true, userProfile: 'users', attachAuthIsReady: true })
))

store.firebaseAuthIsReady.then(() => {
    ReactDOM.render(<Provider store={store}>
                        <App />
                    </Provider>,
                    document.getElementById('root'));
})

