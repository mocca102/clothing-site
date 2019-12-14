import styled from 'styled-components';

export default styled.div`
  position: relative;
  top: -2px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: black;
  cursor: pointer;
    svg {
    width: 2.5rem;
  }

  span {
    position: absolute;
    top: 7px;
    font-size: 1.6rem;
    line-height: 1;
  }
`;
