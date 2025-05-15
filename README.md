# My Portfolio Website

This is a personal portfolio website built to showcase my skills, projects, and experience. It features a modern design with a dynamic "Matrix-like raining code" effect in the hero section.

## Key Technologies Used

*   **Framework:** [Next.js](https://nextjs.org/) (App Router)
*   **Language:** [TypeScript](https://www.typescriptlang.org/)
*   **Styling:** [Tailwind CSS](https://tailwindcss.com/)
*   **UI/Effects:** Canvas API (for Matrix rain)

## Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

*   Node.js (v18.x or later recommended)
*   npm or yarn

### Installation & Setup

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/nwavery/MyPortfolioWebsite.git 
    cd MyPortfolioWebsite/my-portfolio 
    ```
    *(Replace `https://github.com/nwavery/MyPortfolioWebsite.git` with your actual repository URL if different)*

2.  **Install NPM packages:**
    ```bash
    npm install
    ```
    or if you use yarn:
    ```bash
    yarn install
    ```

3.  **Run the development server:**
    ```bash
    npm run dev
    ```
    or
    ```bash
    yarn dev
    ```
    Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Features

*   **Hero Section:** Dynamic Matrix-like code rain effect.
*   **About Me:** A brief introduction.
*   **My Projects:** Showcase of key projects with descriptions, technologies used, and links to repositories/live demos.
*   **Resume & Experience:** Detailed work experience, education, and key skills. Downloadable resume.
*   **Contact:** Links to get in touch.
*   **Responsive Design:** Adapts to various screen sizes.

## Customization

*   **Project Data:** Update `src/components/Projects.tsx` to modify project details.
*   **Resume Data:** The resume content (skills, experience, education) is primarily managed in `src/components/Resume.tsx`. The downloadable resume file is located in the `public` directory.
*   **Matrix Rain Effect:** Parameters for the Matrix rain (speed, characters, colors, font size) can be adjusted in `src/components/MatrixRain.tsx`.
*   **Styling:** Tailwind CSS utility classes are used throughout the components. Global styles are in `src/app/globals.css`. 