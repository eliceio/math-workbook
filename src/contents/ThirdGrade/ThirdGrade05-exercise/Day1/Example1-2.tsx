import Styled from '../../style';

const Example12 = () => {
  return (
    <Styled.ExampleBox4>
      <Styled.InputWrapper>
        <div>17 × 2</div>
        <div>=</div>
        <Styled.InputBox1 placeholder="34" />
        <Styled.AngleShapeBox>
          <Styled.AngleLineLeft />
          <Styled.AngleShapeLeft />
        </Styled.AngleShapeBox>
        <Styled.InnerColBox>
          <Styled.InputWrapper3>
            <Styled.InputBox1 placeholder="34" />
            <div>÷</div>
            <Styled.InputBox1 placeholder="2" />
            <div>=</div>
            <Styled.InputBox1 placeholder="17" />
          </Styled.InputWrapper3>
          <Styled.InputWrapper3>
            <Styled.InputBox1 placeholder="34" />
            <div>÷</div>
            <Styled.InputBox1 placeholder="17" />
            <div>=</div>
            <Styled.InputBox1 placeholder="2" />
          </Styled.InputWrapper3>
        </Styled.InnerColBox>
      </Styled.InputWrapper>
    </Styled.ExampleBox4>
  );
};

export default Example12;
