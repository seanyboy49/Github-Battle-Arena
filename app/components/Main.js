const React = require('react');

class Main extends React.Component{
  render() {
    return (
      <div className='main-container'>
        {this.props.children}
      </div>
    )
  }
}



module.exports = Main;
