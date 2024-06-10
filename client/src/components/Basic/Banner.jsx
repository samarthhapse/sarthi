
const Banner = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-950 text-white w-[100vw]">
      <header className="bg-gray-900 text-white w-full p-4 border-b border-gray-300 text-center">
        <h1 className="text-2xl font-bold">Welcome to My Website</h1>
      </header>
      <main className="flex flex-col flex-grow items-center justify-center p-8">
        <section className="mb-12 text-center">
          <h2 className="text-xl font-semibold mb-2">Customer Stories</h2>
          <h3 className="text-4xl font-bold mb-4">How Community Boost scaled from 2,000 to over 50,000 registrants with Welcome</h3>
          <button className="bg-white text-black font-bold py-2 px-4 my-3 rounded-full hover:bg-gray-300">
            Read Customer Story
          </button>
        </section>
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="flex flex-col items-center text-center">
            <img src="https://via.placeholder.com/150" alt="Misty Copeland" className="rounded-full mb-4"/>
            <p className="text-lg font-semibold">Misty Copeland</p>
            <p className="text-gray-400">Principal Dancer, American Ballet Theatre</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <img src="https://via.placeholder.com/150" alt="Scott Harrison" className="rounded-full mb-4"/>
            <p className="text-lg font-semibold">Scott Harrison</p>
            <p className="text-gray-400">Founder and CEO of charity: water</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <img src="https://via.placeholder.com/150" alt="Seth Godin" className="rounded-full mb-4"/>
            <p className="text-lg font-semibold">Seth Godin</p>
            <p className="text-gray-400">Author and Entrepreneur</p>
          </div>
        </section>
      </main>
      <footer className="bg-gray-950 w-full p-4 border-t border-gray-300 text-center text-gray-300">
        <p>&copy; 2024 My Website. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Banner;