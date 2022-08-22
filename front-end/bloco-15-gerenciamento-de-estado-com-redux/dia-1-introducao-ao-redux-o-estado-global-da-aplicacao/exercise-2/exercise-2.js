const themeButton = document.getElementById('toggle-theme');
const statusButton = document.getElementById('toggle-status');

const THEME_INITIAL_STATE = {
  theme: 'dark',
};
const STATUS_INITIAL_STATE = {
  status: 'offline',
};

const themeReducer = (state = THEME_INITIAL_STATE, action) => {
  const { theme } = state;
  switch (action.type) {
    case 'THEME': return {
      ...state,
      theme: !theme,
    };
    default: return state;
  }
};

const statusReducer = (state = STATUS_INITIAL_STATE, action) => {
  const { status } = state;
  switch (action.type) {
    case 'STATUS': return {
      ...state,
      status: !status,
    };
    default: return state;
  }
};

const reducers = Redux.combineReducers({
  themeReducer,
  statusReducer,
});

const store = Redux.createStore(reducers);

themeButton.addEventListener('click', () => {
  store.dispatch({
    type: 'THEME'
  });
});

statusButton.addEventListener('click', () => {
  store.dispatch({
    type: 'STATUS'
  });
});