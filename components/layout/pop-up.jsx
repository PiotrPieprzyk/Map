import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

const PopUp = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 2;
  color: white;
  display: ${(props) => (props.visible == true ? 'block' : 'none')};
`;

class PopUpHolder extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <PopUp visible={this.props.visible}>{this.props.popupComponent}</PopUp>
    );
  }
}

const PupUpWithRedux = connect((state) => state)(PopUpHolder);

export default PupUpWithRedux;
