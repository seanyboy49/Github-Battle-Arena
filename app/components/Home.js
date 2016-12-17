const React = require('react');
const ReactRouter = require('react-router');
const { Link } = ReactRouter;
const MainContainer = require('./MainContainer');

class Home extends React.Component{
  render() {
    return (
      <MainContainer>
        <h1>GitHub Battle Arena</h1>
        <p className='lead'> What even is React </p>
        <Link to='/playerOne'>
          <button type='button' className='btn btn-lg btn-success'>Get Started</button>
        </Link>
      </MainContainer>
    )
  }
}


module.exports = Home;
