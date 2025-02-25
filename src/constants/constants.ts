import {
  ArrowRightCircleIcon,
  BookAIcon,
  Code2,
  CombineIcon,
  Github,
  HandHelping,
  Linkedin,
  StarIcon,
} from "lucide-react";

export const maxMsgInput = 250;
export const maxChatRoomMsgInput = 8000;

export const navbarItems = [
  { id: 1, label: "Home", url: "/" },
  { id: 2, label: "About Us", url: "/about-us" },
  { id: 6, label: "Contact Us", url: "/contact-us" },
];

export const authNavItems = [
  { id: 7, label: "Log in", url: "/log-in" },
  { id: 8, label: "Sign Up Now", url: "/sign-up" },
];

// Sample faqs
export const faqData = [
  {
    id: 1,
    label: "What is Flint AI?",
    answer:
      "Flint AI is an advanced AI platform designed to make learning and task automation easier.",
  },
  {
    id: 2,
    label: "How does Flint AI work?",
    answer:
      "Flint AI uses state-of-the-art machine learning models to deliver accurate and efficient solutions.",
  },
  {
    id: 3,
    label: "Is Flint AI free to use?",
    answer:
      "Flint AI offers both free and premium subscription plans to suit various user needs.",
  },
  {
    id: 4,
    label: "What platforms are supported by Flint AI?",
    answer:
      "Flint AI supports both web and mobile platforms for seamless accessibility.",
  },
  {
    id: 5,
    label: "How can I get started with Flint AI?",
    answer:
      "You can sign up on our website and afterwards, you will be given a comprehensive tour in the chatroom. With this, you won't have any complaints.",
  },
];

// Features section data
export const FeaturesData = [
  {
    id: 1,
    title: "automation",
    p: "Save time by automating repetitive tasks with advanced AI models tailored to your needs.",
  },
  {
    id: 2,
    title: "study advice",
    p: "Receive personalized study guidance to optimize learning and improve productivity.",
  },
  {
    id: 3,
    title: "virtual friend",
    p: "Enjoy engaging, interactive conversations with a highly intelligent virtual companion.",
  },
];

// Startup prompts
export const startUpPrompts = [
  {
    id: 1,
    label: "Make a plan",
  },
  {
    id: 2,
    label: "Analyze data",
  },
  {
    id: 3,
    label: "Surprise me",
  },
  {
    id: 4,
    label: "Help me write",
  },
  {
    id: 5,
    label: "Summarize text",
  },
  {
    id: 6,
    label: "Get advice",
  },
  {
    id: 7,
    label: "Code",
  },
  {
    id: 8,
    label: "Brainstorm",
  },
];

// Terms and conditions
export const termsAndConditions = [
  {
    title: "1. Introduction",
    p: "Welcome to Flint AI! By accessing or using our services, you agree to be bound by the terms and conditions set forth below. Please read them carefully before using our platform.",
  },
  {
    title: "2. Use of Services",
    p: "You agree to use our services in compliance with all applicable laws and regulations. You are solely responsible for any activity that occurs under your account.<br />Unauthorized use, duplication, or redistribution of the content provided on Flint AI is strictly prohibited.",
  },
  {
    title: "3. Account Responsibilities",
    p: "Welcome to Flint AI! By accessing or using our services, you agree to be bound by the terms and conditions set forth below. Please read them carefully before using our platform.",
  },
  {
    title: "1. Introduction",
    p: "Welcome to Flint AI! By accessing or using our services, you agree to be bound by the terms and conditions set forth below. Please read them carefully before using our platform.",
  },
  {
    title: "1. Introduction",
    p: "Welcome to Flint AI! By accessing or using our services, you agree to be bound by the terms and conditions set forth below. Please read them carefully before using our platform.",
  },
  {
    title: "1. Introduction",
    p: "Welcome to Flint AI! By accessing or using our services, you agree to be bound by the terms and conditions set forth below. Please read them carefully before using our platform.",
  },
  {
    title: "1. Introduction",
    p: "Welcome to Flint AI! By accessing or using our services, you agree to be bound by the terms and conditions set forth below. Please read them carefully before using our platform.",
  },
  {
    title: "1. Introduction",
    p: "Welcome to Flint AI! By accessing or using our services, you agree to be bound by the terms and conditions set forth below. Please read them carefully before using our platform.",
  },
];

