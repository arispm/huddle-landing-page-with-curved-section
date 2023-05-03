import React from 'react';
import bgTopDesk from '../images/bg-section-top-desktop-1.svg';
import bgTopDesk2 from '../images/bg-section-top-desktop-2.svg';
import bgBottomDesk from '../images/bg-section-bottom-desktop-1.svg';
import bgBottomDesk2 from '../images/bg-section-bottom-desktop-2.svg';
import bgTopMobile from '../images/bg-section-top-mobile-1.svg';
import bgTopMobile2 from '../images/bg-section-top-mobile-2.svg';
import bgBottomMobile from '../images/bg-section-bottom-mobile-1.svg';
import bgBottomMobile2 from '../images/bg-section-bottom-mobile-2.svg';
import grow from '../images/illustration-grow-together.svg';
import flowing from '../images/illustration-flowing-conversation.svg';
import users from '../images/illustration-your-users.svg';

const Feature = () => {
  return (
    <>
      <picture>
        <source media="(min-width:750px)" srcSet={bgTopDesk} />
        <img src={bgTopMobile} className="w-full" alt="bg-section-top-mobile-1" />
      </picture>
      <section className="bg-[#f5faff] p-8">
        <div className="container mx-auto flex flex-col md:flex-row-reverse md:justify-between items-center">
          <div>
            <img src={grow} alt="illustration-grow-together" className="w-full" />
          </div>
          <div>
            <h3 className="text-2xl mb-6 text-center">Grow Together</h3>
            <p className="text-gray-500 text-center">Generate meaningful discussions with your audience and build a strong, loyal community. Think of the insightful conversations you miss out on with a feedback form.</p>
          </div>
        </div>
      </section>

      <picture>
        <source media="(min-width:750px)" srcSet={bgBottomDesk} />
        <img src={bgBottomMobile} className="w-full" alt="bg-section-bottom-mobile-1" />
      </picture>
      <section className="p-8">
        <div className="container mx-auto flex flex-col md:flex-row md:justify-between items-center">
          <div>
            <img src={flowing} alt="illustration-flowing-conversation" className="w-full" />
          </div>
          <div>
            <h3 className="text-2xl mb-6 text-center">Flowing Conversations</h3>
            <p className="text-gray-500 text-center">You wouldn't paginate a conversation in real life, so why do it online? Our threads have just-in-time loading for a more natural flow.</p>
          </div>
        </div>
      </section>

      <picture>
        <source media="(min-width:750px)" srcSet={bgTopDesk2} />
        <img src={bgTopMobile2} className="w-full" alt="bg-section-top-mobile-2" />
      </picture>
      <section className="bg-[#f5faff] p-8">
        <div className="container mx-auto flex flex-col md:flex-row-reverse md:justify-between items-center">
          <div>
            <img src={users} alt="illustration-your-users" className="w-full" />
          </div>
          <div>
            <h3 className="text-2xl mb-6 text-center">Your Users</h3>
            <p className="text-gray-500 text-center">It takes no time at all to integrate Huddle with your app's authentication solution. This means, once signed in to your app, your users can start chatting immediately.</p>
          </div>
        </div>
      </section>
      <picture>
        <source media="(min-width:750px)" srcSet={bgBottomDesk2} />
        <img src={bgBottomMobile2} className="w-full" />
      </picture>

      <section>
        <div className="container mx-auto flex items-center justify-center flex-col mb-7">
          <h4 className="text-3xl text-center">Ready To Build Your Community?</h4>
          <button type="button" className="py-5 px-24 rounded-full bg-[#ff52bf] hover:bg-[#ff8fd8] text-white mb-10">
            Get Started For Free
          </button>
        </div>
      </section>
    </>
  );
};

export default Feature;
