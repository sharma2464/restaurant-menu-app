import {configureStore, applyMiddleware, combineReducers} from '@reduxjs/toolkit'
import {persistStore, persistReducer} from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web
import cartReducer from "../components/Redux/Reducers";

const rootReducer = combineReducers({
    cart: cartReducer
})

const persistConfig = {
    key: 'root',
    storage
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

let store = configureStore({
    reducer: persistedReducer,
    middleware: applyMiddleware()
})

let persistor = persistStore(store)

export {store, persistor}

// const Store = createStore(reducer, applyMiddleware(thunk))