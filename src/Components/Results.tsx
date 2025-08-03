interface Prompts {
    isButtonClicked:boolean,
    inputsData:string[],
}

function Results({isButtonClicked, inputsData}:Prompts) {
    let isBlank = false;
    let yearToDisplay, monthToDisplay, dayToDisplay;

    if(isButtonClicked === true) {
        for(let el of inputsData) {
            if(el === "") isBlank = true;
        }

        const today = new Date();
        const currentYear = today.getFullYear();

        if (((Number(inputsData[2]) > currentYear) || (Number(inputsData[2]) < 1900) || isNaN(Number(inputsData[2]))) || ((Number(inputsData[1]) > 12) || (Number(inputsData[1]) < 1) || isNaN(Number(inputsData[1]))) || ((Number(inputsData[0]) > 31) || (Number(inputsData[0]) < 1) || isNaN(Number(inputsData[0])))) isBlank = true;

        if (!isBlank) {
            const today = new Date();
            const day = today.getDate();
            const month = today.getMonth() + 1;
            const year = today.getFullYear();
            const birthDay = Number(inputsData[0]);
            const birthMonth = Number(inputsData[1]);
            const birthYear = Number(inputsData[2]);

            yearToDisplay = year - birthYear;
            monthToDisplay = month - birthMonth;
            dayToDisplay = day - birthDay;

            if (dayToDisplay < 0) {
                monthToDisplay -= 1;

                const prevMonthDays = new Date(year, month - 1, 0).getDate();
                dayToDisplay += prevMonthDays;
            }

            if (monthToDisplay < 0) {
                yearToDisplay -= 1;
                monthToDisplay += 12;
            }
        }
    }

    return (
        <div className='div-results'>
            <div className="d-flex gap-2 align-items-center">
                {(isBlank === true || isButtonClicked === false) ? <h2 className="results-h2">--</h2> : <h2 className="results-h2">{yearToDisplay}</h2>}
                <h1>years</h1>
            </div>

            <div className="d-flex gap-2 align-items-center">
                {(isBlank === true || isButtonClicked === false) ? <h2 className="results-h2">--</h2> : <h2 className="results-h2">{monthToDisplay}</h2>}
                <h1>months</h1>
            </div>

            <div className="d-flex gap-2 align-items-center">
                {(isBlank === true || isButtonClicked === false) ? <h2 className="results-h2">--</h2> : <h2 className="results-h2">{dayToDisplay}</h2>}
                <h1>days</h1>
            </div>
        </div>
    )
}

export default Results
