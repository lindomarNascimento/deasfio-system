import styled from 'styled-components';

export const Container = styled.div`
  padding: 0 15px;
  height: 100%;
  flex: 0 0 320px;

  &+ div {
    border-left: 1px solid #FF5B5080;
  }

  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 42px;

  }

  ul {
    margin-top: 30px;
  }
`;
