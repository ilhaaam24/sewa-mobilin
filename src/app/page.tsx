"use client";
import { Car, Shield, Clock, DollarSign, Star, ChevronRight } from "lucide-react";
import Image from "next/image";
import { event as gaEvent } from "../lib/gtag";
import { Navbar } from "../app/components/Navbar";
import { FaWhatsapp } from "react-icons/fa";
import Link from "next/link";
import { Footer } from "./components/Footer";
import WhatsappButton from "./components/WhatsappButton";

const Home = () => {
  const trackAndScroll = (label: string, id: string) => {
    try {
      gaEvent({
        action: "cta_click",
        category: "engagement",
        label,
        value: 1,
      });
    } catch {}
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const cars = [
    { name: "Honda Brio", price: "Rp 300.000", image: "/assets/brio.jpg", desc: "Hemat & lincah untuk kota" },
    { name: "Innova Reborn", price: "Rp 550.000", image: "/assets/inova.jpg", desc: "Nyaman untuk keluarga" },
    { name: "Pajero Sport", price: "Rp 800.000", image: "/assets/pajero.jpg", desc: "Siap untuk perjalanan jauh" },
  ];

  const testimonials = [
    { name: "Rina", location: "Jakarta", text: "Layanan cepat dan mobilnya bersih banget! Reservasi online-nya juga gampang.", rating: 5 },
    { name: "Andi", location: "Bandung", text: "SewaMobilin bikin perjalanan bisnis saya jadi lancar.", rating: 5 },
    { name: "Siti", location: "Surabaya", text: "Harga transparan, tidak ada biaya tersembunyi. Recommended!", rating: 5 },
  ];

  return (
    <div className="min-h-screen bg-white relative  ">
      <Navbar />
      <WhatsappButton />
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <Image src={"/assets/hero-image.jpg"} alt="Hero Image" fill priority className="absolute inset-0 object-cover" />
        <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/50 to-black/20" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl md:text-5xl lg:text-7xl font-bold text-white mb-6 animate-fade-in max-w-3xl md:max-w-3xl">Sewa Mobil Tanpa Ribet, Kapan Pun, di Mana Pun.</h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">Temukan mobil terbaik sesuai kebutuhanmu dan pesan langsung secara online — cepat, mudah, dan aman.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button onClick={() => trackAndScroll("hero_pesan", "kontak")} className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold py-4 px-8 rounded-lg text-lg transition-all transform hover:scale-105 shadow-xl">
              Pesan Sekarang
            </button>
            <button onClick={() => trackAndScroll("hero_lihat_armada", "armada")} className="bg-transparent border-2 border-white hover:bg-white hover:text-blue-600 text-white font-bold py-4 px-8 rounded-lg text-lg transition-all">
              Lihat Armada
            </button>
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
              <div key={index} className="bg-white p-8 rounded-xl shadow-xs hover:shadow-md transition-all transform hover:-translate-y-2  flex flex-col items-center text-center">
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
              { step: "1", title: "Pilih Mobil", desc: "Pilih mobil dan tanggal sewa sesuai kebutuhanmu." },
              { step: "2", title: "Isi Data", desc: "Isi data pemesanan dan metode pembayaran." },
              { step: "3", title: "Siap Berkendara", desc: "Terima konfirmasi dan siap berkendara!" },
            ].map((item, index) => (
              <div key={index} className="text-center relative">
                <div className="bg-linear-to-br from-blue-600 to-blue-400 text-white text-4xl font-bold w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 shadow-xl">{item.step}</div>
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
            <button onClick={() => trackAndScroll("how_it_works_mulai", "kontak")} className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-12 rounded-lg text-lg transition-all transform hover:scale-105 shadow-xl">
              Mulai Sekarang
            </button>
          </div>
        </div>
      </section>

      {/* Armada Section */}
      <section className="py-20 bg-gray-50" id="armada">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-16">Pilihan Mobil Terpopuler</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {cars.map((car, index) => (
              <div key={index} className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-all transform hover:-translate-y-1">
                <Image src={car.image} alt={car.name} width={200} height={150} className="bg-linear-to-br from-blue-100 to-blue-50 h-60 w-full flex items-center justify-center text-7xl object-cover " />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{car.name}</h3>
                  <p className="text-gray-600 mb-4">{car.desc}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-sm md:text-2xl font-bold text-blue-600">
                      {car.price}
                      <span className="text-sm text-gray-500">/hari</span>
                    </span>
                    <button onClick={() => trackAndScroll(`fleet_pesan_${car.name}`, "kontak")} className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold py-2 px-4 rounded-lg transition-all">
                      Pesan
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/armada">
              <button onClick={() => trackAndScroll("fleet_lihat_semua", "armada")} className="bg-white border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white font-bold py-3 px-8 rounded-lg text-lg transition-all">
                Lihat Semua Armada
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-16">Apa Kata Pelanggan Kami?</h2>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((item, index) => (
              <div key={index} className="bg-linear-to-br from-blue-50 to-white p-8 rounded-xl shadow-lg">
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
      <section className="py-20  ">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">Siap Jalan Sekarang?</h2>
          <p className="text-xl text-gray-500 mb-8">Temukan mobil impianmu dan nikmati pengalaman sewa tanpa stres.</p>
          <button onClick={() => trackAndScroll("final_cta_pesan", "kontak")} className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold py-4 px-12 rounded-lg text-xl transition-all transform hover:scale-105 shadow-xl">
            <FaWhatsapp size={32} className=" inline-block mr-2" /> Pesan Mobil Sekarang
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
