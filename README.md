# 👨‍💻 Backend Developer Portfolio Website

A modern, responsive portfolio website designed for backend-focused software development students. Built with **pure HTML, CSS, and JavaScript** — no frameworks required!

## 🎯 Features

### ✨ Modern Design
- **Clean & Professional**: Dark/Light theme toggle with smooth transitions
- **Developer-Focused**: Code-inspired design elements and animations
- **Fully Responsive**: Mobile-first approach with breakpoints at 768px and 480px
- **Smooth Animations**: Scroll-triggered reveals, parallax effects, and fade-ins

### 🎨 Key Sections

1. **Hero Section** - Bold introduction with animated code block
2. **About Section** - Personal story with statistics cards
3. **Projects Section** - 3 backend project cards with tech stacks
4. **Skills Section** - 4 skill categories with animated progress bars
5. **Contact Section** - Email, GitHub, LinkedIn links
6. **Navigation** - Fixed navbar with smooth scrolling and mobile hamburger menu
7. **Footer** - Quick links and copyright

### 🛠️ Technologies Used

**Frontend:**
- HTML5 (Semantic markup)
- CSS3 (Grid, Flexbox, CSS Variables, Animations)
- Vanilla JavaScript (No dependencies)
- FontAwesome 6.4.0 (Icons via CDN)

**Features:**
- Dark/Light theme (localStorage persistence)
- Mobile-responsive hamburger menu
- Smooth scrolling navigation
- Intersection Observer for scroll animations
- Skill progress bars with animations
- Email copy-to-clipboard functionality
- Keyboard accessibility

## 📁 File Structure

```
portfolio/
├── index.html          # Main HTML file with all sections
├── styles.css          # Complete responsive CSS with themes
├── script.js           # JavaScript for interactivity
└── README.md          # This file
```

## 🚀 Getting Started

### Prerequisites
- A modern web browser (Chrome, Firefox, Safari, Edge)
- Basic text editor or IDE
- Git (for version control)

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/KaterynaKon/Simple-Application.git
   cd Simple-Application
   ```

2. **Open in browser:**
   - Simply open `index.html` in your web browser
   - Or use a local server:
     ```bash
     python -m http.server 8000
     # Then visit http://localhost:8000
     ```

## 🎨 Customization Guide

### 1. Update Your Information

**In `index.html`:**

```html
<!-- Change your name in hero section -->
<h1 class="hero-title">
    Hi, I'm <span class="highlight">YOUR_NAME</span> — backend-focused dev student
</h1>

<!-- Update contact links -->
<a href="mailto:your.email@example.com" class="contact-card">
    <i class="fas fa-envelope"></i>
    <h3>Email</h3>
    <p>your.email@example.com</p>
</a>

<a href="https://github.com/YourGitHub" target="_blank" class="contact-card">
    <i class="fab fa-github"></i>
    <h3>GitHub</h3>
    <p>github.com/YourGitHub</p>
</a>

<a href="https://linkedin.com/in/yourprofile" target="_blank" class="contact-card">
    <i class="fab fa-linkedin"></i>
    <h3>LinkedIn</h3>
    <p>linkedin.com/in/yourprofile</p>
</a>
```

### 2. Add Your Projects

Replace the project cards with your actual projects:

```html
<div class="project-card">
    <div class="project-header">
        <i class="fas fa-database"></i>
        <h3>Your Project Name</h3>
    </div>
    <p class="project-description">
        Your project description here...
    </p>
    <div class="tech-stack">
        <span class="tech-tag">Python</span>
        <span class="tech-tag">Django</span>
        <span class="tech-tag">PostgreSQL</span>
    </div>
    <div class="project-links">
        <a href="https://github.com/YourGitHub/project" target="_blank" class="project-link">
            <i class="fas fa-github"></i> View Code
        </a>
        <a href="https://your-demo-link.com" class="project-link">
            <i class="fas fa-external-link-alt"></i> Demo
        </a>
    </div>
</div>
```

### 3. Update About Section

Customize the about text and statistics:

```html
<p>
    Your unique story and background as a backend developer...
</p>

<!-- Update statistics -->
<div class="stat-card">
    <h3>2</h3>
    <p>Years of Study</p>
