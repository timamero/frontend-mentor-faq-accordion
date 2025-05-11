# Frontend Mentor - FAQ accordion solution

This is a solution to the [FAQ accordion challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/faq-accordion-wyfFdeBwBz). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- Hide/Show the answer to a question when the question is clicked
- Navigate the questions and hide/show answers using keyboard navigation alone
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Screenshot

![](./screenshot.png)

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [FAQ Accordion Demo](https://timamero.github.io/frontend-mentor-faq-accordion/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library
- [Vite](https://vitejs.dev/) - Build tool
- [TypeScript](https://www.typescriptlang.org/) - Typing

### What I learned

Through developing a responsive and accessible accordion component, I gained valuable insights into front-end architecture. My initial implementation revealed a fundamental design flaw—I had been passing text content as element attributes rather than structuring it properly within the component. This realization prompted a comprehensive refactoring process that elevated my thinking about component architecture and semantic HTML structure.

A particularly rewarding challenge was implementing smooth height transitions between the accordion's active and inactive states. The solution I found was to set the transition on the max-height property. This project significantly deepened my understanding of both component design principles and animation techniques.

### Continued development

I would plan to evolve this project in several ways. First, I would enhance the Accordion component's reusability by implementing a more robust prop interface.

I would also restructure the CSS implementation using a methodology like BEM to improve maintainability and eliminate potential style conflicts. Additionally, I'll establish a comprehensive testing suite encompassing unit tests for component logic, integration tests for state management, and accessibility tests to ensure WCAG compliance.

### Useful resources

- [Accordion Pattern (Sections With Show/Hide Functionality)](https://www.w3.org/WAI/ARIA/apg/patterns/accordion/) - This helped me to improve the accessibility of the accordion component.

## Author

- Website - [Fatima Camero](https://www.fbcamero.com)
- Frontend Mentor - [@timamero](https://www.frontendmentor.io/profile/timamero)
