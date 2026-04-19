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
              Join the LUXSAL waitlist for updates and early access. Be among the first to
              experience a cleaner, more trusted way to buy and sell fashion.
            </p>

            <div className="grid gap-4 sm:grid-cols-3">
              <div className="rounded-3xl border border-black/5 bg-white p-5 shadow-sm">
                <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#c99a31]">
                  Trusted
                </p>
                <p className="mt-3 text-sm leading-7 text-[#444]">
                  Built for safer, more confident buying and selling.
                </p>
              </div>
              <div className="rounded-3xl border border-black/5 bg-white p-5 shadow-sm">
                <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#c99a31]">
                  Early Access
                </p>
                <p className="mt-3 text-sm leading-7 text-[#444]">
                  Get updates and early access before public launch.
                </p>
              </div>
              <div className="rounded-3xl border border-black/5 bg-white p-5 shadow-sm">
                <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#c99a31]">
                  Community
                </p>
                <p className="mt-3 text-sm leading-7 text-[#444]">
                  For buyers, individual sellers, brand owners, and thrift vendors.
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
        {/* Role */}
        <div>
          <label className="mb-2 block text-sm font-medium">
            What best describes you? <span className="text-[#c99a31]">*</span>
          </label>
          <select
            name="Role"
            required
            className="w-full rounded-2xl border border-[#d6d6d1] bg-[#fafaf8] px-4 py-3 text-sm"
            defaultValue=""
          >
            <option value="" disabled>Select one</option>
            <option>Buyer</option>
            <option>Individual Seller</option>
            <option>Brand Owner</option>
            <option>Thrift Vendor</option>
            <option>Custom/Handmade Seller</option>
          </select>
        </div>

        {/* Interest */}
        <div>
          <label className="mb-2 block text-sm font-medium">
            What are you interested in? <span className="text-[#c99a31]">*</span>
          </label>
          <select
            name="Interest"
            required
            className="w-full rounded-2xl border border-[#d6d6d1] bg-[#fafaf8] px-4 py-3 text-sm"
            defaultValue=""
          >
            <option value="" disabled>Select one</option>
            <option>Buying</option>
            <option>Selling</option>
            <option>Both</option>
          </select>
        </div>

        {/* Name */}
        <div>
          <label className="mb-2 block text-sm font-medium">
            Full name <span className="text-[#c99a31]">*</span>
          </label>
          <input
            type="text"
            name="Full Name"
            required
            className="w-full rounded-2xl border border-[#d6d6d1] bg-[#fafaf8] px-4 py-3 text-sm"
          />
        </div>

        {/* Email */}
        <div>
          <label className="mb-2 block text-sm font-medium">
            Email address <span className="text-[#c99a31]">*</span>
          </label>
          <input
            type="email"
            name="Email"
            required
            className="w-full rounded-2xl border border-[#d6d6d1] bg-[#fafaf8] px-4 py-3 text-sm"
          />
        </div>

        {/* Phone */}
        <div>
          <label className="mb-2 block text-sm font-medium">
            Contact number <span className="text-[#c99a31]">*</span>
          </label>
          <input
            type="tel"
            name="Phone"
            required
            className="w-full rounded-2xl border border-[#d6d6d1] bg-[#fafaf8] px-4 py-3 text-sm"
          />
        </div>

        {/* Early access */}
        <fieldset>
          <legend className="mb-3 text-sm font-medium">
            Would you like early access before launch? <span className="text-[#c99a31]">*</span>
          </legend>
          <div className="grid gap-3 sm:grid-cols-2">
            <label className="flex items-center gap-3 rounded-2xl border px-4 py-3">
              <input type="radio" name="Early Access" value="No" required />
              No
            </label>
            <label className="flex items-center gap-3 rounded-2xl border px-4 py-3">
              <input type="radio" name="Early Access" value="Yes" required />
              Yes
            </label>
          </div>
        </fieldset>

        <input type="hidden" name="_subject" value="New Luxsal waitlist signup" />

        <button
          type="submit"
          className="w-full rounded-2xl bg-[#111111] px-5 py-3.5 text-white hover:bg-[#c99a31]"
        >
          Join Waitlist
        </button>
      </form>
    </div>
  );
}