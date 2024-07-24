export default function ShadowCard(props){
    const {
        titleFontWeight = "bold", 
        titleFontSize = "lg", 
        titleAlign = "center",
        // borderColorTw = "card-border",
        // borderRadiusTw = "md",
        // bgColor = "",
        // borderColor,
    } = props;


    let titleDiv = `
        mb-7
    `;

    let title = `
        block
        w-full
        font-${titleFontWeight}
        text-${titleFontSize}
        text-${titleAlign}
        text-home-skills-categoryTitle
    `;

    // let cardGroup=`
    //     relative
    // `;

        // drop-shadow-md
    let card = `
        bg-shadow-card-bg
        border-8
        border-shadow-card-shadow-color
        py-5
        px-4
    `;

    // let cardShadow = `
    //     h-full
    //     w-full
    //     absolute
    //     bg-shadow-card-shadow-color
    //     top-7
    //     left-5
    // `;


    let shadowStyle = () => {
        let obj = {}

        if(props.offset){
            obj.boxShadow = `${props.offset}rem ${props.offset}rem black`;
        }
        else{
            obj.boxShadow = `1.5rem 1.5rem black`;
        }

        return obj
    }




    return(
        <>

            <div 
                className={
                card 
                + props.className
                }
                style={shadowStyle()}
            >
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


            {/* <div
                className={
                    cardGroup +
                    props.className
                }
            >
                <div className={cardShadow}>
                </div>

                <div 
                    className={
                    card 
                    }
                >
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



            </div> */}

        </>
    );

}