</div>
```

### 4. Customize Colors

Edit CSS variables in `styles.css`:

```css
:root {
    --primary-color: #6366f1;        /* Primary accent (blue) */
    --secondary-color: #ec4899;      /* Secondary accent (pink) */
    /* ... other variables */
}
```

## 🌓 Theme System

The portfolio includes a built-in theme system:

- **Dark Theme** (Default): Professional dark background with light text
- **Light Theme**: Clean white background with dark text

Theme preference is saved to localStorage and persists across sessions.

### Toggle Theme Button
- Located in the navbar (top-right)
- Click to switch between themes
- Uses FontAwesome icons: Moon (dark) ↔ Sun (light)

## 📱 Responsive Breakpoints

- **Desktop**: Full layout (1200px+)
- **Tablet**: Medium layout (769px - 1199px)
- **Mobile**: Optimized layout (<768px)
  - Hamburger menu navigation
  - Stacked layout for sections
  - Adjusted typography

## ♿ Accessibility Features

- Semantic HTML5 structure
- Keyboard navigation support
- Focus indicators for tab navigation
- ARIA-friendly markup
- Sufficient color contrast ratios
- Screen reader compatible

## 🔧 JavaScript Functions

### Theme Management
```javascript
// Toggle between dark and light themes
// Persists preference in localStorage
themeToggle.addEventListener('click', () => { ... });
```

### Mobile Menu
```javascript
// Hamburger menu toggle
hamburger.addEventListener('click', () => { ... });
```

### Smooth Scrolling
```javascript
// Smooth scroll to sections when clicking nav links
document.querySelectorAll('a[href^="#"]').forEach(anchor => { ... });
```

### Scroll Animations
```javascript
// Intersection Observer for scroll-triggered animations
const observer = new IntersectionObserver((entries) => { ... });
```

### Active Link Highlighting
```javascript
// Updates active nav link based on scroll position
window.addEventListener('scroll', () => { ... });
```

## 🚀 Deployment

### GitHub Pages (Free)

1. **Push to GitHub:**
   ```bash
   git add .
   git commit -m "Deploy portfolio"
   git push origin main
   ```

2. **Enable GitHub Pages:**
   - Go to repository Settings
   - Scroll to "GitHub Pages"
   - Select branch: `main`
   - Select folder: `/ (root)`
   - Save

3. **Your site is live at:** `https://KaterynaKon.github.io/Simple-Application/`

### Netlify

1. **Connect GitHub repository**
2. **Build settings:**
   - Build command: (leave empty)
   - Publish directory: `.`
3. **Deploy**

### Vercel

1. **Import GitHub project**
2. **Deploy**
3. **Get custom domain**

## 📊 Performance Optimization

- **Lazy loading**: Images with `data-src` attribute
- **CSS optimization**: Minify for production
- **JavaScript debouncing**: For scroll events
- **Intersection Observer**: Efficient scroll animations
- **No external JS frameworks**: Reduces bundle size

## 🔍 SEO Optimization Tips

1. **Add meta tags to `index.html`:**
   ```html
   <meta name="description" content="Backend developer portfolio - Python, Django, SQL, APIs">
   <meta name="keywords" content="backend, python, django, developer, portfolio">
   <meta name="author" content="Your Name">
   <meta property="og:title" content="Your Portfolio">
   <meta property="og:description" content="Backend Developer Portfolio">
   ```

2. **Update social media links** with your actual profiles
3. **Add sitemap** for better indexing
4. **Use descriptive project names** and descriptions

## 📝 Customization Checklist

- [ ] Update name in hero section
- [ ] Change project information and links
- [ ] Update contact information (email, GitHub, LinkedIn)
- [ ] Modify about section text
- [ ] Update statistics/achievements
- [ ] Adjust color scheme if desired
- [ ] Test dark/light theme toggle
- [ ] Test on mobile devices
- [ ] Test all external links
- [ ] Deploy to GitHub Pages or preferred platform

## 🎓 Learning Resources

- [MDN Web Docs - CSS Grid](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout)
- [MDN Web Docs - Flexbox](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout)
- [Intersection Observer API](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API)
- [CSS Variables](https://developer.mozilla.org/en-US/docs/Web/CSS/--*)
- [FontAwesome Icons](https://fontawesome.com/icons)

## 🐛 Troubleshooting

### Theme not persisting?
- Check browser localStorage is enabled
- Clear browser cache and try again

### Hamburger menu not appearing on mobile?
- Check viewport meta tag: `<meta name="viewport" content="width=device-width, initial-scale=1.0">`
- Test in browser DevTools mobile view

### Animations not smooth?
- Check browser hardware acceleration is enabled
- Test on different browsers

### Links not working?
- Verify URLs are correct and accessible
- For email: use `mailto:email@example.com` format
- For external links: include `target="_blank"`

## 📄 License

This project is open source and available under the MIT License.

## 🤝 Contributing

Feel free to fork, modify, and use this portfolio template for your own use case!

## 💬 Support

For questions or issues:
1. Check the troubleshooting section
2. Review the code comments
3. Check browser DevTools console for errors
4. Open an issue on GitHub

---

## 📞 Contact

**Kateryna Kon**
- 📧 Email: kateryna@example.com
- 🐙 GitHub: [github.com/KaterynaKon](https://github.com/KaterynaKon)
- 💼 LinkedIn: [linkedin.com/in/kateryna](https://linkedin.com/in/kateryna)

---

**Made with ❤️ for backend developers** 🚀

Last updated: 2026-05-12
