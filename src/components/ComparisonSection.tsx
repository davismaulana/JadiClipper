

const ComparisonSection = () => {
    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4 max-w-7xl">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 font-display">
                        Yakin Masih Mau Repot Ngedit Sendiri?
                    </h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Bandingkan JadiClipper dengan tool lain dan lihat kenapa kami paling pas buat kreator Indo.
                    </p>
                </div>

                <div className="overflow-x-auto pb-6 mb-12">
                    <table className="w-full min-w-[600px] border-collapse text-left">
                        <thead>
                            <tr className="border-b-2 border-gray-100">
                                <th className="py-5 px-8 text-gray-500 font-semibold w-1/4 text-lg">Fitur</th>
                                <th className="py-5 px-8 bg-primary/5 text-primaryDark font-bold text-xl rounded-t-xl w-1/3 border-t-4 border-primary shadow-sm">
                                    JadiClipper
                                </th>
                                <th className="py-5 px-8 text-gray-600 font-semibold w-1/5 text-lg">Canva</th>
                                <th className="py-5 px-8 text-gray-600 font-semibold w-1/5 text-lg">Veed.io</th>
                            </tr>
                        </thead>
                        <tbody className="align-top">
                            {/* Row 1 */}
                            <tr className="border-b border-gray-50 hover:bg-gray-50/50 transition-colors">
                                <td className="py-6 px-8 font-semibold text-gray-700 text-lg">Fokus Utama</td>
                                <td className="py-6 px-8 bg-primary/5 font-bold text-gray-900 border-x border-primary/10 text-lg">
                                    ✅ Auto Clip <span className="block text-base font-medium text-gray-600 mt-1">Spesialis short video</span>
                                </td>
                                <td className="py-6 px-8 text-gray-700 text-lg">
                                    ⚠️ Ada tapi... <span className="block text-base text-gray-500 mt-1">Lebih ke desain grafis</span>
                                </td>
                                <td className="py-6 px-8 text-gray-700 text-lg">
                                    ✅ Kuat <span className="block text-base text-gray-500 mt-1">Video editor umum</span>
                                </td>
                            </tr>
                            {/* Row 2 */}
                            <tr className="border-b border-gray-50 hover:bg-gray-50/50 transition-colors">
                                <td className="py-6 px-8 font-semibold text-gray-700 text-lg">Deteksi Momen Lucu</td>
                                <td className="py-6 px-8 bg-primary/5 font-bold text-gray-900 border-x border-primary/10 text-lg">
                                    ✅ Cerdas <span className="block text-base font-medium text-gray-600 mt-1">Paham konteks Indo & gaming</span>
                                </td>
                                <td className="py-6 px-8 text-gray-700 text-lg">
                                    ❌ Kurang fokus <span className="block text-base text-gray-500 mt-1">Manual selection</span>
                                </td>
                                <td className="py-6 px-8 text-gray-700 text-lg">
                                    ⚠️ Ada tapi... <span className="block text-base text-gray-500 mt-1">Kurang akurat di slang</span>
                                </td>
                            </tr>
                            {/* Row 3 */}
                            <tr className="border-b border-gray-50 hover:bg-gray-50/50 transition-colors">
                                <td className="py-6 px-8 font-semibold text-gray-700 text-lg">Subtitle Bahasa Indo</td>
                                <td className="py-6 px-8 bg-primary/5 font-bold text-gray-900 border-x border-primary/10 text-lg">
                                    ✅ Akurat <span className="block text-base font-medium text-gray-600 mt-1">Support slang & gaul</span>
                                </td>
                                <td className="py-6 px-8 text-gray-700 text-lg">
                                    ⚠️ Ada tapi... <span className="block text-base text-gray-500 mt-1">Sering typo di slang</span>
                                </td>
                                <td className="py-6 px-8 text-gray-700 text-lg">
                                    ✅ Bagus <span className="block text-base text-gray-500 mt-1">Support indo tapi baku</span>
                                </td>
                            </tr>
                            {/* Row 4 */}
                            <tr className="border-b border-gray-50 hover:bg-gray-50/50 transition-colors">
                                <td className="py-6 px-8 font-semibold text-gray-700 text-lg">Kecepatan Workflow</td>
                                <td className="py-6 px-8 bg-primary/5 font-bold text-gray-900 border-x border-primary/10 text-lg">
                                    ✅ Sat-set <span className="block text-base font-medium text-gray-600 mt-1">3 klik langsung jadi</span>
                                </td>
                                <td className="py-6 px-8 text-gray-700 text-lg">
                                    ⚠️ Lumayan <span className="block text-base text-gray-500 mt-1">Butuh banyak drag-drop</span>
                                </td>
                                <td className="py-6 px-8 text-gray-700 text-lg">
                                    ⚠️ Lumayan <span className="block text-base text-gray-500 mt-1">Workflow editor tradisional</span>
                                </td>
                            </tr>
                            {/* Row 5 */}
                            <tr className="border-b border-gray-50 hover:bg-gray-50/50 transition-colors">
                                <td className="py-6 px-8 font-semibold text-gray-700 text-lg">Output Vertical (9:16)</td>
                                <td className="py-6 px-8 bg-primary/5 font-bold text-gray-900 border-x border-primary/10 text-lg">
                                    ✅ Siap Upload <span className="block text-base font-medium text-gray-600 mt-1">Auto crop objek utama</span>
                                </td>
                                <td className="py-6 px-8 text-gray-700 text-lg">
                                    ✅ Ada <span className="block text-base text-gray-500 mt-1">Manual resize canvas</span>
                                </td>
                                <td className="py-6 px-8 text-gray-700 text-lg">
                                    ✅ Ada <span className="block text-base text-gray-500 mt-1">Resize manual/semi-auto</span>
                                </td>
                            </tr>
                            {/* Row 6 */}
                            <tr className="border-b border-gray-50 hover:bg-gray-50/50 transition-colors">
                                <td className="py-6 px-8 font-semibold text-gray-700 text-lg">Cocok Long Stream</td>
                                <td className="py-6 px-8 bg-primary/5 font-bold text-gray-900 border-x border-primary/10 text-lg">
                                    ✅ Banget <span className="block text-base font-medium text-gray-600 mt-1">Upload 2-5 jam santai</span>
                                </td>
                                <td className="py-6 px-8 text-gray-700 text-lg">
                                    ❌ Kurang <span className="block text-base text-gray-500 mt-1">Berat buat video panjang</span>
                                </td>
                                <td className="py-6 px-8 text-gray-700 text-lg">
                                    ⚠️ Bisa <span className="block text-base text-gray-500 mt-1">Upload lama & limit size</span>
                                </td>
                            </tr>
                            {/* Row 7 */}
                            <tr className="border-b border-gray-50 hover:bg-gray-50/50 transition-colors">
                                <td className="py-6 px-8 font-semibold text-gray-700 text-lg">Model Harga</td>
                                <td className="py-6 px-8 bg-primary/5 font-bold text-gray-900 border-x border-primary/10 text-lg">
                                    ✅ Merakyat <span className="block text-base font-medium text-gray-600 mt-1">Harga lokal & paket fleksibel</span>
                                </td>
                                <td className="py-6 px-8 text-gray-700 text-lg">
                                    ⚠️ Subscription <span className="block text-base text-gray-500 mt-1">Mahal kalo cuma buat klip</span>
                                </td>
                                <td className="py-6 px-8 text-gray-700 text-lg">
                                    ⚠️ Subscription <span className="block text-base text-gray-500 mt-1">Mulai mahal ($$)</span>
                                </td>
                            </tr>
                            {/* Row 8 (Last row) */}
                            <tr>
                                <td className="py-6 px-8 font-semibold text-gray-700 text-lg">Learning Curve</td>
                                <td className="py-6 px-8 bg-primary/5 font-bold text-gray-900 rounded-b-xl border-x border-b border-primary/10 text-lg">
                                    ✅ Pemula Friendly <span className="block text-base font-medium text-gray-600 mt-1">Gaptek pun bisa</span>
                                </td>
                                <td className="py-6 px-8 text-gray-700 text-lg">
                                    ⚠️ Medium <span className="block text-base text-gray-500 mt-1">Banyak fitur bikin bingung</span>
                                </td>
                                <td className="py-6 px-8 text-gray-700 text-lg">
                                    ⚠️ Medium <span className="block text-base text-gray-500 mt-1">Interface editor pro</span>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto mb-16">
                    {/* Why JadiClipper */}
                    <div className="bg-primary/5 p-8 rounded-2xl border border-primary/10">
                        <h3 className="text-xl font-bold mb-6 text-gray-900 flex items-center">
                            <span className="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm">✓</span>
                            Kapan JadiClipper Paling Cocok?
                        </h3>
                        <ul className="space-y-4">
                            <li className="flex items-start text-gray-700">
                                <span className="mr-3 mt-1 text-primary">●</span>
                                <span>Kamu <strong>streamer/podcaster</strong> yang pengen hemat 10+ jam editing tiap minggu.</span>
                            </li>
                            <li className="flex items-start text-gray-700">
                                <span className="mr-3 mt-1 text-primary">●</span>
                                <span>Butuh subtitle Bahasa Indonesia yang <strong>ngerti slang & bahasa gaul</strong> tanpa edit manual.</span>
                            </li>
                            <li className="flex items-start text-gray-700">
                                <span className="mr-3 mt-1 text-primary">●</span>
                                <span>Pengen video panjang langsung jadi <strong>banyak konten TikTok/Shorts</strong> otomatis.</span>
                            </li>
                        </ul>
                    </div>

                    {/* When to choose others */}
                    <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100">
                        <h3 className="text-xl font-bold mb-6 text-gray-900 flex items-center">
                            <span className="bg-gray-400 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm">?</span>
                            Kapan Pilih Tool Lain?
                        </h3>
                        <ul className="space-y-4">
                            <li className="flex items-start text-gray-600">
                                <span className="mr-3 mt-1 text-gray-400">●</span>
                                <span>Kalau kamu mau bikin <strong>video explainer animasi</strong> atau desain grafis (pilih Canva).</span>
                            </li>
                            <li className="flex items-start text-gray-600">
                                <span className="mr-3 mt-1 text-gray-400">●</span>
                                <span>Kalau butuh <strong>editing manual super detail</strong> frame-by-frame (pilih Veed/Premiere).</span>
                            </li>
                            <li className="flex items-start text-gray-600">
                                <span className="mr-3 mt-1 text-gray-400">●</span>
                                <span>Kalau konten utama kamu adalah <strong>artikel blog yang diubah ke video</strong> (pilih Pictory).</span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Micro CTA */}
                <div className="text-center">
                    <p className="text-lg text-gray-600 mb-4 font-medium">Udah siap hemat waktu & viral?</p>
                    <a
                        href="#early-access"
                        className="inline-block px-8 py-3 bg-primary text-white font-bold rounded-lg hover:bg-primaryDark transition-colors shadow-lg shadow-primary/30"
                    >
                        Akses Awal — Gratis
                    </a>
                </div>
            </div>
        </section>
    );
};

export default ComparisonSection;
