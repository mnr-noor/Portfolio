import {UnorderedList,ListItem} from '@chakra-ui/react';
import '../style/skills.css'

function TechStack(){
    return (
        
        <div className='skills'>
            <div className="section-header"> </div>
                <div className="section-title">/skills </div>
                
                <div className="skills-content">
                    <div className="skills-description">
                        <h1>Here are some technologies I have been working with:
                        </h1>
                    <UnorderedList >
                            <ListItem>• JavaScript</ListItem>
                            <ListItem>• React.js </ListItem>
                            <ListItem>• Html,CSS</ListItem>
                            
                    </UnorderedList>
                        
                    </div>
                </div>
        </div>        
        
    );
}

export default TechStack
