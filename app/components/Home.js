const React = require('react');
const transparentBG = require('../styles').transparentBG
const ReactRouter = require('react-router')
const { Link } = ReactRouter

class Home extends React.Component{
  render() {
    return (
      <div className='jumbotron col-sm-12 text-center' style={transparentBG}>
        <h1>Github Battle</h1>
        <p className='lead'> What even is React </p>
        <Link to='/playerOne'>
          <button type='button' className='btn btn-lg btn-success'>Get Started</button>
        </Link>
      </div>
    )
  }
}


module.exports = Home;
