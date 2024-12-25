import { ServiceType } from "@/types/services";

export const services: ServiceType[] = [
  {
    id: "fractional-cso",
    title: "Fractional Chief Sales Officer (CSO) Services",
    description: "Empowering your sales strategy with executive-level insight",
    features: [
      "Strategic Oversight: Drive revenue growth through actionable sales strategies",
      "Team Leadership: Optimize performance with training and coaching",
      "Performance Metrics: Leverage data-driven insights to elevate sales outcomes"
    ],
    price: "Contact us to discuss your unique needs",
    tags: ["STRATEGY", "LEADERSHIP", "AI INSIGHTS"],
    details: [
      {
        title: "Strategic Leadership",
        description: "Our Fractional CSO service provides executive-level sales leadership without the overhead of a full-time hire.",
        bullets: [
          "Development of comprehensive sales strategies aligned with business goals",
          "Regular strategic reviews and adjustments based on performance data",
          "Executive-level guidance for critical sales decisions"
        ]
      },
      {
        title: "AI-Powered Insights",
        description: "Leverage cutting-edge AI technology to make data-driven decisions and optimize your sales process.",
        bullets: [
          "Real-time analytics and performance tracking",
          "Predictive modeling for sales forecasting",
          "Automated insights and recommendations"
        ]
      },
      {
        title: "Team Development",
        description: "Build and nurture a high-performing sales team through expert guidance and support.",
        bullets: [
          "Personalized coaching and mentoring programs",
          "Skills assessment and development planning",
          "Team structure optimization and role definition"
        ]
      }
    ]
  },
  // ... rest of the services remain unchanged
  {
    id: "ai-automation",
    title: "Sales and Service AI Automation",
    description: "Revolutionize your engagement with cutting-edge AI solutions",
    features: [
      "Custom AI Solutions: Automate sales and customer service processes",
      "Personalized Engagement: Deploy AI for targeted communications",
      "Enhanced Efficiency: Free up time for strategic initiatives"
    ],
    price: "$1,000 - $5,000",
    tags: ["AUTOMATION", "AI", "EFFICIENCY"],
    details: [
      {
        title: "Process Automation",
        description: "Streamline your sales operations with intelligent automation solutions.",
        bullets: [
          "Automated lead qualification and scoring",
          "Smart email and communication sequences",
          "Intelligent task prioritization and assignment"
        ]
      },
      {
        title: "Customer Engagement",
        description: "Enhance customer interactions with AI-powered communication tools.",
        bullets: [
          "24/7 AI-powered customer support",
          "Personalized communication at scale",
          "Automated follow-up and nurture sequences"
        ]
      },
      {
        title: "Integration & Analytics",
        description: "Seamlessly integrate AI solutions with your existing tools and track performance.",
        bullets: [
          "CRM and sales tool integration",
          "Performance tracking and optimization",
          "ROI measurement and reporting"
        ]
      }
    ]
  },
  {
    id: "executive-coaching",
    title: "1-on-1 Executive Coaching",
    description: "Personalized growth for high achievers",
    features: [
      "Deep Insights: Understand and overcome barriers",
      "Custom Roadmaps: Develop actionable transformation plans",
      "Accountability Support: Stay aligned with consistent guidance"
    ],
    price: "$499 per 1.5-hour session",
    tags: ["COACHING", "LEADERSHIP", "GROWTH"],
    details: [
      {
        title: "Personalized Approach",
        description: "Tailored coaching sessions designed to address your specific challenges and goals.",
        bullets: [
          "Individual assessment and goal setting",
          "Customized development strategies",
          "Regular progress tracking and adjustment"
        ]
      },
      {
        title: "Leadership Development",
        description: "Enhance your leadership capabilities and decision-making skills.",
        bullets: [
          "Executive presence and communication",
          "Strategic thinking and problem-solving",
          "Team management and delegation"
        ]
      },
      {
        title: "Performance Optimization",
        description: "Maximize your effectiveness and achieve breakthrough results.",
        bullets: [
          "Time management and productivity",
          "Work-life balance strategies",
          "Stress management and resilience"
        ]
      }
    ]
  },
  {
    id: "group-coaching",
    title: "Group Coaching",
    description: "Collaborative breakthroughs for team success",
    features: [
      "Focused Workshops: Gain clarity on shared goals",
      "Dynamic Interaction: Engage in active learning",
      "Proven Frameworks: Leverage the '7 Keys to Connecting'"
    ],
    price: "$199 per hour",
    tags: ["TEAMS", "COLLABORATION", "TRAINING"],
    details: [
      {
        title: "Team Dynamics",
        description: "Build stronger teams through collaborative learning and development.",
        bullets: [
          "Team assessment and alignment",
          "Communication and collaboration skills",
          "Conflict resolution strategies"
        ]
      },
      {
        title: "Skill Development",
        description: "Enhance team capabilities through structured learning programs.",
        bullets: [
          "Sales methodology training",
          "Customer engagement techniques",
          "Presentation and negotiation skills"
        ]
      },
      {
        title: "Performance Culture",
        description: "Create a high-performance culture that drives results.",
        bullets: [
          "Goal setting and accountability",
          "Peer learning and support",
          "Recognition and motivation strategies"
        ]
      }
    ]
  }
];