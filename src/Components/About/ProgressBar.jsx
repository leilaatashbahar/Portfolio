import React from 'react'
import "./ProgressBar.css"

export default function ProgressBar({title,bgcolor,progress,height}) {
    const Parentdiv = {
        height: height,
        width: '100%',
        backgroundColor: 'rgb(148, 147, 147)',
        borderRadius: 40,
        marginBottom: 20
      }
      
      const Childdiv = {
        height: '100%',
        width: `${progress}%`,
        backgroundColor: bgcolor,
       borderRadius:40,
        textAlign: 'right'
      }
      
      const progresstext = {
        padding: 10,
        color: 'black',
        fontWeight: 900
      }
        
    return (
        <>
        <div className="progressHeader">
            <p className='progressTitle'>{title}</p>
        
        <p>{`${progress}%`}</p>
        </div>
        
    <div style={Parentdiv}>
        
      <div style={Childdiv}>
          
        <span style={progresstext}></span>
      </div>
    </div>
    </>
    )
}
