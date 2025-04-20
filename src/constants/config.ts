type TSection = {
  p: string;
  h2: string;
  content?: string;
};

type TConfig = {
  html: {
    title: string;
    fullName: string;
    email: string;
  };
  hero: {
    name: string;
    p: string[];
  };
  contact: {
    form: {
      name: {
        span: string;
        placeholder: string;
      };
      email: {
        span: string;
        placeholder: string;
      };
      message: {
        span: string;
        placeholder: string;
      };
    };
  } & TSection;
  sections: {
    about: Required<TSection>;
    experience: TSection;
    feedbacks: TSection;
    works: Required<TSection>;
  };
};

export const config: TConfig = {
  html: {
    title: "Palanisamy M — Full-Stack Developer Portfolio",
    fullName: "Palanisamy M",
    email: "palani8147s@gmail.com",
  },
  hero: {
    name: "Palanisamy M",
    p: ["I develop scalable web applications", "and innovative ML solutions"],
  },
  contact: {
    p: "Get in touch",
    h2: "Contact.",
    form: {
      name: {
        span: "Your Name",
        placeholder: "What's your name?",
      },
      email: { span: "Your Email", placeholder: "palani8147s@gmail.com" },
      message: {
        span: "Your Message",
        placeholder: "What do you want to say?",
      },
    },
  },
  sections: {
    about: {
      p: "Introduction",
      h2: "Overview.",
      content: `I'm a dynamic full-stack web developer with expertise in React, PHP, SQL, and Python. I specialize in building scalable, user-centric solutions and have experience in machine learning projects like real-time drowsiness detection. My work includes automating institute management systems and enhancing system performance through clean code and innovative solutions. Passionate about solving complex challenges, I collaborate effectively to deliver impactful projects.`,
    },
    experience: {
      p: "What I have done so far",
      h2: "Work Experience.",
    },
    feedbacks: {
      p: "What others say",
      h2: "Testimonials.",
    },
    works: {
      p: "My work",
      h2: "Projects.",
      content: `The following projects showcase my skills in full-stack development and machine learning. Each project demonstrates my ability to solve real-world problems using technologies like React, PHP, SQL, Python, and OpenCV, with a focus on performance and user experience.`,
    },
  },
};