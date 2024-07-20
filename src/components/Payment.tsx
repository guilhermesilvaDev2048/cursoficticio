import { IoIosHourglass } from "react-icons/io";
import { GoArrowRight } from "react-icons/go";

const Payment = () => {
  return (
    <div className="flex justify-center w-full sm:w-[30%] h-[100vh] ">
      <div className="w-[375px] sm:w-[350px] p-4 bg-slate-500/20 m-auto mt-[-250px] flex-col flex rounded-lg gap-7">
        <h2 className="text-white/70 font-bold text-[19px]">Informações:</h2>
        <div className="flex flex-col gap-3">
          <div className="w-full flex items-center gap-2">
            <div className="text-purple-500">
              <IoIosHourglass />
            </div>
            <p className="text-white/50 text-[17px]">Acesso Vitalício</p>
          </div>
          <div className="w-full flex items-center gap-2">
            <div className="text-purple-500">
              <IoIosHourglass />
            </div>
            <p className="text-white/50 text-[17px]">Acesso Vitalício</p>
          </div>
          <div className="w-full flex items-center gap-2">
            <div className="text-purple-500">
              <IoIosHourglass />
            </div>
            <p className="text-white/50 text-[17px]">Acesso Vitalício</p>
          </div>
          <div className="w-full flex items-center gap-2">
            <div className="text-purple-500">
              <IoIosHourglass />
            </div>
            <p className="text-white/50 text-[17px]">Acesso Vitalício</p>
          </div>
          <div className="w-full flex items-center gap-2">
            <div className="text-purple-500">
              <IoIosHourglass />
            </div>
            <p className="text-white/50 text-[17px]">Acesso Vitalício</p>
          </div>
        </div>
        <div className="w-full h-[1px] bg-purple-600"></div>
        <div className="flex flex-col font-bold text-white/80">
          <h3 className="text-[17px]">R$195,00 ou</h3>
          <h2 className="text-[26px]">12x de R$ 19,00</h2>
        </div>
        <a
          href="#"
          className="p-4 text-[18px] rounded-md bg-green-800/40 font-bold flex items-center justify-center gap-2 text-green-400 hover:bg-green-400/50 transition duration-200 ease-in-out"
        >
          Começar agora <GoArrowRight />
        </a>
      </div>
    </div>
  );
};

export default Payment;
