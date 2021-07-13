import React, { useEffect, useState } from 'react';
import Product from './Product';
import { CircularProgress, Grid, Typography } from '@material-ui/core';
import { useDispatch, useSelector } from "react-redux";

import useStyles from "./styles";
import { getProducts } from "../../actions";


const BrowseProducts = ({ isShowProducts, setIsShowProducts, start, setStart }) => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const products = useSelector((state) => state.products);

    useEffect(() => {
        setIsShowProducts(true);

        dispatch(getProducts());

        if(products.length) {
            setStart(false);
        }
    }, [dispatch, isShowProducts]);

    return (
        <div style={{ marginRight: '0px' }}>
            <Grid
                className={classes.container}
                container
                alignItems="stretch"
                spacing={3}
                >
                {
                    products.length ? products.map((product) => (
                        <Grid key={product.id} item xs={12} sm={6} md={3}>
                            <Product product={product} />
                        </Grid>
                    )) : (
                            <div style={{ marginLeft: "2em" }} className={classes.smMargin}>
                                {
                                    start ? (
                                            <CircularProgress />
                                        ) : (
                                        <Typography variant="h5">Sorry, no Product Found</Typography>
                                    )
                                }
                            </div>
                    )
                }
            </Grid>
        </div>
    )
}

export default BrowseProducts
