const React = require('react');
const PropTypes = React.PropTypes

function puke (object) {
  return <pre>{JSON.stringify(object, null, ' ')}</pre>
}

const ConfirmBattle = props => {
  return props.isLoading === true
  ? <p> LOADING! </p>
  : <div> CONFIRM BATTLE! {puke(props)} </div>
}

ConfirmBattle.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  onInitiateBattle: PropTypes.func.isRequired,
  playersInfo: PropTypes.array.isRequired
}

module.exports = ConfirmBattle;
