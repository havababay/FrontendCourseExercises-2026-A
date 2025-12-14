import Title from "./Title";
import "./CandidatesList.css";

interface Candidate {
  id: number;
  name: string;
  email: string;
}

function CandidatesList() {
  const candidates: Candidate[] = [
    { id: 1, name: "Alice Johnson", email: "alice@example.com" },
    { id: 2, name: "Bob Smith", email: "bob@example.com" },
    { id: 3, name: "Charlie Brown", email: "charlie@example.com" },
    { id: 4, name: "Diana Prince", email: "diana@example.com" },
    { id: 5, name: "Eve Davis", email: "eve@example.com" },
  ];

  return (
    <div className="candidates-list">
      <Title text="Candidates" level={2} />
      <table className="candidates-table">
        <thead>
          <tr>
            <th className="candidates-cell">Name</th>
            <th className="candidates-cell">Email</th>
          </tr>
        </thead>
        <tbody>
          {candidates.map((candidate) => (
            <tr key={candidate.id}>
              <td className="candidates-cell">{candidate.name}</td>
              <td className="candidates-cell">{candidate.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default CandidatesList;
