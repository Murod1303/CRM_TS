import TableTeacher from "@/components/table/teacherTable/TeacherTable";
import {
  TeacherButton,
  TeacherForm,
  TeacherFormTitle,
  TeacherInnerBox,
  TeacherInnerBoxTable,
  TeacherInput,
  TeacherSection,
  TeacherTitle,
  TeacherTitleTable,
  TeacherWrapper,
  TeacherWrapperInnerForm,
} from "./teacher.styled";

const Teachers = () => {
  return (
    <TeacherSection>
      <TeacherWrapper>
        <TeacherWrapperInnerForm>
          <TeacherTitle>Add Teacher</TeacherTitle>
          <TeacherForm>
            <TeacherInnerBox>
              <TeacherFormTitle>Name</TeacherFormTitle>
              <TeacherInput placeholder="Teacher name" type="text" />
            </TeacherInnerBox>
            <TeacherInnerBox>
              <TeacherFormTitle>Surname</TeacherFormTitle>
              <TeacherInput placeholder="Surname" type="text" />
            </TeacherInnerBox>
            <TeacherInnerBox>
              <TeacherFormTitle>Phone Number</TeacherFormTitle>
              <TeacherInput placeholder="Phone number" type="text" />
            </TeacherInnerBox>
            <TeacherInnerBox>
              <TeacherFormTitle>Age</TeacherFormTitle>
              <TeacherInput placeholder="Age" type="text" />
            </TeacherInnerBox>
            <TeacherInnerBox>
              <TeacherFormTitle>Image</TeacherFormTitle>
              <TeacherInput placeholder="Download" type="text" />
            </TeacherInnerBox>
            <TeacherInnerBox>
              <TeacherFormTitle>Subject</TeacherFormTitle>
              <TeacherInput placeholder="Subject" type="text" />
            </TeacherInnerBox>
            <TeacherButton type="button">Add Teacher</TeacherButton>
          </TeacherForm>
        </TeacherWrapperInnerForm>
        <TeacherInnerBoxTable>
          <TeacherTitleTable>Teachers</TeacherTitleTable>
          <TableTeacher />
        </TeacherInnerBoxTable>
      </TeacherWrapper>
    </TeacherSection>
  );
};

export default Teachers;
