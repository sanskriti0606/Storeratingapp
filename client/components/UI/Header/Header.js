"use client";

import Image from "next/image";
import logo from "../../../public/logo.svg";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import roles from "@/utils/roles";
import { userDataActions } from "@/redux-store/userDataSlice";
import { usePathname } from "next/navigation";

const Header = () => {
  const [isClient, setIsClient] = useState(false);
  const [storeData, setStoreData] = useState(null); // ⬅️ State for store data
  const pathname = usePathname();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.userData);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setIsClient(true);

      // Load user from localStorage
      const userData = localStorage.getItem("user");
      if (userData) {
        try {
          const parsedUser = JSON.parse(userData);
          if (parsedUser && parsedUser.id) {
            dispatch(userDataActions.saveUserData({ ...parsedUser }));
          }
        } catch (err) {
          console.error("Failed to parse user from localStorage:", err);
          localStorage.removeItem("user");
        }
      }

      // Fetch store data from PostgreSQL API
      fetch("http://localhost:5000/api/stores")
        .then((res) => {
          if (!res.ok) throw new Error("Failed to fetch stores");
          return res.json();
        })
        .then((data) => {
          setStoreData(data);
          console.log("Store Data:", data);
        })
        .catch((err) => {
          console.error("Error fetching store data:", err);
        });
    }
  }, [dispatch]);

  const role = user?.role;

  if (!isClient) return null;

  return (
    <header className="bg-white h-14 py-2 px-5 flex items-center justify-between border-b w-full transition-[top] duration-500 shadow-xl">
      <div className="logo">
        <Image src={logo} alt="header-logo" width="150" height={"100"} />
      </div>

      <nav className="navigation flex gap-5">
        {pathname !== "/auth/sign-in" && pathname !== "/auth/sign-up" && (
          <Link
            className={`border-b-2 ${
              pathname.includes("dashboard") ? "border-black" : "border-transparent"
            }`}
            href={
              role === roles.ADMIN
                ? "/admin/dashboard"
                : role === roles.USER
                ? "/user/dashboard"
                : "/store-owner/dashboard"
            }
          >
            Dashboard
          </Link>
        )}

        {role === roles.ADMIN && (
          <>
            <Link
              className={`border-b-2 ${
                pathname.includes("/admin/users") ? "border-black" : "border-transparent"
              }`}
              href="/admin/users"
            >
              Users
            </Link>
            <Link
              className={`border-b-2 ${
                pathname.includes("/admin/store") ? "border-black" : "border-transparent"
              }`}
              href="/admin/store"
            >
              Store
            </Link>
          </>
        )}

        {pathname !== "/auth/sign-in" && pathname !== "/auth/sign-up" && (
          <Link
            className={`border-b-2 ${
              pathname.includes("/auth/account") ? "border-black" : "border-transparent"
            }`}
            href="/auth/account"
          >
            Account
          </Link>
        )}
      </nav>

      {/* Optional: Show store info if needed */}
      {storeData && (
        <div className="text-sm text-gray-600 ml-5">
          {Array.isArray(storeData) && storeData.length > 0
            ? `Store: ${storeData[0]?.name || "N/A"}`
            : "No stores found"}
        </div>
      )}
    </header>
  );
};

export default Header;
