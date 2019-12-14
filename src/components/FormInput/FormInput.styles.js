import styled, { css } from 'styled-components';

const getLabelStyles = css`
  top: 10px;
  left: 9px;
  color: #808080;
  font-size: 20px;
`;

const getLabelShrinkStyles = css`
  top: -5px;
  left: 0;
  font-size: 14px;
  color: #000;
`;

const FormInputContainer = styled.div`
  margin-bottom: 4rem;
  position: relative;

  label {
    display: block;
  }

  span {
    z-index: 1;
    position: absolute;
    pointer-events: none;
    transition: all .1s ease-out;

    ${(props) => (props.shrink ? getLabelShrinkStyles : getLabelStyles)} 
  }
  input {
    border: none;
    border-bottom: 1px solid grey;
    width: 100%;
    padding: 1.5rem .5rem .5rem;
    font-size: 2rem;

    &:focus {
      outline: none;

      & ~ span {
        ${getLabelShrinkStyles} 
      }
    }
  }
`;

export default FormInputContainer;
