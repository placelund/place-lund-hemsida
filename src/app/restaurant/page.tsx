import Image from 'next/image'
import Link from 'next/link'
import BookingLink from '@/components/BookingLink'

export const metadata = {
  title: 'Restaurant & Bar in Lund - Place Lund Hotel | A Place to Eat',
  description: 'Enjoy breakfast buffet and bar service at Place Lund Hotel in Lund, Sweden. Bar open daily 11 AM-9 PM. Outdoor garden seating available.',
}

interface WeeklyMenuItem {
  week: number
  day: string
  breakfast: string
  lunch: string
  dinner: string
}

async function getWeeklyMenu() {
  try {
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'
    const response = await fetch(`${baseUrl}/api/weekly-menu`, {
      next: { revalidate: 60 }, // Revalidate every minute - auto-updates current week highlighting
    })

    if (!response.ok) {
      throw new Error('Failed to fetch weekly menu')
    }

    const data = await response.json()
    return data
  } catch (error) {
    console.error('Error fetching weekly menu:', error)
    return {
      menu: [],
      currentWeek: 1,
      source: 'error',
    }
  }
}

function getCurrentDayAndDate() {
  const now = new Date()
  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

  return {
    dayName: days[now.getDay()],
    date: `${months[now.getMonth()]} ${now.getDate()}, ${now.getFullYear()}`,
    weekNumber: getWeekNumber(now)
  }
}

function getWeekNumber(date: Date) {
  const d = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()))
  const dayNum = d.getUTCDay() || 7
  d.setUTCDate(d.getUTCDate() + 4 - dayNum)
  const yearStart = new Date(Date.UTC(d.getUTCFullYear(), 0, 1))
  return Math.ceil((((d.getTime() - yearStart.getTime()) / 86400000) + 1) / 7)
}

