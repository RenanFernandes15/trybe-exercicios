const themeButton = document.getElementById('toggle-theme');
const statusButton = document.getElementById('toggle-status');

const THEME_INITIAL_STATE = {
  theme: 'dark',
};
const STATUS_INITIAL_STATE = {
  status: 'offline',
};

const themeReducer = (state = THEME_INITIAL_STATE, action) => {
  switch (action.type) {
    default: return state;
  }
};

const statusReducer = (state = STATUS_INITIAL_STATE, action) => {
  switch (action.type) {
    default: return state;
  }
};

const reducers = Redux.combineReducers({
  themeReducer,
  statusReducer,
});

const store = Redux.createStore(reducers);

themeButton.addEventListener('click', () => {
  // coloque o código aqui.
});

statusButton.addEventListener('click', () => {
  // coloque o código aqui.
});