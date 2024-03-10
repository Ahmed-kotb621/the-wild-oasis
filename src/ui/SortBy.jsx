import Select from "./Select";

function SortBy({ options }) {
  function handleChange(e) {
    console.log(e.target.value);
  }
  return <Select options={options} onChange={handleChange} />;
}

export default SortBy;
