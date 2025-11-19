'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

interface WeeklyMenuItem {
  week: number
  day: string
  breakfast: string
  lunch: string
  dinner: string
}

interface MenuData {
  menu: WeeklyMenuItem[]
  currentWeek: number
  source: string
}

export default function DailyMenu() {
  const [todayMenu, setTodayMenu] = useState<WeeklyMenuItem | null>(null)
  const [tomorrowMenu, setTomorrowMenu] = useState<WeeklyMenuItem | null>(null)
  const [loading, setLoading] = useState(true)
  const [todayIsWeekend, setTodayIsWeekend] = useState(false)
  const [tomorrowIsWeekend, setTomorrowIsWeekend] = useState(false)

  useEffect(() => {
    async function fetchMenu() {
      try {
        const response = await fetch('/api/weekly-menu')
        const data: MenuData = await response.json()

        const now = new Date()
        const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']

        const todayDayName = days[now.getDay()]
        const todayDayNumber = now.getDay()
        const tomorrow = new Date(now)
        tomorrow.setDate(tomorrow.getDate() + 1)
        const tomorrowDayName = days[tomorrow.getDay()]
        const tomorrowDayNumber = tomorrow.getDay()

        // Check if weekend (0 = Sunday, 6 = Saturday)
        setTodayIsWeekend(todayDayNumber === 0 || todayDayNumber === 6)
        setTomorrowIsWeekend(tomorrowDayNumber === 0 || tomorrowDayNumber === 6)

        // Find today's and tomorrow's menu items
        const currentWeekMenu = data.menu.filter(item => item.week === data.currentWeek)

        // Trim day names to handle any whitespace/newline characters
        const today = currentWeekMenu.find(item => item.day.trim() === todayDayName)
        const nextDay = currentWeekMenu.find(item => item.day.trim() === tomorrowDayName)

        setTodayMenu(today || null)
        setTomorrowMenu(nextDay || null)
      } catch (error) {
        console.error('Error fetching menu:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchMenu()
  }, [])

  if (loading) {
    return (
      <section className="bg-[#FFFAF2] py-16 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <p className="text-[#004225]">Loading menu...</p>
        </div>
      </section>
    )
  }

  return (
    <section className="bg-[#FFFAF2]">
      {/* Restaurant Banner */}
      <div className="bg-[#42001D] py-3 px-4 flex items-center justify-center">
        <div className="flex items-center justify-center w-full">
          <svg
            className="select-none w-full overflow-visible block aspect-[100/6] text-[6rem] font-bold uppercase leading-none"
            viewBox="0 0 1440 60"
          >
            <text
              x="50%"
              y="50"
              textAnchor="middle"
              className="fill-[#FFFAF2] text-[2.5rem] md:text-[3.5rem] font-bold uppercase"
            >
              Restaurant
            </text>
          </svg>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2">
        {/* Left side - Menu content */}
        <div className="bg-[#FFFAF2] py-8 px-8 md:px-16">
          <div className="w-full">
            {/* Today and Tomorrow side by side */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-12">
              {/* Today's Menu */}
              <div>
                <div className="mb-6">
                  <span className="inline-block bg-[#004225] text-[#FFFAF2] px-6 py-3 rounded-full text-lg font-semibold uppercase">
                    Today
                  </span>
                </div>
                {todayMenu ? (
                  <>
                    <h3 className="text-2xl font-bold text-[#004225] mb-6">
                      {todayMenu.day}
                    </h3>

                    {/* Meals */}
                    <div className="space-y-4">
                      {/* Breakfast */}
                      <div className="border-l-4 border-[#004225] pl-4">
                        <h4 className="text-xl font-bold text-[#004225] mb-1">
                          {todayIsWeekend ? '7:30 - 10:00' : '6:30 - 9:00'}
                        </h4>
                        <p className="text-gray-700">Continental Breakfast</p>
                      </div>

                      {/* Dinner */}
                      <div className="border-l-4 border-[#42001D] pl-4">
                        <h4 className="text-xl font-bold text-[#42001D] mb-1">
                          18:00 - 19:30
                        </h4>
                        <p className="text-gray-700">
                          {todayMenu.lunch && todayMenu.lunch.toLowerCase() !== 'n/a'
                            ? todayMenu.lunch
                            : "Chef's Special"}
                        </p>
                      </div>
                    </div>
                  </>
                ) : (
                  <p className="text-gray-700">Menu information unavailable</p>
                )}
              </div>

              {/* Tomorrow's Menu */}
              <div>
                <div className="mb-6">
                  <span className="inline-block bg-[#42001D] text-[#FFFAF2] px-6 py-3 rounded-full text-lg font-semibold uppercase">
                    Tomorrow
                  </span>
                </div>
                {tomorrowMenu ? (
                  <>
                    <h3 className="text-2xl font-bold text-[#004225] mb-6">
                      {tomorrowMenu.day}
                    </h3>

                    {/* Meals */}
                    <div className="space-y-4">
                      {/* Breakfast */}
                      <div className="border-l-4 border-[#004225] pl-4">
                        <h4 className="text-xl font-bold text-[#004225] mb-1">
                          {tomorrowIsWeekend ? '7:30 - 10:00' : '6:30 - 9:00'}
                        </h4>
                        <p className="text-gray-700">Continental Breakfast</p>
                      </div>

                      {/* Dinner */}
                      <div className="border-l-4 border-[#42001D] pl-4">
                        <h4 className="text-xl font-bold text-[#42001D] mb-1">
                          18:00 - 19:30
                        </h4>
                        <p className="text-gray-700">
                          {tomorrowMenu.lunch && tomorrowMenu.lunch.toLowerCase() !== 'n/a'
                            ? tomorrowMenu.lunch
                            : "Chef's Special"}
                        </p>
                      </div>
                    </div>
                  </>
                ) : (
                  <p className="text-gray-700">Menu information unavailable</p>
                )}
              </div>
            </div>

            {/* Restaurant Description */}
            <div className="border-t-2 border-[#004225] pt-8">
              <p className="text-gray-700 leading-relaxed">
                Experience exceptional dining at Place Lund Hotel. Our restaurant features locally sourced ingredients and traditional Swedish cuisine with a modern twist. Breakfast and dinner are included for hotel room guests. Enjoy our continental breakfast buffet and evening one-dish buffet dinner.
              </p>
            </div>
          </div>
        </div>

        {/* Right side - Restaurant image */}
        <div className="relative h-[400px] md:h-[500px]">
          <Image
            src="/images/resturaunt/resturaunt-hero.jpeg"
            alt="Restaurant"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
            priority
          />

          {/* Learn More Button */}
          <div className="absolute bottom-8 left-8">
            <Link href="/restaurant" className="bg-white text-[#004225] py-3 px-6 font-semibold hover:bg-[#42001D] hover:text-white transition-colors inline-block">
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