export default async function RestaurantPage() {
  const { menu, currentWeek, source } = await getWeeklyMenu()
  const { dayName, date, weekNumber } = getCurrentDayAndDate()

  // Filter menu by week and organize by day
  const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']

  const oddWeekMenu = daysOfWeek.map(day => {
    const dayMenu = menu.find((item: WeeklyMenuItem) => item.week === 1 && item.day === day)
    return {
      day,
      breakfast: dayMenu?.breakfast || 'Continental breakfast',
      dinner: dayMenu?.dinner || 'Chef\'s special',
    }
  })

  const evenWeekMenu = daysOfWeek.map(day => {
    const dayMenu = menu.find((item: WeeklyMenuItem) => item.week === 2 && item.day === day)
    return {
      day,
      breakfast: dayMenu?.breakfast || 'Continental breakfast',
      dinner: dayMenu?.dinner || 'Chef\'s special',
    }
  })

  const isOddWeek = currentWeek === 1

  return (
    <main className="min-h-screen">
      {/* Hero Section - "A Place to Eat" */}
      <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center">
        <Image
          src="/images/resturaunt/resturaunt-hero.jpeg"
          alt="Restaurant and dining at Place Lund Hotel"
          fill
          quality={100}
          className="object-cover"
          priority
        />
        <div className="relative z-20 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            A Place to Eat
          </h1>
        </div>
      </section>

      {/* Green Banner Section */}
      <section className="bg-[#004225] text-white py-8 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-lg text-white/90">
            Enjoy breakfast buffet service for hotel guests and our welcoming bar open to all visitors daily.
          </p>
        </div>
      </section>

      {/* Restaurant Images Section */}
      <section className="py-16 px-4 bg-[#FFFAF2]">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#004225] mb-6">
            Restaurant Gallery
          </h2>
          <p className="text-lg text-gray-700">
            Take a look at our restaurant, bar, and dining spaces.
          </p>
        </div>

        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="relative h-[300px] overflow-hidden rounded-lg">
              <Image
                src="/images/resturaunt/resturaunt-1.jpeg"
                alt="Restaurant dining area"
                fill
                quality={100}
                className="object-cover"
              />
            </div>
            <div className="relative h-[300px] overflow-hidden rounded-lg">
              <Image
                src="/images/resturaunt/resturaunt-2.jpeg"
                alt="Restaurant bar area"
                fill
                quality={100}
                className="object-cover"
              />
            </div>
            <div className="relative h-[300px] overflow-hidden rounded-lg">
              <Image
                src="/images/resturaunt/resturaunt-3.jpeg"
                alt="Restaurant interior"
                fill
                quality={100}
                className="object-cover"
              />
            </div>
            <div className="relative h-[300px] overflow-hidden rounded-lg">
              <Image
                src="/images/resturaunt/resturaunt-4.jpeg"
                alt="Restaurant seating area"
                fill
                quality={100}
                className="object-cover"
              />
            </div>
            <div className="relative h-[300px] overflow-hidden rounded-lg">
              <Image
                src="/images/resturaunt/resturaunt-hero.jpeg"
                alt="Restaurant overview"
                fill
                quality={100}
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Breakfast Section */}
      <section className="py-16 px-4 bg-[#FFFAF2]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#004225] mb-6">
                Breakfast Buffet
              </h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Start your day with our complimentary breakfast buffet, featuring a delicious selection of fresh items. Enjoy fresh bread, croissants, coffee, tea, juice, and a variety of cold buffet options to suit all tastes.
              </p>

              <div className="bg-[#f5f5f5] p-6 rounded-lg border-2 border-[#004225] mb-6">
                <h3 className="text-xl font-bold text-[#004225] mb-4">Breakfast Includes</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="text-[#004225] font-bold text-xl">•</span>
                    <span className="text-gray-700">Fresh bread and croissants</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#004225] font-bold text-xl">•</span>
                    <span className="text-gray-700">Coffee, tea, and juice</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#004225] font-bold text-xl">•</span>
                    <span className="text-gray-700">Cold buffet selections (cheese, cold cuts, yogurt)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#004225] font-bold text-xl">•</span>
                    <span className="text-gray-700">Fresh fruit and cereal</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#004225] font-bold text-xl">•</span>
                    <span className="text-gray-700">Vegetarian and vegan options</span>
                  </li>
                </ul>
              </div>

              <div className="bg-[#FFFAF2] p-6 rounded-lg border-2 border-[#42001D]">
                <h3 className="text-xl font-bold text-[#42001D] mb-3">Important Note</h3>
                <p className="text-gray-700">
                  Breakfast is complimentary for <strong>hotel room guests only</strong>. Not included with studio or apartment stays.
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="relative h-[400px] overflow-hidden rounded-lg">
                <Image
                  src="/images/resturaunt/resturaunt-1.jpeg"
                  alt="Breakfast buffet at Place Lund Hotel"
                  fill
                  quality={100}
                  loading="lazy"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Weekly Menu Section */}
      <section className="py-16 px-4 bg-[#FFFAF2]">
        <div className="max-w-6xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#004225] mb-4">
            Weekly Menu
          </h2>
          <p className="text-lg text-gray-800 max-w-2xl mx-auto mb-6">
            Our menu rotates every two weeks with fresh breakfast and dinner options.
          </p>

          {/* Current Day and Week Display */}
          <div className="flex flex-col md:flex-row gap-4 justify-center items-center mb-4">
            <div className="bg-[#004225] text-white px-6 py-3 rounded-lg">
              <p className="text-sm font-semibold">Today</p>
              <p className="text-xl font-bold">{dayName}</p>
              <p className="text-sm">{date}</p>
            </div>
            <div className="bg-[#42001D] text-white px-6 py-3 rounded-lg">
              <p className="text-sm font-semibold">Current Week</p>
              <p className="text-2xl font-bold">{isOddWeek ? 'Odd Week' : 'Even Week'}</p>
              <p className="text-sm">Week {weekNumber} of {new Date().getFullYear()}</p>
            </div>
          </div>

          <p className="text-sm text-gray-600 italic">
            Note: Menu may change based on availability
          </p>
        </div>

        {/* Two Column Menu Layout */}
        <div className="max-w-7xl mx-auto px-4">
          <div className="mb-8 text-center">
            <h3 className="text-2xl font-bold text-[#004225] mb-2">
              2-Week Rotating Menu
            </h3>
            <p className="text-gray-700">
              Breakfast and dinner included for hotel room guests.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Odd Week Menu */}
            <div className={`bg-[#FFFAF2] rounded-xl border-4 p-6 ${isOddWeek ? 'border-[#004225] shadow-xl' : 'border-gray-300'}`}>
              <div className="text-center mb-6">
                <h4 className="text-3xl font-bold text-[#004225] mb-2">Odd Weeks</h4>
                {isOddWeek && (
                  <span className="inline-block bg-[#004225] text-white px-4 py-1 rounded-full text-sm font-semibold">
                    Current Week
                  </span>
                )}
              </div>

              <div className="space-y-6">
                {oddWeekMenu.map((dayMenu, index) => (
                  <div key={index} className="border-b border-gray-200 pb-4 last:border-b-0">
                    <h5 className="font-bold text-[#004225] mb-3 text-lg">{dayMenu.day}</h5>
                    <div className="space-y-2">
                      <div>
                        <p className="text-sm font-semibold text-[#42001D]">Breakfast</p>
                        <p className="text-gray-700 text-sm">{dayMenu.breakfast}</p>
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-[#42001D]">Dinner</p>
                        <p className="text-gray-700 text-sm">{dayMenu.dinner}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Even Week Menu */}
            <div className={`bg-[#FFFAF2] rounded-xl border-4 p-6 ${!isOddWeek ? 'border-[#004225] shadow-xl' : 'border-gray-300'}`}>
              <div className="text-center mb-6">
                <h4 className="text-3xl font-bold text-[#004225] mb-2">Even Weeks</h4>
                {!isOddWeek && (
                  <span className="inline-block bg-[#004225] text-white px-4 py-1 rounded-full text-sm font-semibold">
                    Current Week
                  </span>
                )}
              </div>

              <div className="space-y-6">
                {evenWeekMenu.map((dayMenu, index) => (
                  <div key={index} className="border-b border-gray-200 pb-4 last:border-b-0">
                    <h5 className="font-bold text-[#004225] mb-3 text-lg">{dayMenu.day}</h5>
                    <div className="space-y-2">
                      <div>
                        <p className="text-sm font-semibold text-[#42001D]">Breakfast</p>
                        <p className="text-gray-700 text-sm">{dayMenu.breakfast}</p>
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-[#42001D]">Dinner</p>
                        <p className="text-gray-700 text-sm">{dayMenu.dinner}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Menu Info */}
          <div className="mt-12 bg-[#FFFAF2] p-8 rounded-xl border-2 border-[#004225]">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-xl font-bold text-[#004225] mb-4">Menu Information</h4>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-3">
                    <span className="text-[#004225] font-bold text-xl">•</span>
                    <span>Menu rotates on a 2-week cycle (odd/even weeks)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#004225] font-bold text-xl">•</span>
                    <span>Contact for vegetarian/vegan options</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#004225] font-bold text-xl">•</span>
                    <span>Special dietary requirements can be accommodated</span>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="text-xl font-bold text-[#004225] mb-4">Meal Times</h4>
                <div className="space-y-4">
                  <div>
                    <p className="font-bold text-[#42001D]">Breakfast</p>
                    <p className="text-gray-700">7:00 AM - 9:30 AM</p>
                    <p className="text-sm text-gray-600 italic">Included for hotel room guests</p>
                  </div>
                  <div>
                    <p className="font-bold text-[#42001D]">Dinner</p>
                    <p className="text-gray-700">6:00 PM - 8:00 PM</p>
                    <p className="text-sm text-gray-600 italic">Included for hotel room guests</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bar Section - "A Place to Drink" */}
      <section className="py-16 px-4 bg-[#FFFAF2]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#004225] mb-4">
              A Place to Drink
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Our bar welcomes both hotel guests and visitors for drinks, coffee, and casual socializing in a relaxed atmosphere.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-[#FFFAF2] p-8 rounded-lg border-2 border-[#004225]">
              <h3 className="text-2xl font-bold text-[#004225] mb-6">Bar Offerings</h3>
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div>
                  <h4 className="font-bold text-[#004225] mb-3">Alcoholic</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Beer</li>
                    <li>• Wine</li>
                    <li>• Cider</li>
                    <li>• Cocktails</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-[#004225] mb-3">Non-Alcoholic</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Coffee</li>
                    <li>• Tea</li>
                    <li>• Soft drinks</li>
                    <li>• Alcohol-free beverages</li>
                  </ul>
                </div>
              </div>
              <p className="text-gray-700 text-sm italic">
                Coffee and tea available for casual visitors
              </p>
            </div>

            <div className="bg-[#FFFAF2] p-8 rounded-lg border-2 border-[#004225]">
              <h3 className="text-2xl font-bold text-[#004225] mb-6">Opening Hours</h3>
              <div className="space-y-4">
                <div className="bg-[#f5f5f5] p-6 rounded-lg">
                  <p className="text-2xl font-bold text-[#004225] mb-2">11:00 AM - 9:00 PM</p>
                  <p className="text-gray-700">Daily</p>
                </div>
                <p className="text-gray-700 text-sm italic">
                  Note: May close earlier during periods of low occupancy
                </p>
              </div>

              <div className="mt-6 pt-6 border-t border-gray-200">
                <h4 className="font-bold text-[#004225] mb-3">Special Features</h4>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 font-bold">•</span>
                    <span>Outdoor garden seating (summer)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 font-bold">•</span>
                    <span>Casual visitors welcome</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 font-bold">•</span>
                    <span>Coffee and tea available</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Atmosphere & Features */}
      <section className="py-16 px-4 bg-[#FFFAF2]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#004225] mb-6">
            Relax & Unwind
          </h2>
          <p className="text-lg text-gray-700 mb-8">
            Whether you're starting your day with breakfast or unwinding with an evening drink, our restaurant and bar offer a welcoming atmosphere for hotel guests and local visitors alike.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-[#f5f5f5] p-6 rounded-lg">
              <h3 className="text-xl font-bold text-[#004225] mb-3">Breakfast Buffet</h3>
              <p className="text-gray-700">Daily breakfast for hotel guests with vegetarian and vegan options</p>
            </div>
            <div className="bg-[#f5f5f5] p-6 rounded-lg">
              <h3 className="text-xl font-bold text-[#004225] mb-3">Bar Service</h3>
              <p className="text-gray-700">Drinks, coffee, and light refreshments daily from 11 AM to 9 PM</p>
            </div>
            <div className="bg-[#f5f5f5] p-6 rounded-lg">
              <h3 className="text-xl font-bold text-[#004225] mb-3">Garden Seating</h3>
              <p className="text-gray-700">Enjoy outdoor seating in our beautiful garden area during summer</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact & CTA */}
      <section className="bg-[#004225] text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Visit Our Restaurant & Bar
          </h2>
          <p className="text-lg mb-8 text-white/90">
            Questions about our restaurant or bar service? Get in touch with us for more information or to book a hotel room with breakfast included.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 text-left">
            <div>
              <h3 className="font-bold mb-2">Phone</h3>
              <a href="tel:+46463336 00" className="text-white/90 hover:text-white transition-colors">
                046 - 33 36 00
              </a>
            </div>
            <div>
              <h3 className="font-bold mb-2">Email</h3>
              <a href="mailto:info@placelund.se" className="text-white/90 hover:text-white transition-colors">
                info@placelund.se
              </a>
            </div>
            <div>
              <h3 className="font-bold mb-2">Address</h3>
              <p className="text-white/90">
                Margaretavägen 7<br />
                222 40 Lund, Sweden
              </p>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <BookingLink className="bg-[#FFFAF2] text-[#004225] font-semibold py-3 px-8 rounded-md hover:bg-[#42001D] hover:text-white transition-colors">
              Book a Room
            </BookingLink>
            <Link
              href="/contact"
              className="border-2 border-white text-white font-semibold py-3 px-8 rounded-md hover:bg-[#FFFAF2]/10 transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
