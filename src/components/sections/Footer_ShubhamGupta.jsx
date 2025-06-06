import Image from 'next/image';
import Link from 'next/link';

export default function Footer2({ content, items }) {
  const {
    title = 'Your Company',
    copyright = `© ${new Date().getFullYear()} Your Company. All rights reserved.`,
    image_url,
  } = content || {};

  const socialLinks = items?.length
    ? [...items].sort((a, b) => (a.position || 0) - (b.position || 0))
    : [
        { title: 'Twitter', icon: 'twitter', cta_link: 'https://twitter.com' },
        { title: 'Facebook', icon: 'facebook', cta_link: 'https://facebook.com' },
        { title: 'Instagram', icon: 'instagram', cta_link: 'https://instagram.com' },
        { title: 'LinkedIn', icon: 'linkedin', cta_link: 'https://linkedin.com' },
      ];

  const iconMap = {
    twitter: (
      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M22 4.5a8.3 8.3 0 01-2.36.65A4.1 4.1 0 0021.4 3a8.19 8.19 0 01-2.6 1 4.1 4.1 0 00-7 3.74A11.65 11.65 0 013 4.1a4.1 4.1 0 001.27 5.47A4.07 4.07 0 012.8 9v.05a4.1 4.1 0 003.29 4 4.1 4.1 0 01-1.85.07 4.1 4.1 0 003.83 2.84A8.24 8.24 0 012 19.54 11.62 11.62 0 008.29 21c7.55 0 11.67-6.25 11.67-11.67v-.53A8.36 8.36 0 0022 4.5z" />
      </svg>
    ),
    facebook: (
      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M22 12a10 10 0 10-11.5 9.95v-7.05h-2.1v-2.9h2.1v-2.2c0-2.08 1.24-3.2 3.14-3.2.9 0 1.84.16 1.84.16v2.02h-1.04c-1.02 0-1.33.63-1.33 1.28v1.54h2.27l-.36 2.9h-1.91v7.05A10 10 0 0022 12z" />
      </svg>
    ),
    instagram: (
      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M7 2C4.24 2 2 4.24 2 7v10c0 2.76 2.24 5 5 5h10c2.76 0 5-2.24 5-5V7c0-2.76-2.24-5-5-5H7zm10 2c1.65 0 3 1.35 3 3v10c0 1.65-1.35 3-3 3H7c-1.65 0-3-1.35-3-3V7c0-1.65 1.35-3 3-3h10zm-5 3a5 5 0 100 10 5 5 0 000-10zm0 2a3 3 0 110 6 3 3 0 010-6zm4.5-1a1 1 0 100 2 1 1 0 000-2z" />
      </svg>
    ),
    linkedin: (
      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M4.98 3.5a2.5 2.5 0 11-.01 5.01A2.5 2.5 0 014.98 3.5zM3 9h4v12H3V9zm7 0h3.8v1.71h.05c.53-.99 1.83-2.03 3.77-2.03 4.03 0 4.77 2.65 4.77 6.09V21h-4v-5.58c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.94V21H10V9z" />
      </svg>
    ),
  };

  return (
    <footer className="bg-gray-950 text-gray-400 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center text-center md:text-left">
          {/* Logo */}
          <div>
            {image_url ? (
              <Link href="/" className="inline-block">
                <Image
                  src={image_url}
                  alt={title}
                  width={150}
                  height={50}
                  className="h-auto w-auto mx-auto md:mx-0"
                />
              </Link>
            ) : (
              <Link href="/" className="text-2xl font-semibold text-white">
                {title}
              </Link>
            )}
          </div>

          {/* Social Icons */}
          <div className="flex justify-center gap-4">
            {socialLinks.map((link, idx) => (
              <Link
                key={idx}
                href={link.cta_link || '#'}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-gray-800 text-white hover:bg-[#c09873] hover:text-white transition-colors duration-300"
                aria-label={link.title}
              >
                {iconMap[link.icon?.toLowerCase()] || (
                  <span className="text-sm font-bold">{link.title[0]}</span>
                )}
              </Link>
            ))}
          </div>

          {/* Copyright */}
          <div className="text-sm">
            {copyright}
          </div>
        </div>
      </div>
    </footer>
  );
}
