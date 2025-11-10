import Link from 'next/link'

export const metadata = {
  title: 'Weekly Menu - Place Lund Hotel Restaurant | 2-Week Rotating Menu',
  description: 'View our weekly rotating menu at Place Lund Hotel restaurant in Lund, Sweden. Fresh breakfast and dinner options that change every two weeks.',
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
      next: { revalidate: 60 }, // Revalidate every minute
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

export default async function WeeklyMenuPage() {
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
      {/* Hero Section */}
      <section className="py-16 px-4 bg-[#FFFAF2]">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#004225] mb-4">
            Weekly Menu
          </h1>
          <p className="text-lg md:text-xl text-gray-800 max-w-2xl mx-auto mb-6">
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
      </section>

      {/* Weekly Menu Section - Two Column Layout */}
      <section className="py-16 px-4 bg-[#FFFAF2]">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-[#004225] mb-4">
              2-Week Rotating Menu
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Breakfast and dinner included for hotel room guests.
            </p>
          </div>

          {/* Two Column Menu Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Odd Week Menu */}
            <div className={`bg-[#FFFAF2] rounded-xl border-4 p-6 ${isOddWeek ? 'border-[#004225] shadow-xl' : 'border-gray-300'}`}>
              <div className="text-center mb-6">
                <h3 className="text-3xl font-bold text-[#004225] mb-2">Odd Weeks</h3>
                {isOddWeek && (
                  <span className="inline-block bg-[#004225] text-white px-4 py-1 rounded-full text-sm font-semibold">
                    Current Week
                  </span>
                )}
              </div>

              <div className="space-y-6">
                {oddWeekMenu.map((dayMenu, index) => (
                  <div key={index} className="border-b border-gray-200 pb-4 last:border-b-0">
                    <h4 className="font-bold text-[#004225] mb-3 text-lg">{dayMenu.day}</h4>
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
                <h3 className="text-3xl font-bold text-[#004225] mb-2">Even Weeks</h3>
                {!isOddWeek && (
                  <span className="inline-block bg-[#004225] text-white px-4 py-1 rounded-full text-sm font-semibold">
                    Current Week
                  </span>
                )}
              </div>

              <div className="space-y-6">
                {evenWeekMenu.map((dayMenu, index) => (
                  <div key={index} className="border-b border-gray-200 pb-4 last:border-b-0">
                    <h4 className="font-bold text-[#004225] mb-3 text-lg">{dayMenu.day}</h4>
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
                <h3 className="text-xl font-bold text-[#004225] mb-4">Menu Information</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-3">
                    <span className="text-[#004225] font-bold text-xl">•</span>
                    <span>Menu rotates on a 2-week cycle (odd/even weeks)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#004225] font-bold text-xl">•</span>
                    <span>Vegetarian and vegan options available</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#004225] font-bold text-xl">•</span>
                    <span>Special dietary requirements can be accommodated</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-bold text-[#004225] mb-4">Meal Times</h3>
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

      {/* CTA Section */}
      <section className="bg-[#004225] text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Experience Our Cuisine
          </h2>
          <p className="text-lg mb-8 text-white/90">
            Book a hotel room to enjoy complimentary breakfast and dinner with our rotating menu.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="https://online.bookvisit.com/accommodation?channelId=7f2bb109-b49b-49f0-8d2c-113614f7f872"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#FFFAF2] text-[#004225] font-semibold py-3 px-8 rounded-md hover:bg-[#42001D] hover:text-white transition-colors"
            >
              Book a Room
            </Link>
            <Link
              href="/restaurant"
              className="border-2 border-white text-white font-semibold py-3 px-8 rounded-md hover:bg-[#FFFAF2]/10 transition-colors"
            >
              Restaurant Info
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
