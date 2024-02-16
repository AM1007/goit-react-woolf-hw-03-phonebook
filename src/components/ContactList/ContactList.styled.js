import styled from 'styled-components';

export const ContactListUl = styled.ul`
  font-size: 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0;
`;
export const ContactListLi = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 1px solid black;
  list-style-position: inside;
  width: 450px;
  padding: 20px;

  &:not(:last-child) {
    margin-bottom: 5px;
  }
`;
export const ButtonDelete = styled.button`
  margin-left: 18px;
  font-size: 18px;
  cursor: pointer;
`;
