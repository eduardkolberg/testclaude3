const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="de">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Ambulant betreute Wohngemeinschaft Braunschweig</title>
      <style>
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        body {
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          background: #f5f5f5;
          color: #333;
        }

        .header {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          padding: 1.5rem 2rem;
          box-shadow: 0 2px 10px rgba(0,0,0,0.1);
        }

        .header h1 {
          font-size: 1.8rem;
          margin-bottom: 0.5rem;
        }

        .header p {
          font-size: 1rem;
          opacity: 0.9;
        }

        .container {
          display: flex;
          min-height: calc(100vh - 100px);
        }

        .sidebar {
          width: 320px;
          background: white;
          padding: 1.5rem;
          box-shadow: 2px 0 10px rgba(0,0,0,0.05);
          overflow-y: auto;
          max-height: calc(100vh - 100px);
        }

        .content {
          flex: 1;
          padding: 2rem;
          overflow-y: auto;
        }

        .menu {
          list-style: none;
        }

        .menu-item {
          margin-bottom: 0.5rem;
        }

        .menu-item > a {
          display: block;
          padding: 0.75rem 1rem;
          color: #333;
          text-decoration: none;
          border-radius: 5px;
          font-weight: 600;
          transition: all 0.3s;
          cursor: pointer;
        }

        .menu-item > a:hover {
          background: #667eea;
          color: white;
        }

        .menu-item.active > a {
          background: #667eea;
          color: white;
        }

        .submenu {
          list-style: none;
          margin-left: 1rem;
          margin-top: 0.5rem;
          display: none;
        }

        .menu-item.active .submenu {
          display: block;
        }

        .submenu-item {
          margin-bottom: 0.3rem;
        }

        .submenu-item a {
          display: block;
          padding: 0.5rem 1rem;
          color: #666;
          text-decoration: none;
          border-radius: 5px;
          font-size: 0.9rem;
          transition: all 0.3s;
        }

        .submenu-item a:hover {
          background: #f0f0f0;
          color: #667eea;
        }

        .subsubmenu {
          list-style: none;
          margin-left: 1rem;
          margin-top: 0.3rem;
        }

        .subsubmenu-item a {
          display: block;
          padding: 0.4rem 0.8rem;
          color: #888;
          text-decoration: none;
          font-size: 0.85rem;
          border-left: 2px solid #e0e0e0;
          transition: all 0.3s;
        }

        .subsubmenu-item a:hover {
          color: #667eea;
          border-left-color: #667eea;
        }

        .content-section {
          background: white;
          padding: 2rem;
          border-radius: 10px;
          box-shadow: 0 2px 10px rgba(0,0,0,0.05);
          margin-bottom: 2rem;
        }

        .content-section h2 {
          color: #667eea;
          margin-bottom: 1rem;
          font-size: 1.8rem;
        }

        .content-section h3 {
          color: #764ba2;
          margin-top: 1.5rem;
          margin-bottom: 0.8rem;
          font-size: 1.3rem;
        }

        .content-section p {
          line-height: 1.6;
          color: #555;
          margin-bottom: 1rem;
        }

        .welcome {
          text-align: center;
          padding: 3rem;
        }

        .welcome h2 {
          font-size: 2.5rem;
          color: #667eea;
          margin-bottom: 1rem;
        }

        .welcome p {
          font-size: 1.2rem;
          color: #666;
        }

        @media (max-width: 768px) {
          .container {
            flex-direction: column;
          }

          .sidebar {
            width: 100%;
            max-height: none;
          }
        }
      </style>
    </head>
    <body>
      <div class="header">
        <h1>Ambulant betreute Wohngemeinschaft Braunschweig</h1>
        <p>Selbstbestimmt leben in Gemeinschaft</p>
      </div>

      <div class="container">
        <nav class="sidebar">
          <ul class="menu">
            <li class="menu-item active">
              <a href="#home">🏠 Unser Zuhause</a>
              <ul class="submenu">
                <li class="submenu-item">
                  <a href="#philosophie">Philosophie & Konzept</a>
                  <ul class="subsubmenu">
                    <li class="subsubmenu-item"><a href="#grundwerte">Selbstbestimmt leben: Unsere Grundwerte</a></li>
                    <li class="subsubmenu-item"><a href="#gemeinschaft">Gemeinschaft statt Einsamkeit</a></li>
                    <li class="subsubmenu-item"><a href="#wohnumfeld">Ein ganz normales Wohnumfeld</a></li>
                  </ul>
                </li>
                <li class="submenu-item">
                  <a href="#raeumlichkeiten">Räumlichkeiten & Ausstattung</a>
                  <ul class="subsubmenu">
                    <li class="subsubmenu-item"><a href="#zimmer">Private Zimmer: Ihr persönlicher Rückzugsort</a></li>
                    <li class="subsubmenu-item"><a href="#gemeinschaftsbereiche">Gemeinschaftsbereiche: Das Herz der WG</a></li>
                    <li class="subsubmenu-item"><a href="#barrierefreiheit">Barrierefreiheit & Komfort</a></li>
                    <li class="subsubmenu-item"><a href="#moeblierung">Möblierung: eigene Möbel oder Hausmöbel</a></li>
                    <li class="subsubmenu-item"><a href="#medien">Medien & Internet: TV (optional) & WLAN</a></li>
                  </ul>
                </li>
                <li class="submenu-item">
                  <a href="#alltag">Alltag & Leben</a>
                  <ul class="subsubmenu">
                    <li class="subsubmenu-item"><a href="#tagesablauf">Tagesablauf & Aktivitäten</a></li>
                    <li class="subsubmenu-item"><a href="#mahlzeiten">Gemeinsame Mahlzeiten & frische Küche</a></li>
                    <li class="subsubmenu-item"><a href="#alltagsbegleiter">Die Rolle der Alltagsbegleiter</a></li>
                  </ul>
                </li>
              </ul>
            </li>

            <li class="menu-item">
              <a href="#leistungen">💼 Leistungen & Kosten</a>
              <ul class="submenu">
                <li class="submenu-item">
                  <a href="#servicepaket">Unser Servicepaket</a>
                  <ul class="subsubmenu">
                    <li class="subsubmenu-item"><a href="#praesenz">24-Stunden-Präsenz & Sicherheit</a></li>
                    <li class="subsubmenu-item"><a href="#verpflegung">Verpflegung & Hauswirtschaft</a></li>
                    <li class="subsubmenu-item"><a href="#freizeitgestaltung">Alltags- & Freizeitgestaltung</a></li>
                  </ul>
                </li>
                <li class="submenu-item">
                  <a href="#pflege">Pflege & Betreuung</a>
                  <ul class="subsubmenu">
                    <li class="subsubmenu-item"><a href="#pflegedienstwahl">Das Prinzip der freien Pflegedienstwahl</a></li>
                    <li class="subsubmenu-item"><a href="#ambulanter-pflegedienst">Was leistet ein ambulanter Pflegedienst?</a></li>
                    <li class="subsubmenu-item"><a href="#koordination">Nahtlose Koordination vor Ort</a></li>
                  </ul>
                </li>
                <li class="submenu-item">
                  <a href="#kosten">Kosten & Finanzierung</a>
                  <ul class="subsubmenu">
                    <li class="subsubmenu-item"><a href="#kostenaufstellung">Transparente Kostenaufstellung</a></li>
                    <li class="subsubmenu-item"><a href="#finanzierungshilfen">Finanzierungshilfen der Pflegekasse</a></li>
                    <li class="subsubmenu-item"><a href="#wohngruppenzuschlag">Wohngruppenzuschlag & Zuschüsse</a></li>
                    <li class="subsubmenu-item"><a href="#nebenkosten">Nebenkosten & Inklusivleistungen</a></li>
                    <li class="subsubmenu-item"><a href="#kaution">Kaution: Höhe, Anlage, Rückzahlung</a></li>
                  </ul>
                </li>
              </ul>
            </li>

            <li class="menu-item">
              <a href="#kontakt">📞 Information & Kontakt</a>
              <ul class="submenu">
                <li class="submenu-item">
                  <a href="#standort">Standort & Team</a>
                  <ul class="subsubmenu">
                    <li class="subsubmenu-item"><a href="#lage">Lage im Herzen von Braunschweig</a></li>
                    <li class="subsubmenu-item"><a href="#team">Unser Team stellt sich vor</a></li>
                    <li class="subsubmenu-item"><a href="#anfahrt">Anfahrt & Erreichbarkeit</a></li>
                  </ul>
                </li>
                <li class="submenu-item">
                  <a href="#weg-zu-uns">Der Weg zu uns</a>
                  <ul class="subsubmenu">
                    <li class="subsubmenu-item"><a href="#beratung">Beratung & Besichtigung vereinbaren</a></li>
                    <li class="subsubmenu-item"><a href="#downloads">Informationsmaterial & Downloads</a></li>
                    <li class="subsubmenu-item"><a href="#mietvertrag">Mietvertrag: Ablauf, Unterlagen & Fristen</a></li>
                    <li class="subsubmenu-item"><a href="#faq">Häufig gestellte Fragen (FAQ)</a></li>
                  </ul>
                </li>
                <li class="submenu-item">
                  <a href="#kontakt-aufnehmen">Kontakt aufnehmen</a>
                  <ul class="subsubmenu">
                    <li class="subsubmenu-item"><a href="#kontaktformular">Kontaktformular & E-Mail</a></li>
                    <li class="subsubmenu-item"><a href="#telefon">Telefonische Erreichbarkeit</a></li>
                    <li class="subsubmenu-item"><a href="#adresse">Adresse & Öffnungszeiten</a></li>
                  </ul>
                </li>
              </ul>
            </li>
          </ul>
        </nav>

        <main class="content">
          <div class="content-section welcome">
            <h2>Willkommen in unserer Wohngemeinschaft</h2>
            <p>Selbstbestimmt leben in Gemeinschaft - Wählen Sie einen Menüpunkt aus, um mehr zu erfahren.</p>
          </div>
        </main>
      </div>

      <script>
        // Toggle menu items
        document.querySelectorAll('.menu-item > a').forEach(item => {
          item.addEventListener('click', function(e) {
            e.preventDefault();
            const parent = this.parentElement;
            const wasActive = parent.classList.contains('active');

            // Close all menu items
            document.querySelectorAll('.menu-item').forEach(mi => {
              mi.classList.remove('active');
            });

            // Open clicked item if it wasn't active
            if (!wasActive) {
              parent.classList.add('active');
            }
          });
        });

        // Smooth scroll for all links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
          anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            console.log('Clicked:', targetId);
            // Here you can load content dynamically or scroll to sections
          });
        });
      </script>
    </body>
    </html>
  `);
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server is running on port ${PORT}`);
});
