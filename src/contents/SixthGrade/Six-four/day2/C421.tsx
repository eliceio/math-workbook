import { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import { Avatar, Box, Typography } from '@mui/material';

import CorrectChecker from 'src/contents/SixthGrade/common/correct-checker';
import { NumberInput } from 'src/contents/SixthGrade/common/number-box';
import { NumberUnderBar } from 'src/contents/SixthGrade/common/number-underbar';

import type { ProblemProp } from './P421';

import ArrowRight from '../../assets/icon/arrowRight.svg';

interface C421Props {
  problem: ProblemProp;
  isSolved: boolean;
  handleCorrectChange: (qId: number, pass: boolean) => void;
}

export default function C421(props: C421Props) {
  const { problem, isSolved, handleCorrectChange } = props;
  const { qId, pass, qNum, numList, answer } = problem;

  const [isCorrect, setIsCorrect] = useState(false);

  const [input1, setInput1] = useState<undefined | number>(undefined);
  const [input2, setInput2] = useState<undefined | number>(undefined);
  const [input3, setInput3] = useState<undefined | number>(undefined);
  const [input4, setInput4] = useState<undefined | number>(undefined);
  const [input5, setInput5] = useState<undefined | number>(undefined);

  useEffect(() => {
    if (
      answer[0] === input1 &&
      answer[0] === input2 &&
      answer[0] === input3 &&
      answer[1] === input4 &&
      answer[2] === input5
    ) {
      setIsCorrect(true);
      handleCorrectChange(qId, true);
    } else {
      setIsCorrect(false);
      handleCorrectChange(qId, false);
    }
  }, [isSolved, qId]);

  return (
    <Box display="flex" mb="5rem">
      <Box display="flex" alignItems="start" gap="1rem">
        <Box display="flex" alignItems="center" position="relative">
          {isSolved && <CorrectChecker isCorrect={isCorrect} />}
          <Typography variant="h5" fontWeight={600}>
            {qNum}
          </Typography>
        </Box>
        <Box display="flex" gap="0.3rem" alignItems="center">
          <Typography variant="h5" fontWeight={600}>
            {numList[0]}와 {numList[1]}의 최대공약수:
          </Typography>
          <NumberUnderBar
            value={Number(input1)}
            onChange={e => {
              setInput1(Number(e.target.value));
            }}
          />
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
            {numList[0]} : {numList[1]} = {numList[0]} ÷
          </Typography>
          <NumberInput
            value={Number(input2)}
            onChange={e => {
              setInput2(Number(e.target.value));
            }}
          />
          <Typography variant="h5" fontWeight={600}>
            : {numList[1]} ÷
          </Typography>
          <NumberInput
            value={Number(input3)}
            onChange={e => {
              setInput3(Number(e.target.value));
            }}
          />
          <Typography variant="h5" fontWeight={600}>
            =
          </Typography>
          <NumberInput
            value={Number(input4)}
            onChange={e => {
              setInput4(Number(e.target.value));
            }}
          />
          <Typography variant="h5" fontWeight={600}>
            :
          </Typography>
          <NumberInput
            value={Number(input5)}
            onChange={e => {
              setInput5(Number(e.target.value));
            }}
          />
        </Box>
      </Box>
    </Box>
  );
}
