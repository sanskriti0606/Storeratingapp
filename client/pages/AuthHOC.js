import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import roles from "@/utils/roles";

const AuthHOC = (Component) => {
  return function CheckRole(props) {
    const pathname = usePathname();
    const router = useRouter();
    const { user } = useSelector((state) => state.userData);
    const role = user?.role;

    useEffect(() => {
      if (!user) {
        // If no user is logged in, redirect to the login page
        router.replace("/login");
        return;
      }

      // Redirect based on role after login
      switch (role) {
        case roles.ADMIN:
          if (/store-owner|user\//.test(pathname)) {
            router.replace("/admin/dashboard");
          }
          break;
        case roles.USER:
          if (/admin|store-owner/.test(pathname)) {
            router.replace("/user/dashboard");
          }
          break;
        case roles.STOREOW:
          if (/admin|user\//.test(pathname)) {
            router.replace("/store-owner/dashboard");
          }
          break;
        default:
          router.replace("/login"); // Redirect to login if role is undefined
      }
    }, [role, pathname, user, router]);

    // Render the component only if the user exists and has the appropriate role
    return <Component {...props} />;
  };
};

export default AuthHOC;
