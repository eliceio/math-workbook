import { useState } from 'react';
import { Box } from '@mui/material';

import ExampleBox from 'src/contents/SixthGrade/common/example-box';
import Layout from 'src/contents/SixthGrade/common/layout';
import SubmitButton from 'src/contents/SixthGrade/common/submit-button';
import C122 from './C122';

import e122Image from 'src/contents/SixthGrade/assets/image/P122/e_1-2-2.png';
export default function P122() {
  const [isSolved, setIsSolved] = useState(false);
  const [passArray, setPassArray] = useState(
    divisionProblems.map(problem => problem.pass)
  );

  const handleCorrectChange = (qId: number, pass: boolean) => {
    setPassArray(prevPassArray => {
      const newPassArray = [...prevPassArray];
      newPassArray[qId] = pass;
      return newPassArray;
    });
  };

  const checkAnswer = () => {
    //TODO 점수 보내는 api 추가
    setIsSolved(prev => !prev);
  };

  return (
    <Layout
      title="(분수)÷(자연수)"
      question={`□에 알맞은 수를 써넣어 식을 계산하세요.`}
      day="day2"
    >
      <ExampleBox>
        <img width="100%" src={e122Image} alt="fractionE122" />
      </ExampleBox>
      <Box display="flex" flexDirection="column" alignItems="center">
        <Box
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
          }}
        >
          {divisionProblems.map(problem => (
            <Box
              key={problem.qNum}
              sx={{
                display: 'flex',
                width: 'calc(40% - 0.5rem)',
                justifyContent: 'center',
                margin: '0.5rem',
              }}
            >
              <C122
                problem={problem}
                isSolved={isSolved}
                handleCorrectChange={(qId, pass) =>
                  handleCorrectChange(qId, pass)
                }
              />
            </Box>
          ))}
        </Box>
        <SubmitButton
          onClick={checkAnswer}
          $color="#6297FF"
          isSolved={isSolved}
        />
      </Box>
    </Layout>
  );
}

const divisionProblems = [
  {
    qId: 0,
    qNum: '①',
    son: 6,
    mom1: 7,
    num: 4,
    mom2: 14,
    son2: 4,
    answer: [12, 3, 14],
    pass: false,
  },
  {
    qId: 1,
    qNum: '②',
    son: 3,
    mom1: 4,
    num: 2,
    mom2: 8,
    son2: 2,
    answer: [6, 3, 8],
    pass: false,
  },
  {
    qId: 2,
    qNum: '③',
    son: 5,
    mom1: 8,
    num: 4,
    mom2: 32,
    son2: 4,
    answer: [20, 5, 32],
    pass: false,
  },
  {
    qId: 3,
    qNum: '④',
    son: 8,
    mom1: 9,
    num: 3,
    mom2: 27,
    son2: 3,
    answer: [24, 8, 27],
    pass: false,
  },
  {
    qId: 4,
    qNum: '⑤',
    son: 6,
    mom1: 5,
    num: 9,
    mom2: 15,
    son2: 9,
    answer: [18, 2, 15],
    pass: false,
  },
  {
    qId: 5,
    qNum: '⑥',
    son: 10,
    mom1: 14,
    num: 4,
    mom2: 20,
    son2: 4,
    answer: [28, 7, 20],
    pass: false,
  },
  {
    qId: 6,
    qNum: '⑦',
    son: 8,
    mom1: 15,
    num: 6,
    mom2: 16,
    son2: 6,
    answer: [30, 5, 16],
    pass: false,
  },
  {
    qId: 7,
    qNum: '⑧',
    son: 7,
    mom1: 15,
    num: 10,
    mom2: 14,
    son2: 10,
    answer: [30, 3, 14],
    pass: false,
  },
];
