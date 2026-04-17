# Animation Guide - WBS Consultants Website

## Overview

This guide explains all the animations implemented in the WBS Consultants website and how to customize them.

## Animation Library

We use **Framer Motion** for all animations. It provides:

- Declarative animation syntax
- Gesture support (hover, tap, drag)
- Layout animations
- Scroll-triggered animations
- Spring physics

## Common Animation Patterns

### 1. Fade In on Scroll

```jsx
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const [ref, inView] = useInView({
  triggerOnce: true, // Animation happens only once
  threshold: 0.1, // Trigger when 10% visible
});

<motion.div
  ref={ref}
  initial={{ opacity: 0, y: 30 }}
  animate={inView ? { opacity: 1, y: 0 } : {}}
  transition={{ duration: 0.6 }}
>
  Content here
</motion.div>;
```

### 2. Stagger Children

```jsx
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2, // 0.2s delay between each child
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

<motion.div variants={containerVariants} initial="hidden" animate="visible">
  <motion.div variants={itemVariants}>Item 1</motion.div>
  <motion.div variants={itemVariants}>Item 2</motion.div>
  <motion.div variants={itemVariants}>Item 3</motion.div>
</motion.div>;
```

### 3. Hover Effects

```jsx
<motion.div
  whileHover={{
    scale: 1.05, // Grow by 5%
    y: -8, // Move up 8px
  }}
  whileTap={{ scale: 0.95 }} // Shrink when clicked
  transition={{ duration: 0.3 }}
>
  Hover me!
</motion.div>
```

### 4. Infinite Loop Animations

```jsx
<motion.div
  animate={{
    scale: [1, 1.2, 1],
    opacity: [0.3, 0.5, 0.3],
  }}
  transition={{
    duration: 8,
    repeat: Infinity,
    ease: "easeInOut",
  }}
>
  Floating element
</motion.div>
```

### 5. Accordion/Collapse Animation

```jsx
import { AnimatePresence } from "framer-motion";

<AnimatePresence>
  {isOpen && (
    <motion.div
      initial={{ height: 0, opacity: 0 }}
      animate={{ height: "auto", opacity: 1 }}
      exit={{ height: 0, opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      Collapsible content
    </motion.div>
  )}
</AnimatePresence>;
```

## Component-Specific Animations

### Hero Section

- **Background blobs**: Infinite scale/opacity loop (8-10s duration)
- **Floating icons**: Vertical movement (-10px to 10px)
- **Content**: Staggered fade-in with 0.2s delay between elements
- **Buttons**: Scale on hover (1.05x) and tap (0.95x)
- **Stats**: Fade in with delay

**Customization:**

```jsx
// Change animation speed
transition={{ duration: 1.2 }}  // Slower (default: 0.6)

// Change stagger delay
staggerChildren: 0.3  // Slower stagger (default: 0.2)
```

### Services Grid

- **Cards**: Fade in from bottom with stagger
- **Hover**: Lift up 8px with shadow increase
- **Icons**: Rotate 360° on hover
- **Gradient overlay**: Fade in on hover

**Customization:**

```jsx
// Change lift height
whileHover={{ y: -12 }}  // Lift more (default: -8)

// Change rotation
whileHover={{ rotate: 180 }}  // Half rotation (default: 360)
```

### Testimonials Carousel

- **Slide transition**: Horizontal slide (100px)
- **Stars**: Staggered scale-in (0.1s delay each)
- **Navigation**: Scale on hover (1.1x)
- **Dots**: Width expansion for active state

**Customization:**

```jsx
// Change slide direction
initial={{ opacity: 0, x: -100 }}  // Slide from left
exit={{ opacity: 0, x: 100 }}      // Exit to right

// Auto-play (add this to component)
useEffect(() => {
  const timer = setInterval(() => {
    nextTestimonial();
  }, 5000);  // Change every 5 seconds
  return () => clearInterval(timer);
}, [currentIndex]);
```

### Contact Form

- **Fields**: Sequential fade-in (0.1s delay each)
- **Submit button**: Scale on hover/tap
- **Success message**: Scale-in with spring physics
- **Background**: Floating gradient circles

**Customization:**

```jsx
// Change spring animation
transition={{ type: "spring", stiffness: 200, damping: 10 }}

// Adjust stiffness for bouncier effect
stiffness: 300  // More bouncy (default: 200)
```

