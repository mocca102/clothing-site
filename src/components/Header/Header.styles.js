import styled from 'styled-components';

export const HeaderContainer = styled.div`
  font-size: 2rem;
  height: 10rem;
  padding: 1rem 3rem;
  display: grid;
  grid-template-columns: max-content auto max-content max-content;
  align-items: center;
`;

export const NavContainer = styled.ul`
  justify-self: end;
  display: flex;

  a {
    margin: 1rem 2rem;
  }

  li,
  li:hover,
  li:visited {
    color: gray;
    cursor: pointer;
  }

  li:last-child {
    align-self: center;
  }
`;
