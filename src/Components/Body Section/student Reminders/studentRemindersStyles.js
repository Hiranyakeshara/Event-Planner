import styled from "styled-components";

const Wrapper = styled.main`
  * {
    padding: 0px;
    margin: 0px;
  }
  nav {
    align-items: center;
    background: #00a9d4;
    height: 60px;
    position: relative;
  }
  .icon {
    cursor: pointer;
    margin-right: 50px;
    line-height: 60px;
  }
  .icon span {
    background: #f00;
    padding: 7px;
    border-radius: 50%;
    color: #fff;
    vertical-align: top;
    margin-left: -25px;
  }

  .notifi-box h2 {
    front-size: 14px;
    padding: 10px;
    border-bottom: 1px solid #eee;
    color: black;
  }
  .notifi-box h2 span {
    color: black;
  }
  .notifi-item {
    width: 250px;
    position: absoulte;
    right: 15px;

    border-bottom: 1px solid #eee;
    padding: 12px 15px;
    margin-bottom: 5px;
    cursor: pointer;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  }
  .notifi-item img {
    display: flex;
    width: 100px;
    margin-right: 5px;
  }

  .notifi-item .text h4 {
    color: #777;
    font-size: 16px;
    margin-top: 10px;
  }
  .notifi-item.text p {
    color: #aaa;
    font-size: 12px;
  }
`;

export default Wrapper;
