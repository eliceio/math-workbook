import { useState } from 'react';
import { sendScore } from '@elice/extcontent-apis';
import { Avatar, Box } from '@mui/material';

import Layout from 'src/contents/SixthGrade/common/layout';
import SubmitButton from 'src/contents/SixthGrade/common/submit-button';
import { calculateTruePercentage } from '../../utils/ture-percentage';
import C413 from './C413';

export default function P413() {
  const [isSolved, setIsSolved] = useState(false);
  const [passArray, setPassArray] = useState(
    problems.map(problem => problem.pass)
  );

  const handleCorrectChange = (qId: number, pass: boolean) => {
    setPassArray(prevPassArray => {
      const newPassArray = [...prevPassArray];
      newPassArray[qId] = pass;
      return newPassArray;
    });
  };

  const checkAnswer = () => {
    setIsSolved(prev => !prev);
    const score = calculateTruePercentage(passArray);
    sendScore({ score }).catch(err => {
      console.error('send score failed', err);
    });
  };

  return (
    <Layout
      day="day1"
      title="비와 비례식"
      question={'문제를 읽고 빈 곳에 알맞은 수를 써넣으세요.'}
    >
      <Box display="grid" gridTemplateColumns="1fr 1fr">
        {problems.map(problem => (
          <Box
            key={problem.qNum}
            sx={{
              overflowY: 'auto',
              display: 'flex',
              justifyContent: 'center',
              padding: '2rem 6rem',
            }}
          >
            <C413
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
        $color="#FF6291"
        isSolved={isSolved}
      />
    </Layout>
  );
}

export interface ProblemProp {
  qId: number;
  qNum: string;
  pass: boolean;
  numList: (number | undefined)[];
  answer: number[];
}

const problems: ProblemProp[] = [
  {
    qId: 0,
    qNum: '①',
    pass: false,
    numList: [8, 7, 24, undefined],
    answer: [3, 21],
  },
  {
    qId: 1,
    qNum: '②',
    pass: false,
    numList: [16, 12, undefined, 3],
    answer: [4, 4],
  },
  {
    qId: 2,
    qNum: '③',
    pass: false,
    numList: [4, 8, undefined, 40],
    answer: [5, 20],
  },
  {
    qId: 3,
    qNum: '④',
    pass: false,
    numList: [36, 48, 9, undefined],
    answer: [4, 12],
  },
  {
    qId: 4,
    qNum: '⑤',
    pass: false,
    numList: [5, 7, undefined, 28],
    answer: [4, 20],
  },
  {
    qId: 5,
    qNum: '⑥',
    pass: false,
    numList: [undefined, 69, 25, 23],
    answer: [3, 75],
  },
  {
    qId: 6,
    qNum: '⑦',
    pass: false,
    numList: [9, undefined, 81, 45],
    answer: [9, 5],
  },
  {
    qId: 7,
    qNum: '⑧',
    pass: false,
    numList: [24, 30, 12, undefined],
    answer: [2, 15],
  },
];
