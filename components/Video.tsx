// components/VideoSection.tsx
const VideoSection = () => {
  return (
    <section className="py-10 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-center text-2xl font-semibold mb-6">Real Estate Sign Installation Services</h2>
        <video controls className="w-full rounded-lg shadow">
          <source src="/video.mp4" type="video/mp4" />
        </video>
      </div>
    </section>
  );
};

export default VideoSection;
