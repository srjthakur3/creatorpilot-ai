export default function LoginPage() {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <div className="w-full max-w-md p-6 border border-orange-500 rounded-xl">
          <h1 className="text-3xl font-bold text-orange-500 mb-6">
            Login
          </h1>
  
          <input
            type="email"
            placeholder="Email"
            className="w-full p-3 mb-3 bg-zinc-900 border border-zinc-700 rounded"
          />
  
          <input
            type="password"
            placeholder="Password"
            className="w-full p-3 mb-4 bg-zinc-900 border border-zinc-700 rounded"
          />
  
          <button className="w-full bg-orange-500 text-black font-bold py-3 rounded">
            Login
          </button>
        </div>
      </div>
    );
  }
  