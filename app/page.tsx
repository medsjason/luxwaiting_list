export default function LuxsalWaitlistPage() {
  return (
    <div className="min-h-screen bg-[#f5f5f3] text-[#111111]">
      <main className="mx-auto flex min-h-screen w-full max-w-7xl flex-col px-6 py-8 md:px-10 lg:px-16">
        <section className="grid flex-1 items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-8">
            <div className="flex items-center gap-4">
              <img
                src="/luxsal-logo.png"
                alt="Luxsal logo"
                className="h-16 w-16 rounded-2xl object-contain shadow-sm"
              />
              <div>
                <p className="text-sm font-medium uppercase tracking-[0.35em] text-[#c99a31]">
                  Luxsal Waitlist
                </p>
                <h1 className="mt-2 text-4xl font-semibold tracking-tight md:text-6xl">
                  A better way to buy and sell fashion.
                </h1>
              </div>
            </div>

            <p className="max-w-2xl text-lg leading-8 text-[#3b3b3b] md:text-xl">
              Join the Luxsal waitlist for updates and early access. Be among the first to
              discover a smarter, more trusted resale experience.
            </p>

            <div className="grid gap-4 sm:grid-cols-3">
              <div className="rounded-3xl border border-black/5 bg-white p-5 shadow-sm">
                <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#c99a31]">
                  Trusted
                </p>
                <p className="mt-3 text-sm leading-7 text-[#444]">
                  Built for confident buying and selling.
                </p>
              </div>
              <div className="rounded-3xl border border-black/5 bg-white p-5 shadow-sm">
                <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#c99a31]">
                  Early Access
                </p>
                <p className="mt-3 text-sm leading-7 text-[#444]">
                  Get launch news and first access before the public release.
                </p>
              </div>
              <div className="rounded-3xl border border-black/5 bg-white p-5 shadow-sm">
                <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#c99a31]">
                  Community
                </p>
                <p className="mt-3 text-sm leading-7 text-[#444]">
                  Join as an individual seller, brand owner, thrift vendor, or creator.
                </p>
              </div>
            </div>
          </div>

          <WaitlistForm />
        </section>
      </main>
    </div>
  );
}

function WaitlistForm() {
  return (
    <div className="rounded-[2rem] border border-black/5 bg-white p-6 shadow-xl shadow-black/5 md:p-8">
      <div className="mb-6">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#c99a31]">
          Join the waitlist
        </p>
        <h2 className="mt-3 text-2xl font-semibold tracking-tight md:text-3xl">
          Get updates and early access
        </h2>
        <p className="mt-3 text-sm leading-7 text-[#555]">
          Fill out the form below.
        </p>
      </div>

      <form
        action="https://formspree.io/f/mrerkywz"
        method="POST"
        className="space-y-5"
      >
        <div>
          <label htmlFor="role" className="mb-2 block text-sm font-medium text-[#1a1a1a]">
            What best describes you? <span className="text-[#c99a31]">*</span>
          </label>
          <select
            id="role"
            name="What best describes you"
            required
            className="w-full rounded-2xl border border-[#d6d6d1] bg-[#fafaf8] px-4 py-3 text-sm outline-none transition focus:border-[#c99a31] focus:ring-2 focus:ring-[#c99a31]/20"
            defaultValue=""
          >
            <option value="" disabled>
              Select one
            </option>
            <option>Individual seller</option>
            <option>Brand owner</option>
            <option>Thrift vendor</option>
            <option>Custom/handmade</option>
          </select>
        </div>

        <div>
          <label htmlFor="fullName" className="mb-2 block text-sm font-medium text-[#1a1a1a]">
            Full name <span className="text-[#c99a31]">*</span>
          </label>
          <input
            id="fullName"
            type="text"
            name="Full name"
            required
            className="w-full rounded-2xl border border-[#d6d6d1] bg-[#fafaf8] px-4 py-3 text-sm outline-none transition focus:border-[#c99a31] focus:ring-2 focus:ring-[#c99a31]/20"
            placeholder="Enter your full name"
          />
        </div>

        <div>
          <label htmlFor="email" className="mb-2 block text-sm font-medium text-[#1a1a1a]">
            Email address <span className="text-[#c99a31]">*</span>
          </label>
          <input
            id="email"
            type="email"
            name="Email address"
            required
            className="w-full rounded-2xl border border-[#d6d6d1] bg-[#fafaf8] px-4 py-3 text-sm outline-none transition focus:border-[#c99a31] focus:ring-2 focus:ring-[#c99a31]/20"
            placeholder="Enter your email address"
          />
        </div>

        <div>
          <label htmlFor="contact" className="mb-2 block text-sm font-medium text-[#1a1a1a]">
            Contact number <span className="text-[#c99a31]">*</span>
          </label>
          <input
            id="contact"
            type="tel"
            name="Contact number"
            required
            className="w-full rounded-2xl border border-[#d6d6d1] bg-[#fafaf8] px-4 py-3 text-sm outline-none transition focus:border-[#c99a31] focus:ring-2 focus:ring-[#c99a31]/20"
            placeholder="Enter your contact number"
          />
        </div>

        <fieldset>
          <legend className="mb-3 block text-sm font-medium text-[#1a1a1a]">
            Would you like early access before the public launch?{' '}
            <span className="text-[#c99a31]">*</span>
          </legend>
          <div className="grid gap-3 sm:grid-cols-2">
            <label className="flex cursor-pointer items-center gap-3 rounded-2xl border border-[#d6d6d1] bg-[#fafaf8] px-4 py-3 text-sm transition hover:border-[#c99a31]">
              <input type="radio" name="Early access" value="No" required className="h-4 w-4" />
              <span>No</span>
            </label>
            <label className="flex cursor-pointer items-center gap-3 rounded-2xl border border-[#d6d6d1] bg-[#fafaf8] px-4 py-3 text-sm transition hover:border-[#c99a31]">
              <input type="radio" name="Early access" value="Yes" required className="h-4 w-4" />
              <span>Yes</span>
            </label>
          </div>
        </fieldset>

        <input type="hidden" name="_subject" value="New Luxsal waitlist signup" />
        <input type="hidden" name="_captcha" value="false" />

        <button
          type="submit"
          className="w-full rounded-2xl bg-[#111111] px-5 py-3.5 text-sm font-semibold text-white transition hover:bg-[#c99a31]"
        >
          Join Waitlist
        </button>

        
      </form>
    </div>
  );
}