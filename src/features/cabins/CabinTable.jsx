import { useQuery } from "@tanstack/react-query";
import styled from "styled-components";
import { getCabins } from "../../services/apiCabins";
import Spinner from "../../ui/Spinner";
import CabinRow from "./CabinRow";
import Table from "../../ui/Table";
import { useSearchParams } from "react-router-dom";

function CabinTable() {
  const [searchParams] = useSearchParams();

  const { data: cabins, isLoading } = useQuery({
    queryKey: ["cabin"],
    queryFn: getCabins,
  });

  const value = searchParams.get("discount") || "all";
  let fileredValue;
  if (value === "all") fileredValue = cabins;

  if (value === "no-discount")
    fileredValue = cabins.filter((el) => el.discount === 0);

  if (value === "with-discount")
    fileredValue = cabins.filter((el) => el.discount > 0);

  if (isLoading) return <Spinner />;
  return (
    <Table columns="0.6fr 1.8fr 2.2fr 1fr 1fr 1fr">
      <Table.Header>
        <div></div>
        <div>Cabin</div>
        <div>Capacity</div>
        <div>Price</div>
        <div>Discount</div>
        <div></div>
      </Table.Header>

      {fileredValue.map((cabin) => (
        <CabinRow cabin={cabin} key={cabin.id} />
      ))}
    </Table>
  );
}

export default CabinTable;
