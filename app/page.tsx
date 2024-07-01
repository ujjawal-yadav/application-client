'use client'
import React, {FC,useState} from "react";
import Heading from "./utils/Heading";
import Header from "./component/Header";
import HeroSection from "./component/HeroSection";
import Description from "./component/Description";
import Role from "./component/Role"
import Determination from "./component/Determination";
import Footer from "./component/Footer";

interface Props{}

const Page: FC<Props> = (props) => {
    const[open, setOpen]=useState(false);
    const[activeItem,setActiveItem]=useState(0);
    return(
        <div>
            <Heading 
            title="Application"
            description="Hey this is my application for ArmorCode"
            keywords="Application, ArmorCode"
            />
            <Header
            open={open}
            setOpen={setOpen}
            activeItem={activeItem}/>
            <HeroSection/>
            <Description/>
            <Role/>
            <Determination/>
            <Footer/>

        </div>



    )
};

export default Page;