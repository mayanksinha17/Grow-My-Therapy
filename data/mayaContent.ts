export interface NavItem {
  label: string;
  href: string;
  children?: { label: string; href: string }[];
}

export interface ServiceCard {
  title: string;
  tagline: string;
  description: string;
  highlights: string[];
  ctaText: string;
  ctaHref: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export const mayaContent = {
  header: {
    doctorName: "Dr. Maya Reynolds, PsyD",
    title: "Licensed Clinical Psychologist",
    navItems: [
      { label: "About", href: "#about" },
      {
        label: "Services",
        href: "#services",
        children: [
          { label: "Anxiety & Panic", href: "#services" },
          { label: "Trauma & EMDR", href: "#services" },
          { label: "Burnout & Perfectionism", href: "#services" },
        ],
      },
      { label: "Our Office", href: "#office" },
      { label: "FAQ", href: "#faq" },
      { label: "Contact", href: "#contact" },
    ] as NavItem[],
    cta: {
      text: "Book Consultation",
      href: "#contact",
    },
  },
  hero: {
    eyebrow: "LICENSED CLINICAL PSYCHOLOGIST • SANTA MONICA, CA & ONLINE ACROSS CALIFORNIA",
    heading: "Grounded, evidence-based therapy to help you find relief, clarity, and resilience.",
    subheading:
      "Compassionate, depth-oriented therapy for high-achieving adults navigating anxiety, trauma, and burnout—in person in Santa Monica and via secure telehealth statewide.",
    cta: {
      text: "Schedule a Consultation",
      href: "#contact",
    },
    secondaryCta: {
      text: "Explore Services",
      href: "#services",
    },
    images: {
      headshot: {
        src: "/images/maya/mayaHeadshot.jpg",
        alt: "Dr. Maya Reynolds, PsyD, Licensed Clinical Psychologist in Santa Monica",
      },
      officePreview: {
        src: "/images/maya/office1.jpg",
        alt: "Calm, sunlit therapy office in Santa Monica",
      },
    },
  },
  empathy: {
    eyebrow: "A SAFE SPACE TO SLOW DOWN",
    heading: "Functional on the outside, but quietly exhausted on the inside?",
    paragraphs: [
      "Many of the people I work with are high-achieving, thoughtful, and self-aware—yet internally feel overwhelmed by constant worry, mental fatigue, or the lingering effects of earlier life experiences.",
      "You might find yourself stuck in cycles of overthinking, carrying physical tension, struggling with sleep, or always bracing for the next shoe to drop. It’s common to feel like you have to keep pushing through, even when your mind and body are asking for relief.",
      "Therapy provides a dedicated, confidential space to step out of high-pressure mode. Together, we’ll work collaboratively to understand the roots of what you’re experiencing, regulate your nervous system, and cultivate sustainable ways of living and working.",
    ],
  },
  services: {
    eyebrow: "PRIMARY AREAS OF PRACTICE",
    heading: "Specialized Therapy for Adults",
    subtitle: "Three tailored pathways designed to address emotional patterns, process past experiences, and restore inner balance.",
    items: [
      {
        title: "Anxiety & Panic Therapy",
        tagline: "Move beyond constant worry and nervous system overload.",
        description:
          "For individuals experiencing chronic anxiety, panic attacks, physical tension, insomnia, or constant apprehension. We focus on both cognitive tools and somatic techniques to help you feel grounded and secure in daily life.",
        highlights: [
          "Understanding bodily triggers & nervous system regulation",
          "Cognitive tools to unhook from overthinking cycles",
          "Mindfulness-based strategies for present-moment calm",
        ],
        ctaText: "Learn more",
        ctaHref: "#contact",
      },
      {
        title: "Trauma & EMDR Therapy",
        tagline: "Heal from single-incident and complex life experiences.",
        description:
          "Whether you are processing a specific distressing event or long-standing relational patterns from the past, our work is carefully paced. We integrate EMDR and trauma-informed care with an emphasis on safety and stabilization.",
        highlights: [
          "Eye Movement Desensitization & Reprocessing (EMDR)",
          "Stabilization-first pacing to prevent emotional overwhelm",
          "Restoring self-trust, emotional safety, and confidence",
        ],
        ctaText: "Learn more",
        ctaHref: "#contact",
      },
      {
        title: "Burnout & Perfectionism",
        tagline: "Reconnect with yourself after chronic stress and pressure.",
        description:
          "Tailored for professionals, entrepreneurs, and creatives navigating intense work demands and high internal standards. We explore the roots of perfectionism and develop healthy boundaries and sustainable fulfillment.",
        highlights: [
          "Unpacking high internal pressure and imposter feelings",
          "Creating realistic boundaries in fast-paced environments",
          "Cultivating self-compassion and sustainable energy",
        ],
        ctaText: "Learn more",
        ctaHref: "#contact",
      },
    ] as ServiceCard[],
  },
  quoteBanner: {
    quote:
      "Therapy works best when you feel respected, understood, and actively involved in the process—building resilience and a stronger relationship with yourself.",
    author: "Dr. Maya Reynolds, PsyD",
  },
  modalities: {
    eyebrow: "INTEGRATIVE APPROACH",
    heading: "Evidence-Based Therapeutic Methods",
    subtitle: "Combining structured, practical tools with depth-oriented psychological care.",
    methods: [
      {
        name: "Cognitive Behavioral Therapy (CBT)",
        description: "Identify and reshape unhelpful thinking patterns, core beliefs, and reactive behavioral cycles.",
      },
      {
        name: "EMDR Therapy",
        description: "An evidence-based modality that reprocesses distressing memories to facilitate deep, lasting trauma resolution.",
      },
      {
        name: "Mindfulness-Based Practices",
        description: "Cultivate present-moment awareness, emotional non-reactivity, and gentle self-observation.",
      },
      {
        name: "Somatic & Body-Oriented Techniques",
        description: "Address the physical manifestations of stress, calming the physiological nervous system response.",
      },
    ],
  },
  about: {
    eyebrow: "MEET YOUR THERAPIST",
    heading: "Hi, I’m Dr. Maya Reynolds, PsyD",
    credentials: "Licensed Clinical Psychologist • Santa Monica, CA",
    paragraphs: [
      "I’m a licensed clinical psychologist based in Santa Monica, California, offering individual therapy for adults seeking relief from anxiety, trauma, stress, and burnout.",
      "I take a warm, collaborative, and grounded approach. Sessions are structured enough to provide meaningful direction and practical tools, while leaving ample room for depth, reflection, and open exploration.",
      "My trauma work is paced carefully, emphasizing safety and stabilization so that you feel regulated in your day-to-day life—not just during our sessions. Together, we work not only for symptom relief, but toward deep insight, self-trust, and lasting resilience.",
    ],
    image: {
      src: "/images/maya/mayaHeadshot.jpg",
      alt: "Dr. Maya Reynolds, PsyD, Licensed Clinical Psychologist",
    },
    cta: {
      text: "Schedule an Initial Consultation",
      href: "#contact",
    },
  },
  office: {
    eyebrow: "THE THERAPY ENVIRONMENT",
    heading: "Our Santa Monica Office",
    address: "123th Street 45 W, Santa Monica, CA 90401",
    description:
      "Located in the heart of Santa Monica, the office is a quiet, private space designed to feel calm, grounding, and uncluttered. With ample natural light and comfortable seating, clients often share that stepping into the room immediately helps them feel more at ease.",
    telehealthNotice:
      "For clients residing anywhere in California who prefer the convenience of online therapy, secure and confidential telehealth sessions are also available.",
    images: [
      {
        src: "/images/maya/office1.jpg",
        alt: "Sunlit, serene therapy room in Santa Monica with comfortable seating and natural light",
        caption: "Private, sunlit therapy setting designed for calm reflection",
      },
      {
        src: "/images/maya/office2.jpg",
        alt: "Peaceful office interior with grounding decor and comfortable armchairs",
        caption: "A quiet, comfortable space to focus on your healing",
      },
    ],
  },
  faq: {
    eyebrow: "COMMON QUESTIONS",
    heading: "Frequently Asked Questions",
    items: [
      {
        question: "Who do you work with?",
        answer:
          "I specialize in individual therapy for adults (18+). Many of my clients are high-achieving professionals, entrepreneurs, creatives, and thoughtful individuals who feel functional on the outside while navigating internal anxiety, perfectionism, chronic stress, or past trauma.",
      },
      {
        question: "Do you offer in-person or telehealth sessions?",
        answer:
          "Both. I offer in-person sessions at my private office in Santa Monica, California (123th Street 45 W), as well as secure, HIPAA-compliant telehealth video sessions for clients located anywhere in California.",
      },
      {
        question: "What therapeutic modalities do you integrate?",
        answer:
          "My practice integrates evidence-based approaches including Cognitive Behavioral Therapy (CBT), EMDR (Eye Movement Desensitization and Reprocessing), mindfulness-based practices, and somatic/body-oriented techniques. Every treatment plan is personalized to your specific goals.",
      },
      {
        question: "What is your approach to trauma and EMDR?",
        answer:
          "Trauma work is paced carefully with a stabilization-first model. We prioritize building safety, coping tools, and nervous system regulation before moving into memory reprocessing, ensuring you feel supported and in control throughout the entire process.",
      },
      {
        question: "How do I get started with therapy?",
        answer:
          "You can reach out through the contact form below to request an initial consultation. We will discuss your current struggles, what you hope to gain from therapy, and confirm whether my approach is the right fit for your needs.",
      },
    ] as FAQItem[],
  },
  ctaSection: {
    eyebrow: "TAKE THE FIRST STEP",
    heading: "Begin your journey toward relief and resilience.",
    subheading:
      "Whether you prefer to meet in person in Santa Monica or online via secure telehealth anywhere in California, I invite you to reach out.",
    cta: {
      text: "Request a Consultation",
      href: "#contact",
    },
  },
  contact: {
    eyebrow: "GET IN TOUCH",
    heading: "Schedule an Initial Consultation",
    address: "123th Street 45 W, Santa Monica, CA 90401",
    serviceArea: "In-Person in Santa Monica • Telehealth Across California",
    formInstructions:
      "Fill out the inquiry form below to request an appointment or consultation. You will receive a response within 1–2 business days.",
  },
  footer: {
    doctorName: "Dr. Maya Reynolds, PsyD",
    credentials: "Licensed Clinical Psychologist",
    officeAddress: "123th Street 45 W, Santa Monica, CA 90401",
    serviceNotice: "In-person sessions in Santa Monica, CA & secure telehealth throughout California",
    quickLinks: [
      { label: "Home", href: "#" },
      { label: "About", href: "#about" },
      { label: "Services", href: "#services" },
      { label: "Our Office", href: "#office" },
      { label: "FAQ", href: "#faq" },
      { label: "Contact", href: "#contact" },
    ],
    legalDisclaimer:
      "© 2026 Dr. Maya Reynolds, PsyD. All rights reserved. The information provided on this website is for educational and informational purposes only and does not constitute medical or psychological advice. If you are experiencing an emergency, please call 911 or go to your nearest emergency room.",
  },
};
