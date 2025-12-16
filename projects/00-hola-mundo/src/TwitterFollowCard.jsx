import { useState } from "react";

export function TwitterFollowCard ({userName, children, initialIsFollowing}) {
    const [isFollowing, setIsFollowing] = useState(initialIsFollowing);

    // console.log('[TwitterFollowCard] render with userName: ', userName);

    const imageSrc = `https://unavatar.io/x/${userName}`
    // console.log(isFollowing);

    const text = isFollowing ? 'Siguiendo' : 'Seguir'
    const buttonClassName = isFollowing ? 'tw-followCard-button is-following' : 'tw-followCard-button'

    const handleClick = () => {
        setIsFollowing(!isFollowing)
    }

    return (
          <article className='tw-followCard'>
            <header className='tw-followCard-header'>
                <img 
                    className='tw-followCard-avatar'
                    src={imageSrc}
                    alt="Imagen Avatar" 
                />
                <div className='tw-followCard-info'>
                    <strong>{children}</strong>
                    <span>@{userName}</span>
                </div>
            </header>

            <aside>
                <button className={buttonClassName} onClick={handleClick}>
                    <span className="tw-followCard-text">{text}</span>
                    <span className="tw-followCard-stopFollow">Dejar se Seguir</span>
                </button>
            </aside>
        </article>
    )
}