import { useState } from 'react';
import { sendScore } from '@elice/extcontent-apis';
import { Avatar, Box } from '@mui/material';

import Layout from 'src/contents/SixthGrade/common/layout';
import SubmitButton from 'src/contents/SixthGrade/common/submit-button';
import { calculateTruePercentage } from '../../utils/ture-percentage';
import C452 from './C452';

import Img from '../../assets/image/P452/4-5-2.png';

export default function P452() {
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
      day="day5"
      title="□ 구하기"
      question={'각 번호에 들어갈 알맞은 수를 써넣으세요.'}
    >
      <Box width="100%" display="flex" justifyContent="center">
        <Avatar
          src={Img}
          variant="square"
          style={{
            width: '35rem',
            height: 'max-content',
            marginBottom: '2rem',
          }}
        />
      </Box>
      <Box display="flex" flexWrap="wrap" gap="3rem" justifyContent="center">
        {problems.map(problem => (
          <Box
            key={problem.qNum}
            sx={{
              overflowY: 'auto',
              display: 'flex',
              justifyContent: 'center',
              paddingLeft: '2rem',
              height: '7rem',
            }}
          >
            <C452
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
        $color="#00B76A"
        isSolved={isSolved}
      />
    </Layout>
  );
}

export interface ProblemProp {
  qId: number;
  qNum: string;
  pass: boolean;
  answer: number;
}

const problems: ProblemProp[] = [
  {
    qId: 0,
    qNum: '①',
    pass: false,
    answer: 7,
  },
  {
    qId: 1,
    qNum: '②',
    pass: false,
    answer: 15,
  },
  {
    qId: 2,
    qNum: '③',
    pass: false,
    answer: 45,
  },
  {
    qId: 3,
    qNum: '④',
    pass: false,
    answer: 9,
  },
  {
    qId: 4,
    qNum: '⑤',
    pass: false,
    answer: 12,
  },
  {
    qId: 5,
    qNum: '⑥',
    pass: false,
    answer: 4,
  },
  {
    qId: 6,
    qNum: '⑦',
    pass: false,
    answer: 33,
  },
  {
    qId: 7,
    qNum: '⑧',
    pass: false,
    answer: 55,
  },
];
