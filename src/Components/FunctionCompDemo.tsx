import React, { MouseEvent, useState,useEffect } from "react";

interface IAppProps{
    FullName:string
}

interface IAppState{
    Message?:string;
}

// const App1=(props:IAppProps):JSX.Element=>{
    
//     return (
//         <React.Fragment>
//             <h2>{props.FullName}</h2>
//         </React.Fragment>
//     )
// }

const App:React.FunctionComponent<IAppProps>=(props) : JSX.Element=>{

    const [MessageState,SetMessageState]=useState<IAppState>({
        Message:"Hello World"
    });

    useEffect(()=>{

        console.log("UseEffect:",MessageState.Message);
        
    },[MessageState]);


    
    const OnClickHandler=(event:MouseEvent)=>{
        console.log(event);
        SetMessageState({
            Message:"Hello from Button Handler"
        });
        
        console.log("Handler:",MessageState.Message); // "hello World"
    }

    return (
        <React.Fragment>
            <h2>{props.FullName}</h2>
            <h2>{MessageState.Message}</h2>
            <button className="btn btn-primary" onClick={OnClickHandler}>Trigger</button>
        </React.Fragment>
    )
}

export default App;




