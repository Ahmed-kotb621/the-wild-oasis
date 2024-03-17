import { useQuery } from "@tanstack/react-query";
import { getStaysTodayActivity } from "../../services/apiBookings";

export function useTodaysActivity() {
  const { isLoading, data: activites } = useQuery({
    queryFn: getStaysTodayActivity,
    queryKey: ["activites-today"],
  });

  return { isLoading, activites };
}
