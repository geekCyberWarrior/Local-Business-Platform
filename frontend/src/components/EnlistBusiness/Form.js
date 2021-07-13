import React, { useState } from "react";
import {
    Button,
    Grid,
} from "@material-ui/core";
import { useAlert } from 'react-alert';

import useStyles from "./styles";
import Input from "./Input";

const Form = () => {
    const classes = useStyles();
    const alert = useAlert();

    const initialState = {
        name: "",
        category: "",
        averagePrice: "",
        targetCustomers: "",
        description: "",
    };

    const [formData, setFormData] = useState(initialState);

    const handleChange = e => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setFormData(initialState);``

        const response = await fetch("http://127.0.0.1:8000/api/enlistbusiness/", {
            method: "POST",
            headers: { "Content-Type": "application/json", "Access-Control-Allow-Origin": "*" },
            body: JSON.stringify({ ...formData, averagePrice: Number(formData.averagePrice) }),
        });

        alert.show('Product Creation Succcessful!!!', { type: 'success' });
    };

    return (
        <Grid
            container
            direction="column"
            justify="center"
            alignItems="center"
            className={classes.form}
        >
            <Grid container spacing={3}>
                <Input
                    name="name"
                    label="Name"
                    size={2}
                    handleChange={handleChange}
                    autoFocus
                    type="text"
                    value={formData.name}
                />
                <Input
                    name="category"
                    label="Category"
                    size={2}
                    handleChange={handleChange}
                    type="text"
                    value={formData.category}
                />
            </Grid>
            <Grid container spacing={3} className={classes.mTop}>
                <Input
                    name="averagePrice"
                    label="Average Price"
                    size={3}
                    handleChange={handleChange}
                    type="number"
                    value={formData.averagePrice}
                />
                <Input
                    name="targetCustomers"
                    label="Target Customers"
                    size={4}
                    handleChange={handleChange}
                    type="text"
                    value={formData.targetCustomers}
                />
            </Grid>
            <Grid
                container
                spacing={3}
                className={classes.mTop}
                justify="center"
                alignItems="center"
            >
                <Input
                    name="description"
                    label="Description"
                    size={5}
                    handleChange={handleChange}
                    type="text"
                    value={formData.description}
                />
                <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    className={classes.buttonSubmit}
                    onClick={handleSubmit}
                >
                    Enlist
                </Button>
            </Grid>
        </Grid>
    );
};

export default Form;
