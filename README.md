# Linkframe Technologies - Corporate Website

## 🎯 Project Overview

Building a modern, sleek, and professional corporate website for **Linkframe Technologies**. The design must feel human-crafted, intentional, and premium — not generic or AI-generated.

**Company**: Linkframe Technologies  
**Tagline**: Integrating Systems, Software, and Visual Creativity  
**Target**: Premium SaaS-style website (think Stripe, Linear, modern tech agencies)

---

## 🎨 Brand Identity

### Core Services
- **Software Engineering** - Custom web apps and systems
- **Information Management Systems (IMS)** - Database systems and integration
- **Visual Effects (VFX)** - Video editing and motion graphics

### Target Audience
- Schools (management systems)
- SMEs and startups
- NGOs and organizations
- Content creators and digital brands

---

## 🎨 Design System

### Color Palette
```css
/* Primary Colors */
--orange: #F26622;        /* CTAs, highlights, accents */
--deep-blue: #004D66;     /* Secondary accent */
--light-grey: #EBEBEB;    /* Background contrast */

/* Base Theme */
--bg-dark: #0a0a0a;       /* Near black background */
--text-light: #f5f5f5;    /* Off-white text */
--text-muted: #a1a1aa;    /* Muted text */
```

### Typography
```css
/* Headings */
font-family: 'Fraunces', serif;
font-weight: 600-700;
letter-spacing: -0.02em;

/* Body */
font-family: 'Inter', sans-serif;
font-weight: 400;
line-height: 1.6;
```

### Spacing System
- Use 4px or 8px scale: `4, 8, 12, 16, 20, 24, 32, 40, 48, 64, 80, 96`
- Consistent padding and margins
- Grid-based alignment

### Design Principles
- **Dark, minimal, refined** tech aesthetic
- **Whitespace emphasis** - less but better
- **Subtle animations** - smooth, not flashy
- **Strong typography hierarchy**
- **Intentional section transitions**

---

## 🏗️ Tech Stack

### Frontend (Already Setup)
- ✅ **React.js** (v19.2.5) - Main framework
- 🔄 **Tailwind CSS** - Utility-first styling (to be added)
- 🔄 **React Router** - Client-side routing (to be added)
- 🔄 **Axios** - HTTP client (to be added)
- 🔄 **Framer Motion** - Animations (optional, to be added)

### Backend (To be created)
- **Laravel** - REST API
- **MySQL** - Database

### Architecture Flow
```
React Frontend → Axios → Laravel API → MySQL
```

---

## 📁 Website Structure

### 1. Home Page (`/`)
- **Hero Section**: Strong headline + CTA
- **Services Overview**: 3-4 service blocks
- **Why Choose Us**: Key differentiators
- **Featured Projects**: 3-6 project showcase
- **Process Section**: 4-step timeline
- **Call-to-Action**: Conversion focus

### 2. About Page (`/about`)
- Company story
- Mission & vision
- Core values
- Clean, text-focused layout

### 3. Services Page (`/services`)
- **Software Development**: Web apps, custom systems
- **VFX & Media**: Video editing, motion graphics
- **IMS Solutions**: Database systems, integration

### 4. Portfolio Page (`/portfolio`)
- Project grid with category filters
- Individual project detail pages
- Smooth filtering animations

### 5. Team Page (`/team`)
- Team categories (Software, VFX, IMS)
- Member cards with bios and skills
- Leadership highlights

### 6. Contact Page (`/contact`)
- Clean contact form
- Contact information
- WhatsApp integration

---

## 🔧 Development Setup

### Prerequisites
```bash
# Node.js (v16+)
# npm or yarn
```

### Frontend Setup (Linkframetech folder)
```bash
cd Linkframetech

# Install additional dependencies
npm install tailwindcss postcss autoprefixer
npm install react-router-dom axios
npm install framer-motion  # Optional for animations

# Initialize Tailwind CSS
npx tailwindcss init -p
```

### Backend Setup (To be created)
```bash
# Create Laravel project
composer create-project laravel/laravel linkframe-api
cd linkframe-api

# Setup database
php artisan migrate
```

---

## 📊 Database Structure

