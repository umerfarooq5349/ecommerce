import { DefaultSession } from "next-auth";
declare module "next-auth" {
  interface Session {
    session_name: string;
    session_email: string;
    session_password: string;
    session_role: string | null | undefined;
    session_passwordConfirm?: string;
    session_active?: boolean;
    session_photo?: string;
    _id?: string;
  }
}
