import React from 'react';
import EmailIcon from "../images/email_icon.png";
import InstagramIcon from "../images/instagram_icon.png";
import DiscordIcon from "../images/discord_icon.png";
import SlackIcon from "../images/slack_icon.png";

function Footer() {

    return (
        <footer> 
            <a href="mailto:hackathonclub@oregonstate.edu" target="_blank" rel="noreferrer noopener"><img src={EmailIcon} alt="OSU Hackathon Club Email" className="footer_icons"></img></a>
            <a href="https://osu-hackathon.slack.com/" target="_blank" rel="noreferrer noopener"><img src={SlackIcon} alt="Slack Icon" className="footer_icons"></img></a>
            <a href="https://www.instagram.com/beaverhacks/" target="_blank" rel="noreferrer noopener"><img src={InstagramIcon} alt="Instagram Icon" className="footer_icons"></img></a>
            <a href="https://discord.gg/FYrjJ7zHGS" target="_blank" rel="noreferrer noopener"><img src={DiscordIcon} alt="Discord Icon" className="footer_icons"></img></a>

            <p id="footer_text_club">Oregon State University Hackathon Club</p>
        </footer>
    );

} 



export default Footer;