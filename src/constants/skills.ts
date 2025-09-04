import {
	SiNextdotjs,
	SiReact,
	SiNestjs,
	SiNodedotjs,
	SiExpress,
	SiExpo,
	SiJavascript,
	SiTypescript,
	SiPostgresql,
	SiMysql,
	SiOracle,
	SiGit,
	SiGithub,
	SiVuedotjs,
	SiHono,
	SiDocker,
	SiJest,
	SiCypress,
	SiOpenai,
  SiClaude
} from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { TbSql } from "react-icons/tb";


import type { IconType } from "react-icons";

interface Skill {
	icon: IconType;
	title: string;
	description: string;
}

export const SKILLS_DATA: Skill[] = [
	{
		icon: SiNextdotjs,
		title: "Next.js",
		description: "Framework de React para producción, especializado en server-side rendering y generación de sitios estáticos.",
	},
	{
		icon: SiReact,
		title: "React.js",
		description: "Biblioteca JavaScript para construir interfaces de usuario interactivas y componentes reutilizables.",
	},
	{
		icon: SiNestjs,
		title: "Nest.js",
		description: "Framework Node.js progresivo para construir aplicaciones del lado del servidor eficientes y escalables.",
	},
	{
		icon: SiNodedotjs,
		title: "Node.js",
		description: "Entorno de ejecución para JavaScript del lado del servidor, base para desarrollo backend moderno.",
	},
	{
		icon: SiExpress,
		title: "Express.js",
		description: "Framework web minimalista y flexible para Node.js, ideal para construir APIs y aplicaciones web.",
	},
	{
		icon: SiExpo,
		title: "Expo",
		description: "Plataforma para React Native que simplifica el desarrollo de aplicaciones móviles multiplataforma.",
	},
	{
		icon: SiReact,
		title: "React Native",
		description: "Framework para construir aplicaciones móviles nativas usando React y JavaScript.",
	},
	{
		icon: SiJavascript,
		title: "JavaScript",
		description: "Lenguaje de programación versátil para desarrollo web frontend y backend.",
	},
	{
		icon: SiTypescript,
		title: "TypeScript",
		description: "Superset tipado de JavaScript que mejora la calidad y mantenibilidad del código.",
	},
	{
		icon: FaJava,
		title: "Java",
		description: "Lenguaje de programación orientado a objetos para desarrollo de aplicaciones empresariales.",
	},
	{
		icon: SiPostgresql,
		title: "PostgreSQL",
		description: "Sistema de gestión de bases de datos relacional potente y de código abierto.",
	},
	{
		icon: SiMysql,
		title: "MySQL",
		description: "Sistema de gestión de bases de datos relacional popular y de código abierto.",
	},
	{
		icon: TbSql,
		title: "SQL Server",
		description: "Sistema de gestión de bases de datos relacional desarrollado por Microsoft.",
	},
	{
		icon: SiOracle,
		title: "Oracle",
		description: "Sistema de gestión de bases de datos relacional robusto y empresarial.",
	},
	{
		icon: SiGit,
		title: "Git",
		description: "Sistema de control de versiones distribuido para seguimiento de cambios en el código fuente.",
	},
	{
		icon: SiGithub,
		title: "GitHub",
		description: "Plataforma de desarrollo colaborativo para alojar y revisar código.",
	},
	{
		icon: SiVuedotjs,
		title: "Vue.js",
		description: "Framework progresivo para construir interfaces de usuario con un enfoque modular.",
	},
	{
		icon: SiHono,
		title: "Hono.js",
		description: "Framework web ultrarrápido para Edge Computing y desarrollo backend moderno.",
	},
	{
		icon: SiDocker,
		title: "Docker",
		description: "Plataforma de contenedorización para desarrollo, envío y ejecución de aplicaciones.",
	},
	{
		icon: SiJest,
		title: "Jest",
		description: "Framework de pruebas para JavaScript con enfoque en simplicidad y soporte para React.",
	},
	{
		icon: SiCypress,
		title: "Cypress",
		description: "Framework de pruebas end-to-end moderno para aplicaciones web.",
	},
	{
		icon: SiOpenai, 
		title: "GPT-4",
		description: "Modelo de lenguaje avanzado para procesamiento de lenguaje natural e integración en aplicaciones.",
	},
	{
		icon: SiClaude,
		title: "Claude 3 Sonnet",
		description: "Asistente de IA de última generación para tareas de procesamiento de lenguaje y desarrollo.",
	}
]; 