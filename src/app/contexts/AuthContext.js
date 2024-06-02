// "use client";
// import React, { createContext, useContext, useEffect, useState } from "react";
// import { account } from "../../lib/appwrite";
// import { useRouter } from "next/navigation"; // Correct import

// const AuthContext = createContext();

// export function AuthProvider({ children }) {
//   const [user, setUser] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const router = useRouter();

//   useEffect(() => {
//     const getSession = async () => {
//       try {
//         const user = await account.get();
//         setUser(user);
//       } catch (error) {
//         setUser(null);
//       }
//     };

//     getSession();
//   }, []);

//   const login = async (email, password) => {
//     try {
//       const session = await account.createSession(email, password);
//       setUser(session);
//       router.push("/welcome");
//     } catch (error) {
//       console.error("Login failed:", error.message);
//     }
//   };

//   const logout = async () => {
//     try {
//       await account.deleteSession("current");
//       setUser(null);
//       router.push("/login");
//     } catch (error) {
//       console.error("Logout failed:", error.message);
//     }
//   };

//   return (
//     <AuthContext.Provider value={{ user, login, logout }}>
//       {children}
//     </AuthContext.Provider>
//   );
// }

// export function useAuth() {
//   return useContext(AuthContext);
// }
