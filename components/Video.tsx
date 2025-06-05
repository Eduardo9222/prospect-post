import Image from "next/image";
import { PlayCircle } from "lucide-react";

const Video = () => {
  return (
    <section className="flex justify-center py-16 px-4 bg-white">
      <div className="relative max-w-4xl w-full rounded-[2rem] overflow-hidden shadow-xl">
        <Image
          src="/video.png"
          alt="Real Estate Sign"
          width={1200}
          height={600}
          className="w-full object-cover rounded-[2rem]"
        />

        <div className="absolute inset-0 flex items-center justify-center">
          <div className="bg-white/80 backdrop-blur-sm rounded-full p-2">
            <PlayCircle className="w-16 h-16 text-blue-700" />
          </div>
        </div>

        <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-[#2E3D56] to-transparent text-white text-center py-4 text-2xl font-bold tracking-wide rounded-b-[2rem]">
          REAL ESTATE SIGN INSTALLATION SERVICES
        </div>
      </div>
    </section>
  );
};

export default Video;