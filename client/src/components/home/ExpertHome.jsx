import { useNavigate } from "react-router-dom"


export const ExpertHome = () => {
  const navigate = useNavigate();
    return <div>

        <div>
            <h1>Expert</h1>
        </div>
        <div className="flex justify-between">
            <button onClick={() => navigate('/expertsignup') }>E-signup</button>
            <button onClick={() => navigate('/expertlogin')}>E-login</button>
            <button onClick={() => navigate('/expertforget')}>E-reset</button>
        </div>
    </div>
}