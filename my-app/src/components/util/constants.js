
/**------------------------------------------------------------------------
 *                           Personal Info
 *------------------------------------------------------------------------**/
export const myname = "Wei Jian";
export const myfullname = "Wei Jian Tan";
export const myposition = "Fullstack Developer";

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



export const frontEndLogos = [
    {
        logo: flutterLogo,
        name: "Flutter"
    },
    {
        logo: reactLogo,
        name: "React"
    },
    {
        logo: tailwindLogo,
        name: "Tailwind"
    },
    {
        logo: bootstrapLogo,
        name: "Bootstrap"
    },
    {
        logo: htmlLogo,
        name: "HTML"
    },
    {
        logo: cssLogo,
        name: "CSS"
    },
];

export const backEndLogos = [
    {
        logo: javascriptLogo,
        name: "Javscript"
    },
    {
        logo: dartLogo,
        name: "Dart"
    },
    {
        logo: pythonLogo,
        name: "Python"
    },
    {
        logo: nextjsLogo,
        name: "NextJS"
    },
    {
        logo: mongoLogo,
        name: "MongoDB"
    },
    {
        logo: firebaseLogo,
        name: "Firebase"
    },
];

export const othersLogos = [
    {
        logo: figmaLogo,
        name: "Figma"
    },
    {
        logo: gitLogo,
        name: "Git"
    },
    {
        logo: premiereLogo,
        name: "Premiere"
    },
];