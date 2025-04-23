import { useState} from 'react';
import Plantilla from '../plantilla';
import {loginApi} from '../functions/apiLogin';
// import {cargarUsuarios} from '../../features/user/userSlice';
// import { useDispatch } from 'react-redux';
// import { AppDispatch } from '../store';
// import Cookies from 'js-cookie';

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [mensaje, setMensaje] = useState('');
    const [acceso, setAcceso] = useState(false);
    // const dispatch = useDispatch<AppDispatch>();

    const handleLogin = async (event: React.FormEvent) => {
        event.preventDefault(); 
        try {
            const data = await loginApi(email, password);
            
            if (data != null) {
                setAcceso(true)
            } else {
                console.log("Error en la autenticacion");
            }
            
            setAcceso(true);
        } catch (error) {
            setMensaje('Error en la autenticación');
        }
    };

    return (
        <>
        <>
        <Plantilla isOpen={acceso} email={email} password={password}/>
        </>

        <div className={acceso ? 'login-container hidden' : 'login-container'}>
            <form onSubmit={handleLogin}>
                <input
                    type="text"
                    className="user"
                    placeholder='Usuario'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <input
                    type="password"
                    className="passw"
                    placeholder='Contraseña'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <button type="submit">Iniciar Sesión</button>
            </form>
            {mensaje && <p>{mensaje}</p>}
        </div>
        </>
    );
}