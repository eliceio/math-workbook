import { Data51Quiz as QuizData } from '../../Data/Book4';
// import { useEffect, useState } from 'react';
import DayLayout from '../../Layout/Day5';
import Styled from '../../style';
import SingleQuiz from '../../ThirdGrade01-exercise/Day5/Single5-3';
import ConfirmBtn from '../../utils/ConfirmBtn';
import { ThirdGrade4Day5 } from '../../utils/handleTitle';
import ExampleQuiz from './Example5-1';

import type { Data51QuizProps as QuizProps } from '../../Type/Type1';

import img from '../../Image/4-5-1.png';

const ThirdGrade51Exercise = () => {
  return (
    <DayLayout
      title={ThirdGrade4Day5.title}
      subTitle={ThirdGrade4Day5.subTitle}
    >
      <Styled.PaddingBox>
        <Styled.ColGapBox gap={2.4}>
          <Styled.ImgBox2>
            <Styled.ColGapBox2 gap={1}>
              <Styled.TextSize>
                교실에 다음과 같이 의자가 놓여 있습니다.
              </Styled.TextSize>
              <Styled.ImgSize1 src={img} />
            </Styled.ColGapBox2>
          </Styled.ImgBox2>
          <ExampleQuiz />
          {QuizData.map((item: QuizProps, idx) => (
            <SingleQuiz
              key={idx}
              id={item.id}
              quiz1={item.quiz1}
              unit={item.unit}
            />
          ))}
        </Styled.ColGapBox>
      </Styled.PaddingBox>
      <ConfirmBtn type={true} day={5} />
    </DayLayout>
  );
};

export default ThirdGrade51Exercise;
