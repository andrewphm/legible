// Styled Components
import { Main, Nav, Section, Wrapper, Header } from './Dashboard.styles';

// Logo
import NavLogo from '../../assets/NavLogo';

const Dashboard = () => {
  return (
    <Main>
      <Header>
        <NavLogo></NavLogo>
      </Header>
      <Wrapper>
        <Nav>nav</Nav>
        <Section></Section>
      </Wrapper>
    </Main>
  );
};

export default Dashboard;
