import React from 'react';
import NavigationBar from '../components/navbar';
import Footer from '../components/footer';
import ArchiveCarousel from "../components/archivecarousel";



const ArchivePage = ( {pastHackathons} ) => {
    return (
        <>
            <NavigationBar/>
            <h1 className="pagetitle">archive</h1>
            <div className="pagebody">

            <ArchiveCarousel pastHackathons={pastHackathons}/>
            </div>
            <Footer/>
        </>
    );
}



export default ArchivePage