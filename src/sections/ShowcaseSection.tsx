import { useRef } from 'react';
import ProjectCarousel from '../components/ProjectCarousel';
import { projects } from '../constants';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import SkillBubble from '../components/SkillBubble';

gsap.registerPlugin(ScrollTrigger);

const ShowcaseSection = () => {
  const sectionRef = useRef(null);
  const cardRefs = useRef<Array<HTMLDivElement | null>>([]);
  const skillRefs = useRef<Array<HTMLDivElement | null>>([]);

  useGSAP(() => {
    cardRefs.current.forEach((card, index) => {
      if (card) {
        gsap.fromTo(
          card,
          { y: 50, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            delay: 0.15 * index,
            scrollTrigger: {
              trigger: card,
              start: "top 80%",
            },
          }
        );
      }
    });
    // Animate skill bubbles with scroll
    skillRefs.current.forEach((bubble, index) => {
      if (bubble) {
        gsap.fromTo(
          bubble,
          { scale: 0.7, opacity: 0 },
          {
            scale: 1,
            opacity: 1,
            duration: 0.7,
            ease: "power2.out",
            scrollTrigger: {
              trigger: bubble,
              start: "top 90%",
            },
          }
        );
      }
    });
    gsap.fromTo(sectionRef.current, { opacity: 0 }, { opacity: 1, duration: 1.5 });
  }, []);

  return (
    <section id="work" ref={sectionRef} className="app-showcase">
      <div className="w-full max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold mb-10 text-center">Showcase</h2>
        <div className="grid-3-cols">
          {projects.map((project, index) => (
            <div
              key={project.name}
              className="p-5 flex flex-col items-center"
              ref={(el) => {
                cardRefs.current[index] = el;
              }}
            >
              <ProjectCarousel images={project.images} />
              <h3 className="mt-5 text-xl font-semibold text-white-50 text-center">{project.name}</h3>
              <p className="mt-2 text-blue-50 text-center">{project.description}</p>
              {/* <div className="flex flex-wrap flex-row">
                {project.skills.map((skill, skillIdx) => (
                  <div
                    key={skill}
                    ref={el => {
                      skillRefs.current[index * 10 + skillIdx] = el;
                    }}
                  >
                    <SkillBubble skill={skill} />
                  </div>
                ))}
              </div> */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ShowcaseSection;