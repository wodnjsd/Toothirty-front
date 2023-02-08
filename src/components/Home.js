/* eslint-disable react/no-unescaped-entities */
// import { ReactComponent as Logo } from '../img/Logo.svg'
import img1 from "../img/home.png";
import { Link } from "react-router-dom";
import { IoArrowForward } from 'react-icons/io5'


function Home() {
  return (
    <section className="w-full h-full bg-slate-50 py-20 px-5  ">
      <div className="flex flex-col justify-between md:flex-row gap-8 md:px-20">
        <div className="flex flex-col justify-center gap-10 px-10 lg:max-w-xl">
          <div className="sm:w-80 flex justify-center py-2 bg-amber-300 rounded-3xl px-2">
            Dental healthcare at your fingertips
          </div>
          <div className="text-gray-800 text-5xl font-prata">More than just a Dentist</div>
          <div className="text-gray-700 text-md">
            <p>
              Roses are red, violets are blue, it's time for your dental
              cleaning, and maybe a checkup too.
            </p>
            <p className="py-3">
              2:30 gives you quick, easy access to dentists, right form your
              device. You can control your wellbeing with digital health tools
              available to you 24/7.
            </p>
          </div>
          <Link to="/all" className="flex justify-center items-center bg-black hover:text-amber-400 text-white w-48 py-3">
            Start your survey <IoArrowForward className="ml-1 mt-1"/>
          </Link>
        </div>

        <div className="max-w-4xl h-5/6 flex justify-center items-center">
          <img
            src={img1}
            alt="homepage"
            className="hidden lg:flex  object-cover object-center"
          />
        </div>
      </div>
    </section>
  );
}

export default Home;
