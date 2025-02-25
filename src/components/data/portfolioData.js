/**
 * @typedef PortafolioData
 * @property {string} imgSrc Url de la imagen
 * @property {string} title Titulo de la tarjeta
 * @property {string[]} skills Array con tus habilidades ej: ['React', 'CSS', 'JavaScript']
 * @property {string} descripcion La descripcion de la tarjeta
 * @property {string} demoURL Url de una pagina de demostración
 * @property {string} repoURL Url del repositorio, ej: https://github.com/usuario/repo
 * @property {string} anim La animación que se ejecutará cuando se cargue la tarjeta, ej: fade-up, fade-right, fade-left, fade-down
 * @property {number} averageBrightness Cuanto brillo tendrá el color de fondo de la tarjeta, ej: 0.1
 */

/**
 * @type {PortafolioData[]}
 */
export const portafolioData = [
	{
		imgSrc: import.meta.env.BASE_URL + '/img/portfolio/card1.png',
		title: 'Portfolio en Astro',
		skills: ['Html','CSS', 'JavaScript', 'Astro','Tailwind'],
		descripcion:
			'Mi portafolio personal es un proyecto construido con Astro. Un versátil generador de sitios estáticos con el que quise practicar nuevos conocimientos',
		// demoURL: '',
		repoURL: 'https://github.com/PedroPinteno/CCVV',
		anim: 'fade-right',
	},
	{
		imgSrc: import.meta.env.BASE_URL + '/img/portfolio/card2.png',
		title: 'E-commerce',
		skills:  ['Html','CSS', 'JavaScript'],
		descripcion:
		'Proyecto de comercio electrónico desarrollado utilizando HTML, CSS y JavaScript puro. Este proyecto es una demostración de cómo se pueden crear interfaces de usuario atractivas y funcionales sin el uso de frameworks.',
		// demoURL: '',
		repoURL: 'https://github.com/PedroPinteno/EcommerceVanilla',
		anim: 'fade-up',
		averageBrightness: 0.1,
	},
	{
		imgSrc: import.meta.env.BASE_URL + '/img/portfolio/card3.png',
		title: 'BBDD gestión restaurantes',
		skills: ['mysql'],
		descripcion:
			'Base de datos MySQL diseñada para gestionar restaurantes, mesas, clientes y sus reservas. El sistema permite manejar múltiples locales, gestionar mesas, clientes y sus restaurantes favoritos.',
		// demoURL: '',
		repoURL: 'https://github.com/PedroPinteno/BBDD_Mysql-main',
		anim: 'fade-left',
	},
	{
		imgSrc: import.meta.env.BASE_URL + '/img/portfolio/card4.png',
		title: 'Carrito para tienda virtual',
		skills: ['Html', 'CSS','JavaScript', 'Bootstrap'],
		descripcion:
			'Un carrito de compras moderno y responsive desarrollado con JavaScript Vanilla, con animaciones fluidas y una experiencia de usuario mejorada.',
		demoURL: '',
		repoURL: '',
		anim: 'fade-left',
	},
	{
		imgSrc: import.meta.env.BASE_URL + '/img/portfolio/card3.png',
		title: 'Restaurant Management',
		skills: ['nodejs','React', 'Redux','Mongo'],
		descripcion:
			'Sistema de gestión de restaurantes full-stack desarrollado con tecnologías modernas de React. Este proyecto demuestra la implementación de una aplicación web empresarial completa, utilizando las mejores prácticas y patrones de diseño actuales.',
		// demoURL: '',
		repoURL: 'https://github.com/PedroPinteno/Restaurant-Management-System',
		anim: 'fade-left',
	},
	{
		imgSrc: import.meta.env.BASE_URL + '/img/portfolio/card6.png',
		title: 'Comandas para Restaurant',
		skills: ['Dart', 'Flutter','Firebase'],
		descripcion:
			'App para móviles de gestión de las comandas de un restaurant. Hecho con Flutter y Firebase',
		// demoURL: '',
		repoURL: 'https://github.com/PedroPinteno/Comandas-Flutter-Firebase',
		anim: 'fade-right',
	}
];

const skillIcons = {
	Html:'skill-icons:html',
	JavaScript: 'skill-icons:javascript',
	React: 'skill-icons:react-dark',
	Astro: 'skill-icons:astro',
	CSS: 'skill-icons:css',
	Sass: 'skill-icons:sass',
	nodejs: 'skill-icons:nodejs-dark',
	Bootstrap: 'skill-icons:bootstrap',
	Tailwind: 'skill-icons:tailwindcss-dark',
	mysql: 'skill-icons:mysql-dark',
	Dart: 'skill-icons:dart-dark',
	Flutter: 'skill-icons:flutter-dark',
	Firebase: import.meta.env.BASE_URL + '/img/portfolio/Firebase-Dark.png',
	Redux:'skill-icons:redux',
	Mongo:'skill-icons:mongodb'
};

/**
 * @description Se mapea el portafolioData para que tenga los iconos de las habilidades
 * 	Puedes ver Array.map en https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
 */
export const getPortafolioData = portafolioData.map((item) => {
	return {
		// Se coloca todo el contenido previo del item
		...item,
		// Se cambian las skills por los iconos correspondientes
		skills: item.skills.map((skill) => skillIcons[skill]),
	};
});
