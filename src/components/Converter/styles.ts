import styled from 'styled-components';

export const Container = styled.div`
  padding: 20px;
  background-color: #04471C;
  color: #E0EEC6;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start; // Align content to the left
  width: 100%;
  max-width: 600px; // Ensure it doesn't stretch too wide
  margin-top: 0px;
`;

export const RowInput = styled.div`
  display: flex;
  align-items: left;
  justify-content: left;
  margin-top: 10px;
`;

export const RowResult = styled.div`
  display: flex;
  align-items: left;
  justify-content: left;
  margin-top: 10px;
`;

export const Input = styled.input`
  width: 100px;
  padding: 10px;
  margin: 10px;
  font-size: 1.2rem;
  border-radius: 30px;
  border: 1px solid #ddd;
  font-weight: 500;
  height: 30px;
`;

export const SelectContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 10px;
`;

export const Select = styled.select`
  margin: 0 5px;
  padding: 10px;
  font-size: 25px;
  border-radius: 15px;
  border: 1px solid #E0EEC6;
  color: E0EEC6;
  font-weight: 700;
`;

export const ResultButton = styled.div`
  background-color: #C2A83E;
  color: #171717;
  padding: 10px 20px;
  margin: auto;
  border-radius: 18px;
  font-size: 40px;
  cursor: default;
  font-weight: 800;
  text-align: center; // Center text horizontally
  display: flex; // Use Flexbox
  align-items: center; // Center items vertically
  justify-content: center; // Center items horizontally
  height: 77px;
  width: 380px;
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
  height: 40px;
`;
