import { Data31Quiz as QuizData } from '../../Data/Book1';
import DayLayout from '../../Layout/Day3';
import Styled from '../../style';
import ConfirmBtn from '../../utils/ConfirmBtn';
import { ThirdGrade1Day1 } from '../../utils/handleTitle';
import ExampleQuiz from './Example3-1';
import SingleQuiz from './Single3-1';

import type { Data31QuizProps as DataProps } from '../../Type/Type1';

const ThirdGrade11Exercise: React.FC = () => {
  return (
    <DayLayout
      title={ThirdGrade1Day1.title}
      subTitle={ThirdGrade1Day1.subTitle}
    >
      <Styled.PaddingBox2>
        <Styled.ColGapBox gap={3.75}>
          <Styled.RowWrapBox6>
            <ExampleQuiz />
            {QuizData.map((item: DataProps, idx) => (
              <SingleQuiz
                key={idx}
                id={item.id}
                quiz1={item.quiz1}
                quiz2={item.quiz2}
                quiz3={item.quiz3}
                quiz4={item.quiz4}
                quiz5={item.quiz5}
                quiz6={item.quiz6}
                quiz7={item.quiz7}
                quiz8={item.quiz8}
                quiz9={item.quiz9}
                quiz10={item.quiz10}
              />
            ))}
          </Styled.RowWrapBox6>
          <ConfirmBtn type={true} day={3} />
        </Styled.ColGapBox>
      </Styled.PaddingBox2>
    </DayLayout>
  );
};

export default ThirdGrade11Exercise;
