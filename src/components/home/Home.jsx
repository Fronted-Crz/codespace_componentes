import styled from 'styled-components';
import { useThemeContext } from '../../hook/useThemeContext';

function Home() {
  const { theme } = useThemeContext();
  const { sectionBg } = theme;

  return <HomeContainer sectionBg={sectionBg}>Home</HomeContainer>;
}

const HomeContainer = styled.div`
  max-width: 100vw;
  width: 100%;
  min-height: 100vh;
  background-color: ${({ sectionBg }) => sectionBg};
`;

export default Home;
