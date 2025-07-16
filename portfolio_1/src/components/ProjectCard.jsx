function ProjectCard(props) {
    const imgId = "projectImage-"+(parseInt(props.index)+1);
    console.log(imgId);
    console.log(props.index);
    return ( 
        <div className="col-md-4 mb-4 " >
            <div className="card card-item shadow project-card">
                <div className="card-body rounded-top-3" id={imgId}>
                    <img src={props.look} alt={props.name} style={{width:"100%",height:"100%"}}/>
                </div>
                <div className="card-footer d-flex flex-column align-items-start">
                    <h3>{props.name}</h3>
                    <p>{props.desc}</p>
                    <div className="d-flex justify-content-start gap-2 text-white">
                        {
                            props.skills.map((com,idx)=>{
                                return <div key={idx} className="p-1 bg-secondary rounded-2">
                                    {com}
                                </div>
                            })
                        }
                    </div>
                    <div className="d-flex gap-3 pt-3 pb-3">
                        <button type="button" className="btn btn-outline-primary">Code</button>
                        <button type="button" className="btn btn-primary">Demo</button>
                    </div>
                </div>
            </div>
        </div>
     );
}

export default ProjectCard;