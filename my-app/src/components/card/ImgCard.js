
export default function ImgCard(props){
    const {
        titleFontWeight = "bold", 
        titleFontSize = "lg", 
        titleAlign = "left",
        // borderColorTw = "card-border",
        // borderRadiusTw = "md",
        // bgColor = "",
        // borderColor,
    } = props;

    let card = `
        rounded-t-2xl
        rounded-b-xl
        bg-imgcard-bg

        grid
        group

        transition-all
        ease-in-out
        duration-300
        ${
            props.pointer?"cursor-pointer":""
        }
        ${
            props.pointer?"hover:-translate-y-4":""
        }
    `;

    let titleDiv = `
        mb-1
    `;

    let title = `
        block
        w-full
        font-${titleFontWeight}
        text-${titleFontSize}
        text-${titleAlign}
        text-home-skills-title
    `;

    let imgClass=`
        rounded-t-xl
        object-cover
        h-full
        w-full
    `;


    let imgDiv = `
        rounded-t-xl
        h-[25vh]
        w-full
    `;

    let contentDiv=`
        py-5
        px-4
    `;

    let overlayDiv=`
        w-full
        h-full
        row-start-1
        col-start-1
        flex
        justify-center
        items-center

        rounded-xl
        group-hover:backdrop-blur-sm
        group-hover:bg-imgcard-overlay-bg/20

        transition-all
        ease-in-out
        duration-300
    `;

    let linkTextClass=`
        row-start-1
        col-start-1

        rounded-xl
        text-link-text/0
        group-hover:text-link-text
        drop-shadow-md
        font-bold
        text-xl
        text-center

        transition-all
        ease-in-out
        duration-300
    `;


    let overlayed=`
        row-start-1
        col-start-1
        w-full

    `;

    function onClick(){
        if(props.href){
            window.open(props.href, "_blank");
            // window.location.href=props.href;
        }
    }


    return(
        <>
            <div 
            onClick={onClick}
            className={
                card +
                props.className
            }>

                <div className={overlayed}>
                    {

                        props.src?
                        <div className={imgDiv}>
                            <img src={props.src} className={imgClass} alt={props.alt??""}/>
                        </div>
                        :<></>

                    }

                    <div className={contentDiv}>

                        {
                            props.title?
                            <div className={titleDiv}>
                                <span className={title}>{props.title}</span>
                            </div>:
                            <></>
                        }

                        {
                            props.children
                        }

                    </div>

                </div>

                <div className={overlayDiv}>
                    <span className={linkTextClass}>
                        {
                            props.linkText??""
                        }
                    </span>
                </div>

            </div>
        </>
    );

}
