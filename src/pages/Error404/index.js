import React from 'react'
import { Link } from 'react-router-dom';
import PageDefault from '../../components/PageDefault';

function Error() {

    return (
        < PageDefault >
            <h1>Opa, você não deveria estar aqui!</h1>
            <Link to="/">
                Ir para home
            </Link>
        </PageDefault >

    )
}

export default Error;