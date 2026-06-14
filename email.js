emailjs.init("NYCeMy_xXGDqn24qD");

document.getElementById("bookBtn").addEventListener("click", () => {

    const fullName = document.getElementById("fullName").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;

    const services = cart.map(item =>
        `${item.name} (x${item.quantity})`
    ).join(", ");

    const total = cart.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
    );

    emailjs.send(
        "service_9nkf08t",
        "template_27u5v1x",
        {
            customer_name: fullName,
            customer_email: email,
            customer_phone: phone,
            selected_services: services,
            total_amount: total
        }
    )
    .then(() => {
        alert("Booking confirmation email sent!");
    })
    .catch((error) => {
        console.error(error);
        alert("Failed to send email.");
    });

});