import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative w-full h-screen bg-[#d6e5ed] flex items-center justify-between px-8 md:px-16 lg:px-24">
      {/* Text content */}
      <div className="max-w-xl z-10">
        <h1 className="text-5xl md:text-6xl font-light leading-tight text-black">
          Brush touch of <br />
          <span className="font-semibold">perfection</span>
        </h1>
        <div className="h-1 w-12 bg-gray-400 my-6"></div>
        <Link href="/services" passHref>
          <button className="bg-[#008bb1] hover:bg-[#00779a] text-white font-semibold text-sm px-6 py-4 mt-4 uppercase tracking-wide shadow-md">
            View Our Services
          </button>
        </Link>
      </div>

      {/* Image content */}
      <div className="hidden md:block absolute right-0 bottom-0 h-full w-1/2">
        <Image
          src="/hero-model.png" // Replace with the image from your upload
          alt="Model with brush"
          fill
          className="object-contain object-right"
          priority
        />
      </div>
    </section>
  );
}
