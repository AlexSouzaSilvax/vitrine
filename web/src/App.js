import './App.css';
import iconSearch from './assets/icon-search.png';
import iconLeft from './assets/left.png';
import iconRigth from './assets/rigth.png';
import banner from './assets/5.webp';
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
      <section className="App-Carrosel">
        <div className="App-Carrosel-div-left">
          <div className="App-Carrosel-div-btn-left">
            <img className="App-Carrosel-div-btn-left-icon" src={iconLeft} alt="icon left banner" />
          </div>
        </div>
        <div className="App-Carrosel-div">
          <img className="App-Carrosel-div-banner" src={banner} alt="banner" />
        </div>
        <div className="App-Carrosel-div-rigth">
          <div className="App-Carrosel-div-btn-rigth">
            <img className="App-Carrosel-div-btn-rigth-icon" src={iconRigth} alt="icon rigth banner" />
          </div>
        </div>
      </section>
      <section className="App-Info">
        <div className="App-Info-div">
          <div className="App-Info-div-lista"></div>
        </div>
      </section>
    </div>
  );
}

export default App;
