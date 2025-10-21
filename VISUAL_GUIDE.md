# 🎨 VISUAL GUIDE - Component Structure Comparison

## 📐 HERO SECTION LAYOUT

### ❌ CURRENT (Website - WRONG)
```
┌──────────────────────────────────────┐
│  Container (py-12)                   │
├──────────────────────────────────────┤
│                                      │
│  Grid: 3 Columns                     │
│  ┌──────────┐ ┌──────────┐ ┌─────────┐
│  │          │ │          │ │         │
│  │ Card 1   │ │ Card 2   │ │ Card 3  │
│  │          │ │          │ │         │
│  └──────────┘ └──────────┘ └─────────┘
│                                      │
└──────────────────────────────────────┘

PROBLEM: 
- Hanya features, tidak ada hero atas
- Tidak ada headline, tagline, buttons
- Features terpisah dari hero concept
- Missing 75% dari design
```

### ✅ CORRECT (Panduan - RIGHT)
```
┌──────────────────────────────────────┐
│ HERO SECTION (py-16 md:py-24)        │
│                                      │
│ Background:                          │
│ - Gradient: green→emerald→teal       │
│ - Image overlay (biogas plant)       │
│ - Text overlay (relative z-10)       │
├──────────────────────────────────────┤
│                                      │
│ Content (max-w-4xl mx-auto):         │
│                                      │
│ [Badge with Leaf icon]               │
│ "Infinity Hackathon 2025"            │
│                                      │
│ [H1 - text-5xl md:text-6xl]          │
│ "EcoMeter"                           │
│                                      │
│ [P - text-xl md:text-2xl]            │
│ "DeFi for Creative Green Economy"    │
│                                      │
│ [P - text-lg]                        │
│ "Sistem IoT berbasis blockchain"     │
│                                      │
│ [Button Row]                         │
│ [Mulai] [Pelajari Lebih Lanjut]      │
│                                      │
├──────────────────────────────────────┤
│ Feature Cards Grid (3 cols, gap-4):  │
│ ┌──────────┐ ┌──────────┐ ┌─────────┐│
│ │ IoT 📊   │ │ Eco 💚   │ │ Carbon🌱││
│ │ (rotate) │ │ (rotate) │ │ (rotate)││
│ └──────────┘ └──────────┘ └─────────┘│
│                                      │
└──────────────────────────────────────┘

CORRECT STRUCTURE:
✅ Full background with image & gradient
✅ Headline + tagline + description
✅ Call-to-action buttons
✅ Feature cards as part of hero
✅ Proper animation timing
✅ Complete hero experience
```

---

## 🔄 ANIMATION TIMING COMPARISON

### ❌ CURRENT (Website)
```
Motion.div render:

features.map():
  Card 1: ────────── delay: 0
  Card 2: ───────────── delay: 0.1
  Card 3: ───────────── delay: 0.1

PROBLEM:
- Simple animation
- All cards delay same (0.1)
- No staggered timing
- Not matching Panduan
```

### ✅ CORRECT (Panduan)
```
Motion.div render with STAGGERED DELAYS:

Badge:         ────│ delay: 0
               
H1:            ────│ delay: 0.2
               
Subtitle:      ────│ delay: 0.3
               
Description:   ────│ delay: 0.4
               
Buttons:       ────│ delay: 0.5
               
Card 1:        ────│ delay: 0.6
Card 2:        ────│ delay: 0.7
Card 3:        ────│ delay: 0.8

CORRECT STAGGERED:
✅ Each element has unique delay
✅ Creates cascade animation
✅ Professional feel
✅ Matches Panduan exactly
```

---

## 📋 COMPONENT STRUCTURE

### Hero Component

