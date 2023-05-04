import styled from "styled-components";

const Wrapper = styled.main`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
  }
  .filter {
    position: relative;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 1;
    opacity: 0.7;
  }
  table {
    z-index: 2;
    left: 50%;
    top: 50%;
    width: 100%;
    border-radius: 12px;
    border-collapse: collapse;
    border-spacing: 0;
    border-radius: 6px 6px 0 0;
    overflow: hidden;
    box-shadow: 0 2px 12px rgba(32, 32, 32, 0.3);
    background: #fafafa;
    text-align: center;
    margin-top: 25px;
  }
  th {
    background: gray;
  }
  th,
  td {
    padding: 10px 12px;
  }
  th {
    background: gray;
    color: #fafafa;
    text-transform: uppercase;
  }
  tr:nth-child(odd) {
    background-color: lightgrey;
  }
`;

export default Wrapper;
