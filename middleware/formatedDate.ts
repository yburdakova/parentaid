export function getAge(dateString: string): { years: number, months: number } {
    const date = new Date(dateString);
    const now = new Date();

    const yearsDiff = now.getFullYear() - date.getFullYear();
    const monthsDiff = now.getMonth() - date.getMonth();

    let years = yearsDiff;
    let months = monthsDiff;

    if (months < 0) {
        years--;
        months += 12;
    }

    return { years, months };
}
