/* eslint-disable spaced-comment */
/* eslint-disable no-empty */
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
    classes, label, type, name, value, onChange, suggestions,
}) {
    const fieldId = `id_${name}`;
    const isTypeSelect = type === 'select';

    // const [suggestion, setSuggestion] = React.useState('');

    // const handleChangeSelect = (event) => {
    //   setSuggestion(event.target.value);
    // };

    function ChooseFormField() {
        if (isTypeSelect) {
            return (
                <TextField
                className={classes.textfield}
                select
                name={name}
                value={value}
                type={type}
                label={label}
                onChange={onChange}
                autoComplete="off"
                SelectProps={{
                    native: true,
                    className: classes.input,
                  }}
                >
                    {suggestions.map((option) => (
                        <option key={`suggestionFor_${fieldId}option_${option}`} value={option}>
                            {option}
                        </option>
                ))}
                </TextField>
            );
        }

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
                InputProps={{
                    className: classes.input,
                }}
                />
            );
    }

    return (
        ChooseFormField()
        // <TextField
        //     className={classes.textfield}
        //     multiline
        //     name={name}
        //     value={value}
        //     type={type}
        //     label={label}
        //     variant="filled"
        //     onChange={onChange}
        //     // autoComplete='off'
        //     id={fieldId}
        //     list={`suggestionFor_${fieldId}`}
        //     InputProps={{
        //         className: classes.input,
        //     }}
        // />
    );
}

FormField.defaultProps = {
    type: 'text',
    value: '',
    onChange: () => { },
    suggestions: [],
};

FormField.prototype = {
    classes: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    type: PropTypes.string,
    name: PropTypes.string.isRequired,
    value: PropTypes.string,
    onChange: PropTypes.func,
    suggestions: PropTypes.arrayOf(PropTypes.string),
};

export default withStyles(styles)(FormField);
