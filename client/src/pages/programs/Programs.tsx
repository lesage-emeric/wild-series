import { useEffect, useState } from "react";
import type { Program } from "../../types/ProgramsType";

function Programs() {
  const [programs, setPrograms] = useState<Program[]>([]);

  useEffect(() => {
    fetch("http://localhost:3310/api/programs")
      .then((res) => res.json())
      .then((programsFromApi) => {
        setPrograms(programsFromApi);
      })
      .catch((error) => console.error("Fetch error:", error));
  }, []);

  return (
    <>
      {programs.map((program) => (
        <>
          <h1 key={program.title}>{program.title}</h1>
          <h3 key={program.synopsis}>{program.synopsis}</h3>
          <img
            key={`${program.title}-${program.id}`}
            src={program.poster}
            alt={program.title}
          />
          <h5 key={program.country}>{program.country}</h5>
          <h6 key={program.year}>{program.year}</h6>
        </>
      ))}
    </>
  );
}

export default Programs;
