import React from "react";

function CategoriesAndPrizes () {

    return ( 
        

        <>
            <h1>categories</h1>
            <div className="infobody">
                    <h2>No categories for this hacakathon</h2>
                    <br/> 
            </div>   
        
            <h1>prizes</h1>
            <div className="infobody">
                    <h2>first place - overall</h2>
        
                        <p> 
                        This prize goes to the highest-scoring submission. It is available to all undergraduate 
                        teams including new student teams. 
                        </p>
                  
                        <br/> 

                    <h2> second place - overall</h2>
                        <p> 
                        This prize goes to the second highest-scoring submission. It is available to all undergraduate 
                        teams including new student teams. 
                        </p>
                        <br/> 

                    <h2> third place - overall</h2>
        
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