```tsx
<Hero>
  │
  ├─ Background Section
  │   ├─ ImageWithFallback (absolute, opacity-20)
  │   └─ z-10 overlay
  │
  ├─ Content Wrapper (max-w-4xl mx-auto text-center)
  │   │
  │   ├─ Motion.div (Badge)
  │   │   └─ Leaf icon + text
  │   │
  │   ├─ Motion.h1
  │   │   └─ "EcoMeter"
  │   │
  │   ├─ Motion.p (tagline)
  │   │   └─ "DeFi for Creative Green Economy"
  │   │
  │   ├─ Motion.p (description)
  │   │   └─ "Sistem IoT berbasis blockchain..."
  │   │
  │   ├─ Motion.div (buttons container)
  │   │   ├─ Button (white bg, green text)
  │   │   │   └─ "Mulai Monitoring" + ArrowRight icon
  │   │   │
  │   │   └─ Button (outline, white border)
  │   │       └─ "Pelajari Lebih Lanjut"
  │   │
  │   └─ Grid (3 columns, gap-4, pt-12)
  │       │
  │       ├─ Motion.div (Card 1)
  │       │   └─ Feature: IoT Monitoring
  │       │       - Icon rotate on hover
  │       │       - Card with bg-white/10, backdrop blur
  │       │
  │       ├─ Motion.div (Card 2)
  │       │   └─ Feature: EcoToken Rewards
  │       │
  │       └─ Motion.div (Card 3)
  │           └─ Feature: Carbon Credits
```

### Login Component

```tsx
<Login>
  │
  ├─ Full Screen Container (min-h-screen gradient)
  │   │
  │   └─ Motion.div (center content, w-full max-w-md)
  │       │
  │       ├─ Header Section
  │       │   ├─ Motion.div (Logo/Icon)
  │       │   ├─ Heading
  │       │   └─ Subheading
  │       │
  │       └─ Card (border-green-200, shadow-lg)
  │           │
  │           ├─ CardHeader
  │           │   ├─ Icon + Title
  │           │   └─ Description
  │           │
  │           └─ CardContent
  │               │
  │               ├─ Form (space-y-4)
  │               │   │
  │               │   ├─ Email Input
  │               │   │   ├─ Label
  │               │   │   ├─ Mail Icon
  │               │   │   └─ Input (pl-10)
  │               │   │
  │               │   ├─ Password Input
  │               │   │   ├─ Label
  │               │   │   ├─ Lock Icon
  │               │   │   ├─ Input (pl-10 pr-10)
  │               │   │   └─ Eye/EyeOff Toggle
  │               │   │
  │               │   └─ Submit Button (w-full)
  │               │
  │               ├─ Divider with "Atau" text ✅ NEED TO ADD
  │               │
  │               ├─ Demo Button ✅ NEED TO ADD
  │               │   └─ variant="outline"
  │               │
  │               └─ Register Link
  │                   └─ "Daftar sekarang"
```

---

## 🎨 COLOR PALETTE & STYLING

### Hero Gradient Background
```
from-green-600 via-emerald-600 to-teal-600
    │            │              │
    └─ Primary   └─ Mid tone    └─ Accent

Combined creates: Rich green gradient
Overlay: text-white for contrast
```

### Feature Card Styling
```
bg-white/10              ← Semi-transparent white
backdrop-blur-sm         ← Frosted glass effect
border-white/20          ← Subtle border
p-6                      ← Internal padding
text-center              ← Centered content

Hover Effects:
hover:y-[-5px]           ← Lift on hover
whileHover={{ 
  rotate: 360,           ← Icon rotates
  scale: 1.1             ← Icon scales
}}
```

### Button Styling

**Primary Button (Mulai Monitoring)**:
```
bg-white                 ← White background
text-green-700           ← Green text
hover:bg-green-50        ← Hover state
size="lg"                ← Larger padding
```

**Secondary Button (Pelajari Lebih Lanjut)**:
```
variant="outline"        ← Outline style
border-white             ← White border
text-white               ← White text
hover:bg-white/10        ← Hover background
size="lg"                ← Larger padding
```

---

## 📐 SPACING REFERENCE

### Hero Section Spacing
```
Hero Container:
  py-16 (vertical)     ← Small screens
  md:py-24             ← Medium+ screens
  px-4                 ← Horizontal padding

Content Alignment:
  container mx-auto    ← Center container
  max-w-4xl            ← Max width
  mx-auto              ← Center content
  px-4                 ← Inner padding

Badge:
  gap-2                ← Icon to text gap
  px-4 py-2            ← Internal padding
  rounded-full         ← Rounded style

Buttons:
  gap-4                ← Button spacing

Feature Grid:
  gap-4                ← Between cards
  pt-12                ← Top margin before grid
  grid-cols-1 md:grid-cols-3 ← Responsive
```

### Login Form Spacing
```
Form Container:
  space-y-4            ← Between form elements
  w-full max-w-md      ← Width constraint
  min-h-screen         ← Full height
  p-4                  ← Padding

Inputs:
  relative              ← For icon positioning
  pl-10                ← Left padding for icon
  pr-10                ← Right padding for toggle
  space-y-2            ← Label to input

Divider:
  my-6                 ← Margin top/bottom
  relative              ← For positioning
  flex items-center    ← Vertical center
```

---

## ✨ ANIMATION SEQUENCE

### Hero Loading Sequence
```
Timeline (in seconds):
0.0s    ↓ Badge starts fading in
0.2s        ↓ H1 starts fading in
0.3s            ↓ Tagline starts
0.4s                ↓ Description starts
0.5s                    ↓ Buttons appear
0.6s                        ↓ Card 1 appears
0.7s                            ↓ Card 2 appears
0.8s                                ↓ Card 3 appears
1.5s    ✓ All animations complete

Easing: ease-out (default for Framer Motion)
Duration per item: ~0.6s
```

### Login Form Animation
```
Timeline:
0.0s    ↓ Form container slides up
0.2s        ↓ Logo bounces in
0.3s            ↓ Email field animates
0.4s                ↓ Password field animates
0.5s                    ↓ Submit button animates
0.6s                        ↓ Divider appears
0.7s                            ✓ Form ready
```

---

## 🔍 RESPONSIVE DESIGN

### Hero Component Responsive
```
Mobile (375px):
  py-16 (Hero padding)
  text-3xl (H1)
  grid-cols-1 (Features single column)
  gap-1.5 (Smaller gaps)

Tablet (768px):
  py-20 (Slightly more padding)
  text-4xl (H1)
  grid-cols-2 (Features 2 columns)
  gap-4 (Normal gaps)

Desktop (1920px):
  py-24 (Max padding)
  text-6xl (Large H1)
  grid-cols-3 (Features 3 columns)
  gap-4 (Normal gaps)
```

### Login Component Responsive
```
Mobile (375px):
  max-w-md (fits screen)
  space-y-4 (Normal spacing)
  Input size: small-medium

Tablet (768px):
  max-w-md (still fits)
  space-y-4 (Normal spacing)
  Input size: medium

Desktop (1920px):
  max-w-md (centered, same)
  space-y-4 (Normal spacing)
  Input size: medium
```

---

## 🚀 QUICK CODE SNIPPETS

### Hero Badge Animation
```tsx
<motion.div 
  className="inline-flex items-center gap-2 bg-white/20..."
  initial={{ opacity: 0, y: -20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
>
  <Leaf className="w-4 h-4" />
  <span>IEnviro-Ders</span>
</motion.div>
```

### Hero Headline Animation
```tsx
<motion.h1 
  className="text-5xl md:text-6xl text-white"
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6, delay: 0.2 }}
>
  EcoMeter
</motion.h1>
```

### Feature Card Icon Rotation
```tsx
<motion.div 
  className="w-12 h-12 bg-white/20 rounded-full..."
  whileHover={{ rotate: 360, scale: 1.1 }}
  transition={{ duration: 0.6 }}
>
  <Icon className="w-6 h-6 text-white" />
</motion.div>
```

### Login Demo Button
```tsx
<Button
  type="button"
  variant="outline"
  className="w-full border-green-300 text-green-700 hover:bg-green-50"
  onClick={handleDemoLogin}
  disabled={isLoading}
>
  Coba Akun Demo
</Button>
```

### Login Divider with "Atau"
```tsx
<div className="relative my-6">
  <div className="absolute inset-0 flex items-center">
    <div className="w-full border-t border-gray-300" />
  </div>
  <div className="relative flex justify-center text-sm">
    <span className="px-2 bg-white text-gray-500">Atau</span>
  </div>
</div>
```

---

## 📊 COMPONENT IMPORT REFERENCE

### Required Imports for Hero
```tsx
import { ArrowRight, Leaf, Coins, BarChart3 } from 'lucide-react';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { motion } from 'motion/react';
```

### Required Imports for Login
```tsx
import { Eye, EyeOff, Mail, Lock } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from './ui/card';
import { motion } from 'motion/react';
import { toast } from 'sonner';
```

---

**This visual guide is your reference while coding!**

Use this when:
- ✅ Unsure about layout
- ✅ Need animation timing
- ✅ Need spacing values
- ✅ Need color codes
- ✅ Need to verify structure

