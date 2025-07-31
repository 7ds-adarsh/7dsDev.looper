import { Badge } from "./ui/badge.jsx";

export default function Skills() {
    const skillCategories = [
        {
            title: "Frontend",
            skills: ["React", "JavaScript", "Next.js", "TailwindCSS", "typescript", "HTML", "CSS", "Redux", "Sass"]
        },
        {
            title: "Backend",
            skills: ["Node.js", "Express", "Python", "Django", "PostgreSQL", "MongoDB"]
        },
        {
            title: "Tools & DevOps",
            skills: ["Git", "Docker", "AWS", "Vercel", "Jest", "Webpack"]
        },
        {
            title: "Design",
            skills: ["Figma", "Adobe XD", "Photoshop", "UI/UX", "Prototyping", "Design Systems"]
        }
    ];

    return (
        <section className="py-20 px-6 bg-background">
            <div className="max-w-6xl mx-auto">
                {/* Section Header */}
                <div className="mb-16">
                    <div className="flex items-center gap-2 text-purple-400 font-mono text-sm mb-4">
                        <span className="text-muted-foreground">//</span>
                        <span>skills</span>
                    </div>
                    <h2 className="font-mono font-bold text-foreground">
                        Technologies & Tools
                    </h2>
                </div>

                {/* Code Block Style */}
                <div className="bg-card border border-border rounded-lg p-6 font-mono">
                    {/* Terminal Header */}
                    <div className="flex items-center gap-2 mb-6 pb-4 border-b border-border">
                        <div className="flex gap-1">
                            <div className="w-3 h-3 rounded-full bg-red-500"></div>
                            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                            <div className="w-3 h-3 rounded-full bg-green-500"></div>
                        </div>
                        <span className="text-muted-foreground text-sm">skills.json</span>
                    </div>

                    {/* Skills Object */}
                    <div className="space-y-6">
                        <div className="text-purple-400">{'const skills = {'}</div>

                        {skillCategories.map((category, index) => (
                            <div key={category.title} className="ml-4 space-y-3">
                                <div className="text-green-400">
                                    {category.title.toLowerCase()}: [
                                </div>

                                <div className="ml-4 flex flex-wrap gap-2">
                                    {category.skills.map((skill) => (
                                        <Badge
                                            key={skill}
                                            variant="secondary"
                                            className="bg-purple-600/10 text-purple-300 border-purple-600/20 hover:bg-purple-600/20 transition-colors font-mono text-xs"
                                        >
                                            "{skill}"
                                        </Badge>
                                    ))}
                                </div>

                                <div className="text-green-400 ml-4">
                                    {index === skillCategories.length - 1 ? ']' : '],'}
                                </div>
                            </div>
                        ))}

                        <div className="text-purple-400">{'};'}</div>

                        {/* Export Statement */}
                        <div className="mt-6 pt-4 border-t border-border">
                            <span className="text-blue-400">export default</span>
                            <span className="text-foreground"> skills;</span>
                        </div>
                    </div>
                </div>

                {/* Additional Stats */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
                    <div className="bg-card border border-border rounded-lg p-4 text-center">
                        <div className="font-mono text-2xl text-purple-400">24</div>
                        <div className="text-sm text-muted-foreground">Technologies</div>
                    </div>
                    <div className="bg-card border border-border rounded-lg p-4 text-center">
                        <div className="font-mono text-2xl text-purple-400">100%</div>
                        <div className="text-sm text-muted-foreground">Learning</div>
                    </div>
                    <div className="bg-card border border-border rounded-lg p-4 text-center">
                        <div className="font-mono text-2xl text-purple-400">365</div>
                        <div className="text-sm text-muted-foreground">Days/Year</div>
                    </div>
                    <div className="bg-card border border-border rounded-lg p-4 text-center">
                        <div className="font-mono text-2xl text-purple-400">∞</div>
                        <div className="text-sm text-muted-foreground">Curiosity</div>
                    </div>
                </div>
            </div>
        </section>
    );
}