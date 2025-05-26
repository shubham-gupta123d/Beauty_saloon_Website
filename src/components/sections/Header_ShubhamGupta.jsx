'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Phone, MapPin, MoreHorizontal } from 'lucide-react';

export default function Header() {
  return (
    <header className="w-full bg-white shadow-sm px-6 lg:px-12 py-4 flex items-center justify-between">
      {/* Logo */}
      <div className="flex-shrink-0">
        <Image src="/logo.png" alt="Nelson" width={100} height={40} />
        {/* If using text logo instead of image: */}
        {/* <h1 className="text-2xl font-semibold italic text-black">Nelson</h1> */}
      </div>

      {/* Navigation Menu */}
      <nav className="hidden lg:flex gap-8 text-[15px] items-center">
        <Link href="#" className="text-[#007FAF] font-medium">Home</Link>
        <Link href="#services" className="text-black hover:text-[#007FAF] transition">Services</Link>
        <Link href="#gallery" className="text-black hover:text-[#007FAF] transition">Gallery</Link>
        <Link href="#product" className="text-black hover:text-[#007FAF] transition">Our Product</Link>
        <Link href="#appointment" className="text-black hover:text-[#007FAF] transition">Appointment</Link>
        <Link href="#about" className="text-black hover:text-[#007FAF] transition">About us</Link>
        <Link href="#testimonial" className="text-black hover:text-[#007FAF] transition">Testimonials</Link>
        <MoreHorizontal className="text-black h-5 w-5" />
      </nav>

      {/* Contact Info */}
      <div className="hidden lg:flex items-center gap-6 text-sm text-black">
        <div className="flex items-center gap-2">
          <Phone className="h-4 w-4 text-[#007FAF]" />
          <span>1.800.218.20.20</span>
        </div>
        <div className="flex items-center gap-2">
          <MapPin className="h-4 w-4 text-[#007FAF]" />
          <span>128 Winston st, New York</span>
        </div>
      </div>
    </header>
  );
}
