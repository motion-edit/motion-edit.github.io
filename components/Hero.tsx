import React from 'react';
import { motion } from 'framer-motion';
import { HERO_GRID_ITEMS } from '../constants';
import { FileText, Github, Box, Rocket, Database } from 'lucide-react';

const AUTHORS = [
  { name: "Yixin Wan", url: "https://elainew728.github.io/" },
  { name: "Lei Ke", url: "https://www.kelei.site/" },
  { name: "Wenhao Yu", url: "https://wyu97.github.io/" },
  { name: "Kai-Wei Chang", url: "https://web.cs.ucla.edu/~kwchang/" },
  { name: "Dong Yu", url: "https://sites.google.com/view/dongyu888/" },
];

const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden bg-white">
      <div className="max-w-[1400px] mx-auto px-2">
        
        {/* Header Text */}
        <div className="text-center max-w-6xl mx-auto mb-12 space-y-6">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl font-bold tracking-tight mb-8 text-gray-900"
          >
            MotionEdit: Benchmarking and Learning Motion-Centric Image Editing
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-xl text-gray-500 font-light italic"
          >
            {AUTHORS.map((author, index) => (
              <React.Fragment key={author.name}>
                <a 
                  href={author.url} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-gray-600 hover:text-indigo-600 transition duration-150 underline mb-16"
                >
                  {author.name}
                </a>
                {index < AUTHORS.length - 1 && ', '}
              </React.Fragment>
            ))}
          </motion.p>

          {/* Resource Buttons */}
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="flex flex-wrap justify-center gap-4 my-8"
          >
            <a 
              href="https://motion-edit.github.io/" 
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-blue-600/10 hover:bg-blue-600/20 font-medium transition-colors"
            >
              <FileText size={18} />
              Paper
            </a>
            <a 
              href="https://motion-edit.github.io/" 
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-blue-600/10 hover:bg-blue-600/20 font-medium transition-colors"
            >
              <Github size={18} />
              Code
            </a>
            <a 
              href="https://motion-edit.github.io/" 
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-blue-600/10 hover:bg-blue-600/20 font-medium transition-colors"
            >
              <Box size={18} />
              Model
            </a>
            {/* <a 
              href="https://huggingface.co/spaces" 
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-blue-600/10 hover:bg-blue-600/20 font-medium transition-colors"
            >
              <Rocket size={18} />
              Space
            </a> */}
            {/* <a 
              href="https://huggingface.co/datasets/elaine728/MotionEdit-Bench" 
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-blue-600/10 hover:bg-blue-600/20 font-medium transition-colors"
            >
              <Database size={18} />
              Dataset
            </a> */}
          </motion.div>
        </div>
        {/* Video Block */}
        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-4xl mx-auto mb-24 rounded-xl overflow-hidden shadow-2xl border border-gray-100 bg-black"
        >
          <div className="aspect-video relative w-full">
             <video 
               className="w-full h-full object-contain"
               controls
               muted
               autoPlay
               loop
               playsInline
             >
                <source src="motionedit_images/motionedit_v3.mp4" type="video/mp4" />
                <div className="w-full h-full flex items-center justify-center text-white/50">
                  Video Placeholder
                </div>
             </video>
          </div>
        </motion.div>
        
        <div className="w-full flex justify-center my-12">
          <div className="h-px w-3/4 bg-gradient-to-r from-transparent via-gray-300 to-transparent" />
        </div>
        <div className="text-center max-w-6xl mx-auto mb-12 space-y-6">
          <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-2xl font-light text-gray-600"
            >
              We introduce <strong className="font-extrabold text-gray-600">MotionEdit</strong>, a novel dataset and benchmark for motion-centric image editing. We also propose <strong className="font-extrabold text-gray-600">MotionNFT</strong> (Motion-guided Negative-aware FineTuning), a post-training framework with motion alignment rewards to guide models on motion editing task.
          </motion.p>
        </div>
        <div className="w-full flex justify-center my-12">
          <div className="h-px w-3/4 bg-gradient-to-r from-transparent via-gray-300 to-transparent" />
        </div>

        {/* 👇 NEW EXPLANATORY SENTENCE HERE 👇 */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center text-small text-gray-500 font-small mb-4 max-w-7xl mx-auto"
        >
          * Images below showcase results from our <strong className="font-extrabold text-gray-600">MotionEdit</strong> model. Hover over any image to see the <span className="italic">Original Input Image</span> and the specific <span className="italic">Editing Prompt</span> used.
        </motion.p>
        {/* 👆 END OF NEW SENTENCE 👆 */}

        {/* Grid Gallery */}
        <div className="grid grid-cols-1 md:grid-cols-8 gap-4 md:gap-6 auto-rows-auto">
          {HERO_GRID_ITEMS.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className={`relative group rounded-xl overflow-hidden cursor-pointer ${item.span} h-64 md:h-80 lg:h-96 shadow-sm`}
            >
              {/* Default Image - Fades out on hover */}
              <img 
                src={item.image} 
                alt="Original content" 
                className="absolute inset-0 w-full h-full object-cover transition-all duration-700 group-hover:scale-105 group-hover:opacity-0"
              />

              {/* Hover Image - Fades in on hover */}
              <img 
                src={item.hoverImage} 
                alt="Hover variation" 
                className="absolute inset-0 w-full h-full object-cover opacity-0 transition-all duration-700 group-hover:scale-105 group-hover:opacity-100"
              />
              
              {/* Permanent Overlays (Simulating burned-in text) - Fades out on hover */}
              {item.overlayText && (
                <div className="absolute inset-0 pointer-events-none p-6 flex flex-col justify-end transition-opacity duration-300 group-hover:opacity-0">
                   {/* Special handling for text styles based on the item to mimic screenshot */}
                   {item.id === 1 ? (
                     <div className="bg-black/40 backdrop-blur-sm p-4 rounded-xl text-xs md:text-sm text-white/90 leading-relaxed max-w-md">
                       {item.prompt.substring(0, 150)}...
                     </div>
                   ) : (
                     <span className={`font-serif text-white text-3xl md:text-5xl text-shadow tracking-widest ${item.id === 6 ? 'font-cursive italic opacity-80' : 'font-bold'}`}>
                       {item.overlayText}
                     </span>
                   )}
                </div>
              )}

              {/* Hover Prompt Overlay - Fades in on hover */}
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-8 backdrop-blur-[1px]">
                <p className="text-white text-center font-medium leading-relaxed drop-shadow-md">
                  {item.prompt}
                </p>
              </div>
              
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Hero;