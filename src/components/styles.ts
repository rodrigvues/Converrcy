import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 20px;
`;

export const Input = styled.input`
  margin: 10px 0;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-right: 15px;
`;

export const Select = styled.select`
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

export const SelectContainer = styled.div`
  display: flex;
  flex-direction: row; /* Stack the selects vertically */
  gap: 10px; /* Add space between the selects */
`;

export const Paragraph = styled.p`
  font-size: 18px;
  color: #f1f7ed;
`; 
