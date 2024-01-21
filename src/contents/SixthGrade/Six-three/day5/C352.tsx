import { useEffect, useState } from 'react';
import { Avatar, Box, Typography } from '@mui/material';

import CorrectChecker from 'src/contents/SixthGrade/common/correct-checker';
import { TextUnderBar } from 'src/contents/SixthGrade/common/text-underbar';

import type { ProblemProp } from './P352';

interface C352Props {
  problem: ProblemProp;
  isSolved: boolean;
  handleCorrectChange: (qId: number, pass: boolean) => void;
}

export default function C352(props: C352Props) {
  const { problem, isSolved, handleCorrectChange } = props;
  const { qId, qNum, imgSrc1, imgSrc2, answer } = problem;

  const [isCorrect, setIsCorrect] = useState(false);

  const [input1, setInput1] = useState('');
  const [input2, setInput2] = useState('');

  useEffect(() => {
    if (answer.first === input1 && answer.second === input2) {
      setIsCorrect(true);
      handleCorrectChange(qId, true);
    } else {
      setIsCorrect(false);
      handleCorrectChange(qId, false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isSolved, qId, answer, input1, input2]);

  return (
    <Box>
      <Box display="flex" alignItems="start">
        <Box display="flex" alignItems="center" position="relative">
          {isSolved && <CorrectChecker isCorrect={isCorrect} />}
          <Typography variant="h5" fontWeight={600} marginRight="1rem">
            {qNum}
          </Typography>
        </Box>
        <Box display="flex" mb="4rem">
          <Box display="flex" flexDirection="column" gap="2rem">
            <Box
              display="flex"
              gap="0.3rem"
              flexDirection="column"
              alignItems="center"
            >
              <Avatar
                src={imgSrc1}
                variant="square"
                style={{
                  width: '15rem',
                  height: 'max-content',
                }}
              />
              <TextUnderBar
                value={input1}
                onChange={e => {
                  setInput1(e.target.value);
                }}
                disabled={isSolved}
              />
            </Box>
            <Box
              display="flex"
              flexDirection="column"
              gap="0.3rem"
              alignItems="center"
            >
              <Avatar
                src={imgSrc2}
                variant="square"
                style={{
                  width: '15rem',
                  height: 'max-content',
                }}
              />
              <TextUnderBar
                value={input2}
                onChange={e => {
                  setInput2(e.target.value);
                }}
                disabled={isSolved}
              />
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}