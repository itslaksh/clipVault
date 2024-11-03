import React, { useState } from 'react';
import './index.css';
import ytLogo from './assets/YouTube-logo.png';
import redLogo from './assets/Reddit-logo.png';
import useTabIndicator from './useTabIndicator';
import DownYT from './DownYT';

const Home = () => {
  const { activeTab, handleTabClick, indicatorRef, tabRefs } = useTabIndicator('youtube');
  const [isRotating, setIsRotating] = useState(false);
  const [isFading, setIsFading] = useState(false);

  const handleTabChange = (tab) => {
    setIsRotating(true);
    setIsFading(true);
    handleTabClick(tab);

    setTimeout(() => {
      setIsRotating(false);
      setIsFading(false);
    }, 300);
  };

  return (
    <>
      <div className='bg-light-BG min-h-screen'>
        {/* Add onClick to switch to YouTube */}
        <div className='flex px-12 py-7 text-3xl justify-between antialiased'>
          <div
            className='flex cursor-pointer'
            onClick={() => handleTabChange('youtube')}
          >
            <h1 className='text-black font-snippet '>clip</h1>
            <h1 className='font-pacifico text-light-Purple'>Vault</h1>
          </div>
          <button className='font-MavenPro text-xs bg-black px-2 py-1 rounded-full text-white flex items-center'>Light/Dark</button>
        </div>

        <div className="flex items-center m-auto w-[243px] relative border border-black rounded-full antialiased z-10">
          <div
            ref={indicatorRef}
            className="absolute bg-light-Purple rounded-full transition-all duration-300 ease-out h-[50px] z-[-1]"
            style={{ width: '0px', transform: 'translateX(0)' }}
          ></div>

          <div
            ref={tabRefs.youtube}
            onClick={() => handleTabChange('youtube')}
            className={`py-2 px-4 m-1 font-magra text-2xl cursor-pointer ${activeTab === 'youtube' ? 'text-white' : 'text-gray-500'}`}
          >
            YouTube
          </div>

          <div
            ref={tabRefs.reddit}
            onClick={() => handleTabChange('reddit')}
            className={`py-2 px-4 ml-4 mr-1 font-magra text-2xl cursor-pointer ${activeTab === 'reddit' ? 'text-white' : 'text-gray-500'}`}
          >
            Reddit
          </div>
        </div>

        <div className="flex items-center select-none justify-center mt-8 text-6xl xs:text-3xl sm:text-5xl md:text-6xl transition-all duration-300">
          <h1
            className={`font-DarkerGro text-light-Purple mr-3 transition-scale duration-300 ${isFading ? 'scale-105' : 'scale-100'}`}
          >
            {activeTab === 'youtube' ? 'YouTube' : 'Reddit'}
          </h1>
          <h1 className="font-DarkerGro ">Video Downloader</h1>
        </div>

        <div className="flex items-center justify-center mt-14">
          <div className='inline-flex items-center justify-between border p-2 border-black rounded-full antialiased md:min-w-[400px] md:max-w-[600px]'>
            <input
              type="text"
              placeholder={`Paste your ${activeTab === 'youtube' ? 'YouTube' : 'Reddit'} link here...`}
              className='bg-transparent flex-1 outline-none px-3 font-MavenPro antialiased font-semibold'
            />
            <button className='bg-light-Purple font-MavenPro font-bold text-white rounded-full px-8 py-2 mr-0'>GO!</button>
          </div>
        </div>

        <div
          className={`fixed bottom-[-60px] right-[-60px] w-[350px] h-[350px] translate-x-[45%] translate-y-[45%] bg-no-repeat bg-cover opacity-35 select-none transition-transform duration-300 ${isRotating ? 'rotate-0' : ''}`}
          style={{
            backgroundImage: `url(${activeTab === 'youtube' ? ytLogo : redLogo})`,
            transform: isRotating ? 'rotate(0deg)' : 'rotate(-30deg)',
          }}
        ></div>
        <DownYT />
        <div className='h-[600px]'></div>

      </div>
    </>
  );
}

export default Home;
