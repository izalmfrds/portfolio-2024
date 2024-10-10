"use client";
import Carousel from "@/components/Carousel";
import Tes from "@/Assets/Image/BaisMockup.png";

export default function Home() {
  const images = [
    { src: Tes.src, alt: "Bais Mockup" }, // Gunakan gambar yang diimpor secara langsung
    { src: Tes.src, alt: "Bais Mockup" }, // Gunakan gambar yang diimpor secara langsung
    { src: Tes.src, alt: "Bais Mockup" }, // Gunakan gambar yang diimpor secara langsung
    { src: Tes.src, alt: "Bais Mockup" }, // Gunakan gambar yang diimpor secara langsung
    { src: Tes.src, alt: "Bais Mockup" }, // Gunakan gambar yang diimpor secara langsung
    { src: Tes.src, alt: "Bais Mockup" }, // Gunakan gambar yang diimpor secara langsung
    { src: Tes.src, alt: "Bais Mockup" }, // Gunakan gambar yang diimpor secara langsung
    { src: Tes.src, alt: "Bais Mockup" }, // Gunakan gambar yang diimpor secara langsung
    { src: Tes.src, alt: "Bais Mockup" }, // Gunakan gambar yang diimpor secara langsung
    { src: Tes.src, alt: "Bais Mockup" }, // Gunakan gambar yang diimpor secara langsung
    { src: Tes.src, alt: "Bais Mockup" }, // Gunakan gambar yang diimpor secara langsung
    { src: Tes.src, alt: "Bais Mockup" }, // Gunakan gambar yang diimpor secara langsung
    { src: Tes.src, alt: "Bais Mockup" }, // Gunakan gambar yang diimpor secara langsung
    { src: Tes.src, alt: "Bais Mockup" }, // Gunakan gambar yang diimpor secara langsung
    { src: Tes.src, alt: "Bais Mockup" }, // Gunakan gambar yang diimpor secara langsung
  ];

  return (
    <div className="container mx-auto">
      <h1 className="text-3xl font-bold text-center my-8">Carousel Slider</h1>
      <Carousel images={images} />
    </div>
  );
}
