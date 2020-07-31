/* eslint-disable linebreak-style */
import { useState } from 'react';

function useForm(valoresIniciais) {
  const [values, setValues] = useState(valoresIniciais);

  function setValue(key, value) {
    // chave: nome, descricao, cor
    setValues({
      ...values,
      [key]: value, // nome: 'valor'
    });
  }

  function handleChange(infosDoEvento) {
    const { value } = infosDoEvento.target;
    setValue(
      infosDoEvento.target.getAttribute('name'),
      value,
    );
  }

  function clearForm() {
    setValues(valoresIniciais);
  }

  return {
    values,
    handleChange,
    clearForm,
  };
}

export default useForm;
