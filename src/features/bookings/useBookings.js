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

  // Pagination
  const page = !searchParams.get("page") ? 1 : Number(searchParams.get("page"));

  const {
    data: { data: bookings, count } = {},
    isLoading,
    error,
  } = useQuery({
    queryKey: ["bookings", filter, sortBy, page],
    queryFn: () => getBookings({ filter, sortBy, page }),
  });

  return { bookings, isLoading, error, count };
}
