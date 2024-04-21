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

export const PaginationWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 10px;
  padding-right: 10px;
  margin-top: 10px;
`;
export const PaginationButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #2f49d1;
  border: none;
  border-radius: 4px;
`;
export const PaginationSelect = styled.select`
  height: 100%;
  padding: 7px;
  border-radius: 10px;

  color: #28293d;
  text-align: center;
  font-size: 14px;
  font-weight: 500;
  line-height: 150%;
  letter-spacing: 0.2px;
`;
export const PaginationOption = styled.option`
  color: #28293d;
  text-align: left;
  font-size: 13px;
  font-weight: 500;
  line-height: 150%;
  letter-spacing: 0.2px;
`;
export const PaginationText = styled.strong`
  color: #000;
  text-align: center;
  font-size: 20px;
  font-weight: 700;
  line-height: 150%;
  letter-spacing: 0.2px;
`;
export const PAginationTextWrapper = styled.div``;
