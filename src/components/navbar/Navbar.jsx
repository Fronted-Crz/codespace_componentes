import styled from 'styled-components';
import HamburgerMenu from './HamburgerMenu';

function Navbar() {
  return (
    <Nav>
      <Nav_Logo>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="24"
          height="24"
        >
          <path fill="none" d="M0 0h24v24H0z" />
          <path d="M11 12l-7.071 7.071-1.414-1.414L8.172 12 2.515 6.343 3.929 4.93 11 12zm0 7h10v2H11v-2z" />
        </svg>
        <h1>DevCruz</h1>
      </Nav_Logo>
      <Nav_Center>
        <ul>
          <li>
            <a data-title="Inicio" href="#">
              Inicio{' '}
            </a>
          </li>
          <li>
            <a data-title="Nosotros" href="#">
              Nosotros
            </a>
          </li>
          <li>
            <a data-title="Proyectos" href="#">
              Proyectos
            </a>
          </li>
          <li>
            <a data-title="Servicios" href="#">
              Servicios
            </a>
          </li>
          <li>
            <a data-title="Contacto" href="#">
              Contacto
            </a>
          </li>
        </ul>
      </Nav_Center>
      <Nav_Right>
        <div className="nav_shop">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="24"
            height="24"
          >
            <path fill="none" d="M0 0h24v24H0z" />
            <path d="M20 22H4a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1zm-1-2V4H5v16h14zM9 6v2a3 3 0 0 0 6 0V6h2v2A5 5 0 0 1 7 8V6h2z" />
          </svg>
        </div>
        <div className="nav_menu">
          <HamburgerMenu />
        </div>
      </Nav_Right>
    </Nav>
  );
}

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  max-width: 1440px;
  width: 100vw;
  height: 50px;
  background-image: linear-gradient(144deg, #1363df, #47b5ff 50%, #91e0ff);
  overflow: hidden;
`;

const Nav_Logo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  margin-left: 10px;
  h1 {
    font-size: 1.5rem;
    color: #fff;
  }
  svg {
    fill: #fff;
  }
`;

const Nav_Center = styled.div`
  display: flex;
  align-items: center;

  ul {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;

    @media screen and (max-width: 768px) {
      flex-direction: column;
      background-color: #42aefc;
      top: 0;
      left: 0;
      position: absolute;
      width: 100vw;
      height: 100vh;
      overflow: hidden;
      z-index: -1;
    }
    li > a {
      font-size: 1rem;
      color: #fff;

      @media screen and (max-width: 768px) {
        position: relative;
        font-size: 2rem;
        color: #fff;
        font-weight: 700;
        line-height: 4rem;
        text-transform: uppercase;

        ::after {
          content: attr(data-title);
          position: absolute;
          color: #000;
          font-size: 4rem;
          font-weight: 700;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          text-transform: uppercase;
          letter-spacing: 1rem;
          pointer-events: none;
          opacity: 0;
          z-index: -1;
        }
        :hover::after {
          opacity: 0.1;
          letter-spacing: 0;
          transition: letter-spacing 0.5s;
        }
      }
    }
  }
`;

const Nav_Right = styled.div`
  display: flex;
  align-items: center;
  margin-right: 10px;

  @media screen and (max-width: 768px) {
    gap: 20px;
    margin-right: 0;
  }
  .nav_shop > svg {
    fill: #fff;
  }
  .nav_menu {
    display: none;
    @media screen and (max-width: 768px) {
      display: flex;
    }
  }
`;
export default Navbar;
