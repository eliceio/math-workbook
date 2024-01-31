import { useState } from 'react';
import { postKeyValue } from '@elice/extcontent-apis';
import { Box, Typography } from '@mui/material';

import Layout from 'src/contents/SixthGrade/common/layout';
import SubmitButton from 'src/contents/SixthGrade/common/submit-button';
import { sendScoreUtil } from '../../utils/score-utils';
import { calculateTruePercentage } from '../../utils/true-percentage';
import C133 from './C133';

import type { Input131Type } from './C131';

export default function P133() {
  const [isSolved, setIsSolved] = useState(false);
  const [passArray, setPassArray] = useState(
    divisionProblems.map(problem => problem.pass)
  );
  const [allAnswer, setAllAnswer] = useState<Input131Type[]>([]);

  const handleCorrectChange = (qId: number, pass: boolean) => {
    setPassArray(prevPassArray => {
      const newPassArray = [...prevPassArray];
      newPassArray[qId] = pass;
      return newPassArray;
    });
  };

  const checkAnswer = async () => {
    const currentScore = calculateTruePercentage(passArray);
    if (!isSolved) await sendScoreUtil(currentScore);
    await postKeyValue({ key: 'quiz133.answer', value: allAnswer });
    setIsSolved(prev => !prev);
  };

  return (
    <Layout title="÷(자연수)의 계산" question={`계산을 하세요.`} day="day3">
      <Box display="flex" flexDirection="column" alignItems="center">
        <Typography> * 약분 가능한 수는 약분하여 적습니다.</Typography>
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
                width: '27%',
                padding: '0 6%',
                margin: '0.5rem',
              }}
            >
              <C133
                allAnswers={allAnswer}
                setAllAnswers={setAllAnswer}
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
          myColor="#FF7613"
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
    lSon: 4,
    rSon: 5,
    cMom: 5,
    cSon: 4,
    pass: false,
  },
  {
    qId: 1,
    qNum: '②',
    lMom: 2,
    lSon: 1,
    rSon: 3,
    cMom: 6,
    cSon: 1,
    pass: false,
  },
  {
    qId: 2,
    qNum: '③',
    lMom: 3,
    lSon: 20,
    rSon: 5,
    cMom: 3,
    cSon: 4,
    pass: false,
  },
  {
    qId: 3,
    qNum: '④',
    lMom: 5,
    lSon: 4,
    rSon: 8,
    cMom: 10,
    cSon: 1,
    pass: false,
  },
  {
    qId: 4,
    qNum: '⑤',
    lMom: 4,
    lSon: 15,
    rSon: 9,
    cMom: 12,
    cSon: 5,
    pass: false,
  },
  {
    qId: 5,
    qNum: '⑥',
    lSon: 9,
    lMom: 5,
    rSon: 6,
    cMom: 10,
    cSon: 3,
    pass: false,
  },
  {
    qId: 6,
    qNum: '⑦',
    lSon: 5,
    rSon: 10,
    cMom: 2,
    cSon: 1,
    pass: false,
  },
  {
    qId: 7,
    qNum: '⑧',
    lSon: 6,
    rSon: 14,
    cMom: 7,
    cSon: 3,
    pass: false,
  },
  {
    qId: 8,
    qNum: '⑨',
    lMom: 8,
    lSon: 5,
    rSon: 15,
    cMom: 24,
    cSon: 1,
    pass: false,
  },
  {
    qId: 9,
    qNum: '⑩',
    lSon: 18,
    lMom: 7,
    rSon: 12,
    cMom: 14,
    cSon: 3,
    pass: false,
  },
  {
    qId: 10,
    qNum: '⑪',
    lMom: 9,
    lSon: 8,
    rSon: 18,
    cMom: 81,
    cSon: 4,
    pass: false,
  },
  {
    qId: 11,
    qNum: '⑫',
    lSon: 14,
    rSon: 21,
    cMom: 3,
    cSon: 2,
    pass: false,
  },
  {
    qId: 12,
    qNum: '⑬',
    lMom: 10,
    lSon: 21,
    rSon: 14,
    cMom: 20,
    cSon: 3,
    pass: false,
  },
  {
    qId: 13,
    qNum: '⑭',
    lMom: 16,
    lSon: 25,
    rSon: 10,
    cMom: 32,
    cSon: 5,
    pass: false,
  },
  {
    qId: 14,
    qNum: '⑮',
    lSon: 9,
    lMom: 2,
    rSon: 5,
    cMom: 10,
    cSon: 9,
    pass: false,
  },
  {
    qId: 15,
    qNum: '⑯',
    lMom: 3,
    lSon: 10,
    rSon: 20,
    cMom: 6,
    cSon: 1,
    pass: false,
  },
  {
    qId: 16,
    qNum: '⑰',
    lMom: 8,
    lSon: 21,
    rSon: 7,
    cMom: 8,
    cSon: 3,
    pass: false,
  },
  {
    qId: 17,
    qNum: '⑱',
    lMom: 8,
    lSon: 15,
    rSon: 9,
    cMom: 24,
    cSon: 5,
    pass: false,
  },
];
