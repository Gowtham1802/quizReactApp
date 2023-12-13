/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        'quizLogo' : "url('./src/components/dashboardpage/img/quiz_logo.png')",
        'backgroundImg' : "url('./src/components/dashboardpage/img/dashbord dashbordbg.jpg')"
  
      }
    },
  },
  plugins: [],
}