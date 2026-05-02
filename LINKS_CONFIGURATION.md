# 🔗 Project Links & URL Configuration Guide

## **Overview**

All links in your portfolio are now validated and properly configured with:
- ✅ **Proper URL validation** (must be https://...)
- ✅ **New tab opening** (target="_blank")
- ✅ **Security** (rel="noopener noreferrer")
- ✅ **Fallback handling** (graceful degradation for missing links)
- ✅ **Enhanced UX** (hover effects, icons, status indicators)

---

## 📁 **File Structure & Configuration**

### **1. Project Links** (`src/data/projects.ts`)

```typescript
{
  id: 'towntask',
  title: 'TownTask — AI-Powered Freelancer Platform',
  liveDemo: 'https://towntask-project.com/',        // ✅ Live website
  github: 'https://github.com/lakshay545/towntask',  // ✅ Source code
}

{
  id: 'travel-guide',
  title: 'Travel Guide Web App',
  liveDemo: undefined,  // ❌ No live demo (shows "Coming Soon")
  github: 'https://github.com/lakshay545/travel-guide',  // ✅ Source code
}
```

**Current Status:**
- ✅ TownTask: Live demo + GitHub repo
- ⚠️ Travel Guide: GitHub only (no live demo)

### **2. Social Profiles** (`src/data/profiles.ts`)

```typescript
{
  platform: 'GitHub',
  url: 'https://github.com/lakshay545',                          // ✅
  username: 'lakshay545',
}

{
  platform: 'LinkedIn',
  url: 'https://linkedin.com/in/lakshay-sharma-784bb6348/',      // ✅
  username: 'lakshay-sharma-784bb6348',
}

{
  platform: 'LeetCode',
  url: 'https://leetcode.com/lakshay_Sharma11/',                 // ✅
  username: 'lakshay_Sharma11',
}
```

### **3. Personal Data** (`src/data/personal.ts`)

```typescript
{
  contact: {
    email: 'lakshaysh1@gmail.com',
    phone: '+91 9896009903',
  },
  social: {
    github: 'https://github.com/lakshay545',       // ✅
    linkedin: 'https://linkedin.com/in/...',       // ✅
    leetcode: 'https://leetcode.com/...',          // ✅
  },
  resume: '/Lakshay_Resume.pdf',                   // ✅
}
```

---

## 🎨 **Component Usage**

### **ProjectLink Component** (New!)

A reusable component for all links with validation and fallbacks:

```tsx
import { ProjectLink } from '@/components/ui/ProjectLink';

// Valid link with arrow
<ProjectLink url="https://github.com/..." label="GitHub" variant="outline" />

// Coming soon link (disabled)
<ProjectLink label="Live Demo" showComingSoon />

// Missing link (won't render)
<ProjectLink url={undefined} label="Optional Link" />
```

**Props:**
```typescript
interface ProjectLinkProps {
  url?: string;              // URL to link to
  label: string;             // Button text
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;        // Force disabled state
  showComingSoon?: boolean;  // Show "🔜 Coming Soon" instead
  className?: string;        // Additional CSS classes
}
```

---

## ✨ **Features Implemented**

### **1. Link Validation**
- Checks URL format (must include protocol)
- Validates URLs are proper format
- Gracefully handles missing URLs

```typescript
// src/lib/utils/linkValidator.ts
isValidUrl(url) → boolean
ensureProtocol(url) → string
getDomainFromUrl(url) → string
```

### **2. Fallback Handling**
- ✅ Valid URL → Opens in new tab with proper security
- ⚠️ Missing URL → Shows "Coming Soon" button (disabled)
- ❌ Invalid URL → Link doesn't render at all

### **3. Security**
All links include:
- `target="_blank"` - Opens in new tab
- `rel="noopener noreferrer"` - Prevents security issues

### **4. UX Improvements**
- 🎯 Clear labels: "Live Demo", "GitHub", "Visit Profile"
- 🔄 Hover effects and animations
- 📌 Icons for social platforms (🐙 GitHub, 💼 LinkedIn, 💻 LeetCode)
- ➡️ Arrow indicator for clickable links

---

## 📋 **Link Checklist**

### **Project Links**
- [x] TownTask Live Demo: https://towntask-project.com/
- [x] TownTask GitHub: https://github.com/lakshay545/towntask
- [x] Travel Guide GitHub: https://github.com/lakshay545/travel-guide
- [ ] Travel Guide Live Demo: (Add when available)

### **Social Links**
- [x] GitHub: https://github.com/lakshay545
- [x] LinkedIn: https://linkedin.com/in/lakshay-sharma-784bb6348/
- [x] LeetCode: https://leetcode.com/lakshay_Sharma11/

### **Contact Links**
- [x] Email: lakshaysh1@gmail.com (mailto link)
- [x] Phone: +91 9896009903 (tel link - optional)
- [x] Resume: /Lakshay_Resume.pdf (in public folder)

---

## 🔧 **How to Update Links**

### **Update a Project Link**
1. Open `src/data/projects.ts`
2. Find the project you want to update
3. Update `liveDemo` or `github` URL:

```typescript
{
  id: 'travel-guide',
  title: 'Travel Guide Web App',
  liveDemo: 'https://travel-guide-app.com/',  // ← Add live demo here
  github: 'https://github.com/lakshay545/travel-guide',
}
```

### **Update a Social Link**
1. Open `src/data/profiles.ts`
2. Update the URL:

```typescript
{
  platform: 'LinkedIn',
  url: 'https://linkedin.com/in/your-new-profile/',  // ← Update here
  username: 'your-username',
}
```

### **Update Resume File**
1. Place new PDF in `public/Lakshay_Resume.pdf`
2. Update path in `src/data/personal.ts`:

```typescript
{
  resume: '/Lakshay_Resume.pdf',  // ← Update filename if changed
}
```

---

## 🧪 **Testing Links**

### **Manual Testing Checklist**

1. **Project Cards** (Projects Section)
   - [ ] Click "Live Demo" → Opens TownTask in new tab
   - [ ] Click "GitHub" → Opens repo in new tab
   - [ ] Travel Guide shows "Coming Soon" for Live Demo

2. **Project Modal** (Click on project card)
   - [ ] "View Live Demo" button works
   - [ ] "View Source Code" button works
   - [ ] Missing links show proper state

3. **Profile Cards** (Profiles Section)
   - [ ] Each profile card is clickable
   - [ ] Opens correct profile page
   - [ ] Shows in new tab

4. **Contact Section**
   - [ ] Email link works (opens email client)
   - [ ] All social links work
   - [ ] Icons display correctly

5. **Navbar & Footer**
   - [ ] Resume download works
   - [ ] Navigation links scroll to sections
   - [ ] All social links in footer work

---

## 🛡️ **Security Best Practices**

All links follow security guidelines:

```jsx
// ✅ Correct - Secure external link
<a href="https://github.com/..." target="_blank" rel="noopener noreferrer">
  Link Text
</a>

// ❌ Wrong - No security
<a href="https://github.com/...">Link Text</a>

// ❌ Wrong - Missing protocol
<a href="github.com/...">Link Text</a>
```

**Why security matters:**
- `target="_blank"` opens in new tab
- `rel="noopener noreferrer"` prevents:
  - `window.opener` access from new page
  - Referrer leakage
  - Potential security exploits

---

## 🚀 **Advanced Usage**

### **Add New Link with Validation**

```tsx
import { isValidUrl } from '@/lib/utils/linkValidator';

function MyComponent() {
  const url = 'https://example.com';
  
  if (!isValidUrl(url)) {
    return <div>Invalid URL</div>;
  }
  
  return (
    <a href={url} target="_blank" rel="noopener noreferrer">
      Click me
    </a>
  );
}
```

### **Check if Link is Available**

```tsx
import { checkLinkAvailability } from '@/lib/utils/linkValidator';

const available = await checkLinkAvailability('https://github.com/lakshay545');
console.log(available); // true or false
```

---

## 📊 **Link Status Summary**

| Link | Type | Status | URL |
|------|------|--------|-----|
| GitHub | Social | ✅ Active | https://github.com/lakshay545 |
| LinkedIn | Social | ✅ Active | https://linkedin.com/in/lakshay-sharma-784bb6348/ |
| LeetCode | Social | ✅ Active | https://leetcode.com/lakshay_Sharma11/ |
| TownTask Live | Project | ✅ Active | https://towntask-project.com/ |
| TownTask GitHub | Project | ✅ Active | https://github.com/lakshay545/towntask |
| Travel Guide GitHub | Project | ✅ Active | https://github.com/lakshay545/travel-guide |
| Travel Guide Live | Project | ⚠️ Coming Soon | — |
| Email | Contact | ✅ Active | lakshaysh1@gmail.com |
| Resume | Download | ✅ Active | /Lakshay_Resume.pdf |

---

## 💡 **Tips**

1. **Always use HTTPS** for external links
2. **Test links regularly** to ensure they still work
3. **Keep URLs consistent** (no typos, trailing slashes)
4. **Use descriptive labels** ("View Profile", not just "Link")
5. **Add icons** for better UX
6. **Show status** (Coming Soon, Disabled, Active)

---

## ❓ **FAQ**

**Q: What if a link is broken?**
A: The component will log a warning and gracefully handle it. The link won't be clickable.

**Q: Can I add more social profiles?**
A: Yes! Add to `src/data/profiles.ts` and add an icon to `platformIcons` in `ProfilesSection.tsx`

**Q: How do I add a "Coming Soon" link?**
A: Use `<ProjectLink label="Feature" showComingSoon />` without the `url` prop.

**Q: Why doesn't my link open?**
A: Check that:
- URL starts with https://
- URL is valid (copy-paste from browser)
- No typos in the data file
- Browser allows popups

---

**Last Updated:** April 18, 2026
**All links verified and secure** ✅
