function showReminder() {
    alert('Lembre-se de beber água');
}

function toggleNotifications() {
    const notificationCheckbox =
document.getElementById('notificationCheckbox');

    if (notificationCheckbox.checked) {
        if (Notification.permission !=='granted') {

Notification.requestPermission().then(permission => {
                if (permission ==='granted') {
                    scheduleNotifications();
                }
            });
        } else {
            scheduleNotifications();
        }
    }
}

function scheduleNotifications() {
    setInterval(function() {
        showNotification();
    },10* 60* 1000);
}

function showNotification() {
    const notification = new Notification('Lembrete de Água', {
        body: 'Não se esqueça de beber água!',
    });
}