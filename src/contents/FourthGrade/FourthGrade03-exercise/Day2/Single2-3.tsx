import Styled from '../../style';

import img1 from '../../Image/3-2-3_2.png'; //초록네모
import img2 from '../../Image/3-2-3_3.png'; //빨간삼각형
import img3 from '../../Image/3-2-3_4.png'; //주황삼각형
import img4 from '../../Image/3-2-3_5.png'; //노랑삼각형
import img5 from '../../Image/3-2-3_6.png'; //파란삼각형
import img6 from '../../Image/3-2-3_7.png'; //초록사다리꼴
import img7 from '../../Image/3-2-3_8.png'; //보라삼각형

const Single21 = () => {
  const imgArray = [
    [img1, img2],
    [img3, img4],
    [img3, img5],
    [img6, img7],
    [img2, img3],
    [img5, img6],
  ];
  const idArray = ['①', '②', '③', '④', '⑤', '⑥'];
  return (
    <Styled.RowWrapBox>
      {idArray.map((item: string, idx: number) => (
        <Styled.RowBox5>
          <div>{item}</div>
          <Styled.SingleWrapper7>
            <Styled.GapRowBox2 gap={1.2}>
              <Styled.SetCenter>
                <Styled.ImgSize6 src={imgArray[idx][0]} />
              </Styled.SetCenter>
              <div>은</div>
              <Styled.SetCenter>
                <Styled.ImgSize6 src={imgArray[idx][1]} />
              </Styled.SetCenter>
              <div>의</div>
              {/* 분수 위치 */}
              <Styled.ColGapBox gap={0.1}>
                <Styled.FractUnderLine>
                  <Styled.InputBox3 />
                </Styled.FractUnderLine>
                <Styled.InputBox3 />
              </Styled.ColGapBox>
            </Styled.GapRowBox2>
          </Styled.SingleWrapper7>
        </Styled.RowBox5>
      ))}
    </Styled.RowWrapBox>
  );
};

export default Single21;
