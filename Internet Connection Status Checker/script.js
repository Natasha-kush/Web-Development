

window.addEventListener("load", checkInternetConnection);

function checkInternetConnection() {

    const statustext = document.getElementById('statusText');
    const ipaddress = document.getElementById('IPText');
    const networkstrength = document.getElementById('networkText');

    statustext.textContent = 'checking...';

    if (navigator.onLine) {
        fetch('https://api.ipify.org?format=json')
            .then((response) => response.json())
            .then((data) => {
              ipaddress.textContent = data.ip;
              statustext.textContent ='connected'

              const connection = navigator.connection;
              const netStrength = connection ? connection.downlink + 'Mbps' : 'unknown';
              networkstrength.textContent = netStrength;
            })
            .catch(() => {
                statustext.textContent = 'Disconnected';
                ipaddress.textContent = '-';
                networkstrength.textContent = '-';
            })

    } else {
        statustext.textContent = 'Disconnected';
        ipaddress.textContent = '-';
        networkstrength.textContent = '-';
    }
}