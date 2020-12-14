import React, { Component} from 'react';


class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
  }
render() {
  return (
    <div className="category-tab">
      <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId})} ripple>

      </Tabs>
    </div>
  )
}
}
export default Projects; 
