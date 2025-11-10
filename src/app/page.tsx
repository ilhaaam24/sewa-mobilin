"use client";
import React, { useState, useEffect } from "react";
import { Car, Shield, Clock, DollarSign, Star, Phone, Mail, MapPin, ChevronRight, Menu, X } from "lucide-react";
import Image from "next/image";

const Home = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const cars = [
    { name: "Toyota Avanza", price: "Rp 400.000", image: "🚙", desc: "Populer untuk keluarga" },
    { name: "Honda Brio", price: "Rp 300.000", image: "🚗", desc: "Hemat & lincah untuk kota" },
    { name: "Innova Reborn", price: "Rp 550.000", image: "🚐", desc: "Nyaman untuk keluarga" },
    { name: "Pajero Sport", price: "Rp 800.000", image: "🚙", desc: "Siap untuk perjalanan jauh" },
  ];

  const testimonials = [
    { name: "Rina", location: "Jakarta", text: "Layanan cepat dan mobilnya bersih banget! Reservasi online-nya juga gampang.", rating: 5 },
    { name: "Andi", location: "Bandung", text: "SewaMobilin bikin perjalanan bisnis saya jadi lancar.", rating: 5 },
    { name: "Siti", location: "Surabaya", text: "Harga transparan, tidak ada biaya tersembunyi. Recommended!", rating: 5 },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? "bg-white shadow-lg" : "bg-transparent"}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center space-x-2">
              <Car className={`w-8 h-8 ${scrolled ? "text-blue-600" : "text-white"}`} />
              <span className={`text-2xl font-bold ${scrolled ? "text-gray-900" : "text-white"}`}>SewaMobilin</span>
            </div>

            <div className="hidden md:flex space-x-8">
              {["Home", "Armada", "Tentang", "Kontak"].map((item) => (
                <a key={item} href={`#${item.toLowerCase()}`} className={`font-medium transition-colors ${scrolled ? "text-gray-700 hover:text-blue-600" : "text-white hover:text-yellow-300"}`}>
                  {item}
                </a>
              ))}
            </div>

            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden">
              {isMenuOpen ? <X className={scrolled ? "text-gray-900" : "text-white"} /> : <Menu className={scrolled ? "text-gray-900" : "text-white"} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white shadow-lg">
            <div className="px-4 py-4 space-y-3">
              {["Home", "Armada", "Tentang", "Kontak"].map((item) => (
                <a key={item} href={`#${item.toLowerCase()}`} className="block text-gray-700 hover:text-blue-600 font-medium">
                  {item}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <Image src={"/assets/hero-image.jpg"} alt="Hero Image" fill priority className="absolute inset-0 object-cover" />
        <div className="absolute inset-0 bg-linear-to-t from-blue-500/40 via-blue-500/20 to-blue-300/20" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-fade-in">
            Sewa Mobil Tanpa Ribet,
            <br />
            Kapan Pun, di Mana Pun.
          </h1>
          <p className="text-xl md:text-2xl text-gray-100 mb-8 max-w-3xl mx-auto">Temukan mobil terbaik sesuai kebutuhanmu dan pesan langsung secara online — cepat, mudah, dan aman.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold py-4 px-8 rounded-lg text-lg transition-all transform hover:scale-105 shadow-xl">Pesan Sekarang</button>
            <button className="bg-transparent border-2 border-white hover:bg-white hover:text-blue-600 text-white font-bold py-4 px-8 rounded-lg text-lg transition-all">Lihat Armada</button>
          </div>
        </div>
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronRight className="w-8 h-8 text-white rotate-90" />
        </div>
      </section>

      {/* Keunggulan Section */}
      <section className="py-20 bg-gray-50" id="tentang">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-16">Kenapa Pilih SewaMobilin?</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Car, title: "Armada Lengkap", desc: "Dari city car hingga SUV, tersedia sesuai kebutuhan." },
              { icon: Clock, title: "Proses Cepat", desc: "Pesan hanya dalam 3 langkah mudah." },
              { icon: Shield, title: "Asuransi & Dukungan 24 Jam", desc: "Berkendara tanpa khawatir." },
              { icon: DollarSign, title: "Harga Transparan", desc: "Tanpa biaya tersembunyi, semua jelas di awal." },
            ].map((item, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                  <item.icon className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cara Kerja Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-16">Cara Pesan Mobil dengan Mudah</h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { step: "01", title: "Pilih Mobil", desc: "Pilih mobil dan tanggal sewa sesuai kebutuhanmu." },
              { step: "02", title: "Isi Data", desc: "Isi data pemesanan dan metode pembayaran." },
              { step: "03", title: "Siap Berkendara", desc: "Terima konfirmasi dan siap berkendara!" },
            ].map((item, index) => (
              <div key={index} className="text-center relative">
                <div className="bg-gradient-to-br from-blue-600 to-blue-400 text-white text-4xl font-bold w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 shadow-xl">{item.step}</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600 text-lg">{item.desc}</p>
                {index < 2 && (
                  <div className="hidden md:block absolute top-10 right-0 transform translate-x-1/2">
                    <ChevronRight className="w-8 h-8 text-blue-300" />
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-12 rounded-lg text-lg transition-all transform hover:scale-105 shadow-xl">🚀 Mulai Sekarang</button>
          </div>
        </div>
      </section>

      {/* Armada Section */}
      <section className="py-20 bg-gray-50" id="armada">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-16">Pilihan Mobil Terpopuler</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {cars.map((car, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all transform hover:-translate-y-2">
                <div className="bg-gradient-to-br from-blue-100 to-blue-50 h-48 flex items-center justify-center text-7xl">{car.image}</div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{car.name}</h3>
                  <p className="text-gray-600 mb-4">{car.desc}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-blue-600">
                      {car.price}
                      <span className="text-sm text-gray-500">/hari</span>
                    </span>
                    <button className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold py-2 px-4 rounded-lg transition-all">Pesan</button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <button className="bg-white border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white font-bold py-3 px-8 rounded-lg text-lg transition-all">Lihat Semua Armada</button>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-16">Apa Kata Pelanggan Kami?</h2>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((item, index) => (
              <div key={index} className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-xl shadow-lg">
                <div className="flex mb-4">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 text-lg mb-6 italic">{item.text}</p>
                <div className="flex items-center">
                  <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg mr-3">{item.name[0]}</div>
                  <div>
                    <p className="font-bold text-gray-900">{item.name}</p>
                    <p className="text-gray-500 text-sm">{item.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-400">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Siap Jalan Sekarang?</h2>
          <p className="text-xl text-blue-100 mb-8">Temukan mobil impianmu dan nikmati pengalaman sewa tanpa stres.</p>
          <button className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold py-4 px-12 rounded-lg text-xl transition-all transform hover:scale-105 shadow-xl">🚗 Pesan Mobil Sekarang</button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12" id="kontak">
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
                    <a href={`#${item.toLowerCase()}`} className="text-gray-400 hover:text-white transition-colors">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-4">Kontak</h3>
              <ul className="space-y-3">
                <li className="flex items-center space-x-2">
                  <Phone className="w-5 h-5 text-blue-400" />
                  <span className="text-gray-400">0812-3456-7890</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Mail className="w-5 h-5 text-blue-400" />
                  <span className="text-gray-400">info@sewamobilin.com</span>
                </li>
                <li className="flex items-center space-x-2">
                  <MapPin className="w-5 h-5 text-blue-400" />
                  <span className="text-gray-400">Jakarta, Indonesia</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-4">Ikuti Kami</h3>
              <div className="flex space-x-4">
                {["Instagram", "TikTok", "WhatsApp"].map((social) => (
                  <a key={social} href="#" className="bg-gray-800 hover:bg-blue-600 w-10 h-10 rounded-full flex items-center justify-center transition-colors">
                    <span className="text-xs">{social[0]}</span>
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

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }
      `}</style>
    </div>
  );
};

export default Home;
