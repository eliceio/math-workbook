import styled from '@emotion/styled';

const Styled = {
  ColGapBox: styled.div<{ gap?: number }>`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: ${props => (props.gap ? `${props.gap}rem` : '')};
  `,
  RowWrapBox: styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 4rem;
    align-items: center;
    justify-content: center;
    & > div {
      width: 40%;
      justify-content: center;
    }
  `,
  RowWrapBox2: styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    align-items: center;
    justify-content: center;
    & > div {
      width: 30%;
      justify-content: center;
    }
  `,
  RowWrapBox3: styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 3rem;
    align-items: center;
    margin-left: 3.5rem;
    & > div {
      width: 40%;
      justify-content: center;
    }
  `,
  RowWrapBox4: styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 3rem;
    justify-content: center;
  `,
  RowWrapBox10: styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 3rem;
    align-items: center;
    margin-left: 3.5rem;
    & > div {
      width: 80%;
      justify-content: center;
    }
  `,
  RowBox: styled.div`
    display: flex;
  `,
  RowBox2: styled.div`
    display: flex;
    gap: 1rem;
    width: 80%;
  `,
  RowBox3: styled.div`
    display: flex;
    width: 100%;
    margin-top: 1rem;
  `,
  RowBox4: styled.div`
    display: flex;
    height: 100%;
    align-items: flex-end;
    gap: 1rem;
  `,
  RowBox5: styled.div`
    display: flex;
    height: 2.67rem;
    align-items: flex-end;
    gap: 1rem;
  `,

  RedFont1: styled.div`
    color: #ff2e00;
    padding-left: 0.8rem;
    margin-top: 0.2rem;
    width: 100%;
  `,
  SetCenter: styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
  `,

  ExampleBox1: styled.div`
    //긴 example box
    margin-top: 2.938rem;
    margin-bottom: 0.1875rem;
    width: 42.5rem;
    height: 11.375rem;
    border-radius: 1.25rem;
    border: 1px solid #c0c0c0;
    background: inherit;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-weight: 600;
  `,
  ExampleBox2: styled.div`
    //짧은 example box
    margin-top: 2.938rem;
    margin-bottom: 0.1875rem;
    width: 25rem;
    height: 18rem;
    border-radius: 1.25rem;
    border: 1px solid #c0c0c0;
    background: inherit;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-weight: 600;
  `,
  ExampleBox3: styled.div`
    //길고 높은 example box
    margin-top: 2.938rem;
    margin-bottom: 0.1875rem;
    width: 42.5rem;
    height: 13rem;
    border-radius: 1.25rem;
    border: 1px solid #c0c0c0;
    background: inherit;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-weight: 600;
  `,
  ExampleBox4: styled.div`
    //길고 낮은 example box
    margin-bottom: 0.1875rem;
    width: 42.5rem;
    height: 9rem;
    border-radius: 1.25rem;
    border: 1px solid #c0c0c0;
    background: inherit;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-weight: 600;
    position: relative;
  `,
  ExampleExplain1: styled.div`
    position: absolute;
    color: #ff2e00;
    font-size: 1rem;
    top: 1.7rem;
    right: 14.5rem;
    display: flex;
    gap: 3.6rem;
  `,
  DashSingleWrapper: styled.div`
    font-size: 1.5rem;
    font-weight: 600;
    display: flex;
    gap: 1.875rem;
    position: relative;
    padding-top: 5rem;
  `,
  SingleWrapper: styled.div`
    font-size: 1.5rem;
    font-weight: 600;
    display: flex;
    gap: 1.875rem;
    position: relative;
  `,
  SingleWrapper2: styled.div`
    font-size: 1.5rem;
    font-weight: 600;
    display: flex;
    gap: 1.875rem;
    width: 100%;
    height: fit-content;
    border-radius: 1rem;
    padding: 2rem;
    align-items: center;
    justify-content: center;
    background-color: #eff5ff;
    position: relative;
  `,
  SingleWrapper3: styled.div`
    font-size: 1.5rem;
    font-weight: 600;
    display: flex;
    gap: 1.875rem;
    width: 100%;
    min-width: 32.5rem;
    height: fit-content;
    border-radius: 1rem;
    padding: 2rem;
    align-items: center;
    justify-content: center;
    background-color: #eff5ff;
    position: relative;
  `,
  SingleWrapper4: styled.div`
    font-size: 1.5rem;
    font-weight: 600;
    display: flex;
    gap: 1.875rem;
    width: 100%;
    height: fit-content;
    border-radius: 1rem;
    padding: 2rem;
    align-items: center;
    justify-content: center;
    background-color: rgba(230, 248, 240, 0.6);
    position: relative;
  `,
  SingleWrapper5: styled.div`
    font-size: 1.5rem;
    font-weight: 600;
    display: flex;
    gap: 1.875rem;
    width: 100%;
    min-width: 32.5rem;
    height: fit-content;
    border-radius: 1rem;
    padding: 2rem;
    align-items: center;
    justify-content: center;
    background-color: rgba(193, 193, 193, 0.2);
    position: relative;
  `,
  MiniSingleWrapper: styled.div`
    width: 30%;
    max-width: 16.875rem;
    height: fit-content;
    align-items: center;
    justify-content: center;
    background-color: rgba(193, 193, 193, 0.2);
    border-radius: 1rem;
    position: relative;
    padding: 2rem;
    margin: 0 5%;
  `,

  PaddingBox: styled.div`
    font-size: 1.5rem;
    font-weight: 600;
    display: flex;
    gap: 1.875rem;
    padding: 4rem 2rem;
    align-items: center;
    justify-content: center;
  `,
  PaddingBox2: styled.div`
    font-size: 1.5rem;
    font-weight: 600;
    display: flex;
    padding: 4rem 0;
    align-items: center;
    justify-content: center;
  `,
  InputWrapper: styled.div`
    display: flex;
    gap: 0.75rem;
    margin-bottom: 0.625rem;
    text-align: center;
    font-size: 1.5rem;
    font-weight: 600;
    height: fit-content;
    align-items: center;
  `,
  InputWrapper2: styled.div`
    display: flex;
    gap: 0.75rem;
    margin-bottom: 0.625rem;
    text-align: center;
    font-size: 1.5rem;
    font-weight: 600;
    height: fit-content;
  `,
  InputWrapper3: styled.div`
    display: flex;
    gap: 0.75rem;
    text-align: center;
    font-size: 1.5rem;
    font-weight: 600;
    height: fit-content;
    align-items: center;
  `,
  RowInputWrapper: styled.div`
    display: flex;
    align-items: center;
    gap: 0.75rem;
    margin-bottom: 0.625rem;
    text-align: center;
    font-size: 1.5rem;
    font-weight: 600;
  `,
  ExplainInputBox1: styled.div`
    width: 4.8125rem;
    height: 2.3125rem;
    border-radius: 0.25rem;
    border: 1px solid #c1c1c1;
    background: #fff;
    color: #ff2e00;
  `,
  LongInput: styled.input`
    width: 60%;
    height: 2rem;
    margin: 0 1rem;
    border: none;
    outline: none;
    border-bottom: 2px solid #c0c0c0;
    font-size: 1.5rem;
    background-color: transparent;
  `,
  ShortInput: styled.input`
    width: 13%;
    height: 2rem;
    margin: 0 1rem;
    border: none;
    outline: none;
    border-bottom: 2px solid #c0c0c0;
    font-size: 1.5rem;
    background-color: transparent;
  `,
  InputBox1: styled.input`
    width: 4.8125rem;
    height: 2.3125rem;
    border-radius: 0.25rem;
    border: 1px solid #c1c1c1;
    background: #fff;
    color: #2b1840;
    padding: 0 0.5rem;
    text-align: center;
    font-size: 1.5rem;
    font-weight: 600;
    box-sizing: border-box;
    &::placeholder {
      color: #ff2e00;
    }
  `,
  InputBox2: styled.input`
    width: 6.6rem;
    height: 2.3125rem;
    border-radius: 0.25rem;
    border: 1px solid #c1c1c1;
    background: #fff;
    color: #2b1840;
    padding: 0 0.3rem;
    text-align: right;
    font-size: 1.5rem;
    font-weight: 600;
    box-sizing: border-box;
    letter-spacing: 0.375rem;
    &::placeholder {
      color: #ff2e00;
    }
  `,
  InputBox3: styled.input`
    width: 2.5rem;
    height: 2.3125rem;
    border-radius: 0.25rem;
    border: 1px solid #c1c1c1;
    background: #fff;
    color: #2b1840;
    padding: 0 0.5rem;
    text-align: center;
    font-size: 1.5rem;
    font-weight: 600;
    box-sizing: border-box;
    &::placeholder {
      color: #ff2e00;
    }
  `,
  TopLineInput: styled.input`
    border: none;
    border-top: 2px solid #c0c0c0;
    outline: none;
    background-color: transparent;
    height: 2rem;
    font-size: 1.5rem;
    font-weight: 600;
    width: 40%;
    text-align: center;
    letter-spacing: 0.55rem;
    padding-left: 0.6rem;
    box-sizing: border-box;
  `,
  InputExplainWrapper: styled.div<{ left?: number }>`
    display: flex;
    gap: 2.6rem;
    margin-bottom: 0.25rem;
    padding-left: ${props => (props.left ? `${props.left}rem` : '')};
  `,
  InputExplain: styled.div`
    width: 4.8125rem;
    height: fit-content;
    color: #ff2e00;
    font-size: 0.75rem;
    font-weight: 600;
    text-align: center;
  `,
  Line: styled.div`
    color: #6297ff;
  `,
  QuestionBox: styled.div`
    padding: 0.375rem 0.6rem;
    border-bottom: 1px solid #6297ff;
    width: fit-content;
    height: fit-content;
  `,
  LineWrppaer1: styled.div`
    width: 17.5rem;
    height: 4rem;
    position: relative;
  `,
  IdNumBox: styled.div`
    position: absolute;
    top: 1.8rem;
    left: 1.2rem;
    font-size: 1.35rem;
  `,
  IdNumBox2: styled.div`
    position: absolute;
    top: 1rem;
    left: 1.2rem;
    font-size: 1.35rem;
  `,
  IdNumBox3: styled.div`
    position: absolute;
    top: 1rem;
    left: 1.2rem;
    font-size: 1.7rem;
  `,
  TextBoxWrapper: styled.div`
    display: flex;
    flex-direction: column;
    height: fit-content;
    align-items: center;
    gap: 1rem;
    width: 100%;
    padding-left: 1rem;
    .boxCenter {
      display: flex;
      align-items: center;
    }
    .alignCenter {
      align-items: center;
    }
    .answerBox {
      margin: 0px 10px 0;
      height: 30px;
      font-size: 18px;
      border: none;
      border-bottom: 1px solid black;
      outline: none;
    }
  `,
  TextBox: styled.div`
    width: 95%;
    height: fit-content;
    white-space: pre-wrap;
    line-height: 150%;
    font-weight: 500;
    font-size: 1.25rem;
  `,
  TextSize: styled.div`
    font-size: 1.25rem;
    font-weight: 600;
    padding: 1rem;
  `,
  InnerColBox: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    gap: 0.5rem;
    margin: 0 1rem;
  `,
  AngleShapeBox: styled.div`
    position: relative;
    width: 1.3rem;
    height: 3rem;
    display: flex;
  `,
  AngleShapeLeft: styled.div`
    height: 3rem;
    width: 0.6rem;
    border: 1px solid #c0c0c0;
    border-right: none !important;
    position: absolute;
    top: 0.2rem;
    left: 1rem;
  `,
  AngleLineLeft: styled.div`
    border-bottom: 1px solid #c0c0c0;
    width: 1rem;
    height: 0;
    position: absolute;
    top: 1.8rem;
    left: 0;
  `,
  AngleShapeRight: styled.div`
    height: 3rem;
    width: 0.6rem;
    border: 1px solid #c0c0c0;
    border-left: none !important;
    position: absolute;
    top: 0.2rem;
    right: 1rem;
  `,
  AngleLineRight: styled.div`
    border-bottom: 1px solid #c0c0c0;
    width: 1rem;
    height: 0;
    position: absolute;
    top: 1.8rem;
    right: 0;
  `,
  LetterSpacing: styled.div`
    letter-spacing: 0.5rem;
    text-align: right;
    width: 100%;
  `,
  LetterSpacing2: styled.div`
    letter-spacing: 2.5rem;
    margin-left: 1.8rem;
    text-align: right;
    width: 100%;
  `,
  RightDashBorder: styled.div`
    width: 3rem;
    height: 9rem;
    margin-right: 0.5rem;
    border-right: 1.5px dashed #c0c0c0;
  `,
  RightDashBorderWrapper: styled.div`
    position: relative;
  `,
  DashNumWrapper: styled.div`
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: space-between;
  `,
  DashNumMid: styled.div`
    width: 80%;
    display: flex;
    justify-content: space-between;
    padding-left: 1.2rem;
  `,
  DashBoxMidLine: styled.div`
    width: 110%;
    height: 0.125rem;
    background-color: black;
  `,
  DashBoxUpper: styled.div`
    position: absolute;
    top: -3rem;
    left: 3.4rem;
    border: 2px solid #d0e0ff;
    border-radius: 0.4rem;
    background-color: #eff5ff;
    width: 2.5rem;
    height: 2.3125rem;
  `,

  OneToNine: styled.div`
    .absolSetting {
      width: 100%;
      height: 100%;
      position: relative;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-content: center;
    }
    .explain1 {
      position: absolute;
      top: -40%;
      left: -25%;
      font-size: 20px;
    }
    .explain2 {
      font-size: 15px;
      font-weight: 600;
      white-space: pre-wrap;
    }
    .elementAbsol1 {
      position: absolute;
      top: -12%;
      right: 42%;
    }

    .elementAbsol2 {
      position: absolute;
      top: 28%;
      right: 13%;
    }

    .elementAbsol3 {
      position: absolute;
      right: 18%;
      top: 110%;
    }
    .elementAbsol4 {
      position: absolute;
      right: 17.5%;
      top: 110%;
    }
    .elementAbsol5 {
      position: absolute;
      right: 15.5%;
      top: 110%;
    }
    .elementAbsol1127 {
      position: absolute;
      right: 15.8%;
      top: 110%;
    }
    .elementAbsol6 {
      position: absolute;
      top: 28%;
      right: 9%;
    }
    .elementAbsol7 {
      position: absolute;
      top: -12%;
      right: 46%;
    }
    .inputSize1 {
      width: 65px;
      height: 4vh;
      border-radius: 5px;
      border: 1px solid gray;
      outline: none;
      padding-left: 4px;
      font-size: 25px;
      font-weight: 600;
      text-align: center;
    }

    .quiz {
      position: relative;
      display: grid;
      min-width: 770px;
      grid-template-columns: 70%;
      align-content: center;
      justify-content: center;
      margin-top: 50px;
    }
    .quiz1223 {
      position: relative;
      display: grid;
      grid-template-columns: 100%;
      align-content: center;
      justify-content: center;
      margin-top: 50px;
      min-width: 770px;
    }
    .quiz332 {
      position: relative;
      display: grid;
      grid-template-columns: 60%;
      min-width: 770px;
      align-content: center;
      justify-content: center;
      margin-top: 50px;
    }
    .grid1222 {
      display: grid;
      grid-template-columns: 100%;
      align-content: center;
      justify-content: center;
    }
    .gridyoso1222 {
      background-color: #d0e0ff;
      padding: 40px 10px;
      border-radius: 15px;
      margin: 20px 0px;
      min-width: 600px;
    }
    .gridyoso1223 {
      background-color: #ddd3ff;
      padding: 40px 10px;
      border-radius: 15px;
      margin: 20px 0px;
      min-width: 600px;
    }
    .gridyoso1224 {
      background-color: #e2e2e2;
      padding: 40px 10px;
      border-radius: 15px;
      margin: 20px 0px;
      min-width: 600px;
    }
    .nottt1123 {
      font-size: 25px;
      font-weight: 600;
      position: relative;
    }
    .input1123 {
      width: 42px;
      height: 42px;
      font-size: 25px;
      font-weight: 600;
      border-radius: 5px;
      border: none;
      outline: none;
      text-align: center;
    }

    .asdfawef {
      justify-content: center;
      align-items: center;
      gap: 5%;
      white-space: nowrap;
      position: relative;
    }
    .quiz1 {
      min-width: 800px;
      position: relative;
      display: grid;
      grid-template-columns: 50% 50%;
      align-content: center;
      justify-content: center;
      margin-top: 50px;
    }
    .quiz31231 {
      min-width: 500px;
      position: relative;
      display: grid;
      grid-template-columns: 50% 50%;
      align-content: center;
      justify-content: start;
      margin-top: 50px;
    }
    .quiz33131 {
      min-width: 700px;
      position: relative;
      display: grid;
      grid-template-columns: 50% 50%;
      align-content: center;
      justify-content: start;
      margin-top: 50px;
    }
    .quiz32131 {
      width: 80%;
      min-width: 500px;
      position: relative;
      align-content: center;
      justify-content: center;
      margin-top: 50px;
      margin-left: 10%;
    }
    .borderBalck {
      padding: 15px 0;
      border: 1px solid #e9e9e9;
      border-radius: 15px;
    }
    .textCenter {
      text-align: center;
    }
    .marginZero {
      margin: 0;
    }
    .marginRighttic {
      margin: 0px 10px;
    }
    .marginLeft10px {
      margin-left: 10px;
    }
    .justtispaceArout {
      justify-content: space-around;
    }
    .commaHeight {
      margin-top: 30px;
      margin-right: 10px;
    }
    .quizRow3case {
      min-width: 500px;
      position: relative;
      display: grid;
      grid-template-columns: 30% 30% 30%;
      grid-column-gap: 20px;
      align-content: center;
      justify-content: center;
      margin-top: 50px;
    }
    .abposweewr1 {
      position: absolute;
      left: -10px;
      bottom: -50px;
    }
    .barfaww {
      margin-bottom: 60px;
    }
    .abposweewr2 {
      position: absolute;
      left: -9px;
      top: -50px;
    }
    .minwidwer900px {
      min-width: 680px;
    }
    .number3111 {
      margin: -18% 20px 0 0;
    }
    .number3112 {
      margin: -10% 20px 0 0;
    }
    .box311all {
      width: 100%;
      display: grid;
      grid-template-columns: 32% 32% 32%;
      grid-column-gap: 20px;
      align-content: center;
      justify-content: center;
      border-radius: 15px;
      border: 1px solid #e9e9e9;
      padding-right: 30px;
      margin-bottom: 30px;
    }
    .box31145 {
      padding-right: 10px;
      height: 420px;
    }
    .quiz1211 {
      position: relative;
      display: grid;
      grid-template-columns: 70% 70%;
      align-content: center;
      justify-content: center;
      min-width: 770px;
      margin-top: 50px;
    }
    .quiz2111 {
      min-width: 770px;
      position: relative;
      display: grid;
      grid-template-columns: 52% 52%;
      align-items: center;
      justify-content: center;
      margin-top: 50px;
    }
    .afwea {
      min-width: 880px;
      grid-template-columns: 45% 45%;
    }
    .quiz3111 {
      min-width: 770px;
      position: relative;
      display: grid;
      grid-template-columns: 80%;
      align-items: center;
      justify-content: center;
      margin-top: 50px;
    }
    .quiz3112 {
      min-width: 770px;
      position: relative;
      display: grid;
      grid-template-columns: 40% 39.9%;
      align-items: center;
      justify-content: center;
      margin-top: 50px;
    }
    .quiz3429 {
      grid-template-columns: 35% 35%;
    }
    .quiz2 {
      position: relative;
      display: grid;
      grid-template-columns: 37% 37%;
      align-content: center;
      justify-content: center;
      margin-top: 50px;
      min-width: 770px;
    }
    .quiz3 {
      position: relative;
      display: grid;
      grid-template-columns: 38% 38%;
      align-content: center;
      justify-content: center;
      margin-top: 50px;
      min-width: 770px;
    }
    .quiz333 {
      position: relative;
      display: grid;
      grid-template-columns: 48% 48%;
      align-content: center;
      justify-content: center;
      margin-top: 50px;
      min-width: 770px;
    }
    .awefawrpos {
      position: absolute;
    }
    .awefaSize {
      width: 280px;
    }
    .quizAll {
      margin-top: 30px;
      width: 100%;
    }
    .asdfasdf242 {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    .quizAllLate {
      position: relative;
      left: -20%;
    }
    .wef213 {
      position: relative;
    }
    .quizAllLine {
      margin-top: 30px;
      width: 100%;
      position: relative;
      white-space: nowrap;
    }
    .quizCard {
      width: 90%;
      height: 190px;
      padding: 23px;
      border: 1px solid #e9e9e9;
      position: relative;
      border-radius: 10px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      margin: 3%;
    }
    .absolSetting121 {
      width: 98%;
      padding: 73px 23px;
      border: 1px solid #e9e9e9;
      position: relative;
      border-radius: 10px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      margin: 3%;
      white-space: nowrap;
    }
    .quizCard p {
      font-size: 20px;
      font-weight: 600;
    }
    .quizCardnocolor {
      width: 85%;
      height: 140px;
      padding: 23px;
      font-size: 25px;
      position: relative;
      border-radius: 10px;
      display: flex;
      justify-content: center;
      margin: 3%;
      margin-bottom: 8%;
      font-weight: 600;
      white-space: nowrap;
      .margin5px {
        margin-top: 5px;
      }
    }
    .quizCard11 {
      width: 85%;
      height: 140px;
      padding: 23px;
      font-size: 25px;
      position: relative;
      border-radius: 10px;
      display: flex;
      justify-content: center;
      margin: 3%;
      margin-bottom: 8%;
      font-weight: 600;
      white-space: nowrap;
      .margin5px {
        margin-top: 5px;
      }
    }
    .justStart322 {
      width: 85%;
      height: 140px;
      padding: 23px;
      font-size: 25px;
      position: relative;
      border-radius: 10px;
      display: flex;
      justify-content: start;
      margin: 3%;
      margin-bottom: 8%;
      font-weight: 600;
      white-space: nowrap;
    }
    .colorRedOnly322 {
      color: red;
    }
    .quizCard1 {
      width: 85%;
      height: 140px;
      padding: 23px;
      font-size: 25px;
      position: relative;
      border-radius: 10px;
      display: flex;
      justify-content: center;
      margin: 3%;
      margin-bottom: 8%;
      font-weight: 600;
      background-color: #e9e9e9;
      white-space: nowrap;
      .margin5px {
        margin-top: 5px;
      }
    }
    .quizCard211 {
      width: 370px;
      height: 180px;
      padding: 23px;
      font-size: 25px;
      position: relative;
      border-radius: 10px;
      display: flex;
      justify-content: center;
      margin: 3%;
      margin-bottom: 8%;
      font-weight: 600;
      background-color: #e9e9e9;
      white-space: nowrap;
      margin-left: 20px;
      .margin5px {
        margin-top: 5px;
      }
    }
    .quizCard223 {
      min-width: 500px;
      width: 99%;
      height: 180px;
      padding: 23px;
      font-size: 25px;
      position: relative;
      border-radius: 10px;
      display: flex;
      justify-content: center;
      margin: 3%;
      margin-bottom: 8%;
      font-weight: 600;
      background-color: #e9e9e9;
      white-space: nowrap;
      margin-left: 20px;
      .margin5px {
        margin-top: 5px;
      }
    }
    .quizCard1331 {
      width: 85%;
      height: 140px;
      padding: 23px;
      font-size: 25px;
      position: relative;
      border-radius: 10px;
      display: flex;
      justify-content: left;
      margin: 3%;
      margin-bottom: 8%;
      font-weight: 600;
      white-space: nowrap;
      .margin5px {
        margin-top: 5px;
      }
    }
    .mpijo {
      background-color: white;
    }
    .marginbottom666 {
      margin-top: 20px;
      margin-bottom: 30px;
    }
    .marginbottom0 {
      margin-bottom: 0px;
    }
    .quizCard2 {
      width: 85%;
      height: 140px;
      padding: 23px;
      font-size: 25px;
      position: relative;
      border-radius: 10px;
      display: flex;
      justify-content: center;
      margin: 3%;
      margin-bottom: 8%;
      font-weight: 600;
      background-color: #d0e0ff;
      white-space: nowrap;
      .margin5px {
        margin-top: 5px;
      }
    }
    .quizCard3 {
      width: 85%;
      height: 140px;
      padding: 23px;
      font-size: 25px;
      position: relative;
      border-radius: 10px;
      display: flex;
      justify-content: center;
      margin: 3%;
      margin-bottom: 8%;
      font-weight: 600;
      background-color: #ddd3ff;
      white-space: nowrap;
      .margin5px {
        margin-top: 5px;
      }
    }
    .img141 {
      width: 800px;
      position: absolute;
      right: 0px;
      top: 6.8%;
    }
    .imgfake {
      width: 800px;
      height: 1013.17px;
    }
    .quizCard4 {
      width: 92%;
      height: 120px;
      padding: 25px;
      position: relative;
      border-radius: 10px;
      display: flex;
      justify-content: center;
      margin: 50px 0px;
      font-weight: 600;
      font-size: 25px;
      background-color: #e9e9e9;
      white-space: nowrap;
    }
    .quizCard332 {
      width: 72%;
      height: 120px;
      padding: 25px;
      position: relative;
      border-radius: 10px;
      display: flex;
      justify-content: center;
      margin: 50px 0px;
      font-weight: 600;
      font-size: 25px;
      background-color: #e2e2e2;
      white-space: nowrap;
      margin: 50px 0px 0px 50px;
    }
    .colorNum1 {
      background-color: #d0e0ff;
    }
    .colorNum2 {
      background-color: #ddd3ff;
    }
    .quizCard5 {
      width: 92%;
      height: 120px;
      padding: 25px;
      position: relative;
      border-radius: 10px;
      display: flex;
      justify-content: center;
      margin: 50px 0px;
      font-weight: 600;
      font-size: 25px;
      background-color: #d0e0ff;
      white-space: nowrap;
    }
    .quiz241Ex {
      width: 80%;
      border: 1px solid #e2e2e2;
      padding: 7%;
      border-radius: 10px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
    .noWrap1 {
      white-space: nowrap;
    }
    .margin2410 {
      color: red;
      margin: 20px 0 20px 15px;
    }
    .quizNumber123522 {
      margin-right: 100px;
    }
    .elemet2411 p {
      margin: 2px 0px;
    }
    .quizCard6 {
      width: 92%;
      height: 120px;
      padding: 25px;
      position: relative;
      border-radius: 10px;
      display: flex;
      justify-content: center;
      margin: 50px 0px;
      font-weight: 600;
      font-size: 25px;
      background-color: #ddd3ff;
      white-space: nowrap;
    }
    .lineAbSet1 {
      position: absolute;
      top: 33%;
      left: 20%;
    }
    .lineAbSet2 {
      position: absolute;
      top: 33%;
      left: 65%;
    }
    .lineAbSet3 {
      position: absolute;
      top: 33%;
      left: 18%;
    }
    .quizNumber {
      position: absolute;
      font-size: 25px;
      left: 0%;
      top: 0%;
    }
    .quizNumber1433 {
      font-size: 25px;
    }
    .quizNumber1227 {
      position: absolute;
      font-size: 25px;
      left: -6%;
      top: -70%;
    }
    .quizNumber1221 {
      position: absolute;
      left: -10%;
      top: -10%;
    }
    .quizNumber1226 {
      margin: 0;
      margin-left: -46px;
      margin-right: 24px;
      margin-top: -8px;
    }
    .quizNumbToi13 {
      margin-top: -58px;
    }
    .quizNumber1231 {
      margin-right: 40px;
      font-size: 22px;
    }
    .quizNumber1235 {
      margin-right: 10px;
    }
    .quizNumber123887 {
      margin-top: 80px;
    }
    .quizNumber125787 {
      margin-top: 40px;
    }
    .quizNumberTop {
      position: absolute;
      left: -10%;
      top: -10%;
    }
    .sectionSize {
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      align-content: center;
    }
    .awefawufiut {
      margin-left: 8%;
    }
    .textRight {
      margin-top: 3%;
      margin-left: 33%;
      text-align: center;
    }
    .textAlignRight {
      justify-content: end;
    }
    .fif251numb {
      padding: 10px 30px;
      background-color: rgba(0, 255, 255, 0.3);
      border-radius: 10px;
    }
    .fif253numb {
      margin-left: 20px;
      border-right: 1px solid black;
    }
    .fif253numb div {
      width: 55px;
      height: 55px;
      border: 1px solid black;
      line-height: 50px;
      text-align: center;
      border-right: none;
    }
    .textRight111 {
      margin-top: 3%;
      margin-left: 30%;
      text-align: center;
    }
    .textRight1111 {
      margin-top: 3%;
      margin-left: 33%;
      text-align: center;
    }
    .textRight1112 {
      margin-top: 3%;
      margin-left: 36%;
      text-align: center;
    }
    .textRight2 {
      margin-top: 3%;
      margin-left: 55%;
      text-align: center;
    }
    .textRight3 {
      margin-top: 3%;
      margin-left: 110px;
      text-align: center;
    }
    .textRight4 {
      margin-top: 3%;
      margin-left: 120px;
      text-align: center;
    }
    .marginTop18 {
      margin-top: 24px;
      margin-left: 10px;
    }
    .Red233 {
      margin-top: -10px;
      color: red;
      margin-left: 20px;
    }
    .marginTop213 {
      margin-top: 24px;
    }
    .marginTop231 {
      margin-top: 35px;
    }
    .marginleft2421 {
      margin-left: 25px;
    }
    .marginLeftZero {
      margin-left: -17px;
    }
    .marginwtwt {
      margin-top: 10px;
      margin-left: 170px;
    }
    .marginRight231 {
      margin-right: 20px;
    }
    .borderColor233 {
      width: 72px;
      height: 42px;
      border: 1px solid #e2e2e2;
      border-radius: 10px;
      font-size: 25px;
      text-align: center;
    }
    .marginwtwtt {
      margin-top: 10px;
      margin-left: 151px;
    }
    .awefaw {
      margin-top: 10px;
      margin-left: 109px;
    }
    .afweweaf141 {
      margin-left: -50px;
    }
    .awefaw33132 {
      margin-top: 10px;
      margin-left: 125px;
    }
    .awefaw331324 {
      margin-top: 10px;
      margin-left: 122px;
    }
    .awefaw331 {
      margin-top: 10px;
      margin-left: 140px;
    }
    .awefaweTOp {
      margin-top: 50px;
    }
    .fakwefTop {
      margin-top: 120px;
    }
    .awefaw3311 {
      margin-top: 10px;
      margin-left: 130px;
    }
    .awefaw3312 {
      margin-top: 10px;
      margin-left: 146px;
    }
    .marginwtwt123t {
      margin-top: 10px;
      margin-left: 143.5px;
    }
    .margintop2512 {
      margin-top: 10px;
    }
    .twoQuiz {
      display: flex;
      flex-wrap: wrap;
      gap: 50px;
      align-content: center;
      justify-content: center;
      font-weight: 600;
      font-size: 25px;
    }

    .quiz121Ex {
      position: relative;
    }
    .d-line {
      width: 0; /* 가로 길이 조절 */
      height: 59px; /* 세로 길이 조절 */
      border: 0.5px solid red;
      position: absolute;
      transform: rotate(-90deg);
    }

    .d-line:before,
    .d-line:after {
      content: '';
      position: absolute;
      width: 8px; /* 가로 길이 조절 */
      height: 2px; /* 세로 길이 조절 */
      background-color: red; /* 선의 색상 설정 */
    }

    .d-line:before {
      top: -1px;
      left: 0;
      transform: rotate(0deg);
    }

    .d-line:after {
      bottom: -1px;
      left: 0px; /* 가로 길이의 절반만큼 이동 */
      transform: rotate(0deg);
    }

    .lineStyleCss {
      .d-line1 {
        width: 0; /* 가로 길이 조절 */
        height: 76px; /* 세로 길이 조절 */
        border: 0.5px solid red;
        position: absolute;
        transform: rotate(-90deg);
        left: 28%;
        top: 45%;
      }

      .d-line1:before,
      .d-line1:after {
        content: '';
        position: absolute;
        width: 8px; /* 가로 길이 조절 */
        height: 2px; /* 세로 길이 조절 */
        background-color: red; /* 선의 색상 설정 */
      }

      .d-line1:before {
        top: -1px;
        left: 0;
        transform: rotate(0deg);
      }

      .d-line1:after {
        width: 76px; /* 가로 길이 조절 */
        bottom: -1px;
        left: 0px; /* 가로 길이의 절반만큼 이동 */
        transform: rotate(0deg);
      }

      .d-line2 {
        width: 0; /* 가로 길이 조절 */
        height: 40px; /* 세로 길이 조절 */
        border: 0.5px solid red;
        position: absolute;
        transform: rotate(-90deg);
        right: 30%;
        top: 12%;
      }

      .d-line2:before,
      .d-line2:after {
        content: '';
        position: absolute;
        width: 8px; /* 가로 길이 조절 */
        height: 2px; /* 세로 길이 조절 */
        background-color: red; /* 선의 색상 설정 */
      }

      .d-line2:before {
        top: -1px;
        left: 0;
        transform: rotate(0deg);
      }

      .d-line2:after {
        bottom: -1px;
        left: 0px; /* 가로 길이의 절반만큼 이동 */
        transform: rotate(0deg);
      }
      .d-line3 {
        width: 0; /* 가로 길이 조절 */
        height: 76px; /* 세로 길이 조절 */
        border: 1px solid red;
        position: absolute;
        transform: rotate(-90deg);
        right: 36%;
        top: 44%;
      }

      .d-line3:before,
      .d-line3:after {
        content: '';
        position: absolute;
        width: 8px; /* 가로 길이 조절 */
        height: 2px; /* 세로 길이 조절 */
        background-color: red; /* 선의 색상 설정 */
      }

      .d-line3:before {
        top: -1px;
        left: 0;
        transform: rotate(0deg);
        width: 76px; /* 좌측 세로 길이 조절 */
      }

      .d-line3:after {
        bottom: -1px;
        left: 0px; /* 가로 길이의 절반만큼 이동 */
        transform: rotate(0deg);
      }

      .d-line4 {
        width: 0; /* 가로 길이 조절 */
        height: 46px; /* 세로 길이 조절 */
        border: 0.5px solid red;
        position: absolute;
        transform: rotate(-90deg);
        right: 40%;
        top: 63%;
      }
      .quizLine121455 {
        right: 43%;
      }
      .d-line4:before,
      .d-line4:after {
        content: '';
        position: absolute;
        width: 8px; /* 가로 길이 조절 */
        height: 2px; /* 세로 길이 조절 */
        background-color: red; /* 선의 색상 설정 */
      }

      .d-line4:before {
        top: -1px;
        left: 0;
        transform: rotate(0deg);
      }

      .d-line4:after {
        bottom: -1px;
        left: 0px; /* 가로 길이의 절반만큼 이동 */
        transform: rotate(0deg);
      }

      .d-line5 {
        width: 0; /* 가로 길이 조절 */
        height: 92px; /* 세로 길이 조절 */
        border: 0.5px solid red;
        position: absolute;
        transform: rotate(-90deg);
        left: 43%;
        top: 100%;
      }
      .awoefiawfe {
        left: 45%;
      }
      .d-line5:before,
      .d-line5:after {
        content: '';
        position: absolute;
        width: 8px; /* 가로 길이 조절 */
        height: 2px; /* 세로 길이 조절 */
        background-color: red; /* 선의 색상 설정 */
      }

      .d-line5:before {
        top: -1px;
        left: 0;
        transform: rotate(0deg);
        width: 65px; /* 좌측 세로 길이 조절 */
      }

      .d-line5:after {
        bottom: -1px;
        left: 0px; /* 가로 길이의 절반만큼 이동 */
        transform: rotate(0deg);
      }

      .marginLeft1 {
        right: 27%;
      }

      .marginLeft2 {
        right: 44.5%;
      }
      .marginLeft3 {
        left: 59%;
      }
    }
    .img1211 {
      position: absolute;
      left: 7%;
      top: 21%;
      width: 150px;
    }
    .img1212 {
      position: absolute;
      left: 8%;
      top: 21%;
      width: 150px;
    }
    .imgleft1311 {
      left: 13%;
      width: 160px;
    }
    .flexrow {
      display: flex;
      flex-direction: row;
      .margin8px {
        margin-left: 8px;
      }
      .margin10px {
        white-space: nowrap;
        margin-left: 14px;
      }
    }

    .marginLeft7 {
      margin-left: 8%;
      margin-top: 5%;
      width: 42px;
      height: 42px;
      font-size: 25px;
      text-align: center;
      border: 1px solid gray;
      color: red;
      border-radius: 4px;
    }
    .marginLeft8 {
      margin-left: 24%;
      margin-top: 14%;
      width: 42px;
      height: 42px;
      font-size: 25px;
      text-align: center;
      border: 1px solid gray;
      color: red;
      border-radius: 4px;
    }
    .marginLeft9 {
      margin-left: 1%;
      width: 42px;
      height: 42px;
      font-size: 25px;
      text-align: center;
      border: 1px solid gray;
      color: red;
      border-radius: 4px;
    }
    .marginLeft10 {
      margin-left: 33%;
      margin-top: 4%;
      width: 42px;
      height: 42px;
      font-size: 25px;
      text-align: center;
      border: 1px solid gray;
      color: red;
      border-radius: 4px;
    }
    .marginLeft11 {
      margin-top: 10%;
      margin-left: 18%;
      width: 42px;
      height: 42px;
      font-size: 25px;
      text-align: center;
      border: 1px solid gray;
      color: red;
      border-radius: 4px;
    }
    .borderRedSq {
      width: 42px;
      height: 42px;
      font-size: 25px;
      text-align: center;
      border: 1px solid gray;
      color: red;
      border-radius: 4px;
      margin-left: 5px;
    }

    .borderRedSqAb1 {
      width: 42px;
      height: 42px;
      font-size: 25px;
      text-align: center;
      border: 1px solid gray;
      color: red;
      border-radius: 2px;
      position: absolute;
      top: 32%;
      left: 19%;
    }

    .borderRedSqAb2 {
      width: 42px;
      height: 42px;
      font-size: 25px;
      text-align: center;
      border: 1px solid gray;
      color: red;
      border-radius: 2px;
      position: absolute;
      top: 75%;
      left: 24%;
    }

    .borderRedSqAb3 {
      width: 42px;
      height: 42px;
      font-size: 25px;
      text-align: center;
      border: 1px solid gray;
      color: red;
      border-radius: 2px;
      position: absolute;
      top: 35%;
      left: 66%;
    }

    .borderRedSqAb4 {
      width: 42px;
      height: 42px;
      font-size: 25px;
      text-align: center;
      border: 1px solid gray;
      color: red;
      border-radius: 2px;
      position: absolute;
      top: 72%;
      left: 58%;
    }

    .quizCardNone {
      width: 60%;
      height: 100px;
      padding: 23px;
      position: relative;
      border-radius: 10px;
      display: flex;
      justify-content: center;
      margin: 10%;
      font-size: 25px;
      font-weight: 600;
      margin-bottom: 20%;
    }

    .borderRedInput1 {
      font-size: 10px;
      width: 42px;
      height: 42px;
      font-size: 25px;
      text-align: center;
      border: 1px solid gray;
      border-radius: 2px;
      position: absolute;
      top: 22%;
      right: -5%;
      outline: none;
      padding-left: 3px;
    }
    .margintopbotom5px {
      padding: 0px 10px;
    }
    .borderRedInput1211 {
      font-size: 10px;
      width: 42px;
      height: 42px;
      font-size: 25px;
      text-align: center;
      border: 1px solid gray;
      border-radius: 2px;
      outline: none;
      padding-left: 3px;
    }
    .borderRedInput2 {
      font-size: 10px;
      width: 42px;
      height: 42px;
      font-size: 25px;
      text-align: center;
      border: 1px solid gray;
      border-radius: 4px;
      position: absolute;
      top: 90%;
      right: 32%;
      outline: none;
      padding-left: 3px;
    }
    .quizInput1231 {
      right: 39%;
    }
    .quizInput1239 {
      right: 37%;
    }
    .borderRedInput3 {
      font-size: 10px;
      width: 42px;
      height: 42px;
      font-size: 25px;
      text-align: center;
      border: 1px solid gray;
      border-radius: 4px;
      position: absolute;
      top: 158%;
      right: 50%;
      outline: none;
      padding-left: 3px;
    }
    .quizMargin {
      margin-right: 5%;
    }
    .quizMargin1131 {
      margin-right: 30px;
    }
    .quizMargin2 {
      margin-bottom: 120px;
    }
    .quizMargin1422 {
      margin-bottom: 10px;
    }
    .quizMargin1922 {
      margin-bottom: 70px;
    }
    .quizMargin3 {
      grid-column-gap: 80px;
    }
    .fontSize25 {
      font-size: 25px;
      font-weight: 600;
    }
    .fontSize20 {
      font-size: 20px;
      font-weight: 600;
    }
    .imgInputSet input {
      position: absolute;
      width: 60px;
      height: 60px;
      font-size: 25px;
      padding-inline-start: 7px;
    }

    .imgInput1 {
      top: 77px;
      right: 151px;
    }

    .imgInput2 {
      top: 224px;
      right: 297px;
    }

    .imgInput3 {
      top: 367px;
      right: 7px;
    }

    .imgInput4 {
      top: 513px;
      right: 152px;
    }

    .imgInput5 {
      top: 660px;
      right: 442px;
    }

    .imgInput6 {
      top: 659px;
      right: 8px;
    }

    .imgInput7 {
      top: 803px;
      right: 588px;
    }

    .imgInput8 {
      top: 803px;
      right: 298px;
    }
    .flexCol {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    .marginBottom18 {
      margin-bottom: 18px;
    }
    .number3113 {
      margin: -80% 10px 0;
    }
    .imgSize3115 {
      width: 60%;
      padding: 15px;
    }
    .quiz211 {
      width: 80%;
      margin-left: 10%;
      border: 1px solid #ccc;
      border-radius: 10px;
      justify-content: center;
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    .flexRow {
      display: flex;
      flex-direction: row;
      align-items: center;
    }
    .marginLeft30 {
      margin-left: 30px;
    }
    .marginLeft6 {
      margin-left: 6.5px;
    }
    .averageInput {
      width: 42px;
      height: 42px;
      font-size: 25px;
      border-radius: 4px;
      border: 1px solid gray;
      text-align: center;
      outline: none;
    }
    .averageInput331 {
      width: 32px;
      height: 32px;
      font-size: 20px;
      border-radius: 4px;
      border: 1px solid gray;
      text-align: center;
      outline: none;
    }
    .divlineCSS {
      width: 42px;
      height: 0px;
      border: 1px solid black;
      margin: 2px 0px;
    }
    .divlineCSS1 {
      width: 22px;
      height: 0px;
      border: 1px solid black;
      margin: 2px 0px;
    }
    .divlineCSS2 {
      width: 64px;
      height: 0px;
      border: 1px solid black;
      margin: 2px 0px;
    }
    .divlineCSS15 {
      width: 42px;
      height: 0px;
      border: 1px solid black;
      margin: 2px 0px;
    }
    .divlineCSS16 {
      width: 179px;
      height: 0px;
      border: 1px solid black;
      margin: 2px 0px;
    }
    .divlineCSS4 {
      width: 80px;
      height: 0px;
      border: 1px solid black;
      margin: 2px 0px;
    }
    .divlineCSS5 {
      width: 35px;
      height: 0px;
      border: 1px solid black;
      margin: 2px 0px;
    }
    .divlineCSS7 {
      width: 32px;
      height: 0px;
      border: 1px solid black;
      margin: 2px 0px;
    }
    .divlineCSS6 {
      width: 46px;
      height: 0px;
      border: 1px solid black;
      margin: 2px 0px;
    }
    .divlineCSS10 {
      width: 17px;
      height: 0px;
      border: 1px solid black;
      margin: 2px 0px;
    }
    .divlineCSS11 {
      width: 12px;
      height: 0px;
      border: 1px solid black;
      margin: 2px 0px;
    }
    .divlineRedColor {
      border: 1px solid red;
    }
    .imgSize3111 {
      width: 80%;
      padding: 15px;
    }
    .imgawer {
      width: 80px;
      margin: 0px 10px;
    }
    .aweijaow {
      width: 350px;
    }
    .awef12368568 {
      width: 70%;
    }

    .fifthQuiz212 {
      display: flex;
      flex-direction: row;
      align-items: center;
      margin-top: 30px;
    }
    .fifthQuiz212 div {
      margin: 0px 8px;
      white-space: nowrap;
    }
    .justifyCenter {
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .jawfiejaw {
      justify-content: center;
      align-items: center;
    }
    .justAlignCenter {
      margin: 10px 0px 0px 17px;
      text-align: center;
    }
    .fifthQuiz212 p {
      margin: 0px 5px;
      white-space: nowrap;
    }
    .allowRight {
      margin-left: 5px;
      width: 2vw;
    }
    .wefq4212 {
      position: absolute;
      top: 40%;
      left: 50%;
    }
    .fifthQuiz213Input {
      width: 102px;
      height: 42px;
      font-size: 22px;
      border-radius: 5px;
      border: 1px solid gray;
      text-align: center;
      outline: none;
    }
    .fifthQuiz231Input {
      width: 4vw;
      height: 42px;
      font-size: 25px;
      border-radius: 5px;
      border: 1px solid #e2e2e2;
      text-align: center;
      outline: none;
    }
    .fifthQuiz221Input {
      width: 182px;
      height: 45px;
      border-radius: 5px;
      border: 1px solid gray;
      text-align: center;
      font-size: 22px;
      margin: 0px 50px;
      outline: none;
    }
    .fifthGrade223Grid {
      display: grid;
      grid-template-columns: repeat(8, 1fr);
      border-right: 1px solid black;
    }
    .fifthGrade223Grid div {
      padding: 10px;
      background-color: white;
      border: 1px solid black;
      border-right: none;
      text-align: center;
      font-weight: 600;
    }
    .fifthGrade223Input {
      width: 42px;
      height: 42px;
      font-size: 22px;
      border-radius: 4px;
      border: 1px solid gray;
      text-align: center;
      outline: none;
      margin: 0px 10px 0px 20px;
      font-size: 17px;
    }
    .d-line126 {
      width: 0; /* 가로 길이 조절 */
      height: 45px; /* 세로 길이 조절 */
      border: 0.5px solid red;
      position: absolute;
      top: 30%;
      left: 14%;
      transform: rotate(-90deg);
    }

    .d-line126:before,
    .d-line126:after {
      content: '';
      position: absolute;
      width: 8px; /* 가로 길이 조절 */
      height: 2px; /* 세로 길이 조절 */
      background-color: red; /* 선의 색상 설정 */
    }

    .d-line126:before {
      top: -1px;
      left: 0;
      transform: rotate(0deg);
    }

    .d-line126:after {
      bottom: -1px;
      left: 0px; /* 가로 길이의 절반만큼 이동 */
      transform: rotate(0deg);
    }
    .d-line122 {
      width: 0; /* 가로 길이 조절 */
      height: 59px; /* 세로 길이 조절 */
      border: 0.5px solid red;
      position: absolute;
      top: 30%;
      left: 14%;
      transform: rotate(-90deg);
    }

    .d-line122:before,
    .d-line122:after {
      content: '';
      position: absolute;
      width: 8px; /* 가로 길이 조절 */
      height: 2px; /* 세로 길이 조절 */
      background-color: red; /* 선의 색상 설정 */
    }

    .d-line122:before {
      top: -1px;
      left: 0;
      transform: rotate(0deg);
    }

    .d-line122:after {
      bottom: -1px;
      left: 0px; /* 가로 길이의 절반만큼 이동 */
      transform: rotate(0deg);
    }
    .d-line123 {
      width: 0; /* 가로 길이 조절 */
      height: 59px; /* 세로 길이 조절 */
      border: 0.5px solid red;
      position: absolute;
      transform: rotate(-90deg);
      top: 30%;
      left: 420px;
    }

    .d-line123:before,
    .d-line123:after {
      content: '';
      position: absolute;
      width: 8px; /* 가로 길이 조절 */
      height: 2px; /* 세로 길이 조절 */
      background-color: red; /* 선의 색상 설정 */
    }

    .d-line123:before {
      top: -1px;
      left: 0;
      transform: rotate(0deg);
    }

    .d-line123:after {
      bottom: -1px;
      left: 0px; /* 가로 길이의 절반만큼 이동 */
      transform: rotate(0deg);
    }
    .line12222 {
      left: 400px;
    }
    .line13222 {
      left: 100px;
      top: 43%;
    }

    .line13223 {
      left: 40px;
    }
    .line13225 {
      left: 27px;
      top: 43%;
    }
    .line13226 {
      left: 82px;
      top: 43%;
    }
    .line13224 {
      left: 20px;
    }
    .line13230 {
      left: 30px;
      top: 43%;
    }
    .line13232 {
      left: 92px;
      top: 43%;
    }
    .marginleft2231 {
      margin-right: 20px;
    }
    .marginwtwtt11 {
      margin-top: 10px;
      margin-left: 136px;
    }
    .marginwerq2452 {
      margin-left: 106px;
    }
    .marginwerq245288 {
      margin-left: 10%;
    }
    .marginLeft3121 {
      margin-left: 56px;
    }
    .marginwtwtt12 {
      margin-top: 10px;
      margin-left: 161px;
    }
    .marginwtwtt13 {
      margin-top: 10px;
      margin-left: 142px;
    }
    .fif221221 {
      width: 350px;
      justify-content: space-around;
      margin-left: 15px;
    }
    .textleft1231 {
      text-align: start;
      width: 200px;
      margin-bottom: 10px;
    }
    .description p {
      margin: 0;
      padding: 10px 0;
    }
    .highlight {
      color: red;
      font-weight: bold;
    }
    .division-examples {
      width: 70%;
      background-color: #f7f7f7;
      border: 1px solid #ddd;
      padding: 10px;
      border-radius: 8px;
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
      gap: 10px;
      margin-bottom: 20px;
    }

    .example {
      width: 33%;
      white-space: nowrap;
      text-align: left;
      padding: 10px;
      border-radius: 5px;
      font-weight: 600;
      font-size: 20px;
      display: flex;
      flex-direction: row;
    }
    .example div {
      margin-left: 5px;
      color: red;
    }

    .conclusion {
      padding: 10px 0;
      font-size: 16px;
      font-weight: 500;
    }
    .quiz2131 {
      background-color: #e2e2e2;
      width: 48px;
      height: 48px;
      line-height: 48px;
      text-align: center;
      margin: 5px;
      border-radius: 10px;
    }
    .add2131 {
      line-height: 60px;
      width: 60px;
      height: 60px;
      border-radius: 0px;
      background-color: rgba(0, 255, 255, 0.2);
      border: 1px solid #d0e0ff;
      transform: rotate(45deg);
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .posiAbAb {
      transform: rotate(-45deg);
      display: block;
      font-size: 25px;
      font-weight: bold;
    }
    .fontSize17 {
      font-size: 17px;
      font-weight: 600;
    }
    .exampleBox312 {
      min-width: 550px;
      margin-left: 10%;
      padding: 15px;
      margin-top: 50px;
      width: 80%;
      border: 1px solid #e2e2e2;
      border-radius: 15px;
    }
    .aewrfawe {
      margin-left: 7%;
    }
    .paddingExp {
      padding: 15px;
    }
    .marginbottomtic {
      margin-bottom: 8px;
    }
    .lawefkoiwerf {
      margin-left: 80px;
    }
    .colorRedOnly {
      color: red;
      margin-left: 10px;
    }
    .textRight332 {
      margin-top: 20px;
      text-align: right;
      color: gray;
    }
    .heieeiei341 {
      height: 45px;
    }
    .heiwerlin {
      line-height: 30px;
      height: 45px;
    }
    .cororo {
      width: 70px;
      height: 70px;
      background-color: rgba(255, 0, 255, 0.2);
      border: 1px solid #d0e8df;
    }
    .quxeesw341 {
      background-color: #e9e9e9;
      padding: 15px;
      border-radius: 15px;
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 0px 20px;
      width: 600px;
    }
    .yosomargin {
      margin: 0px 40px;
    }
    .sqerqrmairign {
      margin: 4px 20px 0px 0px;
    }
    .gagprajgw {
      gap: 60px 0px;
      height: 850px;
    }
    .asfw {
      min-width: 367px;
      padding: 20px 0px 10px 15px;
      margin: 20px;
      border: 1px solid gray;
      border-radius: 15px;
      flex-wrap: wrap;
      justify-content: center;
    }
    .asdfawe {
      color: skyblue;
    }
    .awrfaw {
      color: #fff99f;
    }
    .afwe {
      margin-left: -20px;
      margin-right: 40px;
    }
    .nuarfwa533 {
      font-size: 20px;
      position: absolute;
      top: -20px;
      left: -30px;
    }
    .redeinptueq {
      font-size: 35px;
      margin: 0 7px;
      border-radius: 50%;
    }
    .colrrwrinput {
      color: red;
    }
    .awemaraalow {
      margin: 0px 20px;
    }
    .marginlR10px {
      margin: 30px 10px;
    }
    .awkfaui {
      margin: 0px 5px;
    }
    .marginawerq {
      margin: 0px 10px 0px 0px;
    }
    .mairgin-wef {
      margin-right: -75px;
    }
    .awefinbptu {
      color: red;
      border: none;
      width: 15px;
      height: 15px;
      font-size: 20px;
    }
    .arfgawefawbort {
      border: 1px solid red;
    }
    .fontSize14 {
      font-size: 14px;
    }
    .margialefeef {
      margin-left: -56px;
    }
    .peiafoewijao {
      padding: 8px;
    }
    .imgAbp1 {
      left: 115px;
      top: 50px;
    }
    .imgAbp2 {
      left: 207px;
      top: 15px;
    }
    .imgAbp3 {
      right: 115px;
      top: 50px;
    }
    .imgAbp5 {
      left: 108px;
      top: 50px;
    }
    .imgAbp6 {
      left: 199px;
      top: 15px;
    }
    .imgAbp7 {
      right: 108px;
      top: 50px;
    }
    .imgAbp4 {
      left: 202px;
      bottom: 2px;
    }
    .iuaoerij {
      margin: 0px;
    }
    .ewwfar {
      width: 60%;
      margin-left: 20%;
    }
    .eaf4511 {
      position: absolute;
      top: 32px;
      left: 100px;
    }
    .eaf4512 {
      position: absolute;
      top: 32px;
      left: 200px;
    }
    .eaf4513 {
      position: absolute;
      top: 32px;
      left: 300px;
    }
    .eaf4514 {
      position: absolute;
      top: 32px;
      left: 400px;
    }
    .eaf4515 {
      position: absolute;
      left: 50px;
    }
    .eaf4516 {
      position: absolute;
      left: 130px;
    }
    .eaf4517 {
      position: absolute;
      left: 325px;
    }
  `,
};

export default Styled;
