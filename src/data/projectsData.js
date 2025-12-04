// Data untuk semua projects yang pernah Anda kerjakan
// Anda bisa menambahkan/edit data di sini dengan mudah

export const projectsData = [
    {
        id: 1,
        title: "SIBI Sign Language translation",
        subtitle: "Sign Language Translation Android App",
        category: "Mobile App",
        description: "SIBI adalah sebuah aplikasi android yang dapat menerjemahkan bahasa Isyarat Indonesia (SIBI) menjadi sebuah teks ",
        detailedDescription: "SIBI adalah aplikasi android yang dapat menerjemahkan bahasa Isyarat Indonesia (SIBI) menjadi sebuah teks. Aplikasi ini menggunakan teknologi Machine Learning untuk menganalisis gambar yang di tangkap oleh kamera secara real-time dan menghasilkan teks huruf yang sesuai dengan huruf dari gestur bahasa isyarat SIBI",
        year: "2025",
        awards: "",
        image: "/images/projects/SIBI2.jpg",
        images: [
            "/images/projects/SIBI3.jpg",
            "/images/projects/SIBI4.jpg",
            "/images/projects/SIBI5.jpg"
        ],
        technologies: ["TensorFlow", "Python", "Android", "Kontlin" ],
        features: [
            "Optimasi performa untuk perangkat android dengan spesifikasi minimum 2GB RAM dan 4GB ROM",
            "Tampilan yang sederhana dan user-friendly",
            "Real-time translation"
        ],
        challenges: [
            "Sistem terbatas pada pengenalan gestur alphabet (fingerspelling) SIBI, belum mendukung gestur leksikal yang merepresentasikan kata atau frasa lengkap.",
            "Sistem belum mampu mendeteksi gestur dari tangan dengan kondisi anatomis yang tidak lengkap, seperti ketiadaan jari tertentu atau jari yang tidak sempurna."
        ],
        results: [
            "Mencapai akurasi hingga 95% dalam mendeteksi gestur tangan",
            "Jarak optimal penggunaan antara 15-30 cm dari kamera dengan kondisi pencahayaan yang memadai",
            "Mendukung 26 karakter alphabet SIBI untuk komunikasi dasar"
        ],
        link: "#",
        github: "https://github.com/KAIKAI240307/SIBI-aplikasi-pengenalan-bahasa-isyarat-.git",
    },
    {
        id: 2,
        title: "HansKongkow Warmindo",
        subtitle: "Company Profile",
        category: "Web App",
        description: "Situs web profil perusahaan yang komprehensif untuk HansKongkow Warmindo dengan design yang modern dan layout yang responsif.",
        detailedDescription: "HansKongkow Warmindo adalah platform company profile yang dilengkapi dengan tampilan menu yang disajikan di Hanskongkow Warmindo dengan fitur-fitur yang lengkap seperti pemesanan. dan pembayaran yang bisa dilakukan dengan transfer antar bank, ataupun qris.",
        year: "2024",
        awards: "",
        image: "/images/projects/handkonkow (2).png",
        images: [
            "/images/projects/handkonkow (2).png",
            "/images/projects/handkonkow (1).png",
            "/images/projects/handkonkow (3).png"
        ],
        technologies: ["React", "Node.js", "Prisma", "PostMan"],
        features: [
            "Payment gateway integration",
            "Order management system"
        ],
        challenges: [
            
        ],
        results: [
            "Meningkatkan pengalaman pelanggan dengan fitur-fitur yang lengkap",
            "Meningkatkan efisiensi operasional dengan sistem pemesanan dan pembayaran yang otomatis",
            "Meningkatkan daya taring pelanggan"
        ],
        link: "#",
        github: "https://github.com/Huzaisa/Hans.git",
    },
    {
        id: 3,
        title: "Sistem Pengenalan Bahasa Isyarat Indonesia",
        subtitle: "Machine Learning",
        category: "AI / ML",
        description: "Machine Learning model yang didesain untuk mengenali bahasa isyarat Indonesia (SIBI) .",
        detailedDescription: "Sistem machine learning yang dapat mengenali bahasa isyarat Indonesia (SIBI) menggunakan data gambar tangan yang diambil melalui kamera. Sistem ini menganalisis pola dari gambar tangan dan memberikan prediksi huruf yang sesuai dengan gestur tangan yang diambil oleh kamera.",
        year: "2024",
        awards: "Best Tech",
        image: "/images/projects/ai-identity.png",
        images: [
            "/images/projects/ai-identity.png",
            "/images/projects/sibibefore (1).png",
            "/images/projects/sibibefore (2).png"
        ],
        technologies: ["Python", "TensorFlow", "Computer Vision", "Machine Learning"],
        features: [
            "Real-time image detection, gesture recognition, and translation",
            "Alphabet SIBI",
            "Custom ML model training"
        ],
        challenges: [
            "Sistem terbatas pada pengenalan gestur alphabet (fingerspelling) SIBI, belum mendukung gestur leksikal yang merepresentasikan kata atau frasa lengkap.",
            "Sistem belum mampu mendeteksi gestur dari tangan dengan kondisi anatomis yang tidak lengkap, seperti ketiadaan jari tertentu atau jari yang tidak sempurna."
        ],
        results: [
            "Mencapai akurasi hingga 95% dalam mendeteksi gestur tangan",
            "Jarak optimal penggunaan antara 15-30 cm dari kamera dengan kondisi pencahayaan yang memadai",
            "Mendukung 26 karakter alphabet SIBI untuk komunikasi dasar"
        ],
        link: "#",
    },
    
];

// Helper function untuk mendapatkan project berdasarkan ID
export const getProjectById = (id) => {
    return projectsData.find(project => project.id === parseInt(id));
};

// Helper function untuk mendapatkan project terkait
export const getRelatedProjects = (currentId, category, limit = 3) => {
    return projectsData
        .filter(project => project.id !== parseInt(currentId) && project.category === category)
        .slice(0, limit);
};
