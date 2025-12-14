import "./StudentCard.css";

interface StudentCardProps {
  name: string;
  grade: number;
}

function StudentCard({ name, grade }: StudentCardProps) {
  return (
    <div className="student-card">
      <h3>Student Card</h3>
      <p>
        <strong>Name:</strong> {name}
      </p>
      <p>
        <strong>Grade:</strong> {grade}
      </p>
    </div>
  );
}

export default StudentCard;
