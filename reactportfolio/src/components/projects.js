import React, { Component} from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
  }
  toggleCategories() {
    if (this.state.activeTab === 0) {
      return(
        <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
          <CardTitle style={{color: '#fff', height: '176px', background: 'url() center / cover'}}>Project 1</CardTitle>
        <CardText>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, </CardText>
        <CardActions border>
        <Button colored>GitHub</Button>
        <Button colored>GitHub</Button>
        <Button colored>GitHub</Button>
        </CardActions>
        <CardMenu>

        </CardMenu>
        </Card>
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
