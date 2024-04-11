<p align="center">
  <img src="https://raw.githubusercontent.com/PKief/vscode-material-icon-theme/ec559a9f6bfd399b82bb44393651661b08aaf7ba/icons/folder-markdown-open.svg" width="100" alt="project-logo">
</p>
<p align="center">
    <h1 align="center">PORTFOLIO-JL</h1>
</p>
<p align="center">
    <em>Crafting seamless experiences with code mastery!</em>
</p>
<p align="center">
	<img src="https://img.shields.io/github/license/cortex225/portfolio-jl?style=default&logo=opensourceinitiative&logoColor=white&color=0080ff" alt="license">
	<img src="https://img.shields.io/github/last-commit/cortex225/portfolio-jl?style=default&logo=git&logoColor=white&color=0080ff" alt="last-commit">
	<img src="https://img.shields.io/github/languages/top/cortex225/portfolio-jl?style=default&color=0080ff" alt="repo-top-language">
	<img src="https://img.shields.io/github/languages/count/cortex225/portfolio-jl?style=default&color=0080ff" alt="repo-language-count">
<p>
<p align="center">
	<!-- default option, no dependency badges. -->
</p>

<br><!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary><br>

- [ Overview](#-overview)
- [ Features](#-features)
- [ Repository Structure](#-repository-structure)
- [ Modules](#-modules)
- [ Getting Started](#-getting-started)
  - [ Installation](#-installation)
  - [ Usage](#-usage)
  - [ Tests](#-tests)
- [ Project Roadmap](#-project-roadmap)
- [ Contributing](#-contributing)
- [ License](#-license)
- [ Acknowledgments](#-acknowledgments)
</details>
<hr>

##  Overview

The portfolio-jl project is a dynamic portfolio website built with Next.js and React components. It offers a visually appealing layout with sections for showcasing projects, personal information, services, and contact details. The project leverages Tailwind CSS for consistent styling and responsiveness, enhancing user experience. Key features include interactive project sliders, theme toggling, dynamic navigation, and form submissions. With a focus on modularity and user engagement, portfolio-jl presents a comprehensive overview of skills and projects while promoting seamless navigation and interaction for visitors.

---

##  Features

|    |   Feature         | Description |
|----|-------------------|---------------------------------------------------------------|
| ⚙️  | **Architecture**  | The project has an architecture built on React, Next.js, and Tailwind CSS, integrating various components like Hero, About, Services, and Navigation. Speed insights, analytics, Swiper, and other libraries are utilized for performance and functionality. Dockerfile for deployment and pnpm for package management. |
| 🔩 | **Code Quality**  | The codebase maintains quality with structured component files, form handling, and UI components like button, carousel, and modal sheets. Consistent styling with Tailwind CSS and Autoprefixer. Linting with ESLint. Scalability is ensured with Node 18 in Dockerfile. |
| 📄 | **Documentation** | Extensive documentation includes jsconfig.json for import resolution, postcss.config.js for styling plugins, and Dockerfile for Next.js deployment. Package.json manages dependencies, and README provides project overview. Component files have detailed descriptions for functionality and usage. |
| 🔌 | **Integrations**  | Integrates various libraries such as clsx, embla-carousel-react, react-icons, framer-motion, and zod for enhanced functionality and styling. Next-themes for theme management, Radix UI for tabs and labels, and React Hook Form for form handling. Speed insights and analytics for performance monitoring. |
| 🧩 | **Modularity**    | Codebase exhibits modularity with components like Work, Header, Socials, providing clear functionality and visual elements. UI components like Button, Card, Form, and Carousel ensure reusable and maintainable code. Path aliases and structured imports enhance modular development. |
| 🧪 | **Testing**       | Testing practices not explicitly mentioned in the provided details. |
| ⚡️  | **Performance**   | Performance optimization achieved through efficient image loading, animated count updates using React CountUp, and Autoprefixer for cross-browser compatibility. Implementation of Swiper carousel and smooth animations with Framer Motion enhance user experience. Docker image setup ensures portability and predictability. |
| 🛡️ | **Security**      | Measures for data protection and access control not explicitly discussed in the provided details. It's recommended to ensure secure handling of user inputs and sensitive data within the application. |
| 📦 | **Dependencies**  | Key external libraries and dependencies include clsx, embla-carousel-react, react-icons, framer-motion, zod, Next-themes, and Radix UI components like tab and dialog. Tailwind CSS plugins and Autoprefixer for styling. Linting with ESLint. Deployment with Dockerfile and Node 18. |

---

##  Repository Structure

```sh
└── portfolio-jl/
    ├── Dockerfile
    ├── README.md
    ├── app
    │   ├── contact
    │   ├── favicon.ico
    │   ├── globals.css
    │   ├── layout.jsx
    │   ├── page.jsx
    │   ├── projects
    │   └── template.jsx
    ├── components
    │   ├── About.jsx
    │   ├── Badge.jsx
    │   ├── Cta.jsx
    │   ├── DevImg.jsx
    │   ├── Footer.jsx
    │   ├── Form.jsx
    │   ├── Header.jsx
    │   ├── Hero.jsx
    │   ├── Logo.jsx
    │   ├── MobileNav.jsx
    │   ├── Nav.jsx
    │   ├── ProjectCard.jsx
    │   ├── Services.jsx
    │   ├── Socials.jsx
    │   ├── ThemeProvider.jsx
    │   ├── ThemeToggler.jsx
    │   ├── Work.jsx
    │   └── ui
    ├── components.json
    ├── hooks
    │   └── useScrollProgress.jsx
    ├── jsconfig.json
    ├── lib
    │   └── utils.js
    ├── next.config.mjs
    ├── package.json
    ├── pnpm-lock.yaml
    ├── postcss.config.js
    ├── public
    │   ├── about
    │   ├── contact
    │   ├── cta
    │   ├── dots-dark.svg
    │   ├── dots-light.svg
    │   ├── hero
    │   ├── jl-first.png
    │   ├── logo.svg
    │   ├── logo2.svg
    │   ├── logo3.svg
    │   ├── reviews
    │   └── work
    └── tailwind.config.js
```

---

##  Modules

<details closed><summary>.</summary>

| File                                                                                           | Summary                                                                                                                                                                                                                                                                                                                                                                                                |
| ---                                                                                            | ---                                                                                                                                                                                                                                                                                                                                                                                                    |
| [components.json](https://github.com/cortex225/portfolio-jl/blob/master/components.json)       | Defines component style configurations, Tailwind setup, and path aliases for the UI components in the project. Aligns global styles and Tailwind CSS settings with the component framework using the specified schema.                                                                                                                                                                                 |
| [pnpm-lock.yaml](https://github.com/cortex225/portfolio-jl/blob/master/pnpm-lock.yaml)         | This code file in the portfolio-jl repository serves as a key component in configuring the layout and structure of the web application. It leverages React components to define the overall appearance and organization of the portfolio website. Through the use of layout.jsx and template.jsx, it ensures a cohesive and visually appealing presentation of content, enhancing the user experience. |
| [jsconfig.json](https://github.com/cortex225/portfolio-jl/blob/master/jsconfig.json)           | Defines path aliases for modular import resolution, enabling simplified component imports across the React-based portfolio website.                                                                                                                                                                                                                                                                    |
| [Dockerfile](https://github.com/cortex225/portfolio-jl/blob/master/Dockerfile)                 | Builds Docker images for a Next.js application. Uses Node 18 for predictability. Sets up work directory, installs dependencies with pnpm, and prepares production image. Exposes port 3000 and starts the application.                                                                                                                                                                                 |
| [postcss.config.js](https://github.com/cortex225/portfolio-jl/blob/master/postcss.config.js)   | Implements Tailwind CSS and Autoprefixer plugins for styling in the project, ensuring consistent design and browser compatibility across components and layouts.                                                                                                                                                                                                                                       |
| [tailwind.config.js](https://github.com/cortex225/portfolio-jl/blob/master/tailwind.config.js) | Defines Tailwind CSS settings for responsive design, color schemes, animations, and background images. Integrates with project components and pages for consistent styling across the web app. Enhances UI experience through Tailwind plugins.                                                                                                                                                        |
| [package.json](https://github.com/cortex225/portfolio-jl/blob/master/package.json)             | Defines project metadata, dependencies, and build scripts. Manages Next.js development, linting, and production. Specifies various libraries like React, Tailwind CSS, and Framer Motion essential for the projects functionality and styling.                                                                                                                                                         |
| [next.config.mjs](https://github.com/cortex225/portfolio-jl/blob/master/next.config.mjs)       | Defines default Next.js configuration for the repository.                                                                                                                                                                                                                                                                                                                                              |

</details>

<details closed><summary>components</summary>

| File                                                                                                    | Summary                                                                                                                                                                                                                                                                                                                                  |
| ---                                                                                                     | ---                                                                                                                                                                                                                                                                                                                                      |
| [Work.jsx](https://github.com/cortex225/portfolio-jl/blob/master/components/Work.jsx)                   | Showcases latest projects in a slider format with project cards. Offers links to detailed project information. Engages users with concise project summaries and a call-to-action button to view all projects.                                                                                                                            |
| [Header.jsx](https://github.com/cortex225/portfolio-jl/blob/master/components/Header.jsx)               | Implements dynamic header behavior for navigation in the React-based portfolio site. Utilizes scroll position and page pathname to adjust header appearance. Includes logo, navigation links, theme toggler, and mobile navigation components for a cohesive user experience.                                                            |
| [ThemeProvider.jsx](https://github.com/cortex225/portfolio-jl/blob/master/components/ThemeProvider.jsx) | Enables theme management for app components using next-themes. Integrates theming functionality across the portfolio site seamlessly.                                                                                                                                                                                                    |
| [Socials.jsx](https://github.com/cortex225/portfolio-jl/blob/master/components/Socials.jsx)             | Enables linking to social profiles with icons in a styled container. Supports Github and LinkedIn profiles. Promotes interaction and networking on the website.                                                                                                                                                                          |
| [About.jsx](https://github.com/cortex225/portfolio-jl/blob/master/components/About.jsx)                 | Displays personal and professional information using tabs for easy navigation. Includes sections for personal details, skills, qualifications, and tools used daily. Delivers a comprehensive overview of skills, tech proficiency, and work experience within a clean and organized layout.                                             |
| [Services.jsx](https://github.com/cortex225/portfolio-jl/blob/master/components/Services.jsx)           | Showcases services like Web, Mobile, and Backend Development with respective descriptions and icons. Organized in a grid layout, each service is displayed in a card format, emphasizing the technology stack used. The component contributes to the portfolio websites section dedicated to highlighting professional services offered. |
| [Footer.jsx](https://github.com/cortex225/portfolio-jl/blob/master/components/Footer.jsx)               | Defines the Footer component presentation with a Socials section for sharing and copyright notice.                                                                                                                                                                                                                                       |
| [ThemeToggler.jsx](https://github.com/cortex225/portfolio-jl/blob/master/components/ThemeToggler.jsx)   | Enables toggling between light and dark themes in the portfolio. Utilizes Button component and icons for switch. Interacts with Next.js theme context for seamless theme switching.                                                                                                                                                      |
| [Form.jsx](https://github.com/cortex225/portfolio-jl/blob/master/components/Form.jsx)                   | Enables form submission with user details and message. Integrates input fields, a textarea, and a submission button, styled with icons for a visually appealing user experience within the portfolio-jl repositorys architecture.                                                                                                        |
| [MobileNav.jsx](https://github.com/cortex225/portfolio-jl/blob/master/components/MobileNav.jsx)         | Enables mobile navigation with a collapsible menu triggered by a hamburger icon. Displays logo, navigation links, and social icons in a responsive layout, optimizing user experience on small screens.                                                                                                                                  |
| [Hero.jsx](https://github.com/cortex225/portfolio-jl/blob/master/components/Hero.jsx)                   | Implements a hero section with key information and call-to-action buttons. Displays a developers introduction, expertise, and social links. Includes badges for experience, projects, and client count. Shows a developer image and scroll-down icon.                                                                                    |
| [Cta.jsx](https://github.com/cortex225/portfolio-jl/blob/master/components/Cta.jsx)                     | This component encourages users to engage by offering assistance and prompting action through a call-to-action button linked to the contact page. It plays a pivotal role in soliciting user interaction within the portfolio websites architecture.                                                                                     |
| [DevImg.jsx](https://github.com/cortex225/portfolio-jl/blob/master/components/DevImg.jsx)               | Implements a reusable component for developer images in the portfolio site. Integrates Next.js image optimization for efficient loading and responsive design.                                                                                                                                                                           |
| [Nav.jsx](https://github.com/cortex225/portfolio-jl/blob/master/components/Nav.jsx)                     | Defines navigation links dynamically based on page path in Next.js, enhancing user experience with smooth page transitions. Integrates Framer Motion for stylish animations, improving visual appeal and interaction within the portfolio website structure.                                                                             |
| [ProjectCard.jsx](https://github.com/cortex225/portfolio-jl/blob/master/components/ProjectCard.jsx)     | Creates** visually appealing project cards with dynamic image loading and interactive buttons for GitHub and project links. Organizes project details elegantly within a styled card component for seamless integration into the portfolio websites UI.                                                                                  |
| [Logo.jsx](https://github.com/cortex225/portfolio-jl/blob/master/components/Logo.jsx)                   | Implements a logo component linking to the homepage using Next.js routing. It showcases the logo image with a rounded design for the portfolio website, enhancing branding and navigation experience for users within the parent repositorys architecture.                                                                               |
| [Badge.jsx](https://github.com/cortex225/portfolio-jl/blob/master/components/Badge.jsx)                 | Implements a Badge component for displaying dynamic count and text. Used to showcase achievements or statistics visually. Key features include animated count updates with React CountUp and customizable styles for various use cases in the portfolio website.                                                                         |

</details>

<details closed><summary>components.ui</summary>

| File                                                                                             | Summary                                                                                                                                                                                                                                                                                                               |
| ---                                                                                              | ---                                                                                                                                                                                                                                                                                                                   |
| [tabs.jsx](https://github.com/cortex225/portfolio-jl/blob/master/components/ui/tabs.jsx)         | Implements interactive tabs for user navigation within the portfolio website. Connects with Radix UIs tab components for seamless functionality.                                                                                                                                                                      |
| [label.jsx](https://github.com/cortex225/portfolio-jl/blob/master/components/ui/label.jsx)       | Enhances label styling using class variance for React components. Integrates Radix UIs label component with custom styles for font size, weight, and cursor effects. Facilitates seamless application of label styling across the project.                                                                            |
| [button.jsx](https://github.com/cortex225/portfolio-jl/blob/master/components/ui/button.jsx)     | Defines button variants and styling for the UI components. Integrates diverse design options like default, destructive, outline, secondary, ghost, and link styles, with various sizes. Maintains a clean, reusable code structure for enhancing button functionalities within the portfolio website.                 |
| [sheet.jsx](https://github.com/cortex225/portfolio-jl/blob/master/components/ui/sheet.jsx)       | Enables rendering interactive modal sheets with configurable content structure, style variants, and animations. Facilitates user interactions through triggers, close buttons, and overlay options. Enhances user experience by providing flexible components for presenting information within the application flow. |
| [badge.jsx](https://github.com/cortex225/portfolio-jl/blob/master/components/ui/badge.jsx)       | Implements badge styling variants to enable flexible visual representation.                                                                                                                                                                                                                                           |
| [card.jsx](https://github.com/cortex225/portfolio-jl/blob/master/components/ui/card.jsx)         | Defines reusable UI components for cards with structured layouts and styling in the portfolio website, enhancing modularity and extensibility. Includes components for card content, header, title, description, and footer, improving code organization and maintainability in the architecture.                     |
| [form.jsx](https://github.com/cortex225/portfolio-jl/blob/master/components/ui/form.jsx)         | Defines form components for structured form handling within a React app. Includes entities for form field context, label, control, description, and messages. Facilitates seamless integration of form elements with user input validation and feedback.                                                              |
| [textarea.jsx](https://github.com/cortex225/portfolio-jl/blob/master/components/ui/textarea.jsx) | Enhances text inputs with custom styles for the portfolio website. Integrates dynamic classes for consistent UX across multiple components. Extends React functionality for reusable and maintainable code.                                                                                                           |
| [input.jsx](https://github.com/cortex225/portfolio-jl/blob/master/components/ui/input.jsx)       | Defines a reusable React Input component with customizable styles for the portfolio website.                                                                                                                                                                                                                          |
| [carousel.jsx](https://github.com/cortex225/portfolio-jl/blob/master/components/ui/carousel.jsx) | Enables interactive carousel navigation with previous and next slide controls. Manages carousel state and orientation, allowing seamless slide transitions. Facilitates smooth user experience within the portfolio sites UI structure.                                                                               |

</details>

<details closed><summary>app</summary>

| File                                                                                   | Summary                                                                                                                                                                                                                                         |
| ---                                                                                    | ---                                                                                                                                                                                                                                             |
| [globals.css](https://github.com/cortex225/portfolio-jl/blob/master/app/globals.css)   | Defines color variables and styles for a Tailwind-based design system. Sets base colors and dark mode variants. Applies typography and layout styles for headings, subtitles, section titles, and badges. Also customizes Swiper bullet styles. |
| [layout.jsx](https://github.com/cortex225/portfolio-jl/blob/master/app/layout.jsx)     | Implements the layout structure for the website, integrating the header, footer, and theming. Utilizes speed insights and analytics components for performance monitoring.                                                                      |
| [template.jsx](https://github.com/cortex225/portfolio-jl/blob/master/app/template.jsx) | Implements a scroll progress bar using animation effects in the portfolio website. Displays content using motion transitions and dynamic completion tracking.                                                                                   |
| [page.jsx](https://github.com/cortex225/portfolio-jl/blob/master/app/page.jsx)         | Hero, About, Services, Work, and Call to Action components. Integrates analytics and speed insights from Vercel.                                                                                                                                |

</details>

<details closed><summary>app.projects</summary>

| File                                                                                    | Summary                                                                                                                                                                                                                                                                                                                           |
| ---                                                                                     | ---                                                                                                                                                                                                                                                                                                                               |
| [page.jsx](https://github.com/cortex225/portfolio-jl/blob/master/app/projects/page.jsx) | Implements project filtering and display based on categories. Utilizes Tabs component for navigation. Offers a concise overview of featured projects with images, categories, names, descriptions, links, and GitHub references. Enhances user experience through dynamic content presentation within the portfolio architecture. |

</details>

<details closed><summary>app.contact</summary>

| File                                                                                   | Summary                                                                                                                                                                                                              |
| ---                                                                                    | ---                                                                                                                                                                                                                  |
| [page.jsx](https://github.com/cortex225/portfolio-jl/blob/master/app/contact/page.jsx) | Showcases Contact section UI with key details such as text, illustrations, contact information, and a form. Utilizes Socials component for social icons display. Designed for the portfolio-jl website architecture. |

</details>

<details closed><summary>lib</summary>

| File                                                                           | Summary                                                                                        |
| ---                                                                            | ---                                                                                            |
| [utils.js](https://github.com/cortex225/portfolio-jl/blob/master/lib/utils.js) | Combines CSS classes using Tailwind CSS utilities for better styling in the portfolio website. |

</details>

<details closed><summary>hooks</summary>

| File                                                                                                       | Summary                                                                                                                                                                              |
| ---                                                                                                        | ---                                                                                                                                                                                  |
| [useScrollProgress.jsx](https://github.com/cortex225/portfolio-jl/blob/master/hooks/useScrollProgress.jsx) | Calculates scroll progress percentage in a custom React hook. Monitors scrolling events and updates the progress state based on scroll position relative to total scrollable height. |

</details>

---

##  Getting Started

**System Requirements:**

* **JavaScript**: `version x.y.z`

###  Installation

<h4>From <code>source</code></h4>

> 1. Clone the portfolio-jl repository:
>
> ```console
> $ git clone https://github.com/cortex225/portfolio-jl
> ```
>
> 2. Change to the project directory:
> ```console
> $ cd portfolio-jl
> ```
>
> 3. Install the dependencies:
> ```console
> $ npm install
> ```

###  Usage

<h4>From <code>source</code></h4>

> Run portfolio-jl using the command below:
> ```console
> $ node app.js
> ```

###  Tests

> Run the test suite using the command below:
> ```console
> $ npm test
> ```

---

##  Project Roadmap

- [X] `► INSERT-TASK-1`
- [ ] `► INSERT-TASK-2`
- [ ] `► ...`

---

##  Contributing

Contributions are welcome! Here are several ways you can contribute:

- **[Report Issues](https://github.com/cortex225/portfolio-jl/issues)**: Submit bugs found or log feature requests for the `portfolio-jl` project.
- **[Submit Pull Requests](https://github.com/cortex225/portfolio-jl/blob/main/CONTRIBUTING.md)**: Review open PRs, and submit your own PRs.
- **[Join the Discussions](https://github.com/cortex225/portfolio-jl/discussions)**: Share your insights, provide feedback, or ask questions.

<details closed>
<summary>Contributing Guidelines</summary>

1. **Fork the Repository**: Start by forking the project repository to your github account.
2. **Clone Locally**: Clone the forked repository to your local machine using a git client.
   ```sh
   git clone https://github.com/cortex225/portfolio-jl
   ```
3. **Create a New Branch**: Always work on a new branch, giving it a descriptive name.
   ```sh
   git checkout -b new-feature-x
   ```
4. **Make Your Changes**: Develop and test your changes locally.
5. **Commit Your Changes**: Commit with a clear message describing your updates.
   ```sh
   git commit -m 'Implemented new feature x.'
   ```
6. **Push to github**: Push the changes to your forked repository.
   ```sh
   git push origin new-feature-x
   ```
7. **Submit a Pull Request**: Create a PR against the original project repository. Clearly describe the changes and their motivations.
8. **Review**: Once your PR is reviewed and approved, it will be merged into the main branch. Congratulations on your contribution!
</details>

<details closed>
<summary>Contributor Graph</summary>
<br>
<p align="center">
   <a href="https://github.com{/cortex225/portfolio-jl/}graphs/contributors">
      <img src="https://contrib.rocks/image?repo=cortex225/portfolio-jl">
   </a>
</p>
</details>

---

##  License

This project is protected under the [SELECT-A-LICENSE](https://choosealicense.com/licenses) License. For more details, refer to the [LICENSE](https://choosealicense.com/licenses/) file.

---

##  Acknowledgments

- List any resources, contributors, inspiration, etc. here.

[**Return**](#-overview)

---
