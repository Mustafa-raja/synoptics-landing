export default function RagHero() {
    return (
        <section className="min-h-screen flex flex-col items-center justify-center text-center px-4 py-16 bg-gradient-to-b bg-[#f0f5ff]">
            <h1 className="text-5xl md:text-6xl font-bold mb-8">
                AI Workflows
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 max-w-4xl mb-6">
                Discard manual slowdowns—let AI take the control. Synoptix AI routes tasks,
                consolidates insights, and refines outputs with precision.            </p>
            {/* <p className="text-2xl md:text-3xl font-semibold text-gray-800 max-w-3xl mb-12">
                Optimize Smarter. Perform Better.
            </p> */}
            <a
                href="#demo"
                className="px-8 py-4 text-xl font-semibold text-white rounded-full 
                    bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 
                    hover:to-blue-700 transition-all duration-300 shadow-lg 
                    hover:shadow-xl"
            >
                See Synoptix in Action
            </a>
        </section>
    );
}
