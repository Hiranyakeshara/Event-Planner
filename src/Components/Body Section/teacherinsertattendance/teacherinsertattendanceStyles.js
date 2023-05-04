import styled from "styled-components";

const Wrapper = styled.main`
  *.cont {
    margin-bottom: 40px;
  }

  form {
    width: 100%;
  }
  input {
    width: 300px;
  }

  .contents {
    margin-top: 25px;
    display: grid;
    gap: 10px;
    padding: 30px 70px;
    background: #fff;
    width: 100% !important;

    .input-box {
      padding: 5px !important;
      align-items: right;

      font-weight: bold !important;
      display: grid !important;
      grid-template-columns: 1fr;
      gap: 5px;
    }
  }

  .button {
    display: flex;
    justify-content: end;
    height: 45px;
    margin: 45px 12px;
    margin-left: auto;
  }
  .button input {
    margin-left: auto;
    height: 100%;
    width: 25%;
    outline: none;
    color: #fff;
    background: linear-gradient(135deg, #71b7e6, #9b59b6) !important;
    border: none;
    font-size: 18px;
    font-weight: 500;
    letter-spacing: 1px;
    border-radius: 5px;
    align-content: center;
  }
  .button input:hover {
    background: linear-gradient(-135deg, #71b7e6, #9b59b6);
  }
`;

export default Wrapper;
