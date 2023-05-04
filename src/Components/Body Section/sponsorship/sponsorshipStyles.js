import styled from "styled-components";

const Wrapper = styled.main`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  .sponsorImg {
    width: 300px;
    height: 300px;

    justify-content: center;
    margin: 0 auto;
  }

  .sponsor-cont {
    display: grid;
    align-items: center;
    align-content: center;
  }

  .sponsor-content {
    display: grid;
    grid-template-columns: 1fr 1fr;
    margin-top: 30px;
    background: linear-gradient(135deg, #71b7e6, #9b59b6);
    text-align: center;
  }
  .sponsor {
    height: 500px;
    display: grid;
    justify-content: center;
    align-items: center;
    align-content: center;
    max-width: 700px;
    width: 100%;
    background: #fff;
    padding: 30px 25px;
    padding-top: 80px;
  }

  .sponsorinputbox {
    display: grid;
    grid-template-columns: 150px auto;
    gap: 10px;
    justify-content: start;
    text-align: start;
    background: #fff;
  }
  .sponsor-details {
    display: grid;
    gap: 10px;
  }
  .title {
    gap: 20px;
    margin-top: 10px;
    margin-bottom: 10px;
  }

  .gender-detail {
    margin-top: 30px;
    text-align: start;
  }

  .gender-titles {
    margin-top: 10px;
    margin-bottom: 10px;
  }
  form .gender-detail .categorys {
    display: flex;
    width: 80%;
    margin-top: 20px;
    justify-content: space-between;
  }
  .gender-detail .categorys label {
    display: flex;
    align-items: center;
  }
  .gender-detail .categorys .dot {
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
  form .bttns {
    height: 45px;
    margin: 45px 0;
  }
  form .bttns input {
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

  .profile-cont {
    h4 {
      margin-top: 10px;
    }
  }
  form .bttns input:hover {
    background: linear-gradient(-135deg, #71b7e6, #9b59b6);
  }
`;

export default Wrapper;
