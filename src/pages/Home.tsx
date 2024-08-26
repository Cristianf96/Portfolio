import { useId } from "react";
import { CheckCircleIcon, ChevronDoubleDownIcon } from "@heroicons/react/solid";
import { Toaster } from "react-hot-toast";
import { motion } from "framer-motion";

const Home = () => {
  const id = useId();

  const skills = [
    "HTML",
    "CSS",
    "JAVASCRIPT",
    "TYPESCRIPT",
    "NODEJS",
    "EXPRESS",
    "REACT",
    "FIREBASE",
    "MONGODB",
    "POSTGRESQL",
    "MUI",
    "TAILWIND",
  ];

  return (
    <div className="mx-auto h-[cal(100vh-144)] flex flex-col items-center justify-center bg-gray-900">
      <Toaster />
      <div className="pt-56 md:pt-96 lg:pt-72 flex flex-col justify-center">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0, transition: { duration: 0.75 } }}
          className="font-mono text-left text-xs pl-16 text-white font-bold md:text-xl md:pl-36 lg:pl-28"
        >
          Yo soy
        </motion.h1>
        <motion.h1
          initial={{ opacity: 0, x: -20 }}
          animate={{
            opacity: 1,
            x: 0,
            transition: { duration: 0.75, delay: 0.25 },
          }}
          className="font-mono text-center text-5xl text-white font-bold md:text-8xl"
        >
          CRISTIAN
        </motion.h1>
        {/* <motion.h1 initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0, transition: { duration: 0.75, delay: 0.50 } }} className='font-mono text-right pr-5 text-xs text-white font-bold md:text-2xl md:pr-28 lg:pr-20'>
                    semi-senior
                </motion.h1> */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{
            opacity: 1,
            y: 0,
            transition: { duration: 0.75, delay: 0.75 },
          }}
          className="font-mono text-right pr-0 text-sm text-white font-bold md:text-3xl md:pr-18 lg:pr-0"
        >
          FullStack Developer
        </motion.h1>
      </div>
      <div className="pt-36 md:pt-96 lg:pt-80 flex flex-col items-center justify-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{
            opacity: 1,
            y: 0,
            transition: { duration: 0.75, delay: 1.25 },
          }}
          className="font-mono pt-5 w-80 md:w-[45rem] lg:w-[80rem] text-xs text-white text-center md:text-xl "
        >
          "El deseo de conocimiento forma a un hombre ― Patrick Rothfuss, The
          Wise Man's Fear"
        </motion.h1>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{
            opacity: 1,
            y: 0,
            transition: { duration: 0.75, delay: 1.5 },
          }}
          className="h-16 w-16 flex items-center justify-center"
        >
          <ChevronDoubleDownIcon className="h-8 w-8 md:h-12 md:w-12 md:pt-0 lg:h-10 lg:w-10 lg:pt-0 text-white" />
        </motion.div>
      </div>
      <div className="mt-20 mb-20 flex flex-col items-center text-white">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: { duration: 0.75, delay: 0.75 },
          }}
          className="uppercase font-bold pb-5 md:pb-10 md:text-2xl"
        >
          competencias
        </motion.h1>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: { duration: 0.75, delay: 1 },
          }}
          className="w-80 py-5 md:w-[40rem] lg:w-[60rem] grid grid-rows-4 md:grid-rows-3 lg:grid-rows-2 grid-flow-col gap-2 bg-gray-800 shadow-xl justify-center rounded-lg"
        >
          {skills.map((item, i) => {
            return (
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{
                  opacity: 1,
                  transition: { duration: 0.75, delay: 1.25 },
                }}
                className="flex justify-center"
                key={i + id}
              >
                <h1 className="font-mono text-xs md:text-xl">{item}</h1>
                <CheckCircleIcon className="h-4 w-4 ml-2 md:h-6 md:w-6 md:pt-0 lg:h-6 lg:w-6 lg:pt-0 text-white" />
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
