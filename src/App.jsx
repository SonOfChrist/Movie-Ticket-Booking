import React from 'react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Movies from './pages/Movies';
import MovieDetails from './pages/MovieDetails';
import SeatLayout from './pages/SeatLayout';
import Favorite from './pages/Favorite';
import MyBookings from './pages/MyBookings';
import Footer from './components/Footer';
import { Toaster } from 'react-hot-toast';
import { Route, Routes, useLocation } from 'react-router-dom';

const App = () => {

  const isAdminRoute = useLocation().pathname.startsWith('/admin');

  return (
    <>
      <Toaster />
      {!isAdminRoute && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:id" element={<MovieDetails />} />
        <Route path="/movies/:id/:date" element={<SeatLayout />} />
        <Route path="/my-bookings" element={<MyBookings />} />
        <Route path="/favorite" element={<Favorite />} />
        {/* Add more routes as needed */}
        {/* Example: <Route path="/about" element={<About />} /> */}
        {/* Example: <Route path="/contact" element={<Contact />} /> */}
        {/* Example: <Route path="/profile" element={<Profile />} /> */}
        {/* Example: <Route path="/settings" element={<Settings />} /> */}
        {/* Example: <Route path="/search" element={<Search />} /> */}
        {/* Example: <Route path="/login" element={<Login />} /> */}
        {/* Example: <Route path="/register" element={<Register />} /> */}
        {/* Example: <Route path="/dashboard" element={<Dashboard />} /> */}
        {/* Example: <Route path="/admin" element={<Admin />} /> */}
        {/* Example: <Route path="/user/:username" element={<UserProfile />} /> */}
        {/* Example: <Route path="/blog" element={<Blog />} /> */}
        {/* Example: <Route path="/blog/:postId" element={<BlogPost />} /> */}
        {/* Example: <Route path="/gallery" element={<Gallery />} /> */}
        {/* Example: <Route path="/contact-us" element={<ContactUs />} /> */}
        {/* Example: <Route path="/faq" element={<FAQ />} /> */}
        {/* Example: <Route path="/terms" element={<Terms />} /> */}
        {/* Example: <Route path="/privacy" element={<PrivacyPolicy />} /> */}
        {/* Example: <Route path="/help" element={<Help />} /> */}
        {/* Example: <Route path="/support" element={<Support />} /> */}
      </Routes>
      {!isAdminRoute && <Footer />}
    </>
  )
}

export default App