## Performance Tips

### 1. Use `will-change` for Smooth Animations

```jsx
<motion.div style={{ willChange: "transform" }}>Animated content</motion.div>
```

### 2. Trigger Once for Better Performance

```jsx
const [ref, inView] = useInView({
  triggerOnce: true, // Don't re-animate on scroll up
});
```

### 3. Reduce Motion for Accessibility

```jsx
import { useReducedMotion } from "framer-motion";

const shouldReduceMotion = useReducedMotion();

<motion.div animate={shouldReduceMotion ? {} : { scale: 1.2 }}>
  Content
</motion.div>;
```

## Timing Functions (Easing)

### Available Easing Options

- `linear` - Constant speed
- `easeIn` - Slow start, fast end
- `easeOut` - Fast start, slow end (most natural)
- `easeInOut` - Slow start and end
- `circIn`, `circOut`, `circInOut` - Circular curves
- `backIn`, `backOut`, `backInOut` - Overshoot effect

**Example:**

```jsx
transition={{ duration: 0.6, ease: "easeOut" }}
```

## Animation Durations

### Recommended Durations

- **Micro-interactions** (hover, tap): 0.2-0.3s
- **Component entrance**: 0.5-0.8s
- **Page transitions**: 0.3-0.5s
- **Background decorations**: 8-12s (infinite)

## Customizing Colors

### Gradient Backgrounds

```jsx
// Change gradient colors
className = "bg-gradient-to-br from-blue-600 to-purple-700";

// Add more stops
className = "bg-gradient-to-br from-emerald-600 via-teal-600 to-blue-700";
```

### Hover Color Changes

```jsx
className = "hover:text-blue-600 dark:hover:text-blue-400";
```

## Debugging Animations

### 1. Slow Down All Animations

Add this to your component temporarily:

```jsx
<motion.div transition={{ duration: 2 }}>
  // 2 seconds instead of default
</motion.div>
```

### 2. Check Animation State

```jsx
<motion.div
  onAnimationStart={() => console.log("Animation started")}
  onAnimationComplete={() => console.log("Animation complete")}
>
  Content
</motion.div>
```

### 3. Disable Animations Temporarily

```jsx
<motion.div animate={false}>// No animations</motion.div>
```

## Common Issues & Solutions

### Issue: Animations not triggering on scroll

**Solution:** Check that `useInView` is properly set up:

```jsx
const [ref, inView] = useInView({
  triggerOnce: true,
  threshold: 0.1,
});

// Make sure ref is attached
<motion.div ref={ref}>
```

### Issue: Animations too fast/slow

**Solution:** Adjust duration:

```jsx
transition={{ duration: 0.8 }}  // Slower
transition={{ duration: 0.3 }}  // Faster
```

### Issue: Jerky animations

**Solution:** Use GPU-accelerated properties:

```jsx
// Good (GPU accelerated)
animate={{ x: 100, scale: 1.2, opacity: 0.5 }}

// Avoid (not GPU accelerated)
animate={{ width: "100px", height: "100px" }}
```

### Issue: Layout shift during animation

**Solution:** Use `layout` prop:

```jsx
<motion.div layout>Content that changes size</motion.div>
```

## Advanced Techniques

### 1. Gesture-Based Animations

```jsx
<motion.div drag dragConstraints={{ left: 0, right: 300 }} dragElastic={0.2}>
  Draggable element
</motion.div>
```

### 2. Path Animations (SVG)

```jsx
<motion.path
  d="M0,0 L100,100"
  initial={{ pathLength: 0 }}
  animate={{ pathLength: 1 }}
  transition={{ duration: 2 }}
/>
```

### 3. Scroll-Linked Animations

```jsx
import { useScroll, useTransform } from "framer-motion";

const { scrollYProgress } = useScroll();
const scale = useTransform(scrollYProgress, [0, 1], [1, 1.5]);

<motion.div style={{ scale }}>Scales as you scroll</motion.div>;
```

## Resources

- [Framer Motion Docs](https://www.framer.com/motion/)
- [Animation Examples](https://www.framer.com/motion/examples/)
- [Easing Functions](https://easings.net/)

## Support

For questions about animations, check the component files:

- `Hero.jsx` - Hero animations
- `Services.jsx` - Service grid animations
- `Testimonials.jsx` - Carousel animations
- `ContactCTA.jsx` - Form animations
