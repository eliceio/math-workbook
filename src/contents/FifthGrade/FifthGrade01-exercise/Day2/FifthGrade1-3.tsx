import DayLayout from '../../Layout/Day2';
import Styled from '../../style';
import { FifthGrade1Day2 } from '../../utils/handleTitle';
import FifthGrade06 from './FifthGrade06';

const FifthGrade13Exercise: React.FC = () => {
  return (
    <DayLayout
      title={FifthGrade1Day2.title}
      subTitle={FifthGrade1Day2.subTitle}
    >
      <Styled.RowWrapBox10>
        <FifthGrade06 />
      </Styled.RowWrapBox10>
    </DayLayout>
  );
};

export default FifthGrade13Exercise;
