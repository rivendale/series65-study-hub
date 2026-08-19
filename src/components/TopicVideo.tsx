import { videoFor } from '../data/topicVideos';

/**
 * The NotebookLM video overview for a topic, if one exists yet.
 *
 * Renders NOTHING when there is no video. That is deliberate: 46 topics will
 * have null ids for a long time, and an empty player or a "coming soon" card
 * repeated 46 times reads as a broken app rather than an unfinished one.
 *
 * `youtube-nocookie.com` because this is a study tool for one family and there
 * is no reason to hand a tracking cookie to every topic page.
 */
export default function TopicVideo({ topicId, title }: { topicId: string; title: string }) {
  const id = videoFor(topicId);
  if (!id) return null;

  return (
    <section className="my-6">
      <h2 className="text-sm font-semibold text-slate-600 dark:text-slate-400 mb-2">
        Watch this topic
      </h2>
      <div className="relative w-full overflow-hidden rounded-xl border border-slate-200
                      dark:border-slate-800" style={{ aspectRatio: '16 / 9' }}>
        <iframe
          className="absolute inset-0 w-full h-full"
          src={`https://www.youtube-nocookie.com/embed/${id}`}
          title={`${title} — video overview`}
          loading="lazy"
          allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    </section>
  );
}
