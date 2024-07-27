import { 
    myemail, 
    emailLink, 
    githubLink,
    instagramLink,
    linkedInLink,
} from "../util/constants";
import { Instagram } from "@styled-icons/boxicons-logos/Instagram";
import { Linkedin } from "@styled-icons/boxicons-logos/Linkedin";
import { Github } from "@styled-icons/boxicons-logos/Github";
export default function Footer(props){

    let containerTw = `
        bg-footerbg-color
        px-11
        py-11
        w-screen
        flex
        flex-col
    `;

    let contactCta = `
        w-full
    `;

    let ctaTextTw = `
        text-footertext-color
        font-semibold

        text-base
        sm:text-lg
        md:text-xl
    `;

    let emailTw = `
        w-full
        mt-1.5
        mb-3
    `;

    let emailTextTw = `
        text-footertext-color
        font-extrabold

        text-xl
        sm:text-2xl
        md:text-3xl

        hover:text-footertext-hover-color
        transition-all
        ease-in-out
        duration-300
    `;

    let logoDivTw = `
        w-full
    `;

    let iconTw = `
        size-6
        sm:size-7

        text-footertext-color
        hover:text-footertext-hover-color
        transition-all
        ease-in-out
        duration-300

        mr-5
    `;


    return(
        <>

            <div
                id="contactMeSection"
                className={
                    containerTw
                }
            >
                <div
                    className={
                        contactCta
                    }
                >
                    <span className={ctaTextTw}>Get in touch with me!</span>
                </div>

                <div 
                    className={
                        emailTw
                    }
                >
                    <a className={emailTextTw} href={emailLink}>{myemail}</a>
                </div>

                <div
                    className={
                        logoDivTw
                    }
                >
                    <a href={githubLink} target="_blank" rel="noreferrer">
                        <Github className={iconTw} />
                    </a>
                    <a href={instagramLink} target="_blank" rel="noreferrer">
                        <Instagram className={iconTw} />
                    </a>
                    <a href={linkedInLink} target="_blank" rel="noreferrer">
                        <Linkedin className={iconTw} />
                    </a>
                </div>
            </div>

        </>
    );
}

