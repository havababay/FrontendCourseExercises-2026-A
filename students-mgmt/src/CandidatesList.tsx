import Title from "./Title";
import "./CandidatesList.css";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

interface Candidate {
  id: number;
  name: string;
  email: string;
}

function CandidatesList() {
  const navigate = useNavigate();
  const [candidates, setCandidates] = useState<Candidate[]>([]);

  useEffect(() => {
    const candidatesFromStorage = localStorage.getItem("candidates");
    if (candidatesFromStorage) {
      setCandidates(JSON.parse(candidatesFromStorage));
    }
  }, []);


  return (
    <div className="candidates-list">
      <Title text="Candidates" level={2} />
      <Button variant="contained" sx={{ mt: 2 }} onClick={() => navigate('/candidates/new')} color="primary">
        Add Candidate
      </Button>

      <TableContainer component={Paper} sx={{ marginTop: 2 }}>
        <Table aria-label="candidates table">
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Email</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {candidates.map((candidate) => (
              <TableRow key={candidate.id} hover>
                <TableCell component="th" scope="row">
                  {candidate.name}
                </TableCell>
                <TableCell>{candidate.email}</TableCell>
                <TableCell>
                  <Button
                       variant="outlined"
                    onClick={() => navigate(`/candidates/${candidate.id}`)}
                  >
                    Edit
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default CandidatesList;
