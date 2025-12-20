import React from "react";
import useAuth from "../hooks/useAuth";
import useRole from "../hooks/useRole";
import Forbidden from "../Components/Forbidden";
import Loading from "../Components/Loading";

const LibrarianRoute = ({ children }) => {
  const { loading } = useAuth();
  const { role, roleLoading } = useRole();

  if (loading || roleLoading) {
    return <Loading></Loading>;
  }

  if (role !== "librarian") {
    return <Forbidden></Forbidden>;
  }

  return children;
};

export default LibrarianRoute;
