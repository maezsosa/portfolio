import Image from 'next/image';
import Link from 'next/link';
import { BsFillMoonStarsFill } from 'react-icons/bs';
import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillGithub,
} from 'react-icons/ai';
import maezsosa from '../../public/maezsosa.png';

export default function Home() {
  return (
    <main className="bg-white ">
      <section className="min-h-screen">
        <nav className="py-5 mb-12  bg-gradient-to-r from-cyan-500 to-teal-500 text-white">
          <h1 className="text-xl font-mono flex justify-center">
            matiassosa.dev
          </h1>
          {/* <ul className="flex items-center">
            <li>
              <BsFillMoonStarsFill className="cursor-pointer text-2xl" />
            </li>
            <li>
              <a
                className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8"
                href="#"
              >
                Resume
              </a>
            </li>
          </ul> */}
        </nav>
        <div className="relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-40 h-40 mt-10 overflow-hidden md:h-96 md:w-96">
          <Image src={maezsosa} alt="matias sosa" fill />
        </div>
        <div className="text-center p-5 ">
          <h2 className="text-4xl py-2 text text-teal-600 font-medium">
            Matias Sosa
          </h2>
          <h3 className="text-2xl py-2">Developer & Product Manager</h3>
          <p className="text-md pt-5 leading-8 text-gray-800">
            Amplio conocimiento en gestión de empresas.
          </p>
          <p className="text-md pb-5 leading-8 text-gray-800">
            Experiencia en desarrollo de productos digitales.
          </p>
        </div>
        <div className="text-5xl flex justify-center gap-16 py-5 text-gray-600">
          <Link href="https://www.linkedin.com/in/matiasesosa/">
            <AiFillLinkedin />
          </Link>
          <Link href="https://github.com/maezsosa">
            <AiFillGithub />
          </Link>
          <Link href="https://twitter.com/maezsosa">
            <AiFillTwitterCircle />
          </Link>
        </div>
      </section>
    </main>
  );
}
