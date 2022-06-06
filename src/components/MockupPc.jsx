import prototipoimg from '../../public/imgs/medicina.png';
import log from '../../public/logo.png';

import styled from 'styled-components';

function smartmockupspc() {
  return (
    <Container>
      <Case>
        <Camera>
          <Lente></Lente>
        </Camera>
        <Screen>
          <Mokups>
            <img src={prototipoimg} alt="prototipoimg" />
          </Mokups>
        </Screen>
      </Case>
      <Base>
        <Logo>
          <img src={log} alt="logo de la empresa codespace" />
        </Logo>
      </Base>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 100%;
  min-height: 100vh;
`;

const Case = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 800px;
  height: 500px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  background-image: linear-gradient(144deg, #f67d0e, #f6580e 50%, #f6ad0e);
  border: 3px solid #fff;
`;

const Screen = styled.div`
  margin: 0 auto;
  width: 98%;
  height: 450px;
  background-color: #333;
  overflow-y: auto;
  ::-webkit-scrollbar {
    width: 15px;
    background-color: #dbdbdb;
  }
  ::-webkit-scrollbar-thumb {
    background-color: #0e63dc;
  }
`;

const Mokups = styled.div`
  margin: 0 auto;
  width: 90%;
  padding: 20px;

  img {
    max-width: 100%;
  }
`;

const Camera = styled.div`
  position: absolute;
  top: 2px;
  left: 50%;
  transform: translateX(-50%);
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: #333;
`;

const Lente = styled.div`
  position: absolute;
  top: 5px;
  left: 50%;
  transform: translateX(-50%);
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: #fff;
`;

const Base = styled.div`
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translate(-50%, 0);
  width: 85%;
  height: 40px;
  border-bottom-left-radius: 50px;
  border-bottom-right-radius: 50px;
  background-image: linear-gradient(144deg, #f67d0e, #f6580e 50%, #f6ad0e);
  border: 3px solid #fff;
`;

const Logo = styled.div`
  position: absolute;
  top: 0;
  left: 50%;
  transform: translate(-50%, 0);
  img {
    width: 40px;
  }
`;

export default smartmockupspc;
