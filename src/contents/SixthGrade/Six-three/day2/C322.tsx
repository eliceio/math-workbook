import { useEffect, useState } from 'react';
import { Avatar, Box, Typography } from '@mui/material';

import CorrectChecker from 'src/contents/SixthGrade/common/correct-checker';
import { NumberInput } from 'src/contents/SixthGrade/common/number-box';

import type { ProblemProp } from './P322';

import LeftGuideLineOrange from '../../assets/icon/leftGuideLineOrange.svg';
import LeftGuideLinePink from '../../assets/icon/leftGuideLinePink.svg';

interface C321Props {
  problem: ProblemProp;
  isSolved: boolean;
  handleCorrectChange: (qId: number, pass: boolean) => void;
}

export default function C322(props: C321Props) {
  const { problem, isSolved, handleCorrectChange } = props;
  const { qId, pass, qNum, mom, son, hintIdx, answer } = problem;

  const [isCorrect, setIsCorrect] = useState(false);

  const [a1, setA1] = useState<number | undefined>(undefined);
  const [a2, setA2] = useState<number | undefined>(undefined);
  const [a3, setA3] = useState<number | undefined>(undefined);
  const [a4, setA4] = useState<number | undefined>(undefined);
  const [a5, setA5] = useState<number | undefined>(undefined);
  const [a6, setA6] = useState<number | undefined>(undefined);
  const [a7, setA7] = useState<number | undefined>(undefined);
  const [a8, setA8] = useState<number | undefined>(undefined);

  useEffect(() => {
    if (
      answer.a1 === a1 &&
      answer.a2 === a2 &&
      answer.a3 === a3 &&
      answer.a4 === a4 &&
      answer.a5 === a5 &&
      answer.a6 === a6 &&
      answer.a7 === a7 &&
      answer.a8 === a8
    ) {
      setIsCorrect(true);
      handleCorrectChange(qId, true);
    } else {
      setIsCorrect(false);
      handleCorrectChange(qId, false);
    }
  }, [isSolved, qId]);

  return (
    <Box>
      <Box display="flex" alignItems="start">
        <Box display="flex" alignItems="center" position="relative">
          {isSolved && <CorrectChecker isCorrect={isCorrect} />}
          <Typography fontWeight={600} variant="h5" marginRight="1rem">
            {qNum}
          </Typography>
        </Box>
        <Box>
          <Box display="flex" flexDirection="column" gap="0.5rem" mb="3rem">
            {
              {
                0: (
                  <>
                    <Typography
                      fontWeight={600}
                      variant="h5"
                      width="6rem"
                      height="3rem"
                      bgcolor={hintIdx === 0 ? '#FAD476' : '#FBB0C4'}
                      display="flex"
                      justifyContent="center"
                      alignItems="center"
                      borderRadius="1rem"
                    >
                      {mom} : {son}
                    </Typography>
                    <Box display="flex" alignItems="center">
                      <Avatar
                        src={
                          hintIdx === 0
                            ? LeftGuideLineOrange
                            : LeftGuideLinePink
                        }
                        variant="square"
                        style={{
                          width: '1.5rem',
                          height: 'max-content',
                        }}
                      />
                      <Box display="flex" flexDirection="column" gap="0.5rem">
                        <Box display="flex" gap="0.2rem">
                          <NumberInput
                            width={'2rem'}
                            value={Number(a1)}
                            onChange={e => setA1(Number(e.target.value))}
                          />
                          <Typography fontWeight={600} variant="h5">
                            대
                          </Typography>
                          <NumberInput
                            width={'2rem'}
                            value={Number(a2)}
                            onChange={e => setA2(Number(e.target.value))}
                          />
                        </Box>
                        <Box display="flex" gap="0.2rem">
                          <NumberInput
                            width={'2rem'}
                            value={Number(a3)}
                            onChange={e => setA3(Number(e.target.value))}
                          />
                          <Typography fontWeight={600} variant="h5">
                            에 대한
                          </Typography>
                          <NumberInput
                            width={'2rem'}
                            value={Number(a4)}
                            onChange={e => setA4(Number(e.target.value))}
                          />
                          <Typography fontWeight={600} variant="h5">
                            의 비
                          </Typography>
                        </Box>
                        <Box display="flex" gap="0.2rem">
                          <NumberInput
                            width={'2rem'}
                            value={Number(a5)}
                            onChange={e => setA5(Number(e.target.value))}
                          />
                          <Typography fontWeight={600} variant="h5">
                            의
                          </Typography>
                          <NumberInput
                            width={'2rem'}
                            value={Number(a6)}
                            onChange={e => setA6(Number(e.target.value))}
                          />
                          <Typography fontWeight={600} variant="h5">
                            에 대한 비
                          </Typography>
                        </Box>
                        <Box display="flex" gap="0.2rem">
                          <NumberInput
                            width={'2rem'}
                            value={Number(a7)}
                            onChange={e => setA7(Number(e.target.value))}
                          />
                          <Typography fontWeight={600} variant="h5">
                            와
                          </Typography>
                          <NumberInput
                            width={'2rem'}
                            value={Number(a8)}
                            onChange={e => setA8(Number(e.target.value))}
                          />
                          <Typography fontWeight={600} variant="h5">
                            의 비
                          </Typography>
                        </Box>
                      </Box>
                    </Box>
                  </>
                ),
                2: (
                  <>
                    <Typography
                      fontWeight={600}
                      variant="h5"
                      width="6rem"
                      height="3rem"
                      bgcolor={hintIdx === 0 ? '#FAD476' : '#FBB0C4'}
                      display="flex"
                      justifyContent="center"
                      alignItems="center"
                      borderRadius="1rem"
                    >
                      <NumberInput
                        width={'2rem'}
                        value={Number(a1)}
                        onChange={e => setA1(Number(e.target.value))}
                      />
                      <Typography fontWeight={600} variant="h5">
                        :
                      </Typography>
                      <NumberInput
                        width={'2rem'}
                        value={Number(a2)}
                        onChange={e => setA2(Number(e.target.value))}
                      />
                    </Typography>
                    <Box display="flex" alignItems="center">
                      <Avatar
                        src={
                          hintIdx === 0
                            ? LeftGuideLineOrange
                            : LeftGuideLinePink
                        }
                        variant="square"
                        style={{
                          width: '1.5rem',
                          height: 'max-content',
                        }}
                      />
                      <Box display="flex" flexDirection="column" gap="0.5rem">
                        <Box display="flex" gap="0.2rem">
                          <NumberInput
                            width={'2rem'}
                            value={Number(a3)}
                            onChange={e => setA3(Number(e.target.value))}
                          />
                          <Typography fontWeight={600} variant="h5">
                            대
                          </Typography>
                          <NumberInput
                            width={'2rem'}
                            value={Number(a4)}
                            onChange={e => setA4(Number(e.target.value))}
                          />
                        </Box>
                        <Box display="flex" gap="0.2rem">
                          <Typography fontWeight={600} variant="h5">
                            {son}에 대한 {mom}의 비
                          </Typography>
                        </Box>
                        <Box display="flex" gap="0.2rem">
                          <NumberInput
                            width={'2rem'}
                            value={Number(a5)}
                            onChange={e => setA5(Number(e.target.value))}
                          />
                          <Typography fontWeight={600} variant="h5">
                            의
                          </Typography>
                          <NumberInput
                            width={'2rem'}
                            value={Number(a6)}
                            onChange={e => setA6(Number(e.target.value))}
                          />
                          <Typography fontWeight={600} variant="h5">
                            에 대한 비
                          </Typography>
                        </Box>
                        <Box display="flex" gap="0.2rem">
                          <NumberInput
                            width={'2rem'}
                            value={Number(a7)}
                            onChange={e => setA7(Number(e.target.value))}
                          />
                          <Typography fontWeight={600} variant="h5">
                            와
                          </Typography>
                          <NumberInput
                            width={'2rem'}
                            value={Number(a8)}
                            onChange={e => setA8(Number(e.target.value))}
                          />
                          <Typography fontWeight={600} variant="h5">
                            의 비
                          </Typography>
                        </Box>
                      </Box>
                    </Box>
                  </>
                ),
                3: (
                  <>
                    <Typography
                      fontWeight={600}
                      variant="h5"
                      width="6rem"
                      height="3rem"
                      bgcolor={hintIdx === 0 ? '#FAD476' : '#FBB0C4'}
                      display="flex"
                      justifyContent="center"
                      alignItems="center"
                      borderRadius="1rem"
                    >
                      <NumberInput
                        width={'2rem'}
                        value={Number(a1)}
                        onChange={e => setA1(Number(e.target.value))}
                      />
                      <Typography fontWeight={600} variant="h5">
                        :
                      </Typography>
                      <NumberInput
                        width={'2rem'}
                        value={Number(a2)}
                        onChange={e => setA2(Number(e.target.value))}
                      />
                    </Typography>
                    <Box display="flex" alignItems="center">
                      <Avatar
                        src={
                          hintIdx === 0
                            ? LeftGuideLineOrange
                            : LeftGuideLinePink
                        }
                        variant="square"
                        style={{
                          width: '1.5rem',
                          height: 'max-content',
                        }}
                      />
                      <Box display="flex" flexDirection="column" gap="0.5rem">
                        <Box display="flex" gap="0.2rem">
                          <NumberInput
                            width={'2rem'}
                            value={Number(a3)}
                            onChange={e => setA3(Number(e.target.value))}
                          />
                          <Typography fontWeight={600} variant="h5">
                            대
                          </Typography>
                          <NumberInput
                            width={'2rem'}
                            value={Number(a4)}
                            onChange={e => setA4(Number(e.target.value))}
                          />
                        </Box>
                        <Box display="flex" gap="0.2rem">
                          <NumberInput
                            width={'2rem'}
                            value={Number(a5)}
                            onChange={e => setA5(Number(e.target.value))}
                          />
                          <Typography fontWeight={600} variant="h5">
                            에 대한
                          </Typography>
                          <NumberInput
                            width={'2rem'}
                            value={Number(a6)}
                            onChange={e => setA6(Number(e.target.value))}
                          />
                          <Typography fontWeight={600} variant="h5">
                            의 비
                          </Typography>
                        </Box>
                        <Box display="flex" gap="0.2rem">
                          <Typography fontWeight={600} variant="h5">
                            {mom}의 {son}에 대한 비
                          </Typography>
                        </Box>
                        <Box display="flex" gap="0.2rem">
                          <NumberInput
                            width={'2rem'}
                            value={Number(a7)}
                            onChange={e => setA7(Number(e.target.value))}
                          />
                          <Typography fontWeight={600} variant="h5">
                            와
                          </Typography>
                          <NumberInput
                            width={'2rem'}
                            value={Number(a8)}
                            onChange={e => setA8(Number(e.target.value))}
                          />
                          <Typography fontWeight={600} variant="h5">
                            의 비
                          </Typography>
                        </Box>
                      </Box>
                    </Box>
                  </>
                ),
                4: (
                  <>
                    <Typography
                      fontWeight={600}
                      variant="h5"
                      width="6rem"
                      height="3rem"
                      bgcolor={hintIdx === 0 ? '#FAD476' : '#FBB0C4'}
                      display="flex"
                      justifyContent="center"
                      alignItems="center"
                      borderRadius="1rem"
                    >
                      <NumberInput
                        width={'2rem'}
                        value={Number(a1)}
                        onChange={e => setA1(Number(e.target.value))}
                      />
                      <Typography fontWeight={600} variant="h5">
                        :
                      </Typography>
                      <NumberInput
                        width={'2rem'}
                        value={Number(a2)}
                        onChange={e => setA2(Number(e.target.value))}
                      />
                    </Typography>
                    <Box display="flex" alignItems="center">
                      <Avatar
                        src={
                          hintIdx === 0
                            ? LeftGuideLineOrange
                            : LeftGuideLinePink
                        }
                        variant="square"
                        style={{
                          width: '1.5rem',
                          height: 'max-content',
                        }}
                      />
                      <Box display="flex" flexDirection="column" gap="0.5rem">
                        <Box display="flex" gap="0.2rem">
                          <NumberInput
                            width={'2rem'}
                            value={Number(a3)}
                            onChange={e => setA3(Number(e.target.value))}
                          />
                          <Typography fontWeight={600} variant="h5">
                            대
                          </Typography>
                          <NumberInput
                            width={'2rem'}
                            value={Number(a4)}
                            onChange={e => setA4(Number(e.target.value))}
                          />
                        </Box>
                        <Box display="flex" gap="0.2rem">
                          <NumberInput
                            width={'2rem'}
                            value={Number(a5)}
                            onChange={e => setA5(Number(e.target.value))}
                          />
                          <Typography fontWeight={600} variant="h5">
                            에 대한
                          </Typography>
                          <NumberInput
                            width={'2rem'}
                            value={Number(a6)}
                            onChange={e => setA6(Number(e.target.value))}
                          />
                          <Typography fontWeight={600} variant="h5">
                            의 비
                          </Typography>
                        </Box>
                        <Box display="flex" gap="0.2rem">
                          <NumberInput
                            width={'2rem'}
                            value={Number(a7)}
                            onChange={e => setA7(Number(e.target.value))}
                          />
                          <Typography fontWeight={600} variant="h5">
                            의
                          </Typography>
                          <NumberInput
                            width={'2rem'}
                            value={Number(a8)}
                            onChange={e => setA8(Number(e.target.value))}
                          />
                          <Typography fontWeight={600} variant="h5">
                            에 대한 비
                          </Typography>
                        </Box>
                        <Box display="flex" gap="0.2rem">
                          <Typography fontWeight={600} variant="h5">
                            {mom}과 {son}의 비
                          </Typography>
                        </Box>
                      </Box>
                    </Box>
                  </>
                ),
              }[hintIdx]
            }
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
