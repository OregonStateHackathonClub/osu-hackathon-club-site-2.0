import React from "react";

function CategoriesAndPrizes () {

    return ( 

        <> 
            <h1>categories</h1>
            <div className="infobody">
                
                <h2> overall category</h2>          
                    <p> 
                        All team members are undergrad OSU students
                    </p>
                    <br/> 

                <h2>new student category</h2> 
                    <p> 
                    All team members are undergrad OSU students AND have not taken any 300-level courses. 
                    Teams that are eligible for this prize are also eligible for the Overall prize.
                    </p> 
                    <br/> 

                <h2>graduate students / alumni category</h2> 
                    <p> 
                    At least one team member is an OSU alumni/grad student. Due to funding restrictions, 
                    there is no cash prize for this competition category, however winners will receive physical swag.            
                    </p> 
                    <br/> 

                
            </div>

            <h1>prizes</h1>
            <div className="infobody">
            <h2> Total of $1200 in prizes to be won!</h2> 
                    <h2>first place - overall</h2>
                        <p> 
                        This prize goes to the highest-scoring submission. It is available to all undergraduate 
                        teams including new student teams. Graduate and alumni teams are ineligible for this prize. 
                        If a new student team wins this prize, they are ineligible for the First Place New Student 
                        prize.                    
                        </p>
                        <br/> 

                    <h2> second place - overall</h2>
                        <p>
                        This prize goes to the second highest-scoring submission. It is available to all 
                        undergraduate teams including new student teams. Graduate and alumni teams are ineligible
                        for this prize. If a new student team wins this prize, they are ineligible for the First 
                        Place New Student prize.                    
                        </p> 
                        <br/> 

                    <h2> third place - overall</h2>
                        <p> 
                        This prize goes to the third highest-scoring submission. It is available to all undergraduate
                        teams including new student teams. Graduate and alumni teams are ineligible for this prize. 
                        If a new student team wins this prize, they are ineligible for the First Place New Student 
                        prize.                    
                        </p>
                        <br/> 
                
                    <h2>new student</h2>
                        <p> 
                        This award goes to the highest-scoring new student team. New student teams that won any 
                        of the "Overall" prizes are ineligible for this prize.
                        </p>
                        <br/> 
                     <h2>most social good/ most creative projects</h2>
                        <p> 
                       These awards will go to projects that present solutions that are beneficial to social good annd creative projects that deserve recognition. 
        Graduate and alumni teams are ineligible for this prize. If a team has won in the first place, second place, third place or new student category the team is ineligible for this prize. 
                        </p>
                        <br/> 
                    <h2>raffle</h2>
                        <p> 
                        Raffles will be offered during the hackathon to win LeetCode Premium subscriptions and copies of Cracking the Coding Interview. Participants will enter into raffles individually (not as a team). Graduate and alumni students may participate in raffles.   
                        </p>
                        <br/> 

            </div>   

        </>
    );
    
}

export default CategoriesAndPrizes
