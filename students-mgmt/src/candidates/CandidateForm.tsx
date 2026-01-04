import { useEffect, useMemo, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Title from "../Title";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import {
  addCandidate,
  getCandidate,
  updateCandidate,
} from "../../firebase/candidate";
import { Candidate } from "./candidate";
import CircularProgress from "@mui/material/CircularProgress";

interface FormFieldsIndicator {
  name?: boolean;
  email?: boolean;
}

function CandidateForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [errors, setErrors] = useState<FormFieldsIndicator>({});
  const [loading, setLoading] = useState(false);
  const [isInvalid, setIsInvalid] = useState(false);

  const navigate = useNavigate();

  const { id: candidateId } = useParams();

  useEffect(() => {
    if (candidateId) {
      setLoading(true);
      getCandidate(candidateId).then((candidate) => {
        if (candidate) {
          setName(candidate.name);
          setEmail(candidate.email);
        } else {
          setIsInvalid(true);
        }
        setLoading(false);
      });
    }
  }, [candidateId]);

  const isFormValid = useMemo(() => {
    const vals = Object.values(errors);
    // Consider form valid only when every tracked field is explicitly false
    return vals.length == 2 && vals.every((v) => v === false);
  }, [errors]);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    // For now we just log the values; in a real app you'd send them to a backend.
    const newCandidate = new Candidate(name, email, "");
    setLoading(true);
    if (candidateId) {
      updateCandidate(new Candidate(name, email, candidateId)).then(() => {
        setLoading(false);
        navigate("/candidates");
      });
    } else {
      addCandidate(newCandidate).then(() => {
        setLoading(false);
        navigate("/candidates");
      });
    }
    console.log("Submitted candidate:", newCandidate);
  }

  return loading ? (
    <Box sx={{ display: "flex" }}>
      <CircularProgress />
    </Box>
  ) : isInvalid ? (
    <div>Candidate not found</div>
  ) : (
    <div>
      <Title text="Add Candidate" level={2} />
      <Box
        component="form"
        onSubmit={handleSubmit}
        noValidate
        autoComplete="off"
        sx={{
          mt: 2,
          display: "flex",
          flexDirection: "column",
          gap: 2,
          width: { xs: "100%", md: "50%", lg: "30%" },
        }}
      >
        <TextField
          label="Name"
          name="name"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
            setErrors((prev) => ({
              ...prev,
              name: !e.target.validity.valid,
            }));
          }}
          required
          error={errors.name}
          helperText={errors.name ? "Name is required" : ""}
        />
        <TextField
          label="Email"
          name="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            setErrors((prev) => ({ ...prev, email: !e.target.validity.valid }));
          }}
          type="email"
          required
          error={errors.email}
          helperText={
            errors.email
              ? "Email is required and should have format: sss@ggg.com"
              : ""
          }
        />

        <Box sx={{ display: "flex", gap: 1 }}>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            disabled={!isFormValid}
          >
            Save
          </Button>
          <Button
            type="button"
            variant="outlined"
            onClick={() => navigate("/candidates")}
          >
            Cancel
          </Button>
        </Box>
      </Box>
    </div>
  );
}

export default CandidateForm;
