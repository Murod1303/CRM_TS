import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  // getPaginationRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { useState } from "react";
import { LuClipboardEdit } from "react-icons/lu";
import { MdDeleteForever } from "react-icons/md";
import {
  TBodyStyled,
  THeadStyled,
  TableStyled,
  TableWrapper,
  TdStyled,
  ThStyled,
  TrStyled,
} from "./tableSubject.styled";

const Mock_data: {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  gender: string;
  university: string;
  edit: JSX.Element;
  delete: JSX.Element;
}[] = [
  {
    id: 1,
    first_name: "Millicent",
    last_name: "Whatham",
    email: "mwhatham0@comsenz.com",
    gender: "Female",
    university: "Samarkand State University",
    edit: <LuClipboardEdit />,
    delete: <MdDeleteForever />,
  },
  {
    id: 2,
    first_name: "Siward",
    last_name: "Amberger",
    email: "samberger1@behance.net",
    gender: "Male",
    university: "Institute of Industrial Electronics Engineering",
    edit: <LuClipboardEdit />,
    delete: <MdDeleteForever />,
  },
  {
    id: 3,
    first_name: "Siward",
    last_name: "Amberger",
    email: "samberger1@behance.net",
    gender: "Male",
    university: "Institute of Industrial Electronics Engineering",
    edit: <LuClipboardEdit />,
    delete: <MdDeleteForever />,
  },
  {
    id: 3,
    first_name: "Siward",
    last_name: "Amberger",
    email: "samberger1@behance.net",
    gender: "Male",
    university: "Institute of Industrial Electronics Engineering",
    edit: <LuClipboardEdit />,
    delete: <MdDeleteForever />,
  },
  {
    id: 3,
    first_name: "Siward",
    last_name: "Amberger",
    email: "samberger1@behance.net",
    gender: "Male",
    university: "Institute of Industrial Electronics Engineering",
    edit: <LuClipboardEdit />,
    delete: <MdDeleteForever />,
  },
  {
    id: 3,
    first_name: "Siward",
    last_name: "Amberger",
    email: "samberger1@behance.net",
    gender: "Male",
    university: "Institute of Industrial Electronics Engineering",
    edit: <LuClipboardEdit />,
    delete: <MdDeleteForever />,
  },
  {
    id: 3,
    first_name: "Siward",
    last_name: "Amberger",
    email: "samberger1@behance.net",
    gender: "Male",
    university: "Institute of Industrial Electronics Engineering",
    edit: <LuClipboardEdit />,
    delete: <MdDeleteForever />,
  },
  {
    id: 3,
    first_name: "Siward",
    last_name: "Amberger",
    email: "samberger1@behance.net",
    gender: "Male",
    university: "Institute of Industrial Electronics Engineering",
    edit: <LuClipboardEdit />,
    delete: <MdDeleteForever />,
  },
  {
    id: 3,
    first_name: "Siward",
    last_name: "Amberger",
    email: "samberger1@behance.net",
    gender: "Male",
    university: "Institute of Industrial Electronics Engineering",
    edit: <LuClipboardEdit />,
    delete: <MdDeleteForever />,
  },
  {
    id: 3,
    first_name: "Siward",
    last_name: "Amberger",
    email: "samberger1@behance.net",
    gender: "Male",
    university: "Institute of Industrial Electronics Engineering",
    edit: <LuClipboardEdit />,
    delete: <MdDeleteForever />,
  },
  {
    id: 3,
    first_name: "Siward",
    last_name: "Amberger",
    email: "samberger1@behance.net",
    gender: "Male",
    university: "Institute of Industrial Electronics Engineering",
    edit: <LuClipboardEdit />,
    delete: <MdDeleteForever />,
  },
];
console.log(Mock_data);

const TableSubject = () => {
  const columnHelper = createColumnHelper();

  const columns = [
    columnHelper.accessor("", {
      id: "№",
      cell: (info) => <span>{info.row.index + 1}</span>,
      header: "№",
    }),
    columnHelper.accessor("first_name", {
      cell: (info) => <span>{info.getValue()}</span>,
      header: "Subject",
    }),
    columnHelper.accessor("edit", {
      cell: (info) => <span>{info.getValue()}</span>,
      header: "Edit",
    }),
    columnHelper.accessor("delete", {
      cell: (info) => <span>{info.getValue()}</span>,
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
    // getPaginationRowModel: getPaginationRowModel(),
  });
  return (
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
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
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
  );
};

export default TableSubject;
