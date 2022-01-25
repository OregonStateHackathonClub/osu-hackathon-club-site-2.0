import React from 'react';
import NavigationBar from '../components/navbar';
import Footer from '../components/footer';
import ArchiveCarousel from "../components/archivecarousel";



const ArchivePage = ( {pastHackathons} ) => {
    return (
        <>
            <NavigationBar/>
            <div className="pagebody">
            <ArchiveCarousel pastHackathons={pastHackathons}/>
            </div>
            <Footer/>
        </>
    );
}



export default ArchivePage