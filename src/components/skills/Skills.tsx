import React from 'react';
import SectionHeader from '../SectionHeader';

interface Skill {
    type: string;
    items: string;
}

interface SkillsProps {
    skillsList: Skill[];
}

const Skills: React.FC<SkillsProps> = ({ skillsList }) => {
    return (
        <section>
            <SectionHeader name={'SKILLS'} />
            <div>
                {skillsList.length > 0 ? (
                    skillsList.map((skill, index) => (
                        <div key={index}>
                            <p>
                                <b>{skill.type}:</b> {skill.items}
                            </p>
                        </div>
                    ))) : (
                    <div>
                        <p>
                            <b>Type of skill:</b> List of skills...
                        </p>
                        <p>
                            <b>Other type of skill:</b> List of skills...
                        </p>
                    </div>
                )}
            </div>
        </section>
    );
};

export default Skills;