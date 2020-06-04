import React from "react";
import { Archive, Book, Briefcase } from "react-feather";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import AboutStyled from "./AboutStyled";
import "react-vertical-timeline-component/style.min.css";

const About = () => (
  <AboutStyled>
    <div className="card">
      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
          date="2020 - 2020"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          icon={<Briefcase />}
        >
          <h3 className="vertical-timeline-element-title">
            Web Developer at Danae
          </h3>
          <h4 className="vertical-timeline-element-subtitle">Remote</h4>
          <p>Plateform web development with Next.js and Tailwind.css</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2020 - 2020"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          icon={<Briefcase />}
        >
          <h3 className="vertical-timeline-element-title">
            Freelancing at Funnl
          </h3>
          <h4 className="vertical-timeline-element-subtitle">Remote</h4>
          <p>Plateform web development with Angular8 and Bootstrap</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2019 - 2020"
          iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
          icon={<Book />}
        >
          <h3 className="vertical-timeline-element-title">O'clock School</h3>
          <h4 className="vertical-timeline-element-subtitle">Remote</h4>
          <p>
            Learning to code, to work in remote, to work on Pair-Programming and
            Agile Method.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2017 - 2019"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          icon={<Briefcase />}
        >
          <h3 className="vertical-timeline-element-title">School Teacher</h3>
          <h4 className="vertical-timeline-element-subtitle">Nîmes, France</h4>
          <p>
            teacher in primary schools, group management, organization, team
            work
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2016 - 2018"
          iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
          icon={<Book />}
        >
          <h3 className="vertical-timeline-element-title">
            Master - education
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Montpellier, France
          </h4>
          <p>
            Pass the national competitive examination from Nationnal Education,
            getting my Master
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          iconStyle={{ background: "rgb(16, 204, 82)", color: "#fff" }}
          icon={<Archive />}
        />
      </VerticalTimeline>
    </div>
  </AboutStyled>
);

export default About;
