import React, { useRef, useState } from "react";
import useAuth from "../../hooks/useAuth";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const MyProfile = () => {
  const { user, setUser, profileUpdate } = useAuth();
  const axiosSecure = useAxiosSecure();
  const modalRef = useRef();
  const [error, setError] = useState("");
  const handleUpdate = (e) => {
    e.preventDefault();

    const form = e.target;
    const name = form.name.value;
    const photo = form.photo.value;

    if (name === user.displayName) {
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

        const newUser = {
          name,
          photoUrl: photo,
        };

        axiosSecure.patch(`/user/${user.email}`, newUser);
        modalRef.current.close();
      })
      .catch((error) => {
        setError(error.message);
      });
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

      <dialog ref={modalRef} className="modal">
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
            defaultValue={user?.displayName}
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
              defaultValue={user?.photoURL}
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
          onClick={() => modalRef.current.showModal()}
          className="btn  bg-primary text-white"
        >
          Update Profile
        </button>
      </div>
    </div>
  );
};

export default MyProfile;
