

const RoadmapSection = () => {
    return (
        <section className="py-16 bg-gray-50 border-t border-gray-200">
            <div className="container mx-auto px-4 text-center max-w-4xl">
                <span className="inline-block px-3 py-1 bg-gray-200 text-gray-700 rounded-full text-xs font-bold tracking-wider mb-4 uppercase">
                    Coming Soon
                </span>
                <h2 className="text-2xl md:text-3xl font-bold mb-8 text-gray-900">
                    Sedang Dimasak di Dapur Kami 👨‍🍳
                </h2>
                <div className="grid md:grid-cols-2 gap-6 text-left">
                    <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm opacity-70 hover:opacity-100 transition-opacity">
                        <div className="flex items-center mb-3">
                            <span className="text-xl mr-3">✨</span>
                            <h3 className="font-bold text-lg text-gray-800">B-Roll Otomatis</h3>
                        </div>
                        <p className="text-gray-600 text-sm">
                            Nambahin meme & sound effect lucu otomatis biar editing makin berwarna.
                        </p>
                    </div>
                    <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm opacity-70 hover:opacity-100 transition-opacity">
                        <div className="flex items-center mb-3">
                            <span className="text-xl mr-3">📈</span>
                            <h3 className="font-bold text-lg text-gray-800">Virality Score</h3>
                        </div>
                        <p className="text-gray-600 text-sm">
                            AI bakal kasih prediksi seberapa viral klip kamu sebelum diupload.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default RoadmapSection;
