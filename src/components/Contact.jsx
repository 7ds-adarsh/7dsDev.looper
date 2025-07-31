import { Button } from "./ui/button.jsx";
import { Input } from "./ui/input.jsx";
import { Textarea } from "./ui/textarea.jsx";
import { Label } from "./ui/label.jsx";
import { Card, CardContent } from "./ui/card.jsx";
import { Mail, MessageCircle, Send } from "lucide-react";

export default function Contact() {
  return (
    <section className="contact py-20 px-6 bg-background">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <div className="flex items-center justify-center gap-2 text-purple-400 font-mono text-sm mb-4">
            <span className="text-muted-foreground">//</span>
            <span>contact</span>
          </div>
          <h2 className="font-mono font-bold text-foreground">
            Let's Work Together
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Have a project in mind? I'd love to hear about it. Send me a message and
            let's discuss how we can bring your ideas to life.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="font-semibold text-foreground mb-6">Get in Touch</h3>

              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-purple-600/10 border border-purple-600/20 rounded-lg flex items-center justify-center">
                    <Mail className="w-5 h-5 text-purple-400" />
                  </div>
                  <div>
                    <div className="font-medium text-foreground">Email</div>
                    <div className="text-muted-foreground"><a href="mailto:adarshpawaiya345@gmail.com">adarshpawaiya345@gmail.com</a></div>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-purple-600/10 border border-purple-600/20 rounded-lg flex items-center justify-center">
                    <MessageCircle className="w-5 h-5 text-purple-400" />
                  </div>
                  <div>
                    <div className="font-medium text-foreground">Response Time</div>
                    <div className="text-muted-foreground">Usually within 24 hours</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Code Block */}
            <Card className="bg-card border-border">
              <CardContent className="p-6">
                <div className="font-mono text-sm space-y-2">
                  <div className="text-purple-400">{'const contact = {'}</div>
                  <div className="ml-4 text-muted-foreground">
                    <div><span className="text-green-400">email:</span> "adarshpawaiya345@gmail.com",</div>
                    <div><span className="text-green-400">availability:</span> "Open to opportunities",</div>
                    <div><span className="text-green-400">timezone:</span> "UTC+5:30 (IST)",</div>
                    <div><span className="text-green-400">preferred:</span> ["email", "discord"]</div>
                  </div>
                  <div className="text-purple-400">{'};'}</div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <Card className="bg-card border-border">
            <CardContent className="p-6">
              <form className="space-y-6" action={"https://formspree.io/f/xgvzzadv"} method="POST">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input
                      id="name"
                      placeholder="Your name"
                      namw="name"
                      className="bg-background border-border focus:border-purple-600"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      name="email"
                      placeholder="your@email.com"
                      className="bg-background border-border focus:border-purple-600"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject">Subject</Label>
                  <Input
                    id="subject"
                    placeholder="Project inquiry"
                    name="subject"
                    className="bg-background border-border focus:border-purple-600"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    placeholder="Tell me about your project..."
                    name="message"
                    rows={5}
                    className="bg-background border-border focus:border-purple-600 resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-purple-600 hover:bg-purple-700 group"
                >
                  <Send className="w-4 h-4 mr-2 group-hover:translate-x-1 transition-transform" />
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}