export default function Friend({friend}){
    console.log(friend)
    const {name,email,username,address,phone,website} = friend;
    
    return(
        <div className="box">
            <h4>Name:{name} </h4>
        <p>Email: {email} </p>
        <p>Usernsme:{username} </p>
        <p>Address
            <br /> Street:{address.street} suite: {address.suite} </p>
            <p>Phone:{phone}</p>
        <p>Website:{website} </p>
    
        </div>
    )
}