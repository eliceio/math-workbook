import React, { useState, useEffect } from 'react';
import Styled from '../../style';
import type { AnswersType } from '../../Type/Type1';
import ConfirmBtn from '../../utils/ConfirmBtn';

const FifthGrade06: React.FC = () => {
  const [showResult, setShowResult] = useState(false);
  const [answers, setAnswers] = useState<AnswersType>({
    '1': [''],
    '2': [''],
    '3': [''],
    '4': [''],
    '5': [''],
    '6': [''],
    '7': [''],
    '8': [''],
    '9': [''],
    '10': [''],
    '11': [''],
    '12': [''],
    '13': [''],
    '14': [''],
  });
  const correctAnswers: AnswersType = {
    '1': ['15'],
    '2': ['49'],
    '3': ['32'],
    '4': ['78'],
    '5': ['33'],
    '6': ['45'],
    '7': ['14'],
    '8': ['22'],
    '9': ['59'],
    '10': ['33'],
    '11': ['28'],
    '12': ['1'],
    '13': ['16'],
    '14': ['33'],
  };
  const handleChange = (questionId: string, index: number, value: string) => {
    setAnswers({
      ...answers,
      [questionId]: answers[questionId].map((item, i) =>
        i === index ? value : item
      ),
    });
  };

  const [showResults, setShowResults] = useState(false);

  const isCorrect = (questionId: string) => {
    return correctAnswers[questionId].every(
      (answer, index) => answer === answers[questionId][index]
    );
  };

  const handleGrade = () => {
    setShowResults(true);
  };
  useEffect(() => {
    setShowResults(false);
  }, [answers]);
  return (
    <Styled.OneToNine className="sectionSize">
      <div className="quizAll">
        <div className="quiz1">
          <div className="quizCard11">
            <div className="marginTop18 flexRow">
              <p className="quizNumber1231">①</p>
              46 - (12 + 19) ={' '}
              <input
                value={answers['1'][0]}
                onChange={e => handleChange('1', 0, e.target.value)}
                className="inputSize1"
                type="text"
              />
            </div>
          </div>
          <div className="quizCard11">
            <div className="marginTop18 flexRow">
              <p className="quizNumber1231">②</p>
              88 - (52 - 13) ={' '}
              <input
                value={answers['2'][0]}
                onChange={e => handleChange('2', 0, e.target.value)}
                className="inputSize1"
                type="text"
              />
            </div>
          </div>
          <div className="quizCard11">
            <div className="marginTop18 flexRow">
              <p className="quizNumber1231">③</p>
              29 + (22 - 19) ={' '}
              <input
                value={answers['3'][0]}
                onChange={e => handleChange('3', 0, e.target.value)}
                className="inputSize1"
                type="text"
              />
            </div>
          </div>
          <div className="quizCard11">
            <div className="marginTop18 flexRow">
              <p className="quizNumber1231">④</p>
              37 + (16 + 25) ={' '}
              <input
                value={answers['4'][0]}
                onChange={e => handleChange('4', 0, e.target.value)}
                className="inputSize1"
                type="text"
              />
            </div>
          </div>

          <div className="quizCard11">
            <div className="marginTop18 flexRow">
              <p className="quizNumber1231">⑤</p>
              74 - (26 + 15) ={' '}
              <input
                value={answers['5'][0]}
                onChange={e => handleChange('5', 0, e.target.value)}
                className="inputSize1"
                type="text"
              />
            </div>
          </div>
          <div className="quizCard11">
            <div className="marginTop18 flexRow">
              <p className="quizNumber1231">⑥</p>
              46 - (17 - 16) ={' '}
              <input
                value={answers['6'][0]}
                onChange={e => handleChange('6', 0, e.target.value)}
                className="inputSize1"
                type="text"
              />
            </div>
          </div>
          <div className="quizCard11">
            <div className="marginTop18 flexRow">
              <p className="quizNumber1231">⑦</p>
              55 - (17 + 24) ={' '}
              <input
                value={answers['7'][0]}
                onChange={e => handleChange('7', 0, e.target.value)}
                className="inputSize1"
                type="text"
              />
            </div>
          </div>
          <div className="quizCard11">
            <div className="marginTop18 flexRow">
              <p className="quizNumber1231">⑧</p>
              16 + (41 - 35) ={' '}
              <input
                value={answers['8'][0]}
                onChange={e => handleChange('8', 0, e.target.value)}
                className="inputSize1"
                type="text"
              />
            </div>
          </div>

          <div className="quizCard11">
            <div className="marginTop18 flexRow">
              <p className="quizNumber1231">⑨</p>
              60 - (27 - 26) ={' '}
              <input
                value={answers['9'][0]}
                onChange={e => handleChange('9', 0, e.target.value)}
                className="inputSize1"
                type="text"
              />
            </div>
          </div>
          <div className="quizCard11">
            <div className="marginTop18 flexRow">
              <p className="quizNumber1231">⑩</p>
              31 + (27 - 25) ={' '}
              <input
                value={answers['10'][0]}
                onChange={e => handleChange('10', 0, e.target.value)}
                className="inputSize1"
                type="text"
              />
            </div>
          </div>
          <div className="quizCard11">
            <div className="marginTop18 flexRow">
              <p className="quizNumber1231">⑪</p>
              59 - (6 + 25) ={' '}
              <input
                value={answers['11'][0]}
                onChange={e => handleChange('11', 0, e.target.value)}
                className="inputSize1"
                type="text"
              />
            </div>
          </div>
          <div className="quizCard11">
            <div className="marginTop18 flexRow">
              <p className="quizNumber1231">⑫</p>
              17 - (25 - 9) ={' '}
              <input
                value={answers['12'][0]}
                onChange={e => handleChange('12', 0, e.target.value)}
                className="inputSize1"
                type="text"
              />
            </div>
          </div>
          <div className="quizCard11">
            <div className="marginTop18 flexRow">
              <p className="quizNumber1231">⑬</p>
              38 - (5 + 17) ={' '}
              <input
                value={answers['13'][0]}
                onChange={e => handleChange('13', 0, e.target.value)}
                className="inputSize1"
                type="text"
              />
            </div>
          </div>
          <div className="quizCard11">
            <div className="marginTop18 flexRow">
              <p className="quizNumber1231">⑭</p>
              24 + (17 - 8) ={' '}
              <input
                value={answers['14'][0]}
                onChange={e => handleChange('14', 0, e.target.value)}
                className="inputSize1"
                type="text"
              />
            </div>
          </div>
        </div>
      </div>
      <ConfirmBtn type={true} day={2} handleGrade={handleGrade} />
    </Styled.OneToNine>
  );
};

export default FifthGrade06;
