import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import { styled } from "styled-components";
export const LogoDiv = styled(NavLink)`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 12px;
  border-bottom: 2px solid #c8cbd9;
  margin-bottom: 20px;
`;

export const DashboardStyled = styled.section`
  width: 20%;
  background-color: #2f49d1;
  height: 100vh;
  overflow-y: scroll;
`;
export const DashboardBuuton = styled(motion.button)`
  display: inline-block;
  background-color: transparent;
  border: none;
`;
export const DashboardNav = styled.nav`
  padding: 20px 0;
`;
export const DashboardMenu = styled.strong`
  display: inline-block;
  margin-bottom: 12px;
  padding-left: 20px;
  color: #fff;
  font-family: Poppins;
  font-size: 16px;
  line-height: 11px;
  font-weight: 600;
  letter-spacing: 1px;
`;
export const DashboardList = styled.div``;
export const DashboardActiveSpan = styled.span`
  display: block;
  width: 4px;
  height: 42px;
  margin: 5px 0;
  border-radius: 8px;
  background-color: transparent;
`;

export const DashboardItemsLink = styled(NavLink)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-right: 5px;
  padding-left: 20px;
  transition: background-color 0.3s linear;
  &:hover {
    background-color: #01265f;
  }
  &:hover {
    ${DashboardActiveSpan} {
      background-color: #fff;
    }
  }
  &.active {
    ${DashboardActiveSpan} {
      background-color: #fff;
    }
  }
`;
export const DashboardItemWrapper = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;
export const DashboardText = styled.span`
  display: inline-block;
  width: 100%;
  padding: 20px 20px;
  color: #fff;
  font-family: Poppins;
  font-size: 17px;
  line-height: 20px;
  letter-spacing: 0.5px;
`;
