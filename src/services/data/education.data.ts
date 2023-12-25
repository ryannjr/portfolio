import { Course } from "../interfaces/course";

export const SCHOOL: string = "University of Toronto";
export const DEGREE: string = "Honours Bachelors of Science (HBSc)";
export const PROGRAM: string = "Specialist in Statistics (Data Science and Machine Learning)";
export const LENGTH: string = "2020-2025";

export const COURSES: Course[] = [
    { 
        code: "CSCD01",
        name: "Engineering Large Software Systems",
        description: "Practice of large-scale software system design and deployment.",
        keyConcepts: ["Open Source", "Diagraming", "Modeling", "Architecture & Styles", "Documenting Systems"]
    },
    { 
        code: "CSCC01",
        name: "Intro to Software Engineering",
        description: "Practice of enterprise level software development methodologies.",
        keyConcepts: ["SDLC", "Agile", "Design Patterns", "Full-Stack Development"]
    },
    { 
        code: "CSCC43",
        name: "Intro to Databases",
        description: "Working with Databases and DBMS",
        keyConcepts: ["Relational Algebra", "SQL (DML)", "SQL (DDL)", "Embedded SQL (JDBC)", "ER Modelling", "Normalization"]
    },
    { 
        code: "CSCC11",
        name: "Intro to Data Mining and Machine Learning",
        description: "An introduction to methods for automated learning of relationships on the basis of empirical data.",
        keyConcepts: ["Regression", "Classification", "Clustering", "Support Vector Machines", "Principal Component Analysis", "Neural Networks",
                        "Deep Learning"]
    },
    { 
        code: "CSCB07",
        name: "Intro to Software Design",
        description: "Intro to software design and development concepts, methods and tools using Java",
        keyConcepts: ["Version Control", "Testing", "Object-Oriented Programming", "Design Pattern", "Android Development"]
    },
];


