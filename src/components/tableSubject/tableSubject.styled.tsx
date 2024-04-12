import { motion } from "framer-motion";
import styled from "styled-components";

export const TableWrapper = styled.div`
  height: 300px;
  overflow-y: scroll;
  border: 2px solid #2f49d1;
  border-radius: 15px;
`;

export const TableStyled = styled.table`
  width: 100%;
  border-collapse: collapse;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  overflow: hidden;
`;
export const THeadStyled = styled.thead`
  & th {
    background-color: #2f49d1;
  }
`;
export const TBodyStyled = styled.tbody`
  & tr:hover {
    background-color: #5545454b;
  }
`;
export const TdStyled = styled(motion.td)`
  padding: 15px;
  /* background-color: rgba(255, 255, 255, 0.2); */
  color: #000;
`;
export const ThStyled = styled.th`
  padding: 15px;
  /* background-color: rgba(255, 255, 255, 0.2); */
  color: #000;
  text-align: left;
  font-weight: 600;
`;
export const TrStyled = styled.tr``;
