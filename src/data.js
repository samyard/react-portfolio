//  Projects, skills, and extracurriculars
import { DatabaseIcon, CodeIcon, TableIcon, CloudIcon, CalculatorIcon, ChartBarIcon, DesktopComputerIcon, TerminalIcon } from "@heroicons/react/solid";


export const extracurriculars = [
  {
    title: "2022 Pan Mass Challenge",
    subtitle: "Dana Farber Cancer Institute",
    description:
      "Raised over 5,000 dollars for the Dana-Farber Cancer Institute through the Pan Mass Challenge",
    image: "./pmc.png",
    link: "https://profile.pmc.org/SY0040",
  },
  {
    title: "2023 AFSP Fundraising",
    subtitle: "American Foundation for Suicide Prevention",
    description:
      "Raised over 1,000 dollars for the AFSP Marathon Team.",
    image: "./afsp_blue.jpeg",
    link: "https://supporting.afsp.org/index.cfm?fuseaction=donorDrive.participant&participantID=2783232",
  }
];

export const projects = [
  {
    title: "Florida Election Predictions",
    subtitle: "RStudio & LaTeX Project",
    description:
      "Examining the electoral landscape of Florida counties in the 2020 elections",
    image: "./dem_votes.png",
    link: "https://github.com/samyard/FL_election_prediction",
  },
  {
    title: "BU Sustainability Dashboard",
    subtitle: "Python & Solidity",
    description:
      "Designed a data dashboard for BU students and faculty to both visualize sustainability data as well as browse recommendations for limiting waste.",
    image: "./ccds.gif",
    link: "https://github.com/samyard/453-DevProj",
  },
  {
    title: "AI Policy Research",
    subtitle: "Decoding bias in generative AI",
    description:
      "This paper outlines policies to mitigate technological redlining.",
    image: "./nn.avif",
    link: "./ai.pdf",
  }
];

export const skills = [
  {title: "Java", icon: CodeIcon, category: "Languages"},
  {title: "Microsoft Azure", icon: CloudIcon, category: "Cloud Based Software"},
  {title: "GitHub", icon: CloudIcon, category: "Cloud Based Software"},
  {title: "Python", icon: CodeIcon, category: "Languages"},
  {title: "JavaScript", icon: CodeIcon, category: "Languages"},

  {title: "R", icon: CodeIcon, category: "Languages"},
  {title:"Power BI", icon: TableIcon, category: "Visualization Tools & IDEs"},
  {title:"Excel", icon: TableIcon, category: "Visualization Tools & IDEs"},
  {title:"LaTex", icon: DesktopComputerIcon, category: "Visualization Tools & IDEs"},
  {title:"VSCode", icon: DesktopComputerIcon, category: "Visualization Tools & IDEs"},
  {title:"Google CoLab", icon: DesktopComputerIcon, category: "Visualization Tools & IDEs"},

  {title:"Odoo", icon: DatabaseIcon, category: "Database Management"},
  {title: "Cosmos DB", icon: CloudIcon, category: "Database Management"},
  {title: "MySQL", icon: CloudIcon, category: "Database Management"},


  {title:"SQL", icon: DatabaseIcon, category: "Languages"},
  {title:"ChatGPT 3.5", icon: DesktopComputerIcon, category: "Artifical Intelliegence"},

  {title: "pandas", icon: CodeIcon, category: "Language Libraries & Toolkits"},
  {title: "seaborn / matplotlib", icon: CodeIcon, category: "Language Libraries & Toolkits"},
  {title: "numPy", icon: CodeIcon, category: "Language Libraries & Toolkits"},
  {title: "SciKit Learn", icon: CodeIcon, category: "Language Libraries & Toolkits"},

  {title: "Command Line", icon: TerminalIcon, category: "Languages"},
  {title: "Linear Algebra", icon: CalculatorIcon, category: "Concepts"},
  {title: "Statistics", icon: CalculatorIcon, category: "Concepts"},
  {title: "Data Algorithms", icon: CalculatorIcon, category: "Concepts"}



];
