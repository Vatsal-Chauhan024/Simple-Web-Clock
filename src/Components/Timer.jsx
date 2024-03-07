import React, { useState, useEffect } from 'react';
import { FaPlay, FaPause, FaStop } from "react-icons/fa";

const Timer = () => {
    const [timer, setTimer] = useState({
        hour: "00",
        minutes: "00",
        seconds: "00",
        milliseconds: "000"
    });
    const [isRunning, setIsRunning] = useState(false);
    const [intervalId, setIntervalId] = useState(null);

    const clockArray = [
        {
            elementName: "hr",
            elementValue: timer.hour,
        },
        {
            elementName: "mins",
            elementValue: timer.minutes,
        },
        {
            elementName: "sec",
            elementValue: timer.seconds,
        },
        {
            elementName: "ms",
            elementValue: timer.milliseconds
        }
    ];

    useEffect(() => {
        if (isRunning) {
            const id = setInterval(() => {
                setTimer(prevTimer => {
                    let milliseconds = parseInt(prevTimer.milliseconds);
                    let seconds = parseInt(prevTimer.seconds);
                    let minutes = parseInt(prevTimer.minutes);
                    let hour = parseInt(prevTimer.hour);

                    milliseconds += 10;
                    if (milliseconds === 1000) {
                        milliseconds = 0;
                        seconds++;
                    }
                    if (seconds === 60) {
                        seconds = 0;
                        minutes++;
                    }
                    if (minutes === 60) {
                        minutes = 0;
                        hour++;
                    }

                    return {
                        hour: hour.toString().padStart(2, "0"),
                        minutes: minutes.toString().padStart(2, "0"),
                        seconds: seconds.toString().padStart(2, "0"),
                        milliseconds: milliseconds.toString().padStart(3, "0")
                    };
                });
            }, 10);
            setIntervalId(id);
        } else {
            clearInterval(intervalId);
        }

        return () => clearInterval(intervalId);
    }, [isRunning]);

    const handleStartPause = () => {
        setIsRunning(prev => !prev);
    };

    const handleReset = () => {
        clearInterval(intervalId);
        setTimer({
            hour: "00",
            minutes: "00",
            seconds: "00",
            milliseconds: "000"
        });
        setIsRunning(false);
    };

    return (
        <>
            <div className='pt-24 h-screen flex flex-col items-center mt-20 gap-16 pb-3'>
                <h2 className='text-4xl sm:text-7xl text-white/80 font-bold libefore'>Stop Watch</h2>

                <div className='bg-[#ffffff14] border border-solid border-white w-1/2  sm:w-9/12 h-2/5 rounded flex sm:px-10 justify-center backdrop-blur-3xl transition-all duration-300 ease-linear'>
                    <div className='grid grid-cols-2  md:grid-cols-4 gap-2 w-fit place-items-center'>
                        {clockArray.map((element, key) => (
                            <div key={key} className='max-w-20 text-sm sm:max-w-32 w-full h-fit p-2 flex gap-1 items-center justify-center  text-white rounded sm:text-3xl'>
                                <span>{element.elementValue}</span>
                                <span>{element.elementName}</span>
                            </div>
                        ))}
                    </div>
                </div>

                <div className='flex gap-8 cursor-pointer *:text-white *:text-3xl'>
                    {isRunning ? (
                        <FaPause className='hover:text-white/60' onClick={handleStartPause} />
                    ) : (
                        <FaPlay className='hover:text-white/60' onClick={handleStartPause} />
                    )}
                    <FaStop className='hover:text-white/60' onClick={handleReset} />
                </div>
            </div>
        </>
    );
};

export default Timer;
