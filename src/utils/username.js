export function generateUsername(fullname) {
    const lowerCaseName = fullname.toLowerCase().split(' ').join('-');
    const randomNumbers = Math.floor(1000 + Math.random() * 9000);
    return `${lowerCaseName}-${randomNumbers}`;
}

export function getInitials (fullName) {
    const names = fullName.split(' ');
    return names.map((name) => name[0]).join('').toUpperCase();
}