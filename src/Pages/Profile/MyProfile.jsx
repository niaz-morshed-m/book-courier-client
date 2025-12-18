import React, { useState } from "react";
import useAuth from "../../hooks/useAuth";

const MyProfile = () => {
  const { user, setUser, profileUpdate } = useAuth();

  const [error, setError] = useState("");
  const handleUpdate = (e) => {
    const form = e.target;
    const name = form.name.value;
    const photo = form.photo.value;
    if (name === user.displayName) {
      e.preventDefault();
      setError("Give a name without current");
      return;
    }

   profileUpdate({
     displayName: name,
     photoURL: photo,
   })
     .then(() => {
       setUser({
         ...user,
         displayName: name,
         photoURL: photo,
       });
     })
     .catch((error) => {
       const errorMessage = error.message;
       e.preventDefault();
       setError(errorMessage);
     });

    const newUser = {
      name: name,
      photoUrl: photo,
    };

    fetch(`https://krishi-link-server-ten.vercel.app/user/${user.email}`, {
      method: "PATCH",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(newUser),
    })
      .then((res) => res.json())
      .then(() => {});
  };
  return (
    <div className="w-full max-w-3xl mx-auto text-center">
      <h1 className="text-3xl font-bold mb-8">My Profile</h1>

      <section className="mb-8">
        <div className="flex items-center gap-5">
          <div className="avatar mx-auto flex justify-center">
            <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2 ">
              <img
                src={
                  user
                    ? user.photoURL
                    : "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                }
                alt="User profile avatar"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <div className="space-y-4">
          <div className="form-control w-full">
            <p className="font-semibold text-primary">User Name:</p>
            <p className="text-2xl">{user && user.displayName}</p>
          </div>
          <div className="form-control w-full">
            <p className="font-semibold text-primary">User Email:</p>
            <p className="text-2xl">{user && user.email}</p>
          </div>
        </div>
      </section>

      <dialog id="my_modal_3" className="modal">
        <div className="modal-box">
          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <form onSubmit={handleUpdate} className="space-y-3">
            <label className="label text-primary text-xl font-semibold">
              Your Name
            </label>
            <input
              name="name"
              type="text"
              className="input w-full"
              placeholder="Name"
            />
            <label className="label text-primary text-xl font-semibold">
              Photo
            </label>
            <input
              name="photo"
              type="url"
              className="input w-full"
              placeholder="Photo URL"
            />
            {error && <p className="text-sm text-red-700">{error}</p>}
            <button type="submit" className="btn  bg-primary text-white">
              Update
            </button>
          </form>
        </div>
      </dialog>
      <div className="mt-8">
        <button
          onClick={() => document.getElementById("my_modal_3").showModal()}
          className="btn  bg-primary text-white"
        >
          Update Profile
        </button>
      </div>
    </div>
  );
};

export default MyProfile;
