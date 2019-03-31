import React, { Component } from "react";
import { connect } from "react-redux";
import _ from "lodash";
import { Row, Col, Input, Icon, Button } from "antd";
// 在阿里图标库中引用自己的图标
// const WindowIcon = Icon.createFromIconfontCN({
//   scriptUrl: '//at.alicdn.com/t/font_1073081_2vpsey7yok8.js', // 在 iconfont.cn 上生成
// });
{/* <WindowIcon type="icon-icon_centos"/> */ }
class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userName: "",
      password: "",
    };

    this.onClickEmptyContent = this.onClickEmptyContent.bind(this);
    this.onClickLoginButton = this.onClickLoginButton.bind(this);
    this._renderEmptyIcon = this._renderEmptyIcon.bind(this);
  }

  onClickLoginButton() {
    console.log("<onClickLoginButton>");
  }

  onClickEmptyContent(id) {
    console.log("<onClickEmptyContent>");
    this.setState({ [id]: "" });
  }

  _renderEmptyIcon(id) {
    return (
      <Icon type="close-circle" onClick={() => this.onClickEmptyContent(id)} />
    );
  }

  render() {
    const suffixUsername = this.state.userName ? this._renderEmptyIcon("userName") : null;
    const suffixPassword = this.state.password ? this._renderEmptyIcon("password") : null;
    return (
      <div className="login border1">
        <div className="login2 border2">
          <Row type="flex" justify="center" className="loginFirstLine">
            <Col span="20">
              <Input
                id="userName"
                placeholder="admin/user"
                prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                suffix={suffixUsername}
                value={this.state.userName}
                onChange={(event) => { this.setState({ [event.target.id]: event.target.value }); }}
              />
            </Col>
          </Row>
          <Row type="flex" justify="center" className="loginFirstLine">
            <Col span="20">
              <Input
                id="password"
                placeholder="admin/user"
                prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                suffix={suffixPassword}
                value={this.state.password}
                onChange={(event) => { this.setState({ [event.target.id]: event.target.value }); }}
              />
            </Col>
          </Row>
          <Row type="flex" justify="center" className="loginFirstLine">
            <Col><Button type="primary" onClick={this.onClickLoginButton}>登陆</Button></Col>
          </Row>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return state;
}

function mapDispatchToProps() {
  return {};
}
export default connect(mapStateToProps, mapDispatchToProps)(Login);