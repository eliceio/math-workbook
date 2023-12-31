import Styled from '../../style';

import type { Data51QuizProps as QuizProps } from '../../Type/Type1';

import img from '../../Image/1-5-1_1.png';

const Single51 = (props: QuizProps) => {
  const { id, quiz1, unit } = props;
  return (
    <Styled.RowBox5>
      <div>{id}</div>
      <Styled.SingleWrapper4>
        <Styled.TextBoxWrapper>
          <Styled.TextBox>{quiz1}</Styled.TextBox>
          <Styled.TextBoxWrapper>
            <Styled.FlexEndBox2>
              <Styled.ColGapBox gap={0.2}>
                <Styled.RowBox>
                  <Styled.InputBox1 />배
                </Styled.RowBox>
                <Styled.ImgSize17 src={img} alt="" />
                <Styled.RowBox12>
                  <Styled.RowBox>
                    <Styled.InputBox1 />
                    {unit}
                  </Styled.RowBox>
                  <Styled.RowBox>
                    <Styled.InputBox1 />
                    {unit}
                  </Styled.RowBox>
                </Styled.RowBox12>
              </Styled.ColGapBox>
              <Styled.RowBox4>
                <Styled.TextSize>답: </Styled.TextSize>
                <Styled.InputBox1 />
                <Styled.TextSize>{unit}</Styled.TextSize>
              </Styled.RowBox4>
            </Styled.FlexEndBox2>
          </Styled.TextBoxWrapper>
        </Styled.TextBoxWrapper>
      </Styled.SingleWrapper4>
    </Styled.RowBox5>
  );
};

export default Single51;
