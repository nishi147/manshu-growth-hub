const announcements = [
  "🚀 New Corporate Training Batches Starting Soon!",
  "✨ Join 500+ Trained Professionals!",
  "🎁 Get a Free Consultation — Limited Time Offer!",
  "🤖 New Courses in AI & Data Analytics!",
  "📈 Upskill Your Team with Manshu Learning!",
];

export default function AnnouncementTicker() {
  // Duplicate for seamless loop
  const items = [...announcements, ...announcements];

  return (
    <div className="bg-primary text-primary-foreground text-xs md:text-sm font-medium overflow-hidden whitespace-nowrap">
      <div className="inline-flex animate-marquee">
        {items.map((text, i) => (
          <span key={i} className="mx-6 md:mx-10 py-2 inline-block">
            {text}
          </span>
        ))}
      </div>
    </div>
  );
}
