const FilterPanel = ({ filters, selectedFilters, onFilterChange }) => {
  return (
    <section className="relative">
      <div className="max-w-6xl mx-auto px-4 grid gap-2 grid-cols-2 lg:grid-cols-4 justify-center lg:gap-4">
      {Object.entries(filters).map(([category, values]) => (
        <div key={category} className="mb-2 lg:mb-4 flex flex-col">
          <h3 className="font-bold mb-2 text-sm lg:text-xl">{category}</h3>
          <ul className="mt-auto">
            {values.map((item) => (
              <li className="mb-2" key={item.id_feature_value}>
                <input
                  type="checkbox"
                  className="w-5 h-5 cursor-pointer"
                  id={`${category}-${item.id_feature_value}`}
                  checked={selectedFilters[category]?.[item.id_feature_value] || false}
                  onChange={() => onFilterChange(category, item.id_feature_value)}
                />
                <label className="text-sm lg:text-base ml-2 cursor-pointer" htmlFor={`${category}-${item.id_feature_value}`}>
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
