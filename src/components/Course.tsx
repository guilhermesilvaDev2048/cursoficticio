import { GoArrowLeft } from "react-icons/go";
import { ImRocket } from "react-icons/im";
import curso from "../assets/curso.png";
import { GoCheck } from "react-icons/go";
import { PiVideoFill } from "react-icons/pi";

const Course = () => {
  return (
    <div className="flex flex-col w-full sm:w-[30%] mb-96 sm:mb-0 h-full p-14 gap-12">
      <a
        href="#"
        className="text-white/80 flex items-center gap-2 hover:text-white"
      >
        <GoArrowLeft /> Voltar
      </a>
      <p className="text-purple-600 text-[17px] flex items-center gap-4">
        {" "}
        <ImRocket /> Curso recomendado para você
      </p>
      <h2 className="text-white text-5xl font-bold">
        Curso Front-End Completo
      </h2>
      <p className="text-white/50 font-medium text-[17px]">
        Aprenda e domine absolutamente tudo sobre front-end e web design em
        apenas um curso! Tudo que você precisa para se tornar um(a)
        Desenvolvedor(a) Front-End.
      </p>
      <img src={curso} draggable="false" alt="" className="rounded-md" />
      <div className="w-full h-[1px] bg-purple-600"></div>
      <h3 className="text-3xl font-bold text-white">Oque vamos Aprender?</h3>
      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-3">
          <div className=" text-purple-600 text-[16px]">
            <GoCheck />
          </div>
          <p className="text-white/50">
            Domine o HTML/HTML5, CSS/CSS3, JavaScript e jQUERY
          </p>
        </div>
        <div className="flex items-center gap-3">
          <div className=" text-purple-600 text-[16px]">
            <GoCheck />
          </div>
          <p className="text-white/50">
            Domine o HTML/HTML5, CSS/CSS3, JavaScript e jQUERY
          </p>
        </div>
        <div className="flex items-center gap-3">
          <div className=" text-purple-600 text-[16px]">
            <GoCheck />
          </div>
          <p className="text-white/50">
            Domine o HTML/HTML5, CSS/CSS3, JavaScript e jQUERY
          </p>
        </div>
        <div className="flex items-center gap-3">
          <div className=" text-purple-600 text-[16px]">
            <GoCheck />
          </div>
          <p className="text-white/50">
            Domine o HTML/HTML5, CSS/CSS3, JavaScript e jQUERY
          </p>
        </div>
        <div className="flex items-center gap-3">
          <div className=" text-purple-600 text-[16px]">
            <GoCheck />
          </div>
          <p className="text-white/50">
            Domine o HTML/HTML5, CSS/CSS3, JavaScript e jQUERY
          </p>
        </div>
        <div className="flex items-center gap-3">
          <div className=" text-purple-600 text-[16px]">
            <GoCheck />
          </div>
          <p className="text-white/50">
            Domine o HTML/HTML5, CSS/CSS3, JavaScript e jQUERY
          </p>
        </div>
      </div>
      <h3 className="text-white text-3xl">Módulos</h3>
      <div className="flex flex-col w-full gap-4">
        <div className="w-full p-4 flex items-center gap-3 bg-slate-600/20 rounded-md text-white/50">
          <div>
            <PiVideoFill />
          </div>
          <p>Configurando o Ambiente de Trabalho</p>
        </div>
        <div className="w-full p-4 flex items-center gap-3 bg-slate-600/20 rounded-md text-white/50">
          <div>
            <PiVideoFill />
          </div>
          <p>Configurando o Ambiente de Trabalho</p>
        </div>
        <div className="w-full p-4 flex items-center gap-3 bg-slate-600/20 rounded-md text-white/50">
          <div>
            <PiVideoFill />
          </div>
          <p>Configurando o Ambiente de Trabalho</p>
        </div>
        <div className="w-full p-4 flex items-center gap-3 bg-slate-600/20 rounded-md text-white/50">
          <div>
            <PiVideoFill />
          </div>
          <p>Configurando o Ambiente de Trabalho</p>
        </div>
        <div className="w-full p-4 flex items-center gap-3 bg-slate-600/20 rounded-md text-white/50">
          <div>
            <PiVideoFill />
          </div>
          <p>Configurando o Ambiente de Trabalho</p>
        </div>
        <div className="w-full p-4 flex items-center gap-3 bg-slate-600/20 rounded-md text-white/50">
          <div>
            <PiVideoFill />
          </div>
          <p>Configurando o Ambiente de Trabalho</p>
        </div>
        <div className="w-full p-4 flex items-center gap-3 bg-slate-600/20 rounded-md text-white/50">
          <div>
            <PiVideoFill />
          </div>
          <p>Configurando o Ambiente de Trabalho</p>
        </div>
      </div>
    </div>
  );
};

export default Course;
