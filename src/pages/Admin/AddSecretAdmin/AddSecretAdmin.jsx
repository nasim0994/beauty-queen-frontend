import Swal from "sweetalert2";
import { useAddSecretAdminMutation } from "../../../Redux/user/userApi";

export default function AddSecretAdmin() {
  const [addAdmin, { isLoading, isError, error }] = useAddSecretAdminMutation();

  const handleAdd = async (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const phone = form.phone.value;
    const password = form.password.value;
    const role = "admin";
    const info = {
      name,
      role,
      email,
      phone,
      password,
    };

    const res = await addAdmin(info);
    if (res?.data?.success) {
      Swal.fire("", "Admin add success", "success");
      form.reset();
    }
  };

  return (
    <section className="h-screen w-full flex justify-center items-center">
      <div className="w-[90%] sm:w-96">
        <div className="p-4 border mt-4 rounded">
          <form onSubmit={handleAdd} className="form_group flex flex-col gap-4">
            <div>
              <p className="text-neutral-content text-sm">Full Name</p>
              <input type="text" name="name" required />
            </div>
            <div>
              <p className="text-neutral-content text-sm">Email</p>
              <input type="email" name="email" required />
            </div>

            <div>
              <p className="text-neutral-content text-sm">Password</p>
              <input type="password" name="password" required />
            </div>
            <div>
              <p className="text-neutral-content text-sm">Phone</p>
              <input type="text" name="phone" required />
            </div>

            {isError && (
              <p className="text-sm text-red-500">
                {error?.data?.message || error?.data?.error}
              </p>
            )}

            <div>
              <button
                disabled={isLoading && "disabled"}
                className="primary_btn"
              >
                {isLoading ? "Loading..." : "Add Admin"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