// Footer data
export const footerData = [
  {
    url: "https://github.com/AfuhFlynns",
    text: "github",
    Icon: Github,
  },
  {
    url: "https://www.linkedin.com/in/afuh-flynn-s-74289a268",
    text: "linkedin",
    Icon: Linkedin,
  },
  {
    url: "https://www.frontendmentor.io/profile/AfuhFlynns",
    text: "frontend mentor",
    Icon: Code2,
  },
  {
    url: "https://www.upwork.com/freelancers/~01d602cb081a55ce51?mp_source=share",
    text: "upwork",
    Icon: Code2,
  },
];

export const footerDataNotice = [
  {
    text: "Give a Star",
    Icon: StarIcon,
  },
  {
    text: "Follow",
    Icon: CombineIcon,
  },
  {
    text: "Support",
    Icon: HandHelping,
  },
  {
    text: "And Hire",
    Icon: BookAIcon,
  },
  {
    text: "Me on",
    Icon: ArrowRightCircleIcon,
  },
];
// TODO: Delete this after the work is complete
export const mockUpData = [
  {
    role: "user",
    parts: [{ text: "Hello ai how can I create a startup in Cameroon" }],
  },
  {
    role: "model",
    parts: [
      {
        text: "Hello!  I'm Flintai, your Startup Idea Generator and Advisor. Cameroon offers exciting opportunities for startups! To give you the best advice, I need a little more information.  Tell me about your interests, skills, and what kind of impact you want to make.  For example:\n\n* **What industries are you passionate about?** (e.g., technology, agriculture, education, healthcare, tourism)\n* **What problems have you observed in your community that you'd like to solve?**\n* **Do you have any specific skills or expertise you want to leverage?** (e.g., coding, marketing, design, farming)\n* **What are your resources like?** (e.g., access to funding, networks, technology)\n\nOnce I have a better understanding of your background and goals, I can generate some tailored startup ideas for you.  Let's brainstorm together!\n",
      },
    ],
  },
  {
    role: "user",
    parts: [
      {
        text: "I am interested in technology and education\nI want to solve the problem of lack of confidence in student who study computer engineering, lack of motivation to study, lack of hope of for the future. Make them take challenges to study, interact with each other and learn without pressure.\nI am a full stack nextjs and mern stack programmer learning ml and other necessary fields.\n",
      },
    ],
  },
  {
    role: "model",
    parts: [
      {
        text: "That's fantastic! You've identified a real challenge and have the technical skills to potentially address it.  Lack of confidence, motivation, and hope can be significant hurdles for students, especially in a demanding field like computer engineering.  Here are some startup ideas combining technology and education to address these issues in Cameroon:\n\n**1. Gamified Learning Platform with a Focus on Collaboration and Mentorship:**\n\n* **Concept:** Develop a platform that uses game mechanics like points, badges, and leaderboards to make learning computer engineering",
      },
    ],
  },
  {
    role: "user",
    parts: [
      {
        text: "I am interested in technology and education\nI want to solve the problem of lack of confidence in student who study computer engineering, lack of motivation to study, lack of hope of for the future. Make them take challenges to study, interact with each other and learn without pressure.\nI am a full stack nextjs and mern stack programmer learning ml I am interested in technology and education\nI want to solve the problem of lack of confidence in student who study computer engineering, lack of motivation to study, lack of hope of for the future. Make them take challenges to study, ```javascript console.log('Hello, world');```",
      },
    ],
  },
  {
    role: "model",
    parts: [
      {
        text: "That's a great initiative!Build a personalized gamified platform for learning computer engineering concepts.Focus on gamification, collaboration, and practical projects to boost motivation and confidence.Partner with schools or institutions for a pilot program.Innovate with gamified assessment tools to promote active participation.Add a mentorship program to boost confidence and motivation.Host workshops to teach coding and gamification techniques.Use AI for personalized recommendations and skill assessments.Host competitions for students to showcase their skills.Develop a community ",
      },
    ],
  },
];

export const settingsTabs = [
  {
    id: 0,
    label: "General",
  },
  {
    id: 1,
    label: "Personalized",
  },
  {
    id: 2,
    label: "Security",
  },
];

// Endpoints and urls
export const backendBaseUrl = "http://localhost:5000";
export const authBackendBaseUrl = `${backendBaseUrl}/api/auth/users`;
export const geminiBackendUrl = `${backendBaseUrl}/assist/api/ai`;
