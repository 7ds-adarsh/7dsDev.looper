import { ImageWithFallback } from "../../public/Fallback.jsx";
import { Code, Coffee, Lightbulb } from "lucide-react";
import profile from './profile.jpg';

export default function About() {
    return (
        <section className="py-20 px-6 bg-card">
            <div className="max-w-6xl mx-auto">
                {/* Section Header */}
                <div className="mb-16">
                    <div className="flex items-center gap-2 text-purple-400 font-mono text-sm mb-4">
                        <span className="text-muted-foreground">//</span>
                        <span>about-me</span>
                    </div>
                    <h2 className="font-mono font-bold text-foreground">
                        Get to know me
                    </h2>
                </div>

                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Bio Content */}
                    <div className="space-y-6">
                        <div className="space-y-4 text-muted-foreground leading-relaxed">
                            <p>
                                I'm a passionate full-stack developer with 5+ years of experience crafting
                                digital solutions that make a difference. I love turning complex problems
                                into simple, beautiful designs.
                            </p>
                            <p>
                                When I'm not coding, you'll find me exploring new technologies, contributing
                                to open-source projects, or sharing my knowledge through technical writing
                                and mentoring.
                            </p>
                        </div>

                        {/* Highlights */}
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-8">
                            <div className="bg-background border border-border rounded-lg p-4 text-center">
                                <Code className="w-8 h-8 text-purple-400 mx-auto mb-2" />
                                <div className="font-mono text-2xl text-foreground">50+</div>
                                <div className="text-sm text-muted-foreground">Projects Built</div>
                            </div>
                            <div className="bg-background border border-border rounded-lg p-4 text-center">
                                <Lightbulb className="w-8 h-8 text-purple-400 mx-auto mb-2" />
                                <div className="font-mono text-2xl text-foreground">5+</div>
                                <div className="text-sm text-muted-foreground">Years Experience</div>
                            </div>
                            <div className="bg-background border border-border rounded-lg p-4 text-center">
                                <Coffee className="w-8 h-8 text-purple-400 mx-auto mb-2" />
                                <div className="font-mono text-2xl text-foreground">∞</div>
                                <div className="text-sm text-muted-foreground">Coffee Consumed</div>
                            </div>
                        </div>
                    </div>

                    {/* Profile Photo */}
                    <div className="relative">
                        <div className="relative w-full max-w-md mx-auto">
                            {/* Background Grid */}
                            <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-transparent rounded-2xl"></div>
                            <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_48%,rgba(168,85,247,0.1)_50%,transparent_52%)] bg-[length:20px_20px]"></div>

                            {/* Photo Container */}
                            <div className="relative bg-background border border-border rounded-2xl p-6 backdrop-blur-sm">
                                <div className="aspect-square rounded-xl overflow-hidden">
                                    <ImageWithFallback
                                        src={profile}
                                        alt="Adarsh Pawaiya - Developer"
                                        className="w-full h-full object-cover"
                                    />
                                </div>

                                {/* Terminal Bar */}
                                <div className="flex items-center gap-2 mt-4 font-mono text-xs text-muted-foreground">
                                    <div className="flex gap-1">
                                        <div className="w-3 h-3 rounded-full bg-red-500"></div>
                                        <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                                        <div className="w-3 h-3 rounded-full bg-green-500"></div>
                                    </div>
                                    <span>7ds@portfolio:~$</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
