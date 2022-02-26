import "./App.css";
import data from "./data";
function SectionTitle({ role, spec, employer, startDate, endDate }) {
  return (
    <div className="experience-heading">
      <p className="role">
        <span>{role}</span>
        {spec && <span className="org">{spec},</span>}
        <span className={spec ? "org bold" : "org"}>{employer}</span>
      </p>
      <p className="dates">
        <span className="start">{startDate}</span> -{" "}
        <span className="end">{endDate}</span>
      </p>
    </div>
  );
}
function Section({ title, children }) {
  return (
    <div className="section">
      <div className="section-heading">
        <h2 className="section-title">{title}</h2>
      </div>
      <div className="section-children">{children}</div>
    </div>
  );
}

function App() {
  const { name, contact, objective, workExperience, education, skills } = data;

  return (
    <main className="App">
      <header className="header section-block">
        <h1 className="name">{name}</h1>
        <div className="contact">
          <p>
            <span className="contact-key">LinkedIn:</span>
            {contact.linkedin}
          </p>
        </div>
        <div className="contact">
          <p>
            <span className="contact-key">Email:</span>
            {contact.email}
          </p>
        </div>
        <div className="contact">
          <p>
            <span className="contact-key">Github:</span>
            {contact.github}
          </p>
        </div>
      </header>
      <section className="section-block">
        <Section title="OBJECTIVE">
          <div>{objective}</div>
        </Section>
      </section>
      <section className="section-block">
        <Section title="WORK EXPERIENCE">
          <SectionTitle
            role={workExperience.role}
            employer={workExperience.employer}
            startDate={workExperience.startDate}
            endDate={workExperience.endDate}
          />
          <div>
            <ul className="duty-list">
              {workExperience.responsibilities.map((line, i) => (
                <li key={i}>{line}</li>
              ))}
            </ul>
          </div>
        </Section>
      </section>
      <section className="section-block">
        <Section title="EDUCATION">
          {education.map((item, i) => (
            <SectionTitle
              role={item.certification}
              spec={item.discipline}
              employer={item.institution}
              startDate={item.startDate}
              endDate={item.endDate}
              key={i}
            />
          ))}
        </Section>
      </section>
      <section className="section-block">
        <Section title="SKILLS">
          <div>{skills.join(", ")}</div>
        </Section>
      </section>
    </main>
  );
}

export default App;
