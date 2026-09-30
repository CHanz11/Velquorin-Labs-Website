// export default function Home() {
//   return (
//     <>
//       <section className="site-section">
//         <div className="site-container">
//           <p className="text-brand-light font-semibold">
//             VELQUORIN LABS
//           </p>

//           <h1 className="mt-4 max-w-4xl text-5xl font-semibold tracking-tight md:text-7xl">
//             Building intelligent solutions for{" "}
//             <span className="brand-gradient-text">
//               modern businesses.
//             </span>
//           </h1>

//           <p className="mt-6 max-w-2xl text-lg text-text-secondary">
//             AI chatbots, intelligent automation, conversational forms,
//             and custom AI solutions built to help businesses work smarter.
//           </p>

//           <div className="mt-10 flex flex-wrap gap-4">
//             <button
//               type="button"
//               className="rounded-xl bg-brand-primary px-6 py-3 font-medium text-white transition hover:bg-brand-light"
//             >
//               Primary Button
//             </button>

//             <button
//               type="button"
//               className="rounded-xl border border-border-default bg-surface px-6 py-3 font-medium text-white transition hover:bg-surface-elevated"
//             >
//               Secondary Button
//             </button>
//           </div>

//           <div className="mt-16 grid gap-5 md:grid-cols-3">
//             <div className="rounded-2xl border border-border-default bg-surface p-6">
//               <h2 className="text-xl">
//                 AI Chatbots
//               </h2>

//               <p className="mt-3">
//                 Intelligent conversational experiences for modern
//                 businesses.
//               </p>
//             </div>

//             <div className="rounded-2xl border border-border-default bg-surface p-6">
//               <h2 className="text-xl">
//                 AI Automation
//               </h2>

//               <p className="mt-3">
//                 Automate repetitive workflows and business processes.
//               </p>
//             </div>

//             <div className="rounded-2xl border border-border-default bg-surface p-6">
//               <h2 className="text-xl">
//                 AI Form Assistant
//               </h2>

//               <p className="mt-3">
//                 Transform traditional forms into intelligent
//                 conversations.
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// }
import HeroSection from "@/components/home/HeroSection";

export default function Home() {
  return (
    <main className="flex-1">
      <HeroSection />
    </main>
  );
}