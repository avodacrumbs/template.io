import Header from "../components/Header";

export default function LandingPage() {
  return (
    <div>
      <Header />
      <section className="h-screen bg-gray-50 flex flex-col items-center justify-center text-center p-8">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-800">
          Welcome to MyApp
        </h1>
        <p className="text-gray-600 mt-4 max-w-xl">
          A simple, responsive system to manage residents, services, and more.
        </p>
        <a href="/login" className="mt-8 inline-block bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700">
          Get Started
        </a>
      </section>
    </div>
  );
}
