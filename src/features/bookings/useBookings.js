import { useQuery } from "@tanstack/react-query";
import { getBookings } from "../../services/apiBookings";
import { useSearchParams } from "react-router-dom";
export function useBookings() {
  //filtering
  const [searchParams] = useSearchParams();

  const filerValue = searchParams.get("status");

  const filter =
    !filerValue || filerValue === "all"
      ? null
      : { field: "status", value: "confirmed" };

  // Sorting

  const sortByParam = searchParams.get("sortby") || "startDate-desc";

  const [field, direction] = sortByParam.split("-");

  const sortBy = { field, direction };

  const { data, isLoading, error } = useQuery({
    queryKey: ["bookings", filter, sortBy],
    queryFn: () => getBookings({ filter, sortBy }),
  });

  return { data, isLoading, error };
}
