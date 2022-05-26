import { useState } from "react";
import { PatientForm } from "../Patient/PatientForm";
import PatientList from "../PatientList/PatientList";
import "./TabButton.css";

export const TabButton = () => {
    const [activeTab, setActiveTab] = useState(0);
    const handleClickWelcome = () => {
        setActiveTab(0);
    }
    const handleClickList = () => {
        setActiveTab(1);
    }
    return (
        <div>
            <div class="container-tab">
                <button type="button" className={(activeTab === 0 ? "active " : "") + "btn-tab"} onClick={() => {handleClickWelcome();}}>Tiếp nhận bệnh nhân</button>
                <button type="button" className={(activeTab === 1 ? "active " : "") + "btn-tab"} onClick={() => {handleClickList();}}>Danh sách bệnh nhân</button>
            </div>
            {activeTab === 0 ? 
            <PatientForm/> : <PatientList/>
        }
            
        </div>
       
    )
}