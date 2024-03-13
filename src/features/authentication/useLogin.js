import { useMutation, useQuery } from "@tanstack/react-query";
import { login as loginApi } from "../../services/apiAuth";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

export function useLogin() {
  const navigate = useNavigate();
  const { mutate: login, isLoading } = useMutation({
    mutationFn: ({ email, password }) => loginApi({ email, password }),
    onSuccess: (user) => {
      console.log(user);
      navigate("/dashboard", { replace: true });
    },
    onError: (error) => {
      toast.error("Provided email or password are incorrect");
      console.log("ERORRRRRR", error);
    },
  });

  return { login, isLoading };
}
