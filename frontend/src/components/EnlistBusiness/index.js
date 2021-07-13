import React, { useEffect, useState } from "react";
import {
    Paper,
    Grid,
    Typography,
} from "@material-ui/core";
import { Redirect } from "react-router-dom";

import useStyles from "./styles";
import Form from "./Form";

const index = ({ setIsShowProducts }) => {
    const classes = useStyles();
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));

    useEffect(() => {
        setIsShowProducts(false);
        const expiry = user?.expiry;

        if(expiry) {
            if(expiry < new Date().getTime())      localStorage.clear();
        }

        setUser(JSON.parse(localStorage.getItem('profile')));
    }, []);

    return user ? (
        <Grid
            container
            spacing={0}
            justify="center"
            style={{ minHeight: "100vh", marginTop: "10em" }}
        >
            <Grid item xs={6}>
                <Paper className={classes.paper} elevation={3}>
                    <Typography variant="h5">Enlist Business</Typography>
                    <Form />
                </Paper>
            </Grid>
        </Grid>
    ) : (
        <Redirect to="/login" />
    );
};

export default index;
