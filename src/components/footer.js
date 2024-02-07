import React from 'react';
import EmailIcon from "../images/email_icon.png";
import DiscordIcon from "../images/discord_icon.png";
import YoutubeIcon from "../images/youtube_icon.png";
import InstagramIcon from "../images/instagram_icon.png";
import RedditIcon from "../images/reddit_icon.png";
import LinkedInIcon from "../images/linkedin_icon.png";

function Footer() {

    return (
        <footer> 
            <a href="mailto:oregonstatehackathonclub@gmail.com" target="_blank" rel="noreferrer noopener"><img src={EmailIcon} alt="OSU Hackathon Club Email" className="footer_icons"></img></a>
            <a href="https://discord.gg/FYrjJ7zHGS" target="_blank" rel="noreferrer noopener"><img src={DiscordIcon} alt="Discord Icon" className="footer_icons"></img></a>
            <a href="https://www.youtube.com/channel/UCoMBBQmEvPmzKeUjA-z8DGQ" target="_blank" rel="noreferrer noopener"><img src={YoutubeIcon} alt="Youtube Icon" className="footer_icons"></img></a>
            <a href="https://www.instagram.com/hackathonatoregonstate/" target="_blank" rel="noreferrer noopener"><img src={InstagramIcon} alt="Reddit Icon" className="footer_icons"></img></a>
            <a href="https://www.reddit.com/user/OSUHackathonClub/" target="_blank" rel="noreferrer noopener"><img src={RedditIcon} alt="Reddit Icon" className="footer_icons"></img></a>
            <a href="https://www.linkedin.com/company/oregon-state-hackathon-club/" target="_blank" rel="noreferrer noopener"><img src={LinkedInIcon} alt="LinkedIn Icon" className="footer_icons"></img></a>

            <p id="footer_text_club">Oregon State University Hackathon Club</p>
        </footer>
    );

} 



export default Footer;
