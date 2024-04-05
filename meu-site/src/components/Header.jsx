import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl'; 
import { FaSearch } from "react-icons/fa";
import { RiAccountCircleFill } from "react-icons/ri";
import "../styles/header.css"; 

export const Header = () => {
    return (
        <header className='header'>
            <Navbar>
                <h1>SmartGames</h1>
                <Form>
                        <FormControl 
                            placeholder="Search games..."
                            aria-label="Search games..."
                            aria-describedby="basic-addon1"
                            className='inputControl'
                        />
                    <FaSearch className='icons'/>
                </Form>
                <RiAccountCircleFill className='icon-account'/>
                <a href="" className='account'>
                    Account
                </a>
                <button className='button-log-out'>
                    Log out
                </button>
            </Navbar>
        </header>
    )
}
