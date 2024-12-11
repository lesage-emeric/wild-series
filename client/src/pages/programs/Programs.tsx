import { useEffect, useState } from "react";
import type { Program } from "../../types/ProgramsType";

function Programs() {
  const [programs, setPrograms] = useState<Program[]>([]);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/api/programs`)
      .then((res) => res.json())
      .then((programsFromApi: Program[]) => {
        setPrograms(programsFromApi);
      })
      .catch((error) => console.error("Fetch error:", error));
  }, []);

  return (
    <>
      {programs.map((program) => (
        <>
          <h1 key={program.title}>{program.title}</h1>
          <p key={program.synopsis}>{program.synopsis}</p>
          <img
            key={`${program.title}-${program.id}`}
            src={program.poster}
            alt={program.title}
          />
          <h4 key={program.country}>{program.country}</h4>
          <h5 key={program.year}>{program.year}</h5>
        </>
      ))}
    </>
  );
}

export default Programs;
