

export default function PillSharpOutline(props){
    let container = `
        px-1
        py-0.5
        w-min
        h-min
        flex
        justify-center
        content-center
    `;

    let containerStyle = () => {
        let obj = {
            border: "solid medium"
        }

        if(props.borderColor) obj.borderColor = props.borderColor;

        return obj
    }

    let textStyle = () => {
        let obj = {}

        if(props.textColor){
            obj.color = props.textColor;
        }

        return obj
    }

    let text=`
        align-middle
        font-bold
        text-xs
        p-0
    `;


    return (
        <>
            <div 
                className={container} 
                style={containerStyle()}
            >
                <span
                    style={textStyle()}
                    className={text}
                >
                    {
                        props.children
                    }
                </span>
            </div>
        </>
    );
}