const allOptions = {
    1: "rock",
    2: "paper",
    3: "scissors"
};

const doesItWin = {
    1: {
        1: false,
        2: false,
        3: true,
    },
    2: {
        1: true,
        2: false,
        3: false,
    },
    3: {
        1: false,
        2: true,
        3: false
    }
};

export const userAgainstMachine = (whatChoosedUser, whatChoosedMachine) => {
    let user = whatChoosedUser;
    let machine = whatChoosedMachine;

    if (isNaN(user) && isNaN(machine)) {
        throw Error("Not valid options");
    }

    return doesItWin[user][machine];
};