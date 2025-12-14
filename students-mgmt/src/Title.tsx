interface TitleProps {
  text: string;
  level?: 1 | 2 | 3 | 4 | 5 | 6;
}

function Title({ text, level}: TitleProps) {
  return (
    <>
      {(level ?? 1) === 1 && <h1>{text}</h1>}
      {level === 2 && <h2>{text}</h2>}
      {level === 3 && <h3>{text}</h3>}
      {level === 4 && <h4>{text}</h4>}
      {level === 5 && <h5>{text}</h5>}
      {level === 6 && <h6>{text}</h6>}
    </>
  );
}

export default Title;
