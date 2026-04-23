export default function Contact() {
  return (
    <section className="bg-gray-50 py-20 px-4">
      <div className="max-w-3xl mx-auto text-center">
        {/* Header Text */}
        <h2 className="text-[#1d2129] text-4xl md:text-5xl font-bold mb-4">
          What can we do for you?
        </h2>
        <p className="text-gray-600 text-lg mb-12 max-w-2xl mx-auto leading-relaxed">
          We are ready to work on a project of any complexity, 
          whether it's commercial or residential.
        </p>

        {/* Form Container */}
        <form className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Name Input */}
            <input
              type="text"
              placeholder="Your Name*"
              className="w-full p-4 rounded-md border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-400"
              required
            />
            {/* Email Input */}
            <input
              type="email"
              placeholder="Email*"
              className="w-full p-4 rounded-md border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-400"
              required
            />
            {/* Select Input */}
            <div className="relative">
              <select className="w-full p-4 rounded-md border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white text-gray-400 appearance-none">
                <option>Reason for Contacting*</option>
                <option>Commercial Project</option>
                <option>Residential Project</option>
                <option>Other</option>
              </select>
              <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none text-blue-800">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </div>
            </div>
            {/* Phone Input */}
            <input
              type="tel"
              placeholder="Phone"
              className="w-full p-4 rounded-md border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-400"
            />
          </div>

          {/* Message Textarea */}
          <textarea
            placeholder="Message"
            rows={6}
            className="w-full p-4 rounded-md border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-400 resize-none"
          ></textarea>

          {/* Required Note */}
          <p className="text-left text-gray-500 text-sm">
            <span className="text-red-500 font-bold">*</span> indicates a required field
          </p>

          {/* Submit Button */}
          <div className="flex justify-center mt-6">
            <button
              type="submit"
              className="bg-[#2b44b1] hover:bg-[#1e328f] text-white font-bold py-4 px-16 rounded-md transition-all duration-300 transform active:scale-95 shadow-lg"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}