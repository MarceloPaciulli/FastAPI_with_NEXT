import Link from 'next/link';
import React from 'react';

const Header = () => {
  return (
    <header>
      <nav>
          <Link href="/">Inicio</Link>
          <Link href="/login">Iniciar sesión</Link>
      </nav>
    </header>
  );
}

export default Header;
