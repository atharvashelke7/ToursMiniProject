import React, { useState } from 'react'


function Tours({ tour, removeTour }) {

    const { id, tourDesc, tourImgLink, nameOfTour, tourPrice } = tour;
    const [showContent, setShowContetn] = useState(false);
    return (
        <div>
   
            <div className='main' key={id} >

                <img width={"250px"} height={"200px"} src={tourImgLink} alt={nameOfTour} />
                <h1 style={{
                    fontSize: "medium",
                    marginLeft: "80px",
                    fontFamily:"sans-serif"
                }}>{nameOfTour}</h1>
                <p>{showContent ? tourDesc : tourDesc.slice(0, 100)}...
                    <b style={{
                        color: "green"
                    }} onClick={() =>

                        setShowContetn(!showContent)
                    }>{showContent ? "See less" : "Read More"}</b></p>

                <div style={{
                     paddingLeft:"5px"
                }}><button className='btn' onClick={() => {
                    removeTour(id)

                }}>Not Interested</button>
                <p style={{
                    backgroundColor: "#41B06E",
                    color: "white",
                    width: "50px",
                    borderRadius: "2px",
                    position: "absolute",
                    right: "0",
                    top: "-10px",

                }}>
                    ${tourPrice}</p></div> 
            </div>




        </div>

    )
}

export default Tours;
