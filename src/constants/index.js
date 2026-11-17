const navLinks = [
    {
        name: "Trabajo",
        link: "#work",
    },
    {
        name: "Experiencia",
        link: "#work",
    },
    {
        name: "Habilidades",
        link: "#skills",
    },
    {
        name: "Sobre mí",
        link: "#testimonials",
    },
];

/*words tiene 8 elementos (4 repetidos). Esto no es descuido: recuerda que wordSlider en tu CSS usa pasos de 12.5 % (100 ÷ 8). Las palabras se repiten para que el bucle se vea continuo. Si cambias la cantidad, hay que recalcular los porcentajes del @keyframes.*/
const words = [
    { text: "Ideas", imgPath: "/images/ideas.svg" },
    { text: "Conceptos", imgPath: "/images/concepts.svg" },
    { text: "Diseños", imgPath: "/images/designs.svg" },
    { text: "Código", imgPath: "/images/code.svg" },
    { text: "Ideas", imgPath: "/images/ideas.svg" },
    { text: "Conceptos", imgPath: "/images/concepts.svg" },
    { text: "Diseños", imgPath: "/images/designs.svg" },
    { text: "Código", imgPath: "/images/code.svg" },
];


const counterItems = [
    { value: 23, suffix: " ", label: "edad" },
    { value: 3, suffix: "+", label: "Proyectos" },
    { value: 2, suffix: " ", label: "ICPC's" },
    { value: 100, suffix: "%", label: "Aprender" },
];

const logoIconsList = [
    {
        imgPath: "/images/logos/vscode.svg",
    },
    {
        imgPath: "/images/logos/linux.svg",
    },
    {
        imgPath: "/images/logos/webstorm.svg",
    },
    {
        imgPath: "/images/logos/github.svg",
    },
    {
        imgPath: "/images/logos/capcut.svg",
    },
    {
        imgPath: "/images/logos/intellij.svg",
    },
    {
        imgPath: "/images/logos/mysql.svg",
    },
];

const abilities = [
    {
        icon: "💬",
        title: "Comunicación",
        desc: "Explico mis ideas con claridad y escucho a los demás para entendernos desde el inicio.",
    },
    {
        icon: "🤝",
        title: "Trabajo en equipo",
        desc: "Colaboro, comparto lo que sé y aprendo de mis compañeros, como en SCRUM y en mis hackatones.",
    },
    {
        icon: "⚡",
        title: "Proactividad",
        desc: "No espero a que me indiquen todo: propongo soluciones y me anticipo a los problemas.",
    },
    {
        icon: "🧩",
        title: "Resolución de problemas",
        desc: "Analizo, divido el problema en partes y pruebo hasta resolverlo. La programación competitiva me entrenó en esto.",
    },
    {
        icon: "🌱",
        title: "Resiliencia",
        desc: "Los errores son parte del proceso: me adapto, aprendo y vuelvo a intentar.",
    },
];

const techStackImgs = [
    {
        name: "JavaScript",
        imgPath: "/images/logos/javascript.svg",
    },
    {
        name: "HTML",
        imgPath: "/images/logos/html5.svg",
    },
    {
        name: "CSS",
        imgPath: "/images/logos/css3.svg",
    },
    {
        name: "Java",
        imgPath: "/images/logos/java.svg",
    },
    {
        name: "Spring",
        imgPath: "/images/logos/spring.svg",
    },
    {
        name: "Git",
        imgPath: "/images/logos/git.svg",
    },
    {
        name: "C++",
        imgPath: "/images/logos/cpp.svg",
    },
];

const techStackIcons = [
    {
        name: "React Developer",
        modelPath: "/models/react_logo-transformed.glb",
        scale: 1,
        rotation: [0, 0, 0],
    },
    {
        name: "Python Developer",
        modelPath: "/models/python-transformed.glb",
        scale: 0.8,
        rotation: [0, 0, 0],
    },
    {
        name: "Backend Developer",
        modelPath: "/models/node-transformed.glb",
        scale: 5,
        rotation: [0, -Math.PI / 2, 0],
    },
    {
        name: "Interactive Developer",
        modelPath: "/models/three.js-transformed.glb",
        scale: 0.05,
        rotation: [0, 0, 0],
    },
    {
        name: "Project Manager",
        modelPath: "/models/git-svg-transformed.glb",
        scale: 0.05,
        rotation: [0, -Math.PI / 4, 0],
    },
];

