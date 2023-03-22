import styled, { css } from 'styled-components';

export const Container = styled.div(
  () => css`
  height: 80px;
  padding: 0 30px;
  border-bottom: 1px solid #FF5B5080;
  color: #FFF;

  display: flex;
  align-items: center;
`
);

export const Title = styled.h1`
  color: #FF5B50;
`
