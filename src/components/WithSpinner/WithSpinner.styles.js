import styled from 'styled-components';

const WithSpinnerContainer = styled.div`
  position: absolute;
  top: 30%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 50px;
  height: 50px;
  border: 5px solid gray;
  border-radius: 50px;
  border-color: gray transparent transparent transparent;
  animation: spinner 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
  z-index: 999;

  @keyframes spinner {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

export default WithSpinnerContainer;
