import styled from 'styled-components';

const Button = styled.button`
  outline: none;
  border: none;
  color: white;
  background-color: #4c2374;
  border-radius: 4px;
  padding: 12px 16px;

  :active,
  .active,
  ${(props) => props.active} {
    background-color: #381a56;
  }

  :hover {
    background-color: #7235ad;
  }
`;

export default Button;
