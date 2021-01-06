import React, { useState } from 'react';

const Heart =(props) =>{
    const [lovestate, setLovestate ] = useState(false);
    return(
        <div className='heart-svg'>
            <svg width="393" className={`pointer ${lovestate? 'svg-love':'svg-no-love'}`} height="293" xmlns="http://www.w3.org/2000/svg" 
                // onClick={()=>props.handleLove(props.postId, !props.love)}   
                onClick={()=>setLovestate(!lovestate)} 
            >
                <g>
                {/* <title>background</title> */}
                {/* <rect fill="none" id="canvas_background" height="295" width="395" y="-1" x="-1"/> */}
                <g display="none" overflow="hidden" y="0" x="0" height="10%" width="10%" id="canvasGrid">
                {/* <rect fill="url(#gridpattern)" strokeWidth="0" y="0" x="0" height="10%" width="10%"/> */}
                </g>
                </g>
                <g>
                {/* <title>Layer 1</title> */}
                <path id="svg_1" d="m196.5007,74.90265c70.91495,-163.01724 348.76204,0 0,209.5936c-348.76204,-209.5936 -70.91495,-372.61084 0,-209.5936z" strokeWidth="8.5" stroke="#ee4460"/>
                </g>
            </svg>
        </div>
    )
}

export default Heart;