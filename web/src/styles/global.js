import { createGlobalStyle } from 'styled-components';
import { darken } from 'polished';

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Roboto:400,700&display=swap');

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;

  }

  *:focus {
    outline: 0;
  }

  html, body, #root {
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 100%;
    max-width: 1980px;
    min-width: 1200px;
  }




  body {

    -webkit-font-smoothing: antialiased;
  }

  body, input, button, table {
    font: 14px 'Roboto', sans-serif;
    background: #fff;
  }

  form {
    padding: 2% 2% 2% 5%;
    margin: 3% 0 5% 5%;
  }

  table {
    border-collapse: collapse;
    padding: 2% 2% 2% 5%;
    margin: 3% 0 5% 7%;
    width: 80%;

    td {
      text-align: left;
      border-bottom: 1px solid #eee;
      padding-left: 3%;
    }

    th {
      text-align: left;
      padding: 3% 0 0 3%;
    }

  }

  a {
    text-decoration: none;
  }

  ul {
    list-style: none;
  }

  h1 {
    padding-top: 20px;
  }

  button {
    margin: 5px 0 0;
    height: 44px;
    background: #900;
    color: #fff;
    border: 0;
    border-radius: 4px;
    font-size: 16px;

    transition: background 0.2s;

    &:hover {
      background: ${darken(0.03, '#906')};
    }
  }

  .updateButton {
    background: #fff;
    border: none;
    color: #009;
    cursor: pointer;
  }

  .deleteButton {
    background: #fff;
    border: none;
    color: #900;
    cursor: pointer;
  }

  &.actions {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 120px;
    text-align: center;
    margin-left: 15px;
  }

  .search {
    display: flex;
    justify-content: flex-end;
    margin-right: 13%;
    text-align: center;
    margin-left: 1%;
  }

  .title {
    margin-left: 120px;
    /* padding-left: 50%; */
    padding-left: 41%;
  }

   form {
    background: #fff;
    padding: 20px 20px;
    margin: 2px 2px;
    width: 70%;
    display: flex;
    flex-direction: column;
    margin-top: 30px;
    border-radius: 4px;
  }

  input {
    background: #fff;
    border: 1px solid #f4f4f4;
    border-radius: 4px;
    height: 44px;
    color: #999;
    padding: 0 15px;
    margin: 0 0 10px;
  }


`;
