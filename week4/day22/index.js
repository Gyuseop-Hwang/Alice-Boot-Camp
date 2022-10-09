const input = document.getElementById('inputName');

let alertTimer;
input.addEventListener('input', function (evt) {

  if (alertTimer) clearTimeout(alertTimer);

  console.log('currentTarget', evt.currentTarget)
  alertTimer = setTimeout(() => {
    // alert(this.value);
    // alert(evt.target.value)
    console.log('target', evt.target)
    console.log('currentTarget', evt.currentTarget)
    // alert(evt.currentTarget.value);
  }, 1000);

});