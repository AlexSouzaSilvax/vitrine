import './App.css';
import iconSearch from './assets/icon-search.png';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="App-header-div">
          <div className="App-header-div-logo">
            <p className="App-header-div-logo-texto">VITRINE</p>
            <p className="App-header-div-logo-subTexto">PRODUTOS E SERVIÇOS</p>
          </div>
          <div className="App-header-div-pesquisa">
            <div className="App-header-div-pesquisa-cardInput">
              <input
                className="App-header-div-pesquisa-input"
                placeholder="Buscar produtos, serviços e muito mais..."
              />
              <div className="App-header-div-pesquisa-divisao"></div>
              <div className="App-header-div-pesquisa-btn" onClick={() => {
                alert('Em desenvolvimento')
              }}>
                <img className="App-header-div-pesquisa-btn-icon" src={iconSearch} alt="icon-search" />
              </div>
            </div>
          </div>
          <div className="App-header-div-acesso">
            <button className="App-header-div-acesso-btn" onClick={() => alert("Crie sua conta")}>Crie sua conta</button>
            <button className="App-header-div-acesso-btn" onClick={() => alert("Entre")}>Entre</button>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
