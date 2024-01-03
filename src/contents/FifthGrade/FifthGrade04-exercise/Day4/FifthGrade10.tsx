import React, { useState, useEffect } from 'react';
import Styled from '../../style';
import ConfirmBtn from '../../utils/ConfirmBtn';
import type { AnswersType } from '../../Type/Type1';

const FifthGrade10: React.FC = () => {
  const [showResult, setShowResult] = useState(false);
  const [answers, setAnswers] = useState<AnswersType>({
    '1': ['', ''],
    '2': ['', ''],
    '3': ['', ''],
    '4': ['', ''],
    '5': ['', ''],
    '6': ['', ''],
  });
  const correctAnswers: AnswersType = {
    '1': ['2', '5'],
    '2': ['1', '14'],
    '3': ['15', '28'],
    '4': ['27', '104'],
    '5': ['1', '7'],
    '6': ['3', '14'],
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
      <div className="exampleBox312">
        <div className="fontSize17">
          세 분수의 곱셈은 여러 번 약분을 할 수 있는 경우가 있습니다.
        </div>
        <div className="quiz121Ex justifyCenter">
          <img
            className="imgSize3111"
            src={`${process.env.PUBLIC_URL}/fifthImage/4-4-1.png`}
            alt=""
          />
        </div>
        <div className="flexRow">
          <div className="">
            <div className="textCenter">12</div>
            <div className="divlineCSS1"></div>
            <div className="textCenter">25</div>
          </div>
          <div className="flexRow">
            의 분자 12는 16과 4로 약분하고, 9와 3으로 한 번 더 약분해서 1이
            되었습니다.
          </div>
        </div>
        <div>
          분자와 분모를 약분하는 순서는 여러 가지가 있지만 계산 결과는 같습니다.{' '}
        </div>
      </div>
      <div className="quiz fontSize25">
        <div>
          {' '}
          <div className="flexRow awefaweTOp">
            <p>① &nbsp;&nbsp;</p>
            <div className="quiz121Ex">
              <div className="textCenter">5</div>
              <div className="divlineCSS1"></div>
              <div className="textCenter">7</div>
            </div>
            <div className="marginlR10px">×</div>
            <div className="quiz121Ex">
              <div className="textCenter">28</div>
              <div className="divlineCSS7"></div>
              <div className="textCenter">15</div>
            </div>
            <div className="marginlR10px">×</div>
            <div className="quiz121Ex">
              <div className="textCenter">3</div>
              <div className="divlineCSS7"></div>
              <div className="textCenter">10</div>
            </div>
            <div className="marginlR10px">=</div>
            <div>
              <div className="flexRow">
                {' '}
                <input type="text" className="averageInput" />
                <div className="awkfaui">×</div>
                <input type="text" className="averageInput" />
                <div className="awkfaui">×</div>
                <input type="text" className="averageInput" />
              </div>
              <div className="divlineCSS16"></div>
              <div className="flexRow">
                {' '}
                <input type="text" className="averageInput" />
                <div className="awkfaui">×</div>
                <input type="text" className="averageInput" />
                <div className="awkfaui">×</div>
                <input type="text" className="averageInput" />
              </div>{' '}
            </div>
            <div className="marginlR10px">=</div>
            <div>
              <input type="text" className="averageInput" />
              <div className="divlineCSS15"></div>
              <input type="text" className="averageInput" />
            </div>
          </div>
        </div>
        <div>
          {' '}
          <div className="flexRow awefaweTOp">
            <p>② &nbsp;&nbsp;</p>
            <div className="quiz121Ex">
              <div className="textCenter">3</div>
              <div className="divlineCSS1"></div>
              <div className="textCenter">4</div>
            </div>
            <div className="marginlR10px">×</div>
            <div className="quiz121Ex">
              <div className="textCenter">1</div>
              <div className="divlineCSS1"></div>
              <div className="textCenter">6</div>
            </div>
            <div className="marginlR10px">×</div>
            <div className="quiz121Ex">
              <div className="textCenter">4</div>
              <div className="divlineCSS1"></div>
              <div className="textCenter">7</div>
            </div>
            <div className="marginlR10px">=</div>
            <div>
              <div className="flexRow">
                {' '}
                <input type="text" className="averageInput" />
                <div className="awkfaui">×</div>
                <input type="text" className="averageInput" />
                <div className="awkfaui">×</div>
                <input type="text" className="averageInput" />
              </div>
              <div className="divlineCSS16"></div>
              <div className="flexRow">
                {' '}
                <input type="text" className="averageInput" />
                <div className="awkfaui">×</div>
                <input type="text" className="averageInput" />
                <div className="awkfaui">×</div>
                <input type="text" className="averageInput" />
              </div>{' '}
            </div>
            <div className="marginlR10px">=</div>
            <div>
              <input type="text" className="averageInput" />
              <div className="divlineCSS15"></div>
              <input type="text" className="averageInput" />
            </div>
          </div>
        </div>{' '}
        <div>
          {' '}
          <div className="flexRow awefaweTOp">
            <p>③ &nbsp;&nbsp;</p>
            <div className="quiz121Ex">
              <div className="textCenter">9</div>
              <div className="divlineCSS1"></div>
              <div className="textCenter">8</div>
            </div>
            <div className="marginlR10px">×</div>
            <div className="quiz121Ex">
              <div className="textCenter">4</div>
              <div className="divlineCSS1"></div>
              <div className="textCenter">7</div>
            </div>
            <div className="marginlR10px">×</div>
            <div className="quiz121Ex">
              <div className="textCenter">5</div>
              <div className="divlineCSS1"></div>
              <div className="textCenter">6</div>
            </div>
            <div className="marginlR10px">=</div>
            <div>
              <div className="flexRow">
                {' '}
                <input type="text" className="averageInput" />
                <div className="awkfaui">×</div>
                <input type="text" className="averageInput" />
                <div className="awkfaui">×</div>
                <input type="text" className="averageInput" />
              </div>
              <div className="divlineCSS16"></div>
              <div className="flexRow">
                {' '}
                <input type="text" className="averageInput" />
                <div className="awkfaui">×</div>
                <input type="text" className="averageInput" />
                <div className="awkfaui">×</div>
                <input type="text" className="averageInput" />
              </div>{' '}
            </div>
            <div className="marginlR10px">=</div>
            <div>
              <input type="text" className="averageInput" />
              <div className="divlineCSS15"></div>
              <input type="text" className="averageInput" />
            </div>
          </div>
        </div>{' '}
        <div>
          {' '}
          <div className="flexRow awefaweTOp">
            <p>④ &nbsp;&nbsp;</p>
            <div className="quiz121Ex">
              <div className="textCenter">9</div>
              <div className="divlineCSS7"></div>
              <div className="textCenter">16</div>
            </div>
            <div className="marginlR10px">×</div>
            <div className="quiz121Ex">
              <div className="textCenter">1</div>
              <div className="divlineCSS1"></div>
              <div className="textCenter">2</div>
            </div>
            <div className="marginlR10px">×</div>
            <div className="quiz121Ex">
              <div className="textCenter">12</div>
              <div className="divlineCSS7"></div>
              <div className="textCenter">13</div>
            </div>
            <div className="marginlR10px">=</div>
            <div>
              <div className="flexRow">
                {' '}
                <input type="text" className="averageInput" />
                <div className="awkfaui">×</div>
                <input type="text" className="averageInput" />
                <div className="awkfaui">×</div>
                <input type="text" className="averageInput" />
              </div>
              <div className="divlineCSS16"></div>
              <div className="flexRow">
                {' '}
                <input type="text" className="averageInput" />
                <div className="awkfaui">×</div>
                <input type="text" className="averageInput" />
                <div className="awkfaui">×</div>
                <input type="text" className="averageInput" />
              </div>{' '}
            </div>
            <div className="marginlR10px">=</div>
            <div>
              <input type="text" className="averageInput" />
              <div className="divlineCSS15"></div>
              <input type="text" className="averageInput" />
            </div>
          </div>
        </div>{' '}
        <div>
          {' '}
          <div className="flexRow awefaweTOp">
            <p>⑤ &nbsp;&nbsp;</p>
            <div className="quiz121Ex">
              <div className="textCenter">2</div>
              <div className="divlineCSS1"></div>
              <div className="textCenter">7</div>
            </div>
            <div className="marginlR10px">×</div>
            <div className="quiz121Ex">
              <div className="textCenter">5</div>
              <div className="divlineCSS1"></div>
              <div className="textCenter">6</div>
            </div>
            <div className="marginlR10px">×</div>
            <div className="quiz121Ex">
              <div className="textCenter">3</div>
              <div className="divlineCSS1"></div>
              <div className="textCenter">5</div>
            </div>
            <div className="marginlR10px">=</div>
            <div>
              <div className="flexRow">
                {' '}
                <input type="text" className="averageInput" />
                <div className="awkfaui">×</div>
                <input type="text" className="averageInput" />
                <div className="awkfaui">×</div>
                <input type="text" className="averageInput" />
              </div>
              <div className="divlineCSS16"></div>
              <div className="flexRow">
                {' '}
                <input type="text" className="averageInput" />
                <div className="awkfaui">×</div>
                <input type="text" className="averageInput" />
                <div className="awkfaui">×</div>
                <input type="text" className="averageInput" />
              </div>{' '}
            </div>
            <div className="marginlR10px">=</div>
            <div>
              <input type="text" className="averageInput" />
              <div className="divlineCSS15"></div>
              <input type="text" className="averageInput" />
            </div>
          </div>
        </div>{' '}
        <div>
          {' '}
          <div className="flexRow awefaweTOp">
            <p>⑥ &nbsp;&nbsp;</p>
            <div className="quiz121Ex">
              <div className="textCenter">6</div>
              <div className="divlineCSS1"></div>
              <div className="textCenter">7</div>
            </div>
            <div className="marginlR10px">×</div>
            <div className="quiz121Ex">
              <div className="textCenter">3</div>
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
              <div className="flexRow">
                {' '}
                <input type="text" className="averageInput" />
                <div className="awkfaui">×</div>
                <input type="text" className="averageInput" />
                <div className="awkfaui">×</div>
                <input type="text" className="averageInput" />
              </div>
              <div className="divlineCSS16"></div>
              <div className="flexRow">
                {' '}
                <input type="text" className="averageInput" />
                <div className="awkfaui">×</div>
                <input type="text" className="averageInput" />
                <div className="awkfaui">×</div>
                <input type="text" className="averageInput" />
              </div>{' '}
            </div>
            <div className="marginlR10px">=</div>
            <div>
              <input type="text" className="averageInput" />
              <div className="divlineCSS15"></div>
              <input type="text" className="averageInput" />
            </div>
          </div>
        </div>{' '}
      </div>
      <ConfirmBtn type={true} day={4} handleGrade={handleGrade} />
    </Styled.OneToNine>
  );
};

export default FifthGrade10;
