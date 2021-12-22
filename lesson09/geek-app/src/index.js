import React from 'react';
import ReactDOM from 'react-dom';
//
import { BrowserRouter } from 'react-router-dom';
//
import { Provider } from 'react-redux';
//
//import { persistStore } from 'redux-persist';
//import { PersistGate } from 'redux-persist/integration/react';
//
import App from './components/app/App.jsx';
//
import { store } from './store';
//
import './firebase';
//
//import reportWebVitals from './reportWebVitals';
//
import 'bootstrap/dist/css/bootstrap.min.css';
//
import './index.css';

//let persistor = persistStore(store);

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <Provider store={store}>
                {/*<PersistGate loading={null} persistor={persistor}>*/}
                    <App />
                {/*</PersistGate>*/}
            </Provider>
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
