---
applyTo: '**'
---

# 🌿 EcoMeter - AI Development Instructions

**Version**: 2.0 MASTER COMPLETE  
**Last Updated**: 21 Oktober 2025  
**Status**: ✅ Lengkap & Terstruktur  
**Reference**: Panduan_eco_meter + Panduan_UI_Figma

## Project Overview
**EcoMeter** adalah aplikasi DeFi (Decentralized Finance) berbasis blockchain untuk manajemen distribusi biogas yang transparan dan berkelanjutan menggunakan IoT system.

### 📊 Key Information
- **Team**: Enviro-DERS
- **Event**: Infinity Hackathon 2025
- **Category**: DeFi for Creative Economy
- **Mission**: Blockchain-based IoT system for transparent and sustainable biogas distribution
- **Partners**: Yayasan Tana Nyiur Lestari, Baciraro Recycle & TRC, PT Sasa

### Tech Stack
- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **UI Components**: shadcn/ui (Radix UI primitives)
- **Animation**: Framer Motion (motion/react)
- **Icons**: Lucide React
- **Notifications**: Sonner
- **Theme**: next-themes

### Core Dependencies (dari Panduan UI)
```json
{
  // Radix UI Primitives - Core Components
  "@radix-ui/react-accordion": "^1.2.3",
  "@radix-ui/react-avatar": "^1.1.3",
  "@radix-ui/react-checkbox": "^1.1.4",
  "@radix-ui/react-dialog": "^1.1.6",
  "@radix-ui/react-label": "^2.1.2",
  "@radix-ui/react-progress": "^1.1.2",
  "@radix-ui/react-select": "^2.1.6",
  "@radix-ui/react-slider": "^1.2.3",
  "@radix-ui/react-slot": "^1.1.2",
  "@radix-ui/react-switch": "^1.1.3",
  "@radix-ui/react-tabs": "^1.1.3",
  "@radix-ui/react-tooltip": "^1.1.8",
  
  // Radix UI - Additional Components
  "@radix-ui/react-dropdown-menu": "^2.1.6",
  "@radix-ui/react-popover": "^1.1.6",
  "@radix-ui/react-radio-group": "^1.2.3",
  "@radix-ui/react-scroll-area": "^1.2.3",
  "@radix-ui/react-alert-dialog": "^1.1.6",
  "@radix-ui/react-collapsible": "^1.1.3",
  "@radix-ui/react-hover-card": "^1.1.6",
  "@radix-ui/react-context-menu": "^2.2.6",
  "@radix-ui/react-menubar": "^1.1.6",
  "@radix-ui/react-aspect-ratio": "^1.1.2",
  "@radix-ui/react-toggle": "^1.1.2",
  "@radix-ui/react-toggle-group": "^1.1.2",
  "@radix-ui/react-navigation-menu": "^1.2.5",
  "@radix-ui/react-separator": "^1.1.2",
  
  // Third-party UI Components
  "input-otp": "^1.4.2",
  "cmdk": "^1.1.1",
  "vaul": "^1.1.2",
  "react-resizable-panels": "^2.1.7",
  "react-day-picker": "^8.10.1",
  "embla-carousel-react": "^8.6.0",
  "react-hook-form": "^7.55.0",
  
  // Styling Utilities
  "class-variance-authority": "^0.7.1",
  "clsx": "^2.1.1",
  "tailwind-merge": "^2.6.0",
  
  // Icons & Animations
  "lucide-react": "^0.487.0",
  "motion": "^11.15.0",
  "framer-motion": "^11.15.0",
  
  // Notifications & Theme
  "sonner": "^2.0.3",
  "next-themes": "^0.4.6"
}
```

## Project Structure

```
EcoMeter/
├── src/
│   ├── app/                      # Next.js App Router
│   │   ├── layout.tsx           # Root layout with providers
│   │   ├── page.tsx             # Home page
│   │   └── globals.css          # Global styles & CSS variables
│   ├── components/
│   │   ├── ui/                  # shadcn/ui components
│   │   │   ├── accordion.tsx
│   │   │   ├── alert.tsx
│   │   │   ├── avatar.tsx
│   │   │   ├── badge.tsx
│   │   │   ├── button.tsx
│   │   │   ├── card.tsx
│   │   │   ├── checkbox.tsx
│   │   │   ├── dialog.tsx
│   │   │   ├── input.tsx
│   │   │   ├── label.tsx
│   │   │   ├── progress.tsx
│   │   │   ├── select.tsx
│   │   │   ├── slider.tsx
│   │   │   ├── switch.tsx
│   │   │   ├── table.tsx
│   │   │   ├── tabs.tsx
│   │   │   ├── textarea.tsx
│   │   │   ├── tooltip.tsx
│   │   │   ├── sonner.tsx
│   │   │   └── utils.ts         # cn() utility
│   │   ├── figma/
│   │   │   └── ImageWithFallback.tsx
│   │   ├── Hero.tsx
│   │   ├── Dashboard.tsx
│   │   ├── TokenWallet.tsx
│   │   ├── CommunityImpact.tsx
│   │   ├── IoTMonitor.tsx
│   │   ├── RedemptionCenter.tsx
│   │   ├── Login.tsx
│   │   └── Register.tsx
│   ├── lib/
│   │   └── utils.ts             # Utility functions
│   └── types/                   # TypeScript type definitions
├── public/                      # Static assets
├── .github/
│   ├── copilot-instructions.md
│   └── instructions/
│       └── AI.instructions.md
├── next.config.js
├── tailwind.config.ts
├── tsconfig.json
└── package.json
```

## Available UI Components

### Complete Component List
Semua components berikut sudah tersedia di `src/components/ui/` dan `Panduan_UI_Figma/ui/`:

#### Layout & Navigation
- ✅ **Accordion** - Collapsible content sections
- ✅ **Tabs** - Tab-based navigation
- ✅ **Navigation Menu** - Complex navigation menus
- ✅ **Breadcrumb** - Navigation breadcrumbs
- ✅ **Menubar** - Menu bar component
- ✅ **Sidebar** - Sidebar navigation
- ✅ **Separator** - Visual divider

#### Form Controls
- ✅ **Button** - Action buttons with variants
- ✅ **Input** - Text input fields
- ✅ **Textarea** - Multi-line text input
- ✅ **Label** - Form labels
- ✅ **Checkbox** - Checkbox input
- ✅ **Switch** - Toggle switch
- ✅ **Select** - Dropdown select
- ✅ **Slider** - Range slider
- ✅ **Radio Group** - Radio button groups
- ✅ **Input OTP** - One-time password input
- ✅ **Form** - Form wrapper with validation

#### Feedback & Overlays
- ✅ **Dialog** - Modal dialogs
- ✅ **Alert Dialog** - Confirmation dialogs
- ✅ **Alert** - Alert messages
- ✅ **Sonner (Toast)** - Toast notifications
- ✅ **Tooltip** - Contextual tooltips
- ✅ **Popover** - Floating content
- ✅ **Hover Card** - Hover-triggered cards
- ✅ **Drawer** - Side drawer (Vaul)
- ✅ **Sheet** - Side sheet panel

#### Data Display
- ✅ **Card** - Content cards
- ✅ **Table** - Data tables
- ✅ **Badge** - Status badges
- ✅ **Avatar** - User avatars
- ✅ **Progress** - Progress bars
- ✅ **Skeleton** - Loading skeletons
- ✅ **Aspect Ratio** - Maintain aspect ratio

#### Interactive
- ✅ **Command** - Command palette (cmdk)
- ✅ **Context Menu** - Right-click menus
- ✅ **Dropdown Menu** - Dropdown menus
- ✅ **Toggle** - Toggle buttons
- ✅ **Toggle Group** - Group of toggles
- ✅ **Collapsible** - Collapsible content

#### Specialized
- ✅ **Calendar** - Date picker calendar
- ✅ **Carousel** - Image/content carousel
- ✅ **Chart** - Data visualization charts
- ✅ **Scroll Area** - Custom scrollable area
- ✅ **Resizable** - Resizable panels
- ✅ **Pagination** - Pagination controls

#### Utilities
- ✅ **ImageWithFallback** - Image with error handling
- ✅ **cn() utility** - Class name merger
- ✅ **use-mobile hook** - Mobile detection

## UI Component Standards

### Component Architecture
Semua UI components menggunakan:
1. **Radix UI Primitives** - Unstyled, accessible components
2. **CVA (Class Variance Authority)** - Type-safe variant styling
3. **Tailwind CSS v4** - Utility-first styling dengan CSS variables
4. **TypeScript** - Full type safety
5. **"use client"** directive untuk interactive components

### CSS Variables System
```css
:root {
  --background: #ffffff;
  --foreground: oklch(0.145 0 0);
  --primary: #030213;
  --primary-foreground: oklch(1 0 0);
  --secondary: oklch(0.95 0.0058 264.53);
  --muted: #ececf0;
  --muted-foreground: #717182;
  --accent: #e9ebef;
  --destructive: #d4183d;
  --border: rgba(0, 0, 0, 0.1);
  --input-background: #f3f3f5;
  --radius: 0.625rem;
  /* Green theme untuk EcoMeter */
  --green-50: #f0fdf4;
  --green-100: #dcfce7;
  --green-600: #16a34a;
  --green-700: #15803d;
  --green-900: #14532d;
}
```

### Component Pattern Example
```tsx
"use client";

import * as React from "react";
import * as Primitive from "@radix-ui/react-component";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const componentVariants = cva(
  "base-classes",
  {
    variants: {
      variant: {
        default: "default-styles",
        destructive: "destructive-styles"
      },
      size: {
        default: "h-9 px-4",
        sm: "h-8 px-3",
        lg: "h-10 px-6"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
);

export function Component({
  className,
  variant,
  size,
  ...props
}: React.ComponentProps<typeof Primitive.Root> & 
  VariantProps<typeof componentVariants>) {
  return (
    <Primitive.Root
      data-slot="component"
      className={cn(componentVariants({ variant, size }), className)}
      {...props}
    />
  );
}
```

## Development Guidelines

### 1. Component Creation
- ✅ Gunakan `"use client"` untuk components dengan interactivity
- ✅ Export component dan variants untuk reusability
- ✅ Gunakan `data-slot` attribute untuk semantic HTML
- ✅ Implement proper TypeScript types
- ✅ Support `asChild` pattern untuk composition (menggunakan Slot dari Radix)

### 2. Styling Guidelines
- ✅ Gunakan Tailwind CSS v4 utility classes
- ✅ Gunakan CSS variables untuk theming (format: `var(--variable-name)`)
- ✅ Implement dark mode support dengan `.dark` class
- ✅ Gunakan `cn()` utility untuk conditional classes
- ✅ Focus states: `focus-visible:border-ring focus-visible:ring-ring/50`
- ✅ Disabled states: `disabled:pointer-events-none disabled:opacity-50`
- ✅ Invalid states: `aria-invalid:ring-destructive/20 aria-invalid:border-destructive`

### 3. Animation Standards
```tsx
// Framer Motion usage
import { motion, AnimatePresence } from 'motion/react';

<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  exit={{ opacity: 0, y: -10 }}
  transition={{ duration: 0.3 }}
>
  {content}
</motion.div>
```

### 4. Toast Notifications
```tsx
import { toast } from 'sonner';

// Success
toast.success('Operasi berhasil', {
  description: 'Detail pesan'
});

// Error
toast.error('Terjadi kesalahan', {
  description: 'Detail error'
});
```

### 5. Form Patterns
```tsx
<div className="space-y-2">
  <Label htmlFor="field">Label</Label>
  <Input 
    id="field"
    placeholder="Placeholder"
    aria-invalid={hasError}
  />
  {hasError && (
    <p className="text-sm text-destructive">Error message</p>
  )}
</div>
```

### 6. Accessibility Requirements
- ✅ Proper ARIA labels dan roles
- ✅ Keyboard navigation support
- ✅ Focus management
- ✅ Screen reader compatibility
- ✅ Color contrast compliance (WCAG AA)

### 7. Image Handling
```tsx
import { ImageWithFallback } from '@/components/figma/ImageWithFallback';

<ImageWithFallback
  src={imageUrl}
  alt="Description"
  className="w-full h-full object-cover"
/>
```

### 8. File Naming Conventions
- Components: PascalCase (e.g., `TokenWallet.tsx`)
- UI Components: lowercase (e.g., `button.tsx`)
- Utilities: camelCase (e.g., `utils.ts`)
- Types: PascalCase with `.types.ts` suffix

### 9. Import Aliases
```tsx
import Component from '@/components/Component';
import { utils } from '@/lib/utils';
import { Type } from '@/types/types';
```

### 10. UI Component Import Examples
```tsx
// Basic Components
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';

// Form Components
import { Checkbox } from '@/components/ui/checkbox';
import { Switch } from '@/components/ui/switch';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Slider } from '@/components/ui/slider';
import { Textarea } from '@/components/ui/textarea';

// Navigation
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@/components/ui/accordion';

// Feedback
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { toast } from 'sonner';
import { Toaster } from '@/components/ui/sonner';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

// Data Display
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Progress } from '@/components/ui/progress';

// Animation
import { motion, AnimatePresence } from 'motion/react';

// Icons
import { Icon1, Icon2 } from 'lucide-react';

// Utility
import { cn } from '@/lib/utils';
import { ImageWithFallback } from '@/components/figma/ImageWithFallback';
```

### 11. Component Usage Examples

#### Button Variants
```tsx
<Button variant="default">Primary</Button>
<Button variant="destructive">Delete</Button>
<Button variant="outline">Outline</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="ghost">Ghost</Button>
<Button variant="link">Link</Button>
<Button size="sm">Small</Button>
<Button size="lg">Large</Button>
<Button size="icon"><Icon /></Button>
```

#### Card Layout
```tsx
<Card>
  <CardHeader>
    <CardTitle>Card Title</CardTitle>
    <CardDescription>Card description text</CardDescription>
  </CardHeader>
  <CardContent>
    Main content goes here
  </CardContent>
  <CardFooter>
    <Button>Action</Button>
  </CardFooter>
</Card>
```

#### Form Pattern
```tsx
<div className="space-y-2">
  <Label htmlFor="email">Email</Label>
  <Input 
    id="email" 
    type="email"
    placeholder="Enter your email"
    aria-invalid={hasError}
  />
  {hasError && (
    <p className="text-sm text-destructive">Invalid email</p>
  )}
</div>
```

#### Tabs Pattern
```tsx
<Tabs defaultValue="tab1">
  <TabsList>
    <TabsTrigger value="tab1">Tab 1</TabsTrigger>
    <TabsTrigger value="tab2">Tab 2</TabsTrigger>
  </TabsList>
  <TabsContent value="tab1">
    Content 1
  </TabsContent>
  <TabsContent value="tab2">
    Content 2
  </TabsContent>
</Tabs>
```

#### Dialog Pattern
```tsx
<Dialog>
  <DialogTrigger asChild>
    <Button>Open Dialog</Button>
  </DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Dialog Title</DialogTitle>
      <DialogDescription>Dialog description</DialogDescription>
    </DialogHeader>
    <div>Dialog content</div>
  </DialogContent>
</Dialog>
```

#### Toast Notifications
```tsx
// Success
toast.success('Success!', {
  description: 'Operation completed successfully'
});

// Error
toast.error('Error!', {
  description: 'Something went wrong'
});

// Info
toast('Info', {
  description: 'This is an informational message'
});

// With action
toast('Event scheduled', {
  description: 'Friday, February 10 at 5:57 PM',
  action: {
    label: 'Undo',
    onClick: () => console.log('Undo')
  }
});
```

#### Table Pattern
```tsx
<Table>
  <TableHeader>
    <TableRow>
      <TableHead>Header 1</TableHead>
      <TableHead>Header 2</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    <TableRow>
      <TableCell>Cell 1</TableCell>
      <TableCell>Cell 2</TableCell>
    </TableRow>
  </TableBody>
</Table>
```

## EcoMeter Specific Features

### Main Application Features
1. **Authentication System**
   - Login/Register dengan localStorage
   - User session management
   - Logout functionality

2. **Dashboard**
   - Real-time statistics
   - Charts dan visualizations
   - Performance metrics

3. **IoT Monitoring**
   - Live sensor data
   - Real-time updates
   - Status indicators

4. **Token Wallet (EcoWallet)**
   - Token balance
   - Transaction history
   - Token operations

5. **Redemption Center**
   - Reward redemption
   - Available rewards catalog
   - Redemption history

6. **Community Impact**
   - Global statistics
   - Community achievements
   - Leaderboard

### Color Palette (Green Theme)
```css
/* Primary Green Shades */
--eco-green-50: #f0fdf4;
--eco-green-100: #dcfce7;
--eco-green-200: #bbf7d0;
--eco-green-300: #86efac;
--eco-green-400: #4ade80;
--eco-green-500: #22c55e;
--eco-green-600: #16a34a;
--eco-green-700: #15803d;
--eco-green-800: #166534;
--eco-green-900: #14532d;

/* Complementary Colors */
--eco-emerald: #10b981;
--eco-teal: #14b8a6;
```

### Typography Scale
```css
h1: text-2xl font-medium (32px)
h2: text-xl font-medium (24px)
h3: text-lg font-medium (20px)
h4: text-base font-medium (16px)
p: text-base font-normal (16px)
button: text-sm font-medium (14px)
label: text-sm font-medium (14px)
```

## Testing & Quality

### Before Committing
- ✅ Run `npm run lint` - No ESLint errors
- ✅ Run `npm run build` - Build succeeds
- ✅ Test responsive design (mobile, tablet, desktop)
- ✅ Test dark mode if implemented
- ✅ Test keyboard navigation
- ✅ Verify accessibility

### Performance Optimization
- ✅ Use dynamic imports untuk code splitting
- ✅ Optimize images (use Next.js Image component)
- ✅ Minimize bundle size
- ✅ Implement proper loading states
- ✅ Use React.memo untuk expensive components

## Application Architecture (Dari Panduan_eco_meter/App.tsx)

### Main Application Structure

#### Authentication Flow
```tsx
1. Check localStorage untuk existing user
2. Jika tidak ada user → Show Login/Register
3. Jika ada user → Show Dashboard
4. User bisa logout → Return ke Login
```

#### Dashboard Layout
```
┌─────────────────────────────────────────┐
│        Header (Logo + User + Logout)    │
├─────────────────────────────────────────┤
│              Hero Section               │
├─────────────────────────────────────────┤
│  Dashboard │IoT│Wallet│Redeem│Community│  (Tabs)
├─────────────────────────────────────────┤
│         Tab Content Area (Dynamic)      │
├─────────────────────────────────────────┤
│              Footer                     │
└─────────────────────────────────────────┘
```

#### Main Features (5 Tabs)
```
1. Dashboard
   - Real-time statistics
   - Charts visualization
   - Performance metrics
   - Recent activity

2. IoT Monitor
   - Live sensor data
   - Status indicators
   - Alert notifications
   - Data refresh

3. EcoWallet
   - Token balance
   - Transaction history
   - Send/receive tokens
   - Transaction details

4. Redemption Center
   - Available rewards
   - Redemption form
   - Redemption history
   - Filters & search

5. Community Impact
   - Global statistics
   - Community achievements
   - Leaderboard
   - Social impact
```

### State Management Pattern

#### User State
```tsx
const [isLoggedIn, setIsLoggedIn] = useState(false);
const [currentUser, setCurrentUser] = useState<{ email: string; name: string } | null>(null);
const [authView, setAuthView] = useState<'login' | 'register'>('login');

// Initialize from localStorage
useEffect(() => {
  const savedUser = localStorage.getItem('ecoMeterCurrentUser');
  if (savedUser) {
    setCurrentUser(JSON.parse(savedUser));
    setIsLoggedIn(true);
  }
}, []);
```

#### Tab Navigation State
```tsx
const [activeTab, setActiveTab] = useState('dashboard');

const handleTabChange = (tabName: string) => {
  setActiveTab(tabName);
};
```

### LocalStorage Keys
```typescript
'ecoMeterCurrentUser' - User profile data
  {
    email: string;
    name: string;
  }
```

### API Integration Points (For Future Backend)

```typescript
// Authentication
POST /api/auth/login
POST /api/auth/register
POST /api/auth/logout

// Dashboard
GET /api/dashboard/stats
GET /api/dashboard/charts

// IoT Monitoring
GET /api/iot/sensors
GET /api/iot/sensor/:id
WS /api/iot/live-data

// Token Wallet
GET /api/wallet/balance
GET /api/wallet/transactions
POST /api/wallet/send
GET /api/wallet/address

// Redemption
GET /api/rewards
GET /api/redemptions
POST /api/redemptions/create

// Community
GET /api/community/stats
GET /api/community/leaderboard
GET /api/community/achievements
```

### Component Hierarchy

```
App
├── Toaster (Sonner notifications)
├── Header
│   ├── Logo (EcoMeterLogo)
│   ├── Live Monitoring Indicator
│   ├── User Info (currentUser?.name)
│   └── Logout Button
├── Hero Section
├── Tabs Navigation
├── TabsContent (Dynamic)
│   ├── Dashboard Component
│   ├── IoTMonitor Component
│   ├── TokenWallet Component
│   ├── RedemptionCenter Component
│   └── CommunityImpact Component
└── Footer
    ├── About Section
    ├── Partners Section
    └── Copyright
```

### Animation Specifications

#### Page Transitions
```tsx
// Header animation
initial={{ y: -100 }}
animate={{ y: 0 }}
transition={{ duration: 0.5 }}

// Tab content animation
initial={{ opacity: 0, y: 10 }}
animate={{ opacity: 1, y: 0 }}
exit={{ opacity: 0, y: -10 }}
transition={{ duration: 0.3 }}

// Live indicator pulse
animate={{ scale: [1, 1.05, 1] }}
transition={{ duration: 2, repeat: Infinity }}

// Logo hover effect
whileHover={{ scale: 1.1 }}
transition={{ duration: 0.3 }}
```

### Styling Specifications

#### Color Palette (Green Theme)
```css
Background: from-green-50 via-emerald-50 to-teal-50
Header: bg-white/80 backdrop-blur-sm border-b border-green-100
Primary: text-green-900
Secondary: text-green-600
Accent: text-emerald-600
Footer: bg-green-900 text-white
```

#### Spacing & Layout
- Container: mx-auto px-4
- Grid: grid-cols-3 sm:grid-cols-5 gap-1.5 sm:gap-2
- Padding: py-4, py-8
- Responsive: hidden md:flex, flex sm:flex, etc

#### Typography
- Headings: text-green-900
- Labels: text-sm text-green-700
- Descriptions: text-sm text-green-600
- Badges: text-sm

### Forms Pattern (Login/Register)

```tsx
<form>
  <div className="space-y-4">
    <div className="space-y-2">
      <Label htmlFor="email">Email</Label>
      <Input 
        id="email" 
        type="email"
        placeholder="your@email.com"
      />
    </div>
    
    <div className="space-y-2">
      <Label htmlFor="password">Password</Label>
      <Input 
        id="password"
        type="password"
        placeholder="••••••••"
      />
    </div>
    
    <Button className="w-full">Login</Button>
  </div>
  
  <div className="mt-4 text-center">
    <p className="text-sm text-gray-600">
      Don't have account?{' '}
      <button 
        type="button"
        onClick={() => setAuthView('register')}
        className="text-green-600 hover:underline"
      >
        Register here
      </button>
    </p>
  </div>
</form>
```

### Toast Notifications Usage

```tsx
// Login success
toast.success('Login berhasil', {
  description: 'Selamat datang, ' + user.name
});

// Login error
toast.error('Login gagal', {
  description: 'Email atau password salah'
});

// Logout success
toast.success('Logout berhasil', {
  description: 'Sampai jumpa lagi!'
});

// Actions with undo
toast('Token sent', {
  description: 'Sent 100 ECO tokens to 0x...',
  action: {
    label: 'Undo',
    onClick: () => console.log('Undo send')
  }
});
```

## Complete Feature Components To Create

### 1. Login.tsx
```typescript
Interface Props {
  onLogin: (user: { email: string; name: string }) => void;
  onSwitchToRegister: () => void;
}

Features:
- Email input field
- Password input field
- Form validation
- Submit button
- Link to register
- Error messages
- Toast notifications
```

### 2. Register.tsx
```typescript
Interface Props {
  onRegister: (user: { email: string; name: string }) => void;
  onSwitchToLogin: () => void;
}

Features:
- Name input field
- Email input field
- Password input field
- Confirm password field
- Form validation
- Submit button
- Link to login
- Error messages
- Toast notifications
```

### 3. Hero.tsx
```typescript
Interface Props {
  onTabChange: (tabName: string) => void;
}

Features:
- Welcome heading
- Subtitle
- Quick stats display
- Call-to-action buttons
- Responsive design
- Framer Motion animations
```

### 4. Dashboard.tsx
```
Features:
- Statistics cards (4+ metrics)
- Charts visualization (recharts)
- Performance metrics
- Recent activity list
- Responsive grid
- Loading states
```

### 5. IoTMonitor.tsx
```
Features:
- Sensor cards layout
- Real-time data display
- Status indicators (normal/warning/critical)
- Alert notifications
- Refresh mechanism
- Responsive grid
```

### 6. TokenWallet.tsx
```
Features:
- Balance display card
- Transaction table
- Send/receive buttons
- Copy address button
- Filter transactions
- Pagination
- Empty state
```

### 7. RedemptionCenter.tsx
```
Features:
- Rewards grid/list
- Reward card (image, title, cost)
- Modal for redemption form
- Redemption history table
- Filter by status
- Confirmation dialog
- Success/error messages
```

### 8. CommunityImpact.tsx
```
Features:
- Global statistics display
- Community achievements list
- Leaderboard table
- Impact visualization
- Social sharing buttons
- Responsive layout
```

## Commands Reference
```bash
npm run dev      # Development server (localhost:3000)
npm run build    # Production build
npm start        # Production server
npm run lint     # Run ESLint
```

## References
- [shadcn/ui Documentation](https://ui.shadcn.com/)
- [Radix UI Documentation](https://www.radix-ui.com/)
- [Tailwind CSS v4](https://tailwindcss.com/)
- [Next.js Documentation](https://nextjs.org/docs)
- [Framer Motion](https://www.framer.com/motion/)
- [Reference App Implementation](.github/Panduan_eco_meter/App.tsx)
- [Complete Reference Guide](../DOKUMENTASI_MASTER.md)

---

**Team**: Enviro-DERS  
**Event**: Infinity Hackathon 2025  
**Category**: DeFi for Creative Economy  
**Master Documentation**: See DOKUMENTASI_MASTER.md for complete project analysis