import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateUserData } from "../../services/apiAuth";
import toast from "react-hot-toast";

export function useUpdate() {
  const queryClient = useQueryClient();
  const { mutate: update, isPending } = useMutation({
    mutationFn: updateUserData,
    onSuccess: () => {
      toast.success("User data updated successfully");
      queryClient.invalidateQueries({
        queryKey: ["user"],
      });
    },
  });

  return { update, isPending };
}
