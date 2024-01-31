import { useState } from 'react';

import { Answer31 as answer, Data31Quiz as QuizData } from '../../Data/Book5';
import DayLayout from '../../Layout/Day3';
import Styled from '../../style';
import ConfirmBtn from '../../utils/ConfirmBtn';
import { GetData } from '../../utils/getData';
import { handleOrAnswer as handleAnswer } from '../../utils/handleOrAnswer3';
import { SubGeometry, ThirdGrade5Day3 } from '../../utils/handleTitle';
import ExampleQuiz from './Example3-1';
import SingleQuiz from './Single3-1';

import type { Data53QuizProps as QuizProps } from '../../Type/Type1';

import img from '../../Image/5-3-1.png';

const ThirdGrade31Exercise = () => {
  const [isGeted, setIsGeted] = useState(false);
  const [toggle, setToggle] = useState<boolean>(false);
  // const [score, setScore] = useState<number>(0);
  const [correct, setCorrect] = useState<boolean[]>([]);
  const [confirmType, setConfirmType] = useState<boolean>(true);
  const [inputValue, setInputValue] = useState<string[][]>(
    Array.from(Array(4), () => new Array(3))
  );
  const key = 'third531.answer';
  GetData({ setInputValue, key, setIsGeted, isGeted }).catch(error => {
    console.error('Error:', error);
  });

  return (
    <DayLayout title={ThirdGrade5Day3.title} subTitle={SubGeometry}>
      <Styled.PaddingBox>
        <Styled.ColGapBox gap={2.4}>
          <Styled.ImgSize4 src={img} alt="" />
          <ExampleQuiz />
          {QuizData.map((item: QuizProps, idx) => (
            <SingleQuiz
              key={idx}
              id={item.id}
              quiz1={item.quiz1}
              idx={idx}
              toggle={toggle}
              setToggle={setToggle}
              inputValue={inputValue}
              setInputValue={setInputValue}
              correct={confirmType ? null : correct[idx]}
            />
          ))}
        </Styled.ColGapBox>
      </Styled.PaddingBox>
      <div
        onClick={() => {
          handleAnswer({
            type: 1,
            key,
            inputValue,
            answer,
            setCorrect,
          });
          setToggle(!toggle);
          setConfirmType(prev => !prev);
        }}
      >
        <ConfirmBtn type={confirmType} day={3} />
      </div>
    </DayLayout>
  );
};

export default ThirdGrade31Exercise;
