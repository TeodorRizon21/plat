import { redirect } from "next/navigation";

// Autentificare Clerk dezactivată temporar – redirecționare către acasă
export default function SignInPage() {
  redirect("/");
}
