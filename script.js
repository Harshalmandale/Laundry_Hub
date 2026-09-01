// /* ==========================6
//    MOBILE MENU TOGGLE
// ========================== */

// const menuBtn = document.getElementById("menuBtn");
// const navLinks = document.getElementById("navLinks");

// menuBtn.addEventListener("click", () => {
//     navLinks.classList.toggle("active");
// });

// /* ==========================
//    SMOOTH SCROLL HERO BUTTON
// ========================== */

// document.getElementById("heroBtn")
// .addEventListener("click", () => {
//     document.getElementById("booking")
//     .scrollIntoView({
//         behavior: "smooth"
//     });
// });

// /* ==========================
//    CART FUNCTIONALITY
// ========================== */

// let cart = [];

// function addItem(name, price){

//     const existingItem = cart.find(
//         item => item.name === name
//     );

//     if(existingItem){
//         existingItem.quantity++;
//     }else{
//         cart.push({
//             name,
//             price,
//             quantity: 1
//         });
//     }

//     renderCart();
// }

// function removeItem(name){

//     const item = cart.find(
//         item => item.name === name
//     );

//     if(!item){
//         return;
//     }

//     item.quantity--;

//     if(item.quantity <= 0){
//         cart = cart.filter(
//             cartItem => cartItem.name !== name
//         );
//     }

//     renderCart();
// }

// /* ==========================
//    RENDER CART
// ========================== */

// function renderCart(){

//     const cartItems =
//         document.getElementById("cartItems");

//     const totalAmount =
//         document.getElementById("totalAmount");

//     if(cart.length === 0){

//         cartItems.innerHTML = `
//             <p class="empty-cart">
//                 No items added.
//             </p>
//         `;

//         totalAmount.textContent = 0;

//         return;
//     }

//     cartItems.innerHTML = "";

//     let total = 0;

//     cart.forEach(item => {

//         const subtotal =
//             item.price * item.quantity;

//         total += subtotal;

//         cartItems.innerHTML += `
//             <div class="cart-item">

//                 <div class="cart-info">

//                     <h4>${item.name}</h4>

//                     <span>
//                         ₹${item.price}
//                         ×
//                         ${item.quantity}
//                     </span>

//                 </div>

//                 <div class="cart-price">
//                     ₹${subtotal}
//                 </div>

//             </div>
//         `;
//     });

//     totalAmount.textContent = total;
// }

// /* ==========================
//    EMAILJS INITIALIZATION
// ========================== */

// /*
// Replace the values below
// with your EmailJS credentials.
// */

// emailjs.init("YOUR_PUBLIC_KEY");

// /* ==========================
//    BOOK NOW
// ========================== */

// document.getElementById("bookBtn")
// .addEventListener("click", () => {

//     const fullName =
//         document.getElementById("fullName")
//         .value.trim();

//     const email =
//         document.getElementById("email")
//         .value.trim();

//     const phone =
//         document.getElementById("phone")
//         .value.trim();

//     const bookingMessage =
//         document.getElementById(
//             "bookingMessage"
//         );

//     bookingMessage.textContent = "";

//     /* Validation */

//     if(
//         fullName === "" ||
//         email === "" ||
//         phone === ""
//     ){

//         bookingMessage.style.color =
//             "#dc2626";

//         bookingMessage.textContent =
//             "Please fill all fields.";

//         return;
//     }

//     if(cart.length === 0){

//         bookingMessage.style.color =
//             "#dc2626";

//         bookingMessage.textContent =
//             "Please add at least one service.";

//         return;
//     }

//     const total =
//         cart.reduce(
//             (sum,item) =>
//             sum + (item.price * item.quantity),
//             0
//         );

//     const services =
//         cart.map(item =>
//             `${item.name}
//             (x${item.quantity})`
//         ).join(", ");

//     emailjs.send(
//         "YOUR_SERVICE_ID",
//         "YOUR_TEMPLATE_ID",
//         {
//             customer_name: fullName,
//             customer_email: email,
//             customer_phone: phone,
//             selected_services: services,
//             total_amount: total
//         }
//     )
//     .then(() => {

//         bookingMessage.style.color =
//             "#16a34a";

//         bookingMessage.textContent =
//             "Thank you For Booking the Service. We will get back to you soon!";

//         /* Reset */

