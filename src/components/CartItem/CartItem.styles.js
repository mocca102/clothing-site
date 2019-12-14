import styled from 'styled-components';

export default styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;
  padding-right: 1rem;

  img {
    width: 7rem;
  }

  div {
    display: flex;
    flex-direction: column;
    justify-content: center;

    span:last-child {
      text-align: right;
    } 
  }
`;
