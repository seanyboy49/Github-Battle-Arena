const React = require('react');
const PropTypes = React.PropTypes;
const styles = require('../styles');
const UserDetails = require('./UserDetails');
const UserDetailsWrapper = require('./UserDetailsWrapper');
const Link = require('react-router').Link;
const MainContainer = require('./MainContainer');


const puke = obj => {
  return <pre>{JSON.stringify(obj, 2, ' ')}</pre>
}

const Results = props => {
  if (props.isLoading === true) {
    return (
      <Loading />
    )
  }
  if(props.scores[0] === props.scores[1]) {
    return (
      <MainContainer>
        <h1>It's a tie!</h1>
        <StartOver />
      </MainContainer>
    )
  }

  function StartOver() {
    return (
      <div className='col-sm-12' style={styles.space}>
        <Link to='/playerOne' >
          <button type='button' className='btn btn-lg btn-danger'>Start Over</button>
        < /Link>
        </div>
    )
  }

  const winningIndex = props.scores[0] > props.scores[1] ? 0 : 1;
  const losingIndex = winningIndex === 0 ? 1 : 0;
  return (
    <MainContainer>
      <h1>Results</h1>
      <div className='col-sm-8 col-sm-offset-2'>
        <UserDetailsWrapper header="Winner">
          <UserDetails score={props.scores[winningIndex]} info={props.playersInfo[winningIndex]} />
        </UserDetailsWrapper>
        <UserDetailsWrapper header="Loser">
          <UserDetails score={props.scores[losingIndex]} info={props.playersInfo[losingIndex ]} />
        </UserDetailsWrapper>
      </div>
      <StartOver />
    </MainContainer>
  )

}

Results.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  playersInfo: PropTypes.array.isRequired,
  scores: PropTypes.array.isRequired
}

module.exports = Results;
