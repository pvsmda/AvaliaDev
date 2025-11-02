import { Link } from "react-router";
import Navbar from "../components/Navbar";
import { PROBLEMS } from "../data/problems";
import { ChevronRightIcon, Code2Icon } from "lucide-react";
import { getDifficultyBadgeClass } from "../lib/utils";
import { useState } from "react";

function ProblemsPage() {
  const problems = Object.values(PROBLEMS);

  const easyProblemsCount = problems.filter(
    (p) => p.difficulty === "Easy"
  ).length;
  const mediumProblemsCount = problems.filter(
    (p) => p.difficulty === "Medium"
  ).length;
  const hardProblemsCount = problems.filter(
    (p) => p.difficulty === "Hard"
  ).length;

  // PAGINAÇÃO
  const problemsPerPage = 4;
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(problems.length / problemsPerPage);
  const startIndex = (currentPage - 1) * problemsPerPage;
  const currentProblems = problems.slice(
    startIndex,
    startIndex + problemsPerPage
  );

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-base-200">
      <Navbar />

      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* HEADER */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2">Problemas de Programação</h1>
          <p className="text-base-content/70">
            Aprimore suas habilidades de codificação com esses problemas
            selecionados
          </p>
        </div>

        {/* PROBLEMS LIST */}
        <div className="space-y-4">
          {currentProblems.map((problem) => (
            <Link
              key={problem.id}
              to={`/problem/${problem.id}`}
              className="card bg-base-100 hover:scale-[1.01] transition-transform"
            >
              <div className="card-body">
                <div className="flex items-center justify-between gap-4">
                  {/* LEFT SIDE */}
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="size-12 rounded-lg bg-primary/10 flex items-center justify-center">
                        <Code2Icon className="size-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <h2 className="text-xl font-bold">{problem.title}</h2>
                          <span
                            className={`badge ${getDifficultyBadgeClass(
                              problem.difficulty
                            )}`}
                          >
                            {problem.difficulty}
                          </span>
                        </div>
                        <p className="text-sm text-base-content/60">
                          {problem.category}
                        </p>
                      </div>
                    </div>
                    <p className="text-base-content/80 mb-3">
                      {problem.description.text}
                    </p>
                  </div>
                  {/* RIGHT SIDE */}
                  <div className="flex items-center gap-2 text-primary">
                    <span className="font-medium">Resolver</span>
                    <ChevronRightIcon className="size-5" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* PAGINATION */}
        <div className="flex justify-center mt-10">
          <div className="join">
            <button
              className="join-item btn"
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
            >
              «
            </button>

            {Array.from({ length: totalPages }, (_, i) => (
              <button
                key={i + 1}
                className={`join-item btn ${
                  currentPage === i + 1 ? "btn-active btn-primary" : ""
                }`}
                onClick={() => handlePageChange(i + 1)}
              >
                {i + 1}
              </button>
            ))}

            <button
              className="join-item btn"
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
            >
              »
            </button>
          </div>
        </div>

        {/* STATS FOOTER */}
        <div className="mt-12 card bg-base-100 shadow-lg">
          <div className="card-body">
            <div className="stats stats-vertical lg:stats-horizontal">
              <div className="stat">
                <div className="stat-title">Total de Problemas</div>
                <div className="stat-value text-primary">{problems.length}</div>
              </div>

              <div className="stat">
                <div className="stat-title">Fáceis</div>
                <div className="stat-value text-success">
                  {easyProblemsCount}
                </div>
              </div>
              <div className="stat">
                <div className="stat-title">Médios</div>
                <div className="stat-value text-warning">
                  {mediumProblemsCount}
                </div>
              </div>
              <div className="stat">
                <div className="stat-title">Difíceis</div>
                <div className="stat-value text-error">{hardProblemsCount}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProblemsPage;
