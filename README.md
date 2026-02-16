EXP - 1 This experiment focuses on optimizing Single Page Application (SPA) performance by implementing Route-Based Lazy Loading, a technique that delays the loading of specific page components until a user actually navigates to them. By using tools like react-router-dom along with React.lazy and the <Suspense> component, the application splits its code into smaller chunks, significantly reducing the initial bundle size and speeding up the first-page load. Instead of downloading the entire website at once, the browser only fetches the code necessary for the current view, providing a faster, more efficient user experience.

![Experiment 1 Screenshot](./Screenshot%202026-02-16%20141104.png)


EXP - 2 This experiment focuses on optimizing frontend performance in a Single Page Application by using React.lazy and Suspense to implement component-level lazy loading. The core objective is to reduce the initial bundle size and speed up page load times by ensuring that components are only fetched and loaded when they are actually needed. The process involves creating multiple components, importing them dynamically using React.lazy(), and wrapping them within a <Suspense> boundary to display a fallback UI (like a loading state) while the component is being retrieved. To perform this experiment, you need a development environment consisting of Node.js, React, React Router DOM, a code editor like VS Code, and a web browser.

![Experiment 2 Results](./Screenshot%202026-02-16%20141124.png)

![Experiment 3 Results](./Screenshot%202026-02-16%20141313.png)