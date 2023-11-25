import { useState } from "react";
const ExportPoints=({key,id,points})=>{
    
    return(
        <>
            <p>{id}は{points}点{key}</p>
        </>
    );
}

export default ExportPoints;