const React = require('react')
const PropTypes = React.PropTypes

const UserDetailsWrapper = props => {
  return (
    <div className='col-sm-6'>
      <p className="lead">{props.header}</p>
    {props.children}
    </div>
  )
}

UserDetailsWrapper.propTypes = {

}

module.exports = UserDetailsWrapper
