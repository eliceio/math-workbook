import {
  Data43Quiz1 as QuizData1,
  Data43Quiz2 as QuizData2,
} from '../../Data/Book4';
// import { useEffect, useState } from 'react';
import DayLayout from '../../Layout/Day4';
import Styled from '../../style';
import ConfirmBtn from '../../utils/ConfirmBtn';
import { ThirdGrade4Day4 } from '../../utils/handleTitle';
import ExampleQuiz from './Example4-3';
import SingleQuiz from './Single4-3';

import type { Data12QuizProps } from '../../Type/Type1';
import type { Data43QuizProps } from '../../Type/Type4';

const ThirdGrade43Exercise = () => {
  return (
    <DayLayout
      title={ThirdGrade4Day4.title}
      subTitle="몫이 같은 번호를 입력하십시오."
    >
      <Styled.PaddingBox>
        <Styled.ColGapBox gap={4}>
          <Styled.BorderBox1>
            <Styled.RowWrapBox4>
              {QuizData1.map((item: Data12QuizProps, idx) => (
                <ExampleQuiz
                  key={idx}
                  id={item.id}
                  quiz1={item.quiz1}
                  quiz2={item.quiz2}
                />
              ))}
            </Styled.RowWrapBox4>
          </Styled.BorderBox1>
          <Styled.RowWrapBox2>
            {QuizData2.map((item: Data43QuizProps, idx) => (
              <SingleQuiz key={idx} quiz1={item.quiz1} />
            ))}
          </Styled.RowWrapBox2>
        </Styled.ColGapBox>
      </Styled.PaddingBox>
      <ConfirmBtn type={true} day={4} />
    </DayLayout>
  );
};

export default ThirdGrade43Exercise;
