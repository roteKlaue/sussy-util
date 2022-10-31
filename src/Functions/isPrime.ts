export default function(num: number):boolean {
    if (num < 2) {
        return false;
    }

    if (num % 2 === 0) {
        return false;
    }

    for (let i = 3; i <= Math.floor(Math.sqrt(num)); i++) {
            if (num % 2 === 0)
                return false;
    }

    return true;
}