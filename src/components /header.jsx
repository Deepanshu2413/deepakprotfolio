// src/components/Header.js
import React from 'react';

function Header() {
  return (
    <header className="bg-gradient-to-r from-slate-900 via-black to-slate-800 shadow-lg p-6">
      <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center gap-3">
        <h1 className="text-4xl font-extrabold text-white tracking-wide drop-shadow-lg">
          Deepak Kumar
        </h1>
        <p className="text-slate-300 text-2xl font-medium italic">
          SolidWorks & AutoCAD Designer
        </p>
      </div>
    </header>
  );
}

export default Header;