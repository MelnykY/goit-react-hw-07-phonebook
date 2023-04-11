import styled from 'styled-components';

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 400px;
  gap: 20px;
  justify-content: center;
  align-items: center;
  padding: 30px 15px;
  border-radius: 2px;
  background-color: rgba(45, 45, 45, 0.436);
`;

export const Input = styled.input`
  display: block;
  background-color: transparent;
  border: none;
  border-bottom: 2px solid rgba(47, 113, 255, 0.64);
  margin-top: 15px;
  margin-bottom: 15px;
  color: white;
  &:focus {
    outline: none;
  }
`;

export const Label = styled.label`
  display: block;
  font-size: 14px;
  color: rgb(255, 255, 255); ;
`;
export const Button = styled.button`
  min-width: 88px;
  padding: 6px 10px;
  border: none;
  border-radius: 2px;
  color: rgb(245, 246, 246);
  background-color: rgba(47, 113, 255, 0.64);
  &:hover,
  &:focus {
    background-color: rgba(245, 246, 246, 0.352);
    color: rgb(0, 0, 0);
  }
`;