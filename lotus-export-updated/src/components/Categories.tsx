import React from 'react';

interface Category {
  id: number;
  name: string;
  icon: string;
  description: string;
}

const Categories: React.FC = () => {
  const categories: Category[] = [
    {
      id: 1,
      name: "Painéis",
      icon: "🖼️",
      description: "Decoração artesanal para sua casa"
    },
    {
      id: 2,
      name: "Bolsas",
      icon: "👜",
      description: "Acessórios únicos para seu dia a dia"
    },
    {
      id: 3,
      name: "Cordões",
      icon: "📿",
      description: "Peças delicadas para seu estilo"
    },
    {
      id: 4,
      name: "Pulseiras",
      icon: "⌚",
      description: "Detalhes que fazem a diferença"
    },
    {
      id: 5,
      name: "Tornozeleiras",
      icon: "👣",
      description: "Charme para seus momentos especiais"
    }
  ];

  return (
    <section id="categorias" className="py-16 bg-artesanato-background">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-center">Categorias</h2>
        <p className="section-subtitle">
          Explore nossa variedade de produtos artesanais feitos com carinho e dedicação.
        </p>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6 mt-12">
          {categories.map((category) => (
            <a 
              key={category.id} 
              href={`#${category.name.toLowerCase()}`}
              className="bg-white rounded-lg shadow-md p-6 text-center transition-transform hover:transform hover:-translate-y-2"
            >
              <div className="text-4xl mb-3">{category.icon}</div>
              <h3 className="font-title text-lg mb-2 text-artesanato-text">{category.name}</h3>
              <p className="text-sm text-gray-600">{category.description}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
