import { Key } from "lucide-react";
import { IoLogoJavascript } from "react-icons/io";

export const translations = {
  es: {
    nav: {
      about: "Sobre mí",
      projects: "Proyectos",
      skills: "Habilidades",
      contact: "Contacto",
    },
    about: {
      title: "Hola, soy Monse Salas",
      text1:
        "Desarrolladora frontend con más de 5 años de experiencia creando aplicaciones web modernas, responsivas y centradas en el usuario.",
      text2:
        "Trabajo con tecnologías como React, JavaScript, Tailwind y Bootstrap, además de plataformas como Salesforce Commerce Cloud y Builder.",
      text3:
        "Me adapto fácilmente a nuevos entornos, disfruto aprender nuevas herramientas y trabajar en equipos ágiles.",
    },
    contact: {
      title: "Contacto",
      subtitle:
        "Puedes contactarme si quieres colaborar, tienes un proyecto o simplemente quieres conectar.",
    },
    experience: {
      title: "Experiencia",
      jobs: [
        {
          company: "Keyrus México",
          date: "Sep 2022 - Actualidad",
          description:
            "Consultora digital enfocada en eCommerce, CRM, Datos y soluciones MarTech. Participación en múltiples proyectos empresariales.",
          projects: [
            {
              name: "Rotoplas",
              description: "Desarrollo y diseño usando Builder.io.",
              tools: ["JavaScript", "TypeScript", "Qwik", "Builder.io"],
            },
            {
              name: "Coflex",
              description:
                "Integración de Google Tag Manager y Analytics, validación de pasarela de pago.",
              tools: ["React", "Tailwind", "TypeScript", "GTM"],
            },
            {
              name: "MPS",
              description:
                "Desarrollo de plataformas B2C, B2B y administrativas.",
              tools: ["Medusa.js", "React", "Tailwind"],
            },
            {
              name: "Reebok",
              description:
                "Mantenimiento y mejoras según requerimientos del negocio.",
              tools: ["Salesforce", "SCSS", "JavaScript"],
            },
            {
              name: "CYA",
              description:
                "Mantenimiento y mejoras según requerimientos del negocio.",
              tools: ["Salesforce", "SCSS", "JavaScript"],
            },
          ],
        },
        {
          title: "Galapago Agroconsultores",
          company: "Galapago Agroconsultores",
          date: "Julio 2020 - Junio 2021",
          image: "/assets/galapp.png",
          description:
            "Desarrollo de nuevas funcionalidades para la aplicación web, incluyendo pruebas automatizadas. Análisis de datos para mejorar procesos de clientes y soporte personalizado.",
          tools: [
            "React",
            "Material UI",
            "Sass",
            "SQL",
            "Firebase",
            "Cypress",
          ],
        },
      ],
    },
    skills: {
      title: "Habilidades",
      items: [
        {
          title: "Lenguajes de programación",
          key: "languages",
          items: ["JavaScript", "HTML5 & CSS3", "SASS / SCSS"],
        },
        {
          title: "Librerías",
          key: "libraries",
          items: ["React.js", "Medusa.js", "Tailwind CSS", "Frontastic"],
        },
        {
          title: "E-commerce & CMS",
          key: "ecommerce",
          items: ["Salesforce Commerce Cloud", "Builder.io"],
        },
        {
          title: "Marketing & Analítica",
          key: "marketing",
          items: ["Google Tag Manager", "Google Analytics"],
        },
        {
          title: "Flujo de trabajo y herramientas",
          key: "tools",
          items: [
            "Git",
            "GitHub",
            "GitLab",
            "QA Testing",
            "Agile Methodologies",
            "UI/UX Design (Figma)",
          ],
        },
      ]
    }
  },
  en: {
    nav: {
      about: "About",
      projects: "Projects",
      skills: "Skills",
      contact: "Contact",
    },
    about: {
      title: "Hello, I'm Monse Salas",
      text1:
        "Frontend developer with 5+ years of experience building modern, responsive, and user-focused web applications.",
      text2:
        "I work with technologies like React, JavaScript, Tailwind, and Bootstrap, as well as platforms like Salesforce Commerce Cloud and Builder.",
      text3:
        "I adapt quickly to new environments, enjoy learning new tools, and thrive in agile teams.",
    },
    contact: {
      title: "Contact",
      subtitle:
        "Feel free to reach out if you want to collaborate, have a project in mind, or just want to connect.",
    },
    experience: {
      title: "Experience",
      jobs: [
        {
          title: "Keyrus Mexico",
          company: "Keyrus Mexico",
          date: "Sep 2022 - Present",
          description:
            "Digital consulting company focused on eCommerce, CRM, Data, and MarTech solutions. Worked on multiple enterprise-level projects.",
          projects: [
            {
              name: "Rotoplas",
              description: "Development and design using Builder.io.",
              tools: ["JavaScript", "TypeScript", "Qwik", "Builder.io"],
            },
            {
              name: "Coflex",
              description:
                "Integration of Google Tag Manager and Analytics, payment gateway validation.",
              tools: ["React", "Tailwind", "TypeScript", "GTM"],
            },
            {
              name: "MPS",
              description:
                "Development of B2C, B2B and admin platforms.",
              tools: ["Medusa.js", "React", "Tailwind"],
            },
            {
              name: "Reebok",
              description:
                "Maintenance and improvements based on business requirements.",
              tools: ["Salesforce", "SCSS", "JavaScript"],
            },
            {
              name: "CYA",
              description:
                "Maintenance and improvements based on business requirements.",
              tools: ["Salesforce", "SCSS", "JavaScript"],
            },
          ],
        },
        {
          title: "Galapago Agroconsultores",
          company: "Galapago Agroconsultores",
          date: "July 2020 - June 2021",
          image: "/assets/galapp.png",
          description:
            "Development of new features for the web application, including automated testing. Data analysis to improve customer processes and personalized support for clients.",
          tools: [
            "React",
            "Material UI",
            "Sass",
            "SQL",
            "Firebase",
            "Cypress",
          ],
        }
      ],
    },
    skills: {
      title: "Skills",
      items: [
        {
          title: "Languages",
           key: "languages",
          items: ["JavaScript", "HTML5 & CSS3", "SASS / SCSS"],
        },
        {
          title: "Frameworks",
           key: "libraries",
          items: ["React.js", "Medusa.js", "Tailwind CSS", "Frontastic"],
        },
        {
          title: "E-commerce & CMS",
          key: "ecommerce",
          items: ["Salesforce Commerce Cloud", "Builder.io"],
        },
        {
          title: "Marketing & Analytics",
          key: "marketing",
          items: ["Google Tag Manager", "Google Analytics"],
        },
        {
          title: "Workflow & Tools",
          key: "tools",
          items: [
            "Git",
            "GitHub",
            "GitLab",
            "QA Testing",
            "Agile Methodologies",
            "UI/UX Design (Figma)",
          ],
        },
      ]
    }
  },
}