export function BlogCategories({ categories, activeCategory, onCategoryChange }) {
  return (
    <div className="flex flex-wrap gap-3 justify-center mb-12">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onCategoryChange(category)}
          className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
            activeCategory === category
              ? 'bg-blue-600 text-white shadow-lg scale-105'
              : 'bg-white text-gray-700 hover:bg-blue-50 hover:text-blue-600 shadow'
          }`}
        >
          {category}
        </button>
      ))}
    </div>
  );
}
