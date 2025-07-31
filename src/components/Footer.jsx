import { Github, Linkedin, Twitter, Mail, Heart } from "lucide-react";
import { Button } from "./ui/button.jsx";

export default function Footer() {
    const socialLinks = [
        { name: "GitHub", icon: Github, href: "#" },
        { name: "LinkedIn", icon: Linkedin, href: "#" },
        { name: "Twitter", icon: Twitter, href: "#" },
        { name: "Email", icon: Mail, href: "mailto:adarshpawaiya345@gnail.com" }
    ];

    return (
        <footer className="bg-card border-t border-border py-12 px-6">
            <div className="max-w-6xl mx-auto">
                <div className="grid md:grid-cols-3 gap-8 items-center">
                    {/* Logo/Name */}
                    <div>
                        <div className="font-mono font-bold text-foreground">
                            {"</7dsAdarsh>"}
                        </div>
                        <div className="text-sm text-muted-foreground mt-1">
                            Full Stack Developer
                        </div>
                    </div>

                    {/* Social Links */}
                    <div className="flex justify-center gap-4">
                        {socialLinks.map((social) => {
                            const Icon = social.icon;
                            return (
                                <Button
                                    key={social.name}
                                    variant="ghost"
                                    size="sm"
                                    className="w-10 h-10 p-0 hover:bg-purple-600/10 hover:text-purple-400 transition-colors"
                                    asChild
                                >
                                    <a href={social.href} target="_blank" rel="noopener noreferrer">
                                        <Icon className="w-5 h-5" />
                                        <span className="sr-only">{social.name}</span>
                                    </a>
                                </Button>
                            );
                        })}
                    </div>

                    {/* Code snippet */}
                    <div className="text-right">
                        <div className="font-mono text-sm text-muted-foreground">
                            <div className="text-purple-400">{'// Thanks for visiting!'}</div>
                            <div>console.log("Let's build something amazing");</div>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="mt-8 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
                    <div className="text-sm text-muted-foreground">
                        © 2025 Adarsh Pawaiya. All rights reserved.
                    </div>

                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <span>Built with</span>
                        <Heart className="w-4 h-4 text-red-500 fill-current" />
                        <span>using React & TailwindCSS</span>
                    </div>
                </div>

                {/* Easter Egg */}
                <div className="mt-4 text-center">
                    <div className="font-mono text-xs text-muted-foreground/50">
                        {'{/* This portfolio was coded pixel by pixel with attention to detail */}'}
                    </div>
                </div>
            </div>
        </footer>
    );
}