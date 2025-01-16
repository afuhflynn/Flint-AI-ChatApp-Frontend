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
export const maxChatRoomMsgInput = 2000;
export const navbarItems = [
  { id: 1, label: "Home", url: "/" },
  { id: 2, label: "About Us", url: "/about-us" },
  { id: 6, label: "Contact Us", url: "/contact-us" },
];

export const authNavItems = [
  { id: 7, label: "Login", url: "/log-in" },
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

// Endpoints and urls
export const backendBaseUrl = "http://localhost:3000";
