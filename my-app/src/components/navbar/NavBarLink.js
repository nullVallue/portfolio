export default function NavBarLink(props){
    let {children, href, className} = props;

    return (
        <>
        <a href={href} className={className}>{children}</a>
        </>
    );
}