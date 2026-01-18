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
        technologies: ["TensorFlow", "Python", "Android", "Kotlin"],
        
        // Case Study
        caseStudy: {
            challenge: "Komunitas tunarungu di Indonesia menghadapi kesulitan dalam berkomunikasi dengan masyarakat umum karena minimnya pemahaman tentang bahasa isyarat SIBI. Diperlukan solusi teknologi yang dapat menjembatani komunikasi ini secara real-time dan mudah diakses.",
            approach: [
                "Mengumpulkan dan mempersiapkan dataset gambar gestur tangan SIBI untuk 26 huruf alphabet",
                "Membangun dan melatih model Machine Learning menggunakan TensorFlow untuk pengenalan gestur",
                "Mengoptimasi model untuk dapat berjalan di perangkat Android dengan resource terbatas",
                "Mengintegrasikan model ke dalam aplikasi Android yang user-friendly"
            ],
            solution: "Dikembangkan aplikasi Android yang menggunakan kamera device untuk menangkap gestur tangan secara real-time dan menerjemahkannya menjadi teks alfabet. Model ML dioptimasi menggunakan TensorFlow Lite untuk performa optimal di mobile device.",
            impact: [
                { metric: "95%", label: "Akurasi Deteksi" },
                { metric: "26", label: "Huruf SIBI" },
                { metric: "Real-time", label: "Proses Translasi" }
            ]
        },
        
        // Process per project
        process: [
            { step: 1, title: "Research", description: "Mempelajari gestur SIBI dan kebutuhan komunitas tunarungu" },
            { step: 2, title: "Data Collection", description: "Mengumpulkan dataset gambar gestur tangan" },
            { step: 3, title: "Model Training", description: "Melatih model TensorFlow untuk pengenalan gestur" },
            { step: 4, title: "Optimization", description: "Mengoptimasi model untuk perangkat mobile" },
            { step: 5, title: "Development", description: "Membangun aplikasi Android dengan Kotlin" },
            { step: 6, title: "Testing", description: "Pengujian akurasi dan performa aplikasi" }
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
        
        // Case Study
        caseStudy: {
            challenge: "HansKongkow Warmindo membutuhkan platform digital untuk meningkatkan presence online dan memudahkan pelanggan dalam melihat menu serta melakukan pemesanan. Sistem manual sebelumnya menyebabkan ketidakefisienan dalam proses order dan pembayaran.",
            approach: [
                "Analisis kebutuhan bisnis dan user flow untuk pemesanan makanan",
                "Desain UI/UX yang modern dan mudah digunakan",
                "Implementasi sistem pemesanan dan payment gateway",
                "Pengembangan backend dengan Node.js dan Prisma ORM"
            ],
            solution: "Platform web yang terintegrasi dengan sistem pemesanan online dan multiple payment gateway (transfer bank dan QRIS). Dilengkapi dengan dashboard admin untuk manajemen order dan menu.",
            impact: [
                { metric: "2x", label: "Peningkatan Order" },
                { metric: "QRIS", label: "Payment Integration" },
                { metric: "100%", label: "Digital Menu" }
            ]
        },
        
        // Process per project
        process: [
            { step: 1, title: "Discovery", description: "Memahami kebutuhan bisnis warmindo" },
            { step: 2, title: "Design", description: "Merancang UI/UX yang user-friendly" },
            { step: 3, title: "Development", description: "Membangun frontend dan backend" },
            { step: 4, title: "Integration", description: "Integrasi payment gateway" },
            { step: 5, title: "QA Testing", description: "Pengujian fungsionalitas sistem" },
            { step: 6, title: "Deployment", description: "Peluncuran dan maintenance" }
        ],
        
        link: "#",
        github: "https://github.com/Huzaisa/Hans.git",
    },
    {
        id: 3,
        title: "Sistem Pengenalan Bahasa Isyarat Indonesia",
        subtitle: "Machine Learning",
        category: "AI / ML",
        description: "Machine Learning model yang didesain untuk mengenali bahasa isyarat Indonesia (SIBI).",
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
        
        // Case Study
        caseStudy: {
            challenge: "Diperlukan sistem yang dapat mengenali gestur bahasa isyarat Indonesia (SIBI) secara akurat menggunakan computer vision. Tantangannya adalah membuat model yang cukup akurat namun tetap ringan untuk digunakan dalam aplikasi real-time.",
            approach: [
                "Pengumpulan dataset gestur tangan untuk setiap huruf alphabet SIBI",
                "Preprocessing dan augmentasi data untuk meningkatkan variasi training data",
                "Eksperimen dengan berbagai arsitektur CNN untuk menemukan model optimal",
                "Fine-tuning hyperparameter untuk mencapai akurasi maksimal"
            ],
            solution: "Model CNN yang dilatih menggunakan TensorFlow dengan arsitektur yang dioptimasi untuk pengenalan gestur tangan. Model mampu melakukan prediksi real-time dengan akurasi tinggi pada kondisi pencahayaan yang memadai.",
            impact: [
                { metric: "95%", label: "Akurasi Model"},
                { metric: "26", label: "Kelas Gestur"},
                { metric: "Realtime", label: "Translation"}
            ]
        },
        
        // Process per project
        process: [
            { step: 1, title: "Data Collection", description: "Mengumpulkan ribuan gambar gestur SIBI" },
            { step: 2, title: "Preprocessing", description: "Augmentasi dan normalisasi data" },
            { step: 3, title: "Architecture Design", description: "Merancang arsitektur CNN optimal" },
            { step: 4, title: "Training", description: "Melatih model dengan dataset" },
            { step: 5, title: "Evaluation", description: "Evaluasi akurasi dan fine-tuning" },
            { step: 6, title: "Deployment", description: "Export model untuk production" }
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
        
        // Case Study (partial - project ongoing)
        caseStudy: {
            challenge: "Retail online UK memiliki data transaksi dalam jumlah besar namun belum dimanfaatkan secara optimal untuk pengambilan keputusan bisnis. Diperlukan analisis mendalam untuk memahami perilaku pelanggan dan meningkatkan strategi bisnis.",
            approach: [
                "Setup environment dan import dataset retail UK",
                "Data cleaning: handling missing values, duplicates, dan outliers",
                "Exploratory Data Analysis untuk memahami pola data",
                "RFM Analysis untuk segmentasi pelanggan",
                "Perhitungan business metrics (AOV, CLV, Retention Rate)",
                "Visualisasi dengan Power BI dan Tableau"
            ],
            solution: "Project ini sedang dalam pengembangan. Output yang direncanakan adalah 5 dashboard interaktif yang menampilkan insights tentang customer segmentation, sales performance, dan business metrics.",
            impact: [
                { metric: "25%", label: "Progress" },
                { metric: "5", label: "Dashboard Planned" },
                { metric: "RFM", label: "Segmentation" }
            ]
        },
        
        // Process per project
        process: [
            { step: 1, title: "Setup", description: "Environment & library setup" },
            { step: 2, title: "Data Loading", description: "Import dan eksplorasi awal data" },
            { step: 3, title: "Data Cleaning", description: "Cleaning dan preprocessing" },
            { step: 4, title: "EDA", description: "Exploratory Data Analysis" },
            { step: 5, title: "Analysis", description: "RFM & Business Metrics" },
            { step: 6, title: "Visualization", description: "Dashboard Power BI & Tableau" }
        ],
        
        phases: [
            { 
                id: 1, 
                name: "Setup", 
                status: "completed", 
                description: "Environment & library setup",
                details: "Menyiapkan environment Python dengan Jupyter Notebook, menginstall dan mengimport library yang diperlukan seperti Pandas, NumPy, Matplotlib, Seaborn, dan Scikit-learn.",
                documents: []
            },
            { 
                id: 2, 
                name: "Data Loading", 
                status: "in-progress", 
                description: "Import dan eksplorasi awal data",
                details: "Memuat dataset retail online UK, melakukan eksplorasi awal untuk memahami struktur data, tipe data, dan statistik deskriptif dasar.",
                documents: []
            },
            { 
                id: 3, 
                name: "Data Cleaning", 
                status: "pending", 
                description: "Cleaning dan preprocessing",
                details: "Membersihkan data dengan menangani missing values, menghapus duplikat, mengidentifikasi dan menangani outliers, serta menyesuaikan tipe data.",
                documents: []
            },
            { 
                id: 4, 
                name: "EDA", 
                status: "pending", 
                description: "Exploratory Data Analysis",
                details: "Melakukan analisis deskriptif mendalam, menganalisis pola data, distribusi, korelasi, dan insight awal dari dataset.",
                documents: []
            },
            { 
                id: 5, 
                name: "Analysis", 
                status: "pending", 
                description: "RFM & Business Metrics",
                details: "Menghitung RFM segmentation, AOV (Average Order Value), CLV (Customer Lifetime Value), Retention Rate, dan Churn Rate.",
                documents: []
            },
            { 
                id: 6, 
                name: "Visualization", 
                status: "pending", 
                description: "Dashboard Power BI & Tableau",
                details: "Membuat 5 dashboard interaktif di Power BI dan Tableau untuk visualisasi customer segmentation, sales performance, dan business metrics.",
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
