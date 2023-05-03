import React from 'react';
import scrMockup from '../images/screen-mockups.svg';
import iconCom from '../images/icon-communities.svg';
import iconMsg from '../images/icon-messages.svg';

const Hero = () => {
  return (
    <>
      <section>
        <div class="container  flex-col mx-auto my-20">
          <div className=" flex flex-col justify-center items-center">
            <h1 class="text-4xl">Build The Community Your Fans Will Love</h1>
            <p class="my-8 max-w-lg mx-auto text-center">Huddle re-imagines the way we build communities. You have a voice, but so does your audience. Create connections with your users as you engage in genuine discussion.</p>
            <button type="button" class="py-3 px-10 rounded-full bg-[#ff52bf] hover:bg-[#ff8fd8] text-white mt-8 mb-10">
              Get Started For Free
            </button>
          </div>
          <div>
            <img src={scrMockup} alt="screen-mockups" class="w-full" />
          </div>
        </div>
      </section>

      <section>
        <div class="container mx-auto flex flex-col text-left md:flex-row md:justify-around my-28">
          <div>
            <img src={iconCom} alt="communities-icon" />
            <h2 class="text-6xl mt-6 mb-4 ">1.4k+</h2>
            <p class="text-gray-500">Communities Formed</p>
          </div>
          <div>
            <img src={iconMsg} alt="messages-icon" />
            <h2 class="text-6xl mt-6 mb-4">2.7m+</h2>
            <p class=" text-gray-500">Messages Sent</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
