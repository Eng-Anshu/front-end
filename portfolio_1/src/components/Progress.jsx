export default function progress(props) {
    return ( 
        <div className="d-flex flex-column gap-2">
            <div className="d-flex">
                <div>{props.course}</div>
                <div className="ms-auto">{props.percentage}</div>
            </div>
            <div className="progress" style={{height:"7px"}}>
                <div className="progress-bar progress-bar-striped progress-bar-animated mom"  style={{width:`${props.percentage}`,transition:"width 1s linear"}}></div>
            </div>
        </div>
     );
}