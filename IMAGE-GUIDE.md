# 🖼️ Hot Yoga Dunedin - Image Implementation Guide

## Quick Start

### 1. Download Free Placeholder Images

```bash
# Give execute permission
chmod +x download-images.sh

# Run the download script
./download-images.sh
```

### 2. Manual Download Options

#### **Recommended Free Sources:**

**Unsplash Collections:**

- [Yoga Collection](https://unsplash.com/collections/1065487/yoga)
- [Fitness Studio](https://unsplash.com/collections/4334421/fitness-studio)
- [Meditation & Wellness](https://unsplash.com/collections/3798876/meditation--wellness)

**Specific Search Terms:**

```
Hero Section: "hot yoga studio interior warm lighting"
Classes: "yoga class people practicing [specific pose/style]"
Teachers: "yoga instructor professional portrait"
Studio: "modern fitness studio wooden floors"
```

#### **AI-Generated Images (Recommended for Consistency):**

**DALL-E 3 Prompts:**

```
Hero: "Professional photo of a modern hot yoga studio, warm orange lighting, wooden floors, people practicing yoga in background, peaceful atmosphere, 16:9 aspect ratio"

Studio Interior: "Modern yoga studio interior, clean wooden floors, warm lighting, mirrors on walls, yoga equipment organized, professional fitness photography"

Original Hot Yoga: "People practicing traditional hot yoga poses in heated studio, focused expressions, athletic wear, warm studio lighting, professional fitness photography"

Teacher Portrait: "Professional headshot of a friendly yoga instructor, warm smile, athletic wear, studio background, natural lighting, high quality portrait"
```

**Midjourney Prompts:**

```
/imagine modern hot yoga studio, warm amber lighting, people practicing yoga, wooden floors, peaceful atmosphere, professional photography --ar 16:9 --v 5

/imagine yoga instructor professional headshot, warm smile, athletic clothing, studio background, natural lighting --ar 1:1 --v 5
```

## 3. Image Optimization

### Recommended Tools:

- **TinyPNG** - Online compression
- **ImageOptim** - Mac app
- **Squoosh** - Google's web app
- **Sharp** - Node.js library

### Optimal Formats:

- **Hero images**: WebP with JPG fallback
- **Teacher photos**: WebP with JPG fallback
- **Class images**: WebP with JPG fallback
- **Icons/graphics**: SVG preferred

## 4. Implementation Examples

### Update Homepage Hero:

```tsx
// In app/page.tsx, replace the placeholder div with:
<section className="relative h-screen flex items-center justify-center text-white">
  <Image
    src="/images/hero/hero-background.jpg"
    alt="Hot yoga studio with practitioners in peaceful, warm environment"
    fill
    priority
    className="object-cover"
    sizes="100vw"
  />
  <div className="absolute inset-0 bg-black bg-opacity-40 z-10"></div>
  // ... rest of hero content
</section>
```

### Update Teachers Page:

```tsx
// Replace teacher placeholder with:
<div className="relative h-64">
  <OptimizedImage
    src={`/images/teachers/${teacher.slug}.jpg`}
    alt={`${teacher.name}, ${teacher.role} at Hot Yoga Dunedin`}
    fill
    className="object-cover"
    sizes="(max-width: 768px) 100vw, 33vw"
    fallbackSrc="/images/teachers/placeholder.jpg"
  />
</div>
```

### Update Classes Page:

```tsx
// Replace class image placeholders:
<div className="relative h-64">
  <OptimizedImage
    src="/images/classes/original-hot-yoga.jpg"
    alt="Students practicing Original Hot Yoga in heated studio"
    fill
    className="object-cover"
    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
  />
</div>
```

## 5. File Naming Convention

```
Images should be named using kebab-case:
✅ original-hot-yoga.jpg
✅ donna-wikio.jpg
✅ studio-interior-main.jpg

❌ Original Hot Yoga.jpg
❌ Donna_Wikio.JPG
❌ StudioInterior1.jpeg
```

## 6. SEO & Accessibility

### Alt Text Best Practices:

```tsx
// Good alt text examples:
alt="Donna Wikio, founder and director of Hot Yoga Dunedin, smiling in studio"
alt="Students practicing Original Hot Yoga poses in heated studio environment"
alt="Modern hot yoga studio interior with wooden floors and warm lighting"

// Avoid:
alt="image" or alt="photo" or alt=""
```

### Structured Data:

```json
{
  "@type": "Organization",
  "image": [
    "/images/studio/studio-exterior.jpg",
    "/images/studio/studio-interior-main.jpg"
  ]
}
```

## 7. Performance Optimization

### Next.js Image Config:

```js
// next.config.js
module.exports = {
  images: {
    domains: ["images.unsplash.com"], // if using external sources
    formats: ["image/webp", "image/avif"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
};
```

### Loading Strategy:

- **Above-the-fold**: `priority={true}`
- **Below-the-fold**: Lazy loading (default)
- **Critical images**: Preload with `<link rel="preload">`

## 8. Budget Breakdown

### Free Option:

- Unsplash/Pexels: $0
- Time investment: 2-3 hours sourcing and optimizing

### AI Generated:

- DALL-E 3: ~$2-5 for all images
- Midjourney: $10/month subscription
- Time investment: 1-2 hours

### Professional Photography:

- Local photographer: $500-2000
- Stock photography: $100-500
- Time investment: 1 day shoot + editing

### Hybrid Approach (Recommended):

- Hero + key images: AI generated ($5)
- Teacher photos: Local photographer ($300)
- Class photos: Mix of stock + AI ($50)
- **Total: ~$355**

## 9. Legal Considerations

### Usage Rights:

- ✅ Unsplash: Free for commercial use
- ✅ Pexels: Free for commercial use
- ✅ AI Generated: You own the rights
- ⚠️ Google Images: Often copyrighted
- ⚠️ Social media: Need permission

### Attribution:

- Unsplash: Attribution appreciated but not required
- Freepik: Attribution required for free tier
- AI: No attribution needed

## 10. Next Steps Checklist

- [ ] Choose image source (free/paid/AI)
- [ ] Download/generate images according to specifications
- [ ] Optimize images for web (compress, resize)
- [ ] Place images in correct directories
- [ ] Update components to use OptimizedImage component
- [ ] Add proper alt text for accessibility
- [ ] Test website performance with new images
- [ ] Implement lazy loading for below-fold images
- [ ] Add structured data for SEO
- [ ] Test on various devices and screen sizes

## 11. Support

Once you have your images ready:

1. Place them in the `/public/images/` directories
2. Let me know, and I'll help update all the components
3. We'll implement proper optimization and responsive handling
4. Test everything for performance and accessibility

## Quick Command to Get Started:

```bash
# Download sample images (requires internet)
./download-images.sh

# Or manually download a few key images:
# 1. Hero background (1920x1080)
# 2. Studio interior (800x600)
# 3. A few teacher photos (400x400)
# 4. Class demonstration photos (800x600)

# Then run the dev server to see them:
npm run dev
```

---

**Need help with implementation?** Once you have the images, I can help you integrate them properly into all the React components!
