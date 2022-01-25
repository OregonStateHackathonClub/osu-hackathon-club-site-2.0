import React from "react";

function CategoriesAndPrizes () {

    return ( 

        <> 
            <h1>categories</h1>
            <div className="infobody">

                <h2> overall category</h2>          
                    <p> 
                        All team members are undergrad OSU students            </p>
                <h2>new student category</h2> 
                    <p> 
                    All team members are undergrad OSU students AND have not taken any 300-level courses. Teams that are eligible for this prize are also eligible for the Overall prize.
                    </p> 
                <h2>graduate students / alumni category</h2> 
                    <p> 
                    At least one team member is an OSU alumni/grad student. Due to funding restrictions, there is no cash prize for this competition category, however winners will receive physical swag.            </p> 
                
            </div>

            <h1>prizes</h1>
            <div className="infobody">
                    <h2>first place - overall</h2>
                        <p> 
                        This prize goes to the highest-scoring submission. It is available to all undergraduate teams including new student teams. Graduate and alumni teams are ineligible for this prize. If a new student team wins this prize, they are ineligible for the First Place New Student prize.                    </p>
                    <h2> second place - overall</h2>
                        <p>
                        This prize goes to the second highest-scoring submission. It is available to all undergraduate teams including new student teams. Graduate and alumni teams are ineligible for this prize. If a new student team wins this prize, they are ineligible for the First Place New Student prize.                    </p> 
                    <h2> third place - overall</h2>
                        <p> 
                        This prize goes to the third highest-scoring submission. It is available to all undergraduate teams including new student teams. Graduate and alumni teams are ineligible for this prize. If a new student team wins this prize, they are ineligible for the First Place New Student prize.                    </p>
                
                    <h2>new student</h2>
                        <p> 
                            This award goes to the highest-scoring new student team. New student teams that won any of the "Overall" prizes are ineligible for this prize.</p>
            </div>   

        </>
    );
    
}

export default CategoriesAndPrizes