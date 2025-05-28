import React, { useState } from 'react';

interface Props {
  // Você pode adicionar props específicas aqui se necessário
}

const Header: React.FC<Props> = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [categoriesOpen, setCategoriesOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    if (categoriesOpen) setCategoriesOpen(false);
  };

  const toggleCategories = () => {
    setCategoriesOpen(!categoriesOpen);
  };

  const categories = [
    "Painéis",
    "Bolsas",
    "Cordões",
    "Pulseiras",
    "Tornozeleiras"
  ];

  return (
    <header className="bg-artesanato-background shadow-sm">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <a href="#sobre" className="flex items-center">
            <img 
              src="/images/logo/lotus-logo.jpg" 
              alt="Lótus Macramê" 
              className="h-16 w-auto rounded-md"
            />
          </a>
        </div>
        
        {/* Menu Hambúrguer para Mobile */}
        <div className="md:hidden">
          <button 
            onClick={toggleMenu}
            className="text-artesanato-text focus:outline-none"
            aria-label="Menu"
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-6 w-6" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M4 6h16M4 12h16M4 18h16" 
              />
            </svg>
          </button>
        </div>
        
        {/* Menu para Desktop */}
        <nav className="hidden md:flex space-x-8">
          <a href="#" className="header-nav-link">Início</a>
          <a href="#produtos" className="header-nav-link">Produtos</a>
          
          {/* Dropdown de Categorias para Desktop */}
          <div className="relative">
            <button 
              onClick={toggleCategories}
              className="header-nav-link flex items-center"
              aria-expanded={categoriesOpen}
            >
              Categorias
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className={`h-4 w-4 ml-1 transition-transform ${categoriesOpen ? 'rotate-180' : ''}`} 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            
            {categoriesOpen && (
              <div className="absolute z-10 mt-2 w-48 bg-white rounded-md shadow-lg py-1">
                {categories.map((category, index) => (
                  <a 
                    key={index}
                    href={`#${category.toLowerCase()}`}
                    className="block px-4 py-2 text-sm text-artesanato-text hover:bg-artesanato-background hover:text-artesanato-accent"
                    onClick={() => setCategoriesOpen(false)}
                  >
                    {category}
                  </a>
                ))}
              </div>
            )}
          </div>
          
          <a href="#sobre" className="header-nav-link">Sobre nós</a>
          <a href="#contato" className="header-nav-link">Contato</a>
        </nav>
      </div>
      
      {/* Menu Mobile Dropdown */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="container mx-auto px-4 py-2">
            <nav className="flex flex-col space-y-3 py-3">
              <a 
                href="#" 
                className="text-artesanato-text hover:text-artesanato-accent transition-colors py-2"
                onClick={() => setMenuOpen(false)}
              >
                Início
              </a>
              <a 
                href="#produtos" 
                className="text-artesanato-text hover:text-artesanato-accent transition-colors py-2"
                onClick={() => setMenuOpen(false)}
              >
                Produtos
              </a>
              
              {/* Categorias para Mobile */}
              <div className="py-2">
                <div 
                  className="flex justify-between items-center text-artesanato-text hover:text-artesanato-accent transition-colors"
                  onClick={toggleCategories}
                >
                  <span>Categorias</span>
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    className={`h-4 w-4 transition-transform ${categoriesOpen ? 'rotate-180' : ''}`} 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
                
                {categoriesOpen && (
                  <div className="pl-4 mt-2 space-y-2">
                    {categories.map((category, index) => (
                      <a 
                        key={index}
                        href={`#${category.toLowerCase()}`}
                        className="block text-artesanato-text hover:text-artesanato-accent transition-colors py-1"
                        onClick={() => setMenuOpen(false)}
                      >
                        {category}
                      </a>
                    ))}
                  </div>
                )}
              </div>
              
              <a 
                href="#sobre" 
                className="text-artesanato-text hover:text-artesanato-accent transition-colors py-2"
                onClick={() => setMenuOpen(false)}
              >
                Sobre nós
              </a>
              <a 
                href="#contato" 
                className="text-artesanato-text hover:text-artesanato-accent transition-colors py-2"
                onClick={() => setMenuOpen(false)}
              >
                Contato
              </a>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
