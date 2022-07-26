import './App.css';
import { FiSearch } from 'react-icons/fi'
import axios from 'axios'
import { useState } from 'react';

function App() {

  const url = 'https://viacep.com.br/ws/'

  const [cep, setCep] = useState({})

  const [input, setInput] = useState('')

  const searchCep = async () => {

    if (cep === '') {
      alert('Digite algum CEP!')
      return
    }

    /* try {
      const {data} = await axios.get(`${url}/${input}/json`)
      setInput('')
      setCep(data)
    }
    catch {
      alert('Ops! Não foi possível buscar o cep!')
      setInput('')
    } */

    const {data} = axios.get(`${url}/${input}/json`)
    .then(({data}) => {
      setInput('')
      setCep(data)
    })
    .catch(err => {
      if (err || Object.keys(cep) == 1) {
        alert('Ops! Não foi possível buscar seu CEP!')
        setInput('')
      }
    })



  }

  return (
    <div className="App">

      <header className='header'>
        <p>Busque seu</p>
        <h2>Cep</h2>
      </header>


      <main className='main'>

        <fieldset className='fieldset'>
          <label htmlFor="cep">CEP: </label>
          <input type="text" id='cep'
          value={input}
          onChange={(e) => setInput(e.target.value)} />
          <button onClick={searchCep}>
            <FiSearch size='25px' color='#000' />
          </button>
        </fieldset>

        {Object.keys(cep).length > 1 && (
          <div className="details">
            <span>{cep.localidade} - {cep.uf}</span>
            <span>Bairro: {cep.bairro}</span>
            <span>Rua: {cep.logradouro}</span>
            <span>Complemento: {cep.complemento}</span>
            <span>DDD: {cep.ddd}</span>
          </div>
        )}
      </main>
    </div>
  );
}

export default App;
