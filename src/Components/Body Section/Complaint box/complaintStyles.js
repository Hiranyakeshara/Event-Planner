import styled from "styled-components";

const Wrapper = styled.main`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  .cont {
    margin-bottom: 40px;
    display: grid;
    gap: 5px;
  }

  .complaintImg {
    width: 500px;
    height: 400px;

    margin: 0 auto;
  }

  .complain-container {
    display: grid;
    align-items: center;
    align-content: center;
  }

  .content {
    display: grid;
    grid-template-columns: 1fr 1fr;
    margin-top: 30px;
    background: linear-gradient(135deg, #71b7e6, #9b59b6);
    text-align: center;
  }
  .complaint {
    height: 100%;
    /* justify-content: center;
    align-items: center; */
    /* align-content: center; */
    max-width: 500px;
    width: 100%;
    background: #fff;
    padding: 30px 25px;
  }

  .input-boxs {
    display: grid;
    grid-template-columns: 150px auto;
    gap: 10px;
    justify-content: start;
    background: #fff;
  }
  .complaint-details {
    display: grid;
    gap: 10px;
    padding: 10px;
    text-align: left;
  }
  .title {
    gap: 20px;
    margin-top: 10px;
    margin-bottom: 10px;
  }

  .gender-details {
    margin-top: 30px;
    text-align: start;
  }

  .gender-title {
    margin-top: 10px;
    margin-bottom: 10px;
  }
  form .gender-details .category {
    display: flex;
    width: 80%;
    margin-top: 20px;
    justify-content: space-between;
  }
  .gender-details .category label {
    display: flex;
    align-items: center;
  }
  .gender-details .category .dot {
    height: 18px;
    width: 18px;
    background: #d9d9d9;
    border-radius: 50%;
    margin-right: 10px;
    border: 5px solid transparent;
    transition: all 0.3s ease;
  }
  #dot-1:checked ~ .category label .one,
  #dot-2:checked ~ .category label .two {
    border-color: #d9d9d9;
    background: #9b59b6;
  }
  form input[type="radio"] {
    display: none;
  }
  form .button {
    height: 45px;
    margin: 45px 0;
  }
  form .button input {
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
  }

  .complain-container {
    h4 {
      margin-top: 10px;
    }
  }
  form .button input:hover {
    background: linear-gradient(-135deg, #71b7e6, #9b59b6);
  }
  @media (max-width: 584px) {
    .container {
      max-width: 100%;
    }
  }
`;

export default Wrapper;
