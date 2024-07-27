
/**------------------------------------------------------------------------
 *                           Personal Info
 *------------------------------------------------------------------------**/
export const myname = "Wei Jian";
export const myfullname = "Wei Jian Tan";
export const myposition = "Fullstack Developer";
export const myemail = "weijiant02@gmail.com";

// export const myname = "Placeholder Name";
// export const myfullname = "Placeholder Fullname";
// export const myposition = "Placeholder Pos";

/**------------------------------------------------------------------------
 *                           Navbar
 *------------------------------------------------------------------------**/
export const logoText = "weijian_";

/**------------------------------------------------------------------------
 *                           Links
 *------------------------------------------------------------------------**/
export const githubLink = "https://github.com/nullVallue";
export const linkedInLink = "https://www.linkedin.com/in/wei-jian-tan/";
export const emailLink = "mailto:weijiant02@gmail.com";
export const instagramLink = "https://www.instagram.com/wei_jiantan";

/**------------------------------------------------------------------------
 *                          About Me 
 *------------------------------------------------------------------------**/
export const aboutMeP =  `
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent cursus quam urna. Nulla eu mattis magna, a scelerisque purus. Nulla in leo fringilla, tempus metus tempus, commodo nibh. Curabitur at tortor eget metus feugiat dignissim. Sed vel nisl augue. Curabitur lacinia sed quam a suscipit. Aenean posuere nulla ac efficitur bibendum. In mattis non est vitae lobortis. In vehicula sed sapien non lacinia. 
`;

export const aboutMePic = require("../../assets/aboutMe/aboutMe1.JPG");

/**------------------------------------------------------------------------
 *                           Skills
 *------------------------------------------------------------------------**/

// front end
const reactLogo = require("../../assets/skillLogos/reactLogo.png");
const cssLogo = require("../../assets/skillLogos/cssLogo.png");
const flutterLogo = require("../../assets/skillLogos/flutterLogo.png");
const htmlLogo = require("../../assets/skillLogos/htmlLogo.png");
const tailwindLogo = require("../../assets/skillLogos/tailwindLogo.png");
const bootstrapLogo = require("../../assets/skillLogos/bootstrapLogo.png");

// back end
const dartLogo = require("../../assets/skillLogos/dartLogo.png");
const firebaseLogo = require("../../assets/skillLogos/firebaseLogo.png");
const javascriptLogo = require("../../assets/skillLogos/javascriptLogo.png");
const mongoLogo = require("../../assets/skillLogos/mongoLogo.png");
const nextjsLogo = require("../../assets/skillLogos/nextjsLogo.png");
const pythonLogo = require("../../assets/skillLogos/pythonLogo.png");

// others
const figmaLogo = require("../../assets/skillLogos/figmaLogo.png");
const gitLogo= require("../../assets/skillLogos/gitLogo.png");
const premiereLogo = require("../../assets/skillLogos/premiereLogo.png");

const flutter = {
    logo: flutterLogo,
    name: "Flutter", 
    mainColor: "#18BDFD",
    textColor: "#FFF"
};

const react = {
    logo: reactLogo,
    name: "React",
    mainColor: "#61DAFB",
    textColor: "#FFF"
};

const tailwind = {
    logo: tailwindLogo,
    name: "Tailwind", 
    mainColor: "#38BDF9",
    textColor: "#FFF"
};

const bootstrap = {
    logo: bootstrapLogo,
    name: "Bootstrap",
    mainColor: "#8711FC",
    textColor: "#FFF"
};

const html = {
    logo: htmlLogo,
    name: "HTML",
    mainColor: "#E35026",
    textColor: "#FFF"
};

const css = {
    logo: cssLogo,
    name: "CSS",
    mainColor: "#214CE5",
    textColor: "#FFF"
};

const javascript = {
    logo: javascriptLogo,
    name: "Javscript",
    mainColor: "#E9CA33",
    textColor: "#FFF"
};

const dart = {
    logo: dartLogo,
    name: "Dart",
    mainColor: "#235997",
    textColor: "#FFF"
};

const python = {
    logo: pythonLogo,
    name: "Python",
    mainColor: "#3670A0",
    textColor: "#FFF"
};

const nextjs = {
    logo: nextjsLogo,
    name: "NextJS",
    mainColor: "#000000",
    textColor: "#FFF"
};

const mongodb = {
    logo: mongoLogo,
    name: "MongoDB",
    mainColor: "#6DAC48",
    textColor: "#FFF"
};

const firebase = {
    logo: firebaseLogo,
    name: "Firebase",
    mainColor: "#F57F16",
    textColor: "#FFF"
};

const figma = {
    logo: figmaLogo,
    name: "Figma",
    mainColor: "#30323A",
    textColor: "#FFF"
};

const git = {
    logo: gitLogo,
    name: "Git",
    mainColor: "#F05033",
    textColor: "#FFF"
};

const premiere = {
    logo: premiereLogo,
    name: "Premiere",
    mainColor: "#2C073D",
    textColor: "#FFF"
};

export const frontEndLogos = [
    flutter,
    react,
    tailwind,
    bootstrap,
    html,
    css,
];

export const backEndLogos = [
    javascript,
    dart,
    python,
    nextjs,
    mongodb,
    firebase,
];

export const othersLogos = [
    figma,
    git,
    premiere
];

/**------------------------------------------------------------------------
 *                           Projects
 *------------------------------------------------------------------------**/


export const projectsArr = [
    {
        title: "Goods",
        description: "A modern inventory management system that utilises state of the art object recoginition technology",
        cardThumbnail: require("../../assets/projects/goods/goodsThumbnail.png"),
        projectLink: "https://github.com/nullVallue/GoodsInventoryManagement",
        skills: [
            flutter,
            python,
            firebase,
            figma
        ],
    },
    {
        title: "Python TicTacToe",
        description: "A simple TicTacToe CLI app I created to learn Python, Object Oriented Programming and Data Structures",
        cardThumbnail: require("../../assets/projects/pythonTicTacToe/pythonTicTacToe.png"),
        projectLink: "https://github.com/nullVallue/ticTacToe",
        skills: [
            python
        ],
    },
];