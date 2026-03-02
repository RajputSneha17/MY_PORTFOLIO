import { Code2, Database, Globe, Cpu } from "lucide-react";

export default function Profile() {
  return (
    <div
      className="relative flex justify-center items-center h-screen overflow-hidden
bg-white dark:bg-[#071c24] transition-all duration-500"
    >
      {/* LIGHT MODE BACKGROUND */}
      <div
        className="absolute w-[800px] h-[800px]
  bg-gray-200/40 dark:hidden
  rounded-full blur-3xl"
      ></div>

      {/* DARK MODE GLOW */}
      <div
        className="absolute w-[900px] h-[900px]
  hidden dark:block
  bg-gradient-to-r from-teal-500/20 via-cyan-500/20 to-teal-500/20
  rounded-full blur-3xl animate-float"
      ></div>

      {/* Subtle Grid (lighter in white) */}
      <div
        className="absolute inset-0 opacity-[0.08] dark:opacity-[0.06]
  bg-[linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)]
  dark:bg-[linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)]
  bg-[size:40px_40px]"
      ></div>

      {/* Floating Dots */}
      <div className="absolute top-20 left-40 w-3 h-3 bg-teal-400 rounded-full animate-pulse"></div>
      <div className="absolute bottom-32 right-52 w-2 h-2 bg-cyan-400 rounded-full animate-pulse delay-1000"></div>
      <div className="absolute top-1/3 right-20 w-2 h-2 bg-teal-300 rounded-full animate-pulse delay-2000"></div>

      {/* ===== YOUR ORIGINAL CIRCLE (UNCHANGED) ===== */}
      <div className="relative w-[420px] h-[420px] flex items-center justify-center">
        {/* Rotating Orbit */}
        <div className="absolute w-full h-full animate-spin-slow">
          <OrbitIcon angle={0}>
            <Code2 size={22} />
          </OrbitIcon>
          <OrbitIcon angle={90}>
            <Database size={22} />
          </OrbitIcon>
          <OrbitIcon angle={180}>
            <Globe size={22} />
          </OrbitIcon>
          <OrbitIcon angle={270}>
            <Cpu size={22} />
          </OrbitIcon>
        </div>

        {/* Outer Border Glow */}
        <div
          className="absolute w-full h-full rounded-full 
        border border border-gray-300 dark:border-teal-400/40
shadow-md dark:animate-border-glow"
        ></div>

        {/* Center Image */}
        <div
          className="w-72 h-72 rounded-full overflow-hidden 
        border-4 dark:border-white
        shadow-[0_0_80px_#14b8a6] z-10"
        >
          <img
            src="/profile.jpg"
            alt="profile"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
}

/* ================= ORBIT ICON ================= */

function OrbitIcon({ children, angle }) {
  return (
    <div
      className="absolute w-full h-full flex items-center justify-center"
      style={{ transform: `rotate(${angle}deg)` }}
    >
      <div className="translate-x-[210px] animate-spin-reverse">
        <div
          className="p-4 rounded-full 
        bg-gray-100 dark:bg-[#0c2b35] 
        text-teal-500 dark:text-teal-400
        shadow-[0_0_25px_#14b8a6]"
        >
          {children}
        </div>
      </div>
    </div>
  );
}
