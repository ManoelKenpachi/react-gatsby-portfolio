import React from "react"
import styled from "styled-components"
import Container from "../components/container"
import Timeline from "../images/assets/timeline"
import logo from "../images/ManoelKenpachi.jpg"
import { SEO } from "../components"
export default function About() {
  return (
    <Container>
      <SEO title="Sobre" />

      <StyledAbout>
        <h2>sobre</h2>

        <div style={{ display: "flex", justifyContent: "center" }}>
          <img
            src={logo}
            height="200"
            width="200"
            style={{
              borderRadius: "50%",
            }}
            alt="test-alt"
          />
        </div>

        <p>
          Neste portfólio, busco refletir sobre questões fundamentais que moldam minha 
          identidade como indivíduo e profissional.
          Para cada pergunta da reflexão dialética de Sócrates, 
          apresento uma resposta honesta comigo mesmo.
          Acredito que o autoconhecimento e a evolução contínua são essenciais para 
          alcançar excelência e propósito.
        </p>

        <article>
          <strong>
            <h4>Quem sou eu?</h4>
          </strong>
          <p>
            Sou um desenvolvedor apaixonado por tecnologia e inovação, sempre em busca de novos desafios e aprendizados. 
            Minha jornada é guiada pela curiosidade e pelo desejo de criar soluções que impactem positivamente a vida das pessoas.
          </p>
        </article>

        <article>
          <strong>
            <h4>Qual o propósito da minha vida?</h4>
          </strong>
          <p>
            Acredito que o propósito da minha vida é contribuir para a construção de um mundo melhor, 
            para a minha família e amigos.
          </p>
        </article>

        <article>
          <strong>
            <h4>O que considero virtude e como a pratico?</h4>
          </strong>
          <p>
            Uma virtude que considero essencial é a felicidade. Carregar alegria e positividade por onde passa, demonstrar companheirismo e empatia com o próximo.
          </p>
        </article>

        <article>
          <strong>
            <h4>O que significa fazer bem o meu trabalho?</h4>
          </strong>
          <p>
            Fazer bem o meu trabalho significa entregar resultados de alta qualidade, cumprir prazos e estar sempre disposto a colaborar com a equipe. É também buscar constantemente melhorar minhas habilidades e conhecimentos, para que eu possa oferecer soluções inovadoras e eficientes.
          </p>
        </article>

        <article>
          <strong>
            <h4>Minha profissão reflete meus valores pessoais?</h4>
          </strong>
          <p>
            Sim, minha profissão reflete meus valores pessoais. Acredito na importância da integridade. Esses valores são fundamentais. 
          </p>
        </article>

      </StyledAbout>
    </Container>
  )
}

const StyledAbout = styled.section`
  h2 {
    margin-bottom: 3rem;
  }
  svg {
    path {
      color: white;
    }
  }

  p {
    margin: 1rem 0;
    span {
      color: #00bfa5;
    }
  }

  @media only screen and (max-width: 768px) {
    img {
      height: 150px;
      width: 150px;
    }
    svg {
      width: 420px;
      margin-top: -100px;
    }
  }

  @media only screen and (max-width: 480px) {
    img {
      height: 100px;
      width: 100px;
    }
    svg {
      width: 280px;
      margin-top: -150px;
    }
  }
`
