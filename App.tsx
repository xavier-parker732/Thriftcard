import { memo } from 'react'
import { Routes, Route, Link } from 'react-router-dom'

const Section = memo(({ title, text }: { title: string, text: string }) => (
  <section className="max-w-6xl mx-auto px-6 py-24">
    <h2 className="text-4xl font-bold text-gold mb-4">{title}</h2>
    <p className="text-gray-300">{text}</p>
  </section>
))

const Home = memo(() => (
  <div>
    <header className="sticky top-0 z-50 backdrop-blur-md border-b border-gold/30 bg-black/30">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        <div className="text-2xl font-bold">
          ◆ Card<span className="text-gold">Thrift</span>
        </div>

        <nav className="hidden md:flex gap-6">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#order">Order</a>
          <a href="#contact">Contact</a>
        </nav>

        <div className="flex gap-3">
          <button className="gold-btn">Login</button>
          <button className="gold-btn">Sign Up</button>
        </div>
      </div>
    </header>

    <section id="home" className="hero">
      <div className="hero-glow"></div>
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center py-32">
        <h1 className="text-6xl font-black leading-tight mb-6">
          Turn Your Gift Cards Into Instant Cash
        </h1>
        <p className="text-xl text-gray-300 mb-10">
          Fast. Secure. Paid.
        </p>

        <div className="flex justify-center gap-4 flex-wrap">
          <button className="gold-btn">Start Order</button>
          <button className="border border-gold px-6 py-3 rounded-xl">
            Learn More
          </button>
        </div>
      </div>
    </section>

    <Section title="We Built This For The Hustle" text="CardThrift helps hustlers and gamers convert gift cards into instant cash without delays." />
    <Section title="Services" text="Gift card redemption, PayPal setup, Chime access and international payment support." />
    <Section title="How It Works" text="Upload card → Choose payment → Get paid." />
    <Section title="FAQ" text="No delays. No stories. Just cash." />
    <Section title="Contact" text="WhatsApp: +2348127267512" />

    <footer className="border-t border-gold/20 py-10 text-center text-gray-400">
      © 2025 CardThrift · Nigeria
    </footer>

    <a
      href="https://wa.me/2348127267512"
      className="fixed bottom-6 right-6 bg-green-500 w-16 h-16 rounded-full flex items-center justify-center text-2xl"
    >
      💬
    </a>
  </div>
))

const Admin = memo(() => (
  <div className="p-10">
    <h1 className="text-4xl font-bold text-gold mb-4">Admin Dashboard</h1>
    <p>Only the admin email can access this route.</p>
  </div>
))

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/admin" element={<Admin />} />
    </Routes>
  )
}