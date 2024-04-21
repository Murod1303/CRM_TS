import React from "react";

export type Subjects = {
  id: number;
  numberSubject: string;
  subject: string;
  edit: React.JSX.Element;
  delete: React.JSX.Element;
};
export type Teacher = {
  id: number;
  numberTeacher: string;
  fullName: string;
  phoneNumber: string;
  subject: string;
  age: string;
  edit: React.JSX.Element;
  delete: React.JSX.Element;
};
