import { Project } from "../interfaces/project"

export const PROJECTS: Project[] = [
    {
        name: "GainzHub",
        description: "Fitness, and content creation mobile platform consisting of nutrition tracking" + 
        "workout creation, progress tracking, and social media features similar to Instagram.",
        github_link: "https://github.com/ryannjr/GainzHub",
        tech: ['React Native', 'Express', 'Node', 'MongoDB', 'AWS S3']
    },
    {
        name: "CarRental App",
        description: "Car Rental App is a web application that allows users to rent cars, view car details, and manage car inventory.",
        github_link: "https://github.com/ryannjr/CarRental",
        tech: ['React', 'TypeScript', 'ASP.NET', 'Microsoft SQL Server', 'Stripe']
    },
    {
        name: "Zoomer (Uber)",
        description: "Backend application which utilizes microservices to manage location, trip-information and user-information data, similar to Uber.",
        github_link: "https://github.com/ryannjr/CarRental",
        tech: ['Java', 'Microservices', 'PostgreSQL', 'Neo4j', 'MongoDB']
    },
    {
        name: "CSCB20 Website",
        description: "Full-stack responsive course website which displays course information and authorization layers for students and teachers.",
        github_link: "https://github.com/ryannjr/CSCB20-Website",
        tech: ['HTML', 'CSS', 'JavaScript', 'Python (Flask)', 'SQLite']
    },
    {
        name: "Venew",
        description: "Android application which allows users to schedule sporting events at different venues, all managed by administrators.",
        github_link: "https://github.com/ryannjr/Venew",
        tech: ['Android Studio', 'Java', 'XML']
    },
    {
        name: "DesktopAnalyst",
        description: "Desktop application that evaluates a company's financial status (Profitability, Liquidity, Solvency).",
        github_link: "https://github.com/ryannjr/DesktopAnalyst",
        tech: ['Python']
    },
]