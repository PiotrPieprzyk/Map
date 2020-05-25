import styled from 'styled-components';
import colorChanger from './color-changer';
import React from 'react';
import HeaderMaskHolder from './header-mask';

// STYLES
const HeaderWrapper = styled.div`
  width: 100%;
  height: inherit;
  position: relative;
  overflow: hidden;
`;

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      event: '',
    };
  }
  componentDidMount() {
    let eventId = document.addEventListener('scroll', () => {
      colorChanger(
        {
          idMask1: 'black-mask',
          idMask2: 'white-mask',
          idContent1: 'black-content',
          idContent2: 'white-content',
        },
        '.black-block'
      );
    });
    this.setState({
      event: eventId,
    });
  }
  componentWillUnmount() {
    document.removeEventListener('scroll', this.state.event);
  }
  render() {
    return (
      <header>
        <HeaderWrapper>
          <HeaderMaskHolder
            title="black"
            theme="black"
            displayDefault="true"
          ></HeaderMaskHolder>
          <HeaderMaskHolder
            title="white"
            theme="white"
            displayDefault="false"
          ></HeaderMaskHolder>
        </HeaderWrapper>
      </header>
    );
  }
}

export default Header;
