import React, { useState, useEffect } from 'react';
import Styled from '../../style';
import ConfirmBtn from '../../utils/ConfirmBtn';
import type { AnswersType } from '../../Type/Type1';

const FifthGrade08: React.FC = () => {
  const [showResult, setShowResult] = useState(false);
  const [answers, setAnswers] = useState<AnswersType>({
    '1': ['', '', '', ''],
    '2': ['', '', '', ''],
    '3': ['', '', '', ''],
    '4': ['', '', '', ''],
    '5': ['', '', '', ''],
    '6': ['', '', '', ''],
    '7': ['', '', '', ''],
    '8': ['', '', '', ''],
    '9': ['', '', '', ''],
    '10': ['', '', '', ''],
    '11': ['', '', '', ''],
    '12': ['', '', '', ''],
    '13': ['', '', '', ''],
    '14': ['', '', '', ''],
  });
  const correctAnswers: AnswersType = {
    '1': ['18', '24', '4', '24'],
    '2': ['10', '16', '8', '16'],
    '3': ['25', '35', '14', '35'],
    '4': ['9', '54', '48', '54'],
    '5': ['20', '32', '24', '32'],
    '6': ['10', '20', '14', '20'],
    '7': ['75', '90', '48', '90'],
    '8': ['18', '24', '16', '24'],
    '9': ['55', '60', '48', '60'],
    '10': ['12', '27', '9', '27'],
    '11': ['15', '150', '130', '150'],
    '12': ['60', '135', '63', '135'],
    '13': ['80', '192', '36', '192'],
    '14': ['90', '140', '126', '140'],
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
      <div className="textRight332">
        *문제에 적힌 순서대로 답을 입력해주세요.
      </div>
      <div className="quiz33131">
        <div className="flexRow fontSize20 marginTop18 marginbottomtic">
          <p>①&nbsp;&nbsp;&nbsp;&nbsp;</p>
          <div>(</div>
          <div className="fontSize20 marginLeft10px">
            <div className="textCenter">3</div>
            <div className="divlineCSS7"></div>
            <div className="textCenter">4</div>
          </div>
          <div className="commaHeight">,</div>
          <div className="fontSize20 marginRighttic">
            <div className="textCenter">1</div>
            <div className="divlineCSS7"></div>
            <div className="textCenter">6</div>
          </div>
          <div>)&nbsp;&nbsp;&nbsp;&nbsp;</div>
          <img
            className="allowRight"
            src={`${process.env.PUBLIC_URL}/fifthImage/화살표.png`}
            alt=""
          />
          <div>&nbsp;&nbsp;&nbsp;&nbsp;(</div>
          <div className="fontSize20 marginLeft10px">
            <input
              value={answers['1'][0]}
              onChange={e => handleChange('1', 0, e.target.value)}
              type="text"
              className="averageInput331"
            />
            <div className="divlineCSS7"></div>
            <input
              value={answers['1'][1]}
              onChange={e => handleChange('1', 1, e.target.value)}
              type="text"
              className="averageInput331"
            />
          </div>
          <div className="commaHeight">,</div>
          <div className="fontSize20 marginRighttic">
            <input
              value={answers['1'][2]}
              onChange={e => handleChange('1', 2, e.target.value)}
              type="text"
              className="averageInput331"
            />
            <div className="divlineCSS7"></div>
            <input
              value={answers['1'][3]}
              onChange={e => handleChange('1', 3, e.target.value)}
              type="text"
              className="averageInput331"
            />
          </div>
          <div>)&nbsp;&nbsp;&nbsp;&nbsp;</div>
        </div>
        <div className="flexRow fontSize20 marginTop18 marginbottomtic">
          <p>②&nbsp;&nbsp;&nbsp;&nbsp;</p>
          <div>(</div>
          <div className="fontSize20 marginLeft10px">
            <div className="textCenter">5</div>
            <div className="divlineCSS7"></div>
            <div className="textCenter">8</div>
          </div>
          <div className="commaHeight">,</div>
          <div className="fontSize20 marginRighttic">
            <div className="textCenter">1</div>
            <div className="divlineCSS7"></div>
            <div className="textCenter">2</div>
          </div>
          <div>)&nbsp;&nbsp;&nbsp;&nbsp;</div>
          <img
            className="allowRight"
            src={`${process.env.PUBLIC_URL}/fifthImage/화살표.png`}
            alt=""
          />
          <div>&nbsp;&nbsp;&nbsp;&nbsp;(</div>
          <div className="fontSize20 marginLeft10px">
            <input
              value={answers['2'][0]}
              onChange={e => handleChange('2', 0, e.target.value)}
              type="text"
              className="averageInput331"
            />
            <div className="divlineCSS7"></div>
            <input
              value={answers['2'][1]}
              onChange={e => handleChange('2', 1, e.target.value)}
              type="text"
              className="averageInput331"
            />
          </div>
          <div className="commaHeight">,</div>
          <div className="fontSize20 marginRighttic">
            <input
              value={answers['2'][2]}
              onChange={e => handleChange('2', 2, e.target.value)}
              type="text"
              className="averageInput331"
            />
            <div className="divlineCSS7"></div>
            <input
              value={answers['2'][3]}
              onChange={e => handleChange('2', 3, e.target.value)}
              type="text"
              className="averageInput331"
            />
          </div>
          <div>)&nbsp;&nbsp;&nbsp;&nbsp;</div>
        </div>
        <div className="flexRow fontSize20 marginTop18 marginbottomtic">
          <p>③&nbsp;&nbsp;&nbsp;&nbsp;</p>
          <div>(</div>
          <div className="fontSize20 marginLeft10px">
            <div className="textCenter">5</div>
            <div className="divlineCSS7"></div>
            <div className="textCenter">7</div>
          </div>
          <div className="commaHeight">,</div>
          <div className="fontSize20 marginRighttic">
            <div className="textCenter">2</div>
            <div className="divlineCSS7"></div>
            <div className="textCenter">5</div>
          </div>
          <div>)&nbsp;&nbsp;&nbsp;&nbsp;</div>
          <img
            className="allowRight"
            src={`${process.env.PUBLIC_URL}/fifthImage/화살표.png`}
            alt=""
          />
          <div>&nbsp;&nbsp;&nbsp;&nbsp;(</div>
          <div className="fontSize20 marginLeft10px">
            <input
              value={answers['3'][0]}
              onChange={e => handleChange('3', 0, e.target.value)}
              type="text"
              className="averageInput331"
            />
            <div className="divlineCSS7"></div>
            <input
              value={answers['3'][1]}
              onChange={e => handleChange('3', 1, e.target.value)}
              type="text"
              className="averageInput331"
            />
          </div>
          <div className="commaHeight">,</div>
          <div className="fontSize20 marginRighttic">
            <input
              value={answers['3'][2]}
              onChange={e => handleChange('3', 2, e.target.value)}
              type="text"
              className="averageInput331"
            />
            <div className="divlineCSS7"></div>
            <input
              value={answers['3'][3]}
              onChange={e => handleChange('3', 3, e.target.value)}
              type="text"
              className="averageInput331"
            />
          </div>
          <div>)&nbsp;&nbsp;&nbsp;&nbsp;</div>
        </div>
        <div className="flexRow fontSize20 marginTop18 marginbottomtic">
          <p>④ &nbsp;&nbsp;&nbsp;&nbsp;</p>
          <div>(</div>
          <div className="fontSize20 marginLeft10px">
            <div className="textCenter">1</div>
            <div className="divlineCSS7"></div>
            <div className="textCenter">6</div>
          </div>
          <div className="commaHeight">,</div>
          <div className="fontSize20 marginRighttic">
            <div className="textCenter">8</div>
            <div className="divlineCSS7"></div>
            <div className="textCenter">9</div>
          </div>
          <div>)&nbsp;&nbsp;&nbsp;&nbsp;</div>
          <img
            className="allowRight"
            src={`${process.env.PUBLIC_URL}/fifthImage/화살표.png`}
            alt=""
          />
          <div>&nbsp;&nbsp;&nbsp;&nbsp;(</div>
          <div className="fontSize20 marginLeft10px">
            <input
              value={answers['4'][0]}
              onChange={e => handleChange('4', 0, e.target.value)}
              type="text"
              className="averageInput331"
            />
            <div className="divlineCSS7"></div>
            <input
              value={answers['4'][1]}
              onChange={e => handleChange('4', 1, e.target.value)}
              type="text"
              className="averageInput331"
            />
          </div>
          <div className="commaHeight">,</div>
          <div className="fontSize20 marginRighttic">
            <input
              value={answers['4'][2]}
              onChange={e => handleChange('4', 2, e.target.value)}
              type="text"
              className="averageInput331"
            />
            <div className="divlineCSS7"></div>
            <input
              value={answers['4'][3]}
              onChange={e => handleChange('4', 3, e.target.value)}
              type="text"
              className="averageInput331"
            />
          </div>
          <div>)&nbsp;&nbsp;&nbsp;&nbsp;</div>
        </div>
        <div className="flexRow fontSize20 marginTop18 marginbottomtic">
          <p>⑤&nbsp;&nbsp;&nbsp;&nbsp;</p>
          <div>(</div>
          <div className="fontSize20 marginLeft10px">
            <div className="textCenter">5</div>
            <div className="divlineCSS7"></div>
            <div className="textCenter">8</div>
          </div>
          <div className="commaHeight">,</div>
          <div className="fontSize20 marginRighttic">
            <div className="textCenter">3</div>
            <div className="divlineCSS7"></div>
            <div className="textCenter">4</div>
          </div>
          <div>)&nbsp;&nbsp;&nbsp;&nbsp;</div>
          <img
            className="allowRight"
            src={`${process.env.PUBLIC_URL}/fifthImage/화살표.png`}
            alt=""
          />
          <div>&nbsp;&nbsp;&nbsp;&nbsp;(</div>
          <div className="fontSize20 marginLeft10px">
            <input
              value={answers['5'][0]}
              onChange={e => handleChange('5', 0, e.target.value)}
              type="text"
              className="averageInput331"
            />
            <div className="divlineCSS7"></div>
            <input
              value={answers['5'][1]}
              onChange={e => handleChange('5', 1, e.target.value)}
              type="text"
              className="averageInput331"
            />
          </div>
          <div className="commaHeight">,</div>
          <div className="fontSize20 marginRighttic">
            <input
              value={answers['5'][2]}
              onChange={e => handleChange('5', 2, e.target.value)}
              type="text"
              className="averageInput331"
            />
            <div className="divlineCSS7"></div>
            <input
              value={answers['5'][3]}
              onChange={e => handleChange('5', 3, e.target.value)}
              type="text"
              className="averageInput331"
            />
          </div>
          <div>)&nbsp;&nbsp;&nbsp;&nbsp;</div>
        </div>
        <div className="flexRow fontSize20 marginTop18 marginbottomtic">
          <p>⑥&nbsp;&nbsp;&nbsp;&nbsp;</p>
          <div>(</div>
          <div className="fontSize20 marginLeft10px">
            <div className="textCenter">1</div>
            <div className="divlineCSS7"></div>
            <div className="textCenter">2</div>
          </div>
          <div className="commaHeight">,</div>
          <div className="fontSize20 marginRighttic">
            <div className="textCenter">7</div>
            <div className="divlineCSS7"></div>
            <div className="textCenter">10</div>
          </div>
          <div>)&nbsp;&nbsp;&nbsp;&nbsp;</div>
          <img
            className="allowRight"
            src={`${process.env.PUBLIC_URL}/fifthImage/화살표.png`}
            alt=""
          />
          <div>&nbsp;&nbsp;&nbsp;&nbsp;(</div>
          <div className="fontSize20 marginLeft10px">
            <input
              value={answers['6'][0]}
              onChange={e => handleChange('6', 0, e.target.value)}
              type="text"
              className="averageInput331"
            />
            <div className="divlineCSS7"></div>
            <input
              value={answers['6'][1]}
              onChange={e => handleChange('6', 1, e.target.value)}
              type="text"
              className="averageInput331"
            />
          </div>
          <div className="commaHeight">,</div>
          <div className="fontSize20 marginRighttic">
            <input
              value={answers['6'][2]}
              onChange={e => handleChange('6', 2, e.target.value)}
              type="text"
              className="averageInput331"
            />
            <div className="divlineCSS7"></div>
            <input
              value={answers['6'][3]}
              onChange={e => handleChange('6', 3, e.target.value)}
              type="text"
              className="averageInput331"
            />
          </div>
          <div>)&nbsp;&nbsp;&nbsp;&nbsp;</div>
        </div>
        <div className="flexRow fontSize20 marginTop18 marginbottomtic">
          <p>⑦&nbsp;&nbsp;&nbsp;&nbsp;</p>
          <div>(</div>
          <div className="fontSize20 marginLeft10px">
            <div className="textCenter">5</div>
            <div className="divlineCSS7"></div>
            <div className="textCenter">6</div>
          </div>
          <div className="commaHeight">,</div>
          <div className="fontSize20 marginRighttic">
            <div className="textCenter">8</div>
            <div className="divlineCSS7"></div>
            <div className="textCenter">15</div>
          </div>
          <div>)&nbsp;&nbsp;&nbsp;&nbsp;</div>
          <img
            className="allowRight"
            src={`${process.env.PUBLIC_URL}/fifthImage/화살표.png`}
            alt=""
          />
          <div>&nbsp;&nbsp;&nbsp;&nbsp;(</div>
          <div className="fontSize20 marginLeft10px">
            <input
              value={answers['7'][0]}
              onChange={e => handleChange('7', 0, e.target.value)}
              type="text"
              className="averageInput331"
            />
            <div className="divlineCSS7"></div>
            <input
              value={answers['7'][1]}
              onChange={e => handleChange('7', 1, e.target.value)}
              type="text"
              className="averageInput331"
            />
          </div>
          <div className="commaHeight">,</div>
          <div className="fontSize20 marginRighttic">
            <input
              value={answers['7'][2]}
              onChange={e => handleChange('7', 2, e.target.value)}
              type="text"
              className="averageInput331"
            />
            <div className="divlineCSS7"></div>
            <input
              value={answers['7'][3]}
              onChange={e => handleChange('7', 3, e.target.value)}
              type="text"
              className="averageInput331"
            />
          </div>
          <div>)&nbsp;&nbsp;&nbsp;&nbsp;</div>
        </div>
        <div className="flexRow fontSize20 marginTop18 marginbottomtic">
          <p>⑧&nbsp;&nbsp;&nbsp;&nbsp;</p>
          <div>(</div>
          <div className="fontSize20 marginLeft10px">
            <div className="textCenter">6</div>
            <div className="divlineCSS7"></div>
            <div className="textCenter">8</div>
          </div>
          <div className="commaHeight">,</div>
          <div className="fontSize20 marginRighttic">
            <div className="textCenter">2</div>
            <div className="divlineCSS7"></div>
            <div className="textCenter">3</div>
          </div>
          <div>)&nbsp;&nbsp;&nbsp;&nbsp;</div>
          <img
            className="allowRight"
            src={`${process.env.PUBLIC_URL}/fifthImage/화살표.png`}
            alt=""
          />
          <div>&nbsp;&nbsp;&nbsp;&nbsp;(</div>
          <div className="fontSize20 marginLeft10px">
            <input
              value={answers['8'][0]}
              onChange={e => handleChange('8', 0, e.target.value)}
              type="text"
              className="averageInput331"
            />
            <div className="divlineCSS7"></div>
            <input
              value={answers['8'][1]}
              onChange={e => handleChange('8', 1, e.target.value)}
              type="text"
              className="averageInput331"
            />
          </div>
          <div className="commaHeight">,</div>
          <div className="fontSize20 marginRighttic">
            <input
              value={answers['8'][2]}
              onChange={e => handleChange('8', 2, e.target.value)}
              type="text"
              className="averageInput331"
            />
            <div className="divlineCSS7"></div>
            <input
              value={answers['8'][3]}
              onChange={e => handleChange('8', 3, e.target.value)}
              type="text"
              className="averageInput331"
            />
          </div>
          <div>)&nbsp;&nbsp;&nbsp;&nbsp;</div>
        </div>
        <div className="flexRow fontSize20 marginTop18 marginbottomtic">
          <p>⑨&nbsp;&nbsp;&nbsp;&nbsp;</p>
          <div>(</div>
          <div className="fontSize20 marginLeft10px">
            <div className="textCenter">11</div>
            <div className="divlineCSS7"></div>
            <div className="textCenter">12</div>
          </div>
          <div className="commaHeight">,</div>
          <div className="fontSize20 marginRighttic">
            <div className="textCenter">4</div>
            <div className="divlineCSS7"></div>
            <div className="textCenter">5</div>
          </div>
          <div>)&nbsp;&nbsp;&nbsp;&nbsp;</div>
          <img
            className="allowRight"
            src={`${process.env.PUBLIC_URL}/fifthImage/화살표.png`}
            alt=""
          />
          <div>&nbsp;&nbsp;&nbsp;&nbsp;(</div>
          <div className="fontSize20 marginLeft10px">
            <input
              value={answers['9'][0]}
              onChange={e => handleChange('9', 0, e.target.value)}
              type="text"
              className="averageInput331"
            />
            <div className="divlineCSS7"></div>
            <input
              value={answers['9'][1]}
              onChange={e => handleChange('9', 1, e.target.value)}
              type="text"
              className="averageInput331"
            />
          </div>
          <div className="commaHeight">,</div>
          <div className="fontSize20 marginRighttic">
            <input
              value={answers['9'][2]}
              onChange={e => handleChange('9', 2, e.target.value)}
              type="text"
              className="averageInput331"
            />
            <div className="divlineCSS7"></div>
            <input
              value={answers['9'][3]}
              onChange={e => handleChange('9', 3, e.target.value)}
              type="text"
              className="averageInput331"
            />
          </div>
          <div>)&nbsp;&nbsp;&nbsp;&nbsp;</div>
        </div>
        <div className="flexRow fontSize20 marginTop18 marginbottomtic">
          <p>⑩&nbsp;&nbsp;&nbsp;&nbsp;</p>
          <div>(</div>
          <div className="fontSize20 marginLeft10px">
            <div className="textCenter">4</div>
            <div className="divlineCSS7"></div>
            <div className="textCenter">9</div>
          </div>
          <div className="commaHeight">,</div>
          <div className="fontSize20 marginRighttic">
            <div className="textCenter">1</div>
            <div className="divlineCSS7"></div>
            <div className="textCenter">3</div>
          </div>
          <div>)&nbsp;&nbsp;&nbsp;&nbsp;</div>
          <img
            className="allowRight"
            src={`${process.env.PUBLIC_URL}/fifthImage/화살표.png`}
            alt=""
          />
          <div>&nbsp;&nbsp;&nbsp;&nbsp;(</div>
          <div className="fontSize20 marginLeft10px">
            <input
              value={answers['10'][0]}
              onChange={e => handleChange('10', 0, e.target.value)}
              type="text"
              className="averageInput331"
            />
            <div className="divlineCSS7"></div>
            <input
              value={answers['10'][1]}
              onChange={e => handleChange('10', 1, e.target.value)}
              type="text"
              className="averageInput331"
            />
          </div>
          <div className="commaHeight">,</div>
          <div className="fontSize20 marginRighttic">
            <input
              value={answers['10'][2]}
              onChange={e => handleChange('10', 2, e.target.value)}
              type="text"
              className="averageInput331"
            />
            <div className="divlineCSS7"></div>
            <input
              value={answers['10'][3]}
              onChange={e => handleChange('10', 3, e.target.value)}
              type="text"
              className="averageInput331"
            />
          </div>
          <div>)&nbsp;&nbsp;&nbsp;&nbsp;</div>
        </div>
        <div className="flexRow fontSize20 marginTop18 marginbottomtic">
          <p>⑪&nbsp;&nbsp;&nbsp;&nbsp;</p>
          <div>(</div>
          <div className="fontSize20 marginLeft10px">
            <div className="textCenter">1</div>
            <div className="divlineCSS7"></div>
            <div className="textCenter">10</div>
          </div>
          <div className="commaHeight">,</div>
          <div className="fontSize20 marginRighttic">
            <div className="textCenter">13</div>
            <div className="divlineCSS7"></div>
            <div className="textCenter">15</div>
          </div>
          <div>)&nbsp;&nbsp;&nbsp;&nbsp;</div>
          <img
            className="allowRight"
            src={`${process.env.PUBLIC_URL}/fifthImage/화살표.png`}
            alt=""
          />
          <div>&nbsp;&nbsp;&nbsp;&nbsp;(</div>
          <div className="fontSize20 marginLeft10px">
            <input
              value={answers['11'][0]}
              onChange={e => handleChange('11', 0, e.target.value)}
              type="text"
              className="averageInput331"
            />
            <div className="divlineCSS7"></div>
            <input
              value={answers['11'][1]}
              onChange={e => handleChange('11', 1, e.target.value)}
              type="text"
              className="averageInput331"
            />
          </div>
          <div className="commaHeight">,</div>
          <div className="fontSize20 marginRighttic">
            <input
              value={answers['11'][2]}
              onChange={e => handleChange('11', 2, e.target.value)}
              type="text"
              className="averageInput331"
            />
            <div className="divlineCSS7"></div>
            <input
              value={answers['11'][3]}
              onChange={e => handleChange('11', 3, e.target.value)}
              type="text"
              className="averageInput331"
            />
          </div>
          <div>)&nbsp;&nbsp;&nbsp;&nbsp;</div>
        </div>
        <div className="flexRow fontSize20 marginTop18 marginbottomtic">
          <p>⑫&nbsp;&nbsp;&nbsp;&nbsp;</p>
          <div>(</div>
          <div className="fontSize20 marginLeft10px">
            <div className="textCenter">4</div>
            <div className="divlineCSS7"></div>
            <div className="textCenter">9</div>
          </div>
          <div className="commaHeight">,</div>
          <div className="fontSize20 marginRighttic">
            <div className="textCenter">7</div>
            <div className="divlineCSS7"></div>
            <div className="textCenter">15</div>
          </div>
          <div>)&nbsp;&nbsp;&nbsp;&nbsp;</div>
          <img
            className="allowRight"
            src={`${process.env.PUBLIC_URL}/fifthImage/화살표.png`}
            alt=""
          />
          <div>&nbsp;&nbsp;&nbsp;&nbsp;(</div>
          <div className="fontSize20 marginLeft10px">
            <input
              value={answers['12'][0]}
              onChange={e => handleChange('12', 0, e.target.value)}
              type="text"
              className="averageInput331"
            />
            <div className="divlineCSS7"></div>
            <input
              value={answers['12'][1]}
              onChange={e => handleChange('12', 1, e.target.value)}
              type="text"
              className="averageInput331"
            />
          </div>
          <div className="commaHeight">,</div>
          <div className="fontSize20 marginRighttic">
            <input
              value={answers['12'][2]}
              onChange={e => handleChange('12', 2, e.target.value)}
              type="text"
              className="averageInput331"
            />
            <div className="divlineCSS7"></div>
            <input
              value={answers['12'][3]}
              onChange={e => handleChange('12', 3, e.target.value)}
              type="text"
              className="averageInput331"
            />
          </div>
          <div>)&nbsp;&nbsp;&nbsp;&nbsp;</div>
        </div>
        <div className="flexRow fontSize20 marginTop18 marginbottomtic">
          <p>⑬&nbsp;&nbsp;&nbsp;&nbsp;</p>
          <div>(</div>
          <div className="fontSize20 marginLeft10px">
            <div className="textCenter">5</div>
            <div className="divlineCSS7"></div>
            <div className="textCenter">12</div>
          </div>
          <div className="commaHeight">,</div>
          <div className="fontSize20 marginRighttic">
            <div className="textCenter">3</div>
            <div className="divlineCSS7"></div>
            <div className="textCenter">16</div>
          </div>
          <div>)&nbsp;&nbsp;&nbsp;&nbsp;</div>
          <img
            className="allowRight"
            src={`${process.env.PUBLIC_URL}/fifthImage/화살표.png`}
            alt=""
          />
          <div>&nbsp;&nbsp;&nbsp;&nbsp;(</div>
          <div className="fontSize20 marginLeft10px">
            <input
              value={answers['13'][0]}
              onChange={e => handleChange('13', 0, e.target.value)}
              type="text"
              className="averageInput331"
            />
            <div className="divlineCSS7"></div>
            <input
              value={answers['13'][1]}
              onChange={e => handleChange('13', 1, e.target.value)}
              type="text"
              className="averageInput331"
            />
          </div>
          <div className="commaHeight">,</div>
          <div className="fontSize20 marginRighttic">
            <input
              value={answers['13'][2]}
              onChange={e => handleChange('13', 2, e.target.value)}
              type="text"
              className="averageInput331"
            />
            <div className="divlineCSS7"></div>
            <input
              value={answers['13'][3]}
              onChange={e => handleChange('13', 3, e.target.value)}
              type="text"
              className="averageInput331"
            />
          </div>
          <div>)&nbsp;&nbsp;&nbsp;&nbsp;</div>
        </div>
        <div className="flexRow fontSize20 marginTop18 marginbottomtic">
          <p>⑭&nbsp;&nbsp;&nbsp;&nbsp;</p>
          <div>(</div>
          <div className="fontSize20 marginLeft10px">
            <div className="textCenter">9</div>
            <div className="divlineCSS7"></div>
            <div className="textCenter">14</div>
          </div>
          <div className="commaHeight">,</div>
          <div className="fontSize20 marginRighttic">
            <div className="textCenter">9</div>
            <div className="divlineCSS7"></div>
            <div className="textCenter">10</div>
          </div>
          <div>)&nbsp;&nbsp;&nbsp;&nbsp;</div>
          <img
            className="allowRight"
            src={`${process.env.PUBLIC_URL}/fifthImage/화살표.png`}
            alt=""
          />
          <div>&nbsp;&nbsp;&nbsp;&nbsp;(</div>
          <div className="fontSize20 marginLeft10px">
            <input
              value={answers['14'][0]}
              onChange={e => handleChange('14', 0, e.target.value)}
              type="text"
              className="averageInput331"
            />
            <div className="divlineCSS7"></div>
            <input
              value={answers['14'][1]}
              onChange={e => handleChange('14', 1, e.target.value)}
              type="text"
              className="averageInput331"
            />
          </div>
          <div className="commaHeight">,</div>
          <div className="fontSize20 marginRighttic">
            <input
              value={answers['14'][2]}
              onChange={e => handleChange('14', 2, e.target.value)}
              type="text"
              className="averageInput331"
            />
            <div className="divlineCSS7"></div>
            <input
              value={answers['14'][3]}
              onChange={e => handleChange('14', 3, e.target.value)}
              type="text"
              className="averageInput331"
            />
          </div>
          <div>)&nbsp;&nbsp;&nbsp;&nbsp;</div>
        </div>
      </div>
      <ConfirmBtn type={true} day={3} handleGrade={handleGrade} />
    </Styled.OneToNine>
  );
};

export default FifthGrade08;
