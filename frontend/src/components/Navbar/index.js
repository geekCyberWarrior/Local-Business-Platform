import React, { useEffect, useState } from "react";
import { AppBar, Button, Typography, Toolbar, FormControl } from "@material-ui/core";
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import SearchBar from "material-ui-search-bar";
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import { useDispatch } from "react-redux";
import { useAlert } from 'react-alert';

import useStyles from "./styles";
import { getProducts } from "../../actions";

const API = axios.create({ baseURL: 'http://localhost:8000'});

function Navbar({ isLoggedIn, setIsLoggedIn, isShowProducts, setStart }) {
    const classes = useStyles();
    const history = useHistory();
    const [search, setSearch] = useState('');
    const [searchBy, setSearchBy] = useState('Keyword');
    const dispatch = useDispatch();
    const alert = useAlert();
    
    useEffect(() => {
        const user = JSON.parse(localStorage.getItem('profile'));
        if(user?.token)     setIsLoggedIn(true);
        API.interceptors.request.use(req => {
            if(localStorage.getItem('profile')) {
                req.headers.Authorization = `Token ${JSON.parse(localStorage.getItem('profile')).token}`;
            }
        
            return req;
        });
    }, [isLoggedIn]);

    const logout = async () => {
        await API.post('/api/logout/');
        localStorage.clear();
        setIsLoggedIn(false);
        alert.show('Logout Successful', { type: 'success' });
        history.push('/login');
    };

    const searchProduct = async () => {
        // setStart(true);
        let query = '/api/enlistbusiness?';
        if(searchBy === 'Keyword') {
            query += `name=${search}`
        } else {
            query += `category=${search}`
        }
        dispatch(getProducts(query));
        setSearch('');

    }

    return (
        <AppBar className={classes.appBar} position="static" color="inherit">
            <div className={classes.brandContainer}>
                <Typography
                    className={classes.heading}
                    variant="h2"
                    align="center"
                    component={Link}
                    to="/"
                    style={{ textDecoration: 'none' }}
                >
                    Local Business Platform
                </Typography>
            </div>
            <Toolbar className={classes.toolbar}>
                {
                    isLoggedIn && (
                        <>
                            {
                                isShowProducts && (
                                    <>
                                        <SearchBar
                                            cancelOnEscape={true}
                                            value={search}
                                            onChange={val => setSearch(val)}
                                            onRequestSearch={searchProduct}
                                        />

                                        <FormControl className={classes.formControl}>
                                            <Select
                                                value={searchBy}
                                                onChange={e => setSearchBy(e.target.value)}
                                                className={classes.selectEmpty}
                                                displayEmpty
                                                renderValue={() => searchBy}
                                                >
                                                <MenuItem value="Keyword">Keyword</MenuItem>
                                                <MenuItem value="Category">Category</MenuItem>
                                            </Select>
                                        </FormControl>
                                    </>
                                )
                            }

                            {
                                !isShowProducts && (
                                    <Button
                                        component={Link} 
                                        to="/products"
                                        variant="contained"
                                        className={classes.signIn}
                                        color="secondary"
                                    >
                                        Bulletin Board
                                        </Button>
                                )
                            }

                            <Button
                                variant="contained"
                                className={classes.signIn}
                                color="secondary"
                                onClick={logout}
                            >
                                Log Out
                            </Button>
                        </>
                    )
                }
            </Toolbar>
        </AppBar>
    );
}

export default Navbar;
