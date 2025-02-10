import { useNavigate } from "react-router-dom";
import Button from "./Button";


const PersonalizedSettings: React.FC = () =>{
    const navigate = useNavigate();
    const handleRouting = (route: string) =>{
        navigate(route)
    }

    return (
    <div>
        <section className="custom-input !flex !flex-row !items-center !w-full !h-auto !justify-between  !border-x-0 !border-t-0 !px-0 !py-0 !pb-6 !my-0 !rounded-[0px] !border-opacity-10">
            <Button type="button" text="Update Password" onClick={() => handleRouting("/auth/forgot-password")} />
            <h2 className="text-2xl font-semibold mb-4">Profile Settings</h2>
            profile photo
            
        </section>
         Delete account
    </div>
    )
}

export default PersonalizedSettings;