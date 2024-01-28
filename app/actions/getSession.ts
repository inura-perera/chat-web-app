import { getServerSession } from "next-auth";
import {authOptions} from "@/app/api/auth/[...nextauth]/authOption";

export default async function getSession() {
  return await getServerSession(authOptions);
}