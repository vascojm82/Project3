let React = require('react');

export let ModalContext = React.createContext({
  modalShown: 0,
  toggleModalShown: () => { modalShown++ },
});
