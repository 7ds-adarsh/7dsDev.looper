import { Card, CardContent } from "./ui/card.jsx";
import { Button } from "./ui/button.jsx";
import { ImageWithFallback } from "../../public/Fallback.jsx";
import { ExternalLink, Github, ArrowRight } from "lucide-react";

export default function Projects() {
    const projects = [
        {
            title: "landing-page",
            description: "A modern landing page built with pur Html, Javascript and Tailwind CSS, featuring responsive design, smooth animations, and a clean user interface.",
            image: "../assets/wave-project.png",
            tech: ["HTML", "Tailwind", "Javascript"],
            github: "https://github.com/7ds-adarsh/wave2.0",
            live: "https://7ds-adarsh.github.io/wave2.0/home.html"
        },
        {
            title: "Spotify Clone",
            description: "Full-featured Spotify clone with real-time music streaming, user authentication, and personalized playlists. Built with Pure HTML, CSS and Javascript.",
            image: "https://imgs.search.brave.com/W_sN9S3Ay4mlo07S0PdXi1ZpwikfxccV3wQWOjV3BVA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9idXlj/b3ZlcmFydHdvcmsu/Y29tL3dwLWNvbnRl/bnQvdXBsb2Fkcy8y/MDIyLzA5L1Nwb3Rp/ZnktQ292ZXItQXJ0/LVNpemUtVGVtcGxh/dGUtMTAwMHg1NjMu/cG5nLndlYnA",
            tech: ["CSS", "JavaScript", "Git", "HTML"],
            github: "https://github.com/7ds-adarsh/spotify-clone",
            live: "https://7ds-adarsh.github.io/spotify-clone/"
        },
    ];

    return (
        <section className="projects py-20 px-6 bg-card">
            <div className="max-w-6xl mx-auto">
                {/* Section Header */}
                <div className="mb-16">
                    <div className="flex items-center gap-2 text-purple-400 font-mono text-sm mb-4">
                        <span className="text-muted-foreground">//</span>
                        <span>projects</span>
                    </div>
                    <h2 className="font-mono font-bold text-foreground">
                        Featured Work
                    </h2>
                    <p className="text-muted-foreground mt-4 max-w-2xl">
                        Here are some of my recent projects that showcase my skills in full-stack development,
                        UI/UX design, and problem-solving.
                    </p>
                </div>

                {/* Projects Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {projects.map((project, index) => (
                        <Card
                            key={project.title}
                            className="bg-background border-border hover:border-purple-600/50 transition-all duration-300 group hover:shadow-xl hover:shadow-purple-600/10 hover:-translate-y-1"
                        >
                            <CardContent className="p-0">
                                {/* Project Image */}
                                <div className="relative overflow-hidden rounded-t-lg">
                                    <ImageWithFallback
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                                    {/* Overlay Links */}
                                    <div className="absolute bottom-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        <Button size="sm" variant="secondary" className="h-8 w-8 p-0">
                                            <a href={project.github}><Github className="w-4 h-4" /></a>
                                        </Button>
                                        <Button size="sm" variant="secondary" className="h-8 w-8 p-0">
                                            <a href={project.live}><ExternalLink className="w-4 h-4" /></a>
                                        </Button>
                                    </div>
                                </div>

                                {/* Project Content */}
                                <div className="p-6 space-y-4">
                                    <div>
                                        <h3 className="font-semibold text-foreground group-hover:text-purple-400 transition-colors">
                                            {project.title}
                                        </h3>
                                        <p className="text-muted-foreground text-sm mt-2 leading-relaxed">
                                            {project.description}
                                        </p>
                                    </div>

                                    {/* Tech Stack */}
                                    <div className="flex flex-wrap gap-2">
                                        {project.tech.map((tech) => (
                                            <span
                                                key={tech}
                                                className="px-2 py-1 bg-purple-600/10 text-purple-300 border border-purple-600/20 rounded text-xs font-mono"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>

                                    {/* Project Links */}
                                    <div className="flex gap-3 pt-2">
                                        <a href={project.github}><Button
                                            variant="outline"
                                            size="sm"
                                            className="flex-1 border-purple-600/50 text-purple-400 hover:bg-purple-600/10 group/btn"
                                        >
                                            <Github className="w-4 h-4 mr-2" />
                                            Code
                                        </Button></a>
                                        <a href={project.live}><Button
                                            size="sm"
                                            className="flex-1 bg-purple-600 hover:bg-purple-700 group/btn"
                                        >
                                            <ExternalLink className="w-4 h-4 mr-2" />
                                            Live
                                            <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                                        </Button></a>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>

                {/* View More */}
                <div className="text-center mt-12">
                    <Button
                        variant="outline"
                        size="lg"
                        className="border-purple-600 text-purple-400 hover:bg-purple-600/10 font-mono group"
                    >
                        View All Projects
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                </div>
            </div>
        </section>
    );
}