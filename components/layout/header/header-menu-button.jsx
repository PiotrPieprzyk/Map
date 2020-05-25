import styled from 'styled-components';
import { connect } from 'react-redux';
import MenuPopup from '../../pop-ups/menu-popup';
import { Box, Text } from '../../theme/myStyledComponents';

const HeaderText = styled(Text)`
  color: ${({ colorText, theme }) =>
    colorText == 'white'
      ? theme.palette.basic.white
      : theme.palette.basic.black};
`;

class MenuButton extends React.Component {
  constructor(props) {
    super(props);
    this.menuClick = () => {
      let dispatch = this.props.dispatch;
      dispatch({ type: 'changeVisibility', popUpvisible: true });
      dispatch({
        type: 'setPopupComponent',
        component: <MenuPopup />,
      });
      console.log(this.props.visible);
    };
  }
  render() {
    const theme = this.props.theme;

    return (
      <HeaderText
        xs={{ fsize: 'calc(14px + 1vw)', mar: '5px 0 0 auto' }}
        md={{ fsize: 'calc(12px + 1vw)' }}
        onClick={this.menuClick}
        colorText={theme}
      >
        <span>MENU</span>
      </HeaderText>
    );
  }
}

export default connect((state) => state)(MenuButton);
