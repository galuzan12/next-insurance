import {useReducer} from 'react';

import {ModalContext} from './ModalContext';
import {actions, initialState, reducer} from './ModalReducer';

export const ModalProvider = ({children}) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const value = {
    show: state.show,
    modal: state.modal,
    showModal: modal => {
      dispatch({type: actions.SHOW_MODAL, modal});
    },
    hideModal: () => {
      dispatch({type: actions.HIDE_MODAL});
    }
  };

  return (
    <ModalContext.Provider value={value}>{children}</ModalContext.Provider>
  );
};
