import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';



class LandingPage extends Component {
render() {
  return (
    <div style={{width: '100%', margin: 'auto' }}>
    <Grid className="landing-grid">
    <Cell col={12}>
    <img
      src="https://mail.google.com/mail/u/0/?ui=2&view=btop&ver=ops2cvpehp6#attid%253Datt_1765a23b144ab569_0.1_b4d810d1_413d5eaf_94d70dce_98993f12_3b7397fb%25252FImage-1.png"
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
