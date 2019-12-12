import styled from 'styled-components';

export const Wrapper = styled.div`
  height: 100%;
  background: #ee4d64;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  background: #fff;
  width: 100%;
  max-width: 325px;
  text-align: center;

  form {
    margin: 15px 15px 0 15px;
    display: flex;
    flex-direction: column;
    margin-top: 15px;
  }

  input {
    margin: 15px 0;
    background: rgba(0, 0, 0, 0.1);
    border: 0;
    border-radius: 4px;
    height: 44px;
    padding: 0 15px;

    &::placeholder {
      color: #999999;
    }
  }

  button {
    margin: 5px 0 30px;
    height: 44px;
    background: #ee4d64;
    color: #fff;
    border: 0;
    border-radius: 4px;
    font-size: 16px;
    transition: background 0.2s;
  }

  img {
    margin: 30px 0;
  }

  label {
    display: flex;
    justify-content: right;
  }
`;
