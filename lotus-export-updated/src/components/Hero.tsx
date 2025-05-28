import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="bg-artesanato-background py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-title text-artesanato-text mb-4">
              <span className="script-font text-artesanato-accent">Lótus</span> Macramê
            </h1>
            <p className="text-xl md:text-2xl font-light mb-6 text-artesanato-text">
              Arte em cada nó, beleza em cada detalhe
            </p>
            <p className="mb-8 text-artesanato-text">
              Na Lótus Macramê, cada criação nasce do cuidado, da delicadeza e da conexão com o natural. Utilizamos fios de algodão e técnicas artesanais para transformar simplicidade em beleza — em forma de bolsas, painéis decorativos e acessórios únicos.
            </p>
            <p className="mb-8 text-artesanato-text">
              Mais que produtos, entregamos afeto tecido à mão, para tornar seu dia a dia mais leve, autêntico e cheio de significado.
            </p>
            <div className="flex space-x-4">
              <a href="#produtos" className="btn btn-accent">
                Ver produtos
              </a>
            </div>
          </div>
          <div className="md:w-1/2 rounded-image-container">
            <img 
              src="/images/macrame-telha.jpeg" 
              alt="Painel de macramê na cor telha" 
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
