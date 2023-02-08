import React from "react";
import { Link, useParams } from "react-router-dom";
import { baseUrl } from "../config";
import { IoArrowForward } from 'react-icons/io5'

function ShowAdvice() {
  const [advice, setAdvice] = React.useState([]);
  const [diagnosis, setDiagnosis] = React.useState(undefined);
  const { problemId } = useParams();

  React.useEffect(() => {
    const getData = async () => {
      const res = await fetch(`${baseUrl}/problems/${problemId}`);
      const json = await res.json();
      setAdvice(json.advice);
      setDiagnosis(json.diagnosis);
    };
    getData();
  }, [problemId]);

  return (
    <section className="flex flex-col items-center w-full h-full min-h-screen">
      <div className="px-5 w-full bg-slate-50 flex justify-center items-center py-12">
        <p className="text-3xl font-prata">
          It looks like you might have: {diagnosis}
        </p>
      </div>
      <div className="h-4/5 py-12 flex flex-col justify-between gap-10 items-center w-5/6 lg:w-1/2">
        <h3 className="mt-2 font-semibold">Advice:</h3>
        <div className="basis-2/3 w-full flex flex-col justify-center gap-2 ">
          {advice.map((advice, index) => {
            return (
              <p
                key={index}
                className="w-full text-center text-gray-600 border-2 py-5 font-inter"
              >
                {advice.content}
              </p>
            );
          })}
        </div>
        <p className="text-center">
          Make sure you contact your dentist as soon as possible and get it
          checked!
        </p>

        <Link
          to={"/all"}
          className="flex justify-center items-center bg-black text-white hover:text-amber-400 py-2 px-4"
        >
          Start again <IoArrowForward className="ml-1 mt-1"/>
        </Link>
     
      </div>
    </section>
  );
}

export default ShowAdvice;
