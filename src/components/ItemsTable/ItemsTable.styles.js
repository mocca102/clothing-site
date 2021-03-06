import styled from 'styled-components';

export default styled.table`
  border-collapse: collapse;
  color: rgb(32, 31, 31);

  thead tr {
    border-bottom: 1px solid grey;
    th {
      text-align: left;
      font-size: 1.6rem;
      padding: 2rem 6rem;
      &:first-child {
        padding-left: 0;
      }
      &:last-child {
        padding-right: 0;
      }
    }
  }

  tfoot {
    th {
      padding: 3rem;
      padding-right: 0;
      font-size: 4rem;
    }
    td{
      font-size: 4rem;
    }
  }
`;
