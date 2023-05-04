import styled from "styled-components";

const Wrapper = styled.main`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  .input-box {
    display: flex;

    justify-content: space-between;
    background: #fff;
    padding: 50px;
  }
  .content {
    display: flex;
    padding: 10px;
    justify-content: space-between;
    margin-top: 20px;
    background: #fff;
    text-align: center;
  }

  .details {
    font-weight: 200px;
    padding: 25px 0px;
    font-size: small;
  }
`;

export default Wrapper;
