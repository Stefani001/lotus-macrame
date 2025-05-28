import React from 'react';

const AboutSection: React.FC = () => {
  return (
    <section id="sobre" className="py-16 bg-artesanato-background">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-center">Sobre Nós</h2>
        <div className="max-w-3xl mx-auto">
          <p className="mb-6 text-artesanato-text">
            A <span className="script-font text-artesanato-accent text-xl">Lótus</span> Macramê nasceu da paixão por criar peças únicas e cheias de personalidade. Cada nó é feito com dedicação e carinho, transformando fios em verdadeiras obras de arte para seu lar.
          </p>
          <p className="mb-6 text-artesanato-text">
            Trabalhamos com materiais de alta qualidade, garantindo durabilidade e beleza em cada peça. Nossa missão é trazer mais aconchego e originalidade para os ambientes, com produtos que contam histórias e transmitem emoções.
          </p>
          <p className="mb-6 text-artesanato-text">
            Todas as nossas criações são feitas à mão, respeitando técnicas tradicionais de macramê, mas sempre com um toque contemporâneo e exclusivo que só a <span className="script-font text-artesanato-accent text-xl">Lótus</span> Macramê pode oferecer.
          </p>
          <p className="mb-6 text-artesanato-text">
            Enviamos para todo o Brasil, levando nossas peças artesanais para qualquer canto do país.
          </p>
          <p className="text-artesanato-text font-semibold text-center italic">
            Consulte a disponibilidade
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
