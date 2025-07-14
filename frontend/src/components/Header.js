export default function Header() {
  return (
    <header className="bg-blue-600 text-white p-4">
        <nav className="bg-white shadow-md p-4 flex justify-between items-center">
      <div className="text-xl font-bold text-blue-600">MyApp</div>
      <div className="space-x-4">
        <a href="/login" className="text-gray-600 hover:text-blue-600">Login</a>
        <a href="/register" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Register</a>
      </div>
    </nav>
    </header>
  );
}