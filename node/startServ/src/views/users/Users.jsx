import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import userimg from "../../assets/user.svg";
import PrevDescription from "./components/PrevDescription";
import CardInfo from "./components/CardInfo";
import NavigationBar from "../../shared/NavigationBar";
import "./Users.css";

const Users = () => {
  const { id } = useParams();
  const [descrip, setDescrip] = useState([]);
  const [form, setForm] = useState({ description: "", prescription: "" });
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState([]);

  const navigate = useNavigate();

  const handleValue = (e) => {
    const { name, value } = e.target;
    const newValues = { ...form, [name]: value };
    setForm(newValues);
  };

  const generateHelp = async () => {
    const prompt = {
      prompt: form.description,
    };
    setIsLoading(true);
    try {
      const response = await fetch(`http://localhost:3000/chat/gemini`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(prompt),
      });
      const data = await response.json();
      console.log(data);

      const responseT = data.response;
      console.log(responseT);
      setForm({
        description: form.description,
        prescription: responseT,
      });
      setIsLoading(false);

      return data;
    } catch (error) {
      console.log(error);
    }
  };

  const handleSaveForm = () => {
    console.log(form);
  };

  const fetchDescriptions = async () => {
    const response = await fetch("http://localhost:3000/description/" + id);
    const data = await response.json();
    setDescrip(data);
  };

  const fetchUserById = async () => {
    const response = await fetch("http://localhost:3000/users/" + id);
    const data = await response.json();
    setUser(data);
    console.log(data);

    return data;
  };

  useEffect(() => {
    fetchDescriptions();
    fetchUserById();
  }, []);

  const handleBack = () => {
    navigate("/");
  };

  const handlePrescription = async () => {
    try {
      const res = await fetch(`http://localhost:3000/description/${id}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      if (res.status === 201) {
        alert("Guardado Exitosamente!");
        window.location.reload(); // Reload the page
      } else {
        alert("ERROR al guardar");
      }
    } catch (error) {
      alert("Error al registrar");
    }
  };
  return (
    <>
      <NavigationBar>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              display: "flex",
              width: "100%",
              height: "200px",
              margin: "20px",
            }}
          >
            <PrevDescription descriptions={descrip} />
          </div>
          <div
            style={{
              width: "100%",
              height: "400px",
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              justifySelf: "center",
              alignSelf: "center",
            }}
          >
            <div>
              <CardInfo user={user} />
            </div>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-around",
                alignContent: "center",
                width: "50%",
                height: "100%",
                margin: "50px",
              }}
            >
              <div
                style={{
                  color: "white",
                  fontSize: "20px",
                  display: "flex",

                  alignContent: "center",
                  justifyContent: "left",
                  flexDirection: "column",
                }}
              >
                <p>Description:</p>
                <textarea
                  name="description"
                  id="des"
                  value={form.description}
                  onChange={handleValue}
                  style={{ height: "60px" }}
                ></textarea>
                <p>Prescription:</p>
                <textarea
                  name="prescription"
                  id="pres"
                  value={form.prescription}
                  onChange={handleValue}
                  style={{ height: "100px" }}
                ></textarea>
              </div>
              <button
                style={{
                  height: "30px",
                  width: "100px",

                  alignSelf: "center",
                  marginTop: "5px",
                }}
                type="submit"
                onClick={generateHelp}
                className="button-menu"
              >
                {isLoading ? "Cargando" : "Generar Ejercicio"}
              </button>
              <button
                style={{
                  height: "30px",
                  width: "100px",
                  alignSelf: "center",
                  marginTop: "5px",
                }}
                type="submit"
                onClick={handlePrescription}
                className="button-menu"
              >
                Guardar
              </button>
            </div>

            <button
              style={{
                position: "fixed",
                bottom: 0,
                left: 0,
                width: "100%",
                textAlign: "center",
                padding: "10px",
                backgroundColor: "black",
                color: "white",
                border: "none",
                cursor: "pointer",
              }}
              onClick={handleBack}
            >
              Back
            </button>
          </div>
        </div>
      </NavigationBar>
    </>
  );
};

export default Users;
