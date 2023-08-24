import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Container } from "@mui/material";

const columns = [
  { field: 'id', headerName: 'ID', width: 90 },
  { field: 'name', headerName: 'Name', width: 180 },
  { field: 'age', headerName: 'Age', type: 'number', width: 30 },
  { field: 'job_title', headerName: 'Job title', width: 230},
  { field: 'company', headerName: 'Company', width: 180},
  { field: 'email_address', headerName: 'Email', width: 250},
  { field: 'contact_num', headerName: 'Contact no.', width: 100}
];

// const columns = [
//   { field: 'id', headerName: 'ID', width: 70 },
//   { field: 'firstName', headerName: 'First name', width: 130 },
//   { field: 'lastName', headerName: 'Last name', width: 130 },
//   {
//     field: 'age',
//     headerName: 'Age',
//     type: 'number',
//     width: 90,
//   },
//   {
//     field: 'fullName',
//     headerName: 'Full name',
//     description: 'This column has a value getter and is not sortable.',
//     sortable: false,
//     width: 160,
//     valueGetter: (params) =>
//       `${params.row.firstName || ''} ${params.row.lastName || ''}`,
//   },
// ];


// const rows = [
//   { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
//   { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
//   { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
//   { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
//   { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
//   { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
//   { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
//   { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
//   { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
// ];

export default function DataTable(props) {
  return (
    <div style={{ height: 400, width: '100%', ml:250}}>
        <Container maxWidth="lg" sx={{ mt: 8, alignItems: 'center', ml: 50}}>
            <DataGrid
                rows={props.searchResults.length > 0 ? props.searchResults : props.people }
                columns={columns}
                initialState={{
                sorting: {
                  sortModel: [{ field: "id", sort: "asc" }]
                },
                pagination: {
                    paginationModel: { page: 0, pageSize: 6 },
                },
                }}
                pageSizeOptions={[5, 10]}
                sortingMode='id'
            />
      </Container>
    </div>
  );
}