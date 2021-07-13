import React, { useState } from 'react';
import ReactDOM from "react-dom";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { transitions, positions, Provider as AlertProvider } from 'react-alert';
import AlertTemplate from 'react-alert-template-basic';

import reducers from "./reducers";
import Navbar from './components/Navbar';
import EnlistBusiness from './components/EnlistBusiness';
import Login from './components/Accounts';
import BrowseProducts from './components/BrowseProducts';

const store = createStore(reducers, compose(applyMiddleware(thunk)));

const options = {
    position: positions.TOP_CENTER,
    timeout: 5000,
    offset: '30px',
    transition: transitions.SCALE
};

const App = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [isShowProducts, setIsShowProducts] = useState(false);
    const [searchResult, setSearchResult] = useState(null);
    const [start, setStart] = useState(true);

    return (
        <BrowserRouter>
            <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} isShowProducts={isShowProducts} setStart={setStart} />
            <Switch>
                <Route path="/login" component={() => (<Login setIsLoggedIn={setIsLoggedIn} />)} />
                <Route path="/products" component={() => (<BrowseProducts isShowProducts={isShowProducts} setIsShowProducts={setIsShowProducts} setSearchResult={setSearchResult} searchResult={searchResult} start={start} setStart={setStart} />)} />
                <Route path="/" component={() => (<EnlistBusiness setIsShowProducts={setIsShowProducts} />)} />
            </Switch>
        </BrowserRouter>
    )
}

ReactDOM.render(
    <Provider store={store}>
        <AlertProvider template={AlertTemplate} {...options}>
            <App />
        </AlertProvider>
    </Provider>,
    document.getElementById("app")
);
