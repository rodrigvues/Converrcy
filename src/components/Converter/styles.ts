import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: #004400;
  color: #ffdd55;
`;

export const Input = styled.input`
  width: 100px;
  padding: 10px;
  margin: 10px;
  font-size: 1.2rem;
  border-radius: 5px;
  border: 1px solid #ddd;
`;

export const SelectContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 10px;
`;

export const Select = styled.select`
  margin: 0 5px;
  padding: 10px;
  font-size: 1.2rem;
  border-radius: 5px;
  border: 1px solid #ddd;
`;

export const Paragraph = styled.p`
  margin: 20px 0;
  text-align: center;
  max-width: 600px;
`;

export const ResultButton = styled.div`
  background-color: #ffdd55;
  color: #004400;
  padding: 10px 20px;
  margin: 10px 0;
  border-radius: 5px;
  font-size: 1.2rem;
  cursor: default;
`;

export const AddButton = styled.button`
  background-color: #00aa00;
  color: white;
  padding: 10px;
  margin: 10px 0;
  border: none;
  border-radius: 50%;
  font-size: 2rem;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
`;
