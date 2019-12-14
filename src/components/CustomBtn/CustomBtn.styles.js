import styled, { css } from 'styled-components';

const invertedBtnStyles = css`
  display: none;
  background: rgba($color: white, $alpha: 0.9);

  &:hover {
    background: rgba($color: #000000, $alpha: .9);
    color: white;
  }
`;

const CustomBntContainer = styled.button`
  padding: 1.5rem 4rem;
  background: #000;
  color: #fff;
  border: none;
  &:first-child {
    margin-right: 2rem;
  }

  &:hover {
    opacity: 0.9;
  }
  ${(props) => (props.inverted ? invertedBtnStyles : null)}
`;

export default CustomBntContainer;
