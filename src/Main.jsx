import React, {Component} from "react";
import {connect} from "react-redux";
import _ from "lodash";

class Main extends Component {

}

function mapStateToProps(state) {
  return state;
}

function mapDispatchToProps(dispatch) {
  return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);
