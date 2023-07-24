import { SessionUserData } from "@/types";
import { useSession } from "next-auth/react";

export default function useSessionData() {
  const { data, status } = useSession();

  const userData: SessionUserData = data?.user as SessionUserData;

  return { userData, status };
}
