"use client";
import { Car, Users, Fuel, Settings, ChevronRight, Filter, Search } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Navbar } from "../components/Navbar";

const ArmadaPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("Semua");
  const [searchQuery, setSearchQuery] = useState("");

  const cars = [
    { name: "Honda Brio", price: "Rp 300.000", category: "City Car", seats: 5, transmission: "Manual", fuel: "Bensin", image: "/assets/brio.jpg", desc: "Hemat & lincah untuk kota" },
    { name: "Toyota Agya", price: "Rp 280.000", category: "City Car", seats: 5, transmission: "Manual", fuel: "Bensin", image: "/assets/agya.jpg", desc: "Ekonomis untuk perkotaan" },
    { name: "Honda Jazz", price: "Rp 450.000", category: "Hatchback", seats: 5, transmission: "Automatic", fuel: "Bensin", image: "/assets/jazz.jpg", desc: "Stylish dan bertenaga" },
    { name: "Toyota Yaris", price: "Rp 420.000", category: "Hatchback", seats: 5, transmission: "Automatic", fuel: "Bensin", image: "/assets/yaris3.jpg", desc: "Sporty dan modern" },
    { name: "Honda Mobilio", price: "Rp 400.000", category: "MPV", seats: 7, transmission: "Manual", fuel: "Bensin", image: "/assets/mobilio.jpg", desc: "Lega untuk keluarga" },
    { name: "Toyota Avanza", price: "Rp 450.000", category: "MPV", seats: 7, transmission: "Manual", fuel: "Bensin", image: "/assets/avanza.jpg", desc: "MPV terpopuler Indonesia" },
    { name: "Daihatsu Xenia", price: "Rp 420.000", category: "MPV", seats: 7, transmission: "Manual", fuel: "Bensin", image: "/assets/xenia.jpg", desc: "Andalan keluarga Indonesia" },
    { name: "Toyota Innova Reborn", price: "Rp 550.000", category: "MPV", seats: 7, transmission: "Automatic", fuel: "Diesel", image: "/assets/inova.jpg", desc: "Nyaman untuk perjalanan jauh" },
    { name: "Mitsubishi Xpander", price: "Rp 480.000", category: "MPV", seats: 7, transmission: "Automatic", fuel: "Bensin", image: "/assets/xpander.jpg", desc: "Modern dan lapang" },
    { name: "Honda CR-V", price: "Rp 700.000", category: "SUV", seats: 7, transmission: "Automatic", fuel: "Bensin", image: "/assets/crv.jpg", desc: "SUV premium dan elegan" },
    { name: "Toyota Fortuner", price: "Rp 750.000", category: "SUV", seats: 7, transmission: "Automatic", fuel: "Diesel", image: "/assets/fortuner.jpg", desc: "Tangguh di segala medan" },
    { name: "Mitsubishi Pajero Sport", price: "Rp 800.000", category: "SUV", seats: 7, transmission: "Automatic", fuel: "Diesel", image: "/assets/pajero.jpg", desc: "Siap untuk petualangan" },
    { name: "Toyota Alphard", price: "Rp 1.500.000", category: "Luxury", seats: 7, transmission: "Automatic", fuel: "Bensin", image: "/assets/alphard.jpg", desc: "Kenyamanan kelas bisnis" },
    { name: "Toyota Hiace", price: "Rp 900.000", category: "Van", seats: 14, transmission: "Manual", fuel: "Diesel", image: "/assets/hiace.jpg", desc: "Ideal untuk rombongan" },
  ];

  const categories = ["Semua", "City Car", "Hatchback", "MPV", "SUV", "Luxury", "Van"];

  const filteredCars = cars.filter((car) => {
    const matchCategory = selectedCategory === "Semua" || car.category === selectedCategory;
    const matchSearch = car.name.toLowerCase().includes(searchQuery.toLowerCase()) || car.desc.toLowerCase().includes(searchQuery.toLowerCase());
    return matchCategory && matchSearch;
  });

  const scrollToContact = () => {
    window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
  };

  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 50,
      scale: 0.9,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
    },
    exit: {
      opacity: 0,
      scale: 0.9,
    },
  };

  const heroVariants = {
    hidden: { opacity: 0, y: -30 },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  const badgeVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: (i: number) => ({
      opacity: 1,
      scale: 1,
      transition: {
        delay: i * 0.1 + 0.5,
        type: "spring" as const,
        stiffness: 200,
        damping: 10,
      },
    }),
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-black to-gray-700 text-white pt-28 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1 className="text-4xl md:text-5xl font-bold mb-4" variants={heroVariants} initial="hidden" animate="visible">
            Armada Lengkap Kami
          </motion.h1>
          <motion.p className="text-xl text-blue-100 mb-6" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.6 }}>
            Pilih dari {cars.length}+ mobil berkualitas untuk setiap kebutuhan perjalanan Anda
          </motion.p>
          <div className="flex items-center justify-center space-x-2 text-sm flex-wrap gap-2">
            {["✓ Terawat Rutin", "✓ Asuransi Lengkap", "✓ Harga Transparan"].map((badge, i) => (
              <motion.span key={i} className="bg-white/20 px-4 py-2 rounded-full" custom={i} variants={badgeVariants} initial="hidden" animate="visible">
                {badge}
              </motion.span>
            ))}
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <motion.section className="py-8 bg-white shadow-sm" id="armada" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5, duration: 0.6 }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Search Bar */}
          <motion.div className="mb-6" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.6, duration: 0.5 }}>
            <div className="relative max-w-xl mx-auto md:mx-0">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Cari mobil..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
              />
            </div>
          </motion.div>

          {/* Category Filter */}
          <div className="flex flex-wrap gap-4 items-center space-x-2 overflow-x-auto pb-2">
            <Filter className="w-5 h-5 text-gray-600 flex-shrink-0" />
            {categories.map((category, i) => (
              <motion.button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-lg font-medium transition-all whitespace-nowrap ${selectedCategory === category ? "bg-blue-600 text-white shadow-md" : "bg-gray-100 text-gray-700 hover:bg-gray-200"}`}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 + i * 0.05, duration: 0.3 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}>
                {category}
              </motion.button>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Cars Grid */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="mb-6 text-gray-600" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
            Menampilkan <span className="font-bold text-blue-600">{filteredCars.length}</span> mobil
          </motion.div>

          <AnimatePresence mode="wait">
            <motion.div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6" variants={containerVariants} initial="hidden" animate="visible" key={selectedCategory + searchQuery}>
              {filteredCars.map((car, index) => (
                <motion.div
                  key={`${car.name}-${index}`}
                  className="bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden group"
                  variants={cardVariants}
                  layout
                  transition={{ duration: 0.5 }}
                  whileHover={{
                    y: -10,
                    transition: { duration: 0.3 },
                  }}>
                  <motion.div className="relative overflow-hidden h-72">
                    <motion.img src={car.image} className="object-cover w-full  h-72 flex items-center justify-center" whileHover={{ scale: 1.1 }} transition={{ duration: 0.3 }}></motion.img>
                  </motion.div>

                  {/* Content */}
                  <div className="p-6">
                    {/* Category Badge */}
                    <motion.span
                      className="inline-block bg-blue-100 text-blue-600 text-xs font-semibold px-3 py-1 rounded-full mb-3"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.2, duration: 0.5 }}>
                      {car.category}
                    </motion.span>

                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{car.name}</h3>
                    <p className="text-gray-600 mb-4">{car.desc}</p>

                    {/* Specifications */}
                    <div className="grid grid-cols-3 gap-2 mb-4 text-sm">
                      <motion.div className="flex items-center space-x-1 text-gray-600" whileHover={{ scale: 1.1, color: "#2563eb" }}>
                        <Users className="w-4 h-4" />
                        <span>{car.seats} kursi</span>
                      </motion.div>
                      <motion.div className="flex items-center space-x-1 text-gray-600" whileHover={{ scale: 1.1, color: "#2563eb" }}>
                        <Settings className="w-4 h-4" />
                        <span>{car.transmission}</span>
                      </motion.div>
                      <motion.div className="flex items-center space-x-1 text-gray-600" whileHover={{ scale: 1.1, color: "#2563eb" }}>
                        <Fuel className="w-4 h-4" />
                        <span>{car.fuel}</span>
                      </motion.div>
                    </div>

                    {/* Price & Button */}
                    <div className="flex justify-between items-center pt-4 border-t border-gray-100">
                      <div>
                        <span className="text-2xl font-bold text-blue-600">{car.price}</span>
                        <span className="text-sm text-gray-500">/hari</span>
                      </div>
                      <motion.button
                        onClick={scrollToContact}
                        className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold py-2 px-6 rounded-lg transition-all shadow-md flex items-center space-x-1"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}>
                        <span>Pesan</span>
                        <ChevronRight className="w-4 h-4" />
                      </motion.button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          {filteredCars.length === 0 && (
            <motion.div className="text-center py-16" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }}>
              <Car className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Mobil tidak ditemukan</h3>
              <p className="text-gray-600">Coba ubah filter atau kata kunci pencarian Anda</p>
            </motion.div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <motion.section className="py-16 bg-gradient-to-r from-blue-600 to-blue-400" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2 className="text-3xl md:text-5xl font-bold text-white mb-4" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2, duration: 0.6 }}>
            Sudah Menemukan Mobil Impian?
          </motion.h2>
          <motion.p className="text-xl text-blue-100 mb-8" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.4, duration: 0.6 }}>
            Hubungi kami sekarang untuk reservasi dan penawaran terbaik!
          </motion.p>
          <motion.button
            onClick={scrollToContact}
            className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold py-4 px-12 rounded-lg text-xl transition-all shadow-xl inline-flex items-center space-x-2"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, type: "spring", stiffness: 200 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}>
            <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
            </svg>
            <span>Hubungi Kami Sekarang</span>
          </motion.button>
        </div>
      </motion.section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
              <div className="flex items-center space-x-2 mb-4">
                <Car className="w-8 h-8 text-blue-400" />
                <span className="text-2xl font-bold">SewaMobilin</span>
              </div>
              <p className="text-gray-400">Sewa mobil jadi lebih simpel.</p>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1, duration: 0.5 }}>
              <h3 className="text-lg font-bold mb-4">Menu</h3>
              <ul className="space-y-2">
                {["Home", "Armada", "Tentang", "Kontak"].map((item) => (
                  <li key={item}>
                    <a href={item === "Home" ? "/" : `/#${item.toLowerCase()}`} className="text-gray-400 hover:text-white transition-colors">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2, duration: 0.5 }}>
              <h3 className="text-lg font-bold mb-4">Kontak</h3>
              <ul className="space-y-3">
                <li className="text-gray-400">📞 0812-3456-7890</li>
                <li className="text-gray-400">✉️ info@sewamobilin.com</li>
                <li className="text-gray-400">📍 Jakarta, Indonesia</li>
              </ul>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3, duration: 0.5 }}>
              <h3 className="text-lg font-bold mb-4">Ikuti Kami</h3>
              <div className="flex space-x-4">
                {["IG", "TT", "WA"].map((social) => (
                  <motion.a
                    key={social}
                    href="#"
                    className="bg-gray-800 hover:bg-blue-600 w-10 h-10 rounded-full flex items-center justify-center transition-colors text-sm font-bold"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}>
                    {social}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>

          <motion.div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.4, duration: 0.5 }}>
            <p>&copy; 2025 SewaMobilin. All rights reserved.</p>
          </motion.div>
        </div>
      </footer>
    </div>
  );
};

export default ArmadaPage;
