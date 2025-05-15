# Prompt for AI Coding Agent: Personal Portfolio Website

Hello! I'd like to create a new personal portfolio website to showcase my programming projects and resume. Please build this using the following technology stack, which is the same as a previous project of mine:

*   **Framework**: Next.js (App Router)
*   **Language**: TypeScript
*   **Styling**: Tailwind CSS
*   **Animations/Effects**: GSAP (if needed for other parts, but primarily for the background effect described below)
*   **Deployment Target**: Vercel (or similar, but design with Next.js best practices for serverless/edge deployment in mind)

## Core Requirements:

1.  **Sections:**
    *   **Hero Section:** A prominent section at the top. This is where the "Matrix-like raining code" background effect should be most visible. It should also include my name and a brief, compelling tagline (e.g., "Full-Stack Developer | Innovator | Problem Solver").
    *   **About Me:** A section detailing my background, skills, and passions.
    *   **Projects:** A section to showcase my programming projects. Each project should have:
        *   Title
        *   Short description
        *   Technologies used (e.g., icons or tags)
        *   Link to live demo (if available)
        *   Link to GitHub repository (if available)
        *   Optional: A small thumbnail or image.
    *   **Resume/CV:** A section where I can either embed my resume (e.g., from a PDF or Google Doc) or list out my experience, education, and skills in a structured format. Include a downloadable PDF version of my resume.
    *   **Contact:** A simple contact form (Name, Email, Message) or clear instructions on how to get in touch (e.g., email address, LinkedIn profile link).

2.  **Design & UX:**
    *   Modern, clean, and professional design.
    *   Responsive design that works well on desktop, tablet, and mobile devices.
    *   Smooth navigation and user experience.
    *   Good use of typography and whitespace.
    *   Dark mode is preferred as the default, but a light mode toggle would be a bonus if not too complex.

3.  **"Matrix-like Raining Code" Background Effect:**
    *   **Goal:** Implement a visually engaging background for the Hero section (and potentially subtly in other parts of the site, or as a page transition effect) that resembles the "digital rain" from The Matrix.
    *   **Implementation Research & Suggestion:**
        *   This effect is commonly achieved using HTML5 Canvas.
        *   **Approach:**
            1.  Create a full-screen (or section-specific) `<canvas>` element.
            2.  Use JavaScript to draw characters (alphanumeric, Katakana, or custom symbols) that "fall" down the screen.
            3.  Each "stream" of characters should have a slightly different speed and starting position.
            4.  The leading character in a stream is often brighter (e.g., white or light green), while the trailing characters fade out or have a darker shade of green.
            5.  Characters should be drawn repeatedly in an animation loop (e.g., using `requestAnimationFrame`).
            6.  The character set, colors (typically green hues), font size, and density of the rain should be configurable.
        *   **Libraries/Techniques:**
            *   **Plain JavaScript & Canvas API:** This is entirely doable with direct Canvas manipulation. Key functions include `getContext('2d')`, `fillRect` (for a fading effect on the canvas), `fillStyle`, `fillText`, `font`.
            *   **React & Canvas:** You can integrate a Canvas animation into a React component. Use a `ref` to access the canvas element and manage the animation logic within `useEffect` hooks (being careful with cleanup to avoid memory leaks).
            *   **GSAP for orchestration (Optional for this specific effect):** While GSAP is excellent for animations, the core raining effect is often more efficiently handled by directly manipulating the canvas in a tight loop. GSAP could be used for fading the canvas in/out or animating other elements around it.
            *   **Performance:** Ensure the animation is performant and doesn't hog CPU, especially on less powerful devices. Consider optimizing by only redrawing necessary parts of the canvas or adjusting the frame rate if needed.
        *   **Example Concepts (for search/inspiration):** "HTML5 Canvas Matrix rain", "JavaScript digital rain effect", "React canvas matrix animation". Many tutorials and open-source examples are available.

4.  **Content:**
    *   Please use placeholder text and images for now. I will provide the actual content for projects, resume, about me, etc., later.

5.  **Code Quality:**
    *   Well-structured, readable, and maintainable code.
    *   Use TypeScript effectively for type safety.
    *   Proper componentization.

## Initial Steps:

1.  Set up the Next.js project with TypeScript and Tailwind CSS.
2.  Implement the basic page structure with the defined sections.
3.  Focus on creating the "Matrix-like raining code" effect for the Hero section using HTML5 Canvas.
4.  Build out the layout for the other sections.

Please ask if you have any questions or need clarification on any part of this. I'm looking forward to seeing the result! 