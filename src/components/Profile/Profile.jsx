export const Profile =({user}) =>{
const logout =() =>{
    setUser('');
    
}
    return (
        <div>
        <h1>Личный кабинет</h1>
        <p>Привет, {user}</p>
        <button onClick={logout}>LogOut</button>

        </div>
    )
}