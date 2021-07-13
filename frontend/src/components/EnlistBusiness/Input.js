import React from 'react';
import { TextField, Grid, InputAdornment, IconButton } from '@material-ui/core';

function Input({ name, handleChange, label, size, autoFocus, type, value }) {
    const length = {
        1: 12,
        2: 6,
        3: 4,
        4: 8,
        5: 10
    };

    return (
        <Grid item xs={12} sm={length[size]}>
            <TextField
                name={name}
                onChange={handleChange}
                variant="outlined"
                required
                fullWidth
                label={label}
                autoFocus={autoFocus}
                type={type}
                value={value}
            />
        </Grid>
    )
}

export default Input;
