

export default function FeaturedProjects(props){


    let featTitleClass=`
        text-home-featured-title
    `;

    return(
        <>
            <div className="w-screen bg-home-featured-bgcolor">
                <span className={featTitleClass}>Featured</span>
            </div>
        </>
    );
}
