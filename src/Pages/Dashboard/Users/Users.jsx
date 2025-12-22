import React from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import { MdAdminPanelSettings } from "react-icons/md";
import Swal from "sweetalert2";
import Loading from "../../../Components/Loading";

const Users = () => {
  const axiosSecure = useAxiosSecure();
  const { data: usersList = [], refetch, isLoading } = useQuery({
    queryKey: ["all-users"],
    queryFn: async () => {
      const res = await axiosSecure.get("/users");
      return res.data;
    },
  });
  

  const handleAction = (user, role) => {
    const updatedRole = {
      role: role,
    };

    Swal.fire({
      title: "Are you Sure?",
      text: `You want to update this user role to ${role}?`,
      icon: "warning",
      showDenyButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Updated!",
          text: `User Role Updated to ${role}`,
          icon: "success",
        });
        axiosSecure.patch(`/user/role/${user._id}`, updatedRole).then((res) => {
          console.log(res.data);
          if (res.data.modifiedCount) {
            refetch();
          }
        });
      }
    });
  };


if (isLoading) {
  return <Loading></Loading>;
}

  return (
    <div>
      <p className="text-xl font-semibold mt-2">Users</p>
      <p className="text-secondary mb-2">All registered Users</p>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>User Detail</th>
              <th>Role</th>
              <th>Admin</th>
              <th>Librarian</th>
            </tr>
          </thead>

          <tbody>
            {usersList.map((user) => (
              <tr key={user._id}>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle h-12 w-12">
                        <img
                          src={user.photoURL}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{user.name}</div>
                      <div className="text-sm opacity-50">{user.email}</div>
                    </div>
                  </div>
                </td>
                <td>{user.role}</td>
                <td>
                  {user.role === "admin" ? (
                    <button
                      onClick={() => handleAction(user, "user")}
                      className="btn btn-xs bg-primary text-accent"
                    >
                      {" "}
                      <span>
                        <MdAdminPanelSettings />
                      </span>{" "}
                      Remove Admin
                    </button>
                  ) : (
                    <button
                      onClick={() => handleAction(user, "admin")}
                      className="btn btn-xs bg-primary text-accent"
                    >
                      {" "}
                      <span>
                        <MdAdminPanelSettings />
                      </span>{" "}
                      Make Admin
                    </button>
                  )}
                </td>
                <td>
                  {" "}
                  {user.role === "librarian" ? (
                    <button
                      onClick={() => handleAction(user, "user")}
                      className="btn btn-xs bg-primary text-accent"
                    >
                      {" "}
                      <span>
                        <MdAdminPanelSettings />
                      </span>{" "}
                      Remove Librarian
                    </button>
                  ) : (
                    <button
                      onClick={() => handleAction(user, "librarian")}
                      className="btn btn-xs bg-primary text-accent"
                    >
                      {" "}
                      <span>
                        <MdAdminPanelSettings />
                      </span>{" "}
                      Make Librarian
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>

          {/* foot */}
        </table>
      </div>
    </div>
  );
};

export default Users;
