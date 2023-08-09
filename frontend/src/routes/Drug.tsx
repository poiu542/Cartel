import React from 'react'
import { LeftPictureCard, RightPictureCard } from '../components/PictureCard'
import NavbarLogin from '../components/NavbarLogin'
import styled from 'styled-components'
import Footer from '../components/Footer'

// Import the font.css file
import '../fonts/font.css'

const Title = styled.h1`
  font-size: 2.5em;
  text-align: center;
  margin-bottom: 30px;
`

const Subtitle = styled.h2`
  font-size: 1.8em;
  text-align: center;
  margin-bottom: 50px;
`

const CardsContainer = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: center;
`

export const Drug = () => {
  return (
    <>
      <NavbarLogin />

      <Title style={{ marginTop: '35px' }}>
        당신은 마약에 대해 얼마나 알고 있으신가요?
      </Title>
      <Title style={{ marginBottom: '100px' }}>마약에 대해 알려드릴게요</Title>
      <img
        src="/image/drugtitle.jpg"
        alt=""
        style={{ width: '100%', marginBottom: '50px', height: '80vh' }}
      />
      {/* <PageContainer> */}
      <Subtitle style={{ fontSize: '40px' }}>마약의 종류</Subtitle>
      <div style={{ backgroundColor: '#f7f9fc' }}>
        <CardsContainer style={{ margin: '0px 200px 0px 200px' }}>
          <LeftPictureCard
            imageSrc="/image/drug1.jpg"
            title="펜타닐"
            subtitle="펜타닐의 부작용 및 위험성"
            content={
              <div>
                <h3>호흡 억제</h3>
                <span>
                  펜타닐을 과도하게 복용하면 호흡이 억제될 수 있으며,
                  중독증상이나 과다복용으로 사망에 이르기도 합니다.
                </span>
                <h3>중독</h3>
                <span>
                  펜타닐은 아주 강력한 약물이기 때문에, 오용하거나 잘못된 용도로
                  사용할 경우 신체적으로나 정신적으로 중독되는 위험이 큽니다.
                </span>
                <h3>심각한 부작용</h3>
                <p>
                  사용자에 따라 펜타닐은 혼란, 혼수, 어지러움, 구토 등의 심각한
                  부작용을 일으킬 수 있습니다.
                </p>
              </div>
            }
          />
        </CardsContainer>
      </div>
      <CardsContainer style={{ margin: '0px 200px 0px 200px' }}>
        <RightPictureCard
          imageSrc="/image/drug2.jpg"
          title="엑스터시"
          subtitle="엑스터시의 부작용"
          content="호흡 억제: 펜타닐을 과도하게 복용하면 호흡이 억제될 수 있으며, 중독증상이나 과다복용으로 사망에 이르기도 합니다.
          중독: 펜타닐은 아주 강력한 약물이기 때문에, 오용하거나 잘못된 용도로 사용할 경우 신체적으로나 정신적으로 중독되는 위험이 큽니다.
          심각한 부작용: 사용자에 따라 펜타닐은 혼란, 혼수, 어지러움, 구토 등의 심각한 부작용을 일으킬 수 있습니다.
          범죄와의 연관성: 펜타닐은 불법 시장에서 장난감이나 약물로 도는 경우가 있으며, 이는 사용자의 건강을 위협할 수 있습니다"
        />
      </CardsContainer>
      <div style={{ backgroundColor: '#f7f9fc' }}>
        <CardsContainer style={{ margin: '0px 200px 0px 200px' }}>
          <LeftPictureCard
            imageSrc="/image/drug3.jpg"
            title="마리화나"
            subtitle="마리화나의 위험성과 부작용"
            content="기억력 및 학습 능력 저하: 마리화나 사용은 기억력 및 학습 능력에 영향을 줄 수 있으며, 집중력이 떨어질 수 있습니다.
            정신 건강 영향: 장기적인 사용이 정신 건강에 영향을 미칠 수 있으며, 불안, 우울증, 정신병 리스크가 증가할 수 있습니다.
            호흡기 문제: 흡연을 통한 마리화나 섭취는 흡연으로 인한 폐 건강 문제를 야기할 수 있습니다.
            심장 건강 영향: 마리화나 사용은 심박수를 증가시킬 수 있고, 심장 건강에 영향을 미칠 수 있습니다.
            동기와 에너지 감소: 일부 사용자는 마리화나 섭취 후 동기와 에너지 감소를 느낄 수 있습니다."
          />
        </CardsContainer>
      </div>
      <CardsContainer style={{ margin: '0px 200px 0px 200px' }}>
        <RightPictureCard
          imageSrc="/image/drug4.jpg"
          title="필로폰"
          subtitle="필로폰의 위험성과 부작용"
          content="중독성: 메스암페타민은 강력한 중독성을 가지며, 사용자는 물리적 및 정신적 중독에 빠질 수 있습니다.
          신체 건강 문제: 장기 사용 시 심혈관 및 호흡기계 문제, 체중 감소, 수면 부족, 암 등과 관련된 위험이 증가할 수 있습니다.
          정신 건강 문제: 정신적으로 불안, 공황, 편집증 등의 증상이 나타날 수 있으며, 불안, 우울, 헷갈림 등의 정신적인 증상도 나타날 수 있습니다.
          사회적 문제: 사용자는 가족, 친구, 직장 등의 관계에 영향을 미칠 수 있습니다. 범죄와 법적 문제도 발생할 수 있습니다."
        />
      </CardsContainer>
      <div style={{ backgroundColor: '#f7f9fc' }}>
        <CardsContainer style={{ margin: '0px 200px 0px 200px' }}>
          <LeftPictureCard
            imageSrc="/image/drug5.jpg"
            title="헤로인"
            subtitle="헤로인의 위험성과 부작용"
            content="신체 건강 문제: 헤로인은 강력한 중독성을 가지며, 신체 건강에 심각한 영향을 미칠 수 있습니다. 주사를 통해 사용할 경우 감염 및 각종 신체 건강 문제가 발생할 수 있습니다.
            정신 건강 문제: 정신적으로 불안, 우울, 감정 변동 등을 유발할 수 있습니다. 헤로인 중독자들은 정서적인 안정을 찾기 위해 약물에 의존하기 쉽습니다.
            사회적 문제: 헤로인 중독은 가족, 사회 관계, 직장 등을 파괴할 수 있으며, 범죄와 법적 문제를 유발할 수 있습니다."
          />
        </CardsContainer>
      </div>
      <CardsContainer style={{ margin: '0px 200px 0px 200px' }}>
        <RightPictureCard
          imageSrc="/image/drug6.jpg"
          title="프로포폴"
          subtitle="프로포폴의 위험성과 부작용"
          content="호흡 억제: 과도한 양의 프로포폴 사용은 호흡 억제를 유발할 수 있어 호흡기능을 위협할 수 있습니다.
          혼수 상태: 높은 농도의 프로포폴 사용은 혼수 상태로 이어질 수 있습니다.
          혈압 강하: 혈압을 낮추는 효과가 있어 혈압이 낮은 환자들에게는 주의가 필요합니다.
          알레르기 반응: 드물게 알레르기 반응이 나타날 수 있습니다.
          경련: 일부 환자에서 경련 발작을 유발할 수 있습니다.
          선천성 포르피린 증후군: 특정 유전적인 조건을 가진 환자들에게는 위험한 조건을 악화시킬 수 있습니다.
          약물 중독: 프로포폴 남용이나 오용은 중독 및 정신적 문제를 유발할 수 있습니다."
        />
      </CardsContainer>
      {/* </CardsContainer> */}
      <img
        src="/image/effect.jpg"
        alt=""
        style={{ width: '100%', marginBottom: '50px', height: '90vh' }}
      />

      {/* </PageContainer> */}
      <Footer />
    </>
  )
}
