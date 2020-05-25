import styled from 'styled-components';
import { Box, Text } from '../theme/myStyledComponents';

export const LayoutHolder = styled(Box)`
  box-sizing: content-box;
  max-width: 1400px;
  font-weight: 200;
  margin: auto;
  position: relative;
`;
export const LinksGroupsWrapper = styled(Box)`
  display: flex;
  justify-content: center;
  position: absolute;
  width: inherit;
  top: 50%;
  transform: translateY(-60%);
`;

export const StyledLink = styled(Text)`
  cursor: pointer;
  color: ${(props) =>
    props.active ? 'rgba(255, 255, 255)' : 'rgba(255, 255, 255, 0.75)'};
`;

export const FooterElement = styled.div`
  font-size: 20px;
  position: absolute;
  ${(props) => (props.position == 'right' ? 'right: 0' : 'left: 0')};
`;
