import styled from 'styled-components';

export const Wrapper = styled.div`
  background-color: #D9EBF3;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 10px 10px 0 10px;

  @media screen and (min-width: 950px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 0;
  }
`;

export const TitleContainer = styled.div`
  background-color: #D9EBF3;
  max-width: 510px;
  text-align: center;

  @media screen and (min-width: 950px) {
    text-align: left;
    margin-left: 95px;
  }
`;

export const Title = styled.div`
  color: #141F45;
  font-family: Roboto;
  font-weight: 700;
  font-size: 48px;
  line-height: 56.25px;
  letter-spacing: 2px;
  margin-bottom: 10px;
`;

export const SubHeading = styled.div`
  color: #676767;
  font-family: Roboto;
  font-weight: 400;
  font-size: 18px;
  line-height: 29px;
  letter-spacing: 2px;
  margin-bottom: 20px;
`;

export const Image = styled.img`
  width: 268px;
  height: auto;

  @media screen and (min-width: 950px) {
    margin-right: 50px;
  }
`;
  