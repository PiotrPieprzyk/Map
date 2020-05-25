import styled from 'styled-components';
import React from 'react';
import MenuButton from './header-menu-button';
import { Box, Text } from '../../theme/myStyledComponents';

const HeaderMask = styled(Box)`
  opacity: ${(props) => (props.display == 'true' ? `1` : `0`)};
`;
const ImgWrapper = styled(Box)`
  img {
    width: 100%;
  }
`;
const HeaderText = styled(Text)`
  color: ${({ colorText, theme }) =>
    colorText == 'white'
      ? theme.palette.basic.white
      : theme.palette.basic.black};
`;
function Logo(props) {
  const isBlack = props.theme == 'black';
  let img = isBlack ? '/Map-logo-black.svg' : '/Map-logo-white.svg';
  return <img src={img} alt="my image" />;
}

export default class HeaderMaskHolder extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const props = this.props;
    const idMask = `${props.title}-mask`;
    const idContent = `${props.title}-content`;
    const displeyDefault = props.displayDefault;
    const theme = props.theme;

    return (
      <HeaderMask
        xs={{ w: '100%', h: 'inherit', pos: 'absolute', ov: 'hidden' }}
        id={idMask}
        display={displeyDefault}
      >
        <Box
          xs={{
            w: '100%',
            h: 'inherit',
            pos: 'absolute',
            pad: '0 20px',
            d: 'flex',
            ai: 'center',
          }}
          sm={{ pad: '0 40px' }}
          id={idContent}
        >
          <ImgWrapper
            xs={{
              w: 'calc(30px + 2vw)',
              maxw: '60px',
              d: 'flex',
              ai: 'center',
            }}
          >
            <Logo theme={theme}></Logo>
          </ImgWrapper>
          <HeaderText
            xs={{ fsize: 'calc(20px + 2vw)', mar: '0 0 0 3px' }}
            md={{ fsize: 'calc(28px + 1vw)' }}
            colorText={theme}
          >
            Map.repeat
          </HeaderText>
          <MenuButton theme={theme} />
        </Box>
      </HeaderMask>
    );
  }
}