### Services Table
```sql
CREATE TABLE services (
    id BIGINT PRIMARY KEY AUTO_INCREMENT,
    title VARCHAR(255) NOT NULL,
    description TEXT,
    icon VARCHAR(255),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

### Projects Table
```sql
CREATE TABLE projects (
    id BIGINT PRIMARY KEY AUTO_INCREMENT,
    title VARCHAR(255) NOT NULL,
    category ENUM('software', 'vfx', 'ims') NOT NULL,
    description TEXT,
    image VARCHAR(255),
    tech_stack JSON,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

### Team Members Table
```sql
CREATE TABLE team_members (
    id BIGINT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
    role VARCHAR(255) NOT NULL,
    category ENUM('software', 'vfx', 'ims') NOT NULL,
    bio TEXT,
    image VARCHAR(255),
    skills JSON,
    social_links JSON,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

### Contacts Table
```sql
CREATE TABLE contacts (
    id BIGINT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    message TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

---

## 🔌 API Endpoints

### Laravel API Routes
```php
// routes/api.php
Route::get('/services', [ServiceController::class, 'index']);
Route::get('/projects', [ProjectController::class, 'index']);
Route::get('/projects/{id}', [ProjectController::class, 'show']);
Route::get('/team', [TeamController::class, 'index']);
Route::post('/contact', [ContactController::class, 'store']);
```

---

## 🎭 Component Architecture

### Folder Structure
```
src/
├── components/
│   ├── common/
│   │   ├── Header.js
│   │   ├── Footer.js
│   │   ├── Button.js
│   │   └── Card.js
│   ├── sections/
│   │   ├── Hero.js
│   │   ├── Services.js
│   │   ├── Projects.js
│   │   └── Contact.js
├── pages/
│   ├── Home.js
│   ├── About.js
│   ├── Services.js
│   ├── Portfolio.js
│   ├── Team.js
│   └── Contact.js
├── hooks/
├── utils/
├── styles/
└── assets/
```

---

## 🎨 UI Guidelines

### Animation Principles
- **Subtle hover effects**: `scale(1.02)`, `translateY(-2px)`
- **Smooth transitions**: `transition-all duration-300 ease-out`
- **Page transitions**: Fast and subtle
- **Loading states**: Skeleton loaders

### Responsive Design
- **Mobile-first approach**
- **Breakpoints**: `sm: 640px`, `md: 768px`, `lg: 1024px`, `xl: 1280px`
- **Grid system**: CSS Grid + Flexbox

### Accessibility
- Semantic HTML
- ARIA labels
- Keyboard navigation
- Color contrast compliance

---

## 🚀 Development Phases

### Phase 1: Frontend Foundation
1. ✅ React setup (completed)
2. 🔄 Install and configure Tailwind CSS
3. 🔄 Setup React Router
4. 🔄 Create component structure
5. 🔄 Implement design system

### Phase 2: Core Pages
1. 🔄 Home page with hero and sections
2. 🔄 About page
3. 🔄 Services page
4. 🔄 Contact page

### Phase 3: Dynamic Content
1. 🔄 Portfolio page with filtering
2. 🔄 Team page
3. 🔄 Project detail pages

### Phase 4: Backend Integration
1. 🔄 Laravel API setup
2. 🔄 Database migrations
3. 🔄 API endpoints
4. 🔄 Frontend-backend integration

### Phase 5: Polish & Deploy
1. 🔄 Animations and interactions
2. 🔄 Performance optimization
3. 🔄 SEO implementation
4. 🔄 Testing and deployment

---

## 📋 Quality Checklist

### Design Quality
- [ ] Feels premium, not template-like
- [ ] Consistent spacing (4px/8px scale)
- [ ] Strong typography hierarchy
- [ ] Intentional color usage
- [ ] Smooth, subtle animations

### Code Quality
- [ ] Clean, modular components
- [ ] Reusable design system
- [ ] Proper error handling
- [ ] Performance optimized
- [ ] Fully responsive

### Security
- [ ] Laravel validation
- [ ] CSRF protection
- [ ] Rate limiting
- [ ] Input sanitization

---

## 🎯 Success Metrics

The final website should:
1. **Look premium** - comparable to Stripe, Linear, modern SaaS sites
2. **Feel intentional** - every element has purpose
3. **Load fast** - optimized performance
4. **Convert well** - clear CTAs and user flow
5. **Scale easily** - modular, maintainable code

---

## 🔮 Future Enhancements

- Admin dashboard for content management
- Blog system
- Client portal
- Payment integration
- Advanced analytics

---

**Remember**: Every spacing, color, and interaction must feel intentional. The goal is a premium, human-crafted experience that builds trust and converts visitors into clients.