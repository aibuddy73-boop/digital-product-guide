# Color Theme Options for Your Brand

## Current Issue:
The QA feedback said to use purple `#6E1B7A`, but we need to verify this matches your actual brand across:
- Sales page
- Selar product page
- Product preview images (the guide cards)
- Thank you page

---

## 🎨 Option 1: Deep Purple (Current - Based on QA)
**Primary:** `oklch(0.42 0.18 310)` ≈ `#6E1B7A`  
**Accent:** `oklch(0.77 0.16 68)` ≈ `#F59E0B` (Amber)

**Use this if:** Your brand uses a deep purple/magenta color

---

## 🎨 Option 2: Royal Blue (Original - What it was before)
**Primary:** `oklch(0.55 0.22 264)` ≈ `#2563EB`  
**Accent:** `oklch(0.77 0.16 68)` ≈ `#F59E0B` (Amber)

**Use this if:** Your brand actually uses blue, not purple

---

## 🎨 Option 3: Orange/Amber Primary (From your guide images)
**Primary:** `oklch(0.70 0.15 50)` ≈ `#EA580C` (Orange)  
**Accent:** `oklch(0.42 0.18 310)` ≈ `#6E1B7A` (Purple)

**Use this if:** The orange header in your guide preview images is your main brand color

---

## 🎨 Option 4: Dark Purple/Maroon (Selar page style)
**Primary:** `oklch(0.35 0.12 320)` ≈ `#4A1052`  
**Accent:** `oklch(0.77 0.16 68)` ≈ `#F59E0B` (Amber)

**Use this if:** You want a darker, more sophisticated purple

---

## How to Check What Color You Currently Have:

1. **Visit your sales page:** https://digital-product-guide-tau.vercel.app/
2. **Look at the main CTA button** ("Start My 7-Day System")
3. **What color is it?**
   - Blue → Use Option 2 (revert to original)
   - Bright Purple → Keep Option 1 (current)
   - Dark Purple → Use Option 4
   - Orange → Use Option 3

4. **Compare to your Selar product page**
5. **Look at your guide preview images** (the cards in the preview)
   - What color are the headers?

---

## How to Change:

Edit `app/globals.css` line 60:

### For Option 1 (Deep Purple - CURRENT):
```css
--primary: oklch(0.42 0.18 310);
--ring: oklch(0.42 0.18 310);
--chart-1: oklch(0.42 0.18 310);
```

### For Option 2 (Royal Blue - ORIGINAL):
```css
--primary: oklch(0.55 0.22 264);
--ring: oklch(0.55 0.22 264);
--chart-1: oklch(0.55 0.22 264);
```

### For Option 3 (Orange Primary):
```css
--primary: oklch(0.70 0.15 50);
--ring: oklch(0.70 0.15 50);
--chart-1: oklch(0.70 0.15 50);
--accent: oklch(0.42 0.18 310);
```

### For Option 4 (Dark Purple):
```css
--primary: oklch(0.35 0.12 320);
--ring: oklch(0.35 0.12 320);
--chart-1: oklch(0.35 0.12 320);
```

---

## 🎯 My Recommendation:

**Look at your actual Selar product page and guide preview images.**

From your screenshot earlier, I saw:
- **Guide cards** have **BLUE and ORANGE headers** alternating
- **Selar branding** uses a dark purple

**I think the best option is:**

### **Option 5: Blue Primary + Orange Accent (What the guide actually shows)**

**Primary:** `oklch(0.55 0.22 264)` (Blue) - for buttons, CTAs  
**Accent:** `oklch(0.70 0.15 50)` (Orange) - for highlights, secondary

This matches the actual guide preview image where you have blue and orange cards alternating.

---

## Quick Test:

1. Visit: https://digital-product-guide-tau.vercel.app/
2. What color is the "Start My 7-Day System" button?
3. Tell me the color and I'll adjust if needed

---

## Hex Color Reference:

- `#2563EB` = Blue (Option 2)
- `#6E1B7A` = Purple (Option 1 - current)
- `#4A1052` = Dark Purple (Option 4)
- `#EA580C` = Orange (Option 3)
- `#F59E0B` = Amber (Current accent)

---

**What I need from you:**

Visit the live sales page and tell me:
1. What color are the CTA buttons RIGHT NOW?
2. What color SHOULD they be (based on your brand)?
3. I'll update it to match perfectly.
