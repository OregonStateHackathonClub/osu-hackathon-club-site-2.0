import React from 'react';
import { Carousel, Container } from 'react-bootstrap';
import winter2022squarelogo from "../images/winter2022squarelogo.png";
import fall2021squarelogo from "../images/fall2021squarelogo.png";
import summer2021squarelogo from "../images/summer2021squarelogo.png";


function ArchiveCarousel ( {pastHackathons} ) {

    return (
        <Container>
           <Carousel variant="dark" interval={null}>
              <Carousel.Item className='carousel-item'>
                <h1>winter 2022 hackathon</h1>

                  <img
                  className="carousel-images"
                  src={winter2022squarelogo}
                  alt="winter 2022 hackathon"
                />

                <div className="infobody">
                  <h2 className='carousel-section-header'>theme</h2><p className='past_themes'>Data</p>
                </div>


              <div className="infobody">

              <h2 className='carousel-section-header'>winning projects:</h2>
              
              <h3 className='place-title'>Overall 1st Place</h3>
              <a href="https://devpost.com/software/spotify-cartography" target="_blank" rel="noreferrer noopener" className='winner-name'>Spotify Cartography</a>

              <h3 className='place-title'>Overall 2nd Place</h3>
              <a href="https://devpost.com/software/hophub" target="_blank" rel="noreferrer noopener" className='winner-name'>Hop Hub</a>

              <h3 className='place-title'>Overall 3rd Place</h3>
              <a href="https://devpost.com/software/earthquake-predicteur" target="_blank" rel="noreferrer noopener" className='winner-name'>Earthquake Predicteur</a>

              <h3 className='place-title'>New Student</h3>
              <a href="https://devpost.com/software/shopping-list-generator" target="_blank" rel="noreferrer noopener" className='winner-name'>Shopping List Generator</a>
              
              
              </div>



              </Carousel.Item>
              <Carousel.Item>
                <h1>fall 2021 hackathon</h1>
                  <img
                  className="carousel-images"
                  src={fall2021squarelogo}
                  alt="fall 2021 hackathon"
                />

                <div className="infobody">
                  <h2 className='carousel-section-header'>theme</h2><p className='past_themes'>Energy/Climate</p>
                </div>
                  


              <div className="infobody">

                <h2 className='carousel-section-header'>winning projects:</h2>

                <h3 className='place-title'>Overall 1st Place (Tie)</h3>
                <a href="https://devpost.com/software/green-alerts" target="_blank" rel="noreferrer noopener" className='winner-name'>Green Alerts</a>

                <h3 className='place-title'>Overall 1st Place (Tie)</h3>
                <a href="https://devpost.com/software/spotify-cartography" target="_blank" rel="noreferrer noopener" className='winner-name'v>Spotify Cartography</a>

                <h3 className='place-title'>Overall 2nd Place</h3>
                <a href="https://devpost.com/software/drought-monitor" target="_blank" rel="noreferrer noopener" className='winner-name'>Drought Monitor</a>

                <h3 className='place-title'>Overall 3rd Place</h3>
                <a href="https://devpost.com/software/nature-s-smart-grid" target="_blank" rel="noreferrer noopener" className='winner-name'>Nature's Smart Grid</a>

                <h3 className='place-title'>New Student</h3>
                <a href="https://devpost.com/software/pollutant-data-visualizer" target="_blank" rel="noreferrer noopener" className='winner-name'>Pollutant Data Visualizer</a>
              
              </div>

              </Carousel.Item>
              <Carousel.Item>
              <h1>summer 2021 hackathon</h1>
                <img
                  className="carousel-images"
                  src={summer2021squarelogo}
                  alt="summer 2021 hackathon"
                />

              <div className="infobody">
                <h2 className='carousel-section-header'>theme</h2><p className='past_themes'>Gaming</p>
              </div> 
 
              <div className="infobody">

                <h2 className='carousel-section-header'>winning projects:</h2>
                <h3 className='place-title'>Overall 1st Place (Tie)</h3>
                <a href="https://devpost.com/software/frodo-s-nine-lives" target="_blank" rel="noreferrer noopener" className='winner-name'>Frodo's Nine Lives</a>

                <h3 className='place-title'>Overall 2nd Place (Tie)</h3>
                <a href="https://devpost.com/software/twitter-fingers" target="_blank" rel="noreferrer noopener" className='winner-name'>Twitter Fingers</a>

                <h3 className='place-title'>Overall 2nd Place (Tie)</h3>
                <a href="https://devpost.com/software/damwood" target="_blank" rel="noreferrer noopener" className='winner-name'>Dam Wood</a>

                <h3 className='place-title'>Overall 3rd Place</h3>
                <a href="https://devpost.com/software/someday-my-cat-will-surely-eat-me" target="_blank" rel="noreferrer noopener" className='winner-name'>Someday My Cat Will Surely Eat Me</a>

                <h3 className='place-title'>New Student</h3>
                <a href="https://devpost.com/software/sound-maze-79tonz" target="_blank" rel="noreferrer noopener" className='winner-name'>Sound Maze</a>
              
                <h3 className='place-title'>Grad Student/Alumni</h3>
                <a href="https://devpost.com/software/let-ava-game" target="_blank" rel="noreferrer noopener" className='winner-name'>Let Ava Game!</a>
              
              </div> 

              </Carousel.Item>
            </Carousel>

        </Container>

    );


}


export default ArchiveCarousel;