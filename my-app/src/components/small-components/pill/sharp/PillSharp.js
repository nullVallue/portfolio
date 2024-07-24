

export default function PillSharp(props){
    let container = `
        px-2
        py-1
        w-min
        h-min
        flex
        justify-center
        content-center
    `;

    let containerStyle = () => {
        let obj = {}

        if(props.bgColor){
            obj.backgroundColor = props.bgColor;
        }

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