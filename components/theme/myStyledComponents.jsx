import styled from 'styled-components';
import React, { Component, useRef } from 'react';

import getMediaBP from './getMediaBP';

export const PageHolder = styled.div`
  width: 100%;
  height: 100vh;
  box-sizing: border-box;
  min-height: 100vh;
  max-width: ${({ theme }) => theme.breakpoints.xl}px;
  background: ${({ theme }) => theme.palette.basic.white};
  margin: auto;
  ${(props) => getMediaBP(props)}
`;

export const GridWrapper = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  position: relative;
  box-sizing: border-box;
  background: ${({ background, theme }) =>
    background ? background : theme.palette.basic.white};
  ${(props) => getMediaBP(props)}
`;

export const Box = styled.div`
  box-sizing: border-box;
  background: ${({ background }) => background};
  border-radius: ${({ br }) => br};
  box-shadow: ${({ bs }) => bs};
  ${(props) => getMediaBP(props)}
`;

export const ButtonStyle = styled(Box)`
  overflow: hidden;
  position: relative;
  .ripple {
    border-radius: 50%;
    background-color: rgba(255, 255, 255, 0.2);
    position: absolute;
    transform: scale(0);
    animation: ripple 0.5s linear;
  }
  @keyframes ripple {
    to {
      transform: scale(2.5);
      opacity: 0;
    }
  }
`;

export class Button extends Component {
  constructor(props) {
    super(props);
    this.button = null;
    this.createRipple = function (e) {
      console.log('ripple');
      const d = Math.max(this.button.clientWidth, this.button.clientHeight);
      console.log(e);
      const circle = document.createElement('div');
      circle.style.width = circle.style.height = d + 'px';
      circle.style.left = e.pageX - this.button.offsetLeft - d / 2 + 'px';
      circle.style.top = e.pageY - this.button.offsetTop - d / 2 + 'px';
      circle.classList.add('ripple');
      setTimeout(() => {
        this.button.removeChild(circle);
      }, 500);
      this.button.appendChild(circle);
    };
  }
  componentDidMount() {
    this.button.addEventListener('click', (event) => {
      this.createRipple(event);
    });
  }

  render() {
    return (
      <ButtonStyle
        {...this.props}
        ref={(ref) => {
          this.button = ref;
        }}
      >
        {this.props.children}
      </ButtonStyle>
    );
  }
}

export const Text = styled.div`
  color: ${({ colorText, theme }) =>
    colorText ? colorText : theme.palette.basic.black};
  text-align: left;
  line-height: ${({ lh }) => (lh ? lh : 1.3)};
  font-weight: ${({ fontWeight }) => (fontWeight ? fontWeight : 200)};

  &.deActive {
    filter: opacity(0.8);
  }

  ${(props) => getMediaBP(props)}
`;

export const Card = styled(Box)`
  background: ${({ theme }) => theme.palette.basic.white};
  box-shadow: ${({ shadow, theme }) => theme.shadow[shadow]};
  border-radius: ${({ theme }) => theme.borderRadius.normal};
  padding: 10px 15px;
  z-index: 2;
  position: relative;
  width: 100%;
  height: 100%;
`;

export const UnderCardMenu = styled(Card)`
  background: ${({ theme }) => theme.palette.main.normal};
  position: absolute;
  z-index: 1;
`;

export const ImageWrapper = styled(Box)`
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    width: 100%;
  }
`;

import Link from 'next/link';
export class CardWithUnderCardMenu extends Component {
  constructor(props) {
    super(props);
    this.card = null;
    this.state = {
      cardPosition: 0,
      mouseDown: false,
    };
    this.mouseMoving = (e) => {
      if (this.state.mouseDown) {
        let moveDistance = e.movementY;
        let currentPositon;
        if (this.state.cardPosition + moveDistance > 55) {
          currentPositon = 55;
        } else if (this.state.cardPosition + moveDistance < 0) {
          currentPositon = 0;
        } else {
          currentPositon = this.state.cardPosition + moveDistance;
        }

        e.target.style.top = `${currentPositon}px`;
        this.setState((state) => ({
          cardPosition: currentPositon,
        }));
      }
    };
    this.mouseDown = (e) => {
      this.setState((state) => ({
        mouseDown: true,
      }));
    };
    this.mouseUp = (e) => {
      this.setState((state) => ({
        mouseDown: false,
      }));
    };
  }

  render() {
    let bigFontSize = '22px';
    return (
      <Box {...this.props}>
        <UnderCardMenu>
          <Box xs={{ display: 'flex' }}>
            <Link href={this.props.link1.href}>
              <Text
                xs={{ fsize: bigFontSize }}
                fontWeight={400}
                colorText={({ theme }) => theme.palette.basic.white}
              >
                {this.props.link1.name}
              </Text>
            </Link>
            <Link href={this.props.link2.href}>
              <Text
                xs={{ mar: '0 0 0 auto', fsize: bigFontSize }}
                fontWeight={400}
                colorText={({ theme }) => theme.palette.basic.white}
                className={'deActive'}
              >
                {this.props.link2.name}
              </Text>
            </Link>
          </Box>
        </UnderCardMenu>
        <Card
          ref={(div) => (this.card = div)}
          shadow={15}
          onMouseMove={this.mouseMoving}
          onMouseDown={this.mouseDown}
          onMouseUp={this.mouseUp}
        >
          {this.props.children}
        </Card>
      </Box>
    );
  }
}
