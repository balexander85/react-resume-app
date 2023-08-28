import React from 'react';

interface Skill {
    type: string;
    items: string;
}

interface SkillsProps {
    skillsList: Skill[];
}

const Skills: React.FC<SkillsProps> = ({ skillsList }) => {
    return (
        <section className="skills">
            <h3 className="section-header">SKILLS</h3>
            <hr />
            <div>
                {skillsList.map((skill, index) => (
                    <div key={index}>
                        <p className="proficiency">
                            <strong>{skill.type}:</strong> {skill.items}
                        </p>
                    </div>
                ))}
            </div>
            <br />
        </section>
    );
};

export default Skills;