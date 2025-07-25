import React from 'react';
import Socials from '../Socials';
import Link from 'next/link';
import Button from '../Button';

const Footer = ({}) => {
  const handleScheduleCall = () => {
    // Aquí puedes agregar la lógica para abrir un enlace o mostrar un modal
    window.open('https://calendly.com/uncubanodev/30min', '_blank'); // Ejemplo de enlace a Calendly
  };

  return (
    <>
      <div className='mt-5 laptop:mt-40 p-2 laptop:p-0'>
        <div>
          <h1 className='text-2xl text-bold'>Contact.</h1>
          <div className='mt-10'>
            <h1 className='text-3xl tablet:text-6xl laptop:text-6xl laptopl:text-8xl text-bold'>
              LET&apos;S WORK
            </h1>
            <h1 className='text-3xl tablet:text-6xl laptop:text-6xl laptopl:text-8xl text-bold'>
              TOGETHER
            </h1>
            <Button
              type='primary'
              onClick={handleScheduleCall}
            >
              Schedule a call
            </Button>
            <div className='mt-10'>
              <Socials />
            </div>
          </div>
        </div>
      </div>
      <h1 className='text-sm text-bold mt-2 laptop:mt-10 p-2 laptop:p-0'>
        Made With ❤ by{' '}
        <Link href='https://uncubano.dev'>
          <a className='underline underline-offset-1'>UnCubanoDev</a>
        </Link>
      </h1>
    </>
  );
};

export default Footer;
