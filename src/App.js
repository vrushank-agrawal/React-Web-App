import React from 'react';
import './App.css';
import './firebase/config';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './store/store';
import Navigation from './pages/Navigation';
import { BrowserRouter } from 'react-router-dom';
import CodeNektSidePanel from './Components/CodeNektSidePanel';

function App() {
    return (
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
            <BrowserRouter>
                <Navigation />
            </BrowserRouter>
        </PersistGate>
    </Provider>
    );
}

export default App;
