import {
  Data13Quiz1 as QuizData1,
  Data13Quiz2 as QuizData2,
} from '../../Data/Book4';
// import { useEffect, useState } from 'react';
import DayLayout from '../../Layout/Day1';
import Styled from '../../style';
import ConfirmBtn from '../../utils/ConfirmBtn';
import { FourthGrade4Day1 as Day } from '../../utils/handleTitle';
import Example1 from './Example1-3-1';
import Example2 from './Example1-3-2';
import SingleQuiz from './Single1-3';

import type {
  Data13QuizProps1 as QuizProps1,
  Data13QuizProps2 as QuizProps2,
} from '../../Type/Type4';

import img from '../../Image/4-1-3_1.png';

const FourthGrade13Exercise = () => {
  return (
    <DayLayout title={Day.title} subTitle={Day.subTitle3}>
      <Styled.PaddingBox>
        <Styled.ColGapBox gap={4}>
          <Styled.ImgBox2>
            <Styled.ColGapBox gap={2}>
              <Styled.TextSize>• 분수와 소수의 관계 </Styled.TextSize>
              <Styled.ImgSize4 src={img} alt="" />
            </Styled.ColGapBox>
          </Styled.ImgBox2>
          <Styled.MarginBottomBox2>
            <Styled.RowWrapBox5>
              <Example1 />
              {QuizData1.map((item: QuizProps1, idx: number) => (
                <SingleQuiz
                  key={idx}
                  id={item.id}
                  type={1}
                  quiz1={item.quiz1}
                  quiz2={item.quiz2}
                />
              ))}
            </Styled.RowWrapBox5>
          </Styled.MarginBottomBox2>
          <Styled.RowWrapBox5>
            <Example2 />
            {QuizData2.map((item: QuizProps2, idx: number) => (
              <SingleQuiz key={idx} id={item.id} type={2} quiz1={item.quiz1} />
            ))}
          </Styled.RowWrapBox5>
        </Styled.ColGapBox>
      </Styled.PaddingBox>
      <ConfirmBtn type={true} day={1} />
    </DayLayout>
  );
};

export default FourthGrade13Exercise;
