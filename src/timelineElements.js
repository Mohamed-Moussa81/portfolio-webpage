import Transcript from "./resources/Transcript.pdf";
let timelineElements = [
  {
    id: 1,
    title: "Rutgers University School of Arts and Sciences",
    location: "Bachelors of Science Computer Science & Applied Physics",
    description:
      "Earned a degree in Computer Science in completing relevant coursework in algorithm design, computer architecture, systems programming, database management systems, object oriented programming, and Software Engineering. My applied physics major focuses on Computer Engineering & Electrical Engineering electives with courses related to basic circuit building and troubleshooting along with Computer Based Expermentation.",
    date: "September 2017 - August 2021",
    icon: "school",
    buttonURL: Transcript,
    buttonText: " View Transcript",
    URL: "https://sas.rutgers.edu/",
  },
  {
    id: 2,
    title: "Rutgers University Computer Science",
    location: "Part Time Lecturer",
    description:
      "Facilitated weekly recitation of 50+ students in a collaborative learning environment to solve and explain challenging data structures problems and concepts in Java." +
      " Organized optional review sessions for students to reinforce course material in prepartion for exams. Conducted weekly office hours with  5+ students to answer questions regarding coursework and material. ",
    date: "Jan 2019 - May 2021",
    icon: "work",
    URL: "https://www.cs.rutgers.edu/",
  },
  {
    id: 3,
    title: "Rutgers University Electrical & Computer Engineering",
    location: "Learning Assistant",
    description:
      "Educated students on building circuits involving transistors,logic gates, diodes, along with other computer hardware components. Troubleshot simple circuits" +
      " using breadboards and identified defective electric components. Conducted study groups to facilitate small group discussions, encourage collaborative learning, and challenge" +
      " students to discover new problem-solving techniques for circuit building.",
    date: "Sept. 2019- May 2020",
    icon: "work",
    URL: "https://www.ece.rutgers.edu/",
  },
  {
    id: 4,
    title: "Rutgers Department of Chemistry and Chemical Biology",
    location: "Data Science Resarch Assistant",
    description:
      "Developed a command line interface tool in Python to store and update NMR results of specific compounds which were then used to calculate Linear Regression and plot in Origin." +
      " Discovered a cheaper solution to synthesizing LED screens, by researching Amide structural components using NMR spectroscopy, the solution provided a 3% cost reduction while maintaining over 85% purity." +
      " Processed percent yield for each Oranic synthesis reaction using Python by quering data from MySQL database.",
    date: "May 2019 - Sept. 2019",
    icon: "work",
    buttonURL: "https://pubs.acs.org/doi/abs/10.1021/acs.joc.9b02013",
    buttonText: " View Publication",
    URL: "https://chem.rutgers.edu/",
  },
  {
    id: 5,
    title: "Rutgers Department of Chemistry and Chemical Biology",
    location: "Research Assistant",
    description:
      "Researched the specific structures of biological macromolecules using X-ray diffraction and alternative methods of developing metallic crystals with higher purity." +
      " Leveraged Flask based server to store procedures that successfully produced 75% pure metallic crystals." +
      " Utilized Carbon and Proton NMR to observe irregularities in crystals, developed solutions with groups of 4 Research Assistants." +
      " Published Weekly Reports on increase in compound concentration in Purified crystals.",
    date: "Sept. 2018 - May 2019",
    icon: "work",
    URL: "https://chem.rutgers.edu/",
  },
  {
    id: 6,
    title: "Rutgers University Career Services",
    location: "FIGS Peer Instructor",
    description: "Developed a 10-week lesson plan on topics related to Cryptocurrency,Physics,Problem-Solving,Chemistry, and engineering to introduce students on topics in engineering and faciliate their transition to Rutgers University." +
      " Mentored 10 students in their transition as first-year students at Rutgers University by providing them with on-campus resources. ",
    date: " May 2018 - Dec. 2018",
    icon: "work",
    URL: "https://careers.rutgers.edu/",
  },
];

export default timelineElements;
