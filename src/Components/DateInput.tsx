import { Dispatch, SetStateAction } from "react";

interface Prompts {
    isButtonClicked: boolean,
    setButtonClickState: Dispatch<SetStateAction<boolean>>;
    inputsData: string[];
    setInputsData: Dispatch<SetStateAction<string[]>>;
}

function DateInput({isButtonClicked, setButtonClickState, inputsData, setInputsData}:Prompts) { 
    function handleClick() {
        event?.preventDefault();
        
        setButtonClickState(true);

        let inputs = document.getElementsByTagName('input');
        let inputsData = [];

        for (let el of inputs) {
        inputsData.push(el.value);
        }

        setInputsData(inputsData);
    }

    let classNameInput0, classNameInput1, classNameInput2, warningText0="", warningText1, warningText2;

    if (isButtonClicked === true) {
        const today = new Date();
        const currentYear = today.getFullYear();

        if(inputsData[0] === "") {
            classNameInput0 = "active"
            warningText0 = "This field is required"
        } else if((Number(inputsData[0]) > 31) || (Number(inputsData[0]) < 1) || isNaN(Number(inputsData[0]))) {
            classNameInput0 = "active"
            warningText0 = "Must be a valid day"
        } else {
            classNameInput0 = "inactive"
        }

        if(inputsData[1] === "") {
            classNameInput1 = "active"
            warningText1 = "This field is required"
        } else if((Number(inputsData[1]) > 12) || (Number(inputsData[1]) < 1) || isNaN(Number(inputsData[1]))) {
            classNameInput1 = "active"
            warningText1 = "Must be a valid month"
        } else {
            classNameInput1 = "inactive"
        }

        if(inputsData[2] === "") {
            classNameInput2 = "active"
            warningText2 = "This field is required"
        } else if((Number(inputsData[2]) > currentYear) || (Number(inputsData[2]) < 1900) || isNaN(Number(inputsData[2]))) {
            classNameInput2 = "active"
            warningText2 = "Must be a valid year"
        } else {
            classNameInput2 = "inactive"
        }
    }

    return (
        <>
            <form className="d-flex gap-3 text-start">
                <div>
                    <label htmlFor="label-day" className={classNameInput0}>DAY</label>
                    <br/>
                    <input type="text" placeholder='DD' className={classNameInput0} id="label-day"/>
                    <p className={classNameInput0}>{warningText0}</p>
                </div>

                <div>
                    <label htmlFor="label-month" className={classNameInput1}>MONTH</label>
                    <br/>
                    <input type="text" placeholder='MM' className={classNameInput1} id="label-month"/>
                    <p className={classNameInput1}>{warningText1}</p>
                </div>

                <div>
                   <label htmlFor="label-year" className={classNameInput2}>YEAR</label>
                    <br/>
                    <input type="text" placeholder='YYYY' className={classNameInput2} id="label-year"/>
                    <p className={classNameInput2}>{warningText2}</p>
                </div>
            </form>

            <div className="d-flex align-items-center middle-div">
                <hr className="w-100 mb-3"/>
                <button className="btn rounded-circle p-3" onClick={handleClick}>
                    <img src="/AgeCalculatorApp/assets/images/icon-arrow.svg" alt="arrow" width={30}/>
                </button>
            </div>

        </>
    )
}

export default DateInput
