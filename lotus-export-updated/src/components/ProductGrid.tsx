import React from 'react';

interface Product {
  id: number;
  name: string;
  description: string;
  price: string;
  image: string;
  available: boolean;
  customizable: boolean;
  category: string;
}

const ProductGrid: React.FC = () => {
  const products: Product[] = [
    {
      id: 1,
      name: "Painel de Macramê na cor Telha",
      description: "Peça desenvolvida para trazer a sensação de aconchego, mais cor, textura e significado para sua casa e outros ambientes.",
      price: "R$ 250,00",
      image: "/images/macrame-telha.jpeg",
      available: true,
      customizable: true,
      category: "painéis"
    },
    {
      id: 2,
      name: "Painel Recordações",
      description: "Nele você poderá eternizar momentos felizes. Personalize o seu do jeitinho que você quiser, escolhendo as cores e tamanho.",
      price: "R$ 80,00",
      image: "/images/painel-recordacoes.jpeg",
      available: true,
      customizable: true,
      category: "painéis"
    },
    {
      id: 3,
      name: "Bolsa de Macramê com Alças Removíveis",
      description: "Naturalmente elegante. Como suas alças são removíveis, você muda a cara da sua bolsa conforme a ocasião.",
      price: "R$ 110,00",
      image: "/images/bolsa-macrame.jpeg",
      available: true,
      customizable: false,
      category: "bolsas"
    },
    {
      id: 4,
      name: "Bolsa de Verão com Búzios",
      description: "Super linda e delicada para o seu dia a dia. Os detalhes de búzio dão um charme especial a essa bolsa.",
      price: "R$ 70,00",
      image: "/images/bolsa-buzios.jpeg",
      available: true,
      customizable: false,
      category: "bolsas"
    },
    {
      id: 5,
      name: "Bolsa em Macramê Verde Água",
      description: "Ótima opção para seus rolês, pois nela cabe o básico: celular, carteira, protetor solar e makes.",
      price: "R$ 90,00",
      image: "/images/bolsa-verde.jpeg",
      available: false,
      customizable: true,
      category: "bolsas"
    }
  ];

  // Função para criar o link do WhatsApp com o nome do produto
  const createWhatsAppLink = (productName: string) => {
    const message = `Olá! Tenho interesse no produto: ${productName}`;
    const encodedMessage = encodeURIComponent(message);
    return `https://wa.me/5598987507060?text=${encodedMessage}`;
  };

  // Filtrar produtos por categoria
  const paineis = products.filter(product => product.category === "painéis");
  const bolsas = products.filter(product => product.category === "bolsas");

  // Componente de card de produto reutilizável
  const ProductCard = ({ product }: { product: Product }) => (
    <div key={product.id} className="product-card overflow-hidden shadow-md">
      <div className="rounded-image-container">
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-64 object-cover"
        />
      </div>
      <div className="p-6">
        <h3 className="font-title text-xl mb-2 text-artesanato-text">{product.name}</h3>
        <p className="text-gray-600 mb-4">{product.description}</p>
        <div className="flex justify-between items-center">
          <span className="text-artesanato-accent font-semibold">{product.price}</span>
          <div className="flex space-x-2">
            {product.customizable && (
              <span className="bg-artesanato-natural bg-opacity-20 text-artesanato-text text-xs px-2 py-1 rounded">
                Personalizável
              </span>
            )}
            {!product.available && (
              <span className="bg-artesanato-accent bg-opacity-20 text-artesanato-accent text-xs px-2 py-1 rounded">
                Por encomenda
              </span>
            )}
          </div>
        </div>
        <a 
          href={createWhatsAppLink(product.name)} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="btn btn-accent w-full mt-4 inline-block text-center"
        >
          Compre agora
        </a>
      </div>
    </div>
  );

  return (
    <>
      {/* Seção de todos os produtos */}
      <section id="produtos" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="section-title text-center">Nossos Produtos</h2>
          <p className="section-subtitle">
            Cada peça é única e feita à mão com muito carinho e dedicação. Confira nossa seleção de produtos artesanais.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Seção de Painéis */}
      <section id="painéis" className="py-16 bg-artesanato-background">
        <div className="container mx-auto px-4">
          <h2 className="section-title text-center">Painéis</h2>
          <p className="section-subtitle">
            Decoração artesanal para sua casa, feita com técnicas tradicionais de macramê.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {paineis.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Seção de Bolsas */}
      <section id="bolsas" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="section-title text-center">Bolsas</h2>
          <p className="section-subtitle">
            Acessórios únicos para seu dia a dia, combinando estilo e funcionalidade.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {bolsas.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductGrid;
