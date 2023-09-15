import React from "react";

function CategoriesAndPrizes () {

    return ( 
        

        <>
            <h1>Categories</h1>
            <div className="infobody">
                    <h2>No categories for this hackathon</h2>
                    <br/> 
            </div>   
        
            <h1>Prizes</h1>
            <div className="infobody">
                    <h2>First Place - Overall</h2>
        
                        <p> 
                        This prize goes to the highest-scoring submission. It is available to all undergraduate 
                        teams including new student teams. 
                        </p>
                  
                        <br/> 

                    <h2> Second Place - Overall</h2>
                        <p> 
                        This prize goes to the second highest-scoring submission. It is available to all undergraduate 
                        teams including new student teams. 
                        </p>
                        <br/> 

                    <h2> Third Place - Overall</h2>
        
                        <p> 
                        This prize goes to the third highest-scoring submission. It is available to all undergraduate 
                        teams including new student teams. 
                        </p>
                        <br/> 

            </div>   

        </>
    );
    
}

export default CategoriesAndPrizes
