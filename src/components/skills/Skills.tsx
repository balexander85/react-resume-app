import React from 'react';
import SectionHeader from '../SectionHeader';

import { Skill } from '../../types/types';

interface SkillsProps {
    skillsList: Skill[];
}

const Skills = ({ skillsList }: SkillsProps) => {
    return skillsList.length > 0 ? (
        <section data-testid="skills">
            <SectionHeader name={'SKILLS'} />
            <div>
                {skillsList.map((skill, index) => (
                    <div key={index}>
                        <p>
                            <b>{skill.type}:</b> {skill.items}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    ) : null;
};

export default Skills;