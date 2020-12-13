import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';



class LandingPage extends Component {
render() {
  return (
    <div style={{width: '100%', margin: 'auto' }}>
    <Grid className="landing-grid">
    <Cell col={12}>
    <img
      src="https://img0-placeit-net.s3-accelerate.amazonaws.com/uploads/stage/stage_image/64998/optimized_large_thumb_stage.jpg"
      alt="avatar"
      className="avatar-img"/>
      <div className="banner-text">
        <h1>Full Stack Web Developer</h1>
      </div>
    </Cell>
    </Grid>
    </div>
  )
}
}
export default LandingPage; 
