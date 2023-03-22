import styled, { css } from 'styled-components';

export const Container = styled.div`
  background: #252525;
  border-radius: 5px;
  margin-bottom: 20px;
  padding: 15px;
  box-shadow: 0 1px 4px 0 rgba(192, 208, 230, 0.8);
  cursor: grab;

  p {
    font-weight: 500;
    line-height: 20px;
  }

  img {
    width: 24px;
    height: 24px;
    border-radius: 2px;
    margin-top: 5px;
  }

`;

export const Label = styled.span`
  width: 10px;
  height: 10px;
  border-radius: 2px;
  display: inline-block;
  background: ${props => props.color};
`;

export const Status = styled.span`
  background: red;

  width: 30px; 
  height: 8px;
    margin-bottom: 16px;
    border-radius: 8px;
`