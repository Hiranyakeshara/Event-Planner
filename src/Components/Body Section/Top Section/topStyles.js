import styled from "styled-components";

const Wrapper = styled.main`
  * :root {
    --PrimaryColor: hsl(0, 0%, 0%);
    --HoverColor: hsl(209, 91%, 50%);
    --paleGreen: hsl(211, 84%, 57%);
    --whiteColor: hsl(0, 0%, 100%);
    --blackColor: hsl(0, 0%, 0%);
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
  .topSection {
    .headerSection {
      justify-content: space-between;

      .title {
        h1 {
          font-size: var(--h1FontSize);
          color: var(--blackColor);
          font-weight: 700;
        }
        p {
          font-size: var(--normalFontSize);
          color: var(--textColor);
          font-weight: 500;
        }
      }

      .searchbar {
        padding: 1rem 2rem;
        background: var(--whiteColor);
        border-radius: 5px;
        gap: 1rem;
        box-shadow: 0 2px 4px var(--inputColor);

        input {
          border: none;
          outline: none;
          background: none;
        }
        .icon {
          color: var(--textColor);
          &:hover {
            color: var(--PrimaryColor);
          }
        }
      }
      .adminDiv {
        gap: 1rem;

        .icon {
          font-size: var(--biggestFontSize);
          background: var(--whiteColor);
          border-radius: 5px;
          padding: 5px;
          box-shadow: 0 2px 4px var(--whiteColor);
          color: var(--blackColor);
        }
        .adminImages {
          border: 3px solid var(--whiteColor);
          border-radius: 10px;
          width: 2.5rem;
          overflow: hidden;
          box-shadow: 0 2px 4px var(--inputColor);

          img {
            width: 100%;
            height: 100%;
            border-radius: 10px;
          }
        }
      }
    }
    .cardSection {
      margin-top: 1rem;
      gap: 1rem;

      .rightCard {
        position: relative;
        // flex-basis: 100%;
        display: grid;
        grid-template-columns: 60% 40%;
        gap: 20px;
        height: 280px;
        align-items: flex-start;
        justify-content: center;
        margin: auto;
        padding: 2rem;
        border-radius: 1rem;
        overflow: hidden;

        .leftCard {
          position: relative;
        }

        .card-content {
          position: absolute;
          top: 20%;
          right: 10%;
          z-index: 100;
          opacity: 1;
          // transform: translate(-50%, -50%);
        }

        h1,
        p,
        .btn {
          z-index: 100;
        }
        h1 {
          font-size: var(--h1FontSize);
          color: var(--blackColor);
          font-weight: 700;
          align-items: center;
        }

        .calendarImages {
          img {
            width: 90%;
            height: 90%;
            object-fit: cover;
            opacity: 0.5;
          }
        }
        .Oncalendar {
          background-color: white;
        }

        .fc-day-today {
          background-color: var(--greyText);
        }

        .fc-toolbar-title {
          font-size: 1rem !important;
        }
        .react-calendar {
          box-shadow: 5px 5px 5px var(--greyText);
          border-radius: 0.5rem;

          .react-calendar_navigation {
            color: var(--whiteColor);
          }
        }
        .sideBarCard {
          display: none;
          width: 100%;
          padding: 1rem;
          text-align: center;
          position: relative;

          .icon {
            position: absolute;
            background-color: var(--whiteColor);
            border: 2px solid var(--blackColor);
            font-size: 3rem;
            border-radius: 50%;
            top: -8px;
            right: 50%;
            transform: translate(50%);
            z-index: 100;
          }
          .cardContent {
            position: relative;
            padding: 2rem;
            background: var(--whiteColor);
            border: 2px solid var(--blackColor);
            border-radius: 10px;
            overflow: hidden;
          }
          .h3 {
            font-size: var(--h3FontSize);
            margin-top: 1rem;
            padding: 1rem 0;
            font-weight: 800;
            color: var(--blackColor);
          }
          .p {
            font-size: var(--normalFontSize);
            color: var(--textColor);
            padding-bottom: 1rem;
            font-weight: 500;
          }
          .btn {
            position: relative;
            color: var(--textColor);
            z-index: 1000;
          }
          .circle1,
          .circle2 {
            position: absolute;
            background: var(--whiteColor);
            border-radius: 50%;
            opacity: -7;
          }
          .circle1 {
            height: 100px;
            width: 100px;
            top: -50px;
            left: -50px;
          }
          .circle2 {
            height: 150px;
            width: 150px;
            bottom: -80px;
            right: -80px;
            z-index: 1;
          }
        }
      }
    }
  }
  //Media Queries ===============>
  @media screen and (max-width: 990px) {
    .cardSection {
      flex-direction: column;

      .rightCard,
      .leftCard {
        width: 100%;
        flex-basis: 100%;
      }
      .leftCard {
        margin-top: 2rem;
        align-self: flex-start;
        height: 10px !important;

        .sideBarCard {
          display: block !important;
        }
      }
    }
  }
  @media screen and (max-width: 918px) {
    .headerSection {
      .searchbar {
        display: none;
      }
    }
  }
  @media screen and (max-width: 725px) {
    .cardSection {
      .leftCard {
        .main {
          width: 100%;
        }
        .sideBarCard {
          display: none !important;
        }
      }
    }
  }
  @media screen and (max-width: 480px) {
    .headerSection {
      .adminDiv {
        display: none;
      }
      .title {
        text-align: center;
        margin: auto;
      }
    }

    .cardSection {
      .rightCard {
        text-align: center;
        .buttons {
          margin: auto;
          flex-direction: column;

          .btn {
            width: 100%;
          }
        }
      }
      .leftCard {
        .main {
          display: flex;
          align-items: center;
          justify-content: center;

          .textDiv {
            margin: auto;
          }
          &::before {
            width: 100% !important;
          }
          .imgDiv {
            display: none;
          }
        }
      }
    }
  }
  @media screen and (max-width: 390px) {
    .topSection {
      .cardSection {
        .rightCard {
          text-align: center;
          padding: 2rem 1rem;

          h1 {
            font-size: var(--h2FontSize);
          }
        }
      }
    }
  }
`;

export default Wrapper;
