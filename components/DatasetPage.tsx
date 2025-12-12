
import React from 'react';
import { motion } from 'framer-motion';

const DatasetPage: React.FC = () => {
  return (
    <section className="pt-32 pb-20 min-h-screen bg-white">
      <div className="max-w-[1400px] mx-auto px-4 md:px-8">
        <div className="text-center max-w-5xl mx-auto mb-14 space-y-6">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold tracking-tight mb-12 text-gray-900"
          >
            MotionEdit Dataset
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-500 font-light"
          >
            We curate MotionEdit, a high-quality dataset and benchmark specifically targeting motion editing, consisting of paired input-target image examples extracted and validated from high-resolution video frames to ensure accurate, natural, and coherent motion changes. MotionEdit captures realistic action and interaction changes that preserve identity, background, and style, in contrast to prior datasets where edit data is either static, unfaithful, or visually inconsistent. Moreover, our data is sourced from a large set of diverse videos, ensuring the assessment of diverse sub-categories of motion image editing, such as posture, orientation, and interaction changes.
          </motion.p>
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="max-w-[1200px] mx-auto rounded-xl overflow-hidden bg-gray-50 mb-8"
        >
          <div className="w-full bg-gray-100 flex items-center justify-center relative">
             <img 
               src="motionedit_images/examples/benchmark_comparison_v3.png" 
               alt="Benchmark Comparison" 
               className="w-full h-full object-cover"
             />
          </div>
          <div className="p-6 bg-white border-t border-gray-100">
            {/* <h3 className="text-xl font-bold text-gray-900 mb-2">Dataset Statistics</h3> */}
            <p className="text-gray-600">
              Comparison of existing image editing benchmarks with MotionEdit. Prior datasets lack reliable motion-edit supervision—either focusing only on appearance edits or offering low-quality, inconsistent action changes with artifacts. MotionEdit fills this gap by providing high-quality, instruction-following motion edits with paired input-target image data, enabling accurate evaluation and training of motion-aware image editing models.
            </p>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div className="bg-gray-50 p-8 rounded-xl border border-gray-100">
            <h3 className="text-2xl font-bold mb-4">Data Collection</h3>
            
            {/* 👇 REPLACE THE <p> TAG WITH THIS <ul> STRUCTURE 👇 */}
            <ul className="list-disc pl-5 space-y-2 text-gray-600 leading-relaxed">
              <li>
                We first obtain a broad range of image pairs by segmenting collected videos from <a href="https://huggingface.co/datasets/WenhaoWang/ShareVeo3" className="text-blue-600 hover:underline">ShareVeo3</a> and <a href="https://huggingface.co/datasets/nyuuzyou/klingai" className="text-blue-600 hover:underline">KlingAI</a> into 3-second windows and sample the first and last frame of each segment.
              </li>
              <li>
                Next, we leverage a MLLM to evaluate each frame pair along three critical dimensions: Setting Consistency, Motion and Interaction Change, and Subject Integrity and Quality. The MLLM also outputs a binary keep/discard decision.
              </li>
              <li>
                Finally, we convert the MLLM-generated motion-change summaries into user-style editing prompts by following Qwen-Image's prompt refinement procedure. This step removes unnecessary analysis details and standardizes prompts into imperative form.
              </li>
            </ul>
            {/* 👆 END OF REPLACEMENT 👆 */}
            
          </div>
          <div className="bg-gray-50 p-8 rounded-xl border border-gray-100">
            <h3 className="text-2xl font-bold mb-4">Dataset Statistics</h3>
            {/* 👇 REPLACE THE <p> TAG WITH THIS <ul> STRUCTURE 👇 */}
            <ul className="list-disc pl-5 space-y-2 text-gray-600 leading-relaxed">
              <li>
                Our final MotionEdit dataset consists of 10,157 motion-editable frame pairs, sourced from both Veo-3 and KlingAI video collections.
              </li>
              <li>
                We perform a random 90/10 train-test split, resulting in 9,142 training data and 1,015 evaluation data that constitutest MotionEdit-Bench. Each sample includes a source or input image, a target image exhibiting a real motion transition from the original video, and a precise motion edit instruction.
              </li>
              <li>
                MotionEdit's data can be generally categorized into 6 motion edit types: Pose / Posture, Locomotion / Distance, Object State / Formation, Orientation / Viewpoint, Subject-Object Interaction, and Inter-Subject Interaction.
              </li>
            </ul>
            {/* 👆 END OF REPLACEMENT 👆 */}
          </div>
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="rounded-xl overflow-hidden shadow-xl border border-gray-200 bg-gray-50 mb-12"
        >
          <div className="w-full bg-gray-100 flex items-center justify-center relative">
             <img 
               src="motionedit_images/examples/data_pipeline.png" 
               alt="Dataset Overview" 
               className="w-full h-full object-cover"
             />
          </div>
          <div className="p-6 bg-white border-t border-gray-100">
            {/* <h3 className="text-xl font-bold text-gray-900 mb-2">Dataset Statistics</h3> */}
            <p className="text-gray-600">
              The above figure illustrates MotionEdit's data construction pipeline. We segment raw videos, extract frame pairs, and automatically filter them using an MLLM data quality judge. For all kept pairs, we use a MLLM rewrite module to generate clean, motion-focused editing instructions. Our pipeline enables scalable construction of high-quality motion editing data and can be extended to much larger video corpora.
            </p>
          </div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="rounded-xl overflow-hidden shadow-xl border border-gray-200 bg-gray-50 mb-12"
        >
          <div className="w-full bg-gray-100 flex items-center justify-center relative">
             <img 
               src="motionedit_images/examples/data_examples_v2.png" 
               alt="Dataset Overview" 
               className="w-full h-full object-cover"
             />
          </div>
          <div className="p-6 bg-white border-t border-gray-100">
            
            {/* <h3 className="text-xl font-bold text-gray-900 mb-2">Dataset Statistics</h3> */}
            <p className="text-gray-600">
              Example categories of data in MotionEdit. Drawing from diverse video sources, our dataset captures a broad spectrum of motion transformations, including pose shifts, locomotion, viewpoint changes, and both subject–object and inter-subject interactions.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default DatasetPage;
