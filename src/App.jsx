import './App.css';

function App() {
  return (
    <div className="App">

      <header className='header'>
        <p>Busque seu</p>
        <h2>Cep</h2>
      </header>


      <main className='main'>

        <label htmlFor="cep">CEP: </label>
        <input type="text" id='cep' />

        <div className="details">
          <span>Caraúbas - RN</span>
          <span>Bairro: Centro</span>
          <span>Rua: Av Coronel Rosendo Fernandes</span>
          <span>Complemento: Perto casa de cultura</span>
          <span>DDD: 84</span>
        </div>
      </main>
    </div>
  );
}

export default App;
