export default function FAQSection() {
  return (
    <section className="py-16 px-4 bg-[#f5f5f5]">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-[#004225] text-center mb-12">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          {/* FAQ Item 1 */}
          <details className="group border border-[#004225]/30 rounded-lg overflow-hidden bg-[#FFFAF2]">
            <summary className="cursor-pointer p-6 font-semibold text-[#004225] hover:bg-[#FFFAF2] transition-colors list-none flex items-center justify-between">
              <span>What meals are included with my stay?</span>
              <span className="text-[#42001D] transition-transform group-open:rotate-180">▼</span>
            </summary>
            <div className="p-6 pt-0 text-gray-700">
              <p>All hotel room bookings include both breakfast and dinner. Our breakfast features fresh bread, croissants, coffee, tea, and juice. Dinner is also provided daily. We offer vegetarian and vegan options.</p>
            </div>
          </details>

          {/* FAQ Item 2 */}
          <details className="group border border-[#004225]/30 rounded-lg overflow-hidden bg-[#FFFAF2]">
            <summary className="cursor-pointer p-6 font-semibold text-[#004225] hover:bg-[#FFFAF2] transition-colors list-none flex items-center justify-between">
              <span>Are pets allowed in the hotel rooms?</span>
              <span className="text-[#42001D] transition-transform group-open:rotate-180">▼</span>
            </summary>
            <div className="p-6 pt-0 text-gray-700">
              <p>Select rooms allow dogs. There is a fee of 250kr per pet for the full stay. No animals are allowed in the dining hall. Specifically, certain Twin Rooms on the 2nd floor and some Double Deluxe rooms on the 2nd floor are pet-friendly. Please contact us when booking to ensure availability.</p>
            </div>
          </details>

          {/* FAQ Item 3 */}
          <details className="group border border-[#004225]/30 rounded-lg overflow-hidden bg-[#FFFAF2]">
            <summary className="cursor-pointer p-6 font-semibold text-[#004225] hover:bg-[#FFFAF2] transition-colors list-none flex items-center justify-between">
              <span>What is the check-in and check-out time?</span>
              <span className="text-[#42001D] transition-transform group-open:rotate-180">▼</span>
            </summary>
            <div className="p-6 pt-0 text-gray-700">
              <p>Check-in is from 3:00 PM and check-out is until 11:00 AM. If you need early check-in or late check-out, please contact us in advance and we will do our best to accommodate your request.</p>
            </div>
          </details>

          {/* FAQ Item 4 */}
          <details className="group border border-[#004225]/30 rounded-lg overflow-hidden bg-[#FFFAF2]">
            <summary className="cursor-pointer p-6 font-semibold text-[#004225] hover:bg-[#FFFAF2] transition-colors list-none flex items-center justify-between">
              <span>Is WiFi available in all rooms?</span>
              <span className="text-[#42001D] transition-transform group-open:rotate-180">▼</span>
            </summary>
            <div className="p-6 pt-0 text-gray-700">
              <p>Yes, free high-speed WiFi is available in all hotel rooms and throughout the property. You will receive connection details at check-in.</p>
            </div>
          </details>

          {/* FAQ Item 5 */}
          <details className="group border border-[#004225]/30 rounded-lg overflow-hidden bg-[#FFFAF2]">
            <summary className="cursor-pointer p-6 font-semibold text-[#004225] hover:bg-[#FFFAF2] transition-colors list-none flex items-center justify-between">
              <span>Is parking available at the hotel?</span>
              <span className="text-[#42001D] transition-transform group-open:rotate-180">▼</span>
            </summary>
            <div className="p-6 pt-0 text-gray-700">
              <p>Yes, parking is available for guests. Please contact us for specific details about parking locations and any associated fees.</p>
            </div>
          </details>

          {/* FAQ Item 6 */}
          <details className="group border border-[#004225]/30 rounded-lg overflow-hidden bg-[#FFFAF2]">
            <summary className="cursor-pointer p-6 font-semibold text-[#004225] hover:bg-[#FFFAF2] transition-colors list-none flex items-center justify-between">
              <span>How far is the hotel from Lund University?</span>
              <span className="text-[#42001D] transition-transform group-open:rotate-180">▼</span>
            </summary>
            <div className="p-6 pt-0 text-gray-700">
              <p>Place Lund Hotel is located in northern Lund with easy access to Lund University, LTH (Faculty of Engineering), and the University Hospital. All are within a few minutes' commute from the hotel.</p>
            </div>
          </details>
        </div>
      </div>
    </section>
  )
}
