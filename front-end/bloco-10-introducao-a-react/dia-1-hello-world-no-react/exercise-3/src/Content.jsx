import { Component } from "react";

const conteudos = [
  {
    conteudo: 'High Order Functions',
    bloco: 8,
    status: 'Aprendido'
  },
  {
    conteudo: 'Composicao de Componentes',
    bloco: 11,
    status: 'Aprendendo',
  },
  {
    conteudo: 'Composicao de Estados',
    bloco: 12,
    status: 'Aprenderei'
  },
  {
    conteudo: 'Redux',
    bloco: 16,
    status: 'Aprenderei'
  },
];

const createList = ({ conteudo, bloco, status }) => {
  return (
    <li>
      <p>O conteúdo é: { conteudo }</p>
      <p>Status: { status }</p>
      <p>Bloco: { bloco }</p>
    </li>
  )
}

const list = conteudos.map((value) => createList(value));

class Content extends Component {
  render() {
    return (
      <ol>
        { list }
      </ol>
    )
  }
};

export default Content;