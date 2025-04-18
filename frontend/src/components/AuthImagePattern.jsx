const AuthImagePattern = ({ title, subtitle }) => {
  return (
    <div className="hidden lg:flex items-center justify-center bg-base-200 p-12">
      <div className="max-w-md text-center">
        {/* Grid of icons resembling communication and healthcare */}
        <div className="grid grid-cols-3 gap-4 mb-10">
          {[
            "💬", "📞", "📋",
            "🩺", "👨‍⚕️", "👩‍⚕️",
            "📧", "📍", "📅",
          ].map((emoji, i) => (
            <div
              key={i}
              className={`aspect-square rounded-2xl bg-primary/10 flex items-center justify-center text-2xl ${
                i % 2 === 0 ? "animate-pulse" : ""
              }`}
            >
              {emoji}
            </div>
          ))}
        </div>
        <h2 className="text-3xl font-bold mb-3 text-primary">{title}</h2>
        <p className="text-base-content/70 text-lg leading-relaxed">{subtitle}</p>
      </div>
    </div>
  );
};

export default AuthImagePattern;
