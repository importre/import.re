import React from 'react';
import mui from 'material-ui';
import bs from 'react-bootstrap';

const {
  Card,
  CardMedia,
  CardTitle,
  List,
  ListDivider,
  ListItem,
} = mui;

const {
  Row,
  Col,
} = bs;

const ThemeManager = new mui.Styles.ThemeManager();

let MyCard = React.createClass({

  getInitialState() {
    return {
      name: 'Jaewe Heo',
      nickname: 'importre',
      photo: 'https://avatars1.githubusercontent.com/u/1744446'
    }
  },

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
          <Col smOffset={3} sm={6}>
            <Card>
              <CardMedia overlay={<CardTitle title={this.state.name} subtitle={this.state.nickname}/>}>
                <img src={this.state.photo}/>
              </CardMedia>
              <ListDivider/>
              <List>
                <ListItem href="http://riiid.co">Riiid!</ListItem>
              </List>
              <ListDivider/>
              <List>
                <ListItem href="https://github.com/importre">Github</ListItem>
                <ListItem href="https://facebook.com/importre">Facebook</ListItem>
                <ListItem href="https://twitter.com/importre">Twitter</ListItem>
              </List>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
});

export default MyCard;
