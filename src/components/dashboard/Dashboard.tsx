import {
  GamburgerMenu,
  GroupIcon,
  HomeIcon,
  LogoIcon,
  LogoIconCRM,
  StudentIcon,
  SubjectIcon,
  TeacherIcon,
} from "../../../public/icons/Icons";
import {
  LogoDiv,
  DashboardStyled,
  DashboardNav,
  DashboardMenu,
  DashboardList,
  DashboardActiveSpan,
  DashboardItemWrapper,
  DashboardBuuton,
  DashboardText,
  DashboardItemsLink,
} from "./Dashboard.styled";
const Dashboard = () => {
  return (
    <DashboardStyled>
      <LogoDiv to={"/"}>
        <LogoIcon />
        <LogoIconCRM />
        <DashboardBuuton type="button">
          <GamburgerMenu />
        </DashboardBuuton>
      </LogoDiv>
      <DashboardNav>
        <DashboardMenu>Menu</DashboardMenu>
        <DashboardList>
          <DashboardItemsLink
            to={"/"}
            style={({ isActive }) => {
              return { backgroundColor: isActive ? "#01265f" : "" };
            }}
          >
            <DashboardItemWrapper
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <HomeIcon />
              <DashboardText>Dashboard</DashboardText>
            </DashboardItemWrapper>
            <DashboardActiveSpan></DashboardActiveSpan>
          </DashboardItemsLink>
          <DashboardItemsLink
            to={"/student"}
            style={({ isActive }) => {
              return { backgroundColor: isActive ? "#01265f" : "" };
            }}
          >
            <DashboardItemWrapper
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <StudentIcon />
              <DashboardText>Students</DashboardText>
            </DashboardItemWrapper>
            <DashboardActiveSpan></DashboardActiveSpan>
          </DashboardItemsLink>
          <DashboardItemsLink
            to={"/teacher"}
            style={({ isActive }) => {
              return { backgroundColor: isActive ? "#01265f" : "" };
            }}
          >
            <DashboardItemWrapper
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <TeacherIcon />
              <DashboardText>Teachers</DashboardText>
            </DashboardItemWrapper>
            <DashboardActiveSpan></DashboardActiveSpan>
          </DashboardItemsLink>
          <DashboardItemsLink
            to={"/group"}
            style={({ isActive }) => {
              return { backgroundColor: isActive ? "#01265f" : "" };
            }}
          >
            <DashboardItemWrapper
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <GroupIcon />
              <DashboardText>Groups</DashboardText>
            </DashboardItemWrapper>
            <DashboardActiveSpan></DashboardActiveSpan>
          </DashboardItemsLink>
          <DashboardItemsLink
            to={"/subject"}
            style={({ isActive }) => {
              return { backgroundColor: isActive ? "#01265f" : "" };
            }}
          >
            <DashboardItemWrapper
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <SubjectIcon />
              <DashboardText>Subjects</DashboardText>
            </DashboardItemWrapper>
            <DashboardActiveSpan className="NavlinkActiveSpan"></DashboardActiveSpan>
          </DashboardItemsLink>
        </DashboardList>
      </DashboardNav>
    </DashboardStyled>
  );
};

export default Dashboard;
