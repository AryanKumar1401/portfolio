'use client';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#2D3436] text-white py-8">
      <div className="max-w-6xl mx-auto px-4 text-center font-merriweather">
        <p>&copy; {currentYear} Aryan Kumar.</p>
      </div>
    </footer>
  );
};
