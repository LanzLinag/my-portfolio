import { SiTailwindcss } from "react-icons/si";
import {
  FaReact,
  FaGithub,
  FaGitAlt,
  FaCode,
  FaUsers,
  FaComments,
  FaLightbulb,
  FaBrain,
  FaChartBar,
  FaFileExcel, // ✅ Excel icon here
} from "react-icons/fa";
import {
  SiDjango,
  SiPandas,
  SiNumpy,
  SiAnaconda,
  SiRedux,
  SiHtml5,
  SiCss3,
  SiGooglecolab,
  SiMysql, // SQL
  SiTableau, // Tableau
  SiJupyter, // Jupyter
} from "react-icons/si";
import { MdLeaderboard } from "react-icons/md";

// app/page.js (Next.js 13+ with app directory)
export default function Home() {
  return (
    <main className="bg-gray-900 text-white min-h-screen font-sans">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center py-20">
        <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight">
        I&apos;m <span className="text-blue-400">Lanz Elijah Linag</span>
        </h1>

        <p className="text-lg md:text-xl mt-6 text-gray-300 max-w-2xl">
          Aspiring <span className="text-blue-300">Data Analyst</span> &{" "}
          <span className="text-blue-300">Data Scientist</span> {" "}
        </p>
      </section>

      {/* About Me */}
      <section className="max-w-3xl mx-auto px-6 py-12">
        <h2 className="text-3xl font-semibold mb-4 text-blue-400">🚀 About Me</h2>
        <p className="text-lg leading-relaxed text-gray-300">
          I am an undergraduate Computer Engineering student passionate about
          applying data to create innovative, data-driven solutions. Alongside
          exploring computer vision and data analytics, I also have experience in
          backend and full-stack development, which strengthens my ability to
          deliver practical solutions to real-world challenges.
        </p>
      </section>

      {/* Technical Skills */}
      <section className="bg-gray-800 py-12 px-6">
        <h2 className="text-3xl font-semibold mb-8 text-center text-blue-400">
          🛠 Technical Skills
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 text-center text-lg">
          {/* Web Development */}
          <div className="flex flex-col items-center">
            <SiHtml5 className="text-4xl text-orange-500 mb-2" /> HTML
          </div>
          <div className="flex flex-col items-center">
            <SiCss3 className="text-4xl text-blue-500 mb-2" /> CSS
          </div>
          <div className="flex flex-col items-center">
            <FaReact className="text-4xl text-cyan-400 mb-2" /> React.js
          </div>
          <div className="flex flex-col items-center">
            <SiRedux className="text-4xl text-purple-500 mb-2" /> Redux
          </div>
          <div className="flex flex-col items-center">
            <SiDjango className="text-4xl text-green-600 mb-2" /> Django
          </div>
          <div className="flex flex-col items-center">
            <FaCode className="text-4xl text-gray-400 mb-2" /> REST
          </div>

          {/* Data & ML */}
          <div className="flex flex-col items-center">
            <FaBrain className="text-4xl text-pink-500 mb-2" /> YOLOv8
          </div>
          <div className="flex flex-col items-center">
            <SiNumpy className="text-4xl text-blue-600 mb-2" /> NumPy
          </div>
          <div className="flex flex-col items-center">
            <SiPandas className="text-4xl text-blue-300 mb-2" /> Pandas
          </div>
          <div className="flex flex-col items-center">
            <FaChartBar className="text-4xl text-red-500 mb-2" /> Matplotlib
          </div>
          <div className="flex flex-col items-center">
            <FaChartBar className="text-4xl text-indigo-400 mb-2" /> Seaborn
          </div>
          <div className="flex flex-col items-center">
            <SiMysql className="text-4xl text-blue-500 mb-2" /> SQL
          </div>
          <div className="flex flex-col items-center">
            <FaFileExcel className="text-4xl text-green-600 mb-2" /> Excel
          </div>
          <div className="flex flex-col items-center">
            <SiTableau className="text-4xl text-orange-500 mb-2" /> Tableau
          </div>
          <div className="flex flex-col items-center">
            <SiJupyter className="text-4xl text-red-500 mb-2" /> Jupyter
          </div>

          {/* Version Control / Tools */}
          <div className="flex flex-col items-center">
            <FaGithub className="text-4xl text-gray-300 mb-2" /> GitHub
          </div>
          <div className="flex flex-col items-center">
            <FaGitAlt className="text-4xl text-orange-600 mb-2" /> Git
          </div>
          <div className="flex flex-col items-center">
            <SiAnaconda className="text-4xl text-green-500 mb-2" /> Anaconda
          </div>
          <div className="flex flex-col items-center">
            <SiGooglecolab className="text-4xl text-yellow-400 mb-2" /> Google Colab
          </div>
        </div>
      </section>

      {/* Soft Skills */}
      <section className="bg-gray-900 py-12 px-6">
        <h2 className="text-3xl font-semibold mb-8 text-center text-blue-400">
          🌟 Soft Skills
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 text-center text-lg">
          <div className="flex flex-col items-center">
            <FaUsers className="text-4xl text-purple-400 mb-2" /> Adaptability
          </div>
          <div className="flex flex-col items-center">
            <FaComments className="text-4xl text-pink-400 mb-2" /> Practical Thinking
          </div>
          <div className="flex flex-col items-center">
            <MdLeaderboard className="text-4xl text-orange-400 mb-2" /> Analytical
            Skills
          </div>
          <div className="flex flex-col items-center">
            <FaLightbulb className="text-4xl text-yellow-400 mb-2" /> Problem-Solving
          </div>
          <div className="flex flex-col items-center">
            <FaBrain className="text-4xl text-blue-400 mb-2" /> Conflict Resolution
          </div>
          <div className="flex flex-col items-center">
            <FaBrain className="text-4xl text-green-400 mb-2" /> Attention to Detail
          </div>
          <div className="flex flex-col items-center">
            <FaBrain className="text-4xl text-teal-400 mb-2" /> Flexibility
          </div>
          <div className="flex flex-col items-center">
            <FaBrain className="text-4xl text-gray-300 mb-2" /> Organization
          </div>
        </div>
      </section>

      {/* Projects */}
      <section className="max-w-4xl mx-auto px-6 py-12">
        <h2 className="text-3xl font-semibold mb-8 text-center text-blue-400">
          📂 Projects
        </h2>
        <div className="grid gap-8 md:grid-cols-2">
          <a
            href="https://github.com/Smiruu/ByteBox-Yolo"
            target="_blank"
            className="p-6 bg-gray-800 rounded-xl hover:bg-gray-700 transition flex flex-col items-start"
          >
            <FaCode className="text-3xl text-blue-400 mb-4" />
            <h3 className="font-bold text-xl">ByteBox-Yolo</h3>
            <p className="mt-2 text-gray-300">
              YOLOv8-based food detection system that recognizes different
              Filipino dishes using a webcam.
            </p>
          </a>
          <a
            href="https://github.com/Smiruu/NotED"
            target="_blank"
            className="p-6 bg-gray-800 rounded-xl hover:bg-gray-700 transition flex flex-col items-start"
          >
            <FaCode className="text-3xl text-green-400 mb-4" />
            <h3 className="font-bold text-xl">NotED</h3>
            <p className="mt-2 text-gray-300">
              Study group platform with real-time communication. Includes backend
              models for notes, to-do lists, and videos.
            </p>
          </a>
          <a
            href="https://github.com/Smiruu/Personovel-main"
            target="_blank"
            className="p-6 bg-gray-800 rounded-xl hover:bg-gray-700 transition flex flex-col items-start"
          >
            <FaCode className="text-3xl text-pink-400 mb-4" />
            <h3 className="font-bold text-xl">Personovel</h3>
            <p className="mt-2 text-gray-300">
              Library web application with PayPal subscription integration.
            </p>
          </a>
        </div>
      </section>

      {/* Contact */}
      <section className="bg-gray-800 py-12 text-center">
        <h2 className="text-3xl font-semibold mb-6 text-blue-400">📫 Contact Me</h2>

        <p className="text-lg">
          Email:{" "}
          <a href="mailto:lanzlinag@gmail.com" className="text-blue-400">
            lanzlinag@gmail.com
          </a>
        </p>

        <p className="text-lg mt-2">
          LinkedIn:{" "}
          <a
            href="https://www.linkedin.com/in/lanz-linag"
            target="_blank"
            className="text-blue-400"
          >
            linkedin.com/in/lanz-linag
          </a>
        </p>

        <p className="text-lg mt-2">
          GitHub:{" "}
          <a
            href="https://github.com/LanzLinag"
            target="_blank"
            className="text-blue-400"
          >
            github.com/LanzLinag
          </a>
        </p>
      </section>
    </main>
  );
}