const expCards = [
    {
        icon: "💬",
        title: "E-commerce AutoFlow",
        place: "Desarrollador Java Jr. Full Stack · Equipo de 6 personas",
        date: "Septiembre - Diciembre 2026",
        imgPath: "/images/projects/autoflow.png",
        review: "Plataforma web B2B que permite a pequeños negocios vender, cotizar y dar seguimiento a pedidos desde WhatsApp.",
        tech: "Java · Spring Boot · MySQL · JavaScript · Bootstrap",
        responsibilities: [
            "Trabajé en equipo con SCRUM, participando en la planeación de los sprints.",
            "Desarrollé funcionalidades del sistema con Java y JavaScript, además de HTML y CSS.",
            "Participé en revisiones de código y pruebas básicas para cuidar la calidad.",
        ],
    },
    {
        icon: "⚙️",
        title: "Implementación Back-End",
        place: "Desarrollador Back-End · Hackatón",
        date: "Noviembre 2026",
        imgPath: "/images/projects/backend.png",
        review: "Proximamente",//"Proyecto de hackatón donde construimos la parte del servidor con Java.",
        tech: "Java · Spring Boot · MySQL",
        responsibilities: [
            "Proximamente.",
            //"ESCRIBE AQUÍ un segundo logro o aprendizaje.",
        ],
    },
    {
        icon: "🏎️",
        title: "Landing page MERCH F1",
        place: "Desarrollador Front-End · Hackatón Generation México",
        date: "Octubre 2026",
        imgPath: "/images/projects/landing-page.png",
        review: "Landing page de una tienda de mercancía oficial de Fórmula 1, hecha en un hackatón de 6 horas.",
        tech: "HTML · CSS · Bootstrap 5 · JavaScript",
        responsibilities: [
            "Desarrollé la sección de beneficios y el catálogo de productos más vendidos.",
            "Trabajé en equipo con roles definidos y entregué en 6 horas.",
            "Cuidé un diseño responsivo con Bootstrap.",
        ],
        links: [
            { label: "Ver demo", url: "https://erickainfante16.github.io/Hackaton-Landing-Page-F1/" },
            { label: "Ver código", url: "https://github.com/erickainfante16/Hackaton-Landing-Page-F1" },
        ],
    },
];

const expLogos = [
    {
        name: "logo1",
        imgPath: "/images/logo1.png",
    },
    {
        name: "logo2",
        imgPath: "/images/logo2.png",
    },
    {
        name: "logo3",
        imgPath: "/images/logo3.png",
    },
];

const aboutCards = [
    {
        icon: "🎓",
        name: "Formación",
        mentions: "Universidad y bootcamp",
        review: "Estudié Ingeniería en Computación en la Universidad Autónoma de Zacatecas y me especialicé en Java Full Stack en el Bootcamp de Generation México.",
    },
    {
        icon: "🏆",
        name: "Programación competitiva",
        mentions: "ICPC 2024 y 2025",
        review: "Representé a mi universidad en el regional del ICPC dos años seguidos y llegué a las finales mexicanas con C++, algoritmos y estructuras de datos.",
    },
    {
        icon: "🌎",
        name: "Idiomas y ubicación",
        mentions: "Monterrey, N.L. México",
        review: "Tengo inglés nivel B2 y disponibilidad de reubicación para integrarme a un equipo donde pueda crecer.",
    },
    {
        icon: "😉",
        name: "Lo personal",
        mentions: "Lo que me motiva",
        review: "Me gusta resolver problemas, y por eso descubrí la programación. En mi tiempo libre edito videos, algo que me permite ser creativo. Ahora mismo sigo profundizando en el inglés, y aprendiendo Spring Boot, MySQL, React y Tailwind CSS para crecer como desarrollador Full Stack.",
    },
];

const socialImgs = [
    /*{
        name: "insta",
        imgPath: "/images/insta.png",
    },
    {
        name: "fb",
        imgPath: "/images/fb.png",
    },*/
    {
        name: "github",
        imgPath: "/images/logos/github.svg",
        url: "https://github.com/cowboy-developer",
    },
    {
        name: "linkedin",
        imgPath: "/images/linkedin.png",
        url: "https://linkedin.com/in/kevinaldaba",
    },
];



export {
    words,
    abilities,
    logoIconsList,
    counterItems,
    expCards,
    expLogos,
    aboutCards,
    socialImgs,
    techStackIcons,
    techStackImgs,
    navLinks,
};