//         document.getElementById(
//             "fullName"
//         ).value = "";

//         document.getElementById(
//             "email"
//         ).value = "";

//         document.getElementById(
//             "phone"
//         ).value = "";

//         cart = [];

//         renderCart();

//     })
//     .catch(() => {

//         bookingMessage.style.color =
//             "#dc2626";

//         bookingMessage.textContent =
//             "Failed to send confirmation email.";
//     });

// });

// /* ==========================
//    NEWSLETTER SUBSCRIPTION
// ========================== */

// document.getElementById("subscribeBtn")
// .addEventListener("click", () => {

//     const name =
//         document.getElementById(
//             "subscriberName"
//         ).value.trim();

//     const email =
//         document.getElementById(
//             "subscriberEmail"
//         ).value.trim();

//     const message =
//         document.getElementById(
//             "subscribeMessage"
//         );

//     message.textContent = "";

//     if(
//         name === "" ||
//         email === ""
//     ){

//         message.style.color =
//             "#dc2626";

//         message.textContent =
//             "Please enter all details.";

//         return;
//     }

//     message.style.color =
//         "#16a34a";

//     message.textContent =
//         "Thank you for subscribing to our newsletter!";

//     document.getElementById(
//         "subscriberName"
//     ).value = "";

//     document.getElementById(
//         "subscriberEmail"
//     ).value = "";
// });

// /* ==========================
//    INITIAL RENDER
// ========================== */

// renderCart();

// emailjs.init("NYCeMy_xXGDqn24qD");

// document.getElementById("bookBtn").addEventListener("click", () => {

//     const fullName = document.getElementById("fullName").value;
//     const email = document.getElementById("email").value;
//     const phone = document.getElementById("phone").value;

//     const services = cart.map(item =>
//         `${item.name} (x${item.quantity})`
//     ).join(", ");

//     const total = cart.reduce(
//         (sum, item) => sum + item.price * item.quantity,
//         0
//     );

//     emailjs.send(
//         "service_9nkf08t",
//         "template_27u5v1x",
//         {
//             customer_name: fullName,
//             customer_email: email,
//             customer_phone: phone,
//             selected_services: services,
//             total_amount: total
//         }
//     )
//     .then(() => {
//         alert("Booking confirmation email sent!");
//     })
//     .catch((error) => {
//         console.error(error);
//         alert("Failed to send email.");
//     });

// });


/* ==========================
   MOBILE MENU TOGGLE
========================== */

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});


/* ==========================
   CLOSE MOBILE MENU
========================== */

document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("active");
    });
});


/* ==========================
   HERO BUTTON
========================== */

document.getElementById("heroBtn").addEventListener("click", () => {

    document.getElementById("booking").scrollIntoView({
        behavior: "smooth"
    });

});


/* ==========================
   CART
========================== */

let cart = [];


function addItem(name, price) {

    const existingItem = cart.find(
        item => item.name === name
    );

    if (existingItem) {

        existingItem.quantity++;

    } else {

        cart.push({
            name: name,
            price: price,
            quantity: 1
        });

    }

    renderCart();
}


/* ==========================
   REMOVE ITEM
========================== */

function removeItem(name) {

    const item = cart.find(
        item => item.name === name
    );

    if (!item) {
        return;
    }

    item.quantity--;

    if (item.quantity <= 0) {

        cart = cart.filter(
            cartItem => cartItem.name !== name
        );

    }

    renderCart();
}


/* ==========================
   RENDER CART
========================== */

function renderCart() {

    const cartItems =
        document.getElementById("cartItems");

    const totalAmount =
        document.getElementById("totalAmount");


    if (cart.length === 0) {

        cartItems.innerHTML = `
            <p class="empty-cart">
                No items added.
            </p>
        `;

        totalAmount.textContent = "0";

        return;
    }


    cartItems.innerHTML = "";

    let total = 0;


    cart.forEach(item => {

        const subtotal =
            item.price * item.quantity;

        total += subtotal;


        cartItems.innerHTML += `
            <div class="cart-item">

                <div class="cart-info">

                    <h4>${item.name}</h4>

                    <span>
                        ₹${item.price} × ${item.quantity}
                    </span>

                </div>

                <div class="cart-price">
                    ₹${subtotal}
                </div>

            </div>
        `;

    });


    totalAmount.textContent = total;
}


