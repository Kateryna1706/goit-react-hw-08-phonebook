import styled from '@emotion/styled';

export const List = styled.ul`
  padding: 0;
  font-size: 25px;
`;

export const ListItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 600px;
  margin-top: 20px;
  padding: 15px;
  border-radius: 10px;
  box-shadow: rgba(17, 17, 26, 0.1) 0px 1px 0px,
    rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 48px;
`;

export const Text = styled.span`
  display: flex;
  align-items: center;
`;

export const Button = styled.button`
  display: block;

  padding: 10px;
  border: none;

  color: #fff;

  background-color: #7e57c2;
  box-shadow: rgba(0, 0, 0, 0.45) 0px 25px 20px -20px;
  cursor: pointer;
`;
