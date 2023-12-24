const formatDate = (d) => {

    const date = new Date(d);

    return date.toLocaleDateString('bn-BD', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });

}

const formatNumber = (n) => {

    return Intl.NumberFormat('bn-BD').format(n);
}

const formatDateTime = (d) => {

    const date = new Date(d);

    return date.toLocaleDateString('bn-BD', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric'
    });
}

const calculateDuration = (s, e) => {

        const start = new Date(s);
        const end = new Date(e);

        const diff = end.getTime() - start.getTime();

        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor(diff / (1000 * 60 * 60));
        const minutes = Math.floor(diff / (1000 * 60));
        const seconds = Math.floor(diff / 1000);

        if (days > 0) {
            return `${days} days`;
        } else if (hours > 0) {
            return `${hours} hours`;
        } else if (minutes > 0) {
            return `${minutes} minutes`;
        } else {
            return `${seconds} seconds`;
        }
}



export {
    formatDate, formatNumber, formatDateTime, calculateDuration
}
