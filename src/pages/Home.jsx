import Button from "../components/Button";

function Home() {
  return (
    <div className="min-h-screen bg-gray-900 flex flex-col items-center justify-center">
      <h1 className="mb-8 text-3xl font-bold text-white">Button List</h1>

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
