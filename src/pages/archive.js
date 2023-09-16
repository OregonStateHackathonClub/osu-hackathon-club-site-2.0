import React from 'react';
import NavigationBar from '../components/navbar';
import Footer from '../components/footer';
import ArchiveCarousel from "../components/archivecarousel";



const ArchivePage = ( {pastHackathons} ) => {
    return (
        <>
            <NavigationBar />
            <br />
            <h1 className="smallText">Archive</h1>
            <div className="pagebody">
                <ArchiveCarousel pastHackathons={pastHackathons} />
                <Footer />
            </div>
           
        </>
    );
}



export default ArchivePage