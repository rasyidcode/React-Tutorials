/**
 * TOPIC:
 *  - Creating and nesting components   (done)
 *  - Writing markup with JSX           (done)
 *  - Adding styles                     (done)
 *  - Displaying data                   (done)
 *  - Conditional rendering             (----)
 *  - Rendering lists                   (----)
 *  - Responding to events              (----)
 *  - Updating the screens              (----)
 *  - Using Hooks                       (----)
 *  - Sharing data between components   (----)
 */

function MyButton() {
    return (
        <button>I'm a button</button>
    )
}

function AnotherMyButton() {
    return (
        <>
            <button>Another button</button>
        </>
    )
}

function MyAvatar() {
    return (
        <div className="avatar">
            <span className="avatar-text">J</span>
        </div>
    )
}

export default function MyApp() {
    const users = [
        {
            name: 'Ahmad Jamil Al Rasyid',
            role: 'Frontend Developer'
        },
        {
            name: 'Hedy Lamarr',
            imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
            imageSize: 90
        }
    ]
    return (
        <div>
            <h1>Welcome to my app</h1>
            <MyButton />
            <AnotherMyButton />
            <div style={{padding: '1rem'}}>
                <MyAvatar />
            </div>
            <div style={{padding: '1rem'}}>
                <h4 style={{
                    fontWeight: 'bolder',
                    fontSize: '1rem'
                }}>{users[0].name}</h4>
                <p style={{
                    color: '#777'
                }}>{users[0].role}</p>
            </div>
            <div style={{padding: '1rem'}}>
                <h1 style={{
                    fontWeight: 'bolder',
                    fontSize: '2rem'
                }}>{users[1].name}</h1>
                <img 
                    className="avatar"
                    src={users[1].imageUrl}
                    alt={'Photo of ' + users[1].name}
                    style={{
                        width: users[1].imageSize,
                        height: users[1].imageSize,
                        marginTop: '1rem'
                    }}/>
            </div>
        </div>
    )
}
