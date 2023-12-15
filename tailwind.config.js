/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        'quizLogo1' : "url('../src/assets/images/quiz_logo1.png')",
        'backgroundImg' : "url('../src/components/dashboardpage/img/dashbordbg.jpg')"
  
      }
    },
  },
  plugins: [],
}