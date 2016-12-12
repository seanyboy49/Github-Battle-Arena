const React = require('react');
const PropTypes = React.PropTypes;
const styles = require('../styles');
const Link = require('react-router').Link;
const UserDetails = require('./UserDetails');
const UserDetailsWrapper = require('./UserDetailsWrapper');
const MainContainer = require('./MainContainer');
const Loading = require('./Loading')

function puke (object) {
  return <pre>{JSON.stringify(object, null, ' ')}</pre>
}

const ConfirmBattle = props => {
  return props.isLoading === true
  ? <Loading speed={500} text={"Hold on a goddamn second"}/>
: <MainContainer>
    <h1>Confirm Players</h1>
    <div className='col-sm-8 col-sm-offset-2'>
      <UserDetailsWrapper header='Player One'>
        <UserDetails info={props.playersInfo[0]}/>
      </UserDetailsWrapper>
      <UserDetailsWrapper header='Player Two'>
        <UserDetails info={props.playersInfo[1]}/>
      </UserDetailsWrapper>
    </div>
    <div className='col-sm-8 col-sm-offset-2'>
      <div className='col-sm-12' style={styles.space}>
        <button type='button' className='btn btn-lg btn-success' onClick={props.onInitiateBattle}>INITIATE BATTLE!</button>
      </div>
      <div className='col-sm-12' style={styles.space}>
        <Link to='/playerOne'>
          <button type='button' className='btn btn-lg btn-danger'>Reselect Players</button>
        </Link>
      </div>
    </div>
  </MainContainer>
}

ConfirmBattle.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  onInitiateBattle: PropTypes.func.isRequired,
  playersInfo: PropTypes.array.isRequired
}

module.exports = ConfirmBattle;
