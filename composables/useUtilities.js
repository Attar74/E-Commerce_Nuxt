export const useUtilities = () => {
    function toTitleCase(str) {
        return `${str.charAt(0).toUpperCase()}${str.slice(1)}`
    }
    return {
        toTitleCase
    }
}