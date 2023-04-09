import { useState } from "react";
import { useAuth } from "@/services/useAuth";

export default function Login() {
  const {login } = useAuth()
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    if(loading) return;
    login(email, password).finally(() => {
      setLoading(false);
    });
  };

  return (
    <div className="w-full h-full">
      <form
        className="flex flex-col gap-6 w-full h-full justify-center items-center"
        onSubmit={handleSubmit}
      >
        <div className="flex flex-col  gap-4">
          <div className="flex flex-col  gap-2">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="flex flex-col  gap-2">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
        </div>
        <div className="flex flex-col w-full">
          <button className="bg-blue-500 p-2 rounded-lg text-gray-200 flex justify-center items-center w-full">
            {loading ? "Loading..." : "Login"}
          </button>
        </div>
      </form>
    </div>
  );
}
