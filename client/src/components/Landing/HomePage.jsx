import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion"; 
import meet from '../../assets/Front1.png' 
import Main from '../../assets/Main.png' 
import Stack1 from '../../assets/Stack.jpeg' 
import Stack2 from '../../assets/Stack2.jpeg' 
import Stack3 from '../../assets/Stack3.jpeg' 



export default function HomePage() {
  return (
    <>
      <section>
        <div className="mx-auto max-w-screen-xl min-w-screen-sm px-4 py-8 sm:py-12 sm:px-6 lg:py-16 lg:px-8">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16 overflow-x-hidden">
            <motion.div 
              initial={{ opacity: 0, x: 200 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 2}}
            className="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full">
              <img
                alt="Online Meeting Of Seniors and Juniors"
                src= {meet}
                className="absolute inset-0 h-full w-full object-cover"
                loading="lazy"
              />
            </motion.div>

            <motion.div
            initial={{ opacity: 0, x: -200 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 2 }}
            className="lg:py-24">
              <h2 className="text-6xl font-bold sm:text-6xl text-center">
                <div className="mb-8 font-serif">Sarthi - Your Bridge to Expert </div>
                <span className="bg-indigo-500 text-white p-auto">Insights + Guidance</span>
              </h2>
            
              <p className="mt-8 text-center">
              Sarthi is an innovative online platform designed to bridge the gap between junior novices and seasoned experts across various industries. Whether you're a student looking for guidance, a budding professional seeking career advice, or an individual encountering technical hurdles, Sarthi is here to connect you with experienced mentors from around the globe.
              </p>
              <p className="mt-4 text-center sm:text-lg">
                <a href="/Landing" className="">
                  Join us
                </a>
                today and discover the joy of fitness!
              </p>
            </motion.div>
          </div>
        </div>
      </section>
      <section>
        <div className="mx-auto max-w-screen-2xl px-4 py-8 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <motion.div 
            initial={{ opacity: 0, y: 200 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 2 }}
            className="bg-blue-600 p-8 md:p-12 lg:px-16 lg:py-24 rounded-2xl">

              <div className="mx-auto max-w-xl">
                <h2 className="text-2xl font-bold text-white md:text-3xl">
                  Your One-Stop Destination for {" "}
                </h2>

                <p className="hidden text-white/100 sm:mt-4 sm:block">
                  <ul className="text-lg">
                    <li>Bug Solving</li>
                    <li>Tech Career Assistance</li>
                    <li>Academic Support</li>
                    <li>Career Advice</li>
                    <li>Global Connection</li>
                  </ul>
                </p>

                <div className="mt-4 md:mt-8 text-center">
                  <Link
                    to="/Landing"
                    className="inline-block rounded border border-white bg-white px-12 py-3 text-md font-bold text-blue-900 transition hover:bg-transparent hover:text-lg hover:px-8 hover:text-white hover:rounded-xl"
                  >
                    Get Started Today
                  </Link>
                </div>
              </div>
            </motion.div>

            <div className="">
              <img
                alt="Gym room"
                src={Main}
                className="h-40 w-full object-cover sm:h-56 md:h-full rounded-2xl"
                loading="lazy"
              />
              
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="max-w-screen-xl px-4 py-8 mx-auto sm:px-6 sm:py-12 lg:px-8">
          <header className="text-center">
            <h2 className="text-xl font-bold  sm:text-4xl text-indigo-500">
              Your Pathway to Expert Assistance
            </h2>

            <p className="max-w-md mx-auto mt-4 sm:text-lg">
              Our state-of-the-art facility and expert trainers are here to help
              you achieve your goals, whether you're just starting out
              or are a seasoned pro.
            </p>
          </header>

          <ul className="grid grid-cols-1 gap-4 mt-8 lg:grid-cols-3">
            <li>
              <div className="relative block group">
                <img
                  src={Stack3}
                  alt="exercise"
                  loading="lazy"
                  className="object-cover h-full w-full transition duration-500 aspect-square group-hover:opacity-90"
                />
              </div>
            </li>

            <li>
              <div className="relative block group">
                <img
                  src={Stack1}
                  alt="exercise"
                  loading="lazy"
                  className="object-cover h-full w-full transition duration-500 aspect-square group-hover:opacity-90"
                />
              </div>
            </li>

            <li className="lg:col-span-2 lg:col-start-2 lg:row-span-2 lg:row-start-1">
              <div className="relative block group">
                <img
                  src={Stack2}
                  alt="exercise"
                  loading="lazy"
                  className="object-cover h-full w-full transition duration-500 aspect-square group-hover:opacity-90"
                />
              </div>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
}
