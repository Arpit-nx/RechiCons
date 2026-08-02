import { useState } from "react";
import { User, Lock, X } from "lucide-react";

export default function AdminDialog({
//   open,
//   onClose,
//   onLogin
}) {
//   const [form, setForm] = useState({
//     username: "",
//     password: "",
//   });

//   const [loading, setLoading] = useState(false);

//   if (!open) return null;

//   const handleChange = (e) => {
//     setForm({
//       ...form,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     setLoading(true);

//     try {
//       await onLogin(form);
//     } finally {
//       setLoading(false);
//     }
//   };

  return (
    <>
      <div
        className="fixed inset-0 bg-black/50"
        
      />

      <div className="fixed inset-0 flex items-center justify-center p-5">
        <div className="w-full max-w-md rounded-xl bg-white shadow-xl z-50">
          <div className="flex items-center justify-between border-b p-5">
            <h2 className="text-xl font-semibold">
              Admin Login
            </h2>

            <button >
              <X />
            </button>
          </div>

          <form
            
            className="space-y-5 p-6"
          >
            <div>
              <label className="mb-2 block">
                Username
              </label>

              <div className="flex items-center rounded-lg border px-3">
                <User size={18} className="text-gray-500" />

                <input
                  type="text"
                  name="username"
                  placeholder="Enter username"
                  className="w-full p-3 outline-none"
                  
                />
              </div>
            </div>

            <div>
              <label className="mb-2 block">
                Password
              </label>

              <div className="flex items-center rounded-lg border px-3">
                <Lock size={18} className="text-gray-500" />

                <input
                  type="password"
                  name="password"
                  placeholder="Enter password"
                  className="w-full p-3 outline-none"
                  
                />
              </div>
            </div>

            <button
              type="submit"
              
              className="w-full rounded-lg bg-black py-3 text-white transition hover:bg-neutral-800 disabled:opacity-50"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </>
  );
}