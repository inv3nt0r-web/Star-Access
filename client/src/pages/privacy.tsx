import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

export default function Privacy() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="max-w-4xl mx-auto px-6 lg:px-8 pt-28 pb-20" data-testid="page-privacy">
        <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-10">Privacy Policy</h1>

        <div className="space-y-10 text-foreground">
          <section>
            <h2 className="text-xl font-semibold text-foreground mb-4">1. Preamble</h2>
            <div className="space-y-3 text-muted-foreground leading-relaxed">
              <p>This website follows the principle of <strong className="text-foreground">data protection without compromise</strong>. We want you to clearly understand what happens to your personal data when you visit our website.</p>
              <p>This Privacy Policy explains how we collect and process personal data when you use our website, what rights you have under applicable data protection laws (in particular the EU General Data Protection Regulation &ndash; <strong className="text-foreground">GDPR</strong>), and how you can contact us with questions.</p>
              <p>If anything in this Policy is unclear, please contact us at any time using the details below.</p>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-4">2. Controller (Data Controller)</h2>
            <div className="space-y-3 text-muted-foreground leading-relaxed">
              <p>The controller responsible for the processing of personal data in connection with this website is the operator of this site.</p>
              <p>Details of the website operator (name, address, contact details) can be found in our <a href="/imprint" className="text-primary" data-testid="link-privacy-imprint">Imprint / Legal Notice</a> on this website. In this Policy, &ldquo;we&rdquo;, &ldquo;us&rdquo; or &ldquo;our&rdquo; refers to that website operator.</p>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-4">3. Scope of this Privacy Policy</h2>
            <h3 className="text-lg font-semibold text-foreground mb-2">3.1 Website</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">This Privacy Policy applies to the use of our website, currently available at: <strong className="text-foreground">https://staracces.com</strong> (and any sub-pages or sub-domains that refer to this Privacy Policy).</p>
            <h3 className="text-lg font-semibold text-foreground mb-2">3.2 External links</h3>
            <div className="space-y-3 text-muted-foreground leading-relaxed">
              <p>Our website may contain links to third-party websites (&ldquo;external links&rdquo;). Those websites are subject to the privacy policies and responsibility of the respective operators.</p>
              <p>When we first created the link, we checked the external content for any obvious legal violations and none were apparent at that time. We have no influence on the current and future design or content of these external sites and do not adopt their content as our own.</p>
              <p>A continuous control of external links without specific indications of legal violations is not reasonable for us. If we become aware of any legal violations, we will remove such external links without undue delay.</p>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-4">4. Data collected when you visit our website</h2>
            <h3 className="text-lg font-semibold text-foreground mb-2">4.1 Server log files (purely informative use)</h3>
            <div className="space-y-3 text-muted-foreground leading-relaxed">
              <p>When you visit our website for information only &ndash; i.e. you do not actively send information to us (for example via a contact form) &ndash; we only collect the data that your browser automatically transmits to our server. This is technically necessary to display the website and to ensure stability and security.</p>
              <p>These &ldquo;server log files&rdquo; typically include:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>IP address of the requesting device</li>
                <li>Date and time of access</li>
                <li>Requested URL / page</li>
                <li>HTTP status code</li>
                <li>Amount of data transferred</li>
                <li>Referrer URL (the website visited before)</li>
                <li>Browser type and version</li>
                <li>Operating system and interface</li>
              </ul>
              <p>This data is processed on the legal basis of <strong className="text-foreground">Art. 6(1)(f) GDPR</strong> (our legitimate interest in operating a secure and technically functioning website).</p>
              <p>We do not use this data to draw conclusions about individual visitors and we do not merge this data with other data sources. However, we reserve the right to check the server log files retrospectively if specific indications of unlawful use become known.</p>
            </div>

            <h3 className="text-lg font-semibold text-foreground mt-6 mb-2">4.2 Cookies</h3>
            <p className="text-muted-foreground leading-relaxed">Our website does <strong className="text-foreground">not</strong> use cookies or similar tracking technologies, unless they are strictly necessary for technical reasons (for example to display the website correctly or to manage essential functions). No non-essential cookies (such as for marketing, analytics or profiling) are set without your consent.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-4">5. Contacting us</h2>
            <div className="space-y-3 text-muted-foreground leading-relaxed">
              <p>When you contact us (for example via contact form, email or other channels), we process the personal data that you provide to us. This may include in particular:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Name</li>
                <li>Email address</li>
                <li>Any other information you voluntarily provide in your message</li>
              </ul>
              <p>We use this data solely for the purpose of responding to your inquiry, communicating with you and performing any related technical administration.</p>
              <p>The legal basis is our <strong className="text-foreground">legitimate interest</strong> in responding to your request (Art. 6(1)(f) GDPR). If your contact aims at entering into a contract or relates to an existing contract, the additional legal basis is <strong className="text-foreground">Art. 6(1)(b) GDPR</strong> (performance of a contract or steps prior to entering into a contract).</p>
              <p>We store your data only as long as necessary to handle your request and any follow-up questions, unless legal retention obligations require longer storage.</p>
              <p>You can object to this processing at any time or request deletion of your contact data (see Section 8 below). In this case, we will erase the data unless we are legally obliged to keep it.</p>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-4">6. Tools and services used on this website</h2>
            <h3 className="text-lg font-semibold text-foreground mb-2">6.1 OpenStreetMap</h3>
            <div className="space-y-3 text-muted-foreground leading-relaxed">
              <p>Where we display interactive maps on our website, we may use the open-source mapping service <strong className="text-foreground">OpenStreetMap</strong>, operated by OpenStreetMap Foundation, St John&rsquo;s Innovation Centre, Cowley Road, Cambridge, CB4 0WS, United Kingdom.</p>
              <p>The use of OpenStreetMap is based on <strong className="text-foreground">Art. 6(1)(f) GDPR</strong>, reflecting our legitimate interest in providing an attractive, user-friendly presentation of our online services.</p>
              <p>Further information: <a href="https://wiki.osmfoundation.org/wiki/Privacy_Policy" target="_blank" rel="noopener noreferrer" className="text-primary">OpenStreetMap Privacy Policy</a></p>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-4">7. Rights of data subjects</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>Under applicable data protection law, in particular the GDPR, you have the following rights:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong className="text-foreground">Right of access</strong> &ndash; Art. 15 GDPR</li>
                <li><strong className="text-foreground">Right to rectification</strong> &ndash; Art. 16 GDPR</li>
                <li><strong className="text-foreground">Right to erasure (&ldquo;right to be forgotten&rdquo;)</strong> &ndash; Art. 17 GDPR</li>
                <li><strong className="text-foreground">Right to restriction of processing</strong> &ndash; Art. 18 GDPR</li>
                <li><strong className="text-foreground">Right to notification</strong> &ndash; Art. 19 GDPR</li>
                <li><strong className="text-foreground">Right to data portability</strong> &ndash; Art. 20 GDPR</li>
                <li><strong className="text-foreground">Right to withdraw consent</strong> &ndash; Art. 7(3) GDPR</li>
                <li><strong className="text-foreground">Right to lodge a complaint</strong> &ndash; Art. 77 GDPR</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-4">8. Right to object &ndash; Art. 21 GDPR</h2>
            <div className="space-y-3 text-muted-foreground leading-relaxed">
              <p>Where we process your personal data on the basis of <strong className="text-foreground">legitimate interests</strong> (Art. 6(1)(f) GDPR), you have the right to object at any time, on grounds relating to your particular situation, to such processing with effect for the future.</p>
              <p>If you object, we will stop processing your personal data, unless we can demonstrate compelling legitimate grounds for the processing which override your interests, rights and freedoms, or unless the processing is required for the establishment, exercise or defence of legal claims.</p>
              <p>You can exercise your right to object at any time by contacting us using the contact details given in the Imprint / Legal Notice.</p>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-4">9. International users</h2>
            <p className="text-muted-foreground leading-relaxed">Our website is accessible worldwide. Regardless of where you access it from, we handle personal data in accordance with this Privacy Policy and the GDPR standards described above. If you are located outside the European Union / European Economic Area, local mandatory data protection laws in your country may grant you additional rights. Where applicable, we will honour these rights as required by law.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-4">10. Changes to this Privacy Policy</h2>
            <p className="text-muted-foreground leading-relaxed">We may update this Privacy Policy from time to time, for example if our website, our services or the legal framework change. The current version is always available on this website. If we make significant changes, we will take appropriate steps to inform you, for example by a notice on our website.</p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
