# Image Requirements for Hot Yoga Dunedin Website

## Directory Structure

```
public/images/
├── hero/
│   └── hero-background.jpg (1920x1080, yoga studio atmosphere)
├── studio/
│   ├── studio-interior-1.jpg (800x600, main practice room)
│   ├── studio-interior-2.jpg (800x600, reception area)
│   ├── facilities.jpg (800x600, changing rooms/amenities)
│   └── studio-exterior.jpg (800x600, building exterior)
├── classes/
│   ├── original-hot-yoga.jpg (800x600, hot yoga class)
│   ├── hot-flow.jpg (800x600, flow yoga class)
│   ├── inferno-hot-pilates.jpg (800x600, pilates class)
│   ├── mat-pilates.jpg (800x600, mat pilates)
│   └── yin-yoga.jpg (800x600, yin yoga poses)
├── teachers/
│   ├── donna-wikio.jpg (400x400, professional headshot)
│   ├── laura-pugh.jpg (400x400, professional headshot)
│   ├── adrienne-roy.jpg (400x400, professional headshot)
│   ├── jess-dobson.jpg (400x400, professional headshot)
│   ├── mandi-saul.jpg (400x400, professional headshot)
│   ├── emmanuelle-gomez.jpg (400x400, professional headshot)
│   ├── munirah-burra.jpg (400x400, professional headshot)
│   ├── fran-rae.jpg (400x400, professional headshot)
│   ├── alice-cheung.jpg (400x400, professional headshot)
│   ├── sarah-charlton.jpg (400x400, professional headshot)
│   ├── anna-poole.jpg (400x400, professional headshot)
│   ├── eva-lloyd.jpg (400x400, professional headshot)
│   ├── theresa-bowen.jpg (400x400, professional headshot)
│   ├── helen-platten.jpg (400x400, professional headshot)
│   ├── moana-kyle.jpg (400x400, professional headshot)
│   ├── bella-devereux.jpg (400x400, professional headshot)
│   ├── annelies-van-dijke.jpg (400x400, professional headshot)
│   └── team-photo.jpg (800x600, group photo)
├── blog/
│   ├── blog-1.jpg (400x300, yoga benefits)
│   ├── blog-2.jpg (400x300, mental health)
│   └── blog-3.jpg (400x300, scientific benefits)
└── misc/
    ├── newsletter-bg.jpg (1200x400, community/lifestyle)
    ├── contact-map.jpg (800x400, location/map view)
    └── pricing-lifestyle.jpg (800x600, membership lifestyle)
```

## Image Specifications

### Technical Requirements

- **Format**: JPG for photos, PNG for graphics with transparency
- **Quality**: High resolution, optimized for web
- **Compression**: Balance between quality and file size
- **Alt text**: All images need descriptive alt text for accessibility

### Style Guidelines

- **Color palette**: Warm tones (oranges, reds, yellows)
- **Mood**: Peaceful, energetic, welcoming, professional
- **Lighting**: Natural, warm lighting preferred
- **Composition**: Clean, uncluttered backgrounds
- **People**: Diverse, inclusive representation

## Stock Photo Suggestions

### Search Terms for Unsplash/Pexels:

1. **Hero Section**:

   - "hot yoga studio interior"
   - "yoga class silhouette"
   - "meditation room warm lighting"

2. **Studio Images**:

   - "modern yoga studio"
   - "pilates equipment room"
   - "yoga reception area"

3. **Class Photos**:

   - "people practicing hot yoga"
   - "pilates class workout"
   - "yin yoga meditation"
   - "flow yoga sequence"

4. **Teacher Photos**:

   - "yoga instructor portrait"
   - "professional fitness trainer"
   - "meditation teacher headshot"

5. **Lifestyle/Community**:
   - "yoga community group"
   - "wellness lifestyle"
   - "mindful living"

## AI Prompt Suggestions

If using AI image generators like DALL-E or Midjourney:

### Hero Background:

```
"Modern hot yoga studio interior, warm orange lighting, wooden floors, people practicing yoga in background, peaceful atmosphere, professional photography style, high quality"
```

### Class Demonstrations:

```
"People practicing [CLASS TYPE] in a heated yoga studio, warm lighting, focused expressions, professional fitness photography, diverse group"
```

### Teacher Portraits:

```
"Professional headshot of a yoga instructor, warm smile, comfortable athletic wear, studio background, natural lighting, high quality portrait photography"
```

## Implementation Notes

### Next.js Image Optimization

When implementing images, use Next.js Image component:

```tsx
import Image from "next/image";

<Image
  src="/images/hero/hero-background.jpg"
  alt="Hot yoga studio practice room"
  width={1920}
  height={1080}
  priority // for above-the-fold images
  className="object-cover"
/>;
```

### Responsive Images

Consider different sizes for different screen sizes:

- Mobile: 375px wide
- Tablet: 768px wide
- Desktop: 1200px+ wide

### Lazy Loading

Images below the fold should be lazy-loaded automatically by Next.js Image component.

## Budget Considerations

### Free Options:

- Unsplash, Pexels (completely free)
- Freepik (with attribution)

### Paid Options:

- Getty Images ($10-50 per image)
- Shutterstock (subscription model)
- Adobe Stock (subscription model)

### AI Generated:

- DALL-E 3: ~$0.04 per image
- Midjourney: $10/month subscription
- Leonardo.ai: Free tier available

## Next Steps

1. Choose your preferred image source
2. Download/generate images according to specifications
3. Optimize images for web (compress without losing quality)
4. Place images in appropriate directories
5. Update React components to use real images instead of placeholders
6. Test website performance and loading times
7. Add proper alt text for accessibility

## Contact for Implementation

Once you have the images ready, I can help you:

- Update all components to use real images
- Implement proper Image optimization
- Add responsive image handling
- Set up proper alt text and SEO optimization
