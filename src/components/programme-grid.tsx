import { Link } from "@tanstack/react-router";
import { HeartPulse, GraduationCap, Sprout, HandHeart, Utensils, ArrowUpRight } from "lucide-react";

const PROGRAMMES = [
  {
    id: "health",
    title: "Public health",
    icon: HeartPulse,
    body: "Improving access to healthcare, health education and community support for children and women.",
  },
  {
    id: "education",
    title: "Education",
    icon: GraduationCap,
    body: "Opening doors through literacy, vocational learning and practical skills for children and young people.",
  },
  {
    id: "nutrition",
    title: "Nutrition",
    icon: Utensils,
    body: "Supporting healthier families through nutrition programmes for young children and women of reproductive age.",
  },
  {
    id: "food-security",
    title: "Agriculture & food security",
    icon: Sprout,
    body: "Strengthening food production and household resilience through sustainable agricultural initiatives.",
  },
  {
    id: "livelihoods",
    title: "Empowerment & livelihoods",
    icon: HandHeart,
    body: "Helping women and young people build skills, develop careers and create sustainable economic opportunities.",
  },
];

export function ProgrammeGrid({ links = false }: { links?: boolean }) {
  return (
    <div className="programme-grid">
      {PROGRAMMES.map(({ id, title, icon: Icon, body }) => (
        <article id={links ? undefined : id} key={id} className="programme-card">
          <span className="programme-card__icon">
            <Icon size={26} aria-hidden="true" />
          </span>
          <h3>{title}</h3>
          <p>{body}</p>
          {links && (
            <Link to="/what-we-do" hash={id} className="text-link">
              Explore programme <ArrowUpRight size={18} aria-hidden="true" />
              <span className="sr-only">: {title}</span>
            </Link>
          )}
        </article>
      ))}
    </div>
  );
}
