import DayLayout from '../../Layout/Day5';
import Styled from '../../style';
import ConfirmBtn from '../../utils/ConfirmBtn';
import { FifthGrade3Day53 } from '../../utils/handleTitle';
import FifthGrade14 from './FifthGrade14';
import FifthGrade15 from './FifthGrade15';

const FifthGrade13Exercise: React.FC = () => {
  return (
    <DayLayout
      title={FifthGrade3Day53.title}
      subTitle={FifthGrade3Day53.subTitle}
    >
      <FifthGrade15 />
      <ConfirmBtn type={true} day={5} />
    </DayLayout>
  );
};

export default FifthGrade13Exercise;
