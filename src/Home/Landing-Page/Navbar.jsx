import './Navbar.css'

export default function Navbar(){
    return (
        <div>
            <ul className='Nav'>
                <li className="logo">Logo</li>
                <li>Services</li>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
                <button className='Nav-btn'>Get In Touch</button>
            </ul>
        </div>
    )
}