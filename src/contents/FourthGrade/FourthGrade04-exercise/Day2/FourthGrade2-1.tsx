import { Data21Quiz as QuizData } from '../../Data/Book4';
// import { useEffect, useState } from 'react';
import DayLayout from '../../Layout/Day2';
import Styled from '../../style';
import ConfirmBtn from '../../utils/ConfirmBtn';
import { FourthGrade4Day2 as Day } from '../../utils/handleTitle';
import SingleQuiz from './Single2-3';

import type { Data31QuizProps as QuizProps } from '../../Type/Type4';

import img from '../../Image/4-2-1.png';

const FourthGrade21Exercise = () => {
  return (
    <DayLayout title={Day.title} subTitle={Day.subTitle}>
      <Styled.PaddingBox>
        <Styled.ColGapBox gap={4}>
          <Styled.ImgBox3>
            <Styled.ColGapBox gap={2}>
              <Styled.TextSize>• 소수 사이의 관계 (1)</Styled.TextSize>
              <Styled.ImgSize4 src={img} alt="" />
            </Styled.ColGapBox>
          </Styled.ImgBox3>
          <Styled.RowWrapBox8>
            {QuizData.map((item: QuizProps, idx: number) => (
              <SingleQuiz
                key={idx}
                id={item.id}
                type={1}
                quiz1={item.quiz1}
                quiz2={item.quiz2}
              />
            ))}
          </Styled.RowWrapBox8>
        </Styled.ColGapBox>
      </Styled.PaddingBox>
      <ConfirmBtn type={true} day={2} />
    </DayLayout>
  );
};

export default FourthGrade21Exercise;
