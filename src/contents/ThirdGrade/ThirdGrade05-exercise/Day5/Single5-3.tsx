import Styled from '../../style';

import type { Data53QuizProps as QuizProps } from '../../Type/Type1';

const Single53 = (props: QuizProps) => {
  const { id, quiz1 } = props;
  return (
    <Styled.RowBox2>
      <Styled.SingleWrapper4>
        <Styled.IdNumBox>{id}</Styled.IdNumBox>
        <Styled.TextBoxWrapper>
          <Styled.TextBox>{quiz1}</Styled.TextBox>
          <Styled.TextBoxWrapper>
            <Styled.ColGapBox gap={0.5}>
              <Styled.RowBox3>
                <Styled.TextSize>식:</Styled.TextSize>
                <Styled.LongInput></Styled.LongInput>
                <Styled.TextSize>답:</Styled.TextSize>
                <Styled.ShortInput></Styled.ShortInput>
              </Styled.RowBox3>
              <Styled.RowBox3>
                <Styled.TextSize>검산:</Styled.TextSize>
                <Styled.LongInput></Styled.LongInput>
              </Styled.RowBox3>
            </Styled.ColGapBox>
          </Styled.TextBoxWrapper>
        </Styled.TextBoxWrapper>
      </Styled.SingleWrapper4>
    </Styled.RowBox2>
  );
};

export default Single53;
