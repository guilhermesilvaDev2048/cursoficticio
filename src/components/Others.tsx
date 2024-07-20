import curso from '../assets/curso.png'
import { GoArrowRight } from "react-icons/go";

const Others = () => {
  return (
    <section className="flex flex-col items-center w-full bg-slate-600/20 p-8 mb-32 sm:mb-12">
      <h3 className="text-3xl font-bold text-center text-white mb-20">
        Confira nossos outros Cursos
      </h3>
      <div className="p-3 bg-slate-600/20 rounded-xl gap-3 flex flex-col w-[300px]">
        <img
          src={curso}
          draggable="false"
          alt=""
          className="w-[300px] rounded-md"
        />
        <h4 className="text-[18px] font-bold text-white">
          Curso Front-End Completo 2.0
        </h4>
        <p className="text-white/50 font-medium text-[15px]">
          Confira nosso curso 2.0 contendo atualizações e novas modalidades no
          mundo da programação com um ensino incrível.
        </p>
        <div className="w-full flex items-center justify-end">
          <a
            href="#"
            className="text-white/50 hover:text-white/20 transition duration-200 ease-in-out flex items-center gap-2 text-[14px] font-bold"
          >
            Saiba mais <GoArrowRight />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Others;
