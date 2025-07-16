function About() {
    return ( 
        <div className="container-fluid d-flex justify-content-center mt-5 mb-5" id="aboutContainer">
            <div className="col-12 d-flex justify-content-center align-items-center">
                <div className="row gap-5">
                    <div className="col-12">
                        <h1 className="text-center">About Me</h1>
                        <p className="text-center fs-5">
                            I'm a passionate full-stack developer with 3+ years of experience creating web applications that solve real-world problems. I love working with modern technologies and am always eager to learn new things.
                        </p>
                    </div>
                    <div className="col-md-12">
                        <div className="row d-md-flex flex-row flex-sm-wrap justify-content-evenly" id="aboutCard">
                            <div className="col-sm-4 text-center w-25 p-2 card-item">
                                <h3>Clean Code</h3>
                                <p>Writing maintainable, scalable
code that follows best practices</p>
                            </div>
                            <div className="col-sm-4 text-center w-25 p-2 card-item">
                                <h3>Responsive Design</h3>
                                <p>Creating beautiful, mobile-first
designs that work on ait devices</p>
                            </div>
                            <div className="col-sm-4 text-center w-25 p-2 card-item">
                                <h3>Performance</h3>
                                <p>Optimizing appbcatjons for
speed and best user expenence</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     );
}

export default About;