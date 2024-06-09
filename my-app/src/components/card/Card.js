
export default function Card(props){
    const {
        titleFontWeight = "bold", 
        titleFontSize = "lg", 
        titleAlign = "center",
        borderColorTw = "card-border",
        borderRadiusTw = "md",
        borderColor,
    } = props;


    let card = `
        rounded-xl
        border-4
        border-solid
        border-${borderColor?"[" + borderColor + "]":borderColorTw}
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
    `;

    return(
        <>
            <div className={card + props.className}>
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
