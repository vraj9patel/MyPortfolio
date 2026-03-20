import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Software Programmer</h4>
                <h5>Credit Card Management Services</h5>
              </div>
              <h3>2021 - 2023</h3>
            </div>
            <p>
              Developed full-stack applications using ASP.NET MVC, C#, and SQL Server. Automated electronic signatures on PDFs with iText/iTextSharp, integrated external APIs (Authorize.net, Adobe Sign, SAP Crystal Reports, TransUnion), created RESTful APIs, and enhanced client debt-management portal for secure balance tracking.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Software Developer</h4>
                <h5>Medical Data Systems</h5>
              </div>
              <h3>2023 - Present</h3>
            </div>
            <p>
              Designed reporting platform with 12+ dynamic reports for 6,000+ hospitals. Scaled messaging throughput from 2,500 to 12,000-15,000 daily texts. Led real-time payment API development in C# .NET, integrated across 5 systems. Co-developed in-house print engine and AI-powered payment agent API with conversational LLM.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
