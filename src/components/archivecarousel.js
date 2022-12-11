import React from 'react';
import { Carousel } from 'react-bootstrap';
import winter2022squarelogo from "../images/winter2022squarelogo.png";
import fall2021squarelogo from "../images/fall2021squarelogo.png";
import summer2021squarelogo from "../images/summer2021squarelogo.png";
import fall2022posternew from "../images/fall2022posternew.png";

function ArchiveCarousel ( ) {

    return (
      <div className="infobody">
           <Carousel variant="dark" interval={2000}>
        <Carousel.Item className='carousel-item'>
                <h1 className='hackathon-title'>fall 2022 hackathon</h1>

                  <img
                  className="carousel-images"
                  src={fall2022posternew}
                  alt="fall 2022 hackathon"/>

                <div className='archive-section'>   
                  <h2 className='carousel-section-header'>theme:</h2><p className='past_themes'>Life Hackathon</p>
                </div>

                <div className='archive-section'> 
                  <h2 className='carousel-section-header'>winning projects:</h2>
                  
                  <h3 className='place-title'>Overall 1st Place</h3>
                  <a href="https://devpost.com/software/gobeavs" target="_blank" rel="noreferrer noopener" className='orange-body-text'>goBeavs</a>

                  <h3 className='place-title'>Overall 2nd Place</h3>
                  <a href="https://devpost.com/software/beaver-eats" target="_blank" rel="noreferrer noopener" className='orange-body-text'>journal.ai</a>

                  <h3 className='place-title'>Overall 3rd Place</h3>
                  <a href="https://devpost.com/software/ai-journal" target="_blank" rel="noreferrer noopener" className='orange-body-text'>Earthquake Predicteur</a>

                  <h3 className='place-title'>New Student</h3>
                  <a href="https://devpost.com/software/to-da-loo" target="_blank" rel="noreferrer noopener" className='orange-body-text'>To Da Loo</a>
                </div> 


              </Carousel.Item>
              <Carousel.Item>
                <h1 className='hackathon-title'>winter 2022 hackathon</h1>

                  <img
                  className="carousel-images"
                  src={winter2022squarelogo}
                  alt="winter 2022 hackathon"/>

                <div className='archive-section'>   
                  <h2 className='carousel-section-header'>theme:</h2><p className='past_themes'>Data</p>
                </div>

                <div className='archive-section'> 
                  <h2 className='carousel-section-header'>winning projects:</h2>
                  
                  <h3 className='place-title'>Overall 1st Place</h3>
                  <a href="https://devpost.com/software/spotify-cartography" target="_blank" rel="noreferrer noopener" className='orange-body-text'>Spotify Cartography</a>

                  <h3 className='place-title'>Overall 2nd Place</h3>
                  <a href="https://devpost.com/software/hophub" target="_blank" rel="noreferrer noopener" className='orange-body-text'>Hop Hub</a>

                  <h3 className='place-title'>Overall 3rd Place</h3>
                  <a href="https://devpost.com/software/earthquake-predicteur" target="_blank" rel="noreferrer noopener" className='orange-body-text'>Earthquake Predicteur</a>

                  <h3 className='place-title'>New Student</h3>
                  <a href="https://devpost.com/software/shopping-list-generator" target="_blank" rel="noreferrer noopener" className='orange-body-text'>Shopping List Generator</a>
                </div> 


              </Carousel.Item>
              <Carousel.Item>
                <h1 className='hackathon-title'>fall 2021 hackathon</h1>
                  <img
                  className="carousel-images"
                  src={fall2021squarelogo}
                  alt="fall 2021 hackathon"
                />

                <div className='archive-section'>   
                  <h2 className='carousel-section-header'>theme:</h2><p className='past_themes'>Energy/Climate</p>
                </div>  


                <div className="archive-section"> 
                  <h2 className='carousel-section-header'>winning projects:</h2>

                  <h3 className='place-title'>Overall 1st Place (Tie)</h3>
                  <a href="https://devpost.com/software/green-alerts" target="_blank" rel="noreferrer noopener" className='orange-body-text'>Green Alerts</a>

                  <h3 className='place-title'>Overall 1st Place (Tie)</h3>
                  <a href="https://devpost.com/software/spotify-cartography" target="_blank" rel="noreferrer noopener" className='orange-body-text'v>Spotify Cartography</a>

                  <h3 className='place-title'>Overall 2nd Place</h3>
                  <a href="https://devpost.com/software/drought-monitor" target="_blank" rel="noreferrer noopener" className='orange-body-text'>Drought Monitor</a>

                  <h3 className='place-title'>Overall 3rd Place</h3>
                  <a href="https://devpost.com/software/nature-s-smart-grid" target="_blank" rel="noreferrer noopener" className='orange-body-text'>Nature's Smart Grid</a>

                  <h3 className='place-title'>New Student</h3>
                  <a href="https://devpost.com/software/pollutant-data-visualizer" target="_blank" rel="noreferrer noopener" className='orange-body-text'>Pollutant Data Visualizer</a>
                </div>

              </Carousel.Item>
              <Carousel.Item>
                <h1 className='hackathon-title'>summer 2021 hackathon</h1>
                  <img
                    className="carousel-images"
                    src={summer2021squarelogo}
                    alt="summer 2021 hackathon"
                  />

                <div className='archive-section'> 
                  <h2 className='carousel-section-header'>theme:</h2><p className='past_themes'>Gaming</p>
                </div>


                <div className='archive-section'>   

                  <h2 className='carousel-section-header'>winning projects:</h2>
                  <h3 className='place-title'>Overall 1st Place (Tie)</h3>
                  <a href="https://devpost.com/software/frodo-s-nine-lives" target="_blank" rel="noreferrer noopener" className='orange-body-text'>Frodo's Nine Lives</a>

                  <h3 className='place-title'>Overall 2nd Place (Tie)</h3>
                  <a href="https://devpost.com/software/twitter-fingers" target="_blank" rel="noreferrer noopener" className='orange-body-text'>Twitter Fingers</a>

                  <h3 className='place-title'>Overall 2nd Place (Tie)</h3>
                  <a href="https://devpost.com/software/damwood" target="_blank" rel="noreferrer noopener" className='orange-body-text'>Dam Wood</a>

                  <h3 className='place-title'>Overall 3rd Place</h3>
                  <a href="https://devpost.com/software/someday-my-cat-will-surely-eat-me" target="_blank" rel="noreferrer noopener" className='orange-body-text'>Someday My Cat Will Surely Eat Me</a>

                  <h3 className='place-title'>New Student</h3>
                  <a href="https://devpost.com/software/sound-maze-79tonz" target="_blank" rel="noreferrer noopener" className='orange-body-text'>Sound Maze</a>
                
                  <h3 className='place-title'>Grad Student/Alumni</h3>
                  <a href="https://devpost.com/software/let-ava-game" target="_blank" rel="noreferrer noopener" className='orange-body-text'>Let Ava Game!</a>
                </div>

              </Carousel.Item>
              
            </Carousel>

        </div>

    );


}


export default ArchiveCarousel;
