document.getElementById('header-container').style.backgroundColor = 'rgb(40, 190, 130)';
document.getElementsByClassName('emergency-tasks')[0].style.backgroundColor = 'pink';
document.getElementsByClassName('no-emergency-tasks')[0].style.backgroundColor = 'rgb(250, 250, 100)';

let emergencyTasksTitle = document.querySelectorAll('.emergency-tasks h3');
emergencyTasksTitle[0].style.backgroundColor = 'rgb(180, 10, 230)';
emergencyTasksTitle[1].style.backgroundColor = 'rgb(180, 10, 230)';

let noEmergencyTasksTitle = document.querySelectorAll('.no-emergency-tasks h3');
noEmergencyTasksTitle[0].style.backgroundColor = 'black';
noEmergencyTasksTitle[1].style.backgroundColor = 'black';

document.getElementById('footer-container').style.backgroundColor = 'rgb(0, 50, 40)'