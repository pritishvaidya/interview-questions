# SSR vs CSR rendering

Server fetches all data , creates mockup and sends to client

Sends initial HTML of JavaScript and Bootstrap the application

- Page transitions are slower

SSR + SPA

# Performance Optimisations

- Code Splitting
- Optimising images via lazy load
- Defer loading on non critical JS

# Page Load Speeds

- Largest Contentful Paint - Render time of largest image, text or video visible in viewport < 2.5s
- Interaction to next paint INP - Interactivity of page should be less than 200ms
- Cumulative Layout Shift - Unexpected layout shifts < 0.1s

