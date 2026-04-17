import { motion } from "framer-motion";
import { useState } from "react";
import {
  Check,
  TrendingUp,
  Users,
  Target,
  DollarSign,
  Globe,
  BookOpen,
  Shield,
  RefreshCw,
  Award,
  Database,
  Network,
} from "lucide-react";
import SectionHeader from "../ui/SectionHeader";

const DetailedServices = () => {
  const [activeTab, setActiveTab] = useState("business-consultant");

  const tabs = [
    { id: "business-consultant", label: "Business Consultant", icon: Target },
    { id: "business-analyst", label: "Business Analyst", icon: TrendingUp },
    { id: "finance-analyst", label: "Finance Analyst", icon: DollarSign },
    { id: "fund-raising", label: "Fund Raising", icon: Users },
    { id: "business-promotion", label: "Business Promotion", icon: Globe },
    { id: "finance-education", label: "Finance Education", icon: BookOpen },
    { id: "strategic-planning", label: "Strategic Planning", icon: Shield },
    {
      id: "process-optimization",
      label: "Process Optimization",
      icon: RefreshCw,
    },
    { id: "mentorship", label: "Mentorship", icon: Award },
    { id: "erp-development", label: "ERP Development", icon: Database },
    { id: "solution-architect", label: "Solution Architect", icon: Network },
  ];

  const content = {
    "business-consultant": {
      title: "Business Consultant",
      subtitle: 'Strategic Advisor: "What should be done and why?"',
      description:
        "We provide expert advice to improve Performance, Address Challenges & achieve Strategic Objectives. Our emphasis is on assessing overall direction, market position & competitive environment.",
      points: [
        "Developing and refining business strategies",
        "Offering external, industry-informed perspectives",
        "Supporting long-term growth & innovation initiatives",
      ],
    },
    "business-analyst": {
      title: "Business Analyst",
      subtitle: 'Implementation Specialist: "How should it be done?"',
      description:
        "Focus on understanding specific business needs and translating them into actionable solutions. We analyze Processes, Gather & Document requirements and work with both commercial & technical teams.",
      points: [
        "Examining workflows and identifying improvements",
        "Acting as liaison between stakeholders and technical teams",
        "Ensuring solutions deliver measurable value",
      ],
    },
    "finance-analyst": {
      title: "Finance Analyst",
      subtitle:
        "Bridge between raw financial data and strategic business actions",
      description: "Core Work:",
      points: [
        "📊 Analyzing Financial Data – Income statements, balance sheets, cash flow",
        "📈 Forecasting & Budgeting – Financial projections for planning",
        "🎯 Performance Evaluation – KPIs and variance analysis",
        "💡 Strategic Recommendations – Cost optimization & profitability",
        "⚠️ Risk Assessment – Identifying and mitigating financial risks",
      ],
    },
    "fund-raising": {
      title: "Fund Raising Advisory",
      subtitle:
        "Finding the right partners that believe in your vision bilaterally",
      description: "Common Methods:",
      points: [
        "• Equity Financing – Share of ownership for capital",
        "• Debt Financing – Loans/bonds with interest repayment",
        "• Crowdfunding – Small contributions from many people",
        "• Grants & Competitions – Non-repayment funding",
      ],
      footer: "Outcome: Win-Win Situation for all stakeholders",
    },
    "business-promotion": {
      title: "Business Promotion in India",
      subtitle:
        "Success through blending traditional outreach with modern marketing",
      description: "Key Strategies:",
      points: [
        "🌐 Digital Presence – 800M+ internet users opportunity",
        "🗣️ Localized Marketing – Regional languages & cultural relevance",
        "🤝 Community Engagement – Local events & sponsorships",
        "💰 Value-Driven Offers – Quality + affordability balance",
        "👥 Word-of-Mouth & Trust – Community recommendations",
      ],
    },
    "finance-education": {
      title: "Finance Education",
      subtitle:
        "Understanding how money works: earned, spent, saved, invested & managed",
      description: "The Balance Sheet: Assets = Liabilities + Equity",
      points: [
        "✓ Assess company financial health",
        "✓ Understand debt payment ability",
        "✓ Identify growth potential or risks",
      ],
    },
    "strategic-planning": {
      title: "Strategic Planning & Risk Management",
      subtitle: "Navigate uncertainty while pursuing long-term goals",
      description:
        "Strategic Planning: Vision & Mission alignment, Environmental Analysis, Resource Allocation, Progress Monitoring",
      points: [
        "Risk Identification",
        "Impact Assessment",
        "Mitigation Planning",
        "Continuous Monitoring",
      ],
      footer:
        "Benefits: Proactive growth, anticipate challenges, build resilience",
    },
    "process-optimization": {
      title: "Process Optimization & Data Analysis",
      subtitle:
        "Making work faster, easier, smarter, efficient with high accuracy",
      description:
        "Process Optimization: Identify bottlenecks, Reduce waste, Improve workflows, Optimal resource utilization",
      points: [
        "→ Examine trends & insights",
        "→ Turn data into actionable knowledge",
        "→ Informed decision-making",
      ],
    },
    mentorship: {
      title: "Mentorship & Leadership Coaching",
      subtitle: "Guiding Growth and Inspiring Leaders",
      description:
        "Mentorship: Relationship-based, Experience sharing, Broad career guidance, Long-term organic",
      points: [
        "Leadership Coaching: Goal-focused, Skill-building, Performance enhancement, Structured measurable",
        "✓ Build confidence & resilience",
        "✓ Improve decision-making",
        "✓ Foster emotional intelligence",
        "✓ Create learning culture",
      ],
    },
    "erp-development": {
      title: "Custom ERP Development",
      subtitle: "Tailored ERP solution integrating core business processes",
      description:
        "Development Process: 1️⃣ Requirement Analysis 2️⃣ System Design 3️⃣ Module Development 4️⃣ Integration 5️⃣ Testing & QA",
      points: [
        "Implementation: Data Migration → User Training → Pilot Run → Go-Live → Support",
        "• Process Efficiency",
        "• Scalability",
        "• Better Decisions",
        "• Competitive Advantage",
      ],
    },
    "solution-architect": {
      title: "Financial Operation Solution Architect",
      subtitle:
        "Bridge between financial business goals and technical IT infrastructure",
      description: "Core Role:",
      points: [
        "🔗 Bridge Function – Translate CFO requirements into technical blueprints",
        "🔧 System Integrator – Seamless financial application connectivity",
        "📐 Strategic Overseer – Future scalability & compliance design",
        "• Designing Financial Systems",
        "• Technical Implementation",
        "• Process Optimization",
        "• Stakeholder Management",
        "• Regulatory & Risk Compliance",
      ],
      footer:
        "Skill Sets: Domain Expertise | Technical Knowledge | Analytical Thinking | Communication",
    },
  };

  const activeContent = content[activeTab];

  return (
    <section id="expertise" className="py-20 bg-white dark:bg-dark-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="Our Expertise in Detail"
          subtitle="Deep dive into our specialized service offerings"
        />

        {/* Tabs Navigation */}
        <div className="mb-12 overflow-x-auto">
          <div className="flex flex-wrap gap-2 justify-center min-w-max">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center space-x-2 px-4 py-3 rounded-lg font-medium transition-all duration-300 ${
                    activeTab === tab.id
                      ? "bg-gradient-to-r from-emerald-500 to-emerald-600 text-white shadow-lg"
                      : "bg-gray-100 dark:bg-dark-secondary text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span className="whitespace-nowrap">{tab.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Content Area */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="glass-card rounded-2xl p-8 md:p-12"
        >
          <h3 className="text-3xl font-display font-bold mb-3 gradient-text">
            {activeContent.title}
          </h3>

          <p className="text-xl text-emerald-600 dark:text-emerald-400 mb-6 font-medium">
            {activeContent.subtitle}
          </p>

          <p className="text-gray-700 dark:text-gray-300 mb-8 text-lg leading-relaxed">
            {activeContent.description}
          </p>

          <div className="space-y-4">
            {activeContent.points.map((point, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="flex items-start space-x-3"
              >
                <Check className="w-6 h-6 text-emerald-500 flex-shrink-0 mt-1" />
                <span className="text-gray-700 dark:text-gray-300 text-lg">
                  {point}
                </span>
              </motion.div>
            ))}
          </div>

          {activeContent.footer && (
            <div className="mt-8 p-4 bg-emerald-50 dark:bg-emerald-900/20 rounded-lg border-l-4 border-emerald-500">
              <p className="text-emerald-800 dark:text-emerald-300 font-medium">
                {activeContent.footer}
              </p>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default DetailedServices;
