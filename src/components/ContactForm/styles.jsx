import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 10px;
  width: 400px;
  border: 1px solid black;
`;

export const AddButton = styled.button`
  font-size: 18px;
  margin-top: 25px;
  padding: 10px;

  &:focus,
  :hover {
    cursor: pointer;
    background-color: #300df5;
    color: white;
    border-radius: 5px;
  }
`;

export const Label = styled.p`
  font-size: 22px;
  font-weight: 700;
`;

export const Input = styled.input`
  font-size: 22px;
`;


