import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  align-self: center;
  width: 100%;
  background-color: #104B84;
`;

export const AnimationView = styled.View`
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 140px;
  height: 180px;
`;

export const DescriptionView = styled.View`
  flex: 1;
  justify-content: center;
  padding-bottom: 32px;
  padding-left: 32px;
  padding-right: 32px;
`;

export const IntroTitle = styled.Text`
  font-size: 27px;
  text-align: center;
  padding: 1px;
  line-height: 30;
  color: #ffffff;
`;

export const IntroText = styled.Text`
  font-size: 18px;
  font-weight: 500;
  text-align: center;
  padding-top: 32px;
  line-height: 26;
  color: #ffffff;
`;
