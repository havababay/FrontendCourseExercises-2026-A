import { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import Title from "./Title";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { useFormControl } from "@mui/material";

interface FormFieldsIndicator {
  name?: boolean;
  email?: boolean;
}

function CandidateForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [id, setId] = useState(new Date().getTime());
  const [errors, setErrors] = useState<FormFieldsIndicator>({});

  const navigate = useNavigate();

  const isFormValid = useMemo(() => {
    const vals = Object.values(errors);
    // Consider form valid only when every tracked field is explicitly false
    return vals.length == 2 && vals.every((v) => v === false);
  }, [errors]);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    // For now we just log the values; in a real app you'd send them to a backend.
    const newCandidate = { id, name, email };
    const candidatesFromStorage = localStorage.getItem("candidates");
    const candidates = candidatesFromStorage
      ? JSON.parse(candidatesFromStorage)
      : [];
    candidates.push(newCandidate);
    localStorage.setItem("candidates", JSON.stringify(candidates));
    navigate("/candidates");
  }

  return (
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
          maxWidth: 400,
        }}
      >
          <TextField
            label="ID"
            name="id"
            value={id}
            onChange={(e) => setId(Number(e.target.value))}
            required
            type="number"
            disabled
          ></TextField>
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
