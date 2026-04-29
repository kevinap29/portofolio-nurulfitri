# Resume System (A4 Sync & Smart Scaling)

One of the key technical challenges solved in this project is the perfect synchronization between the web preview and the exported PDF.

## 1. Pixel-Perfect A4 Layout
To ensure that "what you see is what you get" (WYSIWYG), the resume is built using physical units (`mm`) rather than pixels.
- **Width**: `210mm` (Standard A4 width)
- **Min-Height**: `297mm` (Standard A4 height)

## 2. Print-Media Optimization
We use CSS `@media print` rules to:
- Hide navigation elements (`.no-print`).
- Force background colors (`-webkit-print-color-adjust: exact`).
- Define page margins and size (`@page { size: A4; margin: 0; }`).
- Prevent content splitting across pages (`break-inside: avoid`).

## 3. Mobile Smart Scaling
Since A4 width (210mm / ~794px) exceeds standard mobile screen widths, we implemented a dynamic scaling system:
- **Detection**: Uses `bind:clientWidth` and `window` resize listeners to detect the available viewport width.
- **Scaling**: Calculates a scale factor: `Math.min(1, (containerWidth - 32) / 794)`.
- **Implementation**: Uses CSS `transform: scale(var(--scale))` to shrink the resume to fit mobile screens perfectly without breaking the A4 layout proportions.

## 4. Best Practices for Export
For the best PDF result, users are advised to:
- Set **Margins** to "None".
- Disable **Headers and Footers**.
- Keep **Scale** at "Default (100%)".
