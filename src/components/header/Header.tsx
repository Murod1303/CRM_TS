import { Notefication } from "../../../public/icons/Icons";
import {
  HeaderAvatarImg,
  HeaderAvatarName,
  HeaderButtonWrapper,
  HeaderInnerStyled,
  HeaderNoteStyled,
  HeaderSelectArr,
  HeaderStyled,
  HeaderTitleStyled,
  HeaderWrapperStyled,
} from "./header.styled";

const Header = () => {
  return (
    <HeaderStyled>
      <HeaderWrapperStyled>
        <HeaderTitleStyled>Header</HeaderTitleStyled>
        <HeaderInnerStyled>
          <HeaderInnerStyled>
            <HeaderAvatarImg>MS</HeaderAvatarImg>
            <HeaderButtonWrapper>
              <HeaderAvatarName>Murod Shernazaroff</HeaderAvatarName>
              <HeaderSelectArr></HeaderSelectArr>
            </HeaderButtonWrapper>
          </HeaderInnerStyled>
          <HeaderNoteStyled type="button">
            <Notefication />
          </HeaderNoteStyled>
        </HeaderInnerStyled>
      </HeaderWrapperStyled>
    </HeaderStyled>
  );
};

export default Header;
