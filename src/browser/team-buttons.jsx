var React = require("react");
var TeamButton = require("./team-button.jsx");
require("./team-buttons.less");

var TeamButtons = React.createClass({
  render: function(){
    var style = this.calculateStyle();
    return (
      <div className="teamButtons" style={style}>
        {this.renderButtons()}
      </div>
    );
  },
  renderButtons: function(){
    var names = Object.keys(this.props.teams);
    return names.map(this.renderButton);
  },
  renderButton: function(teamName){
    var team = this.props.teams[teamName];
    return (
      <TeamButton team={team} key={teamName} selectedTeam={this.props.selectedTeam}/>
    );
  },
  calculateStyle: function(){
    var selectedTeam = this.props.teams[this.props.selectedTeam];
    if (selectedTeam){
      var style = {
        backgroundColor: selectedTeam.themeData.sidebarBackground
      };
      return style;
    } else {
      return {};
    }
  }
});

module.exports = TeamButtons;