/* ==========================
   EMAILJS
========================== */

emailjs.init({
    publicKey: "NYCeMy_xXGDqn24qD"
});


/* ==========================
   BOOK NOW
========================== */

document.getElementById("bookBtn").addEventListener("click", async () => {

    const fullName =
        document.getElementById("fullName")
        .value.trim();

    const email =
        document.getElementById("email")
        .value.trim();

    const phone =
        document.getElementById("phone")
        .value.trim();

    const bookingMessage =
        document.getElementById("bookingMessage");

    const bookBtn =
        document.getElementById("bookBtn");


    bookingMessage.textContent = "";


    /* ==========================
       REQUIRED FIELD VALIDATION
    ========================== */

    if (
        fullName === "" ||
        email === "" ||
        phone === ""
    ) {

        bookingMessage.style.color = "#dc2626";

        bookingMessage.textContent =
            "Please fill all fields.";

        return;
    }


    /* ==========================
       EMAIL VALIDATION
    ========================== */

    const emailPattern =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {

        bookingMessage.style.color = "#dc2626";

        bookingMessage.textContent =
            "Please enter a valid email address.";

        return;
    }


    /* ==========================
       PHONE VALIDATION
    ========================== */

    if (!/^[0-9]{10}$/.test(phone)) {

        bookingMessage.style.color = "#dc2626";

        bookingMessage.textContent =
            "Please enter a valid 10-digit phone number.";

        return;
    }


    /* ==========================
       CART VALIDATION
    ========================== */

    if (cart.length === 0) {

        bookingMessage.style.color = "#dc2626";

        bookingMessage.textContent =
            "Please add at least one service.";

        return;
    }


    /* ==========================
       CALCULATE TOTAL
    ========================== */

    const total = cart.reduce(
        (sum, item) => {
            return sum + (item.price * item.quantity);
        },
        0
    );


    /* ==========================
       GET SERVICES
    ========================== */

    const services = cart.map(item => {

        return `${item.name} (x${item.quantity})`;

    }).join(", ");


    /* ==========================
       DISABLE BUTTON
    ========================== */

    bookBtn.disabled = true;

    bookBtn.textContent = "Sending...";


    /* ==========================
       SEND EMAIL
    ========================== */

    try {

        await emailjs.send(
            "service_5km8jfj", 
            "template_fne719u",
            {
                customer_name: fullName,
                customer_email: email,
                customer_phone: phone,
                selected_services: services,
                total_amount: total
            }
        );


        /* ==========================
           SUCCESS MESSAGE
        ========================== */

        bookingMessage.style.color = "#16a34a";

        bookingMessage.textContent =
            "Thank you for booking! We will get back to you soon.";


        /* ==========================
           CLEAR FORM
        ========================== */

        document.getElementById("fullName").value = "";

        document.getElementById("email").value = "";

        document.getElementById("phone").value = "";


        /* ==========================
           CLEAR CART
        ========================== */

        cart = [];

        renderCart();


    } catch (error) {

        console.error("EmailJS Error:", error);

        bookingMessage.style.color = "#dc2626";

        bookingMessage.textContent =
            "Failed to send booking. Please try again.";

    }


    /* ==========================
       ENABLE BUTTON
    ========================== */

    bookBtn.disabled = false;

    bookBtn.textContent = "Book Now";

});


/* ==========================
   NEWSLETTER
========================== */

document.getElementById("subscribeBtn").addEventListener("click", () => {

    const name =
        document.getElementById("subscriberName")
        .value.trim();

    const email =
        document.getElementById("subscriberEmail")
        .value.trim();

    const message =
        document.getElementById("subscribeMessage");


    message.textContent = "";


    if (
        name === "" ||
        email === ""
    ) {

        message.style.color = "#dc2626";

        message.textContent =
            "Please enter all details.";

        return;
    }


    const emailPattern =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


    if (!emailPattern.test(email)) {

        message.style.color = "#dc2626";

        message.textContent =
            "Please enter a valid email address.";

        return;
    }


    message.style.color = "#16a34a";

    message.textContent =
        "Thank you for subscribing to our newsletter!";


    document.getElementById(
        "subscriberName"
    ).value = "";

    document.getElementById(
        "subscriberEmail"
    ).value = "";

});


/* ==========================
   INITIAL CART
========================== */

renderCart();
