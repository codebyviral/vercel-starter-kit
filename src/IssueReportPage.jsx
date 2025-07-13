import React, { useState, useEffect } from "react";
import {
  Bug,
  Lightbulb,
  MessageCircle,
  Send,
  Check,
  Github,
  ArrowLeft,
  AlertCircle,
  Zap,
  X,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const IssueReportPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    type: "bug",
    title: "",
    description: "",
    email: "",
    reproduction: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const issueTypes = {
    bug: {
      icon: Bug,
      title: "Bug Report",
      description: "Something isn't working as expected",
      color: "from-red-500 to-pink-500",
      bgColor: "from-red-900/20 to-pink-900/20",
    },
    feature: {
      icon: Lightbulb,
      title: "Feature Request",
      description: "Suggest a new feature or improvement",
      color: "from-yellow-500 to-orange-500",
      bgColor: "from-yellow-900/20 to-orange-900/20",
    },
    question: {
      icon: MessageCircle,
      title: "Question",
      description: "Ask about usage or get help",
      color: "from-blue-500 to-cyan-500",
      bgColor: "from-blue-900/20 to-cyan-900/20",
    },
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleSubmit = async () => {
    if (!formData.title || !formData.email || !formData.description) {
      return;
    }

    setIsSubmitting(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSubmitted(true);

    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        type: "bug",
        title: "",
        description: "",
        email: "",
        reproduction: "",
      });
    }, 3000);
  };

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const AnimatedGradient = () => (
    <div className="absolute inset-0 opacity-30">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 animate-pulse"></div>
      <div
        className="absolute inset-0 bg-gradient-to-l from-green-600 via-blue-600 to-purple-600 animate-pulse"
        style={{ animationDelay: "1s" }}
      ></div>
    </div>
  );

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white relative overflow-hidden flex items-center justify-center">
        <AnimatedGradient />
        <div className="relative z-10 text-center animate-fade-in">
          <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6">
            <Check className="w-10 h-10 text-white" />
          </div>
          <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
            Thank You!
          </h2>
          <p className="text-gray-300 text-lg">
            Your {issueTypes[formData.type].title.toLowerCase()} has been
            submitted successfully.
          </p>
          <p className="text-gray-400 mt-2">We'll get back to you soon!</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white relative overflow-hidden">
      <AnimatedGradient />

      {/* Navigation */}
      <nav className="relative z-50 px-6 py-4 bg-black/20 backdrop-blur-sm border-b border-white/10">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div
              onClick={() => navigate("/")}
              className="w-10 cursor-pointer h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center"
            >
              <Zap className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Report Issue
            </span>
          </div>
          <a
            href="#"
            className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Docs</span>
          </a>
        </div>
      </nav>

      {/* Main Content */}
      <div className="relative z-10 px-6 py-12">
        <div className="max-w-2xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12 animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Help Us Improve
            </h1>
            <p className="text-xl text-gray-300 max-w-xl mx-auto">
              Report bugs, request features, or ask questions about
              create-vercel-express-mongodb-app
            </p>
          </div>

          {/* Issue Type Selection */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold mb-4 text-white">
              What can we help you with?
            </h3>
            <div className="grid md:grid-cols-3 gap-4">
              {Object.entries(issueTypes).map(([key, type]) => {
                const Icon = type.icon;
                return (
                  <button
                    key={key}
                    onClick={() => handleInputChange("type", key)}
                    className={`p-4 rounded-xl border transition-all duration-300 transform hover:scale-105 text-left ${
                      formData.type === key
                        ? `bg-gradient-to-r ${type.bgColor} border-white/30 shadow-lg`
                        : "bg-white/5 border-white/10 hover:border-white/20"
                    }`}
                  >
                    <div
                      className={`w-10 h-10 rounded-lg flex items-center justify-center mb-3 bg-gradient-to-br ${type.color}`}
                    >
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                    <h4 className="font-semibold text-white mb-1">
                      {type.title}
                    </h4>
                    <p className="text-sm text-gray-400">{type.description}</p>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Form */}
          <div className="space-y-6">
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
              {/* Title */}
              <div className="mb-6">
                <label className="block text-white font-semibold mb-2">
                  Title *
                </label>
                <input
                  type="text"
                  value={formData.title}
                  onChange={(e) => handleInputChange("title", e.target.value)}
                  placeholder={`Brief description of your ${issueTypes[
                    formData.type
                  ].title.toLowerCase()}`}
                  className="w-full px-4 py-3 bg-gray-900/50 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300"
                  required
                />
              </div>

              {/* Email */}
              <div className="mb-6">
                <label className="block text-white font-semibold mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  placeholder="your@email.com"
                  className="w-full px-4 py-3 bg-gray-900/50 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300"
                  required
                />
              </div>

              {/* Description */}
              <div className="mb-6">
                <label className="block text-white font-semibold mb-2">
                  Description *
                </label>
                <textarea
                  value={formData.description}
                  onChange={(e) =>
                    handleInputChange("description", e.target.value)
                  }
                  placeholder={
                    formData.type === "bug"
                      ? "Describe the bug in detail. What happened? What did you expect to happen?"
                      : formData.type === "feature"
                      ? "Describe the feature you'd like to see. How would it help you?"
                      : "What would you like to know? Provide as much context as possible."
                  }
                  rows="4"
                  className="w-full px-4 py-3 bg-gray-900/50 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300 resize-none"
                  required
                />
              </div>

              {/* Reproduction Steps (only for bugs) */}
              {formData.type === "bug" && (
                <div className="mb-6">
                  <label className="block text-white font-semibold mb-2">
                    Steps to Reproduce
                  </label>
                  <textarea
                    value={formData.reproduction}
                    onChange={(e) =>
                      handleInputChange("reproduction", e.target.value)
                    }
                    placeholder="1. Go to...&#10;2. Click on...&#10;3. See error..."
                    rows="3"
                    className="w-full px-4 py-3 bg-gray-900/50 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300 resize-none"
                  />
                </div>
              )}

              {/* Submit Button */}
              <button
                onClick={handleSubmit}
                disabled={isSubmitting}
                className={`w-full px-6 py-4 rounded-lg font-semibold flex items-center justify-center space-x-2 transition-all duration-300 transform hover:scale-105 ${
                  isSubmitting
                    ? "bg-gray-600 cursor-not-allowed"
                    : "bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-lg hover:shadow-xl"
                }`}
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                    <span>Submitting...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    <span>Submit {issueTypes[formData.type].title}</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Footer Note */}
          <div className="mt-8 text-center">
            <div className="bg-blue-900/20 rounded-lg p-4 border border-blue-500/20">
              <div className="flex items-center justify-center space-x-2 text-blue-300">
                <AlertCircle className="w-5 h-5" />
                <span className="font-semibold">Pro Tip</span>
              </div>
              <p className="text-blue-200 mt-2">
                For urgent issues, you can also create an issue directly on our{" "}
                <a
                  href="https://github.com/codebyviral/create-vercel-express-mongodb-app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300 underline inline-flex items-center"
                >
                  GitHub repository
                  <Github className="w-4 h-4 ml-1" />
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>

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

export default IssueReportPage;
