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
                <h4>Web Developer</h4>
                <h5>PT.Solutech Inovasi Teknologi</h5>
              </div>
              <h3>2020</h3>
            </div>
            <p>
              Created RESTful API backend using PHP with Laravel framework for E-commerce
              applications, including login and data management functionalities.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Mobile Developer</h4>
                <h5>Inova Medika Solusindo, PT</h5>
              </div>
              <h3>2021</h3>
            </div>
            <p>
              Developed healthcare applications including login integration with social platforms,
              dashboard creation, menstruation tracking, and real-time chat/video calls between
              doctors and patients.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Freelance Developer</h4>
                <h5>Various Projects</h5>
              </div>
              <h3>2021</h3>
            </div>
            <p>
              Developed Jelita Bpm using React Native and Firebase, and BaRing.Digital
              as a Fullstack Developer. Created applications for waste management and
              cooking oil recycling.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Fullstack Developer</h4>
                <h5>Outsource PT.Telkom</h5>
              </div>
              <h3>2022</h3>
            </div>
            <p>
              Worked on low code/no code business solutions using Vue.js and Node.js.
              Handled database setup (PostgreSQL, OracleDB), API development, and frontend
              development with Vuetify.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Fullstack Developer</h4>
                <h5>Go Buddy Asia</h5>
              </div>
              <h3>2023</h3>
            </div>
            <p>
              Developed low code/no code business solutions using Next.js and Nest.js.
              Set up MySQL databases, created admin portals, client views, and handled
              Docker setup and testing.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Web/Mobile Developer</h4>
                <h5>CV.Kreasitech</h5>
              </div>
              <h3>2024</h3>
            </div>
            <p>
              Worked on multiple projects including BSI Bank risk management application,
              Suquise Tower web/mobile development, and IKN APP mobile application.
              Technologies used: Next.js, Tailwind, TypeScript, Flutter, Swift UI.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
