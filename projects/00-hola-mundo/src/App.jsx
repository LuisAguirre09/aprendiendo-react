import { useState } from 'react';
import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

const users = [
    {
        userName: 'LuisAlfredo279',
        name: 'Luis Alfredo Aguirre',
        isFollowing: true
    },
    {
        userName: 'AngelRosita98',
        name: 'Angela Rosita',
        isFollowing: false
    },
    {
        userName: 'jezCorden',
        name: 'Jez',
        isFollowing: true
    }
]

export function App () {
    const formatUserName = (userName) => `@${userName}`;
    const [name, setName] = useState('LuisAlfredo279');
    const [state, setState] = useState(0);

    console.log('render witch name', name);
    return (
        <section className='App'>
          {
            users.map(user => {
                const {userName, name, isFollowing} = user
                return (
                    <TwitterFollowCard 
                        key={userName}
                        userName={userName}
                        initialIsFollowing={isFollowing}
                    >
                        {name}
                    </TwitterFollowCard>
                )
            })
          }
          <button onClick={() => setState(state + 1)}>count</button>
        </section>   
    )
}