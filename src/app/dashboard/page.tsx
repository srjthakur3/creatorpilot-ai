export default function DashboardPage() {
    return (
      <div className="min-h-screen bg-black text-white p-8">
        <h1 className="text-4xl font-bold text-orange-500 mb-6">
          CreatorPilot Dashboard
        </h1>
  
        <input
          type="text"
          placeholder="Enter Topic..."
          className="w-full p-3 mb-4 bg-zinc-900 border border-zinc-700 rounded"
        />
  
        <select className="w-full p-3 mb-4 bg-zinc-900 border border-zinc-700 rounded">
          <option>English</option>
          <option>Hindi</option>
          <option>Hinglish</option>
        </select>
  
        <div className="grid grid-cols-2 gap-4">
          <button className="bg-orange-500 text-black p-3 rounded">
            Script Generator
          </button>
  
          <button className="bg-orange-500 text-black p-3 rounded">
            Hook Generator
          </button>
  
          <button className="bg-orange-500 text-black p-3 rounded">
            SEO Generator
          </button>
  
          <button className="bg-orange-500 text-black p-3 rounded">
            Hashtag Generator
          </button>
  
          <button className="bg-orange-500 text-black p-3 rounded">
            Scene Generator
          </button>
        </div>
  
        <div className="mt-8 p-4 border border-orange-500 rounded">
          Output will appear here...
        </div>
      </div>
    );
  }
  