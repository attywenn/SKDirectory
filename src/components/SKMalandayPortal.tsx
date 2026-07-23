import { useEffect, useState } from 'react'
import skLogo from '../assets/sk.png'
import {
  ArrowRight,
  BadgeCheck,
  Check,
  Clock,
  HeartHandshake,
  Leaf,
  MapPin,
  Megaphone,
  Menu,
  Sparkles,
  X,
  type LucideIcon,
} from 'lucide-react'

interface ServiceCardProps {
  tag: string
  tone: 'emerald' | 'gold' | 'emerald-dark' | 'emerald-light'
  date: string
  title: string
  description: string
  actionText: string
  icon: LucideIcon
}

export default function SkMalandayPortal() {
  const [isNavOpen, setIsNavOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  const services: ServiceCardProps[] = [
    {
      tag: 'Health',
      tone: 'emerald',
      date: 'Posted July 19, 2026',
      title: 'Free Anti-Rabies & Dengue Awareness Clinic',
      description: 'Free vaccination assistance and health-prevention guidelines tailored for young household heads.',
      actionText: 'Read details',
      icon: HeartHandshake,
    },
    {
      tag: 'Sports',
      tone: 'gold',
      date: 'Posted July 17, 2026',
      title: 'Youth Basketball League — Registration Open',
      description: 'Ages 15–24 may register in teams of 10. Seasonal structure begins late August.',
      actionText: 'Register now',
      icon: Sparkles,
    },
    {
      tag: 'Education',
      tone: 'emerald-light',
      date: 'Posted July 15, 2026',
      title: 'SK Scholarship Grant — 2nd Batch Application',
      description: 'Direct educational monetary support built for qualified college students residing in Malanday.',
      actionText: 'Apply now',
      icon: BadgeCheck,
    },
    {
      tag: 'Livelihood',
      tone: 'emerald-dark',
      date: 'Posted July 12, 2026',
      title: 'Free TESDA Short Course: Baking & Pastry',
      description: 'A comprehensive 5-day vocational skills pipeline complete with national certificates.',
      actionText: 'Join now',
      icon: Leaf,
    },
    {
      tag: 'Environment',
      tone: 'gold',
      date: 'Posted July 10, 2026',
      title: 'Ilog Malanday Clean-up & Tree Planting',
      description: 'Community environmental volunteer mobilization along the Marikina River banks.',
      actionText: 'Volunteer',
      icon: Leaf,
    },
    {
      tag: 'Wellness',
      tone: 'emerald',
      date: 'Posted July 8, 2026',
      title: 'Mental Health First-Aid Seminar for Youth',
      description: 'Strategic clinical discussion frameworks on handling adolescent stresses and lifestyle challenges.',
      actionText: 'Read details',
      icon: HeartHandshake,
    },
  ]

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24)
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="portal-shell">
      <div className="utility-bar">
        <div className="container utility-bar__inner">
          <span>Republic of the Philippines | Metro Manila - Marikina City, 1st District</span>
          
        </div>
      </div>

      <header className={`site-header ${isScrolled ? 'site-header--scrolled' : ''}`}>
        <div className="container site-header__inner">
          <a href="#home" className="brand-lockup" onClick={() => setIsNavOpen(false)}>
            <span className="brand-lockup__crest">
              <img src={skLogo} alt="SK Logo" />
            </span>
            <span className="brand-lockup__text">
              <span>Sangguniang Kabataan ng Malanday</span>
              <small>Youth council portal</small>
            </span>
          </a>

          <button
            type="button"
            className="nav-toggle"
            aria-label="Toggle navigation"
            aria-expanded={isNavOpen}
            onClick={() => setIsNavOpen((open) => !open)}
          >
            {isNavOpen ? <X size={20} /> : <Menu size={20} />}
          </button>

          <nav className={`site-nav ${isNavOpen ? 'site-nav--open' : ''}`}>
            <a href="#home" onClick={() => setIsNavOpen(false)}>Home</a>
            <a href="#about" onClick={() => setIsNavOpen(false)}>About Us</a>
            <a href="#services" onClick={() => setIsNavOpen(false)}>Services</a>
            <a href="#publication" onClick={() => setIsNavOpen(false)}>Publication</a>
            <a href="#committees" onClick={() => setIsNavOpen(false)}>Committees</a>
            <a href="#contacts" onClick={() => setIsNavOpen(false)}>Contacts</a>
            <a href="#login" className="button button--ghost button--nav" onClick={() => setIsNavOpen(false)}>Login</a>
          </nav>
        </div>
      </header>

      <main id="home">
        <section className="hero section">
          <div className="container hero__grid">
            <div className="hero__copy reveal">
              <span className="eyebrow">The official website of Barangay Malanday</span>
              <h1>Serving the youth of Barangay Malanday.</h1>
              <p>
                Announcements for sports league, scholarships, programs, educational discussions - are all here. Engineered for the youth of Brgy. Malanday
              </p>
              <div className="hero__actions">
                <a href="#services" className="button button--primary">View Latest Services <ArrowRight size={16} /></a>
                <a href="#about" className="button button--secondary">About the Council</a>
              </div>
            </div>

            <div className="hero__visual reveal">
              <div className="hero-art" aria-hidden="true">
                <svg viewBox="0 0 500 400" preserveAspectRatio="xMidYMid slice">
                  <rect width="500" height="400" fill="#0f172a" />
                  <line x1="0" y1="100" x2="500" y2="100" stroke="#64748b" strokeWidth="1" opacity="0.32" />
                  <line x1="0" y1="200" x2="500" y2="200" stroke="#64748b" strokeWidth="1" opacity="0.32" />
                  <line x1="0" y1="300" x2="500" y2="300" stroke="#64748b" strokeWidth="1" opacity="0.32" />
                  <line x1="125" y1="0" x2="125" y2="400" stroke="#64748b" strokeWidth="1" opacity="0.32" />
                  <line x1="250" y1="0" x2="250" y2="400" stroke="#64748b" strokeWidth="1" opacity="0.32" />
                  <line x1="375" y1="0" x2="375" y2="400" stroke="#64748b" strokeWidth="1" opacity="0.32" />
                  <circle cx="250" cy="200" r="80" fill="none" stroke="#059669" strokeWidth="2" opacity="0.55" />
                  <rect x="125" y="100" width="250" height="200" fill="none" stroke="#059669" strokeWidth="2" opacity="0.22" />
                </svg>
                <span className="hero-art__caption">Youth Council Portal • Tingnan lahat ng Purok</span>
              </div>
            </div>
          </div>

          <div className="container quickbar">
            <div className="quickbar__grid reveal">
              <div className="quickbar__item">
                <span className="quickbar__icon"><Clock size={18} /></span>
                <div>
                  <strong>Office Hours</strong>
                  <p>Mon–Fri, 8:00 AM - 5:00 PM</p>
                </div>
              </div>

              <div className="quickbar__item">
                <span className="quickbar__icon"><MapPin size={18} /></span>
                <div>
                  <strong>SK Office</strong>
                  <p>Barangay Hall, Malanday</p>
                </div>
              </div>

              <div className="quickbar__item">
                <span className="quickbar__icon"><Megaphone size={18} /></span>
                <div>
                  <strong>Currently Open</strong>
                  <p>6 active digital services</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="marquee-bar" aria-label="Council categories">
          <div className="marquee-bar__track">
            <span>Health</span>
            <span>Sports</span>
            <span>Education</span>
            <span>Livelihood</span>
            <span>Environment</span>
            <span>Wellness</span>
            <span>Health</span>
            <span>Sports</span>
            <span>Education</span>
            <span>Livelihood</span>
            <span>Environment</span>
            <span>Wellness</span>
          </div>
        </section>

        <section className="section services-section" id="services">
          <div className="container section-head reveal">
            <div>
              <span className="eyebrow">What's New</span>
              <h2>Latest Posted Services</h2>
            </div>
            <p>
              Recently announced digital programs and council actions from SK Malanday.
            </p>
          </div>

          <div className="container services-grid">
            {services.map((service, index) => {
              const Icon = service.icon

              return (
                <article key={service.title} className="service-card reveal" style={{ animationDelay: `${index * 90}ms` }}>
                  <div className={`service-card__badge service-card__badge--${service.tone}`}>
                    {service.tag}
                  </div>
                  <div className="service-card__art">
                    <span className={`service-card__icon service-card__icon--${service.tone}`}>
                      <Icon size={18} />
                    </span>
                  </div>
                  <div className="service-card__body">
                    <span className="service-card__date">{service.date}</span>
                    <h3>{service.title}</h3>
                    <p>{service.description}</p>
                    <a href="#contacts" className="service-card__link">
                      {service.actionText} <ArrowRight size={15} />
                    </a>
                  </div>
                </article>
              )
            })}
          </div>
        </section>

        <section className="section stats-section">
          <div className="container stats-grid reveal">
            <div>
              <strong>1,240+</strong>
              <span>Verified Youth</span>
            </div>
            <div>
              <strong>36</strong>
              <span>Programs Logged</span>
            </div>
            <div>
              <strong>18</strong>
              <span>Active Puroks</span>
            </div>
            <div>
              <strong>₱1.2M</strong>
              <span>Funds Distributed</span>
            </div>
          </div>
        </section>

        <section className="section about-section" id="about">
          <div className="container about-grid">
            <div className="about-grid__visual reveal">
              <svg viewBox="0 0 400 320" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
                <rect width="400" height="320" fill="#0f172a" />
                <line x1="0" y1="80" x2="400" y2="80" stroke="#64748b" strokeWidth="1" opacity="0.32" />
                <line x1="0" y1="160" x2="400" y2="160" stroke="#64748b" strokeWidth="1" opacity="0.32" />
                <line x1="0" y1="240" x2="400" y2="240" stroke="#64748b" strokeWidth="1" opacity="0.32" />
                <circle cx="300" cy="160" r="60" fill="none" stroke="#059669" strokeWidth="2" opacity="0.42" />
              </svg>
            </div>

            <div className="about-grid__copy reveal">
              <span className="eyebrow">Who We Are</span>
              <h2>The statutory youth government of Barangay Malanday.</h2>
              <p>
                The Sangguniang Kabataan represents stakeholders aged 15–30. In Malanday, the youth council builds data-backed local action plans targeting institutional education, healthcare access, and structured vocational employment pipelines.
              </p>
              <ul>
                <li><span><Check size={12} strokeWidth={3} /></span>Audited allocation metrics of the local SK Fund</li>
                <li><span><Check size={12} strokeWidth={3} /></span>Synchronized coordination with Marikina City Government</li>
                <li><span><Check size={12} strokeWidth={3} /></span>Direct community engagement structures across all sectors</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="section contacts-section" id="contacts">
          <div className="container contacts-panel reveal">
            <div>
              <span className="eyebrow">Contacts</span>
              <h2>Reach the council directly.</h2>
            </div>
            <div className="contacts-panel__list">
              <a href="mailto:sk.malanday@marikina.gov.ph">sk.malanday@marikina.gov.ph</a>
              <a href="#home">Malanday Barangay Hall</a>
              <span>Operations: Mon–Fri</span>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-grid">
          <div className="footer-brand">
            <div className="brand-lockup brand-lockup--footer">
              <span className="brand-lockup__crest">
                <img src={skLogo} alt="SK Logo" />
              </span>
              <span className="brand-lockup__text">
                <span>SK Malanday</span>
                <small>Marikina City</small>
              </span>
            </div>
            <p>
              Official communication vector and system repository of the Sangguniang Kabataan ng Malanday.
            </p>
          </div>

          <div>
            <h3>Portal Map</h3>
            <a href="#home">Home Interface</a>
            <a href="#about">About Council</a>
            <a href="#services">Services Portal</a>
            <a href="#contacts">Public Contacts</a>
          </div>

          <div>
            <h3>Services</h3>
            <a href="#services">Scholarship Schemes</a>
            <a href="#services">Healthcare Assists</a>
            <a href="#services">Recreational Leagues</a>
            <a href="#services">Vocational Pipelines</a>
          </div>

          <div>
            <h3>Headquarters</h3>
            <a href="#home">Malanday Barangay Hall</a>
            <a href="mailto:sk.malanday@marikina.gov.ph">sk.malanday@marikina.gov.ph</a>
            <span>Operations: Mon–Fri</span>
          </div>
        </div>

        <div className="container footer-meta">
          <span>© 2026 Sangguniang Kabataan ng Malanday. Systems operational.</span>
          <span>Conceptual architecture • Unofficial Interface Development</span>
        </div>
      </footer>

      {isNavOpen ? <button type="button" className="nav-overlay" aria-label="Close navigation" onClick={() => setIsNavOpen(false)} /> : null}
    </div>
  )
}