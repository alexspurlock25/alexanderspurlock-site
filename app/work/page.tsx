const work = {
  sumofme: {
    title: 'sumofme',
    summary:
      'A native iOS and full-stack web application designed to streamline resume sharing for convention and event goers by using QR codes! Get it on the App Store!',
    link: `https://apps.apple.com/us/app/sumofme-contactless-resume/id6479970257`,
    platform: 'iOS',
  },
  dishboard: {
    title: 'Dishboard',
    summary:
      'Plan your meals for the month and build shopping a list. A simple way to answer "what\'s for dinner?" Built with Objective-C!',
    link: 'https://apps.apple.com/us/app/dishboard-meal-planner/id6746702675',
    platform: 'iOS',
  },
  campusEvents: {
    title: 'Campus Events',
    summary:
      'A native Android application tailored for University of Cincinnati students, offering a streamlined approach to discovering events hosted by college student groups. With a user-friendly interface and efficient navigation, Campus Events provides students with an easier way to explore upcoming events compared to existing platforms.',
    link: `https://play.google.com/store/apps/details?id=com.alexanderspurlock.campusevents&hl=en_US`,
    platform: 'Android',
  },
};

export default function Page() {
  return (
    <section className="max-w-3xl mx-auto">
      <div className="space-y-16">
        {Object.entries(work).map(
          ([project, { title, summary, link, platform }]) => (
            <div key={title} className="space-y-4">
              <div>
                <h2 className="text-4xl font-semibold">{title}</h2>
                <span className="text-sm text-neutral-500">{platform}</span>
              </div>
              <p className="text-lg text-neutral-600">{summary}</p>
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-neutral-900 hover:underline"
              >
                View on {platform === 'iOS' ? 'App Store' : 'Google Play'} →
              </a>
            </div>
          ),
        )}
      </div>
    </section>
  );
}
