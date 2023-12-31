import { useState } from 'react';
import { sendScore } from '@elice/extcontent-apis';
import { Avatar, Box } from '@mui/material';

import Layout from 'src/contents/SixthGrade/common/layout';
import SubmitButton from 'src/contents/SixthGrade/common/submit-button';
import { calculateTruePercentage } from '../../utils/ture-percentage';
import C351 from './C351';

import Img1 from '../../assets/image/P351/Img1.png';
import Img2 from '../../assets/image/P351/Img2.png';
import Img3 from '../../assets/image/P351/Img3.png';
import Img4 from '../../assets/image/P351/Img4.png';
import ImgExample from '../../assets/image/P351/ImgExample.png';

export default function P351() {
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
      title="여러 가지 비로 나타내기"
      question={'개수의 비와 묶음의 수의 비를 각각 구하세요.'}
    >
      <Avatar
        src={ImgExample}
        variant="square"
        style={{
          width: '50rem',
          height: 'max-content',
          marginBottom: '2rem',
        }}
      />
      <Box display="flex" flexWrap="wrap" justifyContent="space-around">
        {problems.map(problem => (
          <Box
            key={problem.qNum}
            sx={{
              overflowY: 'auto',
              display: 'flex',
              justifyContent: 'center',
              margin: '0.5rem',
              padding: '2rem 2rem',
            }}
          >
            <C351
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
  imgSrc: string;
  answer: AnswerProp;
}

interface AnswerProp {
  firstMom: number;
  firstSon: number;
  secondMom: number;
  secondSon: number;
}

const problems: ProblemProp[] = [
  {
    qId: 0,
    qNum: '①',
    pass: false,
    imgSrc: Img1,
    answer: {
      firstMom: 12,
      firstSon: 8,
      secondMom: 3,
      secondSon: 2,
    },
  },
  {
    qId: 1,
    qNum: '②',
    pass: false,
    imgSrc: Img2,
    answer: {
      firstMom: 5,
      firstSon: 15,
      secondMom: 1,
      secondSon: 3,
    },
  },
  {
    qId: 2,
    qNum: '③',
    pass: false,
    imgSrc: Img3,
    answer: {
      firstMom: 14,
      firstSon: 10,
      secondMom: 7,
      secondSon: 5,
    },
  },
  {
    qId: 3,
    qNum: '④',
    pass: false,
    imgSrc: Img4,
    answer: {
      firstMom: 16,
      firstSon: 12,
      secondMom: 4,
      secondSon: 3,
    },
  },
];
