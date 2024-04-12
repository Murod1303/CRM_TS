import styled from "styled-components";

export const HeaderStyled = styled.header``;
export const HeaderWrapperStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 20px 32px;
  background-color: #fff;
`;
export const HeaderInnerStyled = styled(HeaderWrapperStyled)`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 0;
`;
export const HeaderTitleStyled = styled.h3`
  color: #0061f7;
  font-size: 36px;
  font-weight: 700;
  line-height: normal;
  letter-spacing: 0.36px;
`;
export const HeaderAvatarImg = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 42px;
  height: 42px;
  color: #5a6acf;
  background-color: #ffe6cc;
  border-radius: 100%;
`;
export const HeaderAvatarName = styled.p`
  margin-left: 5px;
  color: #5a6acf;
  font-size: 16px;
  font-weight: 600;
  line-height: 13px;
  letter-spacing: 0.5px;
`;
export const HeaderSelectArr = styled.span`
  width: 3px;
  height: 26px;
  display: inline-block;
  border-radius: 20px;
  background-color: #5a6acf;
`;
export const HeaderButtonWrapper = styled.button`
  display: flex;
  align-items: center;
  gap: 10px;
  background-color: transparent;
  border: none;
`;
export const HeaderNoteStyled = styled(HeaderButtonWrapper)`
  display: inline-block;
  margin-left: 18px;
  & svg {
    width: 22px;
    height: 22px;
  }
`;
