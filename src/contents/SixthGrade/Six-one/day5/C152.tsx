import { useEffect, useState } from 'react';
import { Box } from '@mui/material';

import CorrectChecker from 'src/contents/SixthGrade/common/correct-checker';
import DivisionInput, {
  BigDivisionInput,
  NumberInput,
} from 'src/contents/SixthGrade/common/number-box';
import { CustomTypo } from 'src/contents/SixthGrade/common/styled-component';

interface C152Props {
  problem: {
    qId: number;
    qNum: string;
    qString: string;
    equationNature?: number | string;
    equationMom?: number;
    equationSon: number;
    equationDiv: number;
    answerMom: number;
    answerSon: number;
    unit: string;
    pass: boolean;
  };
  isSolved: boolean;
  handleCorrectChange: (qId: number, pass: boolean) => void;
}

export default function C152(props: C152Props) {
  const { problem, isSolved, handleCorrectChange } = props;
  const {
    qId,
    pass,
    qNum,
    qString,
    equationNature,
    equationMom,
    equationSon,
    equationDiv,
    answerMom,
    answerSon,
    unit,
  } = problem;
  const [isCorrect, setIsCorrect] = useState(false);
  const [equationSonValue, setEquationSonValue] = useState<string | number>('');
  const [equationMomValue, setEquationMomValue] = useState<string | number>('');
  const [equationNatureValue, setEquationNatureValue] = useState<
    string | number
  >('');
  const [equationDivValue, setEquationDivValue] = useState<string | number>('');
  const [answerMomValue, setAnswerMomValue] = useState<string | number>('');
  const [answerSonValue, setAnswerSonValue] = useState<string | number>('');

  useEffect(() => {
    // TODO 정답 체크
    if (answerMom === answerMomValue && answerSon === answerSonValue) {
      setIsCorrect(true);
      handleCorrectChange(qId, true);
    } else {
      setIsCorrect(false);
      handleCorrectChange(qId, false);
    }
  }, [isSolved, qId]);

  const renderInputComponent = () => {
    if (equationNature) {
      return (
        <BigDivisionInput
          num={equationNatureValue}
          mother={equationMomValue}
          son={equationSonValue}
          onChangeNum={e => setEquationNatureValue(Number(e.target.value))}
          onChangeMother={e => setEquationMomValue(Number(e.target.value))}
          onChangeSon={e => setEquationSonValue(Number(e.target.value))}
        />
      );
    } else if (equationMom) {
      return (
        <DivisionInput
          mother={equationMomValue}
          son={equationSonValue}
          onChangeMother={e => setEquationMomValue(Number(e.target.value))}
          onChangeSon={e => setEquationSonValue(Number(e.target.value))}
        />
      );
    }
    return (
      <NumberInput
        value={equationSonValue}
        onChange={e => setEquationSonValue(Number(e.target.value))}
      />
    );
  };

  return (
    <Box
      minWidth="30rem"
      width="100%"
      alignItems="left"
      gap="0.2rem"
      marginBottom="1rem"
      position="relative"
    >
      {isSolved && <CorrectChecker isCorrect={isCorrect} />}
      <Box>
        <CustomTypo marginRight="0.5rem">{qNum}</CustomTypo>
        <CustomTypo fontSize="1.25rem" paddingBottom="1rem">
          {qString}
        </CustomTypo>
      </Box>
      <Box
        display="flex"
        width="100%"
        alignItems="center"
        justifyContent="space-around"
      >
        <Box display="flex" alignItems="center">
          <CustomTypo paddingX="1rem">식: </CustomTypo>
          {renderInputComponent()}
          <CustomTypo marginX="1rem">÷</CustomTypo>
          <NumberInput
            width="2.5rem"
            value={equationDivValue}
            onChange={e => setEquationDivValue(Number(e.target.value))}
          />
        </Box>
        <Box display="flex" alignItems="center">
          <CustomTypo paddingX="1rem">답: </CustomTypo>
          <DivisionInput
            mother={answerMomValue}
            son={answerSonValue}
            onChangeMother={e => setAnswerMomValue(Number(e.target.value))}
            onChangeSon={e => setAnswerSonValue(Number(e.target.value))}
          />
          <CustomTypo paddingX="1rem">{unit}</CustomTypo>
        </Box>
      </Box>
    </Box>
  );
}
