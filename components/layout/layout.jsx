import GlobalStyles from './global-styles';
import Header from './header/header';
import { connect } from 'react-redux';
import PopUp from './pop-up';
import theme from '../theme/theme';
import { ThemeProvider } from 'styled-components';
import styled from 'styled-components';

const LayoutHolder = styled.div``;
class Layout extends React.Component {
  render() {
    return (
      <LayoutHolder>
        <ThemeProvider theme={theme}>
          <GlobalStyles />
          <Header />
          <PopUp></PopUp>
          <main>{this.props.children}</main>
          <footer></footer>
        </ThemeProvider>
      </LayoutHolder>
    );
  }
}

export default connect((state) => state)(Layout);
