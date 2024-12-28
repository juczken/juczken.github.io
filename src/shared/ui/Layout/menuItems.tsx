import React from 'react';
import { NavItem } from '../NavigationBar/NavigationBar';

const Home = () => <div>Home Page</div>;
const About = () => <div>About Page</div>;
const Services = () => <div>Services Page</div>;
const WebDevelopment = () => <div>Web Development Page</div>;
const MobileApps = () => <div>Mobile Apps Page</div>;
const Contact = () => <div>Contact Page</div>;
const ReactDevelopment = () => <div>React Development Page</div>;
const VanillaJSDevelopment = () => <div>Vanilla JS Development Page</div>;

export const menuItems: NavItem[] = [
  { label: 'Home', path: '/', element: <Home /> },
  {
    label: 'Services',
    // path: null,
    // element: null,
    // path: "/services",
    // element: <Services />,
    dropdown: [
      {
        label: 'Web Development',
        path: '/services/web',
        element: <WebDevelopment />,
        dropdown: [
          { label: 'React Development', path: '/services/web/react', element: <ReactDevelopment /> },
          { label: 'Vanilla JS Development', path: '/services/web/js', element: <VanillaJSDevelopment /> },
        ],
      },
      { label: 'Mobile Apps', path: '/services/mobile', element: <MobileApps /> },
    ],
  },
  { label: 'About', path: '/about', element: <About /> },
  { label: 'Contact', path: '/contact', element: <Contact /> },
];
