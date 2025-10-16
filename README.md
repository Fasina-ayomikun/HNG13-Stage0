# HNG 13 – Stage 0 Task: Testable Profile Card

This project is part of the **HNG 13** Stage 0 task.  
It showcases a responsive, accessible **Profile Card** built with semantic HTML, modern CSS, and a small JavaScript snippet.

---

## Live Demo

🔗 **Live Site:** [https://hng-13-stage0-fasina-ayomikun.vercel.app/](https://hng-13-stage0-fasina-ayomikun.vercel.app/)  
💻 **Repository:** [https://github.com/Fasina-ayomikun/HNG13-Stage0](https://github.com/Fasina-ayomikun/HNG13-Stage0)

---

## Project Structure

```

index.html    # Main HTML structure
style.css     # Styling (responsive + accessible)
app.js        # Handles current time (Date.now in ms)
profile.jpg   # Avatar image

```

---

## How to Run Locally

1. **Clone the repository**

   ```bash
   git clone https://github.com/Fasina-ayomikun/HNG13-Stage0.git
   cd HNG13-Stage0
   ```

2. **Open the project**

   - Simply double-click `index.html`, or
   - Run a local server:

     ```bash
     npx serve .
     ```

     Then open the shown URL (e.g., `http://localhost:3000`).

3. **Expected Output**

   - A profile card with avatar and bio
   - Current time displayed in milliseconds
   - Responsive layout on all screen sizes

---

## Automated Test IDs

All required `data-testid` attributes are implemented for automated grading:

| Element        | Test ID                  |
| -------------- | ------------------------ |
| Card container | `test-profile-card`      |
| User name      | `test-user-name`         |
| User role      | `test-user-role`         |
| Bio            | `test-user-bio`          |
| Avatar         | `test-user-avatar`       |
| Social links   | `test-user-social-links` |
| Hobbies        | `test-user-hobbies`      |
| Dislikes       | `test-user-dislikes`     |
| Current time   | `test-user-time`         |

---

## Time Logic

The current time in milliseconds is displayed using:

```js
const timeElement = document.querySelector('[data-testid="test-user-time"]');
const now = Date.now();
timeElement.textContent = now;
timeElement.setAttribute("datetime", new Date(now).toISOString());
```

This ensures the displayed value is within a reasonable delta of `Date.now()`.

---

## Accessibility Notes

- Semantic HTML: `<article>`, `<header>`, `<section>`, `<footer>`, `<nav>`, `<time>`
- Images include descriptive `alt` text
- Links are keyboard-focusable with visible `:focus` outlines
- Text wraps safely using `overflow-wrap: anywhere;`
- Fully navigable by keyboard

---

## Design & Responsiveness

- Responsive CSS built with Flexbox
- Scales up smoothly to desktop layouts
- Automatically wraps long text without breaking layout
- Fonts: _Poppins_ and _Montserrat_ from Google Fonts

---

## Notes for Reviewers / Testers

- Built with **pure HTML, CSS, and vanilla JS**
- No frameworks or libraries used
- Avatar image stored locally (`profile.jpg`)
- Works offline and loads instantly
- Accessibility-friendly structure and focus management

---

## Local Test Checklist

- [x] All required `data-testid` attributes present
- [x] Time equals `Date.now()` in milliseconds
- [x] Avatar loads correctly
- [x] Links open in a new tab
- [x] Layout stays responsive across mobile -> desktop

```

```
