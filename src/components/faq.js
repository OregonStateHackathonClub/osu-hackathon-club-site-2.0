import React from 'react';
import Accordion from 'react-bootstrap/Accordion';

function Faq() {

    return (
        <>
            
                <h2>Frequently Asked Questions</h2>
            <div>
                <Accordion>
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>What is a hackathon? 💻</Accordion.Header>
                        <Accordion.Body>
                            <p>A hackathon is a competition in which participants build a software and/or hardware project in a fixed amount of time. Typically, participants compete in small teams or individually.</p>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                        <Accordion.Header>What is this hackathon all about? 🤔</Accordion.Header>
                        <Accordion.Body>
                            <p>This hackathon exists to give you and other OSU students & alumni the opportunity to build a project over a weekend and compete for prizes. It is meant to be low-pressure, inclusive of everybody, and fun! In this hackathon, you are not required or encouraged to forego sleep, work, time with your family, or etc to participate. You are encouraged to make the best product you can in the time alotted. You are encouraged to learn and add skills to your repetoire. And you are encouraged to have a good time doing it!</p>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="2">
                        <Accordion.Header>How much does it cost? 💸</Accordion.Header>
                        <Accordion.Body>
                            <p>It's totally free! Only things needed are your time, energy, and creativity!</p>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="3">
                        <Accordion.Header>Who can participate? 👾</Accordion.Header>
                        <Accordion.Body>
                            <p>Any OSU student or alumni can participate (this includes undergraduate, graduate, post-bacc, on-campus,
                                ecampus students)!</p>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="4">
                        <Accordion.Header> What can I make? 🤖</Accordion.Header>
                        <Accordion.Body>
                            <p>Anything you can think of! Web apps, mobile apps, websites, slackbots, APIs,
                                command-line programs, games, robots, anything!</p>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="5">
                        <Accordion.Header>I am new to coding, should I still participate? ✅</Accordion.Header>
                        <Accordion.Body>
                            <p>YES! No prior experience is necessary to compete in this event. In fact, there is a separate prize for teams of entirely new students to compete for.
                                This event is a great time to learn a new technology or practice one you already know
                                while simultaneously building a project you can showcase on your resume!</p>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="6">
                        <Accordion.Header>How many people can be on a team? 👤</Accordion.Header>
                        <Accordion.Body>
                            <p>Teams can consist of up to 4 people!</p>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="7">
                        <Accordion.Header>How do we form teams? 🤝</Accordion.Header>
                        <Accordion.Body>
                            {/* Update Devpost Link Each Hackathon */}
                            <p>You can choose to form your own teams. If
                            you're looking for teammates or if you would like to find a team to join you can use <button className="joinclubbuttons"><a href="https://beaverhacks-fall-2023.devpost.com/" target="_blank" rel="noreferrer noopener">DevPost</a></button> or our <button className="joinclubbuttons"><a href="https://discord.gg/YCr93jHg7f" target="_blank" rel="noreferrer noopener">Discord</a></button></p>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="8">
                        <Accordion.Header>When are these hackathons? 📅</Accordion.Header>
                        <Accordion.Body>
                            <p>We usually have one hackathon every academic term at OSU. (Fall, Winter, and Spring terms). But we occassionally have special hackathon events!</p>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="9">
                        <Accordion.Header>
                            Can I help judge or sponsor this hackathon? 💼
                        </Accordion.Header>
                        <Accordion.Body>
                            <p>
                                Yes! If you're interested in becoming a judge or a sponsor, please reach out at oregonstatehackathonclub@gmail.com.
                            </p>
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            
        </div>
        </>
    );
}


export default Faq