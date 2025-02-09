// /** @type {import('tailwindcss').Config} */
// import form from '@tailwindcss/forms'
// export default {
//   content: [
//     "./index.html",
//     "./src/**/*.{js,ts,jsx,tsx}",
//   ],
//   theme: {
//     extend: {},
//   },
//   plugins: [form],
// }

// // /** @type {import('tailwindcss').Config} */
// // import form from '@tailwindcss/forms'
// // export default {
// //   content: [
// //     "./index.html",
// //     "./src/**/*.{js,ts,jsx,tsx}",
// //   ],
// //   theme: {
// //     extend: {},
// //   },
// //   plugins: [require('@tailwindcss/forms'),],
// // }

/** @type {import('tailwindcss').Config} */
import form from '@tailwindcss/forms'

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [form],
}