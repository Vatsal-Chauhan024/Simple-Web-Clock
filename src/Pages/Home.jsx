import React, { useEffect, useState } from 'react';

const Home = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setTimeout(() => {
      setTime(new Date());
    }, 1000);

    return () => clearTimeout(intervalId);
  }, [time]);

  const hours = time.getHours();
  const minutes = time.getMinutes();
  const seconds = time.getSeconds();

  const clockArray = [
    {
      elementName: "hr",
      elementValue: hours,
    },
    {
      elementName: "mins",
      elementValue: minutes,
    },
    {
      elementName: "sec",
      elementValue: seconds,
    },
  ];

  return (
    <div className='pt-24 h-screen flex flex-col items-center mt-20 gap-16 pb-3'>

    <h2 className='text-4xl sm:text-7xl text-white/80 font-bold libefore'>Global Time</h2>

      <div className='bg-[#ffffff14] border border-solid border-white w-1/2  sm:w-9/12 h-2/5 rounded flex sm:px-10 justify-center backdrop-blur-3xl transition-all duration-300 ease-linear'>
        <div className='grid grid-cols-3 gap-2 w-fit place-items-center'>
          {clockArray.map((element, key) => (
            <div key={key} className='max-w-20 text-sm sm:max-w-32 w-full h-fit p-2 flex gap-1 items-center justify-center bg-white/80 rounded sm:text-3xl'>
              <span>{element.elementValue}</span>
              <span>{element.elementName}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
