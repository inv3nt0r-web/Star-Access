import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Card } from "@/components/ui/card";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Contact() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="max-w-4xl mx-auto px-6 lg:px-8 pt-28 pb-20" data-testid="page-contact">
        <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Contact</h1>
        <p className="text-lg text-muted-foreground mb-10 leading-relaxed">
          Be the first to know when JB5 goes live. Join the early access list to get behind-the-scenes updates and limited early bird spots.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          <Card className="p-6 lg:p-8" data-testid="card-contact-info">
            <h2 className="text-xl font-semibold text-foreground mb-6">Get in Touch</h2>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-md bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Mail className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium text-foreground mb-1">Email</p>
                  <a href="mailto:info@staracces.com" className="text-primary" data-testid="link-contact-email">
                    info@staracces.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-md bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Phone className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium text-foreground mb-1">Phone</p>
                  <a href="tel:+493034761984" className="text-muted-foreground" data-testid="link-contact-phone">
                    +49 (0)30 3476 1984
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-md bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium text-foreground mb-1">Address</p>
                  <div className="text-muted-foreground">
                    <p>Staracces UG (haftungsbeschr&auml;nkt)</p>
                    <p>Kochhannstra&szlig;e 6</p>
                    <p>10249 Berlin, Germany</p>
                  </div>
                </div>
              </div>
            </div>
          </Card>

          <Card className="p-6 lg:p-8" data-testid="card-contact-hours">
            <h2 className="text-xl font-semibold text-foreground mb-6">About STARACCES</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>STARACCES UG is a Berlin-based innovation company focused on developing the JB5 automatic rolling device.</p>
              <p>Driven by German precision engineering and supported by German government funding programs, we are building the next generation of automated consumer technology.</p>
              <p>For inquiries about partnerships, press, or the JB5 product, please reach out via email.</p>
            </div>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
