import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

export default function Imprint() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="max-w-4xl mx-auto px-6 lg:px-8 pt-28 pb-20" data-testid="page-imprint">
        <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-10">Imprint / Legal Notice</h1>

        <div className="space-y-10 text-foreground">
          <section>
            <h2 className="text-xl font-semibold text-foreground mb-4">1. Information according to &sect; 5 German Telemedia Act (TMG)</h2>
            <div className="space-y-2 text-muted-foreground leading-relaxed">
              <p className="font-semibold text-foreground">STARACCES UG (haftungsbeschr&auml;nkt)</p>
              <p>Kochhannstra&szlig;e 6</p>
              <p>10249 Berlin</p>
              <p>Germany</p>
            </div>
          </section>

          <section>
            <h3 className="text-lg font-semibold text-foreground mb-2">Represented by</h3>
            <p className="text-muted-foreground">Managing Director: Daniel Seyffarth</p>
          </section>

          <section>
            <h3 className="text-lg font-semibold text-foreground mb-2">Contact</h3>
            <div className="space-y-1 text-muted-foreground">
              <p>Phone: +49 (0)30 3476 1984</p>
              <p>E-mail: <a href="mailto:info@staracces.com" className="text-primary" data-testid="link-imprint-email">info@staracces.com</a></p>
            </div>
          </section>

          <section>
            <h3 className="text-lg font-semibold text-foreground mb-2">Commercial Register Entry</h3>
            <div className="space-y-1 text-muted-foreground">
              <p>Registered in the Commercial Register: HRB 259847</p>
              <p>Register court: Local Court (Amtsgericht) Charlottenburg, Berlin</p>
            </div>
          </section>

          <section>
            <h3 className="text-lg font-semibold text-foreground mb-2">Responsible for content according to &sect; 18 para. 2 German State Media Treaty (MStV)</h3>
            <div className="space-y-1 text-muted-foreground">
              <p>STARACCES UG (haftungsbeschr&auml;nkt)</p>
              <p>Kochhannstra&szlig;e 6</p>
              <p>10249 Berlin, Germany</p>
            </div>
          </section>

          <section>
            <h3 className="text-lg font-semibold text-foreground mb-2">Tax information</h3>
            <p className="text-muted-foreground">Tax number under German tax regulations: 34/532/09305</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-4">2. EU Online Dispute Resolution</h2>
            <div className="space-y-2 text-muted-foreground leading-relaxed">
              <p>The European Commission provides a platform for online dispute resolution (ODR):</p>
              <p><a href="https://ec.europa.eu/consumers/odr/" target="_blank" rel="noopener noreferrer" className="text-primary" data-testid="link-odr">https://ec.europa.eu/consumers/odr/</a></p>
              <p>Our e-mail address can be found above in this Legal Notice.</p>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-4">3. Consumer dispute resolution</h2>
            <p className="text-muted-foreground leading-relaxed">We are neither willing nor obliged to participate in dispute resolution proceedings before a consumer arbitration board.</p>
          </section>

          <hr className="border-border my-12" />

          <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-10">Impressum</h1>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-4">1. Angaben gem&auml;&szlig; &sect; 5 TMG</h2>
            <div className="space-y-2 text-muted-foreground leading-relaxed">
              <p className="font-semibold text-foreground">STARACCES UG (haftungsbeschr&auml;nkt)</p>
              <p>Kochhannstra&szlig;e 6</p>
              <p>10249 Berlin</p>
              <p>Deutschland</p>
            </div>
          </section>

          <section>
            <h3 className="text-lg font-semibold text-foreground mb-2">Vertreten durch</h3>
            <p className="text-muted-foreground">Die Gesch&auml;ftsf&uuml;hrung: Daniel Seyffarth</p>
          </section>

          <section>
            <h3 className="text-lg font-semibold text-foreground mb-2">Kontakt</h3>
            <div className="space-y-1 text-muted-foreground">
              <p>Telefon: +49 (0)30 3476 1984</p>
              <p>E-Mail: <a href="mailto:info@staracces.com" className="text-primary">info@staracces.com</a></p>
            </div>
          </section>

          <section>
            <h3 className="text-lg font-semibold text-foreground mb-2">Registereintrag</h3>
            <div className="space-y-1 text-muted-foreground">
              <p>Eintragung im Handelsregister: HRB 259847</p>
              <p>Registergericht: Amtsgericht Charlottenburg, Berlin</p>
            </div>
          </section>

          <section>
            <h3 className="text-lg font-semibold text-foreground mb-2">Verantwortlich f&uuml;r den Inhalt nach &sect; 18 Abs. 2 MStV</h3>
            <div className="space-y-1 text-muted-foreground">
              <p>STARACCES UG (haftungsbeschr&auml;nkt)</p>
              <p>Kochhannstra&szlig;e 6</p>
              <p>10249 Berlin, Deutschland</p>
            </div>
          </section>

          <section>
            <h3 className="text-lg font-semibold text-foreground mb-2">Steuerinformationen</h3>
            <p className="text-muted-foreground">Steuernummer gem&auml;&szlig; deutschen Steuervorschriften: 34/532/09305</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-4">2. EU-Streitschlichtung</h2>
            <div className="space-y-2 text-muted-foreground leading-relaxed">
              <p>Die Europ&auml;ische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:</p>
              <p><a href="https://ec.europa.eu/consumers/odr/" target="_blank" rel="noopener noreferrer" className="text-primary">https://ec.europa.eu/consumers/odr/</a></p>
              <p>Unsere E-Mail-Adresse findest du oben im Impressum.</p>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-4">3. Verbraucherstreitbeilegung / Universalschlichtungsstelle</h2>
            <p className="text-muted-foreground leading-relaxed">Wir sind nicht bereit und nicht verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.</p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
