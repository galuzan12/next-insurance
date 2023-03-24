export const initialState = {
  show: false,
  modal: null
};

export const actions = {
  SHOW_MODAL: 'Modal/SHOW_MODAL',
  HIDE_MODAL: 'Modal/HIDE_MODAL'
};

export const reducer = (state, action) => {
  switch (action.type) {
    case actions.SHOW_MODAL:
      return {
        show: true,
        modal: action.modal
      };
    case actions.HIDE_MODAL: {
      return initialState;
    }
    default:
      return state;
  }
};
