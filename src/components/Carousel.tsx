import { useState } from "react";
import Image from "next/image";
import Arrow from "@/Assets/Icon/Arrow";

interface CarouselProps {
  images: { src: string; alt: string }[];
}

const Carousel: React.FC<CarouselProps> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const imagesPerView = 3; // Tetap menampilkan 3 gambar sekaligus

  // Fungsi untuk berpindah ke gambar sebelumnya
  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  // Fungsi untuk menuju ke gambar selanjutnya
  const goToNext = () => {
    const newIndex = currentIndex + 1; // Infinite loop
    setCurrentIndex(newIndex);
  };

  // Fungsi untuk mendapatkan lebar dinamis berdasarkan posisi
  const getWidth = (index: number) => {
    const middleIndex = currentIndex + 1; // Gambar ke-2 besar
    if (index === middleIndex) {
      return "50%"; // Gambar tengah lebih besar
    }
    return "25%"; // Gambar di samping lebih kecil
  };

  // Fungsi untuk mendapatkan skala dinamis berdasarkan posisi
  const getScale = (index: number) => {
    const middleIndex = currentIndex + 1;
    if (index === middleIndex) {
      return 1; // Gambar tengah skala 1 (besar)
    }
    return 1; // Gambar di samping lebih kecil
  };

  // Fungsi untuk mendapatkan efek shadow dinamis berdasarkan posisi
  const getShadow = (index: number) => {
    const middleIndex = currentIndex + 1;
    if (index === middleIndex) {
      return "0px 10px 20px rgba(0, 0, 0, 0.5)"; // Shadow lebih besar di tengah
    }
    return "0px 5px 10px rgba(0, 0, 0, 0.2)"; // Shadow lebih kecil di samping
  };

  return (
    <div className="relative w-full h-80 overflow-hidden">
      {/* Container untuk slide */}
      <div
        className="flex transition-transform duration-700 ease-in-out justify-center"
        style={{
          transform: `translateX(-${(currentIndex * 100) / imagesPerView}%)`,
        }} // Pastikan slide tengah tetap di tengah
      >
        {images.map((image, index) => (
          <div
            key={index}
            className="relative h-80 rounded-lg overflow-hidden flex-shrink-0 transition-all duration-700 ease-in-out"
            style={{
              width: getWidth(index), // Mengatur lebar berdasarkan posisi
              transform: `scale(${getScale(index)})`, // Mengatur skala berdasarkan posisi
              boxShadow: getShadow(index), // Mengatur shadow berdasarkan posisi
              opacity: index === (currentIndex + 1) % images.length ? 1 : 0.7, // Efek fade di samping
              transition:
                "width 0.7s ease-in-out, transform 0.7s ease-in-out, opacity 0.7s ease-in-out, box-shadow 0.7s ease-in-out", // Transisi dinamis
              margin: "0 1px", // Jarak antar gambar lebih rapat
            }}
          >
            <Image
              src={image.src}
              alt={image.alt}
              layout="fill"
              objectFit="cover"
              className="w-full h-full"
            />
            <div className="absolute bottom-4 left-4 text-white font-bold bg-black bg-opacity-50 px-2 py-1 rounded-lg">
              Slide {index + 1}
            </div>
          </div>
        ))}
      </div>

      {/* Tombol Previous */}
      <button
        onClick={goToPrevious}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full"
      >
        <Arrow className="h-6 w-6" />
      </button>

      {/* Tombol Next */}
      <button
        onClick={goToNext}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full"
      >
        <Arrow className="h-6 w-6" />
      </button>
    </div>
  );
};

export default Carousel;
