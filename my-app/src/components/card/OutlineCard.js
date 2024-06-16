export default function OutlineCard(props){
    const {
        titleFontWeight = "bold", 
        titleFontSize = "lg", 
        titleAlign = "center",
        // borderColorTw = "card-border",
        // borderRadiusTw = "md",
        // bgColor = "",
        // borderColor,
    } = props;

    let card = `
        rounded-xl
        border-4
        border-solid
        border-card-border
        bg-outlineCard-bg
        py-5
        px-4
    `;

    let titleDiv = `
        mb-7
    `;

    let title = `
        block
        w-full
        font-${titleFontWeight}
        text-${titleFontSize}
        text-${titleAlign}
        text-home-skills-title
    `;



    return(
        <>
            <div className={
                card +
                props.className
                }>
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
        </>
    );

}
