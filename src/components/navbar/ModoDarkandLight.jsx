import styled from 'styled-components';
import { useThemeContext } from '../../hook/useThemeContext';

function ModoDarkandLight() {
  const { active, handleClick } = useThemeContext();

  return (
    <ContainerModo onClick={handleClick}>
      {active ? (
        <div className={` nav_sun ${active && 'active'}`}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      ) : (
        <div className="nav_moon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
            />
          </svg>
        </div>
      )}
    </ContainerModo>
  );
}

const ContainerModo = styled.div`
  display: flex;
  position: fixed;
  top: 60px;
  right: 10px;
  transition: all 0.2s ease-in-out;
  @media screen and (min-width: 768px) {
    top: 5px;
    right: 50px;
  }

  .nav_moon svg {
    cursor: pointer;
    fill: #ffe5b5;
    color: #ffe5b5;
    width: 40px;
    height: 40px;
    @media screen and (min-width: 768px) {
      width: 30px;
      height: 30px;
    }
  }

  .nav_sun svg {
    cursor: pointer;
    fill: #fecb00;
    color: #333;
    width: 45px;
    height: 45px;
    @media screen and (min-width: 768px) {
      width: 35px;
      height: 35px;
    }
  }

  &.active {
    pointer-events: none;
    opacity: 0;
  }
`;

export default ModoDarkandLight;
