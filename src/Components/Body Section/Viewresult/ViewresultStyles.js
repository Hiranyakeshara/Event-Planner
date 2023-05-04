import styled from "styled-components";

const Wrapper = styled.main`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  .profIg {
    width: 500px;
    height: 500px;

    margin: 0 auto;
  }

  .profile-cnt {
    display: grid;
    align-items: center;
    align-content: center;
  }

  .cnt {
    display: grid;
    grid-template-columns: 1fr 1fr;
    margin-top: 30px;
    background: linear-gradient(135deg, #71b7e6, #9b59b6);
    text-align: center;
  }
  .prf {
    height: 500px;
    display: grid;
    justify-content: center;
    align-items: center;
    align-content: center;
    max-width: 500px;
    width: 100%;
    background: #fff;
    padding: 30px 25px;
    padding-top: 80px;
  }

  .View-results {
    display: grid;
    gap: 10px;
  }

  .profile-cnt {
    h4 {
      margin-top: 10px;
    }
  }
`;

export default Wrapper;
