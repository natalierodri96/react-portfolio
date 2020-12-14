import React, { Component} from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardActions, Button, CardMenu, IconButton } from 'react-mdl';

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
  }
  toggleCategories() {
    if (this.state.activeTab === 0) {
      return(
        <div>
          <h1>This is Project 1</h1>
        </div>
    )
  } else if(this.state.activeTab === 1) {
    return (
      <div>
        <h1>This is Project 2</h1>
      </div>
    )
  } else if (this.state.activeTab === 2) {
    return (
      <div>
        <h1>This is Homework 1</h1>
      </div>
    )
} else if(this.state.activeTab === 3) {
  return (
    <div>
      <h1>This is Homework 2</h1>
    </div>
  )
}

render() {
  return (
    <div className="category-tab">
      <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId})} ripple>
      <Tab>Project 1</Tab>
      <Tab>Project 2</Tab>
      <Tab>Homework 1</Tab>
      <Tab>Homework 2</Tab>
      </Tabs>
      <section className="projects-grid">
        <Grid className="projects-grid">
          <Cell col={12}>
  <div className="content">{this.toggleCategories()}</div>

          </Cell>
        </Grid>
        {this.toggleCategories()}
      </section>
    </div>
  )
}
}
export default Projects; 
