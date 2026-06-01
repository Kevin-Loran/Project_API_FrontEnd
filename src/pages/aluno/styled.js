import styled from 'styled-components';
import * as colors from '../../config/colors';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin-top: 30px;

  input {
    height: 40px;
    font-size: 18px;
    border: 1px solid #ddd;
    padding: 0 10px;
    border-radius: 4px;
    margin-bottom: 20px;

    &:focus {
      border: 1px solid ${colors.primaryColor};
    }
  }
`;

export const Title = styled.h1 `
  text-align: center;
  background: green;background: ${({ $isRed }) => $isRed ? 'red' : 'green'};

  small {
    font-size: 12pt;
    margin-left: 15px;
    color: #999;
  }
`;

export const Paragrafo = styled.p`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
`;

export const ProfilePicture = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 0 20px;
  position: relative;
  margin-top: 20px;

  img {
    width: 180px;
    height: 180px;
    border-radius: 50%;
  }

  a {
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    position: absolute;
    bottom: 0;
    color: #fff;
    background: ${colors.primaryColor};
    width: 36px;
    height: 36px;
    border-radius: 50%  
    }
`;
