import React from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import { MdAdminPanelSettings } from "react-icons/md";

const Users = () => {
  const axiosSecure = useAxiosSecure();
  const { data: usersList = [], refetch } = useQuery({
    queryKey: ["all-users"],
    queryFn: async () => {
      const res = await axiosSecure.get("/users");
      return res.data;
    },
  });

//   const updateAdmin = (user)=>{
//     const updatedRole = {
//         role: "admin"
//     }
// axiosSecure
//   .patch(`/user/${user._id}`, updatedRole)
//   .then((res) => {
//   if (res.data.modifiedCount) {
//       console.log(res.data);
//       refetch();
//   }
//   })
//   .catch((err) => console.log(err));


//   }
  const handleAction = (user, role)=>{
    const updatedRole = {
        role: role
    }
axiosSecure.patch(`/user/${user._id}`, updatedRole).then(res=> {
    
    console.log(res.data)
     if (res.data.modifiedCount) {
       refetch();
     }
});


  }
  return (
    <div>
      <p>Users</p>
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
                    <button onClick={()=> handleAction(user, "user")} className="btn btn-xs bg-primary text-accent">
                      {" "}
                      <span>
                        <MdAdminPanelSettings />
                      </span>{" "}
                      Remove Librarian
                    </button>
                  ) : (
                    <button onClick={()=> handleAction(user, "librarian")} className="btn btn-xs bg-primary text-accent">
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
