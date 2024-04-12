import TableSubject from "@/components/tableSubject/TableSubject";
import {
  SubjectButton,
  SubjectForm,
  SubjectFormTitle,
  SubjectInnerBox,
  SubjectInput,
  SubjectSection,
  SubjectTitle,
  SubjectTitleTable,
  SubjectWrapper,
  SubjectWrapperInnerForm,
} from "./subject.styled";

const Subjects = () => {
  return (
    <SubjectSection>
      <SubjectWrapper>
        <SubjectWrapperInnerForm>
          <SubjectTitle>Add Subject</SubjectTitle>
          <SubjectForm>
            <SubjectInnerBox>
              <SubjectFormTitle>Subject Name</SubjectFormTitle>
              <SubjectInput placeholder="Subject name" type="text" />
            </SubjectInnerBox>
            <SubjectButton type="button">Add Subject</SubjectButton>
          </SubjectForm>
        </SubjectWrapperInnerForm>
        <SubjectInnerBox>
          <SubjectTitleTable>Subjects</SubjectTitleTable>
          <TableSubject />
        </SubjectInnerBox>
      </SubjectWrapper>
    </SubjectSection>
  );
};

export default Subjects;
