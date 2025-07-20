import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <main className="container mx-auto px-8 py-20">
        <div className="text-center space-y-8">
          {/* Main Headline */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight max-w-5xl mx-auto">
            Social media for showing up, not showing off.
          </h1>

          {/* Image Gallery - Horizontal Overlapping Layout */}
          <div className="w-full overflow-x-auto pb-16 pt-16 px-8">
            <div
              className="flex min-w-max justify-center items-center"
              style={{ marginLeft: "100px", marginRight: "100px" }}
            >
              {/* Card 1 - 20 degrees counter-clockwise, moved down */}
              <div className="relative flex-shrink-0 z-10" style={{ transform: "rotate(-9deg) translateY(30px)" }}>
                <div className="w-64 h-40 bg-gray-200 rounded-2xl shadow-lg">
                  <Image
                    src="/placeholder.svg?height=160&width=256"
                    alt="Pull Up moment"
                    width={256}
                    height={160}
                    className="w-full h-full object-cover rounded-2xl"
                  />
                </div>
                <div className="absolute -top-12 left-1/2 transform -translate-x-1/2">
                  <div className="bg-blue-500 text-white px-3 py-2 rounded-2xl text-sm font-medium shadow-md relative">
                    I'M DOWN
                    {/* Triangle pointer */}
                    <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-l-transparent border-r-transparent border-t-blue-500"></div>
                  </div>
                </div>
              </div>

              {/* Card 2 - 15 degrees counter-clockwise, moved down */}
              <div
                className="relative flex-shrink-0 z-20"
                style={{ marginLeft: "-50px", transform: "rotate(-7deg) translateY(8px)" }}
              >
                <div className="w-64 h-40 bg-gray-200 rounded-2xl shadow-lg">
                  <Image
                    src="/placeholder.svg?height=160&width=256"
                    alt="Pull Up moment"
                    width={256}
                    height={160}
                    className="w-full h-full object-cover rounded-2xl"
                  />
                </div>
              </div>

              {/* Card 3 - 10 degrees counter-clockwise, center position (no vertical movement) */}
              <div
                className="relative flex-shrink-0 z-30"
                style={{ marginLeft: "-50px", transform: "rotate(0deg) translateY(0px)" }}
              >
                <div className="w-64 h-40 bg-gray-200 rounded-2xl shadow-lg">
                  <Image
                    src="/placeholder.svg?height=160&width=256"
                    alt="Pull Up moment"
                    width={256}
                    height={160}
                    className="w-full h-full object-cover rounded-2xl"
                  />
                </div>
                <div className="absolute -top-12 left-1/2 transform -translate-x-1/2">
                  <div className="bg-green-500 text-white px-3 py-2 rounded-2xl text-sm font-medium shadow-md relative">
                    I'M DOWN
                    {/* Triangle pointer */}
                    <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-l-transparent border-r-transparent border-t-green-500"></div>
                  </div>
                </div>
              </div>

              {/* Card 4 - 5 degrees counter-clockwise, moved down */}
              <div
                className="relative flex-shrink-0 z-40"
                style={{ marginLeft: "-50px", transform: "rotate(7deg) translateY(8px)" }}
              >
                <div className="w-64 h-40 bg-gray-200 rounded-2xl shadow-lg">
                  <Image
                    src="/placeholder.svg?height=160&width=256"
                    alt="Pull Up moment"
                    width={256}
                    height={160}
                    className="w-full h-full object-cover rounded-2xl"
                  />
                </div>
              </div>

              {/* Card 5 - 0 degrees (no rotation), moved down */}
              <div
                className="relative flex-shrink-0 z-50"
                style={{ marginLeft: "-50px", transform: "rotate(9deg) translateY(30px)" }}
              >
                <div className="w-64 h-40 bg-gray-200 rounded-2xl shadow-lg">
                  <Image
                    src="/placeholder.svg?height=160&width=256"
                    alt="Pull Up moment"
                    width={256}
                    height={160}
                    className="w-full h-full object-cover rounded-2xl"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Description Text */}
          <div className="max-w-5xl mx-auto space-y-10">
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
              The best college memories are made with friends, classmates, and teammates. Pull Up makes it easy to share
              invitations with friends in seconds, so showing up and thus making memories is effortless.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button className="bg-gray-900 hover:bg-gray-800 text-white px-8 py-3 text-lg font-medium rounded-full">
                Get App
              </Button>
              <Button variant="ghost" className="text-gray-700 hover:text-gray-900 px-8 py-3 text-lg font-medium">
                View Features
              </Button>
            </div>
          </div>
        </div>
      </main>

      {/* How Pull Up Works Section */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">How Pull Up Works</h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-start max-w-6xl mx-auto">
            {/* Left Side - iPhone with App */}
            <div className="flex justify-center lg:justify-end relative">
              {/* iPhone Bezel */}
              <div className="relative">
                <div className="w-80 h-[600px] bg-black rounded-[3rem] p-2 shadow-2xl">
                  <div className="w-full h-full bg-white rounded-[2.5rem] overflow-hidden relative">
                    {/* Notch */}
                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-6 bg-black rounded-b-2xl z-10"></div>

                    {/* App Screenshot Placeholder */}
                    <div className="w-full h-full bg-gradient-to-br from-blue-50 to-purple-50 flex items-center justify-center">
                      <Image
                        src="/placeholder.svg?height=600&width=320"
                        alt="Pull Up app interface"
                        width={320}
                        height={600}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>

                {/* Blue Arrow pointing horizontally to Pull Up RN - moved up */}
                <div className="absolute top-24 -right-8 z-20">
                  <div className="flex items-center">
                    <div className="w-20 h-0.5 bg-blue-600"></div>
                    <div className="w-0 h-0 border-l-8 border-l-blue-600 border-t-4 border-b-4 border-t-transparent border-b-transparent"></div>
                  </div>
                </div>

                {/* Green Arrow pointing right, arrowhead on the right side */}
                <div className="absolute top-72 -right-8 z-20">
                  <div className="flex items-center">
                    {/* Line */}
                    <div className="w-20 h-0.5 bg-green-600"></div>
                    {/* Arrowhead pointing right */}
                    <div className="w-0 h-0 border-l-8 border-l-green-600 border-t-4 border-b-4 border-t-transparent border-b-transparent"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Feature Labels */}
            <div className="space-y-4 pt-4">
              {/* Pull Up RN Feature - aligned with blue arrow */}
              <div className="space-y-4" style={{ marginTop: "80px" }}>
                <h3 className="text-2xl md:text-3xl font-bold text-blue-600">
                  Pull Up RN: <br />
                  <span className="font-normal">Make memories from spontaneity.</span>
                </h3>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Invite your friends or meet up at moments notice with a story-like invitation. Best moments can happen
                  when you least expect them.
                </p>
              </div>

              {/* Pull Up Invitations Feature - aligned with green arrow */}
              <div className="space-y-4" style={{ marginTop: "50px" }}>
                <h3 className="text-2xl md:text-3xl font-bold text-green-600">
                  Pull Up Invitations:
                  <br />
                  <span className="font-normal">Turn meet-up ideas into plans, fast.</span>
                </h3>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Send invites, check who’s down, message friends, and adjust or cancel plans.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Download Pull Up? Section */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why Download Pull Up?</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-12 text-center">
            {/* Section 1: Meet up with friends and groups easier */}
            <div className="space-y-4">
              <div className="flex justify-center mb-4">
                <Image
                  src="/placeholder.svg?height=64&width=64"
                  alt="Friends icon"
                  width={64}
                  height={64}
                  className="rounded-full bg-blue-100 p-3"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-900">Meet up with friends and groups easier</h3>
              <p className="text-gray-600 leading-relaxed">
                Effortlessly coordinate plans with your entire friend group or specific circles. Say goodbye to endless
                group chats and hello to spontaneous gatherings.
              </p>
            </div>

            {/* Section 2: Discover what's around you */}
            <div className="space-y-4">
              <div className="flex justify-center mb-4">
                <Image
                  src="/placeholder.svg?height=64&width=64"
                  alt="Compass icon"
                  width={64}
                  height={64}
                  className="rounded-full bg-green-100 p-3"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-900">Discover what's around you</h3>
              <p className="text-gray-600 leading-relaxed">
                See what activities your friends are "Pulling Up" to in real-time. Find out about impromptu study
                sessions, coffee runs, or campus events happening nearby.
              </p>
            </div>

            {/* Section 3: Get notifications that matter */}
            <div className="space-y-4">
              <div className="flex justify-center mb-4">
                <Image
                  src="/placeholder.svg?height=64&width=64"
                  alt="Notification icon"
                  width={64}
                  height={64}
                  className="rounded-full bg-purple-100 p-3"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-900">Get notifications that matter</h3>
              <p className="text-gray-600 leading-relaxed">
                Receive timely alerts for invitations and spontaneous meet-ups from your closest connections, ensuring
                you never miss out on a moment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What Cornellians use Pull Up for Section */}
      <section className="bg-white py-20 overflow-hidden">
        <div className="relative h-[500px] md:h-[600px] lg:h-[700px] w-full max-w-7xl mx-auto">
          {/* Top row of vertical images (phone photo dimensions) */}
          <div className="absolute w-full h-1/2 top-0 left-0">
            <div className="absolute" style={{ left: "5%", top: "20px" }}>
              <Image
                src="/placeholder.svg?height=144&width=96"
                alt="Cornell Student 1"
                width={96}
                height={144}
                className="w-24 h-36 object-cover rounded-xl shadow-lg"
              />
            </div>
            <div className="absolute" style={{ left: "18%", top: "60px" }}>
              <Image
                src="/placeholder.svg?height=144&width=96"
                alt="Cornell Student 2"
                width={96}
                height={144}
                className="w-24 h-36 object-cover rounded-xl shadow-lg"
              />
            </div>
            <div className="absolute" style={{ left: "35%", top: "10px" }}>
              <Image
                src="/placeholder.svg?height=144&width=96"
                alt="Cornell Student 3"
                width={96}
                height={144}
                className="w-24 h-36 object-cover rounded-xl shadow-lg"
              />
            </div>
            <div className="absolute" style={{ left: "50%", top: "70px" }}>
              <Image
                src="/placeholder.svg?height=144&width=96"
                alt="Cornell Student 4"
                width={96}
                height={144}
                className="w-24 h-36 object-cover rounded-xl shadow-lg"
              />
            </div>
            <div className="absolute" style={{ left: "65%", top: "30px" }}>
              <Image
                src="/placeholder.svg?height=144&width=96"
                alt="Cornell Student 5"
                width={96}
                height={144}
                className="w-24 h-36 object-cover rounded-xl shadow-lg"
              />
            </div>
            <div className="absolute" style={{ left: "80%", top: "80px" }}>
              <Image
                src="/placeholder.svg?height=144&width=96"
                alt="Cornell Student 6"
                width={96}
                height={144}
                className="w-24 h-36 object-cover rounded-xl shadow-lg"
              />
            </div>
          </div>

          {/* Text in between the waves */}
          <div className="absolute inset-0 flex flex-col justify-center items-center z-10 px-4 text-center py-[0x] opacity-100">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">What Cornellians use Pull Up for</h2>
            <p className="text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto">
              Discover how students at Cornell University are using Pull Up to connect, organize, and make the most of
              their college experience.
            </p>
          </div>

          {/* Bottom row of horizontal images (phone photo dimensions) */}
          <div className="absolute w-full h-1/2 bottom-0 left-0">
            <div className="absolute" style={{ left: "8%", bottom: "20px" }}>
              <Image
                src="/placeholder.svg?height=96&width=144"
                alt="Cornell Event 1"
                width={144}
                height={96}
                className="w-36 h-24 object-cover rounded-xl shadow-lg"
              />
            </div>
            <div className="absolute" style={{ left: "22%", bottom: "60px" }}>
              <Image
                src="/placeholder.svg?height=96&width=144"
                alt="Cornell Event 2"
                width={144}
                height={96}
                className="w-36 h-24 object-cover rounded-xl shadow-lg"
              />
            </div>
            <div className="absolute" style={{ left: "40%", bottom: "10px" }}>
              <Image
                src="/placeholder.svg?height=96&width=144"
                alt="Cornell Event 3"
                width={144}
                height={96}
                className="w-36 h-24 object-cover rounded-xl shadow-lg"
              />
            </div>
            <div className="absolute" style={{ left: "55%", bottom: "70px" }}>
              <Image
                src="/placeholder.svg?height=96&width=144"
                alt="Cornell Event 4"
                width={144}
                height={96}
                className="w-36 h-24 object-cover rounded-xl shadow-lg"
              />
            </div>
            <div className="absolute" style={{ left: "70%", bottom: "30px" }}>
              <Image
                src="/placeholder.svg?height=96&width=144"
                alt="Cornell Event 5"
                width={144}
                height={96}
                className="w-36 h-24 object-cover rounded-xl shadow-lg"
              />
            </div>
            <div className="absolute" style={{ left: "85%", bottom: "85px" }}>
              <Image
                src="/placeholder.svg?height=96&width=144"
                alt="Cornell Event 6"
                width={144}
                height={96}
                className="w-36 h-24 object-cover rounded-xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-8">
          <div className="grid md:grid-cols-4 gap-12">
            {/* Download Section */}
            <div className="md:col-span-2 space-y-6">
              <h3 className="text-2xl font-bold">Get Pull Up</h3>
              <p className="text-gray-300 text-lg">Start making spontaneous memories with your friends today.</p>

              {/* App Store Button */}
              <div className="flex flex-col sm:flex-row gap-4 items-start">
                <div className="bg-black border border-gray-600 rounded-lg px-6 py-3 flex items-center space-x-3 hover:bg-gray-800 transition-colors cursor-pointer">
                  <div className="text-2xl">📱</div>
                  <div>
                    <div className="text-xs text-gray-300">Download on the</div>
                    <div className="text-lg font-semibold">App Store</div>
                  </div>
                </div>

                {/* QR Code Placeholder */}
                <div className="bg-white p-4 rounded-lg">
                  <div className="w-24 h-24 bg-gray-200 rounded flex items-center justify-center">
                    <div className="text-center text-gray-500 text-xs">
                      <div className="text-2xl mb-1">📱</div>
                      <div>QR Code</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Product Links */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold">Product</h4>
              <ul className="space-y-2 text-gray-300">
                <li>
                  <Link href="/features" className="hover:text-white transition-colors">
                    Features
                  </Link>
                </li>
                <li>
                  <Link href="/updates" className="hover:text-white transition-colors">
                    Updates
                  </Link>
                </li>
                <li>
                  <Link href="/cornell" className="hover:text-white transition-colors">
                    For Cornell
                  </Link>
                </li>
                <li>
                  <Link href="/pricing" className="hover:text-white transition-colors">
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link href="/faq" className="hover:text-white transition-colors">
                    FAQ
                  </Link>
                </li>
              </ul>
            </div>

            {/* Company & Support Links */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold">Company</h4>
              <ul className="space-y-2 text-gray-300">
                <li>
                  <Link href="/about" className="hover:text-white transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-white transition-colors">
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link href="/support" className="hover:text-white transition-colors">
                    Support
                  </Link>
                </li>
                <li>
                  <Link href="/privacy" className="hover:text-white transition-colors">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="/terms" className="hover:text-white transition-colors">
                    Terms of Service
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="border-t border-gray-700 mt-12 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="flex items-center space-x-4">
                <div className="flex flex-col items-center font-bold text-lg text-white leading-tight">
                  <div>PULL</div>
                  <div>UP</div>
                </div>
                <span className="text-gray-400">© 2024 Pull Up. All rights reserved.</span>
              </div>

              {/* Social Links */}
              <div className="flex space-x-6">
                <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                  <span className="sr-only">Instagram</span>
                  <div className="w-6 h-6 bg-gray-400 rounded"></div>
                </Link>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                  <span className="sr-only">Twitter</span>
                  <div className="w-6 h-6 bg-gray-400 rounded"></div>
                </Link>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                  <span className="sr-only">TikTok</span>
                  <div className="w-6 h-6 bg-gray-400 rounded"></div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
