import { useRef } from 'react';
import styled from 'styled-components';

function Type() {
  const typeRef = useRef(null);

  const CounterTyping = () => {
    setTimeout(() => {
      typeRef.current.textContent = 'Diseño';
    }, 0);
    setTimeout(() => {
      typeRef.current.textContent = 'Desarrollo';
    }, 4500);
  };
  CounterTyping();
  setInterval(CounterTyping, 8100);

  return (
    <TypeContainer>
      <span ref={typeRef} className="text firts_text"></span>
      <span className="text sec_text">
        Web
        <br />
        Profesional
      </span>
    </TypeContainer>
  );
}

const TypeContainer = styled.div`
  .text {
    position: relative;
    font-size: 2.8rem;
    color: #333;
  }
  .firts_text {
    color: #333;
    ::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: #fff;
      border-left: 2px solid #4070f4;
      animation: animate 4s steps(12) infinite;
    }
    @keyframes animate {
      40%,
      60% {
        left: 100%;
      }
      100% {
        left: 0;
      }
    }
  }
`;

export default Type;
