# WBS Consultants Website - Features Documentation

## 🎨 Design Features

### Theme System

- **Dark Mode**: Deep navy background (#0A0E27) with vibrant teal accents (#00D9A3)
- **Light Mode**: Soft white background (#F8FAFC) with emerald accents (#059669)
- **Smooth Transitions**: 300ms ease transitions on all theme changes
- **Persistent Storage**: Theme preference saved in localStorage

### Visual Effects

- **Glassmorphism Cards**: Frosted glass effect with backdrop blur
- **Gradient Accents**: Green-to-blue gradients on CTAs and headers
- **Hover Animations**: Transform scale + shadow lift effects
- **Parallax Effects**: Animated background elements in hero section
- **Floating Animations**: Smooth up-and-down motion on decorative elements

## 📱 Responsive Design

### Mobile (< 640px)

- Hamburger menu with slide-in drawer animation
- Stacked service cards (1 column)
- Touch-friendly button sizes (min 44px)
- Optimized padding and spacing
- Full-width CTAs

### Tablet (640px - 1024px)

- 2-column service grid
- Side-by-side content layouts
- Adjusted font sizes
- Collapsible navigation

### Desktop (> 1024px)

- 3-column service grid
- Full navigation bar
- Large hero visuals
- Optimal reading width (max-w-7xl)

## 🎯 Interactive Features

### Navigation

- **Smooth Scroll**: Animated scroll to sections with offset
- **Active Link Highlighting**: Based on scroll position
- **Sticky Header**: Becomes frosted on scroll
- **Mobile Menu**: Slide-in animation with backdrop

### Animations

- **Fade-in on Scroll**: Framer Motion `whileInView` animations
- **Stagger Effects**: Sequential animation for service cards
- **Counter Animation**: CountUp.js for statistics
- **Hover Effects**: Scale, glow, and shadow transformations

### Components

#### Service Cards

- Icon with color transition on hover
- Lift effect (translateY -8px)
- Border glow on hover
- "Learn More" link with arrow animation

#### Testimonials Carousel

- Auto-play (5-second intervals)
- Manual navigation (prev/next buttons)
- Dot indicators for direct access
- Pause on interaction
- Smooth slide transitions

#### Contact Form

- Real-time validation
- Styled input fields with focus states
- Success message on submission
- Responsive layout

## 📊 Content Sections

### 1. Hero Section

- Full viewport height
- Animated gradient background
- Floating decorative elements
- Dual CTAs (Book Consultation + Explore Services)
- Scroll indicator

### 2. About Section

- Professional image with border glow
- Three role descriptions (Consultant, Analyst, Finance)
- Animated statistics counters
- Glassmorphism cards

### 3. Services Grid

- 11 service cards in 3-column grid
- Hover effects on each card
- Icon animations
- Direct links to detailed sections

### 4. Detailed Services (Expertise)

- Tabbed interface with 11 tabs
- Smooth content transitions
- Icon-labeled tabs
- Comprehensive descriptions
- Key responsibilities/benefits lists

### 5. Why Choose Us

- 4 highlight cards in 2x2 grid
- Checkmark icons
- Hover glow effects
- Value propositions

### 6. Testimonials

- 3 client success stories
- 5-star ratings
- Auto-rotating carousel
- Quote styling
- Client attribution

### 7. Contact CTA

- Gradient background banner
- Contact information with icons
- Functional contact form
- Multiple contact methods
- Location information

### 8. Footer

- 4-column layout
- Quick links
- Service links
- Social media icons
- Copyright and legal links

## 🔧 Technical Features

### Performance

- Code splitting with Vite
- Lazy loading for images
- Optimized bundle size
- Fast initial load time

### Accessibility

- Semantic HTML structure
- ARIA labels on interactive elements
- Keyboard navigation support
- Focus states on all interactive elements
- Alt text for images

### SEO

- Meta tags for social sharing
- Semantic heading hierarchy
- Descriptive page title
- Open Graph tags
- Twitter Card tags

### Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- CSS Grid and Flexbox
- ES6+ JavaScript features
- Fallbacks for older browsers

## 🎨 Color Palette

### Light Mode

```css
Background Primary: #F8FAFC
Background Secondary: #FFFFFF
Text Primary: #0F172A
Text Secondary: #475569
Accent Primary: #059669 (Emerald)
Accent Secondary: #3B82F6 (Blue)
```

### Dark Mode

```css
Background Primary: #0A0E27
Background Secondary: #141B3D
Text Primary: #FFFFFF
Text Secondary: #94A3B8
Accent Primary: #00D9A3 (Teal)
Accent Secondary: #6366F1 (Indigo)
```

## 📝 Typography

### Font Families

- **Headers**: Poppins (bold, modern)
- **Body**: Inter (clean, readable)
- **Accent/Numbers**: Montserrat

### Font Sizes

- H1: 3.5rem (mobile: 2.5rem)
- H2: 2.5rem (mobile: 2rem)
- H3: 1.875rem (mobile: 1.5rem)
- Body: 1rem
- Small: 0.875rem

## 🚀 Animation Timings

- **Theme Transition**: 300ms ease
- **Hover Effects**: 300ms cubic-bezier(0.4, 0, 0.2, 1)
- **Scroll Animations**: 600ms ease-in-out
- **Carousel Transition**: 500ms
- **Counter Animation**: 2500ms
- **Float Animation**: 3000ms infinite

## 📦 Component Architecture

### Reusable Components

- `ServiceCard`: Displays individual service with icon and description
- `AnimatedCounter`: Animated number counter with suffix
- `SectionHeader`: Consistent section titles with gradient text
- `ThemeToggle`: Sun/Moon icon toggle button

### Layout Components

- `Navbar`: Sticky navigation with theme toggle
- `Footer`: Multi-column footer with links

### Section Components

- `Hero`: Landing section with CTAs
- `About`: Company introduction with stats
- `Services`: Service grid overview
- `DetailedServices`: Tabbed detailed information
- `WhyChooseUs`: Value propositions
- `Testimonials`: Client success stories
- `ContactCTA`: Contact form and information

## 🎯 User Experience Features

1. **Smooth Navigation**: One-click access to any section
2. **Visual Feedback**: Hover states on all interactive elements
3. **Loading States**: Smooth transitions prevent jarring changes
4. **Error Handling**: Form validation with helpful messages
5. **Mobile-First**: Optimized for touch interactions
6. **Fast Performance**: Optimized assets and code splitting
7. **Accessibility**: Keyboard navigation and screen reader support
8. **Theme Persistence**: Remembers user's theme preference
