export function getAge(dateString: string): { years: number, months: number, days: number } {
    const birthDate = new Date(dateString);
    const now = new Date();

    let years = now.getFullYear() - birthDate.getFullYear();
    let months = now.getMonth() - birthDate.getMonth();
    let days = now.getDate() - birthDate.getDate();

    const isBirthdayPassed = now.getDate() >= birthDate.getDate();

    if (months < 0 || (months === 0 && !isBirthdayPassed)) {
        years--;
        months += 12;
    }

    if (!isBirthdayPassed) {
        now.setMonth(now.getMonth() - 1);
        days += (new Date(now.getFullYear(), now.getMonth() + 1, 0)).getDate();
        months--;
    }

    return { years, months, days };
}
