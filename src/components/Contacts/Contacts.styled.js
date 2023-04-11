import styled from 'styled-components';

export const ListItem = styled.div`
  font-size: 25px;
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
`;

export const Button = styled.button`
  display: block;
  min-width: 64px;
  padding: 2px 6px;
  border: none;
  border-radius: 2px;
  color: rgb(245, 246, 246);
  background-color: rgba(47, 113, 255, 0.64);
  margin-left: 15px;
  &:hover,
  &:focus {
    background-color: rgba(245, 246, 246, 0.352);
    color: rgb(0, 0, 0);
  }
`;