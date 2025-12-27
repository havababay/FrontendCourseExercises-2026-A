import { Typography } from "@mui/material";

interface TitleProps {
  text: string;
  level?: 1 | 2 | 3 | 4 | 5 | 6;
}

function Title({ text, level}: TitleProps) {
  return (
    <>
      {(level ?? 1) === 1 && <Typography variant="h1">{text}</Typography>}
      {level === 2 && <Typography variant="h2">{text}</Typography>}
      {level === 3 && <Typography variant="h3">{text}</Typography>}
      {level === 4 && <Typography variant="h4">{text}</Typography>}
      {level === 5 && <Typography variant="h5">{text}</Typography>}
      {level === 6 && <Typography variant="h6">{text}</Typography>}
    </>
  );
}

export default Title;
