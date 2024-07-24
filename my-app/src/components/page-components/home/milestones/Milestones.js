import { useState } from "react";
import ShadowCard from "../../../card/ShadowCard";
import TimelineShadowCard from "../../../small-components/timelineCard/shadow/TimelineShadowCard";
import TimelineCard from "../../../small-components/timelineCard/TimelineCard";


export default function Milestones(){
    let container = `
        w-screen
        h-screen
        py-28
        bg-home-milestones-bgcolor
    `;

    let title = `
        block
        text-center
        text-home-milestones-title
        text-5xl
        font-black
        w-screen
    `;

    let leftSection= `
        sm:px-16
        px-5
        lg:w-1/2
        w-full
        h-full
        flex
        flex-col


        transition-all
        duration-200
    `;


    let rightSection = `
        sm:px-16
        px-5
        lg:w-1/2
        lg:mt-0
        mt-10
        w-full
        h-full

        transition-all
        duration-200
    `;

    let contentContainer = `
        mt-10
    `;


    return (
        <div id="milestonesSection" className={container}>
            <h2 className={title}>My Journey</h2>

            <div className={contentContainer}>


                <div className={leftSection}>
                    <TimelineShadowCard
                        offset={0.5}
                    >

                    </TimelineShadowCard>
                </div>

                <div className={rightSection}>

                </div>



            </div>
        </div>
    );
}