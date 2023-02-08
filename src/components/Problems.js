import React from "react";
import { Link, useParams } from "react-router-dom";
import { baseUrl } from "../config";

function Problems() {
  const [problems, setProblems] = React.useState([]);
  const { typeId } = useParams();

  React.useEffect(() => {
    const getData = async () => {
      const res = await fetch(`${baseUrl}/types/${typeId}`);
      const json = await res.json();
      setProblems(json.problems);
    };
    getData();
  }, [typeId]);

  return (
    <section className="flex flex-col items-center w-full h-screen">
      <div className="w-full bg-slate-50 flex justify-center items-center py-12">
        <p className="text-3xl font-prata">
          What are your signs and symptoms?
        </p>
      </div>
      <div className="h-4/5 flex flex-col justify-center w-1/2">
        {problems.map((problem, index) => {
          return (
            <div
              key={index}
              className="w-full my-1 border-2 flex justify-center gap-6 items-center py-5"
            >
              <Link to={`/problems/${problem.id}`}>
                <div className="text-gray-600 font-inter">
                  <p>{problem.name}</p>
                </div>
              </Link>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Problems;
