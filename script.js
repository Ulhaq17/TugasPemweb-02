document.addEventListener("DOMContentLoaded", function () {
  const nextButton = document.querySelector(".nextButton");
  const backButton = document.querySelector(".backButton");
  const mountainImage = document.getElementById("listGunung");
  const judulGunung = document.querySelector(".judulGunung");
  const isiGunung = document.querySelector(".table-2 p");

  // Daftar gambar dan konten gunung
  const gunungInfo = [
    {
      imageSrc: "/images/gunungMerapi.jpg",
      judul: "1. Gunung Merapi",
      isi: `Merapi adalah satu dari sekitar 500 gunung berapi di Indonesia,
      setidaknya 129 diantaranya adalah gunung berapi aktif yang berada di
      busur vulkanik yang tersebar di sepanjang kepulauan Asia Pasifik
      yang juga dikenal sebagai “Cincin Api”. Hidup di balik bayang-bayang
      gunung berapi yang aktif tentu rasanya seperti duduk di bom waktu,
      terutama ketika menyebut sang Gunung Merapi, gunung berapi yang
      mendominasi pusat pulau Jawa. <br /><br />
      Namun meski sering meletus, Gunung Merapi sangatlah penting bagi
      kehidupan raja-raja maupun masyarakat Jawa. Mengapa demikian? Karena
      lewat letusannya Merapi memuntahkan lava, abu dan mineral pada
      daerah di sekitarnya. Semua itu memberikan nutrisi bergizi pada
      tanah dan membuat daerah di sekitar Merapi menjadi salah satu
      kawasan paling subur di dunia, dan tentu saja lalu menjadi daerah
      yang paling padat penduduknya. Gunung berapi yang megah dan
      berbentuk kerucut dengan puncak berada di ketinggian 2.911 meter di
      atas permukaan laut ini juga menentukan kehidupan pemimpin-pemimpin
      masa lalu dan kerajaaanya. Pada awal abad ke 11, kerajaan kuno
      Mataram yang pernah sangat berkuasa lenyap secara misterius dan
      kekuasaan kerajaan mendadak bergeser ke arah Jawa Timur. Para
      ilmuwan menduga bahwa kehancuran Kerajaan Mataram diakibatkan oleh
      letusan dahsyat Merapi pada tahun 1006 M.`,
    },
    {
      imageSrc: "/images/gunungBromo.jpg",
      judul: "2. Gunung Bromo",
      isi: `Gunung Bromo atau dalam bahasa Tengger dieja "Brama", juga disebut
      Kaldera Tengger, adalah sebuah gunung berapi aktif di Jawa Timur,
      Indonesia. Gunung ini memiliki ketinggian 2.329 meter di atas
      permukaan laut dan berada dalam empat wilayah kabupaten, yakni
      Kabupaten Probolinggo, Kabupaten Pasuruan, Kabupaten Lumajang, dan
      Kabupaten Malang. Gunung Bromo terkenal sebagai objek wisata utama
      di Jawa Timur. Sebagai sebuah objek wisata, Bromo menjadi menarik
      karena statusnya sebagai gunung berapi yang masih aktif. Gunung
      Bromo termasuk dalam kawasan Taman Nasional Bromo Tengger Semeru.
      Nama Bromo berasal dari nama dewa utama dalam agama Hindu, Brahma.
      <br /><br />
      Selama abad 20 dan abad 21, Gunung Bromo telah meletus sebanyak
      beberapa kali, dengan interval waktu yang teratur, yaitu 30 tahun.
      Letusan terbesar terjadi 1974, sedangkan letusan terakhir terjadi
      pada 19 Juli 2019. Bagi penduduk sekitar Gunung Bromo, suku Tengger,
      Gunung Bromo/Gunung Brahma dipercaya sebagai gunung suci. Setiap
      setahun sekali masyarakat Tengger mengadakan upacara Yadnya Kasada
      atau Kasodo. Upacara ini bertempat di sebuah pura yang berada di
      bawah kaki Gunung Bromo dan dilanjutkan ke puncak Bromo. Upacara
      diadakan pada tengah malam hingga dini hari setiap bulan purnama
      sekitar tanggal 14 atau 15 pada bulan Kasodo (kesepuluh) menurut
      penanggalan Jawa.`,
    },
  ];

  let currentMountainIndex = 0;

  function updateMountain() {
    mountainImage.src = gunungInfo[currentMountainIndex].imageSrc;
    judulGunung.textContent = gunungInfo[currentMountainIndex].judul;
    isiGunung.innerHTML = gunungInfo[currentMountainIndex].isi;
  }

  nextButton.addEventListener("click", function () {
    if (currentMountainIndex < gunungInfo.length - 1) {
      currentMountainIndex++;
      updateMountain();
      backButton.disabled = false;
    }
  });

  backButton.addEventListener("click", function () {
    if (currentMountainIndex > 0) {
      currentMountainIndex--;
      updateMountain();
    }
    if (currentMountainIndex === 0) {
      backButton.disabled = true;
    }
  });

  backButton.disabled = true;
});
