const React = require('react');

const ConfirmBattle = props => {
  return props.isLoading === true
  ? <p> LOADING! </p>
  : <p> CONFIRM BATTLE! </p>
}

module.exports = ConfirmBattle;
