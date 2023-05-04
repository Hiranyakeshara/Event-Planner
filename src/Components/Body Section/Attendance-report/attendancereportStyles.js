import styled from "styled-components";

const Wrapper = styled.main`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  .button input {
    height: 100%;
    width: 100%;
    outline: none;
    color: #fff;
    background: linear-gradient(135deg, #71b7e6, #9b59b6);
    border: none;
    font-size: 18px;
    font-weight: 500;
    letter-spacing: 1px;
    border-radius: 5px;
    height: 45px;
    margin: 45px 0;

    right: 200px;
    width: 150px;
  }
  .button {
    align-items: left;
  }
  .input-box {
    display: inline-block;
    overflow: hidden;
    margin: 45px 25px;
    background: #fff;
  }
  .inputbox {
    display: inline-block;
    overflow: hidden;
    margin: 45px 25px;
    margin-left: 50px;
    background: #fff;
  }
  h1 {
    padding: 25px;
  }
  .report-btn {
    display: inline-block;
    overflow: hidden;
    margin: 45px 0;
    margin-left: 50px;
    background: #fff;
  }
`;

export default Wrapper;
