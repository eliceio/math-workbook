import { useEffect, useState } from 'react';
import { Box } from '@mui/material';

import CorrectChecker from 'src/contents/SixthGrade/common/correct-checker';
import DivisionInput, {
  NumberInput,
} from 'src/contents/SixthGrade/common/number-box';
import { CustomTypo } from 'src/contents/SixthGrade/common/styled-component';
import VisualFraction from 'src/contents/SixthGrade/common/visual-fraction';

interface C122Props {
  problem: {
    qId: number;
    qNum: string;
    son: number;
    mom1: number;
    num: number;
    mom2: number;
    son2: number;
    answer: number[];
    pass: boolean;
  };
  isSolved: boolean;
  handleCorrectChange: (qId: number, pass: boolean) => void;
}

export default function C122(props: C122Props) {
  const { problem, isSolved, handleCorrectChange } = props;
  const { qId, pass, qNum, son, mom1, num, mom2, son2, answer } = problem;

  const [daughter1, setDaughter1] = useState<string | number>('');
  const [daughter2, setDaughter2] = useState<string | number>('');
  const [mother, setMother] = useState<string | number>('');
  const [isCorrect, setIsCorrect] = useState(false);

  useEffect(() => {
    // TODO 정답 체크
    if (
      answer[0] === daughter1 &&
      answer[1] === daughter2 &&
      answer[2] === mother
    ) {
      setIsCorrect(true);
      handleCorrectChange(qId, true);
    } else {
      setIsCorrect(false);
      handleCorrectChange(qId, false);
    }
  }, [isSolved, qId]);

  return (
    <Box
      display="flex"
      minWidth="18rem"
      gap="0.2rem"
      alignItems="center"
      margin="1rem"
      position="relative"
    >
      {isSolved && <CorrectChecker isCorrect={isCorrect} />}
      <CustomTypo marginRight="0.5rem">{qNum}</CustomTypo>
      <VisualFraction momNum={mom1} sonNum={son} />
      <CustomTypo> ÷ {num} = </CustomTypo>
      <VisualFraction
        width="6rem"
        momNum={mom2}
        sonNum={
          <Box display="flex" alignItems="center">
            <NumberInput
              value={daughter1}
              onChange={e => setDaughter1(Number(e.target.value))}
              disabled={isSolved}
            />
            <CustomTypo marginLeft="0.2rem">÷ {son2}</CustomTypo>
          </Box>
        }
      />
      <CustomTypo> = </CustomTypo>
      <DivisionInput
        son={daughter2}
        mother={mother}
        onChangeMother={e => setMother(Number(e.target.value))}
        onChangeSon={e => setDaughter2(Number(e.target.value))}
        disabled={isSolved}
      />
    </Box>
  );
}
