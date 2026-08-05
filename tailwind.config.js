/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: { extend: {} },
  // Tailwind 3.4.19 was silently dropping every `hover:*` modifier during
  // JIT extraction for this input. Force-keep them so the production CSS
  // matches what `vite dev` (un-purged) emits.
  safelist: [
    'hover:bg-white/20',
    'hover:text-white',
    'hover:bg-gray-100',
    'hover:bg-[#d2611f]',
    'hover:scale-[1.03]',
    'hover:shadow-lg',
    'hover:shadow-[#e8702a]/30',
  ],
  plugins: [],
}
