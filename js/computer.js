export const machineThinking = (optionUser = null) => {
    let valueGenerated = Math.floor(Math.random() * 10);
    if (optionUser){}
    else{
        while (!(valueGenerated > 0 && valueGenerated < 4)){
            valueGenerated = Math.floor(Math.random() * 10);
        }
    }
    return valueGenerated;
};