import { useMemo, useState } from 'react'
import './App.css'

const bookingUrl = 'https://royal-fadez23.square.site/s/appointments'
const originalSiteUrl = 'https://royal-fadez23.square.site/'

const services = [
  {
    name: 'Mens Wax Brow + Haircut',
    description: 'Masculine waxed eyebrow shaping with a precision haircut.',
    price: '$50',
    duration: '45 mins',
  },
  {
    name: 'Mens Beard and Haircut',
    description: 'A clean haircut, hot towel finish, and sharp beard shaping.',
    price: '$65',
    duration: '50 mins',
  },
  {
    name: "Men's Haircut",
    description:
      'No age requirement for kids. Child must be able to sit in the barber chair on their own.',
    price: '$40',
    duration: '30 mins',
  },
  {
    name: 'Beard + Haircut + Eyebrow Wax',
    description: 'The full refresh: fade, beard work, brow cleanup, and polished finish.',
    price: '$75',
    duration: '1 hr',
  },
]

const hours = [
  ['Monday', '11:00 am - 4:00 pm'],
  ['Tuesday', '7:00 am - 4:00 pm'],
  ['Wednesday', '7:00 am - 4:00 pm'],
  ['Thursday', '7:00 am - 4:00 pm'],
  ['Friday', '7:00 am - 5:00 pm'],
  ['Saturday', 'Closed'],
  ['Sunday', 'Closed'],
]

const gallery = [
  {
    src: 'https://images.unsplash.com/photo-1599351431202-1e0f0137899a?auto=format&fit=crop&w=900&q=82',
    alt: 'Fresh fade haircut being detailed by a barber',
  },
  {
    src: 'https://images.unsplash.com/photo-1621605815971-fbc98d665033?auto=format&fit=crop&w=900&q=82',
    alt: 'Barber shaping a beard with clippers',
  },
  {
    src: 'https://images.unsplash.com/photo-1585747860715-2ba37e788b70?auto=format&fit=crop&w=900&q=82',
    alt: 'Classic barber chair in a modern shop',
  },
]

function App() {
  const [activeTab, setActiveTab] = useState('services')

  const nextOpenDay = useMemo(() => {
    const today = new Date().toLocaleDateString('en-US', { weekday: 'long' })
    const match = hours.find(([day, time]) => day === today && time !== 'Closed')
    return match ? `Open today ${match[1]}` : 'Book the next available appointment'
  }, [])

  return (
    <main>
      <header className="site-header" aria-label="Royal Fadez primary navigation">
        <a className="brand" href="#top" aria-label="Royal Fadez home">
          <span className="brand-mark">RF</span>
          <span>
            <strong>Royal Fadez</strong>
            <small>Warrenton, Oregon</small>
          </span>
        </a>
        <nav>
          <a href="#services">Services</a>
          <a href="#hours">Hours</a>
          <a href="tel:+19713260655">Call</a>
          <a className="nav-cta" href={bookingUrl} target="_blank" rel="noreferrer">
            Book
          </a>
        </nav>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow">{nextOpenDay} · (971) 326-0655</p>
          <h1>Sharp fades, clean beard work, and appointment booking without the friction.</h1>
          <p className="hero-text">
            Royal Fadez brings detailed cuts, hot towel service, beard shaping, and brow
            cleanup to Harbor Drive with a cleaner booking experience for every client.
          </p>
          <div className="hero-actions">
            <a className="button primary" href={bookingUrl} target="_blank" rel="noreferrer">
              Book an appointment
            </a>
            <a className="button secondary" href={originalSiteUrl} target="_blank" rel="noreferrer">
              My bookings
            </a>
          </div>
          <dl className="quick-stats" aria-label="Royal Fadez highlights">
            <div>
              <dt>From</dt>
              <dd>$40</dd>
            </div>
            <div>
              <dt>Fast cuts</dt>
              <dd>30 min</dd>
            </div>
            <div>
              <dt>Address</dt>
              <dd>936 Harbor Dr.</dd>
            </div>
          </dl>
        </div>
        <div className="hero-media" aria-label="Barber haircut photography">
          <img
            className="hero-main-img"
            src="https://images.unsplash.com/photo-1517832606299-7ae9b720a186?auto=format&fit=crop&w=1100&q=82"
            alt="Barber finishing a fresh haircut"
          />
          <div className="booking-panel">
            <span>Next step</span>
            <strong>Choose service, pick a time, and roll in ready.</strong>
            <a href={bookingUrl} target="_blank" rel="noreferrer">
              Start booking
            </a>
          </div>
        </div>
      </section>

      <section className="gallery" aria-label="Fresh cut gallery">
        {gallery.map((image) => (
          <img key={image.src} src={image.src} alt={image.alt} />
        ))}
      </section>

      <section className="content-band" id="services">
        <div className="section-heading">
          <p className="eyebrow">Service menu</p>
          <h2>Keep the Square booking flow. Make the decision feel premium.</h2>
          <p>
            Same core services, pricing, and staff flow from the current website, redesigned
            for easier scanning and stronger first impressions.
          </p>
        </div>

        <div className="tabs" role="tablist" aria-label="Service menu tabs">
          <button
            type="button"
            role="tab"
            aria-selected={activeTab === 'services'}
            onClick={() => setActiveTab('services')}
          >
            Services
          </button>
          <button
            type="button"
            role="tab"
            aria-selected={activeTab === 'staff'}
            onClick={() => setActiveTab('staff')}
          >
            Staff
          </button>
        </div>

        {activeTab === 'services' ? (
          <div className="service-grid">
            {services.map((service) => (
              <article className="service-card" key={service.name}>
                <div>
                  <p className="service-meta">
                    {service.price} · {service.duration}
                  </p>
                  <h3>{service.name}</h3>
                  <p>{service.description}</p>
                </div>
                <a href={bookingUrl} target="_blank" rel="noreferrer">
                  Book now
                </a>
              </article>
            ))}
          </div>
        ) : (
          <div className="staff-card">
            <img
              src="https://images.unsplash.com/photo-1605497788044-5a32c7078486?auto=format&fit=crop&w=700&q=82"
              alt="Barber preparing clippers for a haircut"
            />
            <div>
              <p className="eyebrow">Your barber</p>
              <h3>Katrina Edwin</h3>
              <p>
                Detailed haircutting, beard shaping, hot towel service, and polished finishing
                for every appointment.
              </p>
              <a className="button primary" href={bookingUrl} target="_blank" rel="noreferrer">
                Book with Katrina
              </a>
            </div>
          </div>
        )}
      </section>

      <section className="visit-band" id="hours">
        <div className="location-panel">
          <p className="eyebrow">Location</p>
          <h2>Royal Fadez</h2>
          <a href="tel:+19713260655">(971) 326-0655</a>
          <a
            href="https://www.google.com/maps/search/?api=1&query=936+Harbor+Dr+Warrenton+Oregon"
            target="_blank"
            rel="noreferrer"
          >
            936 Harbor Dr. Warrenton, Oregon
          </a>
        </div>
        <div className="hours-panel">
          <p className="eyebrow">Hours</p>
          <div className="hours-list">
            {hours.map(([day, time]) => (
              <div className="hours-row" key={day}>
                <span>{day}</span>
                <strong>{time}</strong>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}

export default App
