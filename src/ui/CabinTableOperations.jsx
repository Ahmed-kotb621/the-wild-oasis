import Filter from "./Filter";
import SortBy from "./SortBy";
import TableOperations from "./TableOperations";

function CabinTableOperations() {
  return (
    <TableOperations>
      <Filter
        filterFiled="discount"
        options={[
          { value: "all", label: "All" },
          { value: "no-discount", label: "No Discount" },
          { value: "with-discount", label: "With Discount" },
        ]}
      />
      <SortBy
        options={[
          { value: "name-asc", label: "Sort by Name (A-Z)" },
          { value: "name-desc", label: "Sort by Name (Z-A)" },
          { value: "regularPrice-asc", label: "Sort by Price (low first)" },
          { value: "regularPrice-desc", label: "Sort by Price (high first)" },
          { value: "maxCapacity-asc", label: "Sort by Capacity (low first)" },
          { value: "maxCapacity-desc", label: "Sort by Capacity (high first)" },
        ]}
      />
    </TableOperations>
  );
}

export default CabinTableOperations;
