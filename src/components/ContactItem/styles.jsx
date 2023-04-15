import styled from "styled-components";

export const Item = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const List = styled.p`
  font-size: 22px;
  font-weight: 700;
  margin-right: 20px;
`;

export const Click = styled.button`
  font-size: 20px;
  padding: 5px;

  &:focus,
  :hover {
    cursor: pointer;
    background-color: #300df5;
    color: white;
    border-radius: 5px;
  }
`;