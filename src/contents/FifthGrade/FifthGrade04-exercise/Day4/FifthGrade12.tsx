import React, { useState } from 'react';
import { sendScore } from '@elice/extcontent-apis';
import { postKeyValue } from '@elice/extcontent-apis';
import { getKeyValue } from '@elice/extcontent-apis';

import Styled from '../../style';
import ConfirmBtn from '../../utils/ConfirmBtn';

import type { AnswersType } from '../../Type/Type1';

import correctimg from 'src/contents/FifthGrade/fifthImage/correct.png';
import incorrectimg from 'src/contents/FifthGrade/fifthImage/incorrect.png';

const FifthGrade12: React.FC = () => {
  const [type, setType] = useState(true);
  const [answers, setAnswers] = useState<AnswersType>({
    '1': ['', ''],
    '2': ['', ''],
    '3': ['', ''],
    '4': ['', ''],
    '5': ['', ''],
    '6': ['', ''],
    '7': ['', ''],
    '8': [''],
    '9': ['', ''],
    '10': ['', ''],
    '11': ['', ''],
    '12': ['', ''],
  });
  const correctAnswers: AnswersType = {
    '1': ['1', '20'],
    '2': ['1', '7'],
    '3': ['1', '24'],
    '4': ['7', '30'],
    '5': ['1', '24'],
    '6': ['1', '60'],
    '7': ['7', '8'],
    '8': ['1'],
    '9': ['3', '5'],
    '10': ['3', '4'],
    '11': ['1', '3'],
    '12': ['3', '5'],
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
  const calculateScore = () => {
    const totalQuestions = Object.keys(correctAnswers).length; // 전체 문제 수
    const scorePerQuestion = 100 / totalQuestions; // 각 문제당 점수

    let correctCount = 0;
    Object.keys(correctAnswers).forEach(questionId => {
      if (isCorrect(questionId)) {
        correctCount++;
      }
    });

    return correctCount * scorePerQuestion; // 총점 계산
  };
  const handleGrade = async () => {
    setShowResults(true);
    setType(false);
    const totalScore = calculateScore();
    sendScore({ score: totalScore }).catch(error => {
      console.error('Error with sendScore:', error);
    });
    postKeyValue({
      key: 'fifthGrade57Answers',
      value: answers,
    }).catch(error => {
      console.error('Error saving answers:', error);
    });
  };
  const [isDataLoaded, setIsDataLoaded] = useState(false);

  if (!isDataLoaded) {
    getKeyValue({ key: 'fifthGrade57Answers' })
      .then(savedAnswers => {
        if (savedAnswers) {
          setAnswers(savedAnswers);
        }
        setIsDataLoaded(true);
      })
      .catch(error => {
        console.error('Error loading saved answers:', error);
      });
  }
  return (
    <Styled.OneToNine className="sectionSize">
      <div className="quiz3 fontSize25">
        <div>
          {' '}
          <div className="afwe3513 flexRow awefaweTOp marginwerq245288">
            <p>① &nbsp;&nbsp;</p>
            {showResults && (
              <div>
                {isCorrect('1') ? (
                  <div>
                    <img
                      className="answerImg53"
                      src={correctimg}
                      alt="Correct"
                    />
                  </div>
                ) : (
                  <div>
                    <img
                      className="answerImg53"
                      src={incorrectimg}
                      alt="Incorrect"
                    />
                  </div>
                )}
              </div>
            )}{' '}
            <div className="quiz121Ex">
              <div className="textCenter">3</div>
              <div className="divlineCSS1"></div>
              <div className="textCenter">5</div>
            </div>
            <div className="marginlR10px">×</div>
            <div className="quiz121Ex">
              <div className="textCenter">1</div>
              <div className="divlineCSS1"></div>
              <div className="textCenter">4</div>
            </div>
            <div className="marginlR10px">×</div>
            <div className="quiz121Ex">
              <div className="textCenter">1</div>
              <div className="divlineCSS1"></div>
              <div className="textCenter">3</div>
            </div>
            <div className="marginlR10px">=</div>
            <div>
              <input
                value={answers['1'][0]}
                onChange={e => handleChange('1', 0, e.target.value)}
                type="text"
                className="averageInput"
              />
              <div className="divlineCSS15"></div>
              <input
                type="text"
                className="averageInput"
                value={answers['1'][1]}
                onChange={e => handleChange('1', 1, e.target.value)}
              />
            </div>
          </div>
        </div>
        <div>
          <div className="afwe3513 flexRow awefaweTOp marginwerq245288">
            <p>② &nbsp;&nbsp;</p>
            {showResults && (
              <div>
                {isCorrect('2') ? (
                  <div>
                    <img
                      className="answerImg53"
                      src={correctimg}
                      alt="Correct"
                    />
                  </div>
                ) : (
                  <div>
                    <img
                      className="answerImg53"
                      src={incorrectimg}
                      alt="Incorrect"
                    />
                  </div>
                )}
              </div>
            )}{' '}
            <div className="quiz121Ex">
              <div className="textCenter">6</div>
              <div className="divlineCSS1"></div>
              <div className="textCenter">7</div>
            </div>
            <div className="marginlR10px">×</div>
            <div className="quiz121Ex">
              <div className="textCenter">1</div>
              <div className="divlineCSS1"></div>
              <div className="textCenter">4</div>
            </div>
            <div className="marginlR10px">×</div>
            <div className="quiz121Ex">
              <div className="textCenter">2</div>{' '}
              <div className="divlineCSS1"></div>
              <div className="textCenter">3</div>
            </div>
            <div className="marginlR10px">=</div>
            <div>
              <input
                value={answers['2'][0]}
                onChange={e => handleChange('2', 0, e.target.value)}
                type="text"
                className="averageInput"
              />
              <div className="divlineCSS15"></div>
              <input
                type="text"
                className="averageInput"
                value={answers['2'][1]}
                onChange={e => handleChange('2', 1, e.target.value)}
              />
            </div>
          </div>
        </div>
        <div>
          <div className="afwe3513 flexRow awefaweTOp marginwerq245288">
            <p>③ &nbsp;&nbsp;</p>
            {showResults && (
              <div>
                {isCorrect('3') ? (
                  <div>
                    <img
                      className="answerImg53"
                      src={correctimg}
                      alt="Correct"
                    />
                  </div>
                ) : (
                  <div>
                    <img
                      className="answerImg53"
                      src={incorrectimg}
                      alt="Incorrect"
                    />
                  </div>
                )}
              </div>
            )}{' '}
            <div className="quiz121Ex">
              <div className="textCenter">5</div>
              <div className="divlineCSS1"></div>
              <div className="textCenter">8</div>
            </div>
            <div className="marginlR10px">×</div>
            <div className="quiz121Ex">
              <div className="textCenter">2</div>
              <div className="divlineCSS1"></div>
              <div className="textCenter">3</div>
            </div>
            <div className="marginlR10px">×</div>
            <div className="quiz121Ex">
              <div className="textCenter">1</div>
              <div className="divlineCSS7"></div>
              <div className="textCenter">10</div>
            </div>
            <div className="marginlR10px">=</div>
            <div>
              <input
                value={answers['3'][0]}
                onChange={e => handleChange('3', 0, e.target.value)}
                type="text"
                className="averageInput"
              />
              <div className="divlineCSS15"></div>
              <input
                type="text"
                className="averageInput"
                value={answers['3'][1]}
                onChange={e => handleChange('3', 1, e.target.value)}
              />
            </div>
          </div>
        </div>
        <div>
          <div className="afwe3513 flexRow awefaweTOp marginwerq245288">
            <p>④ &nbsp;&nbsp;</p>
            {showResults && (
              <div>
                {isCorrect('4') ? (
                  <div>
                    <img
                      className="answerImg53"
                      src={correctimg}
                      alt="Correct"
                    />
                  </div>
                ) : (
                  <div>
                    <img
                      className="answerImg53"
                      src={incorrectimg}
                      alt="Incorrect"
                    />
                  </div>
                )}
              </div>
            )}{' '}
            <div className="quiz121Ex">
              <div className="textCenter">3</div>
              <div className="divlineCSS1"></div>
              <div className="textCenter">5</div>
            </div>
            <div className="marginlR10px">×</div>
            <div className="quiz121Ex">
              <div className="textCenter">7</div>
              <div className="divlineCSS1"></div>
              <div className="textCenter">12</div>
            </div>
            <div className="marginlR10px">×</div>
            <div className="quiz121Ex">
              <div className="textCenter">2</div>
              <div className="divlineCSS1"></div>
              <div className="textCenter">3</div>
            </div>
            <div className="marginlR10px">=</div>
            <div>
              <input
                value={answers['4'][0]}
                onChange={e => handleChange('4', 0, e.target.value)}
                type="text"
                className="averageInput"
              />
              <div className="divlineCSS15"></div>
              <input
                type="text"
                className="averageInput"
                value={answers['4'][1]}
                onChange={e => handleChange('4', 1, e.target.value)}
              />
            </div>
          </div>
        </div>
        <div>
          <div className="afwe3513 flexRow awefaweTOp marginwerq245288">
            <p>⑤ &nbsp;&nbsp;</p>
            {showResults && (
              <div>
                {isCorrect('5') ? (
                  <div>
                    <img
                      className="answerImg53"
                      src={correctimg}
                      alt="Correct"
                    />
                  </div>
                ) : (
                  <div>
                    <img
                      className="answerImg53"
                      src={incorrectimg}
                      alt="Incorrect"
                    />
                  </div>
                )}
              </div>
            )}{' '}
            <div className="quiz121Ex">
              <div className="textCenter">5</div>
              <div className="divlineCSS1"></div>
              <div className="textCenter">6</div>
            </div>
            <div className="marginlR10px">×</div>
            <div className="quiz121Ex">
              <div className="textCenter">1</div>
              <div className="divlineCSS1"></div>
              <div className="textCenter">4</div>
            </div>
            <div className="marginlR10px">×</div>
            <div className="quiz121Ex">
              <div className="textCenter">1</div>
              <div className="divlineCSS1"></div>
              <div className="textCenter">5</div>
            </div>
            <div className="marginlR10px">=</div>
            <div>
              <input
                value={answers['5'][0]}
                onChange={e => handleChange('5', 0, e.target.value)}
                type="text"
                className="averageInput"
              />
              <div className="divlineCSS15"></div>
              <input
                type="text"
                className="averageInput"
                value={answers['5'][1]}
                onChange={e => handleChange('5', 1, e.target.value)}
              />
            </div>
          </div>
        </div>
        <div>
          <div className="afwe3513 flexRow awefaweTOp marginwerq245288">
            <p>⑥ &nbsp;&nbsp;</p>
            {showResults && (
              <div>
                {isCorrect('6') ? (
                  <div>
                    <img
                      className="answerImg53"
                      src={correctimg}
                      alt="Correct"
                    />
                  </div>
                ) : (
                  <div>
                    <img
                      className="answerImg53"
                      src={incorrectimg}
                      alt="Incorrect"
                    />
                  </div>
                )}
              </div>
            )}{' '}
            <div className="quiz121Ex">
              <div className="textCenter">3</div>
              <div className="divlineCSS7"></div>
              <div className="textCenter">16</div>
            </div>
            <div className="marginlR10px">×</div>
            <div className="quiz121Ex">
              <div className="textCenter">1</div>
              <div className="divlineCSS1"></div>
              <div className="textCenter">9</div>
            </div>
            <div className="marginlR10px">×</div>
            <div className="quiz121Ex">
              <div className="textCenter">4</div>
              <div className="divlineCSS1"></div>
              <div className="textCenter">5</div>
            </div>
            <div className="marginlR10px">=</div>
            <div>
              <input
                value={answers['6'][0]}
                onChange={e => handleChange('6', 0, e.target.value)}
                type="text"
                className="averageInput"
              />
              <div className="divlineCSS15"></div>
              <input
                type="text"
                className="averageInput"
                value={answers['6'][1]}
                onChange={e => handleChange('6', 1, e.target.value)}
              />
            </div>
          </div>
        </div>
        <div>
          <div className="afwe3513 flexRow awefaweTOp marginwerq245288">
            <p>⑦ &nbsp;&nbsp;</p>
            {showResults && (
              <div>
                {isCorrect('7') ? (
                  <div>
                    <img
                      className="answerImg53"
                      src={correctimg}
                      alt="Correct"
                    />
                  </div>
                ) : (
                  <div>
                    <img
                      className="answerImg53"
                      src={incorrectimg}
                      alt="Incorrect"
                    />
                  </div>
                )}
              </div>
            )}{' '}
            <div className="quiz121Ex">
              <div className="textCenter">15</div>
            </div>
            <div className="marginlR10px">×</div>
            <div className="quiz121Ex">
              <div className="textCenter">1</div>
              <div className="divlineCSS1"></div>
              <div className="textCenter">4</div>
            </div>
            <div className="marginlR10px">×</div>
            <div className="quiz121Ex">
              <div className="textCenter">7</div>
              <div className="divlineCSS7"></div>
              <div className="textCenter">30</div>
            </div>
            <div className="marginlR10px">=</div>
            <div>
              <input
                value={answers['7'][0]}
                onChange={e => handleChange('7', 0, e.target.value)}
                type="text"
                className="averageInput"
              />
              <div className="divlineCSS15"></div>
              <input
                type="text"
                className="averageInput"
                value={answers['7'][1]}
                onChange={e => handleChange('7', 1, e.target.value)}
              />
            </div>
          </div>
        </div>
        <div>
          <div className="afwe3513 flexRow awefaweTOp marginwerq245288">
            <p>⑧ &nbsp;&nbsp;</p>
            {showResults && (
              <div>
                {isCorrect('8') ? (
                  <div>
                    <img
                      className="answerImg53"
                      src={correctimg}
                      alt="Correct"
                    />
                  </div>
                ) : (
                  <div>
                    <img
                      className="answerImg53"
                      src={incorrectimg}
                      alt="Incorrect"
                    />
                  </div>
                )}
              </div>
            )}{' '}
            <div className="quiz121Ex">
              <div className="textCenter">7</div>
              <div className="divlineCSS1"></div>
              <div className="textCenter">9</div>
            </div>
            <div className="marginlR10px">×</div>
            <div className="quiz121Ex">
              <div className="textCenter">6</div>
            </div>
            <div className="marginlR10px">×</div>
            <div className="quiz121Ex">
              <div className="textCenter">3</div>
              <div className="divlineCSS7"></div>
              <div className="textCenter">14</div>
            </div>
            <div className="marginlR10px">=</div>
            <div>
              <input
                value={answers['8'][0]}
                onChange={e => handleChange('8', 0, e.target.value)}
                type="text"
                className="averageInput"
              />
              <div className="divlineCSS15"></div>
              <input
                type="text"
                className="averageInput"
                value={answers['8'][1]}
                onChange={e => handleChange('8', 1, e.target.value)}
              />
            </div>
          </div>
        </div>
        <div>
          <div className="afwe3513 flexRow awefaweTOp marginwerq245288">
            <p>⑨ &nbsp;&nbsp;</p>
            {showResults && (
              <div>
                {isCorrect('9') ? (
                  <div>
                    <img
                      className="answerImg53"
                      src={correctimg}
                      alt="Correct"
                    />
                  </div>
                ) : (
                  <div>
                    <img
                      className="answerImg53"
                      src={incorrectimg}
                      alt="Incorrect"
                    />
                  </div>
                )}
              </div>
            )}{' '}
            <div className="quiz121Ex">
              <div className="textCenter">2</div>
              <div className="divlineCSS1"></div>
              <div className="textCenter">5</div>
            </div>
            <div className="marginlR10px">×</div>
            <div className="quiz121Ex">
              <div className="textCenter">9</div>
            </div>
            <div className="marginlR10px">×</div>
            <div className="quiz121Ex">
              <div className="textCenter">3</div>
              <div className="divlineCSS7"></div>
              <div className="textCenter">18</div>
            </div>
            <div className="marginlR10px">=</div>
            <div>
              <input
                value={answers['9'][0]}
                onChange={e => handleChange('9', 0, e.target.value)}
                type="text"
                className="averageInput"
              />
              <div className="divlineCSS15"></div>
              <input
                type="text"
                className="averageInput"
                value={answers['9'][1]}
                onChange={e => handleChange('9', 1, e.target.value)}
              />
            </div>
          </div>
        </div>
        <div>
          <div className="afwe3513 flexRow awefaweTOp marginwerq245288">
            <p>⑩ &nbsp;&nbsp;</p>
            {showResults && (
              <div>
                {isCorrect('10') ? (
                  <div>
                    <img
                      className="answerImg53"
                      src={correctimg}
                      alt="Correct"
                    />
                  </div>
                ) : (
                  <div>
                    <img
                      className="answerImg53"
                      src={incorrectimg}
                      alt="Incorrect"
                    />
                  </div>
                )}
              </div>
            )}{' '}
            <div className="quiz121Ex">
              <div className="textCenter">1</div>
              <div className="divlineCSS1"></div>
              <div className="textCenter">5</div>
            </div>
            <div className="marginlR10px">×</div>
            <div className="quiz121Ex">
              <div className="textCenter">15</div>
              <div className="divlineCSS7"></div>
              <div className="textCenter">28</div>
            </div>
            <div className="marginlR10px">×</div>
            <div className="quiz121Ex">
              <div className="textCenter">7</div>
            </div>
            <div className="marginlR10px">=</div>
            <div>
              <input
                value={answers['10'][0]}
                onChange={e => handleChange('10', 0, e.target.value)}
                type="text"
                className="averageInput"
              />
              <div className="divlineCSS15"></div>
              <input
                type="text"
                className="averageInput"
                value={answers['10'][1]}
                onChange={e => handleChange('10', 1, e.target.value)}
              />
            </div>
          </div>
        </div>
        <div>
          <div className="afwe3513 flexRow awefaweTOp marginwerq245288">
            <p>⑪ &nbsp;&nbsp;</p>
            {showResults && (
              <div>
                {isCorrect('11') ? (
                  <div>
                    <img
                      className="answerImg53"
                      src={correctimg}
                      alt="Correct"
                    />
                  </div>
                ) : (
                  <div>
                    <img
                      className="answerImg53"
                      src={incorrectimg}
                      alt="Incorrect"
                    />
                  </div>
                )}
              </div>
            )}{' '}
            <div className="quiz121Ex">
              <div className="textCenter">4</div>
            </div>
            <div className="marginlR10px">×</div>
            <div className="quiz121Ex">
              <div className="textCenter">7</div>
              <div className="divlineCSS1"></div>
              <div className="textCenter">8</div>
            </div>
            <div className="marginlR10px">×</div>
            <div className="quiz121Ex">
              <div className="textCenter">2</div>
              <div className="divlineCSS7"></div>
              <div className="textCenter">21</div>
            </div>
            <div className="marginlR10px">=</div>
            <div>
              <input
                value={answers['11'][0]}
                onChange={e => handleChange('11', 0, e.target.value)}
                type="text"
                className="averageInput"
              />
              <div className="divlineCSS15"></div>
              <input
                type="text"
                className="averageInput"
                value={answers['11'][1]}
                onChange={e => handleChange('11', 1, e.target.value)}
              />
            </div>
          </div>
        </div>
        <div>
          <div className="afwe3513 flexRow awefaweTOp marginwerq245288">
            <p>⑫ &nbsp;&nbsp;</p>
            {showResults && (
              <div>
                {isCorrect('12') ? (
                  <div>
                    <img
                      className="answerImg53"
                      src={correctimg}
                      alt="Correct"
                    />
                  </div>
                ) : (
                  <div>
                    <img
                      className="answerImg53"
                      src={incorrectimg}
                      alt="Incorrect"
                    />
                  </div>
                )}
              </div>
            )}{' '}
            <div className="quiz121Ex">
              <div className="textCenter">3</div>
              <div className="divlineCSS7"></div>
              <div className="textCenter">16</div>
            </div>
            <div className="marginlR10px">×</div>
            <div className="quiz121Ex">
              <div className="textCenter">4</div>
              <div className="divlineCSS7"></div>
              <div className="textCenter">25</div>
            </div>
            <div className="marginlR10px">×</div>
            <div className="quiz121Ex">
              <div className="textCenter">20</div>
            </div>
            <div className="marginlR10px">=</div>
            <div>
              <input
                value={answers['12'][0]}
                onChange={e => handleChange('12', 0, e.target.value)}
                type="text"
                className="averageInput"
              />
              <div className="divlineCSS15"></div>
              <input
                type="text"
                className="averageInput"
                value={answers['12'][1]}
                onChange={e => handleChange('12', 1, e.target.value)}
              />
            </div>
          </div>
        </div>
      </div>
      <ConfirmBtn type={type} day={4} handleGrade={handleGrade} />
    </Styled.OneToNine>
  );
};

export default FifthGrade12;
