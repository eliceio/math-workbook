/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import { getKeyValue } from '@elice/extcontent-apis';
import { Box } from '@mui/material';

import CorrectChecker from 'src/contents/SixthGrade/common/correct-checker';
import { AnswerInput } from 'src/contents/SixthGrade/common/number-box';
import { CustomTypo } from 'src/contents/SixthGrade/common/styled-component';
import VisualFraction from 'src/contents/SixthGrade/common/visual-fraction';

import type { Input211Type } from '../day1/C211';
interface C233Props {
  problem: {
    qId: number;
    qNum: string;
    natureNum: number;
    sonNum: number;
    momNum: number;
    answer: number;
    pass: boolean;
  };
  allAnswers: Input211Type[];
  setAllAnswers: React.Dispatch<React.SetStateAction<Input211Type[]>>;
  isSolved: boolean;
  handleCorrectChange: (qId: number, pass: boolean) => void;
}
export default function C233(props: C233Props) {
  const [isCorrect, setIsCorrect] = useState(false);
  const { problem, isSolved, handleCorrectChange, setAllAnswers } = props;
  const { qId, qNum, natureNum, sonNum, momNum, answer } = problem;
  const [input, setInput] = useState<Input211Type>({
    enter: '',
  });

  const { enter } = input;

  const setEnter = (value: string | number) => {
    setInput({ ...input, enter: value });
  };

  const renderGetData = async () => {
    const value = await getKeyValue({ key: 'quiz233.answer' });
    if (value) {
      setInput({
        enter: value[qId].enter,
      });
    }
  };

  useEffect(() => {
    void renderGetData();
  }, []);

  useEffect(() => {
    setAllAnswers(prevAllAnswers => {
      const updatedAnswers = [...prevAllAnswers];
      updatedAnswers[qId] = input;
      return updatedAnswers;
    });
    if (enter === answer) {
      setIsCorrect(true);
      handleCorrectChange(qId, true);
    } else {
      setIsCorrect(false);
      handleCorrectChange(qId, false);
    }
  }, [answer, enter, qId]);

  return (
    <Box display="flex" gap="0.2rem" margin="2rem" position="relative">
      {isSolved && <CorrectChecker isCorrect={isCorrect} />}
      <CustomTypo> {qNum} </CustomTypo>
      <Box display="flex" alignItems="center" marginX="0.5rem">
        <VisualFraction
          width="2.2rem"
          natureNum={natureNum}
          momNum={momNum}
          sonNum={sonNum}
        />
        <CustomTypo marginX="1rem"> = </CustomTypo>
        <AnswerInput
          value={enter}
          onChange={e => setEnter(Number(e.target.value))}
          disabled={isSolved}
        />
      </Box>
    </Box>
  );
}