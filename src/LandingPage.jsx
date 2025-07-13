import React, { useState, useEffect } from "react";
import {
  Zap,
  Database,
  Server,
  Code,
  Play,
  Download,
  Github,
  ChevronRight,
  Copy,
  Check,
  Layers,
  Globe,
  Terminal,
  Rocket,
  Settings,
  FileText,
  ExternalLink,
  Menu,
  X,
} from "lucide-react";

const LandingPage = () => {
  const [copied, setCopied] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeStructure, setActiveStructure] = useState("typescript");

  const copyToClipboard = (text, type) => {
    navigator.clipboard.writeText(text);
    setCopied(type);
    setTimeout(() => setCopied(""), 2000);
  };

  const CodeBlock = ({ children, copyText, title }) => (
    <div className="bg-gray-900 rounded-lg p-4 relative group">
      <div className="flex items-center justify-between mb-2">
        <span className="text-green-400 text-sm font-mono">{title}</span>
        <button
          onClick={() => copyToClipboard(copyText, title)}
          className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 p-1 hover:bg-gray-800 rounded"
        >
          {copied === title ? (
            <Check className="w-4 h-4 text-green-400" />
          ) : (
            <Copy className="w-4 h-4 text-gray-400" />
          )}
        </button>
      </div>
      <pre className="text-gray-300 text-sm overflow-x-auto">
        <code>{children}</code>
      </pre>
    </div>
  );

  const FeatureCard = ({ icon: Icon, title, description, delay = 0 }) => (
    <div
      className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-blue-500/30 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mb-4">
        <Icon className="w-6 h-6 text-white" />
      </div>
      <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
      <p className="text-gray-300 leading-relaxed">{description}</p>
    </div>
  );

  const AnimatedGradient = () => (
    <div className="absolute inset-0 opacity-30">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 animate-pulse"></div>
      <div
        className="absolute inset-0 bg-gradient-to-l from-green-600 via-blue-600 to-purple-600 animate-pulse"
        style={{ animationDelay: "1s" }}
      ></div>
    </div>
  );

  const projectStructures = {
    javascript: {
      title: "JavaScript Structure",
      color: "from-yellow-400 to-orange-400",
      structure: `your-app/
├── api/                                 # Vercel serverless functions
│   ├── index.js                         # Main entry point for Vercel functions
│   └── node_modules/                    # Node.js dependencies
├── src/                                 # Main source code
│   ├── controllers/                     # Route logic and request handlers
│   │   └── example.controller.js        # Example controller file
│   ├── db/                              # Database setup and config
│   │   └── connect.js                   # DB connection logic
│   ├── models/                          # Data schemas / ORM models
│   │   └── example.model.js            # Example data model
│   ├── routes/                          # Route definitions
│   │   └── example.router.js           # Example router setup
│   ├── app.js                           # Express app configuration
│   ├── .env                             # Environment variables
│   └── dev.js                           # Dev-specific configs or startup
├── eslint.config.js                     # Linting configuration
├── package-lock.json                    # NPM lock file (exact versions)
├── package.json                         # Project metadata & dependencies
└── vercel.json                          # Vercel deployment config
`,
    },
    typescript: {
      title: "TypeScript Structure",
      color: "from-blue-400 to-cyan-400",
      structure: `your-app/
├── .vercel/                         # Vercel deployment config
├── api/                             # Vercel serverless functions
│   └── index.ts                     # Main entry point
├── src/                             # Main source code
│   ├── app.ts                       # Express app setup
│   ├── controllers/                 # Route controllers
│   │   └── user.controller.ts       # Handles user-related logic
│   ├── db/                          # Database connection
│   │   └── connection.ts            # DB connection setup
│   ├── routes/                      # Route definitions
│   │   └── user.routes.ts           # User routes
│   └── utils/                       # Utility functions/helpers
│       └── index.ts                 # Main utility export
├── .env                             # Environment variables
├── .gitignore                       # Git ignore rules
├── package-lock.json                # Dependency lock
├── package.json                     # Project dependencies
├── tsconfig.json                    # TypeScript configuration
└── vercel.json                      # Vercel configuration
`,
    },
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white relative overflow-hidden">
      <AnimatedGradient />

      {/* Navigation */}
      <nav className="relative z-50 px-6 py-4 bg-black/20 backdrop-blur-sm border-b border-white/10">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
              <Zap className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              create-vercel-express-mongodb-app
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#features"
              className="text-gray-300 hover:text-white transition-colors"
            >
              Features
            </a>
            <a
              href="#docs"
              className="text-gray-300 hover:text-white transition-colors"
            >
              Documentation
            </a>
            <a
              href="#getting-started"
              className="text-gray-300 hover:text-white transition-colors"
            >
              Get Started
            </a>
            <a
              href="https://github.com/codebyviral"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white transition-colors"
            >
              <Github className="w-5 h-5" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-white"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-4">
            <a
              href="#features"
              className="block text-gray-300 hover:text-white transition-colors"
            >
              Features
            </a>
            <a
              href="#docs"
              className="block text-gray-300 hover:text-white transition-colors"
            >
              Documentation
            </a>
            <a
              href="#getting-started"
              className="block text-gray-300 hover:text-white transition-colors"
            >
              Get Started
            </a>
            <a
              href="https://github.com/codebyviral"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-gray-300 hover:text-white transition-colors"
            >
              GitHub
            </a>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative z-10 px-6 py-20 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8 animate-fade-in">
            <div className="inline-flex items-center bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full px-4 py-2 mb-6 backdrop-blur-sm border border-white/10">
              <Rocket className="w-4 h-4 mr-2 text-blue-400" />
              <span className="text-sm text-blue-300">
                Version 2.0.1 • TypeScript Support Added
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-pulse">
              Vercel Express + MongoDB
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-gray-300">
              Serverless Starter Kit
            </h2>

            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
              A minimal starter kit for creating Express backend applications
              with MongoDB, specifically designed for serverless deployment on
              Vercel.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <button
              onClick={() =>
                copyToClipboard(
                  "npx create-vercel-express-mongodb-app",
                  "install"
                )
              }
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 px-8 py-3 rounded-lg font-semibold flex items-center justify-center space-x-2 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              {copied === "install" ? (
                <Check className="w-5 h-5" />
              ) : (
                <Terminal className="w-5 h-5" />
              )}
              <span>Get Started</span>
            </button>

            <a
              href="https://www.npmjs.com/package/create-vercel-express-mongodb-app"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 px-8 py-3 rounded-lg font-semibold flex items-center justify-center space-x-2 transition-all duration-300 transform hover:scale-105"
            >
              <ExternalLink className="w-5 h-5" />
              <span>View on NPM</span>
            </a>
          </div>

          <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 border border-white/10">
            <CodeBlock
              copyText="npx create-vercel-express-mongodb-app"
              title="Terminal"
            >
              npx create-vercel-express-mongodb-app
            </CodeBlock>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="relative z-10 px-6 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Why Choose Our Starter Kit?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Built for modern developers who want to ship fast without
              compromising on quality
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard
              icon={Zap}
              title="Lightning Fast Setup"
              description="Get your Express + MongoDB backend running in minutes, not hours. One command to rule them all."
              delay={100}
            />
            <FeatureCard
              icon={Globe}
              title="Serverless Ready"
              description="Pre-configured for Vercel's serverless platform. Deploy with confidence and scale automatically."
              delay={200}
            />
            <FeatureCard
              icon={Database}
              title="MongoDB Integration"
              description="Seamless MongoDB connection with proper error handling and connection pooling built-in."
              delay={300}
            />
            <FeatureCard
              icon={Code}
              title="TypeScript Support"
              description="Choose between JavaScript or TypeScript during setup. Full type safety when you need it."
              delay={400}
            />
            <FeatureCard
              icon={Layers}
              title="Clean Architecture"
              description="Well-organized folder structure following best practices for maintainable code."
              delay={500}
            />
            <FeatureCard
              icon={Settings}
              title="Production Ready"
              description="Environment variables, error handling, and deployment configuration included out of the box."
              delay={600}
            />
          </div>
        </div>
      </section>

      {/* Getting Started Section */}
      <section
        id="getting-started"
        className="relative z-10 px-6 py-20 bg-gradient-to-r from-blue-900/20 to-purple-900/20"
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              🚀 Getting Started
            </h2>
            <p className="text-xl text-gray-300">
              From zero to deployed in 5 simple steps
            </p>
          </div>

          <div className="space-y-8">
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
              <div className="flex items-center mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold mr-4">
                  1
                </div>
                <h3 className="text-xl font-bold text-white">
                  Create a New Project
                </h3>
              </div>
              <p className="text-gray-300 mb-4">
                Use the CLI to create a new project:
              </p>
              <CodeBlock
                copyText="npx create-vercel-express-mongodb-app"
                title="Terminal"
              >
                npx create-vercel-express-mongodb-app
              </CodeBlock>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
              <div className="flex items-center mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold mr-4">
                  2
                </div>
                <h3 className="text-xl font-bold text-white">
                  Navigate Into Your Project
                </h3>
              </div>
              <CodeBlock copyText="cd my-app" title="Terminal">
                cd my-app
              </CodeBlock>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
              <div className="flex items-center mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold mr-4">
                  3
                </div>
                <h3 className="text-xl font-bold text-white">
                  Set Up Environment Variables
                </h3>
              </div>
              <p className="text-gray-300 mb-4">
                Open the generated .env file and replace the MongoDB URI
                placeholder:
              </p>
              <CodeBlock
                copyText="MONGODB_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/<dbname>?retryWrites=true&w=majority\nPORT=7000"
                title=".env"
              >
                {`MONGODB_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/<dbname>?retryWrites=true&w=majority
PORT=7000`}
              </CodeBlock>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
              <div className="flex items-center mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold mr-4">
                  4
                </div>
                <h3 className="text-xl font-bold text-white">
                  Install Dependencies & Run
                </h3>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <CodeBlock copyText="npm install" title="Install">
                  npm install
                </CodeBlock>
                <CodeBlock copyText="npm run dev" title="Run">
                  npm run dev
                </CodeBlock>
              </div>
              <p className="text-gray-300 mt-4">
                The server will run at{" "}
                <span className="text-blue-400 font-mono">
                  http://localhost:8080
                </span>{" "}
                or as defined in your .env.
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
              <div className="flex items-center mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold mr-4">
                  5
                </div>
                <h3 className="text-xl font-bold text-white">
                  Deploy to Vercel
                </h3>
              </div>
              <div className="space-y-3 text-gray-300">
                <p>📤 Push your code to GitHub</p>
                <p>🌐 Go to vercel.com, import the project from GitHub</p>
                <p>
                  ⚙️ Set the environment variable MONGODB_URI in Vercel's
                  dashboard
                </p>
                <p>🚀 Deploy</p>
                <p className="font-semibold text-green-400">
                  ✅ That's it — your Express + MongoDB server is now serverless
                  and live!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Documentation Section with Interactive Project Structure */}
      <section id="docs" className="relative z-10 px-6 py-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              📦 Project Structure
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Clean, organized, and ready for production
            </p>
            <p className="text-lg text-gray-400">
              Hover over the options below to see the project structure for each
              language
            </p>
          </div>

          {/* Interactive Language Selector */}
          <div className="flex justify-center mb-8">
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-2 border border-white/10">
              <div className="flex space-x-2">
                <button
                  onMouseEnter={() => setActiveStructure("javascript")}
                  onClick={() => setActiveStructure("javascript")}
                  className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center space-x-2 ${
                    activeStructure === "javascript"
                      ? "bg-gradient-to-r from-yellow-500 to-orange-500 text-white shadow-lg"
                      : "text-gray-300 hover:text-white hover:bg-white/10"
                  }`}
                >
                  <Code className="w-4 h-4" />
                  <span className="cursor-pointer">JavaScript</span>
                </button>
                <button
                  onMouseEnter={() => setActiveStructure("typescript")}
                  onClick={() => setActiveStructure("typescript")}
                  className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center space-x-2 ${
                    activeStructure === "typescript"
                      ? "bg-gradient-to-r from-blue-500 to-cyan-500 text-white shadow-lg"
                      : "text-gray-300 hover:text-white hover:bg-white/10"
                  }`}
                >
                  <FileText className="w-4 h-4" />
                  <span className="cursor-pointer">TypeScript</span>
                </button>
              </div>
            </div>
          </div>

          {/* Dynamic Project Structure Display */}
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 transition-all duration-500">
            <div className="flex items-center mb-4">
              <div
                className={`w-4 h-4 rounded-full bg-gradient-to-r ${projectStructures[activeStructure].color} mr-3`}
              ></div>
              <h3
                className={`text-xl font-bold bg-gradient-to-r ${projectStructures[activeStructure].color} bg-clip-text text-transparent`}
              >
                {projectStructures[activeStructure].title}
              </h3>
            </div>
            <CodeBlock
              copyText={projectStructures[activeStructure].structure}
              title={projectStructures[activeStructure].title}
            >
              {projectStructures[activeStructure].structure}
            </CodeBlock>
          </div>

          {/* Technology Stack Cards */}
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-blue-500/30 transition-all duration-300 transform hover:-translate-y-1">
              <Server className="w-8 h-8 text-blue-400 mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">Express.js</h3>
              <p className="text-gray-300">
                Fast, unopinionated web framework for Node.js with middleware
                support
              </p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-green-500/30 transition-all duration-300 transform hover:-translate-y-1">
              <Database className="w-8 h-8 text-green-400 mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">MongoDB</h3>
              <p className="text-gray-300">
                NoSQL database with flexible document structure and powerful
                querying
              </p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-purple-500/30 transition-all duration-300 transform hover:-translate-y-1">
              <Globe className="w-8 h-8 text-purple-400 mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">Vercel</h3>
              <p className="text-gray-300">
                Serverless platform with automatic scaling and edge optimization
              </p>
            </div>
          </div>

          {/* Additional Features */}
          <div className="mt-16 bg-gradient-to-r from-blue-900/20 to-purple-900/20 rounded-xl p-8 border border-white/10">
            <h3 className="text-2xl font-bold text-white mb-6 text-center">
              🛠️ What's Included
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  <span className="text-gray-300">
                    Environment configuration
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  <span className="text-gray-300">
                    Error handling middleware
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  <span className="text-gray-300">
                    MongoDB connection pooling
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  <span className="text-gray-300">RESTful API structure</span>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  <span className="text-gray-300">
                    Vercel deployment config
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  <span className="text-gray-300">Development scripts</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  <span className="text-gray-300">
                    TypeScript support (optional)
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  <span className="text-gray-300">Security best practices</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 px-6 py-12 bg-black/50 backdrop-blur-sm border-t border-white/10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                create-vercel-express-mongodb-app
              </span>
            </div>

            <p className="text-gray-300 mb-6">
              Built with ❤️ by{" "}
              <a
                href="https://github.com/codebyviral"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300 transition-colors"
              >
                @codebyviral
              </a>
            </p>

            <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-400">
              <span className="bg-blue-900/30 px-3 py-1 rounded-full">
                vercel
              </span>
              <span className="bg-green-900/30 px-3 py-1 rounded-full">
                mongoose
              </span>
              <span className="bg-purple-900/30 px-3 py-1 rounded-full">
                express
              </span>
              <span className="bg-pink-900/30 px-3 py-1 rounded-full">
                starter
              </span>
              <span className="bg-indigo-900/30 px-3 py-1 rounded-full">
                template
              </span>
              <span className="bg-yellow-900/30 px-3 py-1 rounded-full">
                cli
              </span>
            </div>
          </div>
        </div>
      </footer>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.6s ease-out;
        }
      `}</style>
    </div>
  );
};

export default LandingPage;
