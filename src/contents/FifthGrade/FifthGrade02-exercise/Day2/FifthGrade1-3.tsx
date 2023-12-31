import DayLayout from '../../Layout/Day2';
import ConfirmBtn from '../../utils/ConfirmBtn';
import { FifthGrade2Day22 } from '../../utils/handleTitle';
import FifthGrade06 from './FifthGrade06';

const FifthGrade13Exercise: React.FC = () => {
  return (
    <DayLayout
      title={FifthGrade2Day22.title}
      subTitle={FifthGrade2Day22.subTitle}
    >
      <FifthGrade06 />
      <ConfirmBtn type={true} day={2} />
    </DayLayout>
  );
};

export default FifthGrade13Exercise;
