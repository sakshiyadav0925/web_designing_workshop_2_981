'use strict';

function showToast(message) {
    const toast = document.getElementById("toast");

    toast.textContent = message;
    toast.classList.add("show");

    setTimeout(() => {
        toast.classList.remove("show");
    }, 2500);
}

const Cart = (() => {

    let items = [];

    function loadCart() {
        const savedCart = localStorage.getItem("amazon_cart");

        if (savedCart) {
            items = JSON.parse(savedCart);
        }

        renderCart();
        updateCartCount();
    }

    function saveCart() {
        localStorage.setItem(
            "amazon_cart",
            JSON.stringify(items)
        );
    }

    function addItem(id, name, price) {

        const existingItem =
            items.find(item => item.id === id);

        if (existingItem) {
            existingItem.qty++;
        }
        else {
            items.push({
                id,
                name,
                price: Number(price),
                qty: 1
            });
        }

        saveCart();
        renderCart();
        updateCartCount();

        showToast(`${name} added to cart`);
    }

    function removeItem(id) {

        items = items.filter(
            item => item.id !== id
        );

        saveCart();
        renderCart();
        updateCartCount();
    }

    function changeQuantity(id, change) {

        const item =
            items.find(item => item.id === id);

        if (!item) return;

        item.qty += change;

        if (item.qty <= 0) {
            removeItem(id);
            return;
        }

        saveCart();
        renderCart();
        updateCartCount();
    }

    function getTotal() {

        return items.reduce(
            (total, item) =>
                total + item.price * item.qty,
            0
        );
    }

    function updateCartCount() {

        const cartCount =
            document.getElementById("cartCount");

        if (!cartCount) return;

        const count =
            items.reduce(
                (sum, item) =>
                    sum + item.qty,
                0
            );

        cartCount.textContent = count;
    }

    function renderCart() {

        const cartItems =
            document.getElementById("cartItems");

        const cartFooter =
            document.getElementById("cartFooter");

        const cartTotal =
            document.getElementById("cartTotal");

        if (!cartItems) return;

        if (items.length === 0) {

            cartItems.innerHTML = `
                <p class="empty-cart">
                    Your cart is empty.
                </p>
            `;

            cartFooter.style.display = "none";

            return;
        }

        cartFooter.style.display = "block";

        cartTotal.textContent =
            "₹" + getTotal().toLocaleString("en-IN");

        cartItems.innerHTML = items.map(item => `
        
            <div class="cart-item">

                <p class="cart-item-name">
                    ${item.name}
                </p>

                <p class="cart-item-price">
                    ₹${item.price.toLocaleString("en-IN")}
                </p>

                <div class="cart-item-controls">

                    <button
                        class="qty-btn decrease-btn"
                        data-id="${item.id}">
                        -
                    </button>

                    <span>
                        ${item.qty}
                    </span>

                    <button
                        class="qty-btn increase-btn"
                        data-id="${item.id}">
                        +
                    </button>

                    <button
                        class="remove-item"
                        data-id="${item.id}">
                        Remove
                    </button>

                </div>

            </div>

        `).join("");

        document
            .querySelectorAll(".increase-btn")
            .forEach(button => {

                button.addEventListener(
                    "click",
                    () => {
                        changeQuantity(
                            button.dataset.id,
                            1
                        );
                    }
                );
            });

        document
            .querySelectorAll(".decrease-btn")
            .forEach(button => {

                button.addEventListener(
                    "click",
                    () => {
                        changeQuantity(
                            button.dataset.id,
                            -1
                        );
                    }
                );
            });

        document
            .querySelectorAll(".remove-item")
            .forEach(button => {

                button.addEventListener(
                    "click",
                    () => {
                        removeItem(
                            button.dataset.id
                        );
                    }
                );
            });
    }

    function openCart() {

        document
            .getElementById("cartSidebar")
            .classList.add("open");

        document
            .getElementById("cartOverlay")
            .classList.add("active");
    }

    function closeCart() {

        document
            .getElementById("cartSidebar")
            .classList.remove("open");

        document
            .getElementById("cartOverlay")
            .classList.remove("active");
    }

    return {
        loadCart,
        addItem,
        openCart,
        closeCart
    };

})();

document.addEventListener(
    "DOMContentLoaded",
    () => {

        Cart.loadCart();

        document
            .getElementById("cartBtn")
            ?.addEventListener(
                "click",
                Cart.openCart
            );

        document
            .getElementById("cartCloseBtn")
            ?.addEventListener(
                "click",
                Cart.closeCart
            );

        document
            .getElementById("cartOverlay")
            ?.addEventListener(
                "click",
                Cart.closeCart
            );

        document
            .querySelectorAll(".add-cart-btn")
            .forEach(button => {

                button.addEventListener(
                    "click",
                    () => {

                        Cart.addItem(
                            button.dataset.id,
                            button.dataset.name,
                            button.dataset.price
                        );
                    }
                );

            });

    }
);