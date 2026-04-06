# Design System Document: Atmospheric Minimalist Editorial

## 1. Overview & Creative North Star
The Creative North Star for this design system is **"The Celestial Observer."** 

We are moving away from the cluttered, data-heavy "utility" look of traditional weather apps. Instead, we are building an editorial experience that feels as vast and immersive as the sky itself. By leveraging the deep `slate-950` (`#070d1f`) foundation, we create an environment where weather data doesn't just sit on a screen—it floats in a digital ether. 

This system breaks the "template" look through **intentional asymmetry** and **tonal depth**. We use extreme typographic scales (Display-LG for temperatures) contrasted against microscopic, precise labels to create a sense of professional authority. The layout should feel "airy" despite being a dark theme, using generous white space (breathing room) to allow the user to focus on a single atmospheric truth at a time.

---

## 2. Colors: The Depth of Night
Our palette is rooted in the deep shadows of the atmosphere, punctuated by the soft glow of moonlight and icy blues.

### Surface Hierarchy & Nesting
To achieve a high-end feel, we follow the **"No-Line" Rule**: 1px solid borders are strictly prohibited for sectioning. Boundaries are defined by background shifts or nesting tiers.

*   **Foundation:** The base of the application is `surface` (`#070d1f`).
*   **Sectioning:** Use `surface-container-low` (`#09122a`) for secondary content areas.
*   **Focus Elements:** Use `surface-container-high` (`#131e3d`) for cards or interactive modules.
*   **The Glass & Gradient Rule:** For primary weather cards (e.g., the current forecast), use a semi-transparent `surface-variant` (`#162449`) with a `backdrop-blur` of 20px-40px. 
*   **Signature Textures:** Apply a subtle linear gradient from `primary` (`#7bd1fa`) to `primary-container` (`#1680a6`) at a 15% opacity overlay on hero cards to give them a "shimmer" effect reflecting the current weather state.

---

## 3. Typography: The Editorial Voice
We use **Inter** for its mathematical precision and neutral character, allowing the weather icons and data to remain the protagonists.

*   **Display-LG (3.5rem):** Reserved exclusively for the current temperature (e.g., "24°"). It should feel monumental.
*   **Headline-SM (1.5rem):** Used for city names ("İstanbul") or major weather conditions ("Parçalı Bulutlu").
*   **Label-MD/SM:** These are our "technical" specs. Use `on-surface-variant` (`#9daad6`) for these labels to create a clear hierarchy against the primary white data points.
*   **Turkish Language Note:** Ensure `letter-spacing` is set to `-0.02em` for headlines to maintain a tight, premium editorial feel, especially with longer Turkish words.

---

## 4. Elevation & Depth: Tonal Layering
Traditional shadows are too heavy for this "Atmospheric" system. We use light to define space.

*   **The Layering Principle:** Instead of shadows, place a `surface-container-highest` card on top of a `surface` background. The subtle shift from `#070d1f` to `#162449` creates a natural, soft lift.
*   **Ambient Glow:** For floating elements like the "Search" FAB or active weather alerts, use a diffused shadow: `box-shadow: 0 20px 40px rgba(123, 209, 250, 0.08)`. The shadow color is a tint of our `primary` blue, not black.
*   **The Ghost Border Fallback:** If a separation is required for accessibility, use the `outline-variant` (`#3a476d`) at **15% opacity**. This creates a "whisper" of a container without breaking the immersion.

---

## 5. Components: Precision & Softness

### Buttons & Inputs
*   **Search Input:** Use `surface-container-highest` with a `xl` (3rem) corner radius. The placeholder text should use `on-surface-variant`. No borders; use a subtle focus glow of `primary` at 20% opacity.
*   **Primary CTA:** (e.g., "Konum Değiştir") Use a `primary-container` background with `on-primary-container` text. Apply the `xl` radius to match the card language.

### Cards & Weather Modules
*   **The XL Standard:** All primary cards must use the `xl` (3rem) corner radius. This extreme roundness conveys a modern, friendly, yet custom feel.
*   **No-Divider Rule:** Within lists (e.g., 24-hour forecast), never use lines. Use horizontal scrolling with generous spacing or `surface-container-low` backgrounds to separate "Today" from "Tomorrow."
*   **Weather Icons:** Icons must be "Glass-Morphic" or multi-tonal, using `primary` and `secondary` tints. They should never be flat white.

### Specialized Weather Components
*   **The Atmospheric Gauge:** Use a `primary-dim` arc to show humidity or UV index. The track of the gauge should be `surface-variant`.
*   **Hourly Scroll:** A horizontal strip where the "active" hour is highlighted not by a box, but by a `surface-bright` (`#1d2a50`) pill shape behind it.

---

## 6. Do’s and Don’ts

### Do:
*   **Do** use Turkish characters correctly (İ, ş, ğ) with Inter’s full glyph set.
*   **Do** use "Surface Nesting" (High on Low) to create hierarchy.
*   **Do** lean into asymmetry. Place the temperature Display-LG to the far left and the condition Headline-SM to the bottom right of a hero card.
*   **Do** use `primary` (`#7bd1fa`) sparingly for "active" states and accents only.

### Don’t:
*   **Don’t** use pure black `#000000` except for the deepest background layers (lowest container).
*   **Don’t** use standard 4px or 8px border-radii. Everything in this system is either `full` (pills) or `xl` (cards).
*   **Don’t** use high-contrast dividers. They shatter the "atmospheric" illusion. 
*   **Don’t** crowd the interface. If the screen feels full, increase the spacing and hide secondary data in a "Detaylar" (Details) sheet.