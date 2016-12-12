const React = require('react');
const PropTypes = React.PropTypes;
const styles = require('../styles');
const UserDetails = require('./UserDetails')
const UserDetailsWrapper = require('./UserDetailsWrapper')


const puke = obj => {
  return <pre>{JSON.stringify(obj, 2, ' ')}</pre>
}

const Results = props => {
  const winningIndex = props.scores[0] > props.scores[1] ? 0 : 1;
  const losingIndex = winningIndex === 0 ? 1 : 0;
  return (
    <div className="jumbotron col-sm-12 text-center" style={styles.transparentBG}>
      <h1>Results</h1>
      <div className='col-sm-8 col-sm-offset-2'>
        <UserDetailsWrapper header="Winner">
          <UserDetails score={props.scores[winningIndex]} info={props.playersInfo[winningIndex]} />
        </UserDetailsWrapper>
        <UserDetailsWrapper header="Loser">
          <UserDetails score={props.scores[losingIndex]} info={props.playersInfo[losingIndex ]} />
        </UserDetailsWrapper>

      </div>

    </div>
  )

}

Results.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  playersInfo: PropTypes.array.isRequired,
  scores: PropTypes.array.isRequired
}

module.exports = Results;
