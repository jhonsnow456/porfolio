import { AnimatePresence, motion } from 'framer-motion';
import React from 'react'
import { EvervaultCard, Icon } from "./ui/EverValutCard";

const Approach = () => {
  return (
    <section className="w-full py-20">
      <h1 className="heading">
        My <span className="text-purple">approach</span>
      </h1>

      {/* remove bg-white dark:bg-black */}
      <div className="my-20 flex flex-col lg:flex-row items-center justify-center w-full gap-4">
        <Card 
          approch='Phase 1' 
          title="Planning & Strategy"
          des="We'll collaborate to map out your website's goals, target audience, 
          and key functionalities. We'll discuss things like site structure, 
          navigation, and content requirements."
        />
        <Card 
          approch='Phase 2'
          title="Development & Progress Update"
          des="Once we agree on the plan, I cue my lofi playlist and dive into
          coding. From initial sketches to polished code, I keep you updated
          every step of the way."
        />
        <Card 
          approch='Phase 3'
          title="Development & Launch"
          des="This is where the magic happens! Based on the approved design, 
          I'll translate everything into functional code, building your website
          from the ground up."
        />
      </div>
    </section>
  )
}

export default Approach;

 
const Card = ({approch, title, des}:{approch:string; title:string; des:string}) => {
  return (
    <div className="border border-black/[0.2] dark:border-white/[0.2] flex flex-col items-start max-w-sm mx-auto p-4 relative h-[40rem]">
      <Icon className="absolute h-6 w-6 -top-3 -left-3 dark:text-white text-black" />
      <Icon className="absolute h-6 w-6 -bottom-3 -left-3 dark:text-white text-black" />
      <Icon className="absolute h-6 w-6 -top-3 -right-3 dark:text-white text-black" />
      <Icon className="absolute h-6 w-6 -bottom-3 -right-3 dark:text-white text-black" />
 
      <EvervaultCard text={approch} />

      <h2>{title}</h2>
      <p>{des}</p>
    </div>
  );
}
