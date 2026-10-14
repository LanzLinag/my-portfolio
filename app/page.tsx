import {
  FaReact,
  FaGithub,
  FaGitAlt,
  FaCode,
  FaUsers,
  FaLightbulb,
  FaBrain,
  FaChartBar,
  FaFileExcel,
  FaDatabase,
  FaDocker,
} from "react-icons/fa";
import {
  SiDjango,
  SiPandas,
  SiNumpy,
  SiRedux,
  SiHtml5,
  SiCss3,
  SiGooglecolab,
  SiPostgresql,
  SiPytorch,
  SiStreamlit,
  SiSupabase,
} from "react-icons/si";
import { MdLeaderboard, MdPsychology, MdSearch } from "react-icons/md";

export default function Home() {
  return (
    <main className="bg-gray-900 text-white min-h-screen font-sans">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center py-20 px-4">
        <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight">
          I&apos;m <span className="text-blue-400">Lanz Elijah Linag</span>
        </h1>

        <p className="text-lg md:text-xl mt-6 text-gray-300 max-w-2xl">
          Computer Engineering Graduate |{" "}
          <span className="text-blue-300">Aspiring AI / ML Engineer</span>,{" "}
          <span className="text-blue-300">Data Scientist/Analyst</span> &{" "}
          <span className="text-blue-300">Software Engineer</span>
        </p>
      </section>

      {/* About Me */}
      <section className="max-w-3xl mx-auto px-6 py-12">
        <h2 className="text-3xl font-semibold mb-4 text-blue-400">🚀 About Me</h2>
        <p className="text-lg leading-relaxed text-gray-300">
          Computer Engineering graduate specializing in AI, machine learning, and data analytics.
          Proven hands-on experience developing Retrieval-Augmented Generation (RAG) applications using
          vector databases (pgvector), local LLMs, and Python, alongside computer vision model training (YOLOv8)
          and full-stack web development (Django/React). Proficient in data extraction, cleaning, and analysis using SQL, pandas, and Excel.
        </p>
      </section>

      {/* Technical Skills */}
      <section className="bg-gray-800 py-12 px-6">
        <h2 className="text-3xl font-semibold mb-8 text-center text-blue-400">
          🛠 Technical Skills
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center text-lg max-w-5xl mx-auto">
          {/* AI & ML */}
          <div className="flex flex-col items-center">
            <FaBrain className="text-4xl text-purple-400 mb-2" /> Prompt Engineering & RAG
          </div>
          <div className="flex flex-col items-center">
            <SiPostgresql className="text-4xl text-blue-400 mb-2" /> pgvector / Supabase
          </div>
          <div className="flex flex-col items-center">
            <SiPytorch className="text-4xl text-orange-500 mb-2" /> PyTorch / YOLOv8
          </div>
          <div className="flex flex-col items-center">
            <MdSearch className="text-4xl text-cyan-400 mb-2" /> Semantic Search
          </div>

          {/* Data Analysis */}
          <div className="flex flex-col items-center">
            <FaDatabase className="text-4xl text-blue-500 mb-2" /> SQL
          </div>
          <div className="flex flex-col items-center">
            <SiPandas className="text-4xl text-blue-300 mb-2" /> Pandas & NumPy
          </div>
          <div className="flex flex-col items-center">
            <FaChartBar className="text-4xl text-red-400 mb-2" /> Matplotlib & Seaborn
          </div>
          <div className="flex flex-col items-center">
            <FaFileExcel className="text-4xl text-green-600 mb-2" /> Excel Pivot Tables
          </div>

          {/* Web & Backend */}
          <div className="flex flex-col items-center">
            <SiDjango className="text-4xl text-green-500 mb-2" /> Django & REST
          </div>
          <div className="flex flex-col items-center">
            <FaReact className="text-4xl text-cyan-400 mb-2" /> React & Redux
          </div>
          <div className="flex flex-col items-center">
            <SiStreamlit className="text-4xl text-red-500 mb-2" /> Streamlit
          </div>
          <div className="flex flex-col items-center">
            <SiHtml5 className="text-4xl text-orange-500 mb-2" /> HTML5 & CSS3
          </div>

          {/* Tools */}
          <div className="flex flex-col items-center">
            <FaDocker className="text-4xl text-blue-400 mb-2" /> Docker
          </div>
          <div className="flex flex-col items-center">
            <FaGitAlt className="text-4xl text-orange-600 mb-2" /> Git & GitHub
          </div>
          <div className="flex flex-col items-center">
            <SiGooglecolab className="text-4xl text-yellow-400 mb-2" /> Google Colab
          </div>
        </div>
      </section>

      {/* Core Competencies / Soft Skills */}
      <section className="bg-gray-900 py-12 px-6">
        <h2 className="text-3xl font-semibold mb-8 text-center text-blue-400">
          🌟 Core Competencies
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 text-center text-lg max-w-4xl mx-auto">
          <div className="flex flex-col items-center">
            <MdLeaderboard className="text-4xl text-blue-400 mb-2" /> Analytical Thinking
          </div>
          <div className="flex flex-col items-center">
            <FaLightbulb className="text-4xl text-yellow-400 mb-2" /> Problem-Solving
          </div>
          <div className="flex flex-col items-center">
            <FaUsers className="text-4xl text-purple-400 mb-2" /> Resourceful
          </div>
          <div className="flex flex-col items-center">
            <MdPsychology className="text-4xl text-green-400 mb-2" /> Attention to Detail
          </div>
          <div className="flex flex-col items-center">
            <FaBrain className="text-4xl text-pink-400 mb-2" /> Inquisitive
          </div>
        </div>
      </section>

      {/* Projects */}
      <section className="max-w-5xl mx-auto px-6 py-12">
        <h2 className="text-3xl font-semibold mb-8 text-center text-blue-400">
          📂 Featured Projects
        </h2>
        <div className="grid gap-8 md:grid-cols-2">
          <a
            href="https://github.com/LanzLinag"
            target="_blank"
            rel="noopener noreferrer"
            className="p-6 bg-gray-800 rounded-xl hover:bg-gray-700 transition flex flex-col items-start border border-gray-700"
          >
            <FaBrain className="text-3xl text-purple-400 mb-4" />
            <h3 className="font-bold text-xl text-white">Billboard Lyrics RAG (2026)</h3>
            <p className="mt-2 text-gray-300">
              Built a RAG app over ~6,000 Billboard Hot 100 songs using sentence-transformers, PostgreSQL/pgvector, local LLM (Ollama), Docker, and Streamlit.
            </p>
          </a>

          <a
            href="https://github.com/Smiruu/ByteBox-Yolo"
            target="_blank"
            rel="noopener noreferrer"
            className="p-6 bg-gray-800 rounded-xl hover:bg-gray-700 transition flex flex-col items-start border border-gray-700"
          >
            <FaCode className="text-3xl text-blue-400 mb-4" />
            <h3 className="font-bold text-xl text-white">
              ByteBox (2026) <span className="text-xs bg-yellow-500/20 text-yellow-300 px-2 py-1 rounded ml-2">2nd Runner-Up</span>
            </h3>
            <p className="mt-2 text-gray-300">
              YOLOv8 food detection system for Filipino dishes paired with a prompt bot generating nutrient breakdowns and recipes.
            </p>
          </a>

          <a
            href="https://github.com/LanzLinag"
            target="_blank"
            rel="noopener noreferrer"
            className="p-6 bg-gray-800 rounded-xl hover:bg-gray-700 transition flex flex-col items-start border border-gray-700"
          >
            <FaChartBar className="text-3xl text-green-400 mb-4" />
            <h3 className="font-bold text-xl text-white">Video Game Sales Analysis (2026)</h3>
            <p className="mt-2 text-gray-300">
              Analyzed 16,000+ sales rows using SQL queries and Excel pivot tables to surface regional and genre trends across platforms.
            </p>
          </a>

          <a
            href="https://github.com/LanzLinag"
            target="_blank"
            rel="noopener noreferrer"
            className="p-6 bg-gray-800 rounded-xl hover:bg-gray-700 transition flex flex-col items-start border border-gray-700"
          >
            <FaBrain className="text-3xl text-pink-400 mb-4" />
            <h3 className="font-bold text-xl text-white">PathFinder (2025)</h3>
            <p className="mt-2 text-gray-300">
              AI chatbot providing personalized course and career recommendations based on user interests and career goals.
            </p>
          </a>
        </div>
      </section>

      {/* Contact */}
      <section className="bg-gray-800 py-12 text-center">
        <h2 className="text-3xl font-semibold mb-6 text-blue-400">📫 Contact Me</h2>

        <p className="text-lg">
          Email:{" "}
          <a href="mailto:lanzlinag@gmail.com" className="text-blue-400 underline">
            lanzlinag@gmail.com
          </a>
        </p>

        <p className="text-lg mt-2">
          LinkedIn:{" "}
          <a
            href="https://www.linkedin.com/in/lanz-linag"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 underline"
          >
            linkedin.com/in/lanz-linag
          </a>
        </p>

        <p className="text-lg mt-2">
          GitHub:{" "}
          <a
            href="https://github.com/LanzLinag"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 underline"
          >
            github.com/LanzLinag
          </a>
        </p>
      </section>
    </main>
  );
}
