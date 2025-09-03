import project1 from '../assets/images/ecommerce.png'
import project2 from '../assets/images/LandingPageMockup.png'
import project6 from '../assets/images/Weather_App_Mockup.png'
import project4 from '../assets/images/Task_Manager_Calendar_Mockup.png'
import project3 from '../assets/images/DashboardShadcnUIDarkGreen.png'
import project5 from '../assets/images/ComponentLibrary.png'


interface ProjectItem {
    title: string
    img: string
    description: string
    url: string
}

export const ProjectItems: ProjectItem[] = [
    {
        title: "E-Commerce Application",
        img: project1,
        description: "Next.js, TypeScript, TailwindCSS, Zustand, and Stripe",
        url: "https://github.com/aw-amanda/Ecommerce",
    },
    {
        title: "Commercial Landing Page",
        img: project2,
        description: "React, TypeScript, and Zustand",
        url: "https://github.com/aw-amanda/React_Landing_Page",
    },
    {
        title: "Admin Dashboard with Theming Capabilities",
        img: project3,
        description: "Next.js and Shadcn",
        url: "https://github.com/aw-amanda/Admin_Dashboard",
    },
    {
        title: "Task Manager Application",
        img: project4,
        description: "React, TypeScript, and Supabase",
        url: "https://github.com/aw-amanda/Task_Manager",
    },
    {
        title: "UI Component Library",
        img: project5,
        description: "React, TypeScript, CSS",
        url: "https://github.com/aw-amanda/component_library"
    },
    {
        title: "Pure Python Weather Application",
        img: project6,
        description: "Python, PyQt, and OpenWeather API",
        url: "https://github.com/aw-amanda/Python_Weather_App",
    },
]