import { Link } from "react-router-dom"

export default function NavBarLink(props){
    let {children, to, className, onClick = (() => {}) } = props;

    return (
        <>
        <button onClick={()=>onClick()}>
        <Link to={to} className={className}>
            {children}
        </Link>
        </button>
        </>
    );
}