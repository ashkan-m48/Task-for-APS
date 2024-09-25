"use client";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import DeleteIcon from "@mui/icons-material/Delete";

import DownloadIcon from "@mui/icons-material/Download";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Button, TableHead } from "@mui/material";

export default function CTable({ files, remove }) {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 350, gap: "10px" }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="center">Format</TableCell>
            <TableCell align="center">Delete</TableCell>

            <TableCell align="center">Download</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {files.map((file) => (
            <TableRow
              key={file.name}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {file.name}
              </TableCell>
              <TableCell align="right">{file.type}</TableCell>
              <TableCell align="right">
                <Button onClick={() => remove(file.name)}>
                  <DeleteIcon />
                </Button>
              </TableCell>

              <TableCell align="right">
                <Button href={`${file.preview}`} download={`${file.name}`}>
                  <DownloadIcon />
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
