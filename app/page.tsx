'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Menu, X, ChevronRight, Phone, Mail, MapPin, CheckCircle2, Factory, Zap, Shield, Linkedin } from 'lucide-react'

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

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Products', href: '#products' },
    { label: 'Why Us', href: '#why-us' },
    { label: 'Contact', href: '#contact' }
  ]

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white border-b border-border shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
          <div className="flex items-center gap-3">
            <a href="#home" className="flex items-center gap-3 hover:opacity-80 transition">
              <Image src="/shikha-logo.png" alt="Shikha Laminator" width={60} height={60} className="object-contain" />
              <span className="text-2xl text-primary tracking-normal font-bold">SHIKHA LAMINATOR</span>
            </a>
          </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex gap-8">
              {navLinks.map(link => (
                <a key={link.label} href={link.href} className="text-sm font-medium hover:text-primary transition">
                  {link.label}
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
                  key={link.label}
                  href={link.href}
                  className="block text-sm font-medium hover:text-primary transition"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
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
            <div className="space-y-6" data-aos="fade-up">
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
            <div className="hidden md:grid grid-cols-2 gap-4" data-aos="fade-left" data-aos-delay="200">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/female-warehouse-worker-taping-cardboard-box-with-tape-dispenser-before-shipment-62eQgzLr7Vf6vyiV4F6jMiJJ5CmYC7.jpg"
                alt="Worker taping cardboard box"
                width={300}
                height={300}
                className="object-cover rounded-lg shadow-lg"
              />
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/closed-brown-cardboard-box-isolated-white-background-zSSpl7hgCYjC4q4PjUQqd5hlTqflac.jpg"
                alt="Closed brown cardboard box"
                width={300}
                height={300}
                className="object-cover rounded-lg shadow-lg"
              />
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/set-three-unlabeled-similar-craft-cardboard-boxes-with-covers-beautifully-arranged-studio-with-white-walls-rckrIwAdAX8xm0BOZqxHg1R7Kdjk1c.jpg"
                alt="Set of three craft cardboard boxes"
                width={300}
                height={300}
                className="object-cover rounded-lg shadow-lg"
              />
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ff0ff724-e306-44b0-9de6-c9fbfca9e112-ZR3mDPPjRCRuYzRk1pdaCIKSrHreJU.jpg"
                alt="Open cardboard box"
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
          <div className="text-center mb-12" data-aos="fade-up">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Our Story</h2>
            <div className="w-16 h-1 bg-accent mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-4 text-foreground/80" data-aos="fade-right">
              <p className="text-lg leading-relaxed">
                <span className="font-semibold text-primary">Shikha Laminator</span> was established in 2010 by <span className="font-semibold">Mr. Amit Kumar Srivastava</span> with a clear vision to address the packaging challenges faced by businesses. We specialize in manufacturing high-quality laminated cartons designed to meet diverse packaging needs across industries.
              </p>
              <p className="text-lg leading-relaxed">
                Our mission is to deliver durable, customized, and eco-conscious packaging solutions with a commitment to precision, performance, and punctuality. We combine modern machinery, skilled craftsmanship, and quality raw materials to ensure each carton meets stringent quality standards—whether for FMCG, electronics, retail, export, or any other industry.
              </p>
              <p className="text-lg leading-relaxed">
                Under the leadership of <span className="font-semibold">Aabhash Srivastava</span>, our Business Development Manager, we&apos;re taking bold steps to strengthen our presence and bring our packaging expertise to more businesses in surrounding regions. We're committed to simplifying packaging needs while ensuring consistent service excellence.
              </p>
            </div>

            <div className="space-y-4" data-aos="fade-left">
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

      {/* Industries We Serve Section */}
      <section className="py-16 md:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12" data-aos="fade-up">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Industries We Serve</h2>
            <div className="w-16 h-1 bg-accent mx-auto mb-4"></div>
            <p className="text-lg text-foreground/80">Trusted by diverse sectors for their packaging needs</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6" data-aos="fade-up" data-aos-delay="100">
            {[
              'Garment Division',
              'Footwear Industry',
              'Export Houses',
              'Café & Restaurant Sector',
              'Automobile',
              'Electronics',
              'FMCG',
              'Leather'
            ].map((industry, idx) => (
              <Card key={idx} className="border-accent/30 bg-white hover:shadow-lg transition">
                <CardContent className="p-6 text-center">
                  <p className="font-semibold text-primary">{industry}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12" data-aos="fade-up">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Our Products & Services</h2>
            <div className="w-16 h-1 bg-accent mx-auto mb-4"></div>
            <p className="text-lg text-foreground/80">Complete packaging solutions for every business need</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6" data-aos="fade-up" data-aos-delay="100">
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
                  <h3 className="text-lg font-semibold text-primary mb-2">{product.title}</h3>
                  <p className="text-foreground/80 text-sm">{product.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Our Infrastructure Section */}
      <section className="py-16 md:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12" data-aos="fade-up">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Our Infrastructure & Capabilities</h2>
            <div className="w-16 h-1 bg-accent mx-auto mb-4"></div>
            <p className="text-lg text-foreground/80">State-of-the-art machinery for premium packaging solutions</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6" data-aos="fade-up" data-aos-delay="100">
            {[
              { name: 'Corrugation Machine', icon: '⚙️' },
              { name: 'Rotary & Slotter Machine', icon: '🔄' },
              { name: 'Die Cutting Machine', icon: '✂️' },
              { name: 'Stitching Machine', icon: '🧵' },
              { name: 'Offset Printing Machine', icon: '🖨️' }
            ].map((equipment, idx) => (
              <Card key={idx} className="border-accent/30 bg-white hover:shadow-lg transition">
                <CardContent className="p-6 text-center">
                  <div className="text-4xl mb-3">{equipment.icon}</div>
                  <p className="font-semibold text-primary text-sm">{equipment.name}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Assurance Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12" data-aos="fade-up">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Our Quality Assurance</h2>
            <div className="w-16 h-1 bg-accent mx-auto mb-4"></div>
            <p className="text-lg text-foreground/80">Rigorous testing ensures every carton meets our premium standards</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6" data-aos="fade-up" data-aos-delay="100">
            {[
              {
                title: 'Bursting Factor Test',
                description: 'Assesses the strength and resistance of corrugated boxes against external pressure.'
              },
              {
                title: 'Moisture Content Test',
                description: 'Ensures optimal moisture levels in raw materials to prevent degradation and preserve structural integrity.'
              },
              {
                title: 'Compression Test',
                description: 'Verifies the load-bearing capacity of boxes and their ability to protect contents during handling and transit.'
              },
              {
                title: 'GSM (Grams per Square Meter) Check',
                description: 'Measures paper weight to maintain uniformity and reliability across all products.'
              },
              {
                title: 'Gauge Measurement',
                description: 'Confirms the thickness and uniformity of materials used in production.'
              },
              {
                title: 'Pasting Gum Viscosity Test',
                description: 'Ensures strong adhesion and secure bonding in corrugated sheets.'
              }
            ].map((test, idx) => (
              <Card key={idx} className="border-accent/30 bg-primary/5">
                <CardContent className="p-6">
                  <div className="flex gap-4">
                    <Shield className="text-accent flex-shrink-0 mt-1" size={24} />
                    <div>
                      <h3 className="font-semibold text-primary mb-2">{test.title}</h3>
                      <p className="text-foreground/80 text-sm">{test.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-8 p-6 bg-accent/10 rounded-lg border border-accent" data-aos="zoom-in" data-aos-delay="200">
            <p className="text-center text-foreground/80 font-medium">
              <span className="text-accent">Advanced Technology:</span> Our temperature-controlled corrugation machines maintain precise temperature settings for consistent, high-quality output.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section id="why-us" className="py-16 md:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12" data-aos="fade-up">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Why Choose Shikha Laminator?</h2>
            <div className="w-16 h-1 bg-accent mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8" data-aos="fade-up" data-aos-delay="100">
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
            <div className="space-y-8" data-aos="fade-right">
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
            <div className="bg-white rounded-lg p-6 md:p-8 shadow-lg" data-aos="fade-left">
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
                <Image src="/shikha-logo.png" alt="Shikha Laminator" width={40} height={40} className="filter brightness-0 invert" />
                Shikha Laminator
              </h4>
              <p className="text-sm text-accent font-medium">
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

          <div className="border-t border-primary-foreground/20 pt-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="text-sm text-primary-foreground/80">
                <p>&copy; 2026 Shikha Laminator. All rights reserved. | Packaging that Performs</p>
              </div>
              
              {/* Social Media Links */}
              <div className="flex items-center gap-4">
                <span className="text-sm text-primary-foreground/80 font-medium">Follow us:</span>
                <a 
                  href="http://linkedin.com/company/shikha-laminator/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-primary-foreground/10 hover:bg-primary-foreground/20 px-4 py-2 rounded-lg transition duration-300 group"
                >
                  <Linkedin size={20} className="group-hover:text-accent transition" />
                  <span className="text-sm font-medium group-hover:text-accent transition">Shikha Laminator</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
