import styled from "styled-components";

const Wrapper = styled.main`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.photoImg {
  width: 200px;
  height: 200px;
  border-radius: 25px;
  object-fit: cover;
  justify-content: center;
  margin: 0 auto;
}

.photogallery-conts {
  display: grid;
  align-items: center;
  align-content: center;
}

.conts {
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin-top: 30px;
  background: linear-gradient(135deg, #71b7e6, #9b59b6);
  text-align: center;
}
.photo {
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

.inputbox {
  display: grid;
  grid-template-columns: 150px auto;
  gap: 10px;
  justify-content: start;
  text-align: start;
  background: #fff;
}
.photo-details {
  display: grid;
  gap: 10px;
}
.title {
  gap: 20px;
  margin-top: 10px;
  margin-bottom: 10px;
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
.input-box {
  margin-top: 10px;
  align-items: right;
  gap: 10px;
  display: grid;
  /* background: linear-gradient(135deg, #71b7e6, #187bcd, #fff); */
}
.photogallery-conts {
  h4 {
    margin-top: 10px;
  }
}
.buttons{
  padding:10px
}
.save-btn{
background:green;
border:none;
color:white;
align-content: center;
padding:10px

}
form .bttns input:hover {
  background: linear-gradient(-135deg, #71b7e6, #9b59b6);
}
`;

export default Wrapper;
