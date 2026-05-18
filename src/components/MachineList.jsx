import { CheckCircle2 } from 'lucide-react';

export default function MachineList() {
  const machines = [
    "Mesin Canal C atau Bajaringan",
    "Mesin Reng",
    "Mesin Holo",
    "Mesin Spandek",
    "Mesin Seng Gelombang",
    "Mesin Genteng Metal",
    "Mesin Shearing atau Potong Plat",
    "Mesin Recoiler",
    "Mesin Slitting Coil",
    "Mesin Penekuk pipa",
    "Mesin Straightening atau Leveler",
    "Mesin CNP Plat",
    "Mesin Unistrut Chanel plat",
    "Mesin Tekuk Spandek",
    "Mesin Semprot Genteng/Spandek",
    "Mesin Siku plat",
    "Mesin Furing",
    "Mesin design custom",
    "Mesin Bondek",
    "Mesin Talang Jurai",
    "Mesin Talang Air",
    "Mesin Nok V/C"
  ];

  return (
    <section className="py-24 bg-bg-secondary relative overflow-hidden">
      {/* Decorative BG element matching the screenshot */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] translate-y-1/4 translate-x-1/4 pointer-events-none opacity-20 dark:opacity-10 hidden md:block">
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          <path fill="none" stroke="#c0000c" strokeWidth="0.5" d="M41.7,-74.6C53.7,-68.8,63.1,-56.9,71.5,-44.2C80,-31.6,87.6,-18.2,87.8,-4.6C87.9,8.9,80.7,22.7,72.4,35.4C64.1,48.1,54.8,59.8,42.8,68.2C30.8,76.6,15.4,81.7,0.3,81.2C-14.8,80.7,-29.6,74.5,-42.6,66C-55.6,57.5,-66.8,46.7,-74.6,33.5C-82.4,20.3,-86.8,4.7,-84.9,-10.3C-83,-25.3,-74.9,-39.7,-64.1,-50.9C-53.3,-62.1,-39.8,-70,-26,-74.7C-12.2,-79.4,1.8,-80.9,15.9,-78.9C30.1,-76.9,44.3,-71.4,41.7,-74.6Z" transform="translate(100 100) scale(1.1)" />
          <path fill="none" stroke="#ff4444" strokeWidth="0.5" d="M45.7,-76.6C57.7,-70.8,67.1,-58.9,75.5,-46.2C84,-33.6,91.6,-20.2,91.8,-6.6C91.9,6.9,84.7,20.7,76.4,33.4C68.1,46.1,58.8,57.8,46.8,66.2C34.8,74.6,19.4,79.7,4.3,79.2C-10.8,78.7,-25.6,72.5,-38.6,64C-51.6,55.5,-62.8,44.7,-70.6,31.5C-78.4,18.3,-82.8,2.7,-80.9,-12.3C-79,-27.3,-70.9,-41.7,-60.1,-52.9C-49.3,-64.1,-35.8,-72,-22,-76.7C-8.2,-81.4,5.8,-82.9,19.9,-80.9C34.1,-78.9,48.3,-73.4,45.7,-76.6Z" transform="translate(100 100) scale(1.0)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center md:text-left mb-12">
          <h2 className="text-3xl lg:text-5xl font-black text-[#c0000c] uppercase tracking-tight">
            Mesin Yang Pernah Kami Buat
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-x-8 gap-y-4">
          {machines.map((machine, idx) => (
            <div key={idx} className="flex items-center gap-3 p-3 rounded-lg hover:bg-glass transition-colors">
              <div className="w-2 h-2 rounded-full bg-[#c0000c] shrink-0 shadow-[0_0_8px_#c0000c]"></div>
              <span className="text-text-primary font-bold text-sm sm:text-base">{machine}</span>
            </div>
          ))}
        </div>

        <div className="mt-16 pt-8 border-t-4 border-[#c0000c] inline-block">
          <h3 className="text-text-primary font-black tracking-widest text-sm sm:text-base uppercase">
            PT. ALBERIO PRATAMA ABADI
          </h3>
        </div>
      </div>
    </section>
  );
}
