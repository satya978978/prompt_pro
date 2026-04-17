import { currentUser } from "@clerk/nextjs/server";
export default async function UserLogger() {
const user = await currentUser();



}
