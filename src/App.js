import React, { Component } from 'react';
import {
  BrowserRouter, Route, Switch, Redirect
} from "react-router-dom";
import { createBrowserHistory } from "history";
import MediaQuery from 'react-responsive';
import Main from "./Main";
import Login from "./container/login/Login";
// import './App.css';

// import './style/antd/index.less';
import { Layout, Menu, Icon } from 'antd';
const { Header, Content, Footer, Sider } = Layout;

// export default () => {
// <BrowserRouter basename="aa/bb">
//   <Switch>
//     <Route exact path="/" render={() => <Redirect to="/aaa" />} />
//     {/* <Route path="/app" component={main} />
//     <Route path="/404" component={NotFound} />
//     <Route path="/login" component={Login} />
//     <Route component={NotFound} /> */}
//   </Switch>
// </BrowserRouter>
// }

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      collapsed: true
    }
  }

  render() {
    return (
      <div>
        <MediaQuery query='(min-device-width:1224px)'>
          <BrowserRouter>
            <Switch>
              <Route exact path="/" render={() => <Redirect to="/login" push />} />
              {/* <Route exact path="/" render={() => <Redirect to="/aaa" />} /> */}
              <Route exact path="/login" component={Login} />
            </Switch>
          </BrowserRouter>
          {/* <Layout style={{}}>
            <Sider
              style={{ height: "100vh" }}
              trigger={null}
              collapsible
              collapsed={this.state.collapsed}
            >
              <div className="logo" />
              <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
                <Menu.Item key="1">
                  <Icon type="user" />
                  <span>nav 1</span>
                </Menu.Item>
                <Menu.Item key="2">
                  <Icon type="video-camera" />
                  <span>nav 2</span>
                </Menu.Item>
                <Menu.Item key="3">
                  <Icon type="upload" />
                  <span>nav 3</span>
                </Menu.Item>
              </Menu>
            </Sider>
            <Layout>
              <Header>Header</Header>
              <Content> <span className="demo1">Content</span></Content>
              <Footer>Footer</Footer>
            </Layout>
          </Layout> */}
        </MediaQuery>
        <MediaQuery query='(max-device-width:1224px)'>
          <div>
            32432
          </div>
        </MediaQuery>

      </div>
    );
  }
}