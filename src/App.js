import React from 'react'
import {Provider} from 'react-redux'
import Screens from "./screens";
import {store, persistor} from "./config/store";
import {PersistGate} from 'redux-persist/integration/react'

function App() {
    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <Screens/>
            </PersistGate>
        </Provider>
    )
}

//  malolan.s@careator.com

export default App
