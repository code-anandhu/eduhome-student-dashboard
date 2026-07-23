function PageLoader({ text = "Loading..." }) {
  return (
    <div className="flex flex-col items-center justify-center py-24">

      <div className="flex gap-2">

        <div className="w-3 h-3 bg-blue-600 rounded-full animate-bounce"></div>

        <div
          className="w-3 h-3 bg-blue-600 rounded-full animate-bounce"
          style={{ animationDelay: "0.15s" }}
        ></div>

        <div
          className="w-3 h-3 bg-blue-600 rounded-full animate-bounce"
          style={{ animationDelay: "0.3s" }}
        ></div>

      </div>

      <p className="mt-6 text-gray-500 text-base">
        {text}
      </p>

    </div>
  );
}

export default PageLoader;