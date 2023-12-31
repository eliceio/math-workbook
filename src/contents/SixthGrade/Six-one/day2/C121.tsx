import { useEffect, useState } from 'react';
import { Box } from '@mui/material';

import CorrectChecker from 'src/contents/SixthGrade/common/correct-checker';
import DivisionInput, {
  NumberInput,
} from 'src/contents/SixthGrade/common/number-box';
import { CustomTypo } from 'src/contents/SixthGrade/common/styled-component';
import VisualFraction from 'src/contents/SixthGrade/common/visual-fraction';

interface C121Props {
  problem: {
    qId: number;
    qNum: string;
    mom: number;
    son: number;
    num: number;
    rMom: number;
    answer: number[];
    pass: boolean;
  };
  isSolved: boolean;
  handleCorrectChange: (qId: number, pass: boolean) => void;
}

export default function C121(props: C121Props) {
  const { problem, isSolved, handleCorrectChange } = props;
  const { qId, qNum, mom, son, num, answer, rMom } = problem;

  const [lSon, setLSon] = useState<string | number>('');
  const [rSon, setRSon] = useState<string | number>('');
  const [aMom, setAMom] = useState<string | number>('');
  const [aSon, setASon] = useState<string | number>('');
  const [isCorrect, setIsCorrect] = useState(false);

  useEffect(() => {
    // TODO 정답 체크
    if (
      answer[0] === lSon &&
      answer[1] === rSon &&
      answer[2] === aSon &&
      answer[3] === aMom
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
      gap="0.2rem"
      alignItems="center"
      margin="1rem"
      position="relative"
      minWidth="22rem"
    >
      {isSolved && <CorrectChecker isCorrect={isCorrect} />}
      <CustomTypo marginRight="0.5rem">{qNum}</CustomTypo>
      <VisualFraction momNum={mom} sonNum={son} />
      <CustomTypo> ÷ {num} = </CustomTypo>
      <VisualFraction
        width="6.1rem"
        momNum={rMom}
        sonNum={
          <Box display="flex" alignItems="center">
            <NumberInput
              value={lSon}
              onChange={e => setLSon(Number(e.target.value))}
              disabled={isSolved}
            />
            <CustomTypo marginLeft="0.2rem">
              ÷
              <NumberInput
                value={rSon}
                onChange={e => setRSon(Number(e.target.value))}
                disabled={isSolved}
              />
            </CustomTypo>
          </Box>
        }
      />
      <CustomTypo fontSize="20px"> = </CustomTypo>
      <DivisionInput
        son={aSon}
        mother={aMom}
        onChangeMother={e => setAMom(Number(e.target.value))}
        onChangeSon={e => setASon(Number(e.target.value))}
        disabled={isSolved}
      />
    </Box>
  );
}
