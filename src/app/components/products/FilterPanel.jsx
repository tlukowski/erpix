const FilterPanel = ({ filters, selectedFilters, onFilterChange }) => {
  const scrollTo = () => {
    document.getElementById("productList").scrollIntoView({ behavior: "smooth" })
  }
  return (
    <section className="relative">
      <div className="max-w-6xl mx-auto px-4 flex gap-2 lg:grid lg:grid-cols-4 lg:justify-center lg:gap-4 overflow-scroll">
      {Object.entries(filters).map(([category, values]) => (
        <div key={category} className="mb-2 lg:mb-4 flex flex-col min-w-36 w-full">
          <h3 className="font-bold mb-2 text-xs md:text-sm lg:text-xl">{category}</h3>
          <ul className="mt-auto">
            {values.map((item) => (
              <li className="mb-2" key={item.id_feature_value}>
                <input
                  type="checkbox"
                  onClick={scrollTo}
                  className="w-4 h-4 lg:w-5 lg:h-5 cursor-pointer accent-black"
                  id={`${category}-${item.id_feature_value}`}
                  checked={selectedFilters[category]?.[item.id_feature_value] || false}
                  onChange={() => onFilterChange(category, item.id_feature_value)}
                />
                <label
                onClick={scrollTo}
                className="text-xs md:text-md lg:text-base ml-2 cursor-pointer" htmlFor={`${category}-${item.id_feature_value}`}>
                  {item.value}
                </label>
              </li>
            ))}
          </ul>
        </div>
      ))}
      </div>
    </section>
  );
};

export default FilterPanel;
