import {useLocation} from "react-router-dom";
import {useState} from "react";
import {useNavigate } from "react-router-dom";

export default function EditAccount () {
    const navigate = useNavigate();
    const location = useLocation();
    const [formData, setFormData] = useState(location.state);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState("");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        // TODO: Submit the form data to your backend API
        console.log(formData)
        try {
            setIsLoading(true);
            const response = await fetch("/api/accounts", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                console.log('Form submitted successfully!');
                setFormData({    "id": 0,
                    "name": "",
                    "tag": "",
                    "createdOn": "",
                    "status": "",
                    "totalValue": 0,
                    "currency": ""})
                navigate('/accounts');
            } else {
                console.error('Form submission failed!');
            }

        } catch (error: unknown) {
            if(error instanceof Error){setError(error.message);}

        } finally {
            setIsLoading(false);
        }
    };

    return (
        <>
        <div>
        {isLoading && "still loading ... "}
        {error && <p>Error: {error}</p>}
        </div>
            <form onSubmit={handleSubmit}>
                <h2>Edit Account #{formData.id}</h2>
                <table className="no-border">
                    <tr>
                        <td> Name</td>
                        <td><input
                            type="text"
                            name="name"
                            placeholder="Name"
                            value={formData.name}
                            onChange={handleChange}/></td>
                    </tr>
                    <tr>
                        <td> Tag</td>
                        <td><input
                            type="text"
                            name="tag"
                            placeholder="Tag"
                            value={formData.tag}
                            onChange={handleChange}/></td>
                    </tr>
                    <tr>
                        <td> Currency</td>
                        <td><input
                            type="text"
                            name="currency"
                            placeholder="Currency"
                            value={formData.currency}
                            onChange={handleChange}/></td>
                    </tr>
                </table>
                <button type="submit">Submit</button>
            </form>
        </>
    );
}
