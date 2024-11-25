import React, { useEffect, useState, useRef } from "react";

const Skills = () => {
    const [visible, setVisible] = useState(false);
    const containerRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setVisible(true);
                }
            },
            { threshold: 0.1 }
        );

        if (containerRef.current) {
            observer.observe(containerRef.current);
        }

        return () => {
            if (containerRef.current) {
                observer.unobserve(containerRef.current);
            }
        };
    }, []);

    const skills = [
        { name: "HTML", progress: 90 },
        { name: "CSS", progress: 80 },
        { name: "JavaScript", progress: 70 },
    ];

    return (
        <div className="space-y-6" ref={containerRef}>
            {skills.map((skill) => (
                <div key={skill.name} className="space-y-2">
                    <div className="flex justify-between">
                        <span className="font-medium">{skill.name}</span>
                        <span className="text-primary">{skill.progress}%</span>
                    </div>
                    <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                        <div
                            className={`h-full bg-primary rounded-full transition-all duration-500`}
                            style={{
                                width: visible ? `${skill.progress}%` : "0%",
                            }}
                        />
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Skills;
