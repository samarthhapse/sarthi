

const Form = () => {
  return (
    <div className='w-[100vw]'>
    <h1 className="text-black text-3xl font-italic my-12 w-[100vw]">Don’t miss a beat</h1>
    <div className="min-h-screen flex items-center justify-center">
      <div className="flex flex-col md:flex-row bg-white shadow-md rounded-lg max-w-4xl w-full">
        <div className="md:w-1/2 p-8">
          <img
            src="https://cdn.prod.website-files.com/633b16170a53471be7ee460c/64b23cf1ccfd5b8a14369923_opendoorsbg.webp"
            alt="Open Doors"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
        <div className="md:w-1/2 p-8">
          <h1 className="text-2xl font-semibold mb-4">Open Doors</h1>
          <p className="text-gray-600 mb-4">Open Doors is a LIVE marketing community on Welcome, where you can have REAL conversations with peers and experts.</p>
          <a href="#" className="text-blue-500 underline mb-8 block">Learn more</a>
          <form className="space-y-4">
            <div>
              <label htmlFor="first-name" className="sr-only">First name</label>
              <input
                type="text"
                id="first-name"
                className="block w-full px-4 py-2 border rounded-md focus:ring focus:ring-blue-200"
                placeholder="First name"
              />
            </div>
            <div>
              <label htmlFor="job-title" className="sr-only">Job Title</label>
              <input
                type="text"
                id="job-title"
                className="block w-full px-4 py-2 border rounded-md focus:ring focus:ring-blue-200"
                placeholder="Job Title"
              />
            </div>
            <div>
              <label htmlFor="email" className="sr-only">Email</label>
              <input
                type="email"
                id="email"
                className="block w-full px-4 py-2 border rounded-md focus:ring focus:ring-blue-200"
                placeholder="Email"
              />
            </div>
            <div className="flex items-center">
              <div className="g-recaptcha" data-sitekey="your-site-key"></div>
            </div>
            <div>
              <button
                type="submit"
                className="w-full bg-black text-white py-2 px-4 rounded-md hover:bg-gray-800 focus:outline-none focus:ring focus:ring-blue-300"
              >
                Submit
              </button>
            </div>
          </form>
          <p className="text-gray-500 text-sm mt-4">
            We&apos;re committed to your privacy. Welcome uses the information you provide to us to contact you about our relevant content, products, and services. You may unsubscribe from these communications at any time.
          </p>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Form;