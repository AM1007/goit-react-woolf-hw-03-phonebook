import styled from 'styled-components';

export const Form = styled.form`
  margin: 0 auto;
  border: 1px solid black;
  width: 320px;
  padding: 30px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 30px;
`;
export const Label = styled.label`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 12px;
  font-size: 20px;
  font-weight: 600;
`;
export const Input = styled.input`
  width: 300px;
  height: 24px;
  outline: transparent;
  padding: 0 8px;
  border: 1px solid #000;
  &:hover,
  &:focus {
    border: 2px solid #92a8d1;
  }
`;
export const ButtonForm = styled.button`
  padding: 6px;
  font-size: 18px;
  cursor: pointer;
  border: transparent;
  border: 1px solid black;
  &:hover,
  &:focus {
    background: #92a8d1;
  }
`;
