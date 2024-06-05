import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import userimg from "../../assets/user.svg";
import PrevDescription from "./components/PrevDescription";
import CardInfo from "./components/CardInfo";
import NavigationBar from "../../shared/NavigationBar";

const Users = () => {
  const { id } = useParams();
  const [descrip, setDescrip] = useState([]);
  const [form, setForm] = useState({ descripcion: "", prescription: "" });

  const [user, setUser] = useState([]);

  const navigate = useNavigate();

  const handleValue = (e) => {
    const { name, value } = e.target;
    const newValues = { ...form, [name]: value };
    setForm(newValues);
  };

  const generateHelp = async () => {
    const prompt = {
      prompt: form.descripcion,
    };
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
      descripcion: form.descripcion,
      prescription: responseT,
    });
    return data;
  };

  const handleSaveForm = () => {
    console.log(form);
  };

  const fetchDescriptions = async () => {
    const response = await fetch("http://localhost:3000/descripcion/" + id);
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

  const handlePrescription = () => {
    // navigate("/description/" + id);
    console.log(form);
  };
  return (
    <>
      <NavigationBar>
        <div
          style={{
            width: "100%",
            height: "600px",
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
              justifyContent: "center",
              alignContent: "center",
              width: "50%",
              margin: "50px",
            }}
          >
            {/* <div
            style={{
              color: "white",
              fontSize: "50px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            Name: {descrip[0].name}
          </div> */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignContent: "center",
                width: "50%",
                height: "100%",
                marginRight: "20px",
              }}
            >
              <PrevDescription description={descrip} />
            </div>
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
              <p>Descripcion:</p>
              <textarea
                name="descripcion"
                id=""
                value={form.descripcion}
                onChange={handleValue}
              ></textarea>
              <p>Prescription:</p>
              <textarea
                name="prescription"
                id=""
                value={form.prescription}
                onChange={handleValue}
              ></textarea>
            </div>
            <button
              style={{
                height: "50px",
                width: "100px",
                backgroundColor: "#A4B6A3",
                border: "none",
                color: "white",
                alignSelf: "center",
                marginTop: "5px",
              }}
              type="submit"
              onClick={generateHelp}
            >
              Generar ejercicio
            </button>
            <button
              style={{
                height: "50px",
                width: "100px",
                backgroundColor: "#A4B6A3",
                border: "none",
                color: "white",
                alignSelf: "center",
                marginTop: "5px",
              }}
              type="submit"
              onClick={handlePrescription}
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
      </NavigationBar>
    </>
  );
};

export default Users;
