import styles from "./NewDog.module.css";
import { useState } from "react";
import Nav from '../Nav/Nav';
import validate from "./validation";
import { FaPaw } from "react-icons/fa";
import { MdAddCircle } from "react-icons/md";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { postDog } from "../../utils/postDog";
import { FaRegSave } from 'react-icons/fa';

export default function NewDog() {
  const temperaments = useSelector((state) => state.temperaments)
  const [selectedTemp, setSelectedTemp] = useState("")
  const [listTemperaments, setListTemperaments] = useState("")

  const [newDog, setNewDog] = useState({
    name: "",
    image: "",
    minHeight: 0,
    maxHeight: 0,
    height: {
      imperial: "",
      metric: ""
    },
    minWeigth: 0,
    maxWeigth: 0,
    weigth:  {
      imperial: "",
      metric: ""
    },
    lifeSpan: "",
    temperaments: "",
  });

  const [errors, setErrors] = useState({
    name: [],
    image: [],
    height:[],
    weight: [],
    lifeSpan: [],
    temperaments: [],
  });

  const handleChange = (event) => {
    const property = event.target.name;
    const value = event.target.value;

    switch (property) {
      case "selectedTemp":
        setSelectedTemp(value)
        break;
      case "minHeight":
        setNewDog({ ...newDog,
          [property]: value,
          height: {imperial:`${Math.round(value/2.54*10)/10} - ${Math.round(newDog.maxHeight/2.54*10)/10}`,
            metric:`${value} - ${newDog.maxHeight}`
          }
        });
        break;
      case "maxHeight":
        setNewDog({ ...newDog,
          [property]: value,
          height: {imperial:`${Math.round(newDog.minHeight/2.54*10)/10} - ${Math.round(value/2.54*10)/10}`,
            metric:`${newDog.minHeight} - ${value}`
          }
        });
        break;
      case "minWeigth":
        setNewDog({ ...newDog,
          [property]: value,
          weigth: {imperial:`${Math.round(value/2.54*10)/10} - ${Math.round(newDog.maxWeigth/2.54*10)/10}`,
            metric:`${value} - ${newDog.maxWeigth}`
          }
        });
        break;
      case "maxWeigth":
        setNewDog({ ...newDog,
          [property]: value,
          weigth: {imperial:`${Math.round(newDog.minWeigth/2.54*10)/10} - ${Math.round(value/2.54*10)/10}`,
            metric:`${newDog.minWeigth} - ${value}`
          }
        });
        break;
      default:
          setNewDog({ ...newDog, [property]: value });
      //setErrors({ email: [], password: [] });
    }

    validate({ ...newDog, [property]: value }, errors, setErrors);


  };

  const addTemperament = (event) => {
    if(listTemperaments.length === 0){
      setListTemperaments(selectedTemp);
    } else {
      setListTemperaments(listTemperaments + ", "+ selectedTemp);
    }
    setSelectedTemp("");
    setNewDog({ ...newDog,
      temperaments: listTemperaments,
    })
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    postDog(newDog);
  };

  return (
    <div className={styles.newDogContainer}>
      <Nav searchBarNavHidden='yes'/>
      <div className={styles.leftContainer}>
        <h2 className={styles.titleForm}>CREA TU PROPIA RAZA</h2>
        <FaPaw className={styles.pawForm} />
        <div className={styles.leftContainerImg}>
          <img
            src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/38816/image-from-rawpixel-id-542207-jpeg.png"
            alt="Paw"
          />
        </div>
      </div>
      <div className={styles.rightContainer}>
        <form className={styles.form}>
          <div className={styles.inputLabel}>
              <label className={styles.label} htmlFor="name">
                  Nombre:
              </label>
              <input
                  type="text"
                  className={`${styles.input} ${errors.name.length !== 0
                                    ?styles.inputIncorrect
                                    :styles.inputCorrect}`}
                  name="name"
                  value={newDog.name}
                  onChange={handleChange}
              ></input>
                {errors.name
                ?errors.name.map((error) => {return <p className={styles.error}>{error}</p>})
                :<></>}
              <label className={styles.label} htmlFor="image">
                  URL Imagen:
              </label>
              <input
                  type="text"
                  className={`${styles.input} ${errors.image.length !== 0
                                    ?styles.inputIncorrect
                                    :styles.inputCorrect}`}
                  name="image"
                  value={newDog.image}
                  onChange={handleChange}
              ></input>
                {errors.image
                ?errors.image.map((error) => {return <p className={styles.error}>{error}</p>})
                :<></>}
          </div>
          <h2 className={styles.label}>ALTURA</h2>
          {errors.height
                ?errors.height.map((error) => {return <p className={styles.error}>{error}</p>})
                :<></>}
          <div className={styles.inputLabelGroup}>
            <div className={styles.inputLabelShort}>
                <label className={styles.label} htmlFor="minHeight">
                    Minima:
                </label>
                <input
                  type="text"
                  className={`${styles.input} ${errors.height.length !== 0
                                    ?styles.inputIncorrect
                                    :styles.inputCorrect}`}
                  name="minHeight"
                  value={newDog.minHeight}
                  onChange={handleChange}
                ></input>
            </div>
            <div className={styles.inputLabelShort}>
                <label className={styles.label} htmlFor="maxHeight">
                    Maxima:
                </label>
                <input
                  type="text"
                  className={`${styles.input} ${errors.height.length !== 0
                                    ?styles.inputIncorrect
                                    :styles.inputCorrect}`}
                  name="maxHeight"
                  value={newDog.maxHeight}
                  onChange={handleChange}
                ></input>
            </div>
          </div>
          <h2 className={styles.label}>PESO</h2>
          {errors.weigth
                ?errors.weigth.map((error) => {return <p className={styles.error}>{error}</p>})
                :<></>}
          <div className={styles.inputLabelGroup}>
            <div className={styles.inputLabelShort}>
                <label className={styles.label} htmlFor="minWeigth">
                    Minimo:
                </label>
                <input
                  type="text"
                  className={`${styles.input} ${errors.weight.length !== 0
                                    ?styles.inputIncorrect
                                    :styles.inputCorrect}`}
                  name="minWeigth"
                  value={newDog.minWeigth}
                  onChange={handleChange}
                ></input>
            </div>
            <div className={styles.inputLabelShort}>
                <label className={styles.label} htmlFor="maxWeigth">
                    Maximo:
                </label>
                <input
                  type="text"
                  className={`${styles.input} ${errors.weight.length !== 0
                                    ?styles.inputIncorrect
                                    :styles.inputCorrect}`}
                  name="maxWeigth"
                  value={newDog.maxWeigth}
                  onChange={handleChange}
                ></input>
            </div>
          </div>
          {errors.lifeSpan
                ?errors.lifeSpan.map((error) => {return <p className={styles.error}>{error}</p>})
                :<></>}
          <div className={styles.inputLabelGroup}>
                <label className={`${styles.label} ${styles.labelLifeSpan}`} htmlFor="lifeSpan">
                    AÑOS DE VIDA:
                </label>
                <input
                  type="text"
                  className={`${styles.input} ${styles.inputLifeSpan} ${errors.lifeSpan.length !== 0
                                    ?styles.inputIncorrect
                                    :styles.inputCorrect}`}
                  name="lifeSpan"
                  value={newDog.lifeSpan}
                  onChange={handleChange}
                ></input>
          </div>
          <div className={styles.inputLabelGroup}>
                <label className={styles.label} htmlFor="selectedTemp">
                    Agrega los temperamentos:
                </label>
                <input
                    list="temperaments"
                    placeholder="Selecciona.."
                    type="text"
                    className={ styles.input }
                    name="selectedTemp"
                    value={selectedTemp}
                    onChange={handleChange}
                ></input>
                <MdAddCircle className={styles.addButton} onClick={addTemperament}/>
                <datalist name="temperaments" id="temperaments">
                <option value="uno">Uno</option>
                {
                  temperaments.map((temp) => {
                    return <option value={temp}>{temp}</option>
                  })
                }
                </datalist>
          </div>
          <h2 className={`${styles.label} ${styles.labelTemp}`}>TEMPERAMENTOS: {listTemperaments}</h2>
          <button className={styles.buttonSubmit} onClick={handleSubmit}>
          <FaRegSave />
          </button>
        </form>
      </div>
    </div>
  );
}
