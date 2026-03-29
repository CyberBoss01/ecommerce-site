async function pay() {
    const res = await fetch("http://localhost:3000/api/payment/paystack", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({
            email: "user@email.com",
            amount: 5000
        })
    });

    const data = await res.json();
    window.location.href = data.data.authorization_url;
}