"use client";
import { Car, Users, Fuel, Settings, ChevronRight, Filter, Search } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { Navbar } from "../components/Navbar";
import { FaWhatsapp } from "react-icons/fa";

const ArmadaPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("Semua");
  const [searchQuery, setSearchQuery] = useState("");

  const cars = [
    { name: "Honda Brio", price: "Rp 300.000", category: "City Car", seats: 5, transmission: "Manual", fuel: "Bensin", image: "/assets/brio.jpg", desc: "Hemat & lincah untuk kota" },
    { name: "Toyota Agya", price: "Rp 280.000", category: "City Car", seats: 5, transmission: "Manual", fuel: "Bensin", image: "/assets/agya.jpg", desc: "Ekonomis untuk perkotaan" },
    { name: "Honda Jazz", price: "Rp 450.000", category: "Hatchback", seats: 5, transmission: "Automatic", fuel: "Bensin", image: "/assets/jazz.jpg", desc: "Stylish dan bertenaga" },
    { name: "Toyota Yaris", price: "Rp 420.000", category: "Hatchback", seats: 5, transmission: "Automatic", fuel: "Bensin", image: "/assets/yaris2.jpg", desc: "Sporty dan modern" },
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

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-400 text-white pt-24 pb-16 ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Armada Lengkap Kami</h1>
          <p className="text-xl text-blue-100 mb-6">Pilih dari {cars.length}+ mobil berkualitas untuk setiap kebutuhan perjalanan Anda</p>
          <div className="flex items-center justify-center space-x-2 text-sm">
            <span className="bg-white/20 px-4 py-2 rounded-full">✓ Terawat Rutin</span>
            <span className="bg-white/20 px-4 py-2 rounded-full">✓ Asuransi Lengkap</span>
            <span className="bg-white/20 px-4 py-2 rounded-full">✓ Harga Transparan</span>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-white flex justify-center shadow-sm" id="armada">
        <div className="max-w-2xl md:max-w-7xl   px-4 sm:px-6 lg:px-8">
          {/* Search Bar */}
          <div className="mb-6">
            <div className="relative max-w-xl mx-auto md:mx-0">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Cari mobil..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap gap-4 items-center space-x-2 overflow-x-auto pb-2">
            <Filter className="w-5 h-5 text-gray-600 flex-shrink-0" />
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-lg font-medium transition-all whitespace-nowrap ${selectedCategory === category ? "bg-blue-600 text-white shadow-md" : "bg-gray-100 text-gray-700 hover:bg-gray-200"}`}>
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Cars Grid */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-6 text-gray-600">
            Menampilkan <span className="font-bold text-blue-600">{filteredCars.length}</span> mobil
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCars.map((car, index) => (
              <div key={index} className="bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden group">
                {/* Image */}
                <Image src={car.image} alt={car.name} width={500} height={100} className="h-72 w-full   object-cover " />

                {/* Content */}
                <div className="p-6">
                  {/* Category Badge */}
                  <span className="inline-block bg-blue-100 text-blue-600 text-xs font-semibold px-3 py-1 rounded-full mb-3">{car.category}</span>

                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{car.name}</h3>
                  <p className="text-gray-600 mb-4">{car.desc}</p>

                  {/* Specifications */}
                  <div className="grid grid-cols-3 gap-2 mb-4 text-sm">
                    <div className="flex items-center space-x-1 text-gray-600">
                      <Users className="w-4 h-4" />
                      <span>{car.seats} kursi</span>
                    </div>
                    <div className="flex items-center space-x-1 text-gray-600">
                      <Settings className="w-4 h-4" />
                      <span>{car.transmission}</span>
                    </div>
                    <div className="flex items-center space-x-1 text-gray-600">
                      <Fuel className="w-4 h-4" />
                      <span>{car.fuel}</span>
                    </div>
                  </div>

                  {/* Price & Button */}
                  <div className="flex justify-between items-center pt-4 border-t border-gray-100">
                    <div>
                      <span className="text-2xl font-bold text-blue-600">{car.price}</span>
                      <span className="text-sm text-gray-500">/hari</span>
                    </div>
                    <button onClick={scrollToContact} className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold py-2 px-6 rounded-lg transition-all transform hover:scale-105 shadow-md flex items-center space-x-1">
                      <span>Pesan</span>
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredCars.length === 0 && (
            <div className="text-center py-16">
              <Car className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Mobil tidak ditemukan</h3>
              <p className="text-gray-600">Coba ubah filter atau kata kunci pencarian Anda</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-400">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Sudah Menemukan Mobil Impian?</h2>
          <p className="text-xl text-blue-100 mb-8">Hubungi kami sekarang untuk reservasi dan penawaran terbaik!</p>
          <button onClick={scrollToContact} className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold py-4 px-12 rounded-lg text-xl transition-all transform hover:scale-105 shadow-xl">
            <FaWhatsapp size={32} className="inline-block" /> Hubungi Kami Sekarang
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Car className="w-8 h-8 text-blue-400" />
                <span className="text-2xl font-bold">SewaMobilin</span>
              </div>
              <p className="text-gray-400">Sewa mobil jadi lebih simpel.</p>
            </div>

            <div>
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
            </div>

            <div>
              <h3 className="text-lg font-bold mb-4">Kontak</h3>
              <ul className="space-y-3">
                <li className="text-gray-400">📞 0812-3456-7890</li>
                <li className="text-gray-400">✉️ info@sewamobilin.com</li>
                <li className="text-gray-400">📍 Jakarta, Indonesia</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-4">Ikuti Kami</h3>
              <div className="flex space-x-4">
                {["IG", "TT", "WA"].map((social) => (
                  <a key={social} href="#" className="bg-gray-800 hover:bg-blue-600 w-10 h-10 rounded-full flex items-center justify-center transition-colors text-sm font-bold">
                    {social}
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 SewaMobilin. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ArmadaPage;
