import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer id="contato" className="bg-artesanato-background py-12 border-t border-gray-200">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="mb-4">
              <img 
                src="/images/logo/lotus-logo.jpg" 
                alt="Lótus Macramê" 
                className="h-16 w-auto rounded-md"
              />
            </div>
            <p className="text-artesanato-text mb-4">
              Arte em cada nó, beleza em cada detalhe. Peças artesanais únicas feitas com amor e dedicação.
            </p>
          </div>
          
          <div>
            <h4 className="font-title text-lg mb-4 text-artesanato-text">Contato</h4>
            <ul className="space-y-2">
              <li className="text-artesanato-text">
                <span className="font-semibold">WhatsApp:</span>{' '}
                <a 
                  href="https://wa.me/5598987507060" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-artesanato-accent hover:underline"
                >
                  (98) 98750-7060
                </a>
              </li>
              <li className="text-artesanato-text">
                <span className="font-semibold">Instagram:</span>{' '}
                <a 
                  href="https://www.instagram.com/lotus_macrame1" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-artesanato-accent hover:underline"
                >
                  @lotus_macrame1
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-title text-lg mb-4 text-artesanato-text">Encomendas</h4>
            <p className="text-artesanato-text mb-4">
              Quer uma peça personalizada? Entre em contato conosco para fazer sua encomenda especial.
            </p>
            <a 
              href="https://wa.me/5598987507060?text=Olá!%20Gostaria%20de%20fazer%20uma%20encomenda%20personalizada." 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn btn-primary"
            >
              Fazer encomenda
            </a>
          </div>
        </div>
        
        <div className="border-t border-gray-200 mt-8 pt-8 text-center">
          <p className="text-artesanato-text text-sm">
            &copy; {new Date().getFullYear()} Lótus Macramê. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
