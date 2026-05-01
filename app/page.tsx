'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Menu, X, ChevronRight, Phone, Mail, MapPin, CheckCircle2, Factory } from 'lucide-react'

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' })
  const [isFormSubmitted, setIsFormSubmitted] = useState(false)

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsFormSubmitted(true)
    setTimeout(() => setIsFormSubmitted(false), 3000)
  }

  const navLinks = ['Home', 'About', 'Products', 'Why Us', 'Contact']

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white border-b border-border shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-3">
              <Image src="/shikha-logo.png" alt="Shikha Laminator" width={45} height={45} className="object-contain" />
              <span className="text-2xl text-primary tracking-normal font-bold">SHIKHA LAMINATOR</span>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex gap-8">
              {navLinks.map(link => (
                <a key={link} href={`#${link.toLowerCase()}`} className="text-sm font-medium hover:text-primary transition">
                  {link}
                </a>
              ))}
            </nav>

            {/* CTA Button */}
            <div className="hidden md:block">
              <a href="#contact" className="inline-flex">
                <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">Request Quote</Button>
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <nav className="md:hidden pb-4 space-y-3">
              {navLinks.map(link => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  className="block text-sm font-medium hover:text-primary transition"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link}
                </a>
              ))}
              <a href="#contact" onClick={() => setIsMenuOpen(false)}>
                <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">Request Quote</Button>
              </a>
            </nav>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="bg-gradient-to-b from-slate-50 to-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <div className="space-y-3">
                <h1 className="text-4xl md:text-5xl font-bold text-primary leading-tight">
                  Packaging that <span className="text-accent">Performs</span>
                </h1>
                <p className="text-lg text-foreground/80">
                  Packaging solutions for businesses across regions
                </p>
              </div>
              <p className="text-base text-foreground/70">
                From custom carton boxes to corrugated solutions, die-cutting, and paper bags—we deliver packaging that keeps your products safe and your business growing.
              </p>
              <div className="flex gap-4 pt-4">
                <a href="#contact">
                  <Button className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-base">
                    Get Your Quote
                    <ChevronRight className="ml-2" size={20} />
                  </Button>
                </a>
                <a href="#about">
                  <Button variant="outline" className="px-8 py-6 text-base border-primary text-primary hover:bg-primary/5">
                    Learn More
                  </Button>
                </a>
              </div>
            </div>
            <div className="hidden md:grid grid-cols-2 gap-4">
              <Image
                src="https://images.unsplash.com/photo-1578500494198-246f612d03b3?w=300&h=300&fit=crop&q=80"
                alt="Carton Box Manufacturing"
                width={300}
                height={300}
                className="object-cover rounded-lg shadow-lg"
              />
              <Image
                src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=300&h=300&fit=crop&q=80"
                alt="Corrugated Cardboard Production"
                width={300}
                height={300}
                className="object-cover rounded-lg shadow-lg"
              />
              <Image
                src="https://images.unsplash.com/photo-1513828583688-c52646db42da?w=300&h=300&fit=crop&q=80"
                alt="Workers Manufacturing Boxes"
                width={300}
                height={300}
                className="object-cover rounded-lg shadow-lg"
              />
              <Image
                src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=300&h=300&fit=crop&q=80"
                alt="Carton Box Assembly"
                width={300}
                height={300}
                className="object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Our Story</h2>
            <div className="w-16 h-1 bg-accent mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-4 text-foreground/80">
              <p className="text-lg leading-relaxed">
                <span className="font-semibold text-primary">Shikha Laminator</span> was founded in 2010 with a simple but powerful mission: to provide packaging solutions that empower businesses to grow without worrying about their packaging needs. What started as a vision has become a reality, earning the trust of many companies across the region.
              </p>
              <p className="text-lg leading-relaxed">
                We believe that great packaging is more than just a box—it&apos;s a reflection of your brand&apos;s commitment to quality. Every product we create, from custom carton boxes to corrugated solutions, is designed to protect your products and represent your business with excellence.
              </p>
              <p className="text-lg leading-relaxed">
                Under the leadership of <span className="font-semibold">Aabhash Srivastava</span>, our Business Development Manager, we&apos;re taking bold steps to strengthen our presence and bring our packaging expertise to more businesses in surrounding regions. We're not just growing our business—we're growing with our customers.
              </p>
            </div>

            <div className="space-y-4">
              <Card className="bg-primary/5 border-accent">
                <CardContent className="p-6">
                  <div className="flex gap-3 items-start">
                    <Factory className="text-accent mt-1 flex-shrink-0" size={24} />
                    <div>
                      <h3 className="font-semibold text-primary mb-1">15 Years Strong</h3>
                      <p className="text-sm text-foreground/80">Established in 2010, trusted by many businesses</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-accent/10 border-accent">
                <CardContent className="p-6">
                  <div className="flex gap-3 items-start">
                    <CheckCircle2 className="text-accent mt-1 flex-shrink-0" size={24} />
                  <div>
                    <h3 className="font-semibold text-primary mb-1">Dedicated Support</h3>
                    <p className="text-sm text-foreground/80">We're always available to address your needs and provide personalized solutions for your business.</p>
                  </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-primary/5 border-accent">
                <CardContent className="p-6">
                  <div className="flex gap-3 items-start">
                    <MapPin className="text-accent mt-1 flex-shrink-0" size={24} />
                    <div>
                      <h3 className="font-semibold text-primary mb-1">Regional Excellence</h3>
                      <p className="text-sm text-foreground/80">Focused on surrounding regions with reliable support</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-16 md:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Our Products & Services</h2>
            <div className="w-16 h-1 bg-accent mx-auto mb-4"></div>
            <p className="text-lg text-foreground/80">Complete packaging solutions for every business need</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: 'Carton Boxes',
                description: 'Custom-designed carton boxes tailored to your product specifications and branding requirements.',
                icon: '📦'
              },
              {
                title: 'All Types of Flutes',
                description: 'B-flute, C-flute, E-flute, and more—we work with all corrugation types for optimal protection.',
                icon: '〰️'
              },
              {
                title: 'Die-Cutting Boxes',
                description: 'Precision die-cutting for complex shapes and unique packaging designs that stand out.',
                icon: '✂️'
              },
              {
                title: 'Corrugation Boxes',
                description: 'Heavy-duty corrugated solutions for shipping, storage, and industrial packaging needs.',
                icon: '📫'
              },
              {
                title: 'Paper Bags',
                description: 'Eco-friendly and durable paper bags for retail, food, and commercial applications.',
                icon: '🛍️'
              },
              {
                title: 'Custom Solutions',
                description: 'Specialized packaging for unique requirements—let us help you find your perfect solution.',
                icon: '🎯'
              },
            ].map((product, idx) => (
              <Card key={idx} className="hover:shadow-lg transition duration-300 border-border bg-white">
                <CardContent className="p-6">
                  <div className="text-4xl mb-4">{product.icon}</div>
                  <h3 className="text-xl font-semibold text-primary mb-3">{product.title}</h3>
                  <p className="text-foreground/80">{product.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section id="whyus" className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Why Choose Shikha Laminator?</h2>
            <div className="w-16 h-1 bg-accent mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: 'Expert Team',
                description: 'With 15 years of experience, our team understands every aspect of carton manufacturing and packaging solutions.'
              },
              {
                title: 'Quality Guaranteed',
                description: 'Every product undergoes rigorous quality checks to ensure it meets our high standards and your expectations.'
              },
              {
                title: 'Competitive Pricing',
                description: 'We provide premium quality packaging at competitive prices, ensuring excellent value for your investment.'
              },
              {
                title: 'Fast Turnaround',
                description: 'Quick production and timely delivery—we respect your business timelines and delivery schedules.'
              },
              {
                title: 'Custom Solutions',
                description: 'No two businesses are the same. We create custom packaging solutions tailored to your specific needs.'
              },
              {
                title: 'Local Support',
                description: 'Being local to Kanpur, we provide personalized support and can quickly address any issues or changes.'
              },
            ].map((item, idx) => (
              <Card key={idx} className="border-accent/30 bg-primary/5">
                <CardContent className="p-6">
                  <div className="flex gap-4">
                    <CheckCircle2 className="text-accent flex-shrink-0 mt-1" size={24} />
                    <div>
                      <h3 className="font-semibold text-primary mb-2 text-lg">{item.title}</h3>
                      <p className="text-foreground/80">{item.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact & Quote Section */}
      <section id="contact" className="py-16 md:py-24 bg-gradient-to-br from-primary via-primary/95 to-primary/90 text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-2">Get Your Quote Today</h2>
                <p className="text-primary-foreground/90">
                  Fill out the form and our team will get back to you within 24 hours with a customized quote.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex gap-4">
                  <Phone className="flex-shrink-0" size={24} />
                  <div>
                    <h3 className="font-semibold mb-1">Phone</h3>
                    <p className="text-primary-foreground/90">+91 9140223212, +91 8005200106</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Mail className="flex-shrink-0" size={24} />
                  <div>
                    <h3 className="font-semibold mb-1">Email</h3>
                    <p className="text-primary-foreground/90">shikhalaminator@gmail.com</p>
                    <p className="text-primary-foreground/90">shikhalaminator.business@gmail.com</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <MapPin className="flex-shrink-0" size={24} />
                  <div>
                    <h3 className="font-semibold mb-1">Location</h3>
                    <p className="text-primary-foreground/90">J-67, Panki Site 3, UPSIDA, Kanpur, Uttar Pradesh, India</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white rounded-lg p-6 md:p-8 shadow-lg">
              <form onSubmit={handleFormSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    Full Name *
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Your name"
                    value={formData.name}
                    onChange={handleFormChange}
                    required
                    className="w-full"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Email Address *
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="your@email.com"
                    value={formData.email}
                    onChange={handleFormChange}
                    required
                    className="w-full"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                    Phone Number
                  </label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="+91 9XXXXXXXXX"
                    value={formData.phone}
                    onChange={handleFormChange}
                    className="w-full"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Tell us about your packaging needs *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Describe your requirements, product type, volume, etc."
                    value={formData.message}
                    onChange={handleFormChange}
                    required
                    className="w-full min-h-32"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-6 text-base font-semibold"
                >
                  Request Quote
                </Button>

                {isFormSubmitted && (
                  <div className="bg-green-50 text-green-800 p-4 rounded-md text-sm">
                    Thank you! We&apos;ll contact you shortly with your customized quote.
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h4 className="font-bold mb-4 flex items-center gap-2">
                <Image src="/shikha-logo.png" alt="Shikha Laminator" width={24} height={24} className="filter brightness-0 invert" />
                Shikha Laminator
              </h4>
              <p className="text-sm text-primary-foreground/80">
                Premium carton packaging solutions since 2010.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Products</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#products" className="hover:text-accent transition">Carton Boxes</a></li>
                <li><a href="#products" className="hover:text-accent transition">Corrugation Boxes</a></li>
                <li><a href="#products" className="hover:text-accent transition">Die-Cutting</a></li>
                <li><a href="#products" className="hover:text-accent transition">Paper Bags</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#about" className="hover:text-accent transition">About Us</a></li>
                <li><a href="#whyus" className="hover:text-accent transition">Why Choose Us</a></li>
                <li><a href="#contact" className="hover:text-accent transition">Contact</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Service Areas</h4>
              <ul className="space-y-2 text-sm">
                <li>Kanpur</li>
                <li>Unnao</li>
                <li>Lucknow</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-primary-foreground/20 pt-8 text-center text-sm text-primary-foreground/80">
            <p>&copy; 2024 Shikha Laminator. All rights reserved. | Packaging that Performs</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
