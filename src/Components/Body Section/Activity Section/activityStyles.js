import styled from "styled-components";

const Wrapper = styled.main`
  *:root {
    --PrimaryColor: hsl(0, 0%, 0%);
    --HoverColor: hsl(209, 72, 56, 100%);
    --paleGreen: hsl(96, 75%, 89%);
    --whiteColor: hsl(0, 0%, 100%);
    --blackColor: hsl(0, 0%, 18%);
    --textColor: hsl(240, 1%, 48%);
    --bgColor: hsl(220, 10%, 94%);
    --greyText: rgb(190, 190, 190);
    --inputColor: hsl(330, 12%, 97%);

    /*Font.ang.Typography.*/
    --biggestFontSize: 2.5rem;
    --h1FontSize: 1.5rem;
    --h2FontSize: 1.25rem;
    --h3FontSize: 1rem;
    --normalFontSize: 0.938rem;
    --smallFontSize: 0.813rem;
    --smallestFontSize: 0.75rem;
  }
  .activitySection {
    flex-basis: 50%;

    .heading {
      width: 100%;
      justify-content: space-between;

      h1 {
        margin-top: 30px;
        font-size: var(--h2FontSize);
        color: var(--blackColor);
        font-weight: 700;
      }

      .btn {
        border: 1px solid transparent;
      }
      .btn:hover {
        border: 1px solid var(--PrimaryColor);
      }
    }
    .seeContainer {
      margin-top: 1rem;

      .singleCustomer {
        align-items: flex-start;
        justify-content: space-between;

        img {
          width: 40px;
          height: 40px;
          object-fit: cover;
          border-radius: 50%;

          .customerDetails {
            flex: 1;
            .name {
              font-size: var(--h3FontSize);
              font-weight: 400;
              color: black;
              display: block;
            }
          }
        }
      }
    }
  }
  //Media Queries========>
  @media screen and (max-width: 918px) {
    .activitySection {
      width: 100%;
    }
  }
`;

export default Wrapper;
