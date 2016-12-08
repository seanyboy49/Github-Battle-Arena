const React = require('react');
const ReactDOM = require('react-dom');
const routes = require('./config/routes');

const USER_DATA = {
  name: 'Sean Lee',
  username: 'seanyboy49',
  image: 'https://avatars2.githubusercontent.com/u/9387018?v=3&u=0223a72f9bb83be84168ea439a70f5022aa7cc53&s=400'
}

class Link extends React.Component {
  constructor(props) {
    super(props);
    this.changeURL = this.changeURL.bind(this);
  }
  changeURL() {
    console.log(this)
    window.location.replace(this.props.href)
  }
  render() {
    return (
      <span
        style={{color: 'blue', cursor: 'pointer'}}
        onClick={this.changeURL}>
        {this.props.children}
      </span>
    )
  }
}

const ProfilePic = props => <img src={props.imageURL} style={{height: 100, width: 100}} />

const ProfileName = props => <div>{props.name}</div>

const ProfileLink = props => {
  return (
    <div>
      <Link href={"https://www.github.com/" + props.username}> {props.username} </Link>
    </div>
  )
}


class Avatar extends React.Component {
  render() {
    return (
      <div>
        <ProfilePic imageURL={this.props.user.image} />
        <ProfileName name={this.props.user.name} />
        <ProfileLink username={this.props.user.username} />
      </div>
    )
  }
}


ReactDOM.render(routes, document.getElementById('app'));
