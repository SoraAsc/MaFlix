import React from 'react';
import TextField from '@material-ui/core/TextField';
import { withStyles } from "@material-ui/core/styles";
const styles = {
    textfield: {
        background: "white",
        display: "block",
        marginBottom: "5px",

    },
    input: {
        color: "black",
        width: "50vh"

    }
};

function FormField({ classes, label, type, name, value, onChange }) {

    return (
        <TextField className={classes.textfield} multiline name={name} value={value} label={label} variant="filled" type={type} onChange={onChange}
            InputProps={{
                className: classes.input
            }}
        />

        // <div>
        //     <label>
        //         {label}:
        //         <input
        //             type={type}
        //             value={value}
        //             name={name}
        //             onChange={onChange}
        //         />
        //     </label>
        // </div>
    )
}

export default withStyles(styles)(FormField);