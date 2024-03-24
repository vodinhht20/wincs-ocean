const submitContact = document.querySelector('#submitContact');

submitContact.onclick = (event) => {
        event.preventDefault();
        const companyName = $('.foooter form input')[0].value;
        const emailName = $('.foooter form input')[1].value;
        const mobilePhone = $('.foooter form input')[2].value;
        const requestInp = $('.foooter textarea').val();

        fetch(`https://phimhay360.com/api/send-email?companyNameInp=${companyName}&emailInp=${emailName}&phoneInp=${mobilePhone}&requestInp=${requestInp}`, {
            method:   'GET',
            'Accept': 'application/json',
            headers: {'Content-Type': 'application/x-www-form-urlencoded'}
        }).then(response => response.json()).then(data => {
            console.log('data', data);
            if (data.success) {
                alert('Email has been sent ☑️');
            } else {
                alert('Error ❌');
            }
        });
}
