import { useState } from "react"
import { useForm } from "react-hook-form"
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

export default function Auth(){
    const [mode, setMode] = useState("signup")
    const [error, setError] = useState(null)
    const { signUp, login } = useAuth();
    const {register, handleSubmit, formState: { errors },}=useForm();
    const navigate = useNavigate() 

    function onSubmit(data) {
        setError(null)
        let result;
        if(mode === "signup") {
            result = signUp(data.email, data.password);
        } else {
            result = login(data.email, data.password)
        }
        console.log(result);
        
        if(result.success) {
            navigate("/");
        }else{
            setError(result.error)
        }
    }
    return(
        <div className="page">
            <div className="container">
                <div className="auth-container">
                    <h1 className="page-title">{mode === "signup" ? "Sign Up" : "Login"}</h1>
                    <form className="auth-form" onSubmit={handleSubmit(onSubmit)}>
                        { error && <div className="error-message">{ error }</div>}
                        <div className="form-group">
                            <label className="form-label" htmlFor="email">Email</label>
                            <input className="form-input" type="email" id="email" {...register('email',{required:"Correo obligatorio"})}/>
                            {errors.email && <span className="form-error">{errors.email.message}</span>}
                        </div>
                        <div className="form-group">
                            <label className="form-label" htmlFor="password">Password</label>
                            <input className="form-input" type="password" id="password" 
                            {...register('password',{required:"clave obligatorio", 
                                minLength: {
                                    value: 6,
                                    message: "La clave de tener minimo 6 caracteres",
                                },
                                maxLength: {
                                    value: 12,
                                    message: "La clave de tener maximo 12 caracteres",
                                },
                            })}/>
                            {errors.email && <span className="form-error">{errors.email.message}</span>}
                        </div>
                        <button type="submit" className="btn btn-primary btn-large">{mode === "login" ? "Login" : "Sign Up"}</button>
                    </form>
                    <div className="auth-switch">
                        {mode === "signup" ? (<p>
                            Ya tengo una cuenta{" "}<span className="auth-link" onClick={()=> setMode("login")}>Login</span>
                         </p>) : (<p>No tengo una cuenta{" "}<span className="auth-link"onClick={()=> setMode("signup")}>Sign Up</span></p>)
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}