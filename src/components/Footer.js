import { ReactComponent as Logo } from "../img/Logo.svg";
import { SiGithub, SiLinkedin } from "react-icons/si";
// import { RiCopyrightLine } from 'react-icons/ri'

function Footer() {
  return (
    <section className="bg-slate-50 flex flex-col justify-between px-16 mx-auto w-full py-12">
      <div className="pb-5">
        <Logo />
      </div>

      <div className="flex gap-10">
        <p> News </p>
        <p> Careers </p>
        <p> Contact </p>
        <p> FAQ </p>
        <p> Legal </p>
      </div>
      <hr />
      <div className="flex justify-between ">
        <div>2023 2:30 Ltd. All rights reserved.</div>
        <div>London SW1 1AS</div>
        <div className="flex gap-5 text-xl">
          <a
            href="https://github.com/wodnjsd"
            target="blank"
            className="text-gray-600 hover:text-gray-700"
          >
            <SiGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/jaewon-han-4900521a5/"
            target="blank"
            className="text-gray-600 hover:text-gray-700"
          >
            <SiLinkedin />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Footer;
