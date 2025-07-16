import { Link } from "react-router-dom";

function Contact() {
    return ( 
        <div className="mt-5 pt-3 bg-dark w-100 text-light">
            <div className=" d-flex flex-column align-items-center gap-3 pt-3 text-center">
                <h1>Get In Touch</h1>
                <p>Have a project in mind? Let's work together to bring your ideas to life!</p>
                <div className="container-fluid row d-flex justify-content-center row-gap-md-3 datails-div">
                    <div className="col-3 me-2  contact-item">
                        <div>Email</div>
                        <div className="text-center" id="Email">anshuleeku2005@gmail.com</div>
                    </div>
                    <div className="col-2 ms-2 contact-item">
                        <div>Phone</div>
                        <div>+91-9692378102</div>
                    </div>
                    <div className="col-2 ms-2 contact-item">
                        <div>Location</div>
                        <div>Bhubaneswar,Odisha</div>
                    </div>
                </div>
                <div className="container-fluid d-flex justify-content-center gap-sm-5 mt-3 datails-div" id="contactLink">
                    <Link to="https://www.linkedin.com/in/anshuman-behera-b-tech-4230a6358" >
                    <button type="button" className="btn btn-outline-light contact-btn">LinkedIn</button></Link>
                    <Link to="https://github.com/Eng-Anshu">
                    <button type="button" className="btn btn-outline-light contact-btn">GitHub</button></Link>
                    <Link to="https://x.com">
                    <button type="button" className="btn btn-outline-light contact-btn">Twitter</button></Link>
                </div>
                <div className="w-100 bg-secondary mt-3 p-3 text-center">@ 2025 Anshuman Behera. All rights reserved.</div>
            </div>
        </div>
     );
}

export default Contact;