import Button from "../components/Button";

function Home() {
  return (
    <div className="min-h-screen bg-[#f7f6ef] flex flex-col items-center justify-center transition-colors duration-300 dark:bg-gray-900">
      <h1 className="mb-8 text-3xl font-bold text-gray-900 dark:text-white">Button List</h1>

      <div className="flex flex-wrap gap-4">
        <Button variant="primary">Primary</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="warning">Warning</Button>
        <Button variant="danger">Danger</Button>
        <Button variant="info">Info</Button>
      </div>
    </div>
  );
}

export default Home;
