import React, { useState, useEffect } from "react";

import "./App.css";
import iconSearch from "./assets/icon-search.png";
import iconLeft from "./assets/left.png";
import iconRigth from "./assets/rigth.png";
import banner from "./assets/5.webp";
import banner1 from "./assets/1.webp";
import banner2 from "./assets/2.webp";
import banner3 from "./assets/3.webp";
import banner4 from "./assets/4.webp";
import banner6 from "./assets/6.webp";

function App() {
  const [banners] = useState([
    {
      id: 0,
      img: banner1,
    },
    {
      id: 1,
      img: banner2,
    },
    {
      id: 2,
      img: banner3,
    },
    {
      id: 3,
      img: banner4,
    },
    {
      id: 4,
      img: banner,
    },
    {
      id: 5,
      img: banner6,
    },
  ]);
  const [carroselSelecionado, setCarroselSelecionado] = useState(0);
  useEffect(() => {
    if (carroselSelecionado === banners.length) {
      setCarroselSelecionado(0);
    }
  }, [carroselSelecionado]);

  const listaCarrosel = banners.map((banner) => {
    return (
      <Carrosel
        key={banner.id}
        banner={banner}
        lista={banners}
        onClickLeft={() => {
          if (carroselSelecionado === 0) {
            setCarroselSelecionado(5);
          } else {
            setCarroselSelecionado(carroselSelecionado - 1);
          }
        }}
        onClickRigth={() => setCarroselSelecionado(carroselSelecionado + 1)}
      />
    );
  });

  return (
    <div className="App">
      <Header />
      {listaCarrosel[carroselSelecionado]}
      <section className="App-Body">
        <div className="App-Body-div">
          <div className="App-Body-div-info"></div>
          <div className="App-Body-div-lista"></div>
        </div>
      </section>
    </div>
  );
}

function Header({}) {
  return (
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
            <div
              className="App-header-div-pesquisa-btn"
              onClick={() => {
                alert("Em desenvolvimento");
              }}
            >
              <img
                className="App-header-div-pesquisa-btn-icon"
                src={iconSearch}
                alt="icon-search"
              />
            </div>
          </div>
        </div>
        <div className="App-header-div-acesso">
          <button
            className="App-header-div-acesso-btn"
            onClick={() => alert("Crie sua conta")}
          >
            Crie sua conta
          </button>
          <button
            className="App-header-div-acesso-btn"
            onClick={() => alert("Entre")}
          >
            Entre
          </button>
        </div>
      </div>
    </header>
  );
}

function Carrosel({ banner, lista, onClickLeft, onClickRigth }) {
  return (
    <section className="App-Carrosel">
      <div className="App-Carrosel-div-left">
        <div className="App-Carrosel-div-btn-left" onClick={onClickLeft}>
          <img
            className="App-Carrosel-div-btn-left-icon"
            src={iconLeft}
            alt="icon left banner"
          />
        </div>
      </div>
      <div className="App-Carrosel-div">
        <img
          className="App-Carrosel-div-banner"
          src={banner.img}
          alt="banner"
        />
        <div className="App-Carrosel-div-qtdBanner">
          <>
            {lista.map((b) => {
              return (
                <div
                  className={
                    b.id === banner.id
                      ? "App-Carrosel-div-qtdBanner-item-ativo"
                      : "App-Carrosel-div-qtdBanner-item"
                  }
                ></div>
              );
            })}
          </>
        </div>
      </div>
      <div className="App-Carrosel-div-rigth">
        <div className="App-Carrosel-div-btn-rigth" onClick={onClickRigth}>
          <img
            className="App-Carrosel-div-btn-rigth-icon"
            src={iconRigth}
            alt="icon rigth banner"
          />
        </div>
      </div>
    </section>
  );
}

export default App;
