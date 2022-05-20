// Convert 70500 to 70.5k / Millions to M etc.
export const cutNumber = (number: number): string | number => {
    const SI_SYMBOL = ["", "k", "M", "G", "T", "P", "E"]

    const tier = Math.log10(Math.abs(number)) / 3 | 0
    if(tier === 0) return number

    const suffix = SI_SYMBOL[tier]
    const scale = Math.pow(10, tier * 3)


    const scaled = number / scale;

    return scaled.toFixed(1) + suffix;
}

//Calculate range of displayed repositories in current page
export const calcRepos = (totalRepos: number, currentPage: number):string => {
    let maxRepo = currentPage * 4
    let minRepo = maxRepo - 3
    if(maxRepo > totalRepos){
        maxRepo = totalRepos
    }
    return `${minRepo}-${maxRepo}`
}