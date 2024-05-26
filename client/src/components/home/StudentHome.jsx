import { useNavigate } from "react-router-dom"

export const StudentHome = () => {

    const navigate =useNavigate();
    return <div>

        <div>
            <h1>student</h1>
        </div>
        <div className="flex justify-between p-4">
            <button onClick={() => navigate('/studentsignup')}>signup</button>
            <button onClick={() => navigate('/studentlogin')}>login</button>
            <button onClick={() => navigate('/studentforget')}>reset</button>
        </div>
    </div>
}