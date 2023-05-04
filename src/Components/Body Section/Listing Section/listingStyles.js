import styled from "styled-components";

const Wrapper = styled.main`
  * :root {
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
  .listingSection {
    flex-basis: 70%;
    .heading {
      width: 100%;
      justify-content: space-between;

      h1 {
        font-size: var(--h2FontSize);
        color: var(--blackColor);
        font-weight: 700;
      }
      .btn {
        border: 1px solid transparent;
        font-weight: 500;
      }
      .btn:hover {
        border: 1px solid var(--PrimaryColor);
      }
    }
    .seeContainer {
      width: 100%;
      margin: 1rem 0;
      gap: 1rem;

      .singleItem {
        display: grid;
        align-items: center;
        padding: 1rem;
        border-radius: 10px;
        overflow: hidden;
        img {
          height: 145px;
          width: 245px;
        }
        &:hover {
          background: var(--whiteColor);
          box-shadow: 0 2px 2px var(--inputColor);
        }

        .h3 {
          font-size: var(--h3FontSize);
          color: var(--blackColor);
          padding: 1rem 0;
        }
      }
    }
  }
  @media screen and (max-width: 918px) {
    .listingSection {
      .singleItem {
        width: 200px !important;
      }
    }
  }

  @media screen and (max-width: 918px) {
    .listingSection {
      .singleItem {
        width: 200px !important;
      }
    }
  }
`;

export default Wrapper;
