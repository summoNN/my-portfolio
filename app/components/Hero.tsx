"use client";

import {Image} from "@nextui-org/image";
import {FaInstagram, FaTwitter, FaLinkedin, FaDownload} from "react-icons/fa";
import {Typewriter} from 'react-simple-typewriter'
import UActions from "@/app/components/Actions";
export default function UHero () {
  return (
    <div className={'h-screen flex flex-col gap-10 justify-center'}>
      <div className={'grid grid-cols-1 lg:grid-cols-[0.5fr_3fr_1fr] gap-5 px-5 justify-between'}>
        <div className={'flex lg:flex-col py-5 gap-2 lg:border-r-2 border-white justify-center lg:items-end pr-10'}>
          <FaInstagram size={'2em'}/>
          <FaTwitter size={'2em'}/>
          <FaLinkedin size={'2em'}/>
        </div>
        <div className={'flex flex-col justify-center'}>
          <p className={'text-5xl font-extrabold'}>Hi my name is Ilyas Haddad</p>
          <div className={'flex text-4xl font-bold gap-2'}>
            <span>Im a </span>
            <Typewriter
              words={['Junior software engineer', 'Gamer', 'Streamer']}
              loop={5}
              cursor
              cursorStyle='_'
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={700}
            />
          </div>
        </div>
        <div className="flex justify-center items-center">
          <Image
            alt="ilyas image"
            src="/propic.jpeg"
            width={400}
            className={'rounded-full mr-5'}
          />
        </div>
      </div>

      <div className={'flex justify-center gap-5'}>
        <UActions
          text={'Contact me'}
          src={'/contact'}
          size={'lg'}
        />
        <UActions
          text={'Download CV'}
          src={'/contact'}
          size={'lg'}
        >
          <FaDownload/>
        </UActions>
      </div>

    </div>
  )
}
