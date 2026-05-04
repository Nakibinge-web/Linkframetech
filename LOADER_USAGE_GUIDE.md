# Loader Components Usage Guide

## Overview
I've created a sophisticated loading system with multiple components for different use cases:

## Components Created

### 1. `Loader.jsx` - Main Application Loader
**Location**: `src/components/common/Loader.jsx`

**Features**:
- ✨ Sophisticated animations with your logo
- 🎯 Multiple rotating rings around the logo
- 📊 Real-time progress bar with shimmer effect
- 🌟 Dynamic loading text that changes based on progress
- 🎨 Floating particles and animated background
- 💫 Glow effects and smooth transitions

**Usage**:
```jsx
import Loader from './components/common/Loader';

<Loader onComplete={() => console.log('Loading complete!')} />
```

### 2. `LoaderProvider.jsx` - Global Loader Management
**Location**: `src/components/common/LoaderProvider.jsx`

**Features**:
- 🔄 Manages loader state globally
- 💾 Remembers if user has visited (uses sessionStorage)
- ⏱️ Configurable minimum load time
- 🎯 Only shows on first visit per session

**Usage**:
```jsx
import LoaderProvider from './components/common/LoaderProvider';

<LoaderProvider minLoadTime={3000}>
  <YourApp />
</LoaderProvider>
```

### 3. `PageLoader.jsx` - Simple Page Transition Loader
**Location**: `src/components/common/PageLoader.jsx`

**Features**:
- 🚀 Lightweight loader for page transitions
- 🎯 Simple rotating ring with logo
- 💨 Quick loading animation
- 🎨 Semi-transparent backdrop

**Usage**:
```jsx
import PageLoader from './components/common/PageLoader';

<PageLoader isVisible={isLoading} />
```

### 4. `useLoader.js` - Loader Hook
**Location**: `src/hooks/useLoader.js`

**Features**:
- 🎣 Custom hook for loader state management
- 📊 Progress tracking
- ⏱️ Minimum load time enforcement

**Usage**:
```jsx
import useLoader from './hooks/useLoader';

const { isLoading, progress, completeLoading } = useLoader(2000);
```

## Implementation

### Already Integrated ✅
The main loader is already integrated into your `App.jsx`:

```jsx
import LoaderProvider from './components/common/LoaderProvider';

function App() {
  return (
    <LoaderProvider minLoadTime={3000}>
      {/* Your app content */}
    </LoaderProvider>
  );
}
```

### How It Works

1. **First Visit**: Shows the full sophisticated loader for 3 seconds
2. **Subsequent Visits**: Skips the loader (remembered in session)
3. **Page Transitions**: Can use PageLoader for quick transitions

### Customization Options

#### Adjust Load Time
```jsx
<LoaderProvider minLoadTime={5000}> // 5 seconds
```

#### Custom Progress Steps
Edit the `loadingSteps` array in `Loader.jsx`:
```javascript
const loadingSteps = [
  { text: 'Initializing...', duration: 800 },
  { text: 'Loading assets...', duration: 1000 },
  { text: 'Your custom text...', duration: 700 },
  { text: 'Almost ready...', duration: 500 }
];
```

#### Color Customization
The loader uses your brand colors:
- **Orange**: `orange-500` (primary brand color)
- **Blue**: `blue-500` (secondary accent)
- **Purple**: `purple-500` (tertiary accent)

### Advanced Usage

#### Manual Loader Control
```jsx
import { useLoaderContext } from './components/common/LoaderProvider';

const { showLoader, hideLoader, isLoading } = useLoaderContext();

// Show loader manually
showLoader();

// Hide loader manually
hideLoader();
```

#### Page-Specific Loaders
```jsx
import PageLoader from './components/common/PageLoader';
import { useState, useEffect } from 'react';

const MyPage = () => {
  const [isPageLoading, setIsPageLoading] = useState(true);

  useEffect(() => {
    // Simulate page loading
    setTimeout(() => setIsPageLoading(false), 1000);
  }, []);

  return (
    <>
      <PageLoader isVisible={isPageLoading} />
      {/* Your page content */}
    </>
  );
};
```

## Animation Details

### Logo Animations
- **Float**: Gentle up/down movement
- **Scale**: Subtle size pulsing
- **Glow**: Multi-layered glow effects
- **Rotation**: Surrounding rings rotate at different speeds

### Background Effects
- **Animated Orbs**: Floating colored orbs with blur
- **Grid Pattern**: Moving grid overlay
- **Particles**: Floating particles with different trajectories

### Progress Bar
- **Shimmer Effect**: Light sweep across progress
- **Glow**: Colored glow behind progress
- **Smooth Transitions**: Eased progress updates

## Performance Notes

- ✅ Uses CSS animations for smooth performance
- ✅ Minimal JavaScript for state management
- ✅ Optimized for mobile devices
- ✅ No external dependencies required
- ✅ Lightweight and fast loading

## Browser Support

- ✅ Chrome/Edge (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Mobile browsers
- ✅ All modern browsers with CSS3 support

## Testing

To test the loader:

1. **Clear Session Storage**: `sessionStorage.clear()` in browser console
2. **Refresh Page**: The loader will show again
3. **Adjust Timing**: Change `minLoadTime` prop for testing

## Troubleshooting

### Loader Not Showing
- Check if `sessionStorage.getItem('hasVisited')` returns `true`
- Clear session storage to reset
- Ensure LoaderProvider wraps your app

### Performance Issues
- Reduce particle count in Loader.jsx
- Simplify animations if needed
- Use PageLoader for better performance

### Styling Issues
- Check Tailwind CSS classes are available
- Ensure proper z-index stacking
- Verify CSS animations are supported

That's it! Your sophisticated loader system is ready to provide an amazing first impression for your users! 🚀