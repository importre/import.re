import React from 'react';
import mui from 'material-ui';
import bs from 'react-bootstrap';

const { Card, CardMedia, CardTitle, FontIcon, List, ListDivider, ListItem, SvgIcon, } = mui;
const { Row, Col, } = bs;
const ThemeManager = new mui.Styles.ThemeManager();

let MyCard = React.createClass({

  childContextTypes: {
    muiTheme: React.PropTypes.object
  },

  getChildContext() {
    return {
      muiTheme: ThemeManager.getCurrentTheme()
    };
  },

  render() {
    return (
      <div className="container">
        <Row className="topbottom">
          <Col smOffset={4} sm={4}>
            <Card>
              <CardMedia
                overlay={<CardTitle title={"Jaewe Heo"} subtitle={"importre"}/>}>
                <img src={"images/importre.jpg"}/>
              </CardMedia>
              <List subheader="Work">
                <ListItem leftIcon={<i className="material-icons">work</i>}
                          secondaryText={"Software Engineer / Co-founder"}
                          secondaryTextLines={2} href="http://riiid.co">
                  Riiid!
                </ListItem>
              </List>

              <ListDivider/>
              <List subheader="Contact">
                <ListItem leftIcon={<i className="material-icons">star</i>}
                          href="https://github.com/importre">Github</ListItem>
                <ListItem insetChildren={true}
                          href="https://facebook.com/importre">Facebook</ListItem>
                <ListItem insetChildren={true}
                          href="https://twitter.com/importre">Twitter</ListItem>
              </List>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
});

export default MyCard;
