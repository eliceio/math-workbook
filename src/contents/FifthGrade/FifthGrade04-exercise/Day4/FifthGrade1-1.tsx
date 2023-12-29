import DayLayout from '../../Layout/Day4';
import Styled from '../../style';
import ConfirmBtn from '../../utils/ConfirmBtn';
import { FifthGrade3Day41 } from '../../utils/handleTitle';
import FifthGrade10 from './FifthGrade10';

const FifthGrade11Exercise: React.FC = () => {
  return (
    <DayLayout
      title={FifthGrade3Day41.title}
      subTitle={FifthGrade3Day41.subTitle}
    >
      <Styled.RowWrapBox10>
        <FifthGrade10 />
      </Styled.RowWrapBox10>
      <ConfirmBtn type={true} day={4} />
    </DayLayout>
  );
};

export default FifthGrade11Exercise;
