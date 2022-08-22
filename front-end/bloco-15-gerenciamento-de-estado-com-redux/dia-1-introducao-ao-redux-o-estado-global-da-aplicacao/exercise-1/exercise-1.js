const previus = document.getElementById('previous');
const next = document.getElementById('next');
const colorParagraph = document.getElementById('value');

const INITIAL_STATE = {
  colors: ['white', 'black', 'red', 'green', 'blue', 'yellow'],
  index: 0,
};

function criarCor() {
  const oneChar = ['1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];
  let cor = '#';
  const aleatorio = () => Math.floor(Math.random() * oneChar.length);
  for (let i = 0; i < 6; i += 1) {
      cor += oneChar[aleatorio()];
  }
  return cor;
}

const reducer = (state = INITIAL_STATE, action) => {
  const { colors, index } = state;
  switch(action.type) {
    case 'NEXT_COLOR': return (index === colors.length - 1) ? state : {
      ...state,
      index: index + 1,
    };
    case 'PREVIOUS_COLOR': return (index === 0) ? state : {
      ...state,
      index: index - 1,
    };
    default: return state;
  }
};

const store = Redux.createStore(reducer);

previus.addEventListener('click', () => {
  store.dispatch({
    type: 'PREVIOUS_COLOR',
  });
});

next.addEventListener('click', () => {
  store.dispatch({
    type: 'NEXT_COLOR',
  });
});

store.subscribe(() => {
  const { index, colors } = store.getState();

  colorParagraph.innerText = colors[index];
});