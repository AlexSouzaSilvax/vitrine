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
import iconCartaoCredito from "./assets/credit-card.svg";
import iconBoleto from "./assets/payment-agreement.svg";
import iconMaisOpcoes from "./assets/view-more.svg";
import iconProdLimpeza from "./assets/produtos-de-limpeza.jpg";
import iconProdEletros from "./assets/produtos-de-eletrodomesticos.png";
import iconServMontManuMicro from "./assets/servicos-de-montagem-manutencao-micro.png";
import iconServSoftware from "./assets/servicos-de-criacao-softwares.png";
import iconProdutos from "./assets/produtos.png";
import iconServicos from "./assets/servicos.png";

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

  const infos = [
    {
      id: 0,
      icon: iconCartaoCredito,
      altIcon: "icone cartao credito",
      label: "Até 12 vezes sem juros",
      labelBtn: "Ver mais",
      onClick: () => alert("Teste")
    },
    {
      id: 1,
      icon: iconBoleto,
      altIcon: "icone boleto bancario",
      label: "À vista no boleto bancário",
      labelBtn: "Ver mais",
      onClick: () => alert("Teste")
    },
    {
      id: 2,
      icon: iconMaisOpcoes,
      altIcon: "icone mais opções para pagamento",
      label: "Mais formas de pagamento",
      labelBtn: "Ver todos",
      onClick: () => alert("Teste")
    }
  ]

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

  const listaInfos = infos.map(i => {
    return (
      <CardInfo
        icon={i.icon}
        altIcon={i.altIcon}
        label={i.label}
        labelBtn={i.labelBtn}
        onClick={i.onClick} />
    )
  });

  return (
    <div className="App">
      <Header />
      {listaCarrosel[carroselSelecionado]}
      <section className="App-Body">
        <div className="App-Body-div">
          <div className="App-Body-div-info">
            <ul className="App-Body-div-info-lista">
              {listaInfos}
            </ul>
          </div>
          <div className="App-Body-div-lista">
            <div className="App-Body-div-lista-cards">
              <CardProdServ alt="icon-produtos" source={iconProdEletros} label="Eletrodomésticos" />
              <CardProdServ alt="icon-produtos" source={iconProdLimpeza} label="Limpeza" />
            </div>
            <div className="App-Body-div-lista-cards">
              <CardProdServ alt="icon-servicos" source={iconServMontManuMicro} label="Montagem e Manutenção Micro" />
              <CardProdServ alt="icon-servicos" source={iconServSoftware} label="Criação de Softwares e Aplicativos" />
            </div>

            <div className="App-Body-div-lista-cards App-Body-div-lista-cards2">
              <CardProdServ2 alt="icon-servicos" source={iconProdutos} />
              <CardProdServ2 alt="icon-servicos" source={iconProdutos} />
              <CardProdServ2 alt="icon-servicos" source={iconProdutos} />
              <CardProdServ2 alt="icon-servicos" source={iconProdutos} />
            </div>

            <div className="App-Body-div-lista-cards App-Body-div-lista-cards2">
              <CardProdServ2 alt="icon-servicos" source={iconServicos} />
              <CardProdServ2 alt="icon-servicos" source={iconServicos} />
              <CardProdServ2 alt="icon-servicos" source={iconServicos} />
              <CardProdServ2 alt="icon-servicos" source={iconServicos} />
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}

function Header({ }) {
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

function CardInfo({ icon, altIcon, label, labelBtn, onClick }) {
  return (
    <li className="App-Body-div-info-lista-item">
      <div>
        <img
          src={icon}
          alt={altIcon}
        />
      </div>
      <div className="App-Body-div-info-lista-item-divInfo">
        <p className="App-Body-div-info-lista-item-divInfo-label">{label}</p>
        <a onClick={onClick}><p className="App-Body-div-info-lista-item-divInfo-labelBtn">{labelBtn}</p></a>
      </div>
    </li>
  );
}

function CardProdServ({ alt, source, label }) {
  return (
    <div className="App-Body-div-lista-cards-prodserv">
      <img alt={alt} src={source} className="App-Body-div-lista-cards-prodserv-img" />
      <p className="App-Body-div-lista-cards-prodserv-label">{label}</p>
    </div>
  );
}

function CardProdServ2({ alt, source }) {
  return (
    <div className="App-Body-div-lista-cards-prodserv2">
      <img alt={alt} src={source} className="App-Body-div-lista-cards-prodserv-img2" />
    </div>
  );
}

export default App;
