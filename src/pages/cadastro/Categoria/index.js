import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';

function CadastroCategoria() {
    const valoresIniciais = {
        nome: '',
        descricao: '',
        cor: '',
    }
    const [categorias, setCategorias] = useState([]);
    const [values, setValues] = useState(valoresIniciais);

    function setValue(key, value) {
        //chave: nome, descricao, cor
        setValues({
            ...values,
            [key]: value, // nome: 'valor'
        })
    }

    function handleChange(infosDoEvento) {
        const { value } = infosDoEvento.target;
        setValue(
            infosDoEvento.target.getAttribute('name'),
            value
        );
    }

    return (
        <PageDefault>
            <h1>Cadastro de Categoria: {values.nome}</h1>

            <form onSubmit={function handleSubmit(infosDoEvento) {
                infosDoEvento.preventDefault();
                setCategorias([
                    values,
                    ...categorias
                ]);

                setValues(valoresIniciais)
            }}>

                <FormField
                    label="Nome da Categoria"
                    type="text"
                    name="nome"
                    value={values.nome}
                    onChange={handleChange}
                />

                <FormField
                    label="Descrição"
                    type="textarea"
                    name="descricao"
                    value={values.descricao}
                    onChange={handleChange}
                />
                {/* <div>
                    <label>
                        Descrição:
                    <textarea
                            type="text"
                            name="descricao"
                            value={values.descricao}
                            onChange={handleChange}
                        />
                    </label>
                </div> */}

                <FormField
                    label="Cor"
                    type="color"
                    name="cor"
                    value={values.cor}
                    onChange={handleChange}
                />
                {/* <div>
                    <label>
                        Cor:
                    <input
                            type="color"
                            name="cor"
                            value={values.cor}
                            onChange={handleChange}
                        />
                    </label>
                </div> */}

                <button>
                    Cadastrar
                </button>
            </form>


            <ul>
                {categorias.map((categoria, index) => {
                    return (
                        < li key={`${categoria} ${index}`}>
                            {categoria.nome}
                        </li>
                    )
                })}
            </ul>

            <Link to="/">
                Ir para home
            </Link>
        </PageDefault >
    )
}

export default CadastroCategoria;