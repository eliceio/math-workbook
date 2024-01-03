import { sendScore } from '@elice/extcontent-apis';

interface Props {
  inputValue: string[][];
  answer: string[][];
  setScore: React.Dispatch<React.SetStateAction<number>>;
  setCorrect: React.Dispatch<React.SetStateAction<boolean[]>>;
}

export const handleScore = (score: number, len: number) => {
  return Math.ceil((score / len) * 100);
};

export const handleOrAnswer = (props: Props) => {
  const { inputValue, answer, setScore, setCorrect } = props;
  let score = 0;
  const correct: boolean[] = [];
  const len = inputValue.length;

  for (let i = 0; i < len; i++) {
    let flag = true;
    if (inputValue[i][1] === inputValue[i][4]) flag = false;
    if (
      inputValue[i][0] !== answer[i][0] &&
      inputValue[i][3] !== answer[i][1] &&
      inputValue[i][6] !== answer[i][1]
    )
      flag = false;

    if (
      (parseInt(inputValue[i][1]) * parseInt(inputValue[i][2])).toString() !==
      inputValue[i][3]
    )
      flag = false;

    if (
      (parseInt(inputValue[i][4]) * parseInt(inputValue[i][5])).toString() !==
      inputValue[i][6]
    )
      flag = false;

    correct.push(flag);
    if (flag) score++;
  }

  setScore(handleScore(score, len));
  setCorrect(correct);
  // sendScore({ score: 100 });
};