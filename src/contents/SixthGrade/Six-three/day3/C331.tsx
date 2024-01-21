import { useEffect, useState } from 'react';
import { Avatar, Box, Typography } from '@mui/material';

import CorrectChecker from 'src/contents/SixthGrade/common/correct-checker';
import { TextUnderBar } from 'src/contents/SixthGrade/common/text-underbar';

import type { ProblemProp } from './P331';

import ArrowRight from '../../assets//icon/arrowRight.svg';

interface C331Props {
  problem: ProblemProp;
  isSolved: boolean;
  handleCorrectChange: (qId: number, pass: boolean) => void;
}

export default function C331(props: C331Props) {
  const { problem, isSolved, handleCorrectChange } = props;
  const { qId, qNum, leftItem, rightItem, answer } = problem;

  const [isCorrect, setIsCorrect] = useState(false);

  const [input, setInput] = useState<string | undefined>(undefined);
  useEffect(() => {
    if (answer === input) {
      setIsCorrect(true);
      handleCorrectChange(qId, true);
    } else {
      setIsCorrect(false);
      handleCorrectChange(qId, false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isSolved, qId, answer, input]);

  return (
    <Box>
      <Box display="flex" alignItems="start">
        <Box display="flex" alignItems="center" position="relative">
          {isSolved && <CorrectChecker isCorrect={isCorrect} />}
          <Typography variant="h5" fontWeight={600} marginRight="1rem">
            {qNum}
          </Typography>
        </Box>
        <Box display="flex" flexDirection="column" gap="2rem">
          <Box display="flex">
            <Typography variant="h5" fontWeight={600}>
              {leftItem} : {rightItem}
            </Typography>
          </Box>
          <Box display="flex" alignItems="center" marginLeft="-2.5rem">
            <Avatar
              src={ArrowRight}
              variant="square"
              style={{
                width: '1.5rem',
                height: 'max-content',
                margin: '0rem 0.5rem',
              }}
            />
            <Typography variant="h5" fontWeight={600}>
              {qId % 2 === 0
                ? '비교하는 양은 기준량의'
                : '기준량은 비교하는 양의'}
            </Typography>
            <TextUnderBar
              width="4rem"
              value={input ? input : ''}
              onChange={e => setInput(e.target.value)}
              disabled={isSolved}
            />
            <Typography variant="h5" fontWeight={600}>
              배
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
