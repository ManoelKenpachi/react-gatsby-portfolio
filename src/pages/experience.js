import React from "react"
import { AiFillCaretRight } from "react-icons/ai"
import styled from "styled-components"
import Container from "../components/container"
import { SEO } from "../components/"
import { Link } from "gatsby"
import { IoIosArrowBack } from "react-icons/io"
export default function Experience() {
  /* I have done this intentionally the old school and not having state
   based tab thing because i want you to make PR on this with great class based code.*/

  const showDesc = e => {
    let d = document.querySelectorAll(".orglist__item--title")
    d.forEach(e => {
      e.classList.add("inactive-org")
    })
    e.target.classList.remove("inactive-org")
    let dt = e.target.getAttribute("data-target")

    let d1 = document.querySelectorAll(".orgdesc")
    d1.forEach(e => {
      e.classList.add("inactive-desc")
      if (dt === e.getAttribute("data-target")) {
        e.classList.remove("inactive-desc")
      }
    })
  }

  return (
    <Container>
      <SEO title="Experience" />
      <StyledDiv>
        <Link to="/">
          <IoIosArrowBack className="back" />
        </Link>
        <h2> Experiencia de carreira </h2>
        <p>
        Iniciei minha trajetória profissional logo após concluir o curso técnico na ETEC, 
        onde adquiri uma base sólida em tecnologia e desenvolvimento. 
        Meu primeiro emprego na área foi em fevereiro de 2019, marcando o início 
        de uma carreira que já soma aproximadamente 6 anos de experiência no 
        desenvolvimento de soluções. Durante esse período, tive a oportunidade 
        de trabalhar em projetos variados, consolidando minhas habilidades 
        técnicas e ampliando minha visão estratégica.
        </p>
        <br />
        <p>
        Atualmente, estou cursando o CTS em Inteligência Artificial, com o
        objetivo de aprimorar meus conhecimentos e explorar novas possibilidades
        dentro da área. Busco constantemente me atualizar e aplicar tecnologias
        de ponta para entregar soluções inovadoras e eficientes
        </p>

        <div className="orgcontainer">
          <div className="orglist">
            <div
              role="button"
              onKeyPress={showDesc}
              className="orglist__item"
              onClick={showDesc}
              tabIndex={-4}
            >
              <h5 className="orglist__item--title inactive-org" data-target="1">
                Gransys
              </h5>
              <span>
                <AiFillCaretRight />
              </span>
            </div>
            
            <div
              role="button"
              onKeyPress={showDesc}
              className="orglist__item"
              onClick={showDesc}
              tabIndex={-3}
            >
              <h5 className="orglist__item--title inactive-org" data-target="2">
                Pariz e Commim
              </h5>
              <span>
                <AiFillCaretRight />
              </span>
            </div>

            <div
              role="button"
              onKeyPress={showDesc}
              className="orglist__item"
              onClick={showDesc}
              tabIndex={-2}
            >
              <h5 className="orglist__item--title inactive-org" data-target="3">
                Bravion
              </h5>
              <span>
                <AiFillCaretRight />
              </span>
            </div>
            <div>
              <div
                role="button"
                onKeyPress={showDesc}
                className="orglist__item"
                onClick={showDesc}
                tabIndex={-1}
              >
                <h5
                  className="orglist__item--title inactive-org"
                  data-target="4"
                >
                  Napp Solutions
                </h5>
                <span>
                  <AiFillCaretRight />
                </span>
              </div>
            </div>
          </div>

          <div className="orgdesc inactive-desc" data-target="1">
            <h3>Developer Backend</h3>
            <p>
              <strong> Leme , São Paulo </strong>
            </p>

            <ul>
              <li>
                - Criar e gerenciar APIs RESTful para comunicação entre o front-end (Vue.js) e o back-end (Laravel), garantindo eficiência e segurança nas transações.
              </li>
              <li>- Desenvolver recursos como carrinho de compras, gerenciamento de produtos, checkout e integração com gateways de pagamento.</li>
              <li>- Projetar e otimizar modelos de banco de dados relacionais (MySQL/PostgreSQL) para armazenar informações como produtos, clientes e pedidos.</li>
              <li>- Integrar sistemas de terceiros, como plataformas de pagamento (Mercado Pago, Stone), ERPs (Tiny, Bling), e APIs de logística.</li>
              <li>- Desenvolver lógica para atualização automática de estoque com base em vendas e movimentações, sincronizando dados com sistemas externos.</li>
              <li>- Proteger informações sensíveis com boas práticas de segurança, como criptografia de dados e prevenção contra ataques SQL Injection e CSRF.</li>
              <li>- Realizar otimizações para garantir o desempenho do sistema em períodos de alta demanda, como Black Friday.</li>
            </ul>
          </div>

          <div className="orgdesc inactive-desc" data-target="2">
            <h3> Consultor Técnico | Developer Backend/Mobile</h3>
            <p>
              <strong> Santa Cruz da Conceição, São Paulo </strong>
            </p>
            <ul>
              <li>- Desenvolver estratégias e recomendar soluções tecnológicas alinhadas aos objetivos do cliente.</li>
              <li>- Realizar diagnóstico detalhado para entender os desafios e necessidades do cliente.</li>
              <li>- Garantir a interoperabilidade entre diferentes sistemas por meio de integrações eficientes e personalizadas.</li>
              <li>- Coordenar equipes e atividades para assegurar a entrega de soluções no prazo e dentro do orçamento.</li>
              <li>- Produzir relatórios, manuais e guias para facilitar a implementação e o uso das soluções.</li>
              <li>- Desenvolver tecnologias e apps para nossos clientes.</li>
            </ul>
          </div>

          <div className="orgdesc inactive-desc" data-target="3">
            <h3>Fullstack Developer</h3>
            <p>
              <strong> Leme, São Paulo </strong>
            </p>

            <ul>
              <li>- Integrar tecnologias de front-end e back-end para construir soluções completas. </li>
              <li>
                - Experiência com tecnologias como Node.js, Flask, Python, SQL, NoSQL, IA, AWS, Azure e Serviços Apache.
              </li>
              <li>- Converter design dos websites e app.</li>
              <li>
                - Foco na eficiência e resolução de problemas, garantindo soluções escaláveis e de alto desempenho.
              </li>
            </ul>
          </div>

          <div className="orgdesc inactive-desc" data-target="4">
            <h3>ETL Developer</h3>
            <p>
              <strong> Leme, São Paulo </strong>
            </p>
            <ul>
              <li>
                - Cria e mantém processos de Extração, Transformação e Carga (ETL) para integrar dados de várias fontes em data warehouses ou bancos de dados analítico
              </li>
              <li>
                - Trabalha com ferramentas de integração de dados e otimização de fluxos para garantir precisão e desempenho.
              </li>
              <li>
                - Conecta sistemas e APIs para garantir que diferentes softwares funcionem juntos de forma eficiente..
              </li>
              <li>
                - Resolve incompatibilidades entre plataformas, garantindo integração fluida de dados e processos.
              </li>
              <li>
                - Coleta, organiza e analisa grandes volumes de dados para extrair insights relevantes.
              </li>
              <li>
                - Cria relatórios e dashboards para apoiar decisões estratégicas usando ferramentas como Power BI ou Tableau.
              </li>
              <li>
                - Lidera equipes técnicas, definindo padrões de desenvolvimento, arquiteturas e metodologias.
              </li>
              <li>
                - Mentor técnico, ajudando a resolver desafios e garantir entregas de alta qualidade dentro dos prazos.
              </li>
            </ul>
          </div>
        </div>
      </StyledDiv>
    </Container>
  )
}

const StyledDiv = styled.div`
  background-color: ${props => props.theme.body.background};

  h2 {
    margin-bottom: 1rem;
  }
  .orgcontainer {
    display: flex;
    justify-content: space-around;
  }
  .back {
    height: 40px;
    width: 40px;
    color: ${props => props.theme.body.button.background};
  }

  .orgdesc {
    display: flex;
    flex-direction: column;
    padding: 0 1.25rem;
    justify-content: center;
    border-left: 1px solid ${props => props.theme.body.button.background};
    margin: 3.25rem 0;
    ul {
      padding: 0;
      li {
        line-height: 1.6rem;
      }
    }
  }

  .orglist {
    margin: 1rem 0;
    &__item {
      display: flex;
      margin: 1.25rem 0;
      span {
        align-items: center;
        margin: auto 0;
      }
      &--title {
        cursor: pointer;

        width: 9rem;
        padding: 0.75rem 0rem;
        text-align: center;
        background-color: ${props => props.theme.body.button.background};
        color: ${props => props.theme.body.button.foreground};
      }
    }
  }
  background-color: ${props => props.theme.body.background};
  color: ${props => props.theme.body.title.foreground};

  .inactive-desc {
    display: none;
  }

  .active-org {
    span {
      display: block;
    }
  }
  .inactive-org {
    background-color: ${props => props.theme.body.background};
    color: ${props => props.theme.body.button.background};
    & + span {
      display: none;
    }
  }
  .currently {
    color: ${props => props.theme.body.highlight};
  }
`
