import React from 'react';
import { Card, CardContent, Typography } from '@material-ui/core'

import useStyles from "./styles";

const Product = ({ product }) => {
    const classes = useStyles();

    return (
        <Card className={classes.card}>
            <div className={classes.smMargin}>
                <Typography variant="h5">{product.name}</Typography>
            </div>
            <div className={classes.category}>
                <Typography variant="body2" color="textSecondary">
                    {product.category}
                </Typography>
            </div>
            <div className={classes.averagePrice}>
                <Typography variant="body2" color="textSecondary">
                    {product.averagePrice}
                </Typography>
            </div>
            <Typography variant="h6" className={classes.smMargin} gutterBottom>
                {product.targetCustomers}
            </Typography>
            <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                    {product.description}
                </Typography>
            </CardContent>
        </Card>
    )
}

export default Product
