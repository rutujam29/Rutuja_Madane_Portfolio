# Rutuja Madane's Personal Portfolio

This repository hosts the source code for Rutuja Madane's personal portfolio website, designed to showcase her skills, projects, and professional experience as a Java and Spring Boot Developer.

## Table of Contents
- [Overview](#overview)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Development Process](#development-process)
- [Deployment Process](#deployment-process)
- [Challenges Faced & Solutions Implemented](#challenges-faced--solutions-implemented)
- [Deployed Website](#deployed-website)
- [Contact](#contact)

## Overview

This single-page portfolio provides a comprehensive look at Rutuja Madane's professional journey, including her profile summary, technical skills, and key projects. It is built to be responsive and accessible across various devices.

## Features

* **Home Section:** A welcoming introduction to Rutuja Madane.
* **About Me:** Detailed profile summary, work experience at Bank of America, and educational background.
* **Skills:** A curated list of technical proficiencies including Java, Spring Boot, ReactJS, MySQL, and more.
* **Projects:** Highlights significant projects like "Rental Hub," "Fleet Management System," and "Vehicle Ignition System using Fingerprint Sensor," with brief descriptions.
* **Contact:** A section to get in touch via GitHub, LinkedIn, Email, or a contact form.
* **Responsive Design:** Optimized for display on desktops, tablets, and mobile devices.

## Technologies Used

* **Frontend:**
    * HTML5 (Structure)
    * CSS3 (Styling, primarily via Tailwind CSS)
    * JavaScript (Client-side interactivity, minimal current use)
    * Tailwind CSS (Utility-first CSS framework for rapid styling)
* **Version Control & Hosting:**
    * Git
    * GitHub Pages

## Development Process

The portfolio was developed as a single-page application following a clean and modular section-based structure.

1.  **Initial Setup:**
    * Basic HTML5 boilerplate.
    * Integration of Inter font and Tailwind CSS CDN for styling.
2.  **Content Integration:**
    * Information from the provided resume (Rutuja_Madane_Resume.docx) was extracted and integrated into the respective sections (About Me, Skills, Projects). This included professional summary, work experience details, educational qualifications, and project descriptions.
3.  **Styling & Responsiveness:**
    * All styling was implemented using Tailwind CSS utility classes to ensure a modern look and responsive behavior across different screen sizes.
    * Custom CSS was added for smooth scrolling and to apply the Inter font globally.
4.  **Icon Implementation:**
    * Initially, Font Awesome CDN was attempted for social media icons. Due to parsing issues with long `integrity` attributes, this was replaced with custom inline SVG icons to ensure stability and reduce external dependencies.

## Deployment Process

The portfolio is deployed using GitHub Pages. The steps followed were:

1.  **Repository Creation:** A new public repository `Rutuja_Madane_Portfolio` was created on GitHub.
2.  **Local Git Initialization:**
    ```bash
    git init
    ```
3.  **Adding Files to Staging:** All project files were added to the Git staging area.
    ```bash
    git add .
    ```
4.  **Committing Changes:** The initial set of files was committed to the local repository.
    ```bash
    git commit -m "Initial portfolio commit"
    ```
5.  **Linking Local to Remote Repository:** The local repository was connected to the GitHub repository.
    ```bash
    git remote add origin [https://github.com/rutujam29/Rutuja_Madane_Portfolio.git](https://github.com/rutujam29/Rutuja_Madane_Portfolio.git)
    ```
6.  **Pushing to GitHub:** The local `main` branch was pushed to the remote GitHub repository.
    ```bash
    git push -u origin main
    ```
7.  **GitHub Pages Configuration:**
    * Navigated to the GitHub repository's `Settings` tab.
    * Selected `Pages` from the left sidebar.
    * Under "Build and deployment," chose "Deploy from a branch."
    * Selected the `main` branch and `/root` folder as the source.
    * Clicked "Save" to initiate the deployment.

## Challenges Faced & Solutions Implemented

Throughout the development and deployment process, two key challenges were encountered:

1.  **`eof-in-tag` Error with Font Awesome CDN:**
    * **Problem:** When attempting to include the Font Awesome CDN, a persistent `eof-in-tag` parsing error occurred, likely due to the extremely long `integrity` attribute causing issues with HTML parsing in the development environment.
    * **Solution:** To resolve this, the Font Awesome CDN link was completely removed. Instead, lightweight inline SVG icons were manually implemented for the GitHub, LinkedIn, and Email links in the contact section. This eliminated the external dependency and the parsing error.

2.  **`src refspec main does not match any` Error During `git push`:**
    * **Problem:** After committing changes, the initial `git push -u origin main` command failed with the error `src refspec main does not match any`. This indicated a mismatch between the local default branch name (`master`, which was Git's historical default) and the remote default branch name on GitHub (`main`, which is GitHub's current default).
    * **Solution:** The local branch was renamed from `master` to `main` using the command `git branch -M main`. After this renaming, the `git push -u origin main` command executed successfully, pushing the code to the correct branch on GitHub.

## Deployed Website

You can view the live portfolio website here:

[https://rutujam29.github.io/Rutuja_Madane_Portfolio/](https://rutujam29.github.io/Rutuja_Madane_Portfolio/)

*(Note: If you are reviewing this on GitHub, screenshots of the deployed website would typically be included here.)*

## Contact

Feel free to connect with Rutuja Madane through the following platforms:

* **Email:** [rutujamadane29@gmail.com](mailto:rutujamadane29@gmail.com)
* **LinkedIn:** [https://www.linkedin.com/in/rutuja-madane-3b5987216](https://www.linkedin.com/in/rutuja-madane-3b5987216)
* **GitHub:** [https://github.com/rutujam29](https://github.com/rutujam29)
