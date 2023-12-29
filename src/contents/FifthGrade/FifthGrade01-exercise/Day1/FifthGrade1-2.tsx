import DayLayout from '../../Layout/Day1';
import Styled from '../../style';
import ConfirmBtn from '../../utils/ConfirmBtn';
import { FifthGrade1Day1 } from '../../utils/handleTitle';
import FifthGrade02 from './FifthGrade02';

const FifthGrade12Exercise: React.FC = () => {
  return (
    <DayLayout
      title={FifthGrade1Day1.title}
      subTitle={FifthGrade1Day1.subTitle}
    >
      <Styled.RowWrapBox10>
        <FifthGrade02 />
      </Styled.RowWrapBox10>
      <ConfirmBtn type={true} day={1} />
    </DayLayout>
  );
};

export default FifthGrade12Exercise;
