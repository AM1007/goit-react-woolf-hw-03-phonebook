import styled from 'styled-components';

export const FilterLabel = styled.label`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 30px;
  gap: 12px;
  font-size: 20px;
  font-weight: 600;
`;

export const FilterInput = styled.input`
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
