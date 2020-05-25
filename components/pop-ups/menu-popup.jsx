import React, { Component } from 'react';
import { connect } from 'react-redux';
import { gsap, TimelineLite } from 'gsap';
import Link from 'next/link';
import { Box, Text } from '../theme/myStyledComponents';
import styled from 'styled-components';
import {
  LayoutHolder,
  LinksGroupsWrapper,
  StyledLink,
  FooterElement,
} from './menu-popup.style';

const BackButton = styled(Box)`
  z-index: 2;
  cursor: pointer;
`;
class menuPopup extends Component {
  constructor(props) {
    super(props);
    this.myTweenStart = new TimelineLite({ paused: true });
    this.myTweenEnd = new TimelineLite({ paused: true });

    // mapLinks
    this.mapLinks = [
      { name: 'calendar', href: '/calendar' },
      { name: 'repeat', href: '/' },
      { name: 'road', href: '/road' },
      { name: 'social', href: '/social' },
    ];

    // pageLinks
    this.pageLinks = [
      { name: 'Log in', href: '/Login' },
      { name: 'Register', href: '/Register' },
    ];

    // refs
    this.menuHolderElment = null;
    this.mapLinksElements = [];
    this.pageLinksElements = [];
    this.followerMapElement = null;
    this.menuFooterElements = [];

    // functions
    this.menuClick = () => {
      let dispatch = this.props.dispatch;
      this.myTweenEnd
        .to(this.menuHolderElment, { opacity: 0, duration: 0.2 })
        .then(() => {
          dispatch({ type: 'changeVisibility', popUpvisible: false });
          dispatch({
            type: 'setPopupComponent',
            component: '',
          });
        });
      this.myTweenEnd.play();
    };
  }
  componentDidMount() {
    const {
      myTweenStart,
      menuHolderElment,
      pageLinksElements,
      mapLinksElements,
      menuFooterElements,
      followerMapElement,
    } = this;

    // animation
    myTweenStart
      .from(menuHolderElment, { opacity: 0, duration: 0.2 })
      .addLabel('Mount')
      .staggerFrom(
        pageLinksElements,
        0.4,
        { y: 50, opacity: 0, ease: 'power2.out' },
        0.2
      )
      .staggerFrom(
        mapLinksElements,
        0.4,
        { y: 50, opacity: 0, ease: 'power2.out' },
        0.2,
        'Mount'
      )
      .addLabel('MountEnd')
      .staggerFrom(menuFooterElements, 0.5, { opacity: 0, ease: 'power2.out' })
      .from(followerMapElement, { opacity: 0, duration: 0.1 }, 'MountEnd');

    myTweenStart.play();
  }
  render() {
    let bigFontSize = 'calc(25px + 3vw)';
    let footerFont = 'calc(14px + 0.5vw)';

    return (
      <Box
        xs={{ width: '100%', height: '100%', position: 'relative' }}
        background={'black'}
        ref={(div) => (this.menuHolderElment = div)}
      >
        <BackButton
          xs={{
            height: '40px',
            position: 'absolute',
            right: '20px',
            top: '25px',
          }}
          sm={{
            right: '40px',
            top: '30px',
          }}
          md={{ top: '35px' }}
          onClick={this.menuClick}
        >
          <Text
            xs={{ fsize: 'calc(14px + 1vw)' }}
            md={{ fsize: 'calc(12px + 1vw)' }}
            colorText={'white'}
          >
            BACK
          </Text>
        </BackButton>
        <LayoutHolder
          xs={{
            width: 'calc(100% - 30px)',
            height: 'calc(100% - 80px)',
            padding: '40px 15px',
          }}
          sm={{
            width: 'calc(100% - 240px)',
            height: 'calc(100% - 80px)',
            padding: '40px 120px',
          }}
        >
          {/* Wrapper groups links */}
          <LinksGroupsWrapper
            xs={{ fd: 'column', ai: 'center' }}
            sm={{ fd: 'row' }}
          >
            {/* Map + link holder */}
            <Box
              xs={{
                display: 'flex',
                flex: '1',
                jc: 'center',
                order: '2',
                padding: ' 30px 0 0 0',
              }}
              sm={{ order: '1', padding: '0' }}
            >
              {/*  Map */}
              <Box
                ref={(div) => (this.followerMapElement = div)}
                xs={{ fsize: bigFontSize }}
                className="following-map"
              >
                Map.
              </Box>
              {/* END Map */}

              {/* links */}
              <Box
                xs={{
                  display: 'flex',
                  flex: '1',
                  flexDirection: 'column',
                  jc: 'center',
                }}
              >
                {this.mapLinks.map((element, index) => {
                  let link;
                  if (element.name == 'repeat') {
                    link = (
                      <Link key={element.name} href={element.href}>
                        <StyledLink
                          xs={{ fsize: bigFontSize }}
                          active
                          ref={(div) => (this.mapLinksElements[index] = div)}
                        >
                          {element.name}
                        </StyledLink>
                      </Link>
                    );
                  } else {
                    link = (
                      <Link key={element.name} href={element.href}>
                        <StyledLink
                          xs={{ fsize: bigFontSize }}
                          ref={(div) => (this.mapLinksElements[index] = div)}
                        >
                          {element.name}
                        </StyledLink>
                      </Link>
                    );
                  }
                  return link;
                })}
              </Box>
              {/* END links */}
            </Box>
            {/*  END Map + link holder */}

            {/* link holder */}
            <Box
              xs={{
                display: 'flex',
                flex: '1',
                flexDirection: 'column',
                jc: 'center',
                order: '1',
              }}
              sm={{ order: '3' }}
            >
              {this.pageLinks.map((element, index) => {
                let link;

                link = (
                  <Link key={element.name} href={element.href}>
                    <Text
                      xs={{ ta: 'center', fsize: bigFontSize }}
                      sm={{ ta: 'right' }}
                      colorText={'white'}
                      active
                      ref={(div) => (this.pageLinksElements[index] = div)}
                    >
                      {element.name}
                    </Text>
                  </Link>
                );

                return link;
              })}
            </Box>
            {/* END link holder */}
          </LinksGroupsWrapper>
          {/* END Wrapper groups links */}

          {/* Footer */}
          <Box
            xs={{
              d: 'flex',
              width: 'inherit',
              position: 'absolute',
              bottom: '40px',
              flexWrap: 'wrap',
              jc: 'center',
            }}
          >
            <Box
              xs={{ margin: '5px' }}
              ref={(div) => (this.menuFooterElements[0] = div)}
            >
              <Link href={'#'}>
                <Text colorText={'white'} xs={{ fsize: footerFont }}>
                  More about procjet Map.
                </Text>
              </Link>
            </Box>
            <Box
              xs={{ margin: '5px' }}
              sm={{ margin: '0 0 0 auto' }}
              ref={(div) => (this.menuFooterElements[1] = div)}
            >
              <Link href={'#'}>
                <Text colorText={'white'} xs={{ fsize: footerFont }}>
                  Contact
                </Text>
              </Link>
            </Box>
          </Box>
        </LayoutHolder>
      </Box>
    );
  }
}

export default connect((state) => state)(menuPopup);
