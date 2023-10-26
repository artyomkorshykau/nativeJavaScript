const getItem = <T>(arr: [T]): T => {
    return arr[arr.length - 1]
}

const res = getItem([true])