// import React from 'react'

function Accordion() {
  return (
    <>
      <div style={{ margin: "50px 100px" }}>
        <div className="accordion accordion-flush" id="accordionFlushExample">
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseOne"
                aria-expanded="false"
                aria-controls="flush-collapseOne"
              >
                <img src="src/assets/BG.png" alt="" />
                <span style={{ fontSize: "18px", marginLeft: "20px" }}>
                  Interactive Whiteboard Software
                </span>
              </button>
            </h2>
            <div
              id="flush-collapseOne"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionFlushExample"
            >
              <div className="accordion-body">
                Digital tools that enable coaches to write, draw, and interact
                with students in real-time, simulating a traditional whiteboard
                experience.
              </div>
            </div>
          </div>

          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseTwo"
                aria-expanded="false"
                aria-controls="flush-collapseTwo"
              >
                <img src="src/assets/BG.png" alt="" />
                <span style={{ fontSize: "18px", marginLeft: "20px" }}>
                  Webcams
                </span>
              </button>
            </h2>
            <div
              id="flush-collapseTwo"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionFlushExample"
            >
              <div className="accordion-body">
                Cameras that capture video for online communication, allowing
                coaches and students to see each other during remote lessons.
              </div>
            </div>
          </div>

          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseThree"
                aria-expanded="false"
                aria-controls="flush-collapseThree"
              >
                <img src="src/assets/BG.png" alt="" />
                <span style={{ fontSize: "18px", marginLeft: "20px" }}>
                  Online Collaboration Platforms
                </span>
              </button>
            </h2>
            <div
              id="flush-collapseThree"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionFlushExample"
            >
              <div className="accordion-body">
                Web-based platforms that facilitate communication, file sharing,
                and collaboration among coaches and students, fostering
                interactive learning experiences.
              </div>
            </div>
          </div>

          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseFour"
                aria-expanded="false"
                aria-controls="flush-collapseFour"
              >
                <img src="src/assets/BG.png" alt="" />
                <span style={{ fontSize: "18px", marginLeft: "20px" }}>
                  Online Assessment Tools
                </span>
              </button>
            </h2>
            <div
              id="flush-collapseFour"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionFlushExample"
            >
              <div className="accordion-body">
                Web-based platforms that enable coaches to create and administer
                quizzes, tests, and assessments to evaluate students
                understanding and progress.
              </div>
            </div>
          </div>

          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseFive"
                aria-expanded="false"
                aria-controls="flush-collapseFive"
              >
                <img src="src/assets/BG.png" alt="" />
                <span style={{ fontSize: "18px", marginLeft: "20px" }}>
                  Virtual Classroom Platforms
                </span>
              </button>
            </h2>
            <div
              id="flush-collapseFive"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionFlushExample"
            >
              <div className="accordion-body">
                Online learning environments equipped with tools for scheduling,
                delivering, and managing lessons, assignments, and discussions.
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Accordion;
