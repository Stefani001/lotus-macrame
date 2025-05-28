import React, { useState, useEffect } from 'react';

const ScrollToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showText, setShowText] = useState(false);
  const [lastScrollTop, setLastScrollTop] = useState(0);
  const [isNearBottom, setIsNearBottom] = useState(false);

  // Verificar se está próximo ao final da página
  const checkIfNearBottom = () => {
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    // Consideramos "próximo ao final" quando estiver a 90% da página
    const scrollPercentage = (scrollTop + windowHeight) / documentHeight;
    setIsNearBottom(scrollPercentage > 0.9);
  };

  // Mostrar botão quando rolar para baixo e detectar direção do scroll
  useEffect(() => {
    const toggleVisibility = () => {
      const currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;
      
      // Verificar se está rolando para cima (scrolling up)
      const isScrollingUp = currentScrollTop < lastScrollTop;
      
      // Mostrar botão quando estiver abaixo de 300px
      if (currentScrollTop > 300) {
        setIsVisible(true);
        
        // Mostrar texto quando estiver próximo ao final E rolando para cima
        if (isNearBottom && isScrollingUp) {
          setShowText(true);
        } else {
          setShowText(false);
        }
      } else {
        setIsVisible(false);
        setShowText(false);
      }
      
      // Atualizar a última posição de scroll
      setLastScrollTop(currentScrollTop <= 0 ? 0 : currentScrollTop);
    };

    const handleScroll = () => {
      checkIfNearBottom();
      toggleVisibility();
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollTop, isNearBottom]);

  // Função para rolar para o topo
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className={`fixed bottom-6 right-6 p-3 rounded-full bg-artesanato-accent text-white shadow-lg hover:bg-opacity-90 transition-all duration-300 z-50 flex items-center ${showText ? 'px-4' : ''}`}
          aria-label="Voltar ao topo"
        >
          {showText && (
            <span className="mr-2 font-medium">Voltar ao topo</span>
          )}
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
              d="M5 10l7-7m0 0l7 7m-7-7v18" 
            />
          </svg>
        </button>
      )}
    </>
  );
};

export default ScrollToTop;
