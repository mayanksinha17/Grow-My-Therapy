export interface NavItem {
  label: string;
  href: string;
  children?: { label: string; href: string }[];
}

export interface SpecialtyCard {
  title: string;
  description: string;
  ctaText: string;
  ctaHref: string;
}

export interface AudienceCard {
  title: string;
  description: string;
  image: string;
  alt: string;
}

export const cloneContent = {
  header: {
    logoText: "Conejo Valley Family Counseling",
    logoImage: "/images/clone/logo.png",
    navItems: [
      { label: "About", href: "/therapists-newbury-park" },
      {
        label: "Our Team",
        href: "/our-team",
        children: [
          { label: "Jennifer Anderson, LMFT", href: "/jennifer-anderson" },
          { label: "Candace Bletscher, AMFT", href: "/candace-bletscher" },
          { label: "Heather Williams-Baumgart, AMFT", href: "/heather-williams-baumgart" },
          { label: "Samantha Johnson, AMFT", href: "/samantha-johnson" },
          { label: "Autumn Bodily, AMFT", href: "/autumn-bodily" },
          { label: "Rosa Gomez, AMFT", href: "/rosa-gomez" },
          { label: "Chad Flores, AMFT", href: "/chad-flores" },
          { label: "Simran Sidhu, AMFT", href: "/simran-sidhu" },
          { label: "Jessica Jauregui, MA, AMFT", href: "/jessica-jauregui" },
        ],
      },
      {
        label: "Specialties",
        href: "/specialties",
        children: [
          { label: "Dissociation", href: "/dissociative-identity-disorder-therapist-newbury-park" },
          { label: "Trauma", href: "/trauma-counseling-newbury-park" },
          { label: "Special Needs Parenting", href: "/counseling-special-needs-parents-newbury-park" },
          { label: "Couples", href: "/couples-therapy" },
          { label: "Children & Teens", href: "/children-and-teens" },
          { label: "Anxiety & Depression", href: "/anxiety-depression" },
          { label: "Adoption", href: "/adoption-therapy-ventura-county-ca" },
        ],
      },
      {
        label: "Methods",
        href: "/methods",
        children: [
          { label: "EMDR", href: "/emdr-therapy-newbury-park" },
          { label: "Brainspotting", href: "/brainspotting" },
          { label: "Somatic Therapy", href: "/somatic-therapy" },
          { label: "Parts Work Therapy", href: "/parts-work-therapy" },
        ],
      },
      { label: "FAQs", href: "/faqs" },
    ] as NavItem[],
    cta: {
      text: "Contact",
      href: "/contact",
    },
  },
  hero: {
    eyebrow: "ONLINE & IN-PERSON COUNSELING IN NEWBURY PARK & ACROSS CA",
    heading: "Rebuild your foundation on solid ground and finally begin to thrive.",
    subheading: "Specialized therapy for adults, couples, teens, and children to reflect, heal, and grow.",
    cta: {
      text: "Book an Appointment",
      href: "/contact",
    },
    images: {
      family: {
        src: "/images/clone/heroFamily.jpg",
        alt: "family therapy",
      },
      child: {
        src: "/images/clone/heroChild.jpg",
        alt: "child therapy",
      },
    },
  },
  empathy: {
    heading: "You’re holding onto hope that life can be better than it is right now.",
    paragraphs: [
      "At Conejo Valley Family Counseling we want to make that hope a reality.",
      "Whether you're an adult seeking personal growth, looking to work through your trauma, a couple working on your relationship, or a parent looking for support for your child, we provide a compassionate and safe space to help you navigate all of life’s ups and downs.",
      "First and foremost, we believe what you’re going through is real, valid, and worthy of support. Our team offers clients in the Newbury Park area and across CA an environment to discover a new life and a deeper sense of self in the midst of their struggles. As we tap into the power of connection and understanding, you can find your footing again and take a transformative path forward.",
    ],
    image: {
      src: "/images/clone/empathyOcean.jpg",
      alt: "Sandy beach with gentle ocean waves and a cloudy sky.",
    },
  },
  whoWeHelp: {
    heading: "Who we help",
    audiences: [
      {
        title: "Adults",
        description:
          "Feeling stuck or overwhelmed? We help adults find clarity, build resilience, and move forward with confidence by addressing the root causes of anxiety, stress, and emotional pain.",
        image: "/images/clone/whoAdults.jpg",
        alt: "Two people sitting on a log at the beach, facing a lake with mountains in the background.",
      },
      {
        title: "Couples",
        description:
          "Relationships require effort, and we’re here to help you strengthen yours. We guide couples through challenges like communication breakdowns and trust issues, helping you rebuild intimacy and strengthen your relationship.",
        image: "/images/clone/whoCouples.jpg",
        alt: "A couple embracing on the beach, with both wearing casual summer clothing and smiling at each other. The ocean is in the background.",
      },
      {
        title: "Children & Teens",
        description:
          "Kids need support, too. We help them process big emotions, cope with challenging family situations, build coping skills, and feel understood, while also working closely with their parents to create a nurturing environment.",
        image: "/images/clone/whoChildren.jpg",
        alt: "A boy carrying a girl on a beach with waves in the background.",
      },
    ] as AudienceCard[],
  },
  quoteBanner: {
    quote: "You deserve a place where your story is heard, valued, and understood. Nothing will be too heavy for us to carry together.",
    texture: "/images/clone/quoteTexture.png",
  },
  areasOfExpertise: {
    heading: "Our areas of expertise",
    areas: [
      "Dissociation",
      "Trauma",
      "Family conflict",
      "Special needs parenting",
      "Depression",
      "marriage",
      "anxiety",
      "relationships",
      "children",
      "teens",
      "intimacy & connection",
      "…and more.",
    ],
  },
  howWeWork: {
    eyebrow: "HOW WE WORK",
    heading: "We’re here to make a difference.",
    paragraphs: [
      "The clients we work with are balancing so many things at once, it’s often hard for them to put themselves first.",
      "Here, your needs are always top priority. Our team takes the time to deeply listen to our clients in order to truly understand their story and their struggles. We recognize that no two people are the same and that personalized therapy means an intentional, tailored approach. (You won’t find anything “one-size-fits-all” here.) If you’re ready to do the work, we’re ready to help.",
      "Sometimes we may gently challenge you to look at things differently and other times we may explore your emotions, all while encouraging you to practice what you’ve learned in your daily life. We take what we do seriously because we know how important it is for you to heal from what’s hurting you, discover a fulfilling life, and build meaningful relationships. Our goal is to walk alongside you in this journey, offering support and guidance as you uncover your strengths and embrace what the future can hold for you.",
    ],
    cta: {
      text: "Learn more about us",
      href: "/therapists-newbury-park",
    },
    image: {
      src: "/images/clone/howWeWork.jpg",
      alt: "A woman and a child in white dresses dancing on a sandy beach with tall grasses and a distant building in the background during sunset.",
    },
  },
  transitionBanner: {
    heading: "Honoring where you’ve been & helping shape where you’re headed.",
    image: {
      src: "/images/clone/transitionSunset.jpg",
      alt: "Family of four standing on a beach, holding hands, facing the ocean at sunset.",
    },
  },
  specialties: {
    heading: "Our specialties include…",
    items: [
      {
        title: "Trauma",
        description:
          "We don’t always know when and how we’ve experienced trauma. In therapy, we’ll work together to help you process your past, understand what’s causing you to stay “stuck,” and regain a sense of safety, control, and hope. You don’t have to carry your burdens alone.",
        ctaText: "Learn more",
        ctaHref: "/trauma-counseling-newbury-park",
      },
      {
        title: "Dissociation",
        description:
          "The feeling of losing time, hearing conflicting voices, or questioning your sense of self can be overwhelming. In therapy, we’ll help you understand these experiences, recognize your own triggers, and create a sense of balance and identity so that you can feel more grounded.",
        ctaText: "Learn more",
        ctaHref: "/dissociative-identity-disorder-therapist-newbury-park",
      },
      {
        title: "EMDR",
        description:
          "Eye Movement Desensitization and Reprocessing (EMDR) is a powerful therapeutic technique that helps process and heal trauma by reworking how painful memories are stored in your brain. This allows you to find relief and move toward lasting healing.",
        ctaText: "Learn more",
        ctaHref: "/emdr-therapy-newbury-park",
      },
      {
        title: "Special Needs Parenting",
        description:
          "Parenting a child with special needs presents unique challenges and complex emotions. We provide compassionate support through lived experience and expertise to help you navigate this journey with tools, understanding, and self-care.",
        ctaText: "Learn more",
        ctaHref: "/counseling-special-needs-parents-newbury-park",
      },
    ] as SpecialtyCard[],
  },
  appointmentCTA: {
    eyebrow: "SCHEDULE AN APPOINTMENT",
    heading: "Find a therapist who is the right fit for you.",
    paragraphs: [
      "Coming to therapy is a courageous decision, and connecting with the right kind of therapist makes all the difference. We understand that your journey is personal, and we're here to support you with care and understanding every step of the way. Each member of our team brings dedicated expertise and a commitment to support you in your struggles. We want you to feel prioritized, understood, and empowered.",
      "Click the button below to schedule an appointment.",
    ],
    cta: {
      text: "Book now",
      href: "/contact",
    },
    images: [
      {
        src: "/images/clone/ctaShells1.jpg",
        alt: "A person picking up seashells on a sandy beach.",
      },
      {
        src: "/images/clone/ctaShells2.jpg",
        alt: "A person in a striped dress pointing at shells on the sandy beach, with a child in blue shorts standing barefoot nearby.",
      },
    ],
  },
  footer: {
    missionStatement:
      "We want to make getting started simple. You’re welcome to come into our office in Newbury Park or schedule virtual appointments from anywhere in CA—whatever works best for you.",
    quickLinks: [
      { label: "Home", href: "/" },
      { label: "About", href: "/therapists-newbury-park" },
      { label: "FAQs", href: "/faqs" },
      { label: "Contact", href: "/contact" },
    ],
    contactInfo: {
      address: "925 Broadbeck Dr Suites 200 and 225 Newbury Park, CA 91320",
      email: "info@conejovalleycounseling.com",
      phone: "805.242.3120",
      serviceAreas: "Serving Thousand Oaks, Westlake Village, Camarillo, Moorpark, & Simi Valley",
    },
    team: [
      "Jennifer Anderson",
      "Heather Williams-Baumgart",
      "Autumn Bodily",
      "Candace Bletscher",
      "Samantha Johnson",
      "Rosa Gomez",
      "Chad Flores",
      "Simran Sidhu",
      "Jessica Jauregui",
    ],
    legalDisclaimer: "Terms | Privacy Policy | Disclaimer | Website by Walker Strategy Co.",
  },
};
