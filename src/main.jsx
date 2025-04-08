import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router";
import './index.css'
import App from './App.jsx'
import Contact from './Components/Contact.jsx';
import Blogs from './Components/Blogs.jsx';
import About from './Components/About.jsx';
import Layout from './Components/Layout.jsx';
import { ClerkProvider } from '@clerk/clerk-react'
import SignInPage from './Components/SignInPage.jsx';
import SignUpPage from './Components/SignUpPage.jsx';

const Clerk_Api = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

if (!Clerk_Api) {
  throw new Error("Api Key not found..!!");
}

createRoot(document.getElementById('root')).render(
  <ClerkProvider publishableKey={Clerk_Api} afterSignOutUrl="/" >
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />} >
          <Route index element={<Layout />} />
          <Route path='/about' element={<About />} />
          <Route path='/blogs' element={<Blogs />} />
          <Route path='/contact' element={<Contact />} />

          <Route path='/sign-in/*' element={<SignInPage />} />
          <Route path='/sign-up/*' element={<SignUpPage />} />
          <Route path='/sign-up/sso-callback' element={<SignUpPage />} />
        </Route>

      </Routes>
    </BrowserRouter >
  </ClerkProvider >
)
