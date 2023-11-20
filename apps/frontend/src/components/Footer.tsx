import React, { useEffect, useState } from 'react';

function Footer() {
  const [showFooter, setShowFooter] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Verifica la posición de desplazamiento y decide si mostrar o no el footer
      const shouldShowFooter = window.scrollY > 100; // Ajusta este valor según sea necesario

      setShowFooter(shouldShowFooter);
    };

    // Agrega el event listener para el desplazamiento
    window.addEventListener('scroll', handleScroll);

    // Limpia el event listener al desmontar el componente
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); // El segundo argumento [] asegura que el efecto se ejecute solo una vez al montar el componente

  return (
    <footer className={`p-4 text-white bg-gray-800 ${showFooter ? 'visible' : 'hidden'}`}>
      <div className="container mx-auto text-center">
        <p>&copy; 2023 Tu Empresa de Comidas</p>
      </div>
    </footer>
  );
}

export default Footer;
