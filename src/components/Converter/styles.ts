import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: #04471C;
  color: #E0EEC6;
`;

export const Row = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 10px;
`;

export const Input = styled.input`
  width: 100px;
  padding: 10px;
  margin: 10px;
  font-size: 1.2rem;
  border-radius: 5px;
  border: 1px solid #ddd;
  font-weight: 500;
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
  border: 1px solid #E0EEC6;
  color: E0EEC6;
  font-weight: 700;
`;

export const ResultButton = styled.div`
  background-color: #C2A83E;
  color: #171717;
  padding: 10px 20px;
  margin: 10px 0;
  border-radius: 5px;
  font-size: 1.2rem;
  cursor: default;
  font-weight: 800;
`;

export const AddButton = styled.button`
  background-color: #7CA982;
  color: white;
  padding: 10px;
  margin: 10px 0;
  border: none;
  border-radius: 5px;
  font-size: 2rem;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 500;
`;