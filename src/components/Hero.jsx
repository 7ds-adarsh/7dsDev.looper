import { Button } from "./ui/button.jsx";
import { Terminal, ChevronRight } from "lucide-react";

export default function Hero() {
    const projectview = () => {
        const projectsSection = document.querySelector('.projects');
        if (projectsSection) {
            projectsSection.scrollIntoView({ behavior: 'instant' });
        }
    }

    const scrollToContact = () => {
        const contactSection = document.querySelector('.contact');
        if (contactSection) {
            contactSection.scrollIntoView({ behavior: 'smooth' });
        }
    }

    return (
        <section className="min-h-screen flex items-center justify-center bg-background text-foreground px-6">
            <div className="max-w-4xl mx-auto text-center space-y-8">
                {/* Terminal Header */}
                <div className="inline-flex items-center gap-2 text-muted-foreground mb-6">
                    <Terminal className="w-4 h-4" />
                    <span className="font-mono text-sm">~/portfolio</span>
                </div>

                {/* Main Content */}
                <div className="space-y-6">
                    <div className="font-mono text-purple-400 text-lg">
                        {'> const developer = {'}
                    </div>

                    <div className="space-y-2">
                        <h1 className="text-5xl md:text-7xl font-mono font-bold text-foreground">
                            {"</7dsAdarsh>"}
                        </h1>
                        <div className="font-mono text-xl md:text-2xl text-muted-foreground">
                            <span className="text-purple-400">type:</span> "Full Stack Next.JS Developer",
                        </div>
                        <div className="font-mono text-xl md:text-2xl text-muted-foreground">
                            <span className="text-purple-400">skills:</span> ["React", "Node.js", "JavaScript", Python],
                        </div>
                        <div className="font-mono text-xl md:text-2xl text-muted-foreground">
                            <span className="text-purple-400">passion:</span> "Building digital experiences"
                        </div>
                    </div>

                    <div className="font-mono text-purple-400 text-lg">
                        {'};'}
                    </div>
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center mt-12">
                    <Button
                        onClick={projectview}
                        size="lg"
                        className="bg-purple-600 hover:bg-purple-700 text-white border-purple-600 font-mono group"
                    >
                        View My Work
                        <ChevronRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                    <Button
                        onClick={scrollToContact}
                        variant="outline"
                        size="lg"
                        className="border-purple-600 text-purple-400 hover:bg-purple-600/10 font-mono"
                    >
                        Hire Me
                    </Button>
                </div>

                {/* Scroll Indicator */}
                <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
                    <div className="w-6 h-10 border-2 border-purple-400 rounded-full flex justify-center">
                        <div className="w-1 h-3 bg-purple-400 rounded-full mt-2"></div>
                    </div>
                </div>
            </div>
        </section>
    );
}