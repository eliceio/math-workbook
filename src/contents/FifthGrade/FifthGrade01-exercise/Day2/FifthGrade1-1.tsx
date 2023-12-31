import DayLayout from '../../Layout/Day2';
import Styled from '../../style';
import ConfirmBtn from '../../utils/ConfirmBtn';
import { FifthGrade1Day2 } from '../../utils/handleTitle';
import FifthGrade04 from './FifthGrade04';

const FifthGrade11Exercise: React.FC = () => {
  return (
    <DayLayout
      title={FifthGrade1Day2.title}
      subTitle={FifthGrade1Day2.subTitle}
    >
      <FifthGrade04 />
      <ConfirmBtn type={true} day={2} />
    </DayLayout>
  );
};

export default FifthGrade11Exercise;
