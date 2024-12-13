import * as React from "react"
import {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  VisibilityState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table"
import { ArrowDown, ArrowUp } from "lucide-react"
import Button from "./Button"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { tableData } from "@/constants"
import { addCircle } from "@/assets"
import ActionBtn from "./ActionBtn"

declare interface TableProps {
  id: number;
  academic_level: string;
  rate: number;
  date_created: string;
  date_updated: string;
};

export const columns: ColumnDef<TableProps>[] = [
  {
    accessorKey: "id",
    header: () => <h2 className="row-header">S/N</h2>,
    cell: ({ row }) => <div className="capitalize table-text">{row.getValue("id")}</div>,
  },
  {
    accessorKey: "academic_level",
    header: () => <h2 className="row-header">Academic Levels</h2>,
    cell: ({ row }) => <div className="capitalize table-text">{row.getValue("academic_level")}</div>,
  },
  {
    accessorKey: "rate",
    header: ({ column }) => (
      <button className="row-header flex" onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>
        Rate {column.getIsSorted() === "asc" ? <ArrowDown /> : <ArrowUp />}
      </button>
    ),
    cell: ({ row }) => <div className="table-text">{row.getValue("rate")}</div>,
  },
  {
    accessorKey: "date_created",
    header: () => <h2 className="row-header">Date Created</h2>,
    cell: ({ row }) => <div className="capitalize table-text">{row.getValue("date_created")}</div>,
  },
  {
    accessorKey: "date_updated",
    header: () => <h2 className="row-header">Date Updated</h2>,
    cell: ({ row }) => <div className="capitalize table-text">{row.getValue("date_updated")}</div>,
  },
  {
    accessorKey: "actions",
    header: "",
    cell: () => (
      <div className="flex">
        <ActionBtn action="Edit" />
        <ActionBtn action="Delete" />
      </div>
    ),
  },
]

export function SearchTable() {
  const [sorting, setSorting] = React.useState<SortingState>([])
  const [globalFilter, setGlobalFilter] = React.useState<string>("") // State for the global search term
  const [columnVisibility, setColumnVisibility] = React.useState<VisibilityState>({})
  const [rowSelection, setRowSelection] = React.useState({})

  const table = useReactTable({
    data: tableData,
    columns,
    onSortingChange: setSorting,
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    state: {
      sorting,
      globalFilter, // Pass the global filter state to the table
      columnVisibility,
      rowSelection,
    },
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    globalFilterFn: (row, columnId, filterValue) => {
      // Implement filtering logic across multiple columns
      const rowValue = row.getValue(columnId) as string;
      if (rowValue == null) return false;
      return rowValue.toString().toLowerCase().includes(filterValue.toLowerCase());
    },
  })

  // Update global filter when the input changes
  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setGlobalFilter(event.target.value);
  }

  return (
    <div className="w-full">
      <div className="md:absolute md:top-[38%] md:right-[10%]">
        <div className="h-10 border border-grey rounded-full w-full md:max-w-[318px] lg:w-[318px]">
          <Input
            placeholder="Search Academic Level, Rate, Date"
            value={globalFilter}
            onChange={handleSearchChange}
            className="max-w-sm"
          />
        </div>
      </div>

      <Table>
        <TableHeader className="bg-[#fefeff] !rounded-2xl h-[72px]">
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <TableHead key={header.id}>
                  {header.isPlaceholder
                    ? null
                    : flexRender(header.column.columnDef.header, header.getContext())}
                </TableHead>
              ))}
            </TableRow>
          ))}
        </TableHeader>
        <TableBody>
          {table.getRowModel().rows?.length ? (
            table.getRowModel().rows.map((row) => (
              <TableRow key={row.id} data-state={row.getIsSelected() && "selected"}>
                {row.getVisibleCells().map((cell) => (
                  <TableCell key={cell.id}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </TableCell>
                ))}
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={columns.length} className="h-24 text-center">
                No results.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>



      <div className="flex items-center justify-between mt-6 ">
        <Button
        icon ={addCircle}
        >
          Add Level Rate
        </Button>
        {/* <div className="flex-1 text-sm text-muted-foreground">
          {table.getFilteredSelectedRowModel().rows.length} of{" "}
          {table.getFilteredRowModel().rows.length} row(s) selected.
        </div> */}
        <div className="h-12 w-[186px] p-2 justify-between flex items-center border-grey border-[0.5px] rounded-[8px]">
          <input 
          placeholder="10%"
          defaultValue="10%"
          className="border-grey border-[0.5px] w-[90px] h-[32px] outline-none rounded-[8px] text-grey-100 py-1 px-2"

          />
          <button
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 8V16M16 12L8 12" stroke="#F14119" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12Z" stroke="#F14119" strokeWidth="1.5"/>
            </svg>

          </button>
          <button
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
            fill="none" 
            stroke="#F14119" strokeWidth="1.5" 
            strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10"/><path d="M8 12h8"/></svg>
          </button>
        </div>
          
      </div>
        </div>
      )
  }