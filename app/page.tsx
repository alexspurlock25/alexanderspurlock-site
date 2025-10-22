import Image from 'next/image';

const links = {
  LinkedIn: {
    link: 'https://linkedin.com/in/alexanderspurlock',
  },
  GitHub: {
    link: 'https://github.com/alexspurlock25',
  },
};

export default function Page() {
  return (
    <section className="max-w-2xl mx-auto py-10">
      <div className="text-center space-y-8">
        <Image
          className="rounded-4xl mx-auto"
          src="/avatar.jpeg"
          alt="Alexander Spurlock"
          width={300}
          height={300}
        />

        <div className="space-y-4">
          <h1 className="text-4xl font-bold">Alexander Spurlock</h1>
          <p className="text-xl text-neutral-600 max-w-lg mx-auto">
            Data & Software Engineer
          </p>
        </div>

        <div className="flex justify-center gap-4">
          {Object.entries(links).map(([name, { link }]) => (
            <a
              key={link}
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-600 hover:text-neutral-900 transition-colors"
            >
              {name}
            </a>
          ))}
        </div>

        <div className="pt-4">
          <a
            href="/work"
            className="inline-block bg-neutral-900 text-white px-8 py-3 rounded-lg hover:opacity-90 transition-opacity font-medium"
          >
            View My Apps →
          </a>
        </div>
      </div>
    </section>
  );
}
