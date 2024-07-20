import { GoArrowRight } from "react-icons/go";

const Certified = () => {
  return (
    <section className="w-full p-3 flex-col sm:flex-row flex items-center justify-around mb-32 sm:mb-12">
      <h3 className="text-white text-1xl sm:text-2xl font-bold mb-8 sm:mb-0">
        Certificado de conclusão{" "}
        <span className="text-purple-500">Garantido</span>
      </h3>
      <a
        href="#"
        className="p-2 rounded-md bg-green-800/40 font-bold flex items-center gap-2 text-green-400 hover:bg-green-400/50 transition duration-200 ease-in-out"
      >
        Começar agora <GoArrowRight />
      </a>
    </section>
  );
};

export default Certified;
