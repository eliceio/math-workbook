import Styled from '../../style';

import img from '../../Image/2-2-1.png';

const Example21 = () => {
  return (
    <Styled.ExampleBox9>
      <Styled.ColGapBox gap={1.5}>
        <Styled.ImgSize6 src={img} alt="" />
        <Styled.RowBox12>
          <Styled.InputWrapper3>
            <div>14 × 2 = (</div>
            <Styled.InputBox1 />
            <div>× 2 ) + (</div>
            <Styled.InputBox3 />
            <div>× 2 ) =</div>
            <Styled.InputBox1 />
          </Styled.InputWrapper3>
        </Styled.RowBox12>
      </Styled.ColGapBox>
    </Styled.ExampleBox9>
  );
};

export default Example21;
