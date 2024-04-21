import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  // getPaginationRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { useState } from "react";
import { LuClipboardEdit } from "react-icons/lu";
import { MdDeleteForever } from "react-icons/md";
import {
  PAginationTextWrapper,
  PaginationButton,
  PaginationOption,
  PaginationSelect,
  PaginationText,
  PaginationWrapper,
  TBodyStyled,
  THeadStyled,
  TableStyled,
  TableWrapper,
  TdStyled,
  ThStyled,
  TrStyled,
} from "../tableSubject/tableSubject.styled";
import { NextIcon, PrevIcon } from "../../../../public/icons/Icons";
import { Teacher } from "@/types/types";

const Mock_data: {
  id: number;
  first_name: string;
  edit: JSX.Element;
  delete: JSX.Element;
}[] = [
  {
    id: 3,
    first_name: "Siward",
    edit: <LuClipboardEdit />,
    delete: <MdDeleteForever />,
  },
  {
    id: 3,
    first_name: "Siward",
    edit: <LuClipboardEdit />,
    delete: <MdDeleteForever />,
  },
  {
    id: 3,
    first_name: "Siward",
    edit: <LuClipboardEdit />,
    delete: <MdDeleteForever />,
  },
];

const TableTeacher = () => {
  const columnHelper = createColumnHelper<Teacher>();

  const columns = [
    columnHelper.accessor("numberTeacher", {
      id: "numberTeacher",
      cell: (info) => <span>{info.row.index + 1}</span>,
      header: "№",
    }),
    columnHelper.accessor("fullName", {
      id: "fullName",
      cell: (info) => <span>{info.getValue()}</span>,
      header: "Full name",
    }),
    columnHelper.accessor("phoneNumber", {
      cell: () => {},
      header: "Number",
    }),
    columnHelper.accessor("subject", {
      cell: () => {},
      header: "Subject",
    }),
    columnHelper.accessor("edit", {
      cell: () => <LuClipboardEdit />,
      header: "Edit",
    }),
    columnHelper.accessor("delete", {
      cell: () => <MdDeleteForever fill="red" />,
      header: "Delete",
    }),
  ];

  const [data] = useState(() => [...Mock_data]);
  // const [globalFilter, setGlobalFilter] = useState("");

  const table = useReactTable({
    data,
    columns,
    state: {
      // globalFilter,
    },
    getFilteredRowModel: getFilteredRowModel(),
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
  });
  console.log(table.getColumn("editedText")?.columnDef);

  return (
    <div className="">
      <TableWrapper>
        <TableStyled>
          <THeadStyled>
            {table.getHeaderGroups().map((headerGroup) => (
              <TrStyled key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <ThStyled key={header.id}>
                    {flexRender(
                      header.column.columnDef.header,
                      header.getContext()
                    )}
                  </ThStyled>
                ))}
              </TrStyled>
            ))}
          </THeadStyled>
          <TBodyStyled>
            {table.getRowModel().rows.length ? (
              table.getRowModel().rows.map((row) => (
                <TrStyled key={row.id}>
                  {row.getVisibleCells().map((cell) => (
                    <TdStyled
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      key={cell.id}
                    >
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TdStyled>
                  ))}
                </TrStyled>
              ))
            ) : (
              <tr className="text-center h-32">
                <td colSpan={12}>No Recoard Found!</td>
              </tr>
            )}
          </TBodyStyled>
        </TableStyled>
      </TableWrapper>
      <PaginationWrapper>
        <PaginationButton
          onClick={() => {
            table.previousPage();
          }}
          disabled={!table.getCanPreviousPage()}
          style={!table.getCanPreviousPage() ? { backgroundColor: "gray" } : {}}
        >
          <PrevIcon />
        </PaginationButton>
        <PAginationTextWrapper>
          <PaginationText>
            {table.getState().pagination.pageIndex + 1} of{" "}
            {table.getPageCount()}
          </PaginationText>
        </PAginationTextWrapper>
        <PaginationButton
          onClick={() => {
            table.nextPage();
          }}
          disabled={!table.getCanNextPage()}
          style={!table.getCanNextPage() ? { backgroundColor: "gray" } : {}}
        >
          <NextIcon />
        </PaginationButton>
        <PaginationSelect
          value={table.getState().pagination.pageSize}
          onChange={(e) => {
            table.setPageSize(Number(e.target.value));
          }}
        >
          {[10, 5].map((pageSize) => (
            <PaginationOption key={pageSize} value={pageSize}>
              Show {pageSize}
            </PaginationOption>
          ))}
        </PaginationSelect>
      </PaginationWrapper>
    </div>
  );
};

export default TableTeacher;
