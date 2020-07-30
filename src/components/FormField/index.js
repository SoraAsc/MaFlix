/* eslint-disable linebreak-style */
/* eslint-disable react/prop-types */
/* eslint-disable indent */
/* eslint-disable react/jsx-indent-props */
/* eslint-disable react/jsx-indent */
/* eslint-disable linebreak-style */

import React from 'react';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';

const styles = {
    textfield: {
        background: 'white',
        display: 'block',
        marginBottom: '5px',
        outline: '0',
        border: '0',
        borderTop: '4px solid transparent',
        borderBottom: '4px solid white-smoke',
    },
    input: {
        background: 'white',
        color: 'black',
        width: '80vw',

    },
};

function FormField({
    classes, label, type, name, value, onChange,
}) {
    const fieldId = `id_${name}`;

    return (
        <TextField
            className={classes.textfield}
            multiline
            name={name}
            value={value}
            type={type}
            label={label}
            variant="filled"
            onChange={onChange}
            id={fieldId}
            InputProps={{
                className: classes.input,
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
    );
}

FormField.defaultProps = {
    type: 'text',
    value: '',
    onChange: () => { },
};

FormField.prototype = {
    classes: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    type: PropTypes.string,
    name: PropTypes.string.isRequired,
    value: PropTypes.string,
    onChange: PropTypes.func,
};

export default withStyles(styles)(FormField);
