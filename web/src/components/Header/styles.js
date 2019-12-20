import styled from 'styled-components';

export const Container = styled.div`
  background: #f2f2f2;
`;

export const Content = styled.div`
  position: relative;
  height: 50px;
  left: 0px;
  top: 0px;

  display: flex;
  justify-content: space-between;
  background: #fff;
  border: 1px solid #fff;
  box-sizing: border-box;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  nav {
    display: flex;
    align-items: center;

    img {
      margin-right: 20px;
      padding-right: 20px;
      border-right: 1px solid #eee;
    }

    a {
      font-family: 'Roboto';
      font-style: normal;
      font-weight: bold;
      font-size: 15px;
      line-height: 18px;

      margin-left: 20px;
      font-weight: bold;
      color: #444;
    }
  }

  aside {
    padding: 10px 100px 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;
