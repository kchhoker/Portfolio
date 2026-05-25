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
                <h4>Library Aide III</h4>
                <h5>ASU · Tempe, AZ</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Built a Python script to cross-check serial records against CSV exports,
              flagging duplicates and missing entries. Maintained catalog entries in the
              library's database, used Excel to build a tracker for incoming serials, and
              collaborated with librarians to improve digital database management.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Content Writer & Editor</h4>
                <h5>CRY · Intern · India</h5>
              </div>
              <h3>2023–24</h3>
            </div>
            <p>
              Assisted with HTML formatting of articles via CMS, maintained a structured
              content database in Notion with tagging by topic and status, and used
              Google Sheets formulas to organize and analyze child welfare survey data
              across multiple districts.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Digital Services Associate</h4>
                <h5>Jio · Delhi, India</h5>
              </div>
              <h3>2022–23</h3>
            </div>
            <p>
              Diagnosed and resolved technical issues — network config, APN settings,
              app connectivity — for 800+ customers. Guided users through digital
              payment platforms and escalated unresolved issues via the internal
              ticketing system with detailed logs.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
