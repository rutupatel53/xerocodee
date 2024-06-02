// import React, { useEffect } from "react";
// import { useRouter } from "next/router";
// import { useAuth } from "../app/contexts/AuthContext";

// const withAuth = (WrappedComponent) => {
//   const ComponentWithAuth = (props) => {
//     const { user, loading } = useAuth();
//     const router = useRouter();

//     useEffect(() => {
//       if (!loading && !user) {
//         router.push("/login");
//       }
//     }, [user, loading, router]);

//     if (loading) {
//       return <div>Loading...</div>;
//     }

//     return user ? <WrappedComponent {...props} /> : null;
//   };

//   // Simplified syntax for setting display name
//   ComponentWithAuth.displayName = `withAuth(${
//     WrappedComponent.displayName || WrappedComponent.name || "Component"
//   })`;

//   return ComponentWithAuth;
// };

// export default withAuth;
