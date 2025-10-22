// Country-specific job market data for 6 countries
// This data drives all visualizations and chatbot responses

export const countryJobData = {
  'United States': {
    months: ['Jan 2024', 'Feb 2024', 'Mar 2024', 'Apr 2024', 'May 2024', 'Jun 2024', 'Jul 2024', 'Aug 2024', 'Sep 2024', 'Oct 2024', 'Nov 2024', 'Dec 2024', 'Jan 2025', 'Feb 2025', 'Mar 2025', 'Apr 2025', 'May 2025', 'Jun 2025'],
    multiplier: 1,
    currency: '$',
    avgSalary: 142000,
    totalJobs: 487000,
    remoteJobs: 45000,
    topGrowth: 'AI/ML Eng',
    growthRate: 287,
    skills: [
      { skill: 'Generative AI', growth: 287, demand: 9500 },
      { skill: 'Python', growth: 145, demand: 45000 },
      { skill: 'Cloud (AWS/Azure)', growth: 178, demand: 38000 },
      { skill: 'React/Frontend', growth: 132, demand: 35000 },
      { skill: 'Kubernetes', growth: 195, demand: 22000 },
      { skill: 'Machine Learning', growth: 167, demand: 28000 },
      { skill: 'Cybersecurity', growth: 153, demand: 26000 },
      { skill: 'Data Engineering', growth: 188, demand: 24000 }
    ],
    industries: [
      { industry: 'Technology', jobs: 125000, forecast: 145000, growth: 16 },
      { industry: 'Healthcare', jobs: 89000, forecast: 98000, growth: 10 },
      { industry: 'Finance', jobs: 76000, forecast: 82000, growth: 8 },
      { industry: 'E-commerce', jobs: 54000, forecast: 67000, growth: 24 },
      { industry: 'Manufacturing', jobs: 43000, forecast: 45000, growth: 5 }
    ]
  },
  'United Kingdom': {
    months: ['Jan 2024', 'Feb 2024', 'Mar 2024', 'Apr 2024', 'May 2024', 'Jun 2024', 'Jul 2024', 'Aug 2024', 'Sep 2024', 'Oct 2024', 'Nov 2024', 'Dec 2024', 'Jan 2025', 'Feb 2025', 'Mar 2025', 'Apr 2025', 'May 2025', 'Jun 2025'],
    multiplier: 0.65,
    currency: '£',
    avgSalary: 68000,
    totalJobs: 156000,
    remoteJobs: 18000,
    topGrowth: 'Cloud Architect',
    growthRate: 234,
    skills: [
      { skill: 'Python', growth: 156, demand: 14000 },
      { skill: 'Cloud (AWS/Azure)', growth: 189, demand: 12000 },
      { skill: 'Generative AI', growth: 234, demand: 3800 },
      { skill: 'React/Frontend', growth: 142, demand: 11000 },
      { skill: 'DevOps', growth: 178, demand: 9500 },
      { skill: 'Data Science', growth: 165, demand: 8900 },
      { skill: 'Cybersecurity', growth: 198, demand: 10500 },
      { skill: 'Java/Spring', growth: 123, demand: 8200 }
    ],
    industries: [
      { industry: 'Financial Services', jobs: 45000, forecast: 52000, growth: 15.5 },
      { industry: 'Technology', jobs: 38000, forecast: 44000, growth: 15.8 },
      { industry: 'Healthcare', jobs: 28000, forecast: 31000, growth: 10.7 },
      { industry: 'Retail', jobs: 22000, forecast: 25000, growth: 13.6 },
      { industry: 'Government', jobs: 23000, forecast: 24000, growth: 4.3 }
    ]
  },
  'India': {
    months: ['Jan 2024', 'Feb 2024', 'Mar 2024', 'Apr 2024', 'May 2024', 'Jun 2024', 'Jul 2024', 'Aug 2024', 'Sep 2024', 'Oct 2024', 'Nov 2024', 'Dec 2024', 'Jan 2025', 'Feb 2025', 'Mar 2025', 'Apr 2025', 'May 2025', 'Jun 2025'],
    multiplier: 1.2,
    currency: '₹',
    avgSalary: 1850000,
    totalJobs: 789000,
    remoteJobs: 95000,
    topGrowth: 'Full Stack Dev',
    growthRate: 312,
    skills: [
      { skill: 'Full Stack Development', growth: 312, demand: 52000 },
      { skill: 'Python', growth: 198, demand: 48000 },
      { skill: 'Java/Spring Boot', growth: 176, demand: 46000 },
      { skill: 'React/Angular', growth: 245, demand: 41000 },
      { skill: 'Cloud Computing', growth: 234, demand: 38000 },
      { skill: 'Data Science', growth: 289, demand: 35000 },
      { skill: 'AI/ML', growth: 267, demand: 28000 },
      { skill: 'DevOps', growth: 223, demand: 32000 }
    ],
    industries: [
      { industry: 'IT Services', jobs: 245000, forecast: 298000, growth: 21.6 },
      { industry: 'E-commerce', jobs: 156000, forecast: 189000, growth: 21.2 },
      { industry: 'FinTech', jobs: 134000, forecast: 165000, growth: 23.1 },
      { industry: 'Technology', jobs: 178000, forecast: 212000, growth: 19.1 },
      { industry: 'Healthcare Tech', jobs: 76000, forecast: 92000, growth: 21.1 }
    ]
  },
  'Germany': {
    months: ['Jan 2024', 'Feb 2024', 'Mar 2024', 'Apr 2024', 'May 2024', 'Jun 2024', 'Jul 2024', 'Aug 2024', 'Sep 2024', 'Oct 2024', 'Nov 2024', 'Dec 2024', 'Jan 2025', 'Feb 2025', 'Mar 2025', 'Apr 2025', 'May 2025', 'Jun 2025'],
    multiplier: 0.58,
    currency: '€',
    avgSalary: 72000,
    totalJobs: 198000,
    remoteJobs: 22000,
    topGrowth: 'AI Engineer',
    growthRate: 256,
    skills: [
      { skill: 'AI/Machine Learning', growth: 256, demand: 8900 },
      { skill: 'Cloud (AWS/Azure)', growth: 187, demand: 15000 },
      { skill: 'Python', growth: 168, demand: 16500 },
      { skill: 'SAP Technologies', growth: 134, demand: 12000 },
      { skill: 'Cybersecurity', growth: 212, demand: 11500 },
      { skill: 'IoT', growth: 198, demand: 9800 },
      { skill: 'DevOps', growth: 176, demand: 10200 },
      { skill: 'Java/Spring', growth: 145, demand: 13500 }
    ],
    industries: [
      { industry: 'Manufacturing Tech', jobs: 56000, forecast: 64000, growth: 14.3 },
      { industry: 'Automotive Tech', jobs: 42000, forecast: 49000, growth: 16.7 },
      { industry: 'Technology', jobs: 38000, forecast: 45000, growth: 18.4 },
      { industry: 'Finance', jobs: 32000, forecast: 36000, growth: 12.5 },
      { industry: 'Energy', jobs: 30000, forecast: 34000, growth: 13.3 }
    ]
  },
  'Canada': {
    months: ['Jan 2024', 'Feb 2024', 'Mar 2024', 'Apr 2024', 'May 2024', 'Jun 2024', 'Jul 2024', 'Aug 2024', 'Sep 2024', 'Oct 2024', 'Nov 2024', 'Dec 2024', 'Jan 2025', 'Feb 2025', 'Mar 2025', 'Apr 2025', 'May 2025', 'Jun 2025'],
    multiplier: 0.72,
    currency: 'C$',
    avgSalary: 95000,
    totalJobs: 234000,
    remoteJobs: 28000,
    topGrowth: 'Data Engineer',
    growthRate: 267,
    skills: [
      { skill: 'Data Engineering', growth: 267, demand: 11500 },
      { skill: 'Python', growth: 178, demand: 19000 },
      { skill: 'Cloud (AWS/Azure)', growth: 195, demand: 16500 },
      { skill: 'AI/ML', growth: 245, demand: 9800 },
      { skill: 'React/Frontend', growth: 156, demand: 15000 },
      { skill: 'Cybersecurity', growth: 189, demand: 12500 },
      { skill: 'DevOps', growth: 198, demand: 11000 },
      { skill: 'Java', growth: 134, demand: 13500 }
    ],
    industries: [
      { industry: 'Technology', jobs: 67000, forecast: 79000, growth: 17.9 },
      { industry: 'Finance', jobs: 52000, forecast: 59000, growth: 13.5 },
      { industry: 'Healthcare', jobs: 45000, forecast: 51000, growth: 13.3 },
      { industry: 'E-commerce', jobs: 38000, forecast: 45000, growth: 18.4 },
      { industry: 'Government', jobs: 32000, forecast: 34000, growth: 6.3 }
    ]
  },
  'Australia': {
    months: ['Jan 2024', 'Feb 2024', 'Mar 2024', 'Apr 2024', 'May 2024', 'Jun 2024', 'Jul 2024', 'Aug 2024', 'Sep 2024', 'Oct 2024', 'Nov 2024', 'Dec 2024', 'Jan 2025', 'Feb 2025', 'Mar 2025', 'Apr 2025', 'May 2025', 'Jun 2025'],
    multiplier: 0.68,
    currency: 'A$',
    avgSalary: 115000,
    totalJobs: 167000,
    remoteJobs: 21000,
    topGrowth: 'Cloud Architect',
    growthRate: 278,
    skills: [
      { skill: 'Cloud (AWS/Azure)', growth: 278, demand: 9500 },
      { skill: 'Python', growth: 167, demand: 13000 },
      { skill: 'Cybersecurity', growth: 234, demand: 11000 },
      { skill: 'Data Science', growth: 198, demand: 9800 },
      { skill: 'DevOps', growth: 212, demand: 8900 },
      { skill: 'React/Frontend', growth: 156, demand: 11500 },
      { skill: 'AI/ML', growth: 245, demand: 7500 },
      { skill: '.NET', growth: 134, demand: 9200 }
    ],
    industries: [
      { industry: 'Technology', jobs: 48000, forecast: 57000, growth: 18.8 },
      { industry: 'Finance', jobs: 42000, forecast: 48000, growth: 14.3 },
      { industry: 'Mining Tech', jobs: 28000, forecast: 33000, growth: 17.9 },
      { industry: 'Healthcare', jobs: 26000, forecast: 29000, growth: 11.5 },
      { industry: 'Government', jobs: 23000, forecast: 24000, growth: 4.3 }
    ]
  }
};

// Export array of country names for easy iteration
export const countries = Object.keys(countryJobData);

// Export list of all job roles tracked in the system
export const roles = [
  'All Roles',
  'Software Engineer',
  'Data Scientist',
  'AI/ML Engineer',
  'Product Manager',
  'UX Designer',
  'DevOps Engineer',
  'Cloud Architect',
  'Cybersecurity Analyst'
];