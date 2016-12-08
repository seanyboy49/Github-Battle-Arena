const React = require('react');
const PropTypes = React.PropTypes
const styles = require('../styles')
const Link = require('react-router').Link


function puke (object) {
  return <pre>{JSON.stringify(object, null, ' ')}</pre>
}

const ConfirmBattle = props => {
  return props.isLoading === true
  ? <p> LOADING! </p>
: <div className='jumbotron col-sm-12 text-center' style={styles.transparentBG}>
    <h1>Confirm Players</h1>
    <div className='col-sm-8 col-sm-offset-2'>
      <div className='col-sm-6'>
        <p className='lead'>Player 1</p>
        {puke(props.playersInfo[0])}
      </div>
      <div className='col-sm-6'>
        <p className='lead'>Player 2</p>
        {puke(props.playersInfo[1])}
      </div>
    </div>
    <div className='col-sm-8 col-sm-offset-2'>
      <div className='col-sm-12' style={styles.space}>
        <button type='button' className='btn btn-lg btn-success' onClick={props.onInitiateBattle}>INITIATE BATTLE!</button>
      </div>
      <div className='col-sm-12' style={styles.space}>
        LINK TO /PLAYER ONE
      </div>
    </div>
  </div>
}

ConfirmBattle.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  onInitiateBattle: PropTypes.func.isRequired,
  playersInfo: PropTypes.array.isRequired
}

module.exports = ConfirmBattle;
