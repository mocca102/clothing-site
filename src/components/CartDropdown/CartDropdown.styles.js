import styled from 'styled-components';

export const CartDropdownContainer = styled.div`
  width: 25rem;
  max-height: 40rem;
  display: flex;
  flex-direction: column;
  padding: 2rem;
  position: absolute;
  right: 3rem;
  top: 8rem;
  border: 1px solid;
  z-index: 1; 
  background: #fff;

  button {
    justify-self: end
  }
`;

export const CartDropdownItems = styled.div`
  overflow: scroll;
  overflow-x: hidden;
  padding-right: 20px;
  margin-bottom: 1.5rem;
  text-align: center;

  &::-webkit-scrollbar {
      width: 7px;
    &-track {
      background: transparent;
    }

    &-thumb {
      background: grey;
      border-radius: 50px;
    }
  }

  span {
    margin-right: -20px;
    font-size: 2.2rem;
  }
`;
