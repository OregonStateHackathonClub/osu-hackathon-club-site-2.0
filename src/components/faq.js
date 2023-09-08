import React from 'react';
import Accordion from 'react-bootstrap/Accordion';

function Faq() {

    return (
        <>
            <div className="infobody">
                <h2>Frequently Asked Questions</h2>
                <Accordion>
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>What is a hackathon? 💻</Accordion.Header>
                        <Accordion.Body>
                            A hackathon is a competition in which participants build a software and/or hardware project in a fixed amount of time. Typically participants compete in small teams or individually.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                        <Accordion.Header>What is this hackathon all about? 🤔</Accordion.Header>
                        <Accordion.Body>
                            This hackathon exists to give you and other OSU students & alumni the opportunity to build a project over a weekend and compete for prizes. It is meant to be low-pressure, inclusive of everybody, and fun! In this hackathon, you are not required or encouraged to forego sleep, work, time with your family, or etc to participate. You are encouraged to make the best product you can in the time alotted. You are encouraged to learn and add skills to your repetoire. And you are encouraged to have a good time doing it!
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="2">
                        <Accordion.Header>How much does it cost? 💸</Accordion.Header>
                        <Accordion.Body>
                            It's totally free! Only things needed are your time, energy, and creativity!
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="3">
                        <Accordion.Header>Who can participate? 👾</Accordion.Header>
                        <Accordion.Body>
                            Any OSU student or alumni (this includes undergraduate, graduate, post-bacc, on-campus,
                            ecampus students)!
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="4">
                        <Accordion.Header> What can I make? 🤖</Accordion.Header>
                        <Accordion.Body>
                            Anything you can think of! Web apps, mobile apps, websites, slackbots, APIs,
                            command-line programs, games, robots, anything!
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="5">
                        <Accordion.Header>I am new to coding, should I still participate? ✅</Accordion.Header>
                        <Accordion.Body>
                            YES! No prior experience is necessary to compete in this event. In fact, there is a separate prize for teams of entirely new students to compete for.
                            This event is a great time to learn a new technology or practice one you already know
                            while simultaneously building a project you can showcase on your resume!
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="6">
                        <Accordion.Header>How many people can be on a team? 👤</Accordion.Header>
                        <Accordion.Body>
                            Teams can consist of up to 4 people!
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="7">
                        <Accordion.Header>How do we form teams? 🤝</Accordion.Header>
                        <Accordion.Body>
                            You can choose to form your own teams. You can also post under #teams on Slack/Discord if
                            you're looking for teammates or if you would like to find a team to join!
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            
        </div>
        </>
    );
}


export default Faq