import { VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import styles from "./WorkCard.module.css";

const WorkCard = ({ experience }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "#1d1836",
        color: "#fff",
      }}
      contentArrowStyle={{ borderRight: "7px solid  #232631" }}
      date={experience.date}
      iconStyle={{ background: experience.iconBg }}
      icon={
        <div className={styles.container_Icon}>
          <img
            src={experience.icon}
            alt={experience.company_name}
            className={styles.icon}
          />
        </div>
      }
    >
      <div>
        <h3 className={styles.text}>{experience.title}</h3>
        <p style={{ fontSize: "16px", margin: 0, fontWeight: "lighter" }}>
          {experience.company_name}
        </p>
      </div>

      <ul className={styles.list}>
        {experience.points.map((point, index) => (
          <li
            key={`experience-point-${index}`}
            className="text-white-100 text-[14px] pl-1 tracking-wider"
          >
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};

export default WorkCard;
