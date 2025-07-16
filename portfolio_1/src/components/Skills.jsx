import Progress from "./Progress"
function Skills() {
    const progressArr = [
        {name : "JavaScript",percentage : "95%"},
        {name : "Node.js",percentage : "80%"},
        {name : "MongoDB",percentage : "60%"},
        {name : "React",percentage : "85%"},
        {name : "Python",percentage : "90%"},
        {name : "Aws",percentage : "50%"}
    ]
    return ( 
        <div className="container mb-5">
            <div className="d-flex flex-column justify-content-center align-items-center" id="skillContainer">
                <h1 className="text-center skill-item">Skills</h1>
                <div className=" row w-75 mt-3 skil-container">
                    <div className="col-md-6 skill-item">
                        {
                            progressArr.slice(0,3).map((element,idx)=>{
                                return <Progress key={idx} course={element.name} percentage={element.percentage} />
                            })
                        }
                    </div>
                    <div className="col-md-6 skill-item">
                        {
                            progressArr.slice(3,6).map((element,idx)=>{
                                return <Progress key={idx} course={element.name} percentage={element.percentage} />
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
     );
}

export default Skills;