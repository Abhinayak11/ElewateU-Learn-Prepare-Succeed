# Elevate You: Learn, Prepare, Succeed

This is a Next.js web application bootstrapped with Firebase Studio, designed to help users learn new skills, prepare for job applications, and find career opportunities.

## Features

*   **Learning Roadmaps:** Curated learning paths for various tech fields (AI, ML, Full Stack, Data Science).
*   **Resume Builder:** Interactive tool to create ATS-friendly resumes with PDF download.
*   **Job Recommendations:** AI-powered job suggestions based on user skills (currently focused on India).
*   **Mock Interviews:** Simulated interview sessions with AI feedback.
*   **Community Forum:** A place for users to connect and share knowledge.
*   **Blog:** Articles and insights on career development and technology.

## Getting Started

1.  **Install Dependencies:**
    ```bash
    npm install
    # or
    yarn install
    ```

2.  **Environment Variables:**
    Create a `.env.local` file in the root directory and add your environment variables, particularly for Genkit (e.g., `GOOGLE_GENAI_API_KEY`):
    ```env
    GOOGLE_GENAI_API_KEY=YOUR_API_KEY_HERE
    ```

3.  **Run Development Server:**
    ```bash
    npm run dev
    # or
    yarn dev
    ```
    The application will be available at [http://localhost:9002](http://localhost:9002).

4.  **(Optional) Run Genkit Development Server:**
    To test AI flows locally with the Genkit CLI:
    ```bash
    npm run genkit:dev
    # or for watching changes:
    npm run genkit:watch
    ```

## Tech Stack

*   **Frontend:** Next.js (App Router), React, TypeScript, Tailwind CSS, Shadcn/ui
*   **AI:** Genkit (Google AI)
*   **Styling:** Tailwind CSS, Shadcn/ui
*   **Resume Export:** jsPDF, html2canvas

## Project Structure

*   `src/app/`: Next.js App Router pages and layouts.
    *   `(main)`: Main application routes with shared layout.
*   `src/components/`: Reusable UI components.
    *   `layout/`: Components like Navbar and Footer.
    *   `ui/`: Shadcn/ui components.
*   `src/ai/`: Genkit configuration and AI flows.
    *   `flows/`: Specific AI agent implementations (job recommendations, mock interviews).
*   `src/lib/`: Utility functions.
*   `src/hooks/`: Custom React hooks.
*   `src/services/`: Mock services (e.g., job listings).
*   `public/`: Static assets.
*   `styles/`: Global CSS (via `globals.css`).
# Elevate-You-Learn-Prepare-Succeed
# Elevate-You-Learn-Prepare-Succeed
