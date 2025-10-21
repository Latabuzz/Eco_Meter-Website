# Copilot Custom Instructions for EcoMeter

## Project Overview
- **Project Type**: Next.js 15 with TypeScript
- **Styling**: Tailwind CSS with PostCSS
- **Linting**: ESLint
- **Directory Structure**: App Router with src/ directory

## Development Guidelines

### Code Style
- Use TypeScript for type safety
- Follow ESLint configuration (next/core-web-vitals)
- Use Tailwind CSS for styling

### File Organization
- `/src/app` - App Router pages and layouts
- `/src/components` - Reusable React components
- `/src/types` - TypeScript type definitions
- `/public` - Static assets

### Commands
- Development: `npm run dev` (http://localhost:3000)
- Build: `npm run build`
- Production: `npm start`
- Linting: `npm run lint`

### Import Aliases
Use the `@/*` alias for cleaner imports:
```typescript
import Component from '@/components/MyComponent'
import { utils } from '@/lib/utils'
```

### Adding Dependencies
When adding new packages:
1. Use `npm install package-name`
2. Update `tsconfig.json` paths if needed
3. Test with `npm run dev`

## Key Configurations
- `next.config.js` - Next.js configuration
- `tailwind.config.ts` - Tailwind CSS theming
- `tsconfig.json` - TypeScript settings
- `.eslintrc.json` - ESLint rules
- `postcss.config.mjs` - PostCSS plugins
