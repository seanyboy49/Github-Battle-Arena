const React = require('react');
const ConfirmBattle = require('../components/ConfirmBattle')
const githubHelpers = require('../utils/githubHelpers')

class ConfirmBattleContainer extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      playersInfo: []
    }
    this.handleInitiateBattle = this.handleInitiateBattle.bind(this)
  }
  componentDidMount() {
    const query = this.props.location.query;
    const that = this;
    githubHelpers.getPlayersInfo([query.playerOne, query.playerTwo])
    .then(function(players) {
      that.setState({
        isLoading: true,
        playersInfo: [players[0], players[1]]
      })
    })
  }
  handleInitiateBattle() {
    this.context.router.push({
      pathname: '/results',
      state: {
        playersInfo: this.state.playersInfo
      }
    })
  }
  render() {
    return (
      <ConfirmBattle
      isLoading={this.state.isLoading}
      onInitiateBattle={this.handleInitiateBattle}
      playersInfo={this.state.playersInfo} />
    )
  }
}

ConfirmBattleContainer.contextTypes = {
  router: React.PropTypes.object.isRequired
}

module.exports = ConfirmBattleContainer
