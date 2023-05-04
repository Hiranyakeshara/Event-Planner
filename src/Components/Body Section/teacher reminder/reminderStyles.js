import styled from "styled-components";

const Wrapper = styled.main`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    text-transform: capitalize;
  }
  .ctr {
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
  }
  .message-card {
    width: 400px;
    height: 90vh;
    background-color: (rgba 255, 255, 255, 0.5);
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
    z-index: 1;
  }
  .message-card::after {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: (rgba 255, 255, 255, 0.5);
    transform: rotate(-5deg);
    z-index: -1;
  }
  .message-card h1 {
    text-align: center;
    margin-bottom: 20px;
    color: black;
  }
  form {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  form input,
  textarea {
    border: 0;
    outline: none;
    margin: 10px 0;
    padding: 20px;
    border-radius: 8px;
    width: 350px;
  }
  form button {
    padding: 15px;
    background: linear-gradient(135deg, #71b7e6, #9b59b6);
    border: none;
    font-size: 18px;
    border-radius: 20px;
    cursor: pointer;
    outline: none;
    width: 150px;
    color: #fff;
  }
`;

export default Wrapper;
