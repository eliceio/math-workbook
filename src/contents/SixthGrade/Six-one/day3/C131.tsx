import { useEffect, useState } from 'react';
import { Box } from '@mui/material';

import CorrectChecker from 'src/contents/SixthGrade/common/correct-checker';
import DivisionInput from 'src/contents/SixthGrade/common/number-box';
import { CustomTypo } from 'src/contents/SixthGrade/common/styled-component';
import VisualFraction from 'src/contents/SixthGrade/common/visual-fraction';

// C133 공통사용

interface C131Props {
  problem: {
    qId: number;
    qNum: string;
    lMom?: number;
    lSon: number;
    rMom?: number;
    rSon: number;
    cMom: number;
    cSon: number;
    pass: boolean;
  };
  isSolved: boolean;
  handleCorrectChange: (qId: number, pass: boolean) => void;
}

export default function C131(props: C131Props) {
  const { problem, isSolved, handleCorrectChange } = props;
  const { qId, qNum, lMom, lSon, rMom, rSon, cMom, cSon } = problem;

  const [aMom, setAMom] = useState<string | number>('');
  const [aSon, setASon] = useState<string | number>('');
  const [isCorrect, setIsCorrect] = useState(false);

  useEffect(() => {
    if (aMom === cMom && aSon === cSon) {
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
    >
      {isSolved && <CorrectChecker isCorrect={isCorrect} />}
      <CustomTypo marginRight="0.5rem">{qNum}</CustomTypo>
      {lMom === undefined ? (
        <CustomTypo>{lSon}</CustomTypo>
      ) : (
        <VisualFraction momNum={lMom} sonNum={lSon} />
      )}
      <CustomTypo> ÷ </CustomTypo>
      {rMom === undefined ? (
        <CustomTypo>{rSon}</CustomTypo>
      ) : (
        <VisualFraction momNum={rMom} sonNum={rSon} />
      )}
      <CustomTypo> = </CustomTypo>
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
