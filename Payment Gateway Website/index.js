var options = {
    "key": "rzp_test_VSH3xMB5QD2Qqe", 
    "amount": "50000", 
    "currency": "INR",
    "name": "The Sparks Foundation",
    "description": "Test Transaction",
    "image":"https://internship.thesparksfoundation.info/assests/img/logo.png",
    "order_id": "order_I6XH5bDWGnaRhJ", 
    "handler": function (response){
        alert(response.razorpay_payment_id);
        alert(response.razorpay_order_id);
        alert(response.razorpay_signature)
    },
    "notes": {
        "address": "Razorpay Corporate Office"
    },
    "theme": {
        "color": "#3399cc"
    }
    };
    var rzp1 = new Razorpay(options);
    rzp1.on('payment.failed', function (response){
        alert(response.error.code);
        alert(response.error.description);
        alert(response.error.source);
        alert(response.error.step);
        alert(response.error.reason);
        alert(response.error.metadata.order_id);
        alert(response.error.metadata.payment_id);
    });
    document.getElementById('rzp-button1').onclick = function(e){
    rzp1.open();
    e.preventDefault();
    }