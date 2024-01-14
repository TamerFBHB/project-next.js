
import Link from 'next/link';
import DarkModeToggle from '../darkMode/DarkModeToggle';
import './NavBar.scss';

export default function NavBar() {
    return (
        <nav>
            <ul className='logo'><li> 🅷🅴🆇🅰🆂🅷🅾🅿</li></ul>
            <ul className='links'>
                <li><Link href="/"> home</Link></li>
                <li><Link href="/about"> about</Link></li>
                <li><Link href="/products"> products</Link></li>
            </ul>
            <DarkModeToggle />
        </nav>
    )
};
