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
    {
        id: 4,
        title: "Analisis Data Retail Online (UK)",
        subtitle: "Data Analyst Project",
        category: "Data Analysis",
        description: "Analisis komprehensif data retail online UK menggunakan Python, termasuk RFM Analysis, Customer Segmentation, dan Business Metrics dengan visualisasi di Power BI & Tableau.",
        detailedDescription: "Project data analyst yang menganalisis dataset retail online dari UK. Mencakup data cleaning, exploratory analysis, RFM segmentation, business metrics (AOV, CLV, Retention Rate), K-Means clustering, dan market basket analysis. Output berupa 5 dashboard di Power BI dan Tableau.",
        year: "2025",
        awards: "",
        status: "ongoing",
        progress: 25,
        image: "/images/projects/E-commerce_analytic.png",
        images: [
            "/images/projects/E-commerce_analytic.png"
        ],
        technologies: ["Python", "Pandas", "NumPy", "Scikit-learn", "Power BI", "Tableau", "SQL"],
        features: [
            "Data Cleaning & Preprocessing",
            "RFM Analysis & Customer Segmentation",
            "Business Metrics (AOV, CLV, Retention Rate, Churn Rate)",
            "K-Means Clustering",
            "Market Basket Analysis",
            "5 Interactive Dashboards"
        ],
        challenges: [],
        results: [],
        phases: [
            { 
                id: 1, 
                name: "Setup & Import", 
                status: "completed", 
                description: "Setup environment & import libraries",
                details: "Menyiapkan environment Python dengan Jupyter Notebook, menginstall dan mengimport library yang diperlukan seperti Pandas, NumPy, Matplotlib, Seaborn, dan Scikit-learn.",
                documents: [
                    { type: "pdf", url: "/docs/phase1.pdf", title: "Setup Environment & Import Libraries" }
                ]
            },
            { 
                id: 2, 
                name: "Data Loading", 
                status: "completed", 
                description: "Load data & eksplorasi awal",
                details: "Memuat dataset retail online UK, melakukan eksplorasi awal untuk memahami struktur data, tipe data, dan statistik deskriptif dasar.",
                documents: [
                    { type: "pdf", url: "/docs/phase2.pdf", title: "Data Loading & Eksplorasi Awal" }
                ]
            },
            { 
                id: 3, 
                name: "Data Cleaning", 
                status: "completed", 
                description: "Cleaning, handle missing values, remove duplicates & outliers",
                details: "Membersihkan data dengan menangani missing values menggunakan mean/median/modus, menghapus duplikat, mengidentifikasi dan menangani outliers, serta menyesuaikan tipe data.",
                documents: [
                    { type: "pdf", url: "/docs/phase3.pdf", title: "Data Cleaning" }
                ]
            },
            { 
                id: 4, 
                name: "Exploratory Analysis", 
                status: "in-progress", 
                description: "Analisis deskriptif & performa penjualan",
                details: "Melakukan analisis deskriptif mendalam dan menganalisis performa penjualan per kategori produk.",
                documents: []
            },
            { 
                id: 5, 
                name: "Business Analysis", 
                status: "pending", 
                description: "Segmentasi pelanggan, analisis geografis, time series",
                details: "Analisis segmentasi pelanggan, analisis geografis penjualan, dan analisis time series untuk pola musiman.",
                documents: []
            },
            { 
                id: 6, 
                name: "RFM Analysis", 
                status: "pending", 
                description: "Recency, Frequency, Monetary segmentation",
                details: "Perhitungan skor RFM dan segmentasi pelanggan berdasarkan perilaku pembelian.",
                documents: []
            },
            { 
                id: 7, 
                name: "Business Metrics", 
                status: "pending", 
                description: "AOV, CLV, Retention Rate, Churn Rate",
                details: "Menghitung metrik bisnis penting: Average Order Value, Customer Lifetime Value, Retention Rate dengan cohort analysis, dan Churn Rate.",
                documents: []
            },
            { 
                id: 8, 
                name: "Data Modeling", 
                status: "pending", 
                description: "K-Means clustering, market basket analysis",
                details: "Implementasi K-Means clustering untuk segmentasi dan market basket analysis untuk product affinity.",
                documents: []
            },
            { 
                id: 9, 
                name: "Power BI Dashboard", 
                status: "pending", 
                description: "5 interactive dashboards",
                details: "Membuat 5 dashboard interaktif di Power BI dengan DAX measures dan calculated fields.",
                documents: []
            },
            { 
                id: 10, 
                name: "Tableau Dashboard", 
                status: "pending", 
                description: "5 interactive dashboards",
                details: "Membuat 5 dashboard interaktif di Tableau dengan calculated fields dan parameters.",
                documents: []
            },
            { 
                id: 11, 
                name: "Star Schema Export", 
                status: "pending", 
                description: "Export data dalam format star schema",
                details: "Mengexport data dalam format star schema untuk optimasi query di BI tools.",
                documents: []
            },
            { 
                id: 12, 
                name: "Documentation", 
                status: "pending", 
                description: "Final documentation & insights",
                details: "Dokumentasi lengkap project termasuk metodologi, findings, dan actionable insights.",
                documents: []
            }
        ],
        link: "#",
        github: "",
        hasDocumentation: true
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
