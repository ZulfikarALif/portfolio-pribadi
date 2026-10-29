import { useState } from "react";
import "./App.css";

function App() {
  const [theme, setTheme] = useState<"dark" | "light">("dark");

  return (
    <main className={`app ${theme}`}>
           {/* HERO */}
      <section className="hero hero-intro" id="home">
        <nav className="navbar">
          <h2>
            Portofolio<span>.</span>
          </h2>

          <div className="nav-links">
            <a href="#profile">Profil</a>
            <a href="#skills">Keahlian</a>
            <a href="#projects">Proyek</a>
            <a href="#certificates">Sertifikat</a>
            <a href="#contact">Kontak</a>
          </div>

          <button
            type="button"
            className="theme-toggle"
            onClick={() =>
              setTheme((current) =>
                current === "dark" ? "light" : "dark"
              )
            }
            aria-label="Ganti tema"
          >
            {theme === "dark" ? "☼ Terang" : "☾ Gelap"}
          </button>
        </nav>

        <div className="hero-layout hero-intro-layout">
          <div className="hero-content hero-intro-content">
            <p className="eyebrow intro-eyebrow">
              <span className="status-dot"></span>
              HALO, SELAMAT DATANG DI PORTOFOLIO SAYA
            </p>

            <h1 className="intro-title">
              Mengubah Ide,
              <br />
              <span className="animated-word intro-letters">
                {Array.from("Menjadi Solusi.").map((letter, index) => (
                  <span
                    className="intro-letter"
                    key={`${letter}-${index}`}
                    style={{
                      animationDelay: `${0.7 + index * 0.075}s`,
                    }}
                  >
                    {letter === " " ? "\u00A0" : letter}
                  </span>
                ))}
              </span>
            </h1>

            <p className="hero-description intro-description">
              Saya Zulfikar Alip, lulusan Teknik Informatika
              yang tertarik pada pengembangan web, pengolahan
              data, dan teknologi untuk menciptakan solusi
              yang fungsional dan bermanfaat.
            </p>

            <div className="hero-actions intro-actions">
              <a className="hero-button" href="#projects">
                Lihat Proyek Saya <span>↗</span>
              </a>

              <a className="hero-text-link" href="#profile">
                Kenali Saya <span>↓</span>
              </a>
            </div>

            <div className="intro-bottom-note">
              <span className="intro-note-line"></span>
              <span>TERUS BELAJAR · TERUS BERTUMBUH</span>
            </div>
          </div>
        </div>

        <a className="hero-scroll" href="#profile" aria-label="Gulir ke profil">
          <span>GULIR UNTUK MENJELAJAH</span>
          <span className="scroll-arrow">↓</span>
        </a>
      </section>

      {/* PROFILE */}
      <section className="profile" id="profile">
        <div className="profile-content">
          <p className="eyebrow">01 / PROFILE</p>

          <h2>
            Hello, I'm
            <br />
            <span>Zulfikar Alip.</span>
          </h2>

          <p className="profile-intro">
            Informatics Engineering Graduate yang
            tertarik pada pengembangan web,
            machine learning, dan pengolahan data.
          </p>

          <p>
            Saya senang mengeksplorasi teknologi,
            mempelajari hal baru, dan mengembangkan
            solusi digital yang fungsional. Saya juga
            memiliki ketertarikan pada administrasi
            serta pengelolaan informasi yang terstruktur.
          </p>

          <div className="profile-info">
            <div>
              <span>EDUCATION</span>
              <strong>S1 Teknik Informatika</strong>
              <small>Universitas Tadulako</small>
            </div>

            <div>
              <span>INTERESTS</span>
              <strong>Web Development · Data</strong>
              <small>Technology · Administration</small>
            </div>
          </div>
        </div>

        <div className="profile-image">
          <img
            src="/aliff.JPG"
            alt="Foto profil Zulfikar Alip Takasihaeng"
          />

          <div className="profile-image-label">
            <span className="status-dot"></span>
            INFORMATICS ENGINEERING GRADUATE
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section className="skills" id="skills">
        <div className="skills-heading">
          <p className="eyebrow">02 / SKILLS</p>

          <h2>
            What I <span>Can Do.</span>
          </h2>

          <p>
            Kombinasi kemampuan teknis dan keterampilan
            kerja untuk membangun solusi yang efektif
            dan terorganisir.
          </p>
        </div>

        <div className="skills-grid">
          <article className="skill-card">
            <span className="skill-number">01</span>
            <div className="skill-icon">⌘</div>
            <h3>Web Development</h3>
            <p>
              Membangun antarmuka website yang modern,
              responsif, dan mudah digunakan.
            </p>
            <div className="skill-tags">
              <span>React</span>
              <span>TypeScript</span>
              <span>HTML & CSS</span>
            </div>
          </article>

          <article className="skill-card">
            <span className="skill-number">02</span>
            <div className="skill-icon">⌁</div>
            <h3>Programming & AI</h3>
            <p>
              Mengembangkan logika aplikasi dan
              menerapkan machine learning untuk
              klasifikasi data.
            </p>
            <div className="skill-tags">
              <span>Python</span>
              <span>Naive Bayes</span>
              <span>Flask</span>
            </div>
          </article>

          <article className="skill-card">
            <span className="skill-number">03</span>
            <div className="skill-icon">▤</div>
            <h3>Data Management</h3>
            <p>
              Mengelola data secara terstruktur untuk
              membantu proses pencatatan dan pelaporan.
            </p>
            <div className="skill-tags">
              <span>Microsoft Excel</span>
              <span>Data Processing</span>
            </div>
          </article>

          <article className="skill-card">
            <span className="skill-number">04</span>
            <div className="skill-icon">◎</div>
            <h3>Administration</h3>
            <p>
              Mendukung pekerjaan administrasi,
              dokumentasi, pengarsipan, dan pengelolaan
              berkas.
            </p>
            <div className="skill-tags">
              <span>Documentation</span>
              <span>Filing</span>
              <span>Organization</span>
            </div>
          </article>

          <article className="skill-card">
            <span className="skill-number">05</span>
            <div className="skill-icon">↗</div>
            <h3>Communication</h3>
            <p>
              Berkoordinasi dalam tim, menyampaikan
              informasi, dan mendukung pelaksanaan
              kegiatan.
            </p>
            <div className="skill-tags">
              <span>Teamwork</span>
              <span>Communication</span>
            </div>
          </article>

          <article className="skill-card">
            <span className="skill-number">06</span>
            <div className="skill-icon">✳</div>
            <h3>Continuous Learning</h3>
            <p>
              Terbuka terhadap teknologi baru, evaluasi,
              dan pengembangan kemampuan secara
              berkelanjutan.
            </p>
            <div className="skill-tags">
              <span>Problem Solving</span>
              <span>Adaptability</span>
            </div>
          </article>
        </div>
      </section>

      {/* ABOUT ME */}
      <section className="about" id="about">
        <p className="eyebrow">03 / ABOUT ME</p>

        <h2>Terus Belajar, Terus Bertumbuh.</h2>

        <p>
          Saya percaya bahwa teknologi bukan hanya
          tentang menulis kode, tetapi juga tentang
          memahami masalah, mengelola informasi,
          dan menciptakan solusi yang bermanfaat.
        </p>
      </section>

   
      {/* PROJECTS */}
      <section className="projects" id="projects">
        <p className="eyebrow">04 / SELECTED WORK</p>

        <div className="projects-heading">
          <h2>
            Proyek Pilihan<span>.</span>
          </h2>
          <p>
            Dua proyek yang merepresentasikan pengalaman
            saya dalam pengembangan web dan penerapan
            machine learning.
          </p>
        </div>

        <div className="projects-grid">
          {/* PROJECT 1: SKRIPSI NAIVE BAYES */}
          <article className="project-card">
            <div className="project-preview preview-ml">
              <div className="ml-window">
                <div className="ml-topbar">
                  <span>URL CLASSIFIER</span>
                  <span>● MODEL ACTIVE</span>
                </div>

                <div className="ml-content">
                  <small>CONTENT CLASSIFICATION</small>
                  <h4>Analyze a website.</h4>
                  <p>
                    Sistem klasifikasi konten situs
                    berbasis Naive Bayes.
                  </p>

                  <div className="ml-input">
                    <span>https://example.com</span>
                    <b>↗</b>
                  </div>

                  <div className="ml-result">
                    <div>
                      <small>MODEL ACCURACY</small>
                      <strong>93,63%</strong>
                    </div>
                    <span>NAIVE BAYES</span>
                  </div>
                </div>
              </div>

              <span className="preview-caption">
                01 / MACHINE LEARNING
              </span>
            </div>

            <div className="project-details">
              <span className="project-category">
                MACHINE LEARNING
              </span>

              <h3>Klasifikasi Tautan Berbahaya</h3>

              <p>
                Implementasi metode Multinomial Naive Bayes
                pada layanan URL shortener berbasis website
                untuk mengklasifikasikan konten situs ke
                kategori aman, judi online, dan pornografi.
              </p>

              <div className="project-result">
                <strong>93,63%</strong>
                <span>Akurasi pengujian model</span>
              </div>

              <div className="project-tags">
                <span>Python</span>
                <span>Flask</span>
                <span>TF-IDF</span>
                <span>Naive Bayes</span>
              </div>
            </div>
          </article>

          {/* PROJECT 2: CODEIGNITER */}
          <article className="project-card">
            <div className="project-preview project-photo">
              <img
                src="/project%20template%201.png"
                alt="Dokumentasi Sistem Manajemen Proyek CodeIgniter 3"
              />

              <span className="preview-caption">
                02 / WEB DEVELOPMENT
              </span>
            </div>

            <div className="project-details">
              <span className="project-category">
                WEB DEVELOPMENT
              </span>

              <h3>Sistem Manajemen Proyek</h3>

              <p>
                Aplikasi berbasis CodeIgniter 3 yang
                dikembangkan untuk membantu pengelolaan
                dan pengarsipan dokumen proyek di
                BWS Sulawesi III Palu.
              </p>

              <div className="project-tags">
                <span>CodeIgniter 3</span>
                <span>PHP</span>
                <span>MySQL</span>
                <span>Document Management</span>
              </div>
            </div>
          </article>
        </div>
      </section>

      
      {/* CERTIFICATES */}
      <section className="certificates" id="certificates">
        <div className="certificates-heading">
          <p className="eyebrow">05 / CERTIFICATIONS</p>

          <div className="certificates-title-row">
            <div>
              <h2>Certificates<span>.</span></h2>
              <p>
                Sertifikasi dan pencapaian yang menjadi bagian dari perjalanan
                belajar dan pengembangan kompetensi saya.
              </p>
            </div>

            <span className="certificates-count">
              04 <small>CERTIFICATES</small>
            </span>
          </div>
        </div>

        <div className="certificates-grid">
          {[
            {
              name: "Google Analytics Certification",
              issuer: "Google Skillshop",
              image: "/images/google-analytics.png",
            },
            {
              name: "Sertifikasi Iklan Shopping yang Didukung AI",
              issuer: "Google Skillshop",
              image: "/images/google-shopping-ai.png",
            },
            {
              name: "AI Visibility Toolkit Crash Course",
              issuer: "Semrush Academy",
              image: "/images/semrush-ai-visibility.png",
            },
            {
              name: "Pertukaran Mahasiswa Merdeka — Angkatan 3",
              issuer: "Program PMM",
              image: "/images/serti pmm.png",
            },
          ].map((certificate, index) => (
            <article className="certificate-card" key={certificate.name}>
              <a
                className="certificate-image-link"
                href={certificate.image}
                target="_blank"
                rel="noreferrer"
                aria-label={`Lihat sertifikat ${certificate.name}`}
              >
                <img
                  className="certificate-image"
                  src={certificate.image}
                  alt={`Sertifikat ${certificate.name}`}
                  loading="lazy"
                />
                <span className="certificate-view">
                  <span>Lihat Sertifikat</span>
                  <span>↗</span>
                </span>
              </a>

              <div className="certificate-info">
                <span className="certificate-number">
                  {String(index + 1).padStart(2, "0")} / CERTIFICATE
                </span>
                <h3>{certificate.name}</h3>
                <p>{certificate.issuer}</p>
              </div>
            </article>
          ))}
        </div>
      </section>



      {/* EXPERIENCE & ACTIVITIES */}
      <section className="experience" id="experience">
        <div className="experience-heading">
          <p className="eyebrow">05 / EXPERIENCE & ACTIVITIES</p>
          <h2>Beyond the <span>Classroom.</span></h2>
          <p>
            Pengalaman, kolaborasi, dan kontribusi sosial
            yang membentuk perjalanan saya.
          </p>
        </div>

        <article className="experience-card">
          <div className="experience-story">
            <span className="experience-index">FIELD NOTES / 2023</span>

            <p className="experience-label">STUDENT EXCHANGE</p>
            <h3>Pertukaran Mahasiswa Merdeka</h3>

            <p className="experience-location">
              Jawa Barat, Indonesia
            </p>

            <p className="experience-description">
              Menjadi bagian dari program Pertukaran Mahasiswa
              Merdeka Angkatan 3, memperluas wawasan melalui
              interaksi lintas budaya, kolaborasi, dan pengalaman
              belajar di lingkungan baru.
            </p>

            <div className="experience-divider"></div>

            <p className="experience-label">SOCIAL CONTRIBUTION</p>
            <h4>Ketua Kontribusi Sosial</h4>

            <p className="experience-description">
              Memimpin kegiatan penanaman pohon di Desa Pasir
              Biru, Rancakalong, Sumedang sebagai bentuk
              kontribusi sosial bersama peserta kegiatan.
            </p>

            <div className="project-tags">
              <span>Leadership</span>
              <span>Collaboration</span>
              <span>Social Impact</span>
            </div>
          </div>

  
<div className="experience-gallery">
  <figure className="activity-photo activity-photo-main">
    <img
      src="/pmm.png"
      alt="Dokumentasi kegiatan Pertukaran Mahasiswa Merdeka"
    />
    <figcaption>
      <span>01 / STUDENT EXCHANGE</span>
      <strong>Explore New Perspectives.</strong>
    </figcaption>
  </figure>

  <figure className="activity-photo activity-photo-leader">
    <img
      src="/kontribusi.jpeg"
      alt="Zulfikar sebagai Ketua Kontribusi Sosial"
    />
    <figcaption>
      <span>02 / LEADERSHIP</span>
      <strong>Leading with Purpose.</strong>
    </figcaption>
  </figure>

  <figure className="activity-photo activity-photo-group">
  <img
    src="/kontribusi 1.jpeg"
    alt="Foto bersama peserta kegiatan kontribusi sosial"
  />

    <figcaption>
      <span>03 / SOCIAL CONTRIBUTION</span>
      <strong>Growing Together.</strong>
    </figcaption>
  </figure>
</div>

        </article>
      </section>


      {/* CONTACT */}
      <footer className="contact" id="contact">
        <p className="eyebrow">05 / CONTACT</p>

        <h2>
          Let’s create something
          <br />
          <span>Somethin Great</span>
        </h2>

        <p>
          Terbuka untuk kesempatan kerja, kolaborasi,
          dan pengalaman baru.
        </p>

        <div className="contact-buttons">
          <a
            className="contact-button primary"
            href="mailto:alipzulfikar05@gmail.com"
          >
            ✉ Hubungi Saya
          </a>

          <a
            className="contact-button secondary"
            href="https://instagram.com/aaliiippp_"
            target="_blank"
            rel="noreferrer"
          >
            Instagram ↗
          </a>
        </div>

        <p className="contact-email">
          alipzulfikar05@gmail.com
        </p>

        <p className="copyright">
          © 2026 Zulfikar — Personal Portfolio
        </p>
      </footer>
    </main>
  );
}

export default App;
