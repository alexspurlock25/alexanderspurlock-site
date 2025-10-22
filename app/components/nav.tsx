import Link from 'next/link';

const navItems = {
  '/': {
    name: 'home',
  },
  '/work': {
    name: 'work',
  },
  'https://sumofme.com/user/alexspurlock': {
    name: 'resume',
  },
};

export function Navbar() {
  return (
    <aside className="mb-16">
      <div>
        <nav className="flex justify-center" id="nav">
          <div className="flex flex-row">
            {Object.entries(navItems).map(([path, { name }]) => {
              return (
                <Link
                  key={path}
                  href={path}
                  className="transition-all hover:underline py-1 px-2"
                >
                  {name}
                </Link>
              );
            })}
          </div>
        </nav>
      </div>
    </aside>
  );
}
