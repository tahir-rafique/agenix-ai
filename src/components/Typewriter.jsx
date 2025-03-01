import { TypeAnimation } from 'react-type-animation';

const Typewriter = () => {
    return (
        <div>

            <TypeAnimation
                sequence={[
                    'Crypto', // Types 'Crypto'
                    1000, // Waits 1s
                    'Relationship', // Deletes 'Crypto' and types 'Relationship'
                    2000, // Waits 2s
                    'Manager', //  Deletes 'Relationship' and types 'Manager'
                    1000, // Waits 1s
                    'AI Agent', // Deletes 'Manager' and types 'AI Agent'
                    1000,
                ]}
                wrapper="span"
                cursor={true}
                repeat={Infinity}
                style={{ fontSize: '2em', display: 'inline-block' }}
            />

        </div>
    )
}

export default Typewriter;




