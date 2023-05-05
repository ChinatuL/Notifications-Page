const btn = document.querySelector(".notifications__header-btn");
const notificationBadge = document.querySelector(
    ".notifications__header-badge"
);
const notifications = document.querySelectorAll(".notification__item");
const unreadBadge = document.querySelector(".notifications__header-badge");
const unreadNotifications = document.querySelectorAll(".unread")

let count = unreadNotifications.length;

notifications.forEach((notification) => {
    notification.addEventListener("click", () => {
        if (notification.parentElement.classList.contains("unread")) {
            notification.lastElementChild.lastElementChild.previousElementSibling.classList.add(
                "hide-badge"
            );
            notification.parentElement.classList.remove("unread");
            count--;
            unreadBadge.innerHTML = count;
        }
    });
});

btn.addEventListener("click", () => {
    notifications.forEach((notification) => {
        notification.lastElementChild.lastElementChild.previousElementSibling.classList.add(
            "hide-badge"
        );
        notification.parentElement.classList.remove("unread");
        unreadBadge.innerHTML = 0;
    })
})
