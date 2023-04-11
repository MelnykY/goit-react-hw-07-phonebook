import styled from 'styled-components';

export const Input = styled.input`
  display: block;
  background-color: inherit;
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
  font-size: 20px;
`;

export const FilterDiv = styled.div`
  display: flex;
  justify-content: center;
  width: 400px;
  font-size: 700;
  border-radius: 2px;
  padding: 30px 15px;
  background-color: rgba(45, 45, 45, 0.436);
`;