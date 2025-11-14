"use client";
import { Car, Users, Award, Shield, Clock, CheckCircle, Target, Heart, TrendingUp, MapPin, Calendar, Star, DollarSign } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Navbar } from "../components/Navbar";
import { FaWhatsapp } from "react-icons/fa";
import { Footer } from "../components/Footer";
import WhatsappButton from "../components/WhatsappButton";

export default function TentangKami() {
  // Animation Variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const scaleIn = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5 },
    },
  };

  const slideInLeft = {
    hidden: { opacity: 0, x: -100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 },
    },
  };

  const slideInRight = {
    hidden: { opacity: 0, x: 100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <WhatsappButton />
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center bg-gradient-to-br from-black to-gray-500 justify-center overflow-hidden ">
        <motion.div className="absolute inset-0 " initial={{ scale: 1.2 }} animate={{ scale: 1 }} transition={{ duration: 1.5 }} />
        <div className="absolute inset-0 " />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }} className="inline-block bg-yellow-400 text-gray-900 px-6 py-2 rounded-full font-bold mb-4">
            Sejak 2015
          </motion.div>

          <motion.h1 className="text-4xl md:text-6xl font-bold text-white mb-6" initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.3 }}>
            Tentang SewaMobilin Jember
          </motion.h1>

          <motion.p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.5 }}>
            Partner terpercaya Anda untuk layanan rental mobil berkualitas di Jember dan sekitarnya
          </motion.p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div variants={slideInLeft} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <div className="relative">
                <div className="absolute -top-4 -left-4 w-72 h-72 bg-blue-200 rounded-full blur-3xl opacity-30"></div>
                <div className="relative bg-gradient-to-br from-blue-500 to-blue-600  h-96  p-8 rounded-3xl shadow-2xl">
                  <Image src={"/assets/image-1.jpg"} alt="image" width={400} height={500} className="absolute rounded-2xl  top-0 left-0 w-full h-full object-cover" />
                  <div className="mt-6 text-center">
                    <div className="text-4xl font-bold text-white mb-2">10+</div>
                    <div className="text-blue-100">Tahun Pengalaman</div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div variants={slideInRight} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Cerita Kami</h2>
              <p className="text-gray-600 text-lg mb-4 leading-relaxed">
                Berawal dari impian sederhana di tahun <span className="font-bold text-blue-600">2015</span>, SewaMobilin didirikan di <span className="font-bold text-blue-600">Jember, Jawa Timur</span> dengan visi untuk menyediakan layanan
                rental mobil yang terpercaya, terjangkau, dan mudah diakses oleh masyarakat.
              </p>
              <p className="text-gray-600 text-lg mb-4 leading-relaxed">
                Kami memahami bahwa setiap perjalanan memiliki cerita dan makna tersendiri. Itulah mengapa kami berkomitmen untuk menjadi bagian dari perjalanan Anda dengan menyediakan armada berkualitas dan pelayanan terbaik.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed">Lebih dari sekedar rental mobil, kami adalah mitra perjalanan yang siap mendukung setiap kebutuhan mobilitas Anda di Jember dan sekitarnya.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-br from-gray-800 to-gray-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="grid grid-cols-2 md:grid-cols-4 gap-8" variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            {[
              { icon: Users, number: "15,000+", label: "Pelanggan Puas" },
              { icon: Car, number: "50+", label: "Unit Kendaraan" },
              { icon: Award, number: "10+", label: "Tahun Berpengalaman" },
              { icon: Star, number: "4.9/5", label: "Rating Pelanggan" },
            ].map((stat, index) => (
              <motion.div key={index} className="text-center" variants={scaleIn}>
                <motion.div className="bg-white/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" whileHover={{ scale: 1.1, rotate: 360 }} transition={{ duration: 0.5 }}>
                  <stat.icon className="w-8 h-8 text-white" />
                </motion.div>
                <div className="text-4xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-blue-100 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-16" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            Visi & Misi Kami
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div className="bg-white p-8 rounded-2xl shadow-lg" variants={slideInLeft} initial="hidden" whileInView="visible" viewport={{ once: true }} whileHover={{ y: -5 }}>
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Visi Kami</h3>
              <p className="text-gray-600 text-lg leading-relaxed">Menjadi penyedia layanan rental mobil terdepan di Jember yang dikenal dengan kualitas armada, pelayanan prima, dan kepercayaan pelanggan yang tinggi.</p>
            </motion.div>

            <motion.div className="bg-white p-8 rounded-2xl shadow-lg" variants={slideInRight} initial="hidden" whileInView="visible" viewport={{ once: true }} whileHover={{ y: -5 }}>
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Heart className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Misi Kami</h3>
              <ul className="space-y-3">
                {["Menyediakan armada berkualitas dan terawat", "Memberikan pelayanan terbaik 24/7", "Harga transparan tanpa biaya tersembunyi", "Membangun kepercayaan jangka panjang"].map((item, index) => (
                  <motion.li key={index} className="flex items-start space-x-3 text-gray-600" initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }}>
                    <CheckCircle className="w-6 h-6 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span className="text-lg">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-16" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            Mengapa Memilih Kami?
          </motion.h2>

          <motion.div className="grid md:grid-cols-3 gap-8" variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            {[
              {
                icon: Shield,
                title: "Terpercaya & Aman",
                desc: "Dengan pengalaman lebih dari 10 tahun, kami telah melayani ribuan pelanggan dengan kepuasan tinggi. Semua unit dilengkapi asuransi lengkap.",
              },
              {
                icon: Car,
                title: "Armada Berkualitas",
                desc: "Fleet kendaraan kami selalu dalam kondisi prima dengan perawatan rutin. Dari city car hingga SUV premium tersedia untuk Anda.",
              },
              {
                icon: Clock,
                title: "Layanan 24/7",
                desc: "Tim customer service kami siap melayani Anda kapan saja. Proses booking mudah dan cepat, siap antar jemput di lokasi Anda.",
              },
              {
                icon: DollarSign,
                title: "Harga Kompetitif",
                desc: "Kami menawarkan harga terbaik di Jember dengan kualitas layanan premium. Tidak ada biaya tersembunyi, semua transparan.",
              },
              {
                icon: MapPin,
                title: "Lokasi Strategis",
                desc: "Berlokasi di pusat kota Jember, mudah dijangkau dan dekat dengan berbagai destinasi wisata maupun bisnis di sekitar Jember.",
              },
              {
                icon: TrendingUp,
                title: "Terus Berkembang",
                desc: "Kami terus berinovasi dan meningkatkan layanan. Sistem booking online, armada terbaru, dan pelayanan yang semakin baik.",
              },
            ].map((item, index) => (
              <motion.div key={index} className="bg-gray-50 p-8 rounded-xl hover:shadow-xl flex flex-col items-center transition-all" variants={scaleIn} whileHover={{ y: -10 }}>
                <motion.div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-6" whileHover={{ rotate: 360 }} transition={{ duration: 0.5 }}>
                  <item.icon className="w-8 h-8 text-blue-600" />
                </motion.div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed text-center">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Commitment Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div variants={slideInLeft} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Komitmen Kami untuk Anda</h2>
              <div className="space-y-6">
                {[
                  {
                    title: "Kualitas Terjamin",
                    desc: "Setiap kendaraan melewati inspeksi ketat sebelum disewakan",
                  },
                  {
                    title: "Pelayanan Prima",
                    desc: "Tim profesional kami siap membantu 24 jam sehari",
                  },
                  {
                    title: "Fleksibilitas Tinggi",
                    desc: "Paket sewa harian, mingguan, bulanan sesuai kebutuhan Anda",
                  },
                  {
                    title: "Dukungan Penuh",
                    desc: "Bantuan teknis dan customer support selalu ready",
                  },
                ].map((item, index) => (
                  <motion.div key={index} className="flex items-start space-x-4" initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }}>
                    <CheckCircle className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">{item.title}</h4>
                      <p className="text-gray-600">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div variants={slideInRight} initial="hidden" whileInView="visible" viewport={{ once: true }} className="relative">
              <iframe
                className="rounded-2xl md:w-[600px] w-full h-96 md:h-[350px]"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d327.76619321354497!2d113.4448671771584!3d-8.15837621037726!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd68ba777bc5813%3A0x25524c5032855b77!2sJl.%20PB.Sudirman%20No.17%2C%20Tekoan%2C%20Tanggul%20Kulon%2C%20Kec.%20Tanggul%2C%20Kabupaten%20Jember%2C%20Jawa%20Timur%2068155!5e0!3m2!1sen!2sid!4v1763089846551!5m2!1sen!2sid"
                loading="lazy"></iframe>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <motion.section className="py-20" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2 className="text-4xl md:text-5xl font-bold text-black mb-6" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}>
            Siap Merasakan Layanan Terbaik Kami?
          </motion.h2>
          <motion.p className="text-xl text-gray-500 mb-8" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }}>
            Bergabunglah dengan ribuan pelanggan yang telah mempercayai kami sejak 2015
          </motion.p>
          <motion.button
            className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold py-4 px-12 rounded-lg text-xl shadow-xl inline-flex items-center space-x-2"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, type: "spring", stiffness: 200 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}>
            <FaWhatsapp className="w-6 h-6" />
            <span>Hubungi Kami Sekarang</span>
          </motion.button>
        </div>
      </motion.section>

      <Footer />
    </div>
  );
}
