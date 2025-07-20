export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900 p-8 font-sans">
      <div className="max-w-4xl mx-auto">
        <header className="mb-12">
          <h1 className="text-5xl font-bold text-blue-800">Victor Nyagero</h1>
          <p className="mt-4 text-xl text-gray-700">
            Scientist | Science Communicator | Explorer of the Unknown
          </p>
        </header>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-2 text-blue-700">About Me</h2>
          <p>
            I’m a scientist passionate about making science accessible to everyone. My work focuses on distilling complex
            concepts—from particle physics to evolutionary biology—into engaging stories that spark curiosity. I’ve felt
            the thrill of scientific discovery, and I want to share it with the world.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-2 text-blue-700">Science Communication</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>
              <strong>Blog:</strong> Coming soon — readable, research-backed pieces on topics like the Standard Model,
              dark matter, climate science, and more.
            </li>
            <li>
              <strong>Videos:</strong> Educational videos from YouTube and LinkedIn will be embedded here.
            </li>
            <li>
              <strong>Talks:</strong> A list of public talks and interviews.
            </li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-2 text-blue-700">Contact</h2>
          <p>
            Want to collaborate, invite me for a talk, or just share thoughts? Email me at: <br />
            <a
              href="mailto:nyageroscience@gmail.com"
              className="text-blue-600 underline"
            >
              nyageroscience@gmail.com
            </a>
          </p>
        </section>

        <footer className="border-t pt-4 mt-8 text-sm text-gray-500">
          <p>
            Connect: 
            <a href="https://linkedin.com/in/victornyagero" className="ml-2 text-blue-600 underline">LinkedIn</a> | 
            <a href="https://github.com/victornyagero" className="ml-2 text-blue-600 underline">GitHub</a> | 
            <a href="https://twitter.com/victornyagero" className="ml-2 text-blue-600 underline">Twitter/X</a>
          </p>
        </footer>
      </div>
    </main>
  );
}
