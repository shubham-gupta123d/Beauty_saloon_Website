import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import Image from 'next/image';

const images = [
  '/img1.jpg', // left tall
  '/img2.jpg', // top middle
  '/img3.jpg', // center tall
  '/img4.jpg', // top right
  '/img5.jpg', // bottom middle left
  '/img6.jpg', // bottom middle right
];

const gridStyles = [
  'row-span-2', // img1
  '',           // img2
  'row-span-2', // img3
  '',           // img4
  '',           // img5
  '',           // img6
];

export default function GallerySection() {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <>
      <div className="grid grid-cols-4 grid-rows-2 gap-0 w-full h-[600px]" id='gallery'>
        {images.map((src, index) => (
          <div
            key={src}
            className={`relative group overflow-hidden cursor-pointer ${gridStyles[index]}`}
          >
            <Image
              src={src}
              alt={`Gallery Image ${index + 1}`}
              fill
              className="object-cover w-full h-full"
            />
            <OverlayIcon onClick={() => setSelectedImage(src)} />
          </div>
        ))}
      </div>

      {/* Modal Popup */}
      {selectedImage && (
        <div
          onClick={() => setSelectedImage(null)}
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
        >
          <div className="relative">
            <Image
              src={selectedImage}
              alt="Full View"
              width={900}
              height={600}
              className="max-w-full max-h-[90vh] object-contain"
            />
            <button
              className="absolute top-2 right-2 text-white text-3xl"
              onClick={() => setSelectedImage(null)}
            >
              &times;
            </button>
          </div>
        </div>
      )}
    </>
  );
}

// Separate overlay icon component
function OverlayIcon({ onClick }) {
  return (
    <div
      onClick={(e) => {
        e.stopPropagation();
        onClick();
      }}
      className="absolute inset-0 bg-black bg-opacity-30 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center z-10"
    >
      <FaSearch className="text-white text-3xl" />
    </div>
  );
}
