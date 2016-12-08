const React = require('react');
const ConfirmBattle = require('../components/ConfirmBattle')

class ConfirmBattleContainer extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      playersInfo: []
    }
  }
  componentDidMount() {
    const query = this.props.location.query
  }
  render() {
    return (
      <ConfirmBattle
      isLoading={this.state.isLoading}
      playersInfo={this.state.playersInfo} />
    )
  }
}

ConfirmBattleContainer.contextTypes = {
  router: React.PropTypes.object.isRequired
}

module.exports = ConfirmBattleContainer
